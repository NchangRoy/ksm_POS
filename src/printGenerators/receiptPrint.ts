import { SellerSession } from "../lib/api";

// 80mm thermal-receipt layout for a completed POS sale — distinct from
// facturePrint.ts's A4 layout, which is for formally issued/emailed invoices,
// not what a cashier hands over at the till.
export const generateReceiptHTML = (
  data: any,
  seller: SellerSession
): string => {

  const formatCurrency = (num: number = 0) =>
    new Intl.NumberFormat('en-GB').format(Math.round(num));

  const formatDateTime = (dateStr?: string) => {
    const d = dateStr ? new Date(dateStr) : new Date();
    return d.toLocaleString('en-GB', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  };

  const lines = (data.lignesFacture ?? []).map((item: any) => `
    <div class="line-item">
      <div class="item-name">${item.description ?? item.nomProduit ?? ''}</div>
      <div class="item-detail">
        <span>${item.quantite} x ${formatCurrency(item.prixUnitaire)}</span>
        <span>${formatCurrency(item.montantTotal)}</span>
      </div>
    </div>
  `).join('');

  const total = data.finalAmount ?? data.montantTTC ?? data.montantHT ?? 0;
  const balanceDue = data.montantRestant ?? 0;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Receipt - ${data.numeroFacture ?? ''}</title>
    <style>
        * { box-sizing: border-box; -webkit-print-color-adjust: exact; }
        body { font-family: 'Courier New', monospace; margin: 0; padding: 0; background: #e2e8f0; }
        .receipt { width: 300px; margin: 0 auto; background: white; padding: 16px 14px; color: #0f172a; box-shadow: 0 10px 25px rgba(0,0,0,0.15); }
        .center { text-align: center; }
        .org-name { font-size: 16px; font-weight: 700; text-transform: uppercase; margin: 0 0 2px 0; }
        .small { font-size: 10px; color: #334155; margin: 1px 0; }
        .divider { border-top: 1px dashed #94a3b8; margin: 10px 0; }
        .divider-solid { border-top: 2px solid #0f172a; margin: 10px 0; }
        .meta-row { display: flex; justify-content: space-between; font-size: 11px; margin: 2px 0; }
        .line-item { margin-bottom: 6px; }
        .item-name { font-size: 11px; font-weight: 700; }
        .item-detail { display: flex; justify-content: space-between; font-size: 11px; }
        .totals-row { display: flex; justify-content: space-between; font-size: 11px; margin: 2px 0; }
        .grand-total { display: flex; justify-content: space-between; font-size: 16px; font-weight: 700; margin-top: 6px; }
        .balance-paid { color: #059669; font-weight: 700; }
        .balance-due { color: #dc2626; font-weight: 700; }
        .footer-text { font-size: 10px; color: #475569; margin-top: 10px; }
        .logo-box { width: 56px; height: 56px; margin: 0 auto 8px; border-radius: 12px; background: #0f172a; color: white; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 22px; overflow: hidden; }
        .logo-img { width: 100%; height: 100%; object-fit: contain; }
        @media print { body { background: white; } .receipt { box-shadow: none; } @page { size: 80mm auto; margin: 0; } }
    </style>
</head>
<body>
    <div class="receipt">
        <div class="center">
            <div class="logo-box">
                ${seller.organizationLogoUri
                    ? `<img src="${seller.organizationLogoUri}" class="logo-img" alt="Logo">`
                    : seller.organizationName?.charAt(0) || 'S'}
            </div>
            <p class="org-name">${seller.organizationName ?? ''}</p>
            <p class="small">${seller.agencyAddress ?? ''}</p>
            <p class="small">${seller.agencyCity ?? ''}</p>
            ${seller.taxNumber ? `<p class="small">TAX ID: ${seller.taxNumber}</p>` : ''}
        </div>

        <div class="divider"></div>

        <div class="meta-row"><span>Receipt #</span><span>${data.numeroFacture ?? '-'}</span></div>
        <div class="meta-row"><span>Date</span><span>${formatDateTime(data.dateFacturation)}</span></div>
        <div class="meta-row"><span>Cashier</span><span>${seller.username ?? ''}</span></div>
        <div class="meta-row"><span>Register</span><span>${seller.salePoint ?? ''}</span></div>
        <div class="meta-row"><span>Client</span><span>${data.nomClient ?? ''}</span></div>

        <div class="divider"></div>

        ${lines}

        <div class="divider"></div>

        <div class="totals-row"><span>Subtotal HT</span><span>${formatCurrency(data.montantHT)}</span></div>
        ${data.applyVat ? `<div class="totals-row"><span>VAT</span><span>${formatCurrency(data.montantTVA)}</span></div>` : ''}

        <div class="divider-solid"></div>

        <div class="grand-total"><span>TOTAL</span><span>${formatCurrency(total)} ${data.devise || 'XAF'}</span></div>
        <div class="totals-row" style="margin-top: 6px;">
            <span>Status</span>
            <span class="${balanceDue === 0 ? 'balance-paid' : 'balance-due'}">
                ${balanceDue === 0 ? 'FULLY PAID' : `DUE ${formatCurrency(balanceDue)}`}
            </span>
        </div>

        <div class="divider"></div>

        <div class="center footer-text">
            <p>Thank you for your purchase!</p>
        </div>
    </div>
</body>
</html>`;
};
