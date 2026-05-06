import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  User, 
  CreditCard, 
  Banknote, 
  Smartphone, 
  Receipt,
  CheckCircle2,
  Clock,
  ArrowRightLeft
} from 'lucide-react';
import ActionNumpad from './Calculator';
import { CartItem } from '../Types/CartItem';

interface PaymentPageProps {
  total: number;
  onBack: () => void;
  cartItems?:CartItem []
}



export const calculateCartGrandTotal = (items: CartItem[]): number => {
  const grandTotal = items.reduce((acc, item) => {
    // Calculate the price for a single unit after discount
    const discountedUnitPrice = item.unitPrice * (1 - item.discountPercentage / 100);
    
    // Add the total for this line item to the accumulator
    return acc + (discountedUnitPrice * item.quantity);
  }, 0);

  // Return formatted to 2 decimal places as a number
  //including tva
  return Math.round(grandTotal * 118) / 100;
};




const PaymentPage: React.FC<PaymentPageProps> = ({ total, onBack, cartItems }) => {
  const [method, setMethod] = useState('card');
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'processing' | 'paid'>('pending');
  
  // Cash Management States
  const [receivedAmount, setReceivedAmount] = useState<string>('');
  const [changeAmount, setChangeAmount] = useState<number>(0);
  const [calculatedTotal, setCalculatedTotal] = useState<number>(total);

  // Calculate change whenever receivedAmount or total changes
  useEffect(() => {
    const received = parseFloat(receivedAmount) || 0;
    const change = received - calculatedTotal;
    setChangeAmount(change > 0 ? change : 0);
  }, [receivedAmount, calculatedTotal]);


  ///will be loaded from api 
  const paymentMethods = [
    { id: 'card', label: 'Credit / Debit Card', icon: CreditCard, description: 'Visa, Mastercard, Amex' },
    { id: 'cash', label: 'Cash', icon: Banknote, description: 'Physical currency' },
    { id: 'mobile', label: 'Mobile Payment', icon: Smartphone, description: 'Apple Pay, Google Pay' },
    { id: 'invoice', label: 'Invoice', icon: Receipt, description: 'Generate billing statement' },
  ];

  const handlePayment = () => {
    setPaymentStatus('processing');
    setTimeout(() => {
      setPaymentStatus('paid');
    }, 1200);
  };
  useEffect(()=>{
    console.log(cartItems)
    setCalculatedTotal(calculateCartGrandTotal(cartItems??[]))
  },[])

  const isCashValid = method === 'cash' ? (parseFloat(receivedAmount) >= total) : true;

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
                  className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                    method === item.id 
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
          <ActionNumpad showPayment={true} setShowPayment={() => {}} clickedContainer={undefined} />
        </div>
      </div>

      {/* RIGHT PANEL: TRANSACTION STATUS & CASH FORM */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-[#F1F5F9]">
        <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl border border-white overflow-hidden">
          
          {/* STATUS HEADER */}
          <div className={`p-8 text-center transition-colors duration-500 ${
            paymentStatus === 'paid' ? 'bg-emerald-500' : 'bg-slate-800'
          }`}>
            <h2 className="text-white font-black text-xl uppercase tracking-widest">
              {paymentStatus === 'paid' ? 'Transaction Complete' : 'Checkout'}
            </h2>
          </div>

          <div className="p-10">
            {/* CASH FORM (Conditional) */}
            {method === 'cash' && paymentStatus !== 'paid' && (
              <div className="mb-8 space-y-4 animate-in fade-in slide-in-from-top-4">
                <div className="relative">
                  <label className="text-[10px] font-bold text-slate-400 uppercase ml-2">Cash Received</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">$</span>
                    <input 
                      type="number"
                      placeholder="0.00"
                      value={receivedAmount}
                      onChange={(e) => setReceivedAmount(e.target.value)}
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
                ${( calculatedTotal??0).toFixed(2)}
              </p>
            </div>

            {/* ACTIONS */}
            <div className="mt-10">
              {paymentStatus === 'pending' && (
                <button 
                  onClick={handlePayment}
                  disabled={!isCashValid}
                  className={`w-full py-5 rounded-2xl font-black text-lg transition-all ${
                    isCashValid 
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

              {paymentStatus === 'paid' && (
                <div className="space-y-3">
                  <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl text-center font-bold mb-4 border border-emerald-100">
                    Payment Successful!
                  </div>
                  <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold">
                    Print Receipt
                  </button>
                  <button onClick={() => { setPaymentStatus('pending'); setReceivedAmount(''); }} className="w-full text-slate-400 font-bold py-2 text-sm">
                    New Transaction
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;