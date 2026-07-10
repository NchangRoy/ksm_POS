import { offlineDb } from './db';
import type { LocalClient, LocalNumberingSetting, LocalProduct } from './db';
import { isFullyOnline } from './connectivity';
import { getProducts, getClients, getNumberingSettings, type SellerSession } from '../api';

export const syncReferenceData = async (session: SellerSession): Promise<void> => {
  if (!session?.organizationId) return;
  if (!(await isFullyOnline())) return;

  const orgId = session.organizationId;

  try {
    const [products, clients, numberingSettings] = await Promise.all([
      getProducts(session),
      getClients(session),
      getNumberingSettings(session),
    ]);

    await offlineDb.transaction(
      'rw',
      offlineDb.products,
      offlineDb.clients,
      offlineDb.numberingSettings,
      async () => {
        const existingProducts = await offlineDb.products.where('organizationId').equals(orgId).toArray();
        const existingClients = await offlineDb.clients.where('organizationId').equals(orgId).toArray();
        const existingSettings = await offlineDb.numberingSettings.where('organizationId').equals(orgId).toArray();

        await Promise.all(existingProducts.map((p) => offlineDb.products.delete(p.idProduit)));
        await Promise.all(existingClients.map((c) => offlineDb.clients.delete(c.idClient)));
        await Promise.all(existingSettings.map((s) => offlineDb.numberingSettings.delete(s.id)));

        await offlineDb.products.bulkAdd(
          products.filter((p) => p.idProduit).map((p): LocalProduct => ({ ...p, organizationId: orgId }))
        );
        await offlineDb.clients.bulkAdd(
          clients.filter((c) => c.idClient).map((c): LocalClient => ({ ...c, organizationId: orgId }))
        );
        await offlineDb.numberingSettings.bulkAdd(
          numberingSettings
            .filter((s) => s.typeNumerotation)
            .map((s): LocalNumberingSetting => ({
              id: `${orgId}:${s.typeNumerotation}`,
              organizationId: orgId,
              typeNumerotation: s.typeNumerotation!,
              setting: s as Record<string, unknown>,
            }))
        );
      }
    );
  } catch (err) {
    console.error('[ReferenceSync] Failed:', err);
  }
};

export const getLocalProducts = async (organizationId: string): Promise<LocalProduct[]> => {
  return offlineDb.products.where('organizationId').equals(organizationId).toArray();
};

export const getLocalClients = async (organizationId: string): Promise<LocalClient[]> => {
  return offlineDb.clients.where('organizationId').equals(organizationId).toArray();
};

export const getLocalNumberingSetting = async (
  organizationId: string,
  type: 'DEVIS' | 'FACTURE'
): Promise<LocalNumberingSetting | undefined> => {
  return offlineDb.numberingSettings.get(`${organizationId}:${type}`);
};
