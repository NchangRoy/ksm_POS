import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  CreditCard,
  Banknote,
  Smartphone,
  Receipt,
  CheckCircle2,
  Clock,
  ArrowRightLeft,
  Printer
} from 'lucide-react';
import ActionNumpad from './Calculator';
import { CartItem } from '../Types/CartItem';
import { ClientResponse } from '../Types/Client';
import { SellerSession, PosSession } from '../lib/api';
import {
  createFactureOffline,
  getClientsOfflineFirst,
  generateDocumentNumberOfflineFirst,
  isFullyOnline,
} from '../lib/offline';
import { generateReceiptHTML } from '../printGenerators/receiptPrint';
import { toast } from 'sonner';

interface PaymentPageProps {
  total: number;
  onBack: () => void;
  cartItems?: CartItem[];
  session?: SellerSession;
  posSession?: PosSession;
  selectedCustomer?: ClientResponse | null;
  onPaymentComplete?: () => void;
}

// Falls back to when no customer was picked at the register — must already
// exist in the org (see the "Anonymous Customer" client created for testing).
const ANONYMOUS_CUSTOMER_CODE = 'CLI-ANON-000';

export const calculateCartGrandTotal = (items: CartItem[]): number => {
  const grandTotal = items.reduce((acc, item) => {
    const discountedUnitPrice = item.unitPrice * (1 - item.discountPercentage / 100);
    return acc + (discountedUnitPrice * item.quantity);
  }, 0);
  // including tva
  return Math.round(grandTotal * 118) / 100;
};

const MODE_REGLEMENT: Record<string, string> = {
  card: 'CARTE_BANCAIRE',
  cash: 'ESPECES',
  mobile: 'MOBILE_MONEY',
  invoice: 'AUTRE',
};

const PaymentPage: React.FC<PaymentPageProps> = ({ total, onBack, cartItems, session, posSession, selectedCustomer, onPaymentComplete }) => {
  const [method, setMethod] = useState('card');
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'processing' | 'paid' | 'error'>('pending');
  const [error, setError] = useState('');

  // Cash Management States
  const [receivedAmount, setReceivedAmount] = useState<string>('');
  const [changeAmount, setChangeAmount] = useState<number>(0);
  const [calculatedTotal, setCalculatedTotal] = useState<number>(total);
  const [clickedContainer, setClickedContainer] = useState<any>(undefined);
  const [isPrinting, setIsPrinting] = useState(false);
  const [facture, setFacture] = useState<any>(null);

  useEffect(() => {
    if (method === 'cash') {
      setClickedContainer({
        type: 'input',
        inputType: 'number',
        data: receivedAmount,
        setData: setReceivedAmount
      });
    } else {
      setClickedContainer(undefined);
    }
  }, [method, receivedAmount]);

  useEffect(() => {
    const received = parseFloat(receivedAmount) || 0;
    const change = received - calculatedTotal;
    setChangeAmount(change > 0 ? change : 0);
  }, [receivedAmount, calculatedTotal]);

  const paymentMethods = [
    { id: 'card', label: 'Credit / Debit Card', icon: CreditCard, description: 'Visa, Mastercard, Amex' },
    { id: 'cash', label: 'Cash', icon: Banknote, description: 'Physical currency' },
    { id: 'mobile', label: 'Mobile Payment', icon: Smartphone, description: 'Apple Pay, Google Pay' },
    { id: 'invoice', label: 'Invoice', icon: Receipt, description: 'Generate billing statement' },
  ];

  useEffect(() => {
    setCalculatedTotal(calculateCartGrandTotal(cartItems ?? []));
  }, [cartItems]);

  const isCashValid = method === 'cash' ? (parseFloat(receivedAmount) >= total) : true;

  const resolveClient = async (): Promise<ClientResponse> => {
    if (selectedCustomer) return selectedCustomer;
    if (!session) throw new Error('No active session.');
    const clients = await getClientsOfflineFirst(session);
    const anonymous = clients.find((c: ClientResponse) => c.codeClient === ANONYMOUS_CUSTOMER_CODE);
    if (!anonymous) {
      throw new Error("No customer selected, and no 'Anonymous Customer' found for this organization.");
    }
    return anonymous;
  };

  const handlePayment = async () => {
    if (!session) {
      setError('No active session.');
      setPaymentStatus('error');
      return;
    }
    setPaymentStatus('processing');
    setError('');

    try {
      const client = await resolveClient();
      const now = new Date();
      const dueDate = new Date(now.getTime());
      dueDate.setDate(dueDate.getDate() + 30);

      const isPaidNow = method !== 'invoice';

      const lignesFacture = (cartItems ?? []).map((item) => {
        const unitPrice = item.unitPrice ?? item.prixVente ?? 0;
        const lineTotal = unitPrice * (1 - (item.discountPercentage || 0) / 100) * item.quantity;
        return {
          quantite: item.quantity,
          description: item.nomProduit,
          debit: lineTotal,
          credit: 0,
          idProduit: item.idProduit,
          nomProduit: item.nomProduit,
          prixUnitaire: unitPrice,
          montantTotal: lineTotal,
        };
      });

      const montantHT = lignesFacture.reduce((acc, l) => acc + l.montantTotal, 0);
      const montantTVA = calculatedTotal - montantHT;
      const numeroFacture = await generateDocumentNumberOfflineFirst(session, 'FACTURE', montantTVA > 0);

      const payload = {
        numeroFacture,
        dateFacturation: now.toISOString(),
        dateEcheance: dueDate.toISOString(),
        type: 'VENTE',
        etat: isPaidNow ? 'PAYE' : 'EN_ATTENTE',
        idClient: client.idClient,
        nomClient: client.raisonSociale || client.username,
        adresseClient: client.adresse,
        emailClient: client.email,
        telephoneClient: client.telephone,
        lignesFacture,
        montantHT,
        montantTVA,
        montantTTC: calculatedTotal,
        montantTotal: calculatedTotal,
        finalAmount: calculatedTotal,
        montantRestant: isPaidNow ? 0 : calculatedTotal,
        applyVat: true,
        devise: 'XAF',
        modeReglement: MODE_REGLEMENT[method] ?? 'AUTRE',
        organizationId: session.organizationId,
        agencyId: session.agencyId,
        createdBy: session.id,
        originType: 'POS',
        sessionId: posSession?.id,
      };

      const online = await isFullyOnline();
      const created = await createFactureOffline(session, payload);
      setFacture(created);
      setPaymentStatus('paid');
      const offlineMsg = online ? '' : ' (saved locally — will sync once back online)';
      toast.success(`Invoice ${created?.numeroFacture ?? ''} created — payment recorded.${offlineMsg}`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Payment failed. Please try again.';
      setError(msg);
      setPaymentStatus('error');
      toast.error(msg);
    }
  };

  const factureHtml = facture && session ? generateReceiptHTML(facture, session) : '';

  const handlePrintReceipt = async () => {
    if (!factureHtml) return;
    setIsPrinting(true);
    try {
      const response = await fetch('http://127.0.0.1:3002/print', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ html: factureHtml, type: 'receipt' }),
      });
      if (response.ok) {
        toast.success('Invoice sent to printer successfully!');
      } else {
        toast.error(`Printer error: ${response.statusText}`);
      }
    } catch (err) {
      console.error('Print error:', err);
      toast.error('Could not connect to printer. Check if the printer service is running.');
    } finally {
      setIsPrinting(false);
    }
  };

  const handleNewTransaction = () => {
    setPaymentStatus('pending');
    setReceivedAmount('');
    setFacture(null);
    onPaymentComplete?.();
    onBack();
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F8FAFC]">

      {/* LEFT PANEL */}
      <div className="w-[400px] flex flex-col bg-white border-r border-slate-200 shadow-xl z-10">
        <div className="px-6 py-5 border-b border-slate-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-[#1F47E6] font-bold text-sm">
            <ChevronLeft size={18} /> Back to Register
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">Select Method</div>
          <ul className="flex flex-col gap-3">
            {paymentMethods.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setMethod(item.id);
                    setPaymentStatus('pending');
                  }}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${method === item.id
                    ? 'border-[#1F47E6] bg-blue-50/50'
                    : 'border-slate-100 text-slate-600'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${method === item.id ? 'bg-[#1F47E6] text-white' : 'bg-slate-100 text-slate-500'}`}>
                      <item.icon size={20} />
                    </div>
                    <div className="text-left font-bold text-sm">{item.label}</div>
                  </div>
                  {method === item.id && <CheckCircle2 size={18} className="text-[#1F47E6]" />}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 bg-slate-50/30">
          <ActionNumpad
            showPayment={true}
            setShowPayment={() => { }}
            clickedContainer={clickedContainer}
            onlyPad={true}
          />
        </div>
      </div>

      {/* RIGHT PANEL: TRANSACTION STATUS & CASH FORM */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-[#F1F5F9]">
        <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl border border-white overflow-hidden">

          {/* STATUS HEADER */}
          <div className={`p-8 text-center transition-colors duration-500 ${paymentStatus === 'paid' ? 'bg-emerald-500' : paymentStatus === 'error' ? 'bg-red-500' : 'bg-slate-800'
            }`}>
            <h2 className="text-white font-black text-xl uppercase tracking-widest">
              {paymentStatus === 'paid' ? 'Transaction Complete' : paymentStatus === 'error' ? 'Payment Failed' : 'Checkout'}
            </h2>
          </div>

          <div className="p-10">
            {/* CASH FORM (Conditional) */}
            {method === 'cash' && paymentStatus === 'pending' && (
              <div className="mb-8 space-y-4 animate-in fade-in slide-in-from-top-4">
                <div className="relative">
                  <label className="text-[10px] font-bold text-slate-400 uppercase ml-2">Cash Received</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">$</span>
                    <input
                      type="number"
                      placeholder="0.00"
                      value={receivedAmount}
                      onFocus={() => {
                        setClickedContainer({
                          type: 'input',
                          inputType: 'number',
                          data: receivedAmount,
                          setData: setReceivedAmount
                        });
                      }}
                      onChange={(e) => {
                        setReceivedAmount(e.target.value);
                        setClickedContainer({
                          type: 'input',
                          inputType: 'number',
                          data: e.target.value,
                          setData: setReceivedAmount
                        });
                      }}
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 pl-8 pr-4 text-xl font-black focus:border-[#1F47E6] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-4 flex justify-between items-center border border-blue-100">
                  <div className="flex items-center gap-2 text-blue-600">
                    <ArrowRightLeft size={18} />
                    <span className="text-sm font-bold">Change Due</span>
                  </div>
                  <span className={`text-2xl font-black ${changeAmount > 0 ? 'text-blue-700' : 'text-slate-300'}`}>
                    ${changeAmount.toFixed(2)}
                  </span>
                </div>
              </div>
            )}

            {/* TOTALS */}
            <div className="text-center py-4">
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-tighter mb-1">Total Amount Due</p>
              <p className={`text-6xl font-black tracking-tight ${paymentStatus === 'paid' ? 'text-emerald-600' : 'text-slate-900'}`}>
                ${(calculatedTotal ?? 0).toFixed(2)}
              </p>
            </div>

            {/* ACTIONS */}
            <div className="mt-10">
              {paymentStatus === 'pending' && (
                <button
                  onClick={handlePayment}
                  disabled={!isCashValid}
                  className={`w-full py-5 rounded-2xl font-black text-lg transition-all ${isCashValid
                    ? 'bg-[#1F47E6] text-white shadow-xl shadow-blue-100 hover:scale-[1.02]'
                    : 'bg-slate-100 text-slate-300 cursor-not-allowed'
                    }`}
                >
                  {method === 'cash' && !isCashValid ? 'INSUFFICIENT CASH' : 'COMPLETE PAYMENT'}
                </button>
              )}

              {paymentStatus === 'processing' && (
                <div className="w-full bg-slate-800 text-white py-5 rounded-2xl flex items-center justify-center gap-3 font-bold">
                  <Clock className="animate-spin" size={20} /> Processing...
                </div>
              )}

              {paymentStatus === 'error' && (
                <div className="space-y-3">
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl text-center font-bold mb-4 border border-red-100">
                    {error}
                  </div>
                  <button onClick={() => setPaymentStatus('pending')} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold">
                    Try Again
                  </button>
                </div>
              )}

              {paymentStatus === 'paid' && (
                <div className="space-y-3">
                  <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl text-center font-bold mb-4 border border-emerald-100">
                    Invoice {facture?.numeroFacture} created — payment recorded.
                  </div>
                  <button
                    onClick={handlePrintReceipt}
                    disabled={isPrinting}
                    className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all"
                  >
                    <Printer size={18} />
                    {isPrinting ? 'Sending to Printer...' : 'Print Receipt'}
                  </button>
                  <button onClick={handleNewTransaction} className="w-full text-slate-400 font-bold py-2 text-sm">
                    New Transaction
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: RECEIPT PREVIEW (uses the real created facture, once available) */}
      {facture && (
        <div className="w-[350px] flex flex-col items-center bg-slate-50 border-l border-slate-200 shadow-xl z-10 overflow-y-auto py-6">
          <div dangerouslySetInnerHTML={{ __html: factureHtml }} />
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
