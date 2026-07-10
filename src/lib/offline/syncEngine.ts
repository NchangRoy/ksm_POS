import { offlineDb } from './db';
import type { OutboxEntry } from './db';
import { isFullyOnline } from './connectivity';
import { getPendingOutbox, removeOutboxEntry, updateOutboxStatus } from './outbox';

const BASE_URL = 'http://localhost:8080';

let isSyncing = false;
let syncListeners: Array<(count: number) => void> = [];

export const onSyncStatusChange = (listener: (pendingCount: number) => void) => {
  syncListeners.push(listener);
  return () => {
    syncListeners = syncListeners.filter((l) => l !== listener);
  };
};

const notifyListeners = async () => {
  const pending = await getPendingOutbox();
  syncListeners.forEach((l) => l(pending.length));
};

const getStoredToken = (): string => {
  try {
    const raw = localStorage.getItem('seller');
    if (!raw) return '';
    return JSON.parse(raw)?.accessToken ?? '';
  } catch {
    return '';
  }
};

const executeOutboxRequest = async (entry: OutboxEntry): Promise<Response> => {
  const token = getStoredToken();
  return fetch(`${BASE_URL}${entry.endpoint}`, {
    method: entry.method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
      'X-Organization-ID': entry.organizationId,
    },
    body: JSON.stringify(entry.payload),
  });
};

const markDocumentSynced = async (entry: OutboxEntry, created: unknown): Promise<void> => {
  if (!entry.entityLocalId) return;
  await offlineDb.documents.update(entry.entityLocalId, {
    syncStatus: 'synced',
    payload: created as Record<string, unknown>,
  });
};

const markDocumentConflict = async (entry: OutboxEntry): Promise<void> => {
  if (!entry.entityLocalId) return;
  await offlineDb.documents.update(entry.entityLocalId, { syncStatus: 'conflict' });
};

export const processOutbox = async (): Promise<{ synced: number; failed: number }> => {
  if (isSyncing) return { synced: 0, failed: 0 };

  const online = await isFullyOnline();
  if (!online) return { synced: 0, failed: 0 };

  isSyncing = true;
  let synced = 0;
  let failed = 0;

  try {
    const pending = await getPendingOutbox();

    for (const entry of pending) {
      await updateOutboxStatus(entry.id, 'SYNCING');

      try {
        const response = await executeOutboxRequest(entry);

        if (response.ok) {
          const created = await response.json().catch(() => null);
          await removeOutboxEntry(entry.id);
          await markDocumentSynced(entry, created);
          synced++;
          continue;
        }

        const isNetworkError = response.status === 502 || response.status === 503 || response.status === 504;
        const errorText = await response.text().catch(() => response.statusText);

        if (isNetworkError) {
          await updateOutboxStatus(entry.id, 'PENDING', errorText);
          break;
        }

        await updateOutboxStatus(entry.id, 'CONFLICT', errorText);
        await markDocumentConflict(entry);
        failed++;
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Network error';
        await updateOutboxStatus(entry.id, 'PENDING', message);
        break;
      }
    }
  } finally {
    isSyncing = false;
    await notifyListeners();
  }

  return { synced, failed };
};

export const startSyncEngine = (): (() => void) => {
  if (typeof window === 'undefined') return () => {};

  const runSync = () => {
    processOutbox().catch(console.error);
  };

  runSync();
  const interval = setInterval(runSync, 30_000);
  const handleOnline = () => runSync();
  window.addEventListener('online', handleOnline);

  return () => {
    clearInterval(interval);
    window.removeEventListener('online', handleOnline);
  };
};
