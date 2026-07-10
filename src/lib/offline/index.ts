export { offlineDb } from './db';
export type {
  SyncStatus,
  OutboxStatus,
  OutboxAction,
  LocalProduct,
  LocalClient,
  LocalNumberingSetting,
  OutboxEntry,
  LocalDocument,
} from './db';

export { isBrowserOnline, isFullyOnline, pingBackendHealth, subscribeToConnectivity } from './connectivity';
export { useOnlineStatus } from './useOnlineStatus';
export { getOutboxCount, getPendingOutbox, retryOutboxEntry } from './outbox';
export { processOutbox, startSyncEngine, onSyncStatusChange } from './syncEngine';
export { syncReferenceData } from './referenceSync';
export {
  getProductsOfflineFirst,
  getClientsOfflineFirst,
  generateDocumentNumberOfflineFirst,
  createFactureOffline,
  createDevisOffline,
} from './offlineApi';
