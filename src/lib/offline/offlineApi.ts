import { offlineDb, generateId } from './db';
import { isFullyOnline } from './connectivity';
import { createOutboxEntry } from './outbox';
import { processOutbox } from './syncEngine';
import {
  syncReferenceData,
  getLocalProducts,
  getLocalClients,
  getLocalNumberingSetting,
} from './referenceSync';
import {
  getProducts,
  getClients,
  getNumberingSettings,
  composeDocumentNumber,
  type SellerSession,
} from '../api';

export const getProductsOfflineFirst = async (session: SellerSession): Promise<any[]> => {
  if (!session?.organizationId) return [];

  const local = await getLocalProducts(session.organizationId);
  if (!(await isFullyOnline())) return local;

  try {
    await syncReferenceData(session);
    const fresh = await getLocalProducts(session.organizationId);
    if (fresh.length > 0) return fresh;
    return await getProducts(session);
  } catch {
    if (local.length > 0) return local;
    return await getProducts(session).catch(() => []);
  }
};

export const getClientsOfflineFirst = async (session: SellerSession): Promise<any[]> => {
  if (!session?.organizationId) return [];

  const local = await getLocalClients(session.organizationId);
  if (!(await isFullyOnline())) return local;

  try {
    await syncReferenceData(session);
    const fresh = await getLocalClients(session.organizationId);
    if (fresh.length > 0) return fresh;
    return await getClients(session);
  } catch {
    if (local.length > 0) return local;
    return await getClients(session).catch(() => []);
  }
};

// Same contract as generateDocumentNumber in ../api.ts, but never blocks
// checkout on the network: uses the cached numbering setting when offline
// (or when the live fetch fails), falling back to an unformatted type-only
// number as a last resort so a sale can never be blocked entirely.
export const generateDocumentNumberOfflineFirst = async (
  session: SellerSession,
  type: 'DEVIS' | 'FACTURE',
  hasTva: boolean
): Promise<string> => {
  const online = await isFullyOnline();

  if (online) {
    try {
      const settings = await getNumberingSettings(session);
      const setting = settings.find((s) => s.typeNumerotation === type);
      return composeDocumentNumber(setting, type, hasTva);
    } catch {
      // fall through to cache
    }
  }

  const cached = await getLocalNumberingSetting(session.organizationId, type);
  return composeDocumentNumber(cached?.setting as any, type, hasTva);
};

export const createFactureOffline = async (session: SellerSession, payload: Record<string, unknown>): Promise<any> => {
  const localId = generateId();
  await offlineDb.documents.add({
    localId,
    kind: 'FACTURE',
    organizationId: session.organizationId,
    syncStatus: 'pending',
    payload,
    createdAt: new Date().toISOString(),
  });

  await createOutboxEntry({
    action: 'CREATE_FACTURE',
    payload,
    endpoint: '/api/factures',
    organizationId: session.organizationId,
    entityLocalId: localId,
  });

  if (await isFullyOnline()) processOutbox().catch(console.error);

  return { ...payload, idFacture: localId };
};

export const createDevisOffline = async (session: SellerSession, payload: Record<string, unknown>): Promise<any> => {
  const localId = generateId();
  await offlineDb.documents.add({
    localId,
    kind: 'DEVIS',
    organizationId: session.organizationId,
    syncStatus: 'pending',
    payload,
    createdAt: new Date().toISOString(),
  });

  await createOutboxEntry({
    action: 'CREATE_DEVIS',
    payload,
    endpoint: '/api/devis',
    organizationId: session.organizationId,
    entityLocalId: localId,
  });

  if (await isFullyOnline()) processOutbox().catch(console.error);

  return { ...payload, idDevis: localId };
};
