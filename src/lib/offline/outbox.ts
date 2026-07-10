import { offlineDb, generateId } from './db';
import type { OutboxAction, OutboxEntry, OutboxStatus } from './db';

export const createOutboxEntry = async (params: {
  action: OutboxAction;
  payload: Record<string, unknown>;
  endpoint: string;
  organizationId: string;
  entityLocalId?: string;
}): Promise<OutboxEntry> => {
  const entry: OutboxEntry = {
    id: generateId(),
    action: params.action,
    payload: params.payload,
    endpoint: params.endpoint,
    method: 'POST',
    timestamp: new Date().toISOString(),
    status: 'PENDING',
    attempts: 0,
    entityLocalId: params.entityLocalId,
    organizationId: params.organizationId,
  };

  await offlineDb.outbox.add(entry);
  return entry;
};

export const getPendingOutbox = async (organizationId?: string): Promise<OutboxEntry[]> => {
  const entries = await offlineDb.outbox.where('status').equals('PENDING').sortBy('timestamp');
  if (!organizationId) return entries;
  return entries.filter((e) => e.organizationId === organizationId);
};

export const getOutboxByStatus = async (status: OutboxStatus): Promise<OutboxEntry[]> => {
  return offlineDb.outbox.where('status').equals(status).sortBy('timestamp');
};

export const getOutboxCount = async (organizationId?: string): Promise<number> => {
  const pending = await getPendingOutbox(organizationId);
  const conflicts = await getOutboxByStatus('CONFLICT');
  const filterOrg = (entries: OutboxEntry[]) =>
    organizationId ? entries.filter((e) => e.organizationId === organizationId) : entries;
  return filterOrg(pending).length + filterOrg(conflicts).length;
};

export const updateOutboxStatus = async (id: string, status: OutboxStatus, lastError?: string): Promise<void> => {
  const entry = await offlineDb.outbox.get(id);
  if (!entry) return;
  await offlineDb.outbox.update(id, {
    status,
    lastError,
    attempts: status === 'SYNCING' ? entry.attempts + 1 : entry.attempts,
  });
};

export const removeOutboxEntry = async (id: string): Promise<void> => {
  await offlineDb.outbox.delete(id);
};

export const retryOutboxEntry = async (id: string): Promise<void> => {
  await offlineDb.outbox.update(id, { status: 'PENDING', lastError: undefined });
};
