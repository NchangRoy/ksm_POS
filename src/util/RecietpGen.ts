import { AgencyResponse, OrganizationResponse, SalesPointResponse } from "../Types/org_data";
import { EmployeeResponse } from "../Types/Seller";
import { CartItem } from "../Types/CartItem";
import { Receipt } from "../Types/Receipt";

// Redefined helper to calculate total with VAT to avoid circular dependencies
const calculateCartGrandTotal = (items: CartItem[]): number => {
  const grandTotal = items.reduce((acc, item) => {
    const discountedUnitPrice = item.unitPrice * (1 - item.discountPercentage / 100);
    return acc + (discountedUnitPrice * item.quantity);
  }, 0);
  return Math.round(grandTotal * 118) / 100;
};

// Helper to format left/right text aligned to a standard receipt line width
const formatLine = (left: string, right: string, width = 40): string => {
  const leftLen = left.length;
  const rightLen = right.length;
  const spacesNeeded = width - leftLen - rightLen;
  if (spacesNeeded > 0) {
    return left + ' '.repeat(spacesNeeded) + right;
  }
  return left + ' ' + right;
};

// ---------------------------------------------------------------
// ESPOS (XML) receipt generator – returns a raw XML string
// ---------------------------------------------------------------
export const GenerateEsposReceipt = (
  organization: OrganizationResponse | undefined,
  agency: AgencyResponse | undefined,
  salesPoint: SalesPointResponse | undefined,
  employee: EmployeeResponse | undefined,
  paymentMethod: string,
  receivedAmount: number,
  changeAmount: number,
  cartItems: CartItem[],
  receiptId: number,
  date: Date
): string => {
  const escape = (str: string | undefined) =>
    (str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

  // ---------- Header ----------
  const header = `
    <align value="CENTER">
      <bold><text size="2x1">${escape(organization?.displayName) || 'POS TERMINAL'}</text></bold>
      <newline/>
      <text size="1x1">${escape(agency?.address) || '123 Commerce St.'}</text>
      <newline/>
      <text size="1x1">${escape(agency?.city)}${agency?.city ? ', ' : ''}${escape(agency?.country)}</text>
      <newline/>
      <text size="1x1">Terminal: ${escape(salesPoint?.terminalCode) || 'TERM-001'} (${escape(salesPoint?.name) || 'Main Counter'})</text>
      <newline/>
      <text size="1x1">Receipt #${receiptId}</text>
      <newline/>
      <text size="1x1">${date.toLocaleDateString()} ${date.toLocaleTimeString()}</text>
      <newline/>
    </align>
  `;

  // ---------- Items ----------
  const itemsXml = (cartItems ?? []).map(item => {
    const basePrice = item.unitPrice ?? item.prixVente ?? 0;
    const price = basePrice * (1 - (item.discountPercentage || 0) / 100);
    const lineTotal = price * item.quantity;

    const qtyPriceText = `${item.quantity} x $${basePrice.toFixed(2)}`;
    const totalText = `$${(basePrice * item.quantity).toFixed(2)}`;

    let itemBlock = `
      <align value="LEFT">
        <bold><text size="1x1">${escape(item.nomProduit)}</text></bold>
        <newline/>
        <text size="1x1">${escape(formatLine(qtyPriceText, totalText))}</text>
        <newline/>
    `;

    if (item.discountPercentage > 0) {
      const savings = (basePrice * (item.discountPercentage / 100)) * item.quantity;
      const discountLeft = `  Discount (${item.discountPercentage}%)`;
      const discountRight = `-$${savings.toFixed(2)}`;
      itemBlock += `
        <text size="1x1">${escape(formatLine(discountLeft, discountRight))}</text>
        <newline/>
      `;
    }

    itemBlock += `</align>`;
    return itemBlock;
  }).join('');

  // ---------- Totals ----------
  const calculatedTotal = calculateCartGrandTotal(cartItems);
  const subtotal = calculatedTotal / 1.18;
  const tax = calculatedTotal - subtotal;

  const totalsXml = `
    <align value="LEFT">
      <text size="1x1">----------------------------------------</text>
      <newline/>
      <text size="1x1">${escape(formatLine('Subtotal (Excl. Tax)', `$${subtotal.toFixed(2)}`))}</text>
      <newline/>
      <text size="1x1">${escape(formatLine('Tax (18%)', `$${tax.toFixed(2)}`))}</text>
      <newline/>
      <bold><text size="1x1">${escape(formatLine('Total (Incl. Tax)', `$${calculatedTotal.toFixed(2)}`))}</text></bold>
      <newline/>
    </align>
  `;

  // ---------- Payment details ----------
  let paymentXml = '';
  if (paymentMethod) {
    paymentXml = `
      <align value="LEFT">
        <text size="1x1">----------------------------------------</text>
        <newline/>
        <text size="1x1">${escape(formatLine('Payment Method', paymentMethod.toUpperCase()))}</text>
        <newline/>
    `;
    if (paymentMethod === 'cash') {
      paymentXml += `
        <text size="1x1">${escape(formatLine('Amount Tendered', `$${receivedAmount.toFixed(2)}`))}</text>
        <newline/>
        <bold><text size="1x1">${escape(formatLine('Change', `$${changeAmount.toFixed(2)}`))}</text></bold>
        <newline/>
      `;
    }
    paymentXml += `</align>`;
  }

  // ---------- Footer ----------
  const footer = `
    <align value="CENTER">
      <text size="1x1">----------------------------------------</text>
      <newline/>
      <text size="1x1">Thank you for your business!</text>
      <newline/>
      <text size="1x1">Please come again.</text>
      <newline/>
      <text size="1x1">Served by: ${escape(employee?.actorDisplayName) || 'Staff'}</text>
      <newline/>
    </align>
  `;

  // Assemble full XML receipt
  const xml = `
    <receipt>
      ${header}
      <align value="LEFT"><text size="1x1">----------------------------------------</text></align>
      <newline/>
      ${itemsXml}
      ${totalsXml}
      ${paymentXml}
      ${footer}
      <cut/>
    </receipt>
  `;

  return xml.trim();
};

// ---------------------------------------------------------------
// HTML receipt generator – returns a raw HTML string for preview
// ---------------------------------------------------------------
export const GenerateHTMLReceipt = (
  organization: OrganizationResponse | undefined,
  agency: AgencyResponse | undefined,
  salesPoint: SalesPointResponse | undefined,
  employee: EmployeeResponse | undefined,
  paymentMethod: string,
  receivedAmount: number,
  changeAmount: number,
  cartItems: CartItem[],
  receiptId: number,
  date: Date
): string => {
  let itemsHtml = '';

  cartItems?.forEach(item => {
    const basePrice = item.unitPrice ?? item.prixVente ?? 0;
    const price = basePrice * (1 - (item.discountPercentage || 0) / 100);
    const itemTotal = price * item.quantity;

    itemsHtml += `
      <div style="margin-bottom: 0.75rem; font-size: 0.75rem; line-height: 1rem;">
        <div style="display: flex; justify-content: space-between;">
          <div style="flex: 1 1 0%; padding-right: 0.5rem;">
            <div style="font-weight: 700; color: #1e293b;">${item.nomProduit}</div>
            <div style="color: #64748b;">${item.quantity} x $${basePrice.toFixed(2)}</div>
          </div>
          <div style="text-align: right; font-weight: 700; color: #1e293b; margin-top: auto;">
            $${(basePrice * item.quantity).toFixed(2)}
          </div>
        </div>
    `;

    if (item.discountPercentage > 0) {
      const savings = (basePrice * (item.discountPercentage / 100)) * item.quantity;
      itemsHtml += `
        <div style="display: flex; justify-content: space-between; color: #ef4444; font-size: 0.7rem; margin-top: 0.1rem; padding-left: 0.5rem; border-left: 2px solid #fee2e2;">
          <span>Discount (${item.discountPercentage}%)</span>
          <span>-$${savings.toFixed(2)}</span>
        </div>
      `;
    }

    itemsHtml += `</div>`;
  });

  const calculatedTotal = calculateCartGrandTotal(cartItems);
  const subtotal = calculatedTotal / 1.18;
  const tax = calculatedTotal - subtotal;

  let paymentDetailsHtml = '';
  if (paymentMethod) {
    paymentDetailsHtml = `
      <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px dashed #cbd5e1; font-size: 0.75rem; line-height: 1rem; color: #475569;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.375rem;">
          <span>Payment Method</span>
          <span style="text-transform: uppercase; font-weight: 700;">${paymentMethod}</span>
        </div>
    `;
    if (paymentMethod === 'cash') {
      paymentDetailsHtml += `
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.375rem;">
          <span>Amount Tendered</span>
          <span>$${receivedAmount.toFixed(2)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-weight: 700;">
          <span>Change</span>
          <span>$${changeAmount.toFixed(2)}</span>
        </div>
      `;
    }
    paymentDetailsHtml += `</div>`;
  }

  const html = `
    <div style="width: 350px; display: flex; flex-direction: column; bg-color: #f8fafc; border-left: 1px solid #e2e8f0; z-index: 10; padding: 1.5rem; overflow: hidden; box-sizing: border-box; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      <div style="font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; margin-bottom: 1rem; text-align: center;">
        Receipt Preview
      </div>
      <div style="background-color: #ffffff; padding: 1.5rem; box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); border: 1px solid #e2e8f0; flex: 1 1 0%; overflow-y: auto; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; font-size: 0.875rem; line-height: 1.25rem; display: flex; flex-direction: column; position: relative;">
        
        <!-- Top perforation effect -->
        <div style="position: absolute; top: -8px; left: 0; right: 0; height: 8px; background: radial-gradient(circle, transparent 4px, #fff 4px); background-size: 10px 10px;"></div>

        <!-- Store Info -->
        <div style="text-align: center; margin-bottom: 1.5rem;">
          <h2 style="font-weight: 700; font-size: 1.25rem; line-height: 1.75rem; margin-bottom: 0.25rem; margin-top: 0;">${organization?.displayName || 'POS TERMINAL'}</h2>
          <p style="font-size: 0.75rem; line-height: 1rem; color: #64748b; margin: 0;">${agency?.address || '123 Commerce St.'}</p>
          <p style="font-size: 0.75rem; line-height: 1rem; color: #64748b; margin: 0;">${agency?.city || 'City'}, ${agency?.country || 'Country'}</p>
          <p style="font-size: 0.75rem; line-height: 1rem; color: #64748b; margin-top: 0.25rem; margin-bottom: 0;">
            Terminal: ${salesPoint?.terminalCode || 'TERM-001'} (${salesPoint?.name || 'Main Counter'})
          </p>
          <p style="font-size: 0.75rem; line-height: 1rem; color: #64748b; margin-top: 0.25rem; margin-bottom: 0;">Receipt #${receiptId}</p>
          <p style="font-size: 0.75rem; line-height: 1rem; color: #64748b; margin: 0;">${date.toLocaleDateString()} ${date.toLocaleTimeString()}</p>
        </div>
        
        <!-- Items -->
        <div style="flex: 1 1 0%; overflow-y: auto; margin-bottom: 1rem; border-top: 1px dashed #cbd5e1; border-bottom: 1px dashed #cbd5e1; padding-top: 1rem; padding-bottom: 0.25rem;">
          ${itemsHtml}
        </div>

        <!-- Totals -->
        <div style="color: #475569;">
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; line-height: 1rem; margin-bottom: 0.375rem;">
            <span>Subtotal (Excl. Tax)</span>
            <span>$${subtotal.toFixed(2)}</span>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; line-height: 1rem; margin-bottom: 0.375rem;">
            <span>Tax (18%)</span>
            <span>$${tax.toFixed(2)}</span>
          </div>
          <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 1rem; line-height: 1.5rem; margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px dashed #cbd5e1; color: #0f172a;">
            <span>Total (Incl. Tax)</span>
            <span>$${calculatedTotal.toFixed(2)}</span>
          </div>
          
          ${paymentDetailsHtml}
        </div>

        <!-- Footer -->
        <div style="text-align: center; margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #f1f5f9; font-size: 10px; color: #94a3b8;">
          <p style="margin: 0; margin-bottom: 0.25rem;">Thank you for your business!</p>
          <p style="margin: 0;">Please come again.</p>
          <p style="margin: 0; margin-top: 0.25rem; font-size: 9px; color: #cbd5e1;">Served by: ${employee?.actorDisplayName || 'Staff'}</p>
        </div>
      </div>
    </div>
  `;

  return html;
};

// ---------------------------------------------------------------
// Shared Receipt Entry Point
// ---------------------------------------------------------------
export const GenerateReceipt = (
  organization: OrganizationResponse | undefined,
  agency: AgencyResponse | undefined,
  salesPoint: SalesPointResponse | undefined,
  employee: EmployeeResponse | undefined,
  paymentMethod: string,
  receivedAmount: number,
  changeAmount: number,
  cartItems: CartItem[]
): Receipt => {
  // Generate unified metadata to keep both HTML and ESPOS sync'd completely
  const receiptId = Math.floor(100000 + Math.random() * 900000); // 6-digit consistent ID
  const date = new Date();

  return {
    htmlReceipt: GenerateHTMLReceipt(
      organization,
      agency,
      salesPoint,
      employee,
      paymentMethod,
      receivedAmount,
      changeAmount,
      cartItems,
      receiptId,
      date
    ),
    esposReceipt: GenerateEsposReceipt(
      organization,
      agency,
      salesPoint,
      employee,
      paymentMethod,
      receivedAmount,
      changeAmount,
      cartItems,
      receiptId,
      date
    )
  };
};

export default GenerateReceipt;