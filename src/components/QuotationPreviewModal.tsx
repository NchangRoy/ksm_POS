import React, { useState } from 'react';
import { X, Printer } from 'lucide-react';
import { toast } from 'sonner';
import { SellerSession } from '../lib/api';
import { generateQuotationHTML } from '../printGenerators/quotationPrint';

interface QuotationPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  quotation: any;
  session?: SellerSession;
}

const QuotationPreviewModal: React.FC<QuotationPreviewModalProps> = ({ isOpen, onClose, quotation, session }) => {
  const [isPrinting, setIsPrinting] = useState(false);

  if (!isOpen || !quotation || !session) return null;

  const html = generateQuotationHTML(quotation, session);

  const handlePrint = async () => {
    setIsPrinting(true);
    try {
      const response = await fetch('http://127.0.0.1:3002/print', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ html, type: 'quotation' }),
      });
      if (response.ok) {
        toast.success('Quotation sent to printer successfully!');
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

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      <div className="bg-slate-50 w-full max-w-4xl max-h-[95vh] rounded-[2rem] overflow-hidden flex flex-col shadow-2xl border border-white/20">
        <div className="bg-white px-8 py-5 border-b border-slate-200 flex justify-between items-center">
          <p className="text-sm font-black uppercase tracking-widest text-slate-700">Quotation {quotation.numeroDevis}</p>
          <div className="flex gap-3">
            <button
              onClick={handlePrint}
              disabled={isPrinting}
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-blue-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-slate-900/20 transition-all"
            >
              <Printer size={16} /> {isPrinting ? 'Printing…' : 'Print Quotation'}
            </button>
            <button onClick={onClose} className="p-2.5 text-slate-400 hover:bg-slate-100 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto p-4 md:p-8 flex justify-center bg-slate-200/40">
          <div style={{ transform: 'scale(0.75)', transformOrigin: 'top center' }}
            dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </div>
  );
};

export default QuotationPreviewModal;
