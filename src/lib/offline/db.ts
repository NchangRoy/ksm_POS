import Dexie, { type Table } from 'dexie';

// crypto.randomUUID() exists at runtime (Electron's Chromium is well past
// the version that added it) but isn't declared in this project's TS/DOM
// lib version — a plain v4-style fallback avoids depending on that typing.
export const generateId = (): string =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

export type SyncStatus = 'synced' | 'pending' | 'syncing' | 'failed' | 'conflict';
export type OutboxStatus = 'PENDING' | 'SYNCING' | 'FAILED' | 'CONFLICT';
export type OutboxAction = 'CREATE_FACTURE' | 'CREATE_DEVIS';

export interface LocalProduct {
  idProduit: string;
  organizationId: string;
  [key: string]: unknown;
}

export interface LocalClient {
  idClient: string;
  organizationId: string;
  [key: string]: unknown;
}

// The numbering setting drives client-side document-number composition
// (see generateDocumentNumber in ../api.ts) — cached so checkout doesn't
// need a live call to /api/settings/organization/{id}/numbering every sale.
export interface LocalNumberingSetting {
  id: string; // `${organizationId}:${type}`
  organizationId: string;
  typeNumerotation: string;
  setting: Record<string, unknown>;
}

export interface OutboxEntry {
  id: string;
  action: OutboxAction;
  payload: Record<string, unknown>;
  endpoint: string;
  method: 'POST';
  timestamp: string;
  status: OutboxStatus;
  attempts: number;
  lastError?: string;
  entityLocalId?: string;
  organizationId: string;
}

// Any Facture/Devis created while offline, so the UI (receipt reprint,
// quotation preview) has something to show before the outbox syncs it.
export interface LocalDocument {
  localId: string;
  kind: 'FACTURE' | 'DEVIS';
  organizationId: string;
  syncStatus: SyncStatus;
  payload: Record<string, unknown>;
  createdAt: string;
}

export class PosOfflineDB extends Dexie {
  products!: Table<LocalProduct, string>;
  clients!: Table<LocalClient, string>;
  numberingSettings!: Table<LocalNumberingSetting, string>;
  documents!: Table<LocalDocument, string>;
  outbox!: Table<OutboxEntry, string>;

  constructor() {
    super('PosOfflineDB');

    this.version(1).stores({
      products: 'idProduit, organizationId, nomProduit, categorie, active',
      clients: 'idClient, organizationId, codeClient, raisonSociale',
      numberingSettings: 'id, organizationId, typeNumerotation',
      documents: 'localId, organizationId, kind, syncStatus, createdAt',
      outbox: 'id, status, timestamp, organizationId, action',
    });
  }
}

export const offlineDb = new PosOfflineDB();
