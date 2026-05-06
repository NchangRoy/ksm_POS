import React, { useEffect, useState } from 'react';
import { ChevronRight, Delete } from 'lucide-react';
import { CartItem } from '../Types/CartItem';
import { toast } from 'sonner';


interface clickedContainer {
  type: string;
  data: any;
  setData: (data: any) => void;
}

interface CalculatorProps {
  clickedContainer?: clickedContainer;
  showPayment?: boolean;
  setShowPayment?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ActionNumpad: React.FC<CalculatorProps> = ({ clickedContainer, showPayment, setShowPayment   }) => {
  const [inputBuffer, setInputBuffer] = useState<string>('0');
  const [activeMode, setActiveMode] = useState<'Qty' | '% Disc' | 'Price'>('Qty');
 
  // Hardcoded Color Palette for reference
  const colors = {
    primary: '#03045e',
    secondary: '#1F47E6',
    lightGray: '#E5E7EB',
    superLightBlue: '#ECF3FA',
    bgLight: '#F6F8FC',
    grayText: '#99a1af'
  };

  const applyChange = (mode: 'Qty' | '% Disc' | 'Price', value: string) => {
    const currentItem: CartItem = clickedContainer?.data;
    if (!currentItem) return;
    console.log(activeMode,mode)
    if (activeMode != mode) {
      toast.success("Changed Mode to " + mode);
      return;

    }
    const numValue = Number(value);
    const updatedData = { ...currentItem };

    if (mode === "Qty") {
      updatedData.quantity = numValue;
    } else if (mode === "Price") {
      updatedData.unitPrice = numValue;
    } else if (mode === "% Disc") {
      if (numValue < 0 || numValue > 100) {
        toast.error("Discount must be 0-100%");
        return;
      }
      updatedData.discountPercentage = numValue;
    }

    clickedContainer?.setData(updatedData);
    setInputBuffer('0');
  };

  const handleNumber = (num: string) => {
    setInputBuffer((prev) => {
      if (num === '.') return prev.includes('.') ? prev : prev + '.';
      return prev === '0' ? num : prev + num;
    });
  };

  const handleMode = (mode: 'Qty' | '% Disc' | 'Price') => {
    applyChange(mode, inputBuffer);
    setActiveMode(mode);
  };

  const actionKeys = [
    { key: '1', handler: () => handleNumber('1') },
    { key: '2', handler: () => handleNumber('2') },
    { key: '3', handler: () => handleNumber('3') },
    { key: 'Qty', handler: () => handleMode('Qty') },
    { key: '4', handler: () => handleNumber('4') },
    { key: '5', handler: () => handleNumber('5') },
    { key: '6', handler: () => handleNumber('6') },
    { key: '% Disc', handler: () => handleMode('% Disc') },
    { key: '7', handler: () => handleNumber('7') },
    { key: '8', handler: () => handleNumber('8') },
    { key: '9', handler: () => handleNumber('9') },
    { key: 'Price', handler: () => handleMode('Price') },
    { key: '+/-', handler: () => setInputBuffer(p => p.startsWith('-') ? p.slice(1) : '-' + p) },
    { key: '0', handler: () => handleNumber('0') },
    { key: '.', handler: () => handleNumber('.') },
    { key: '⌫', handler: () => setInputBuffer(p => p.length > 1 ? p.slice(0, -1) : '0') }
  ];

  return (
    <div className="flex flex-col border-t border-[#E5E7EB]">
      {/* Visual Display */}
      <div className="bg-[#F6F8FC] p-3 flex justify-between items-center border-b border-[#E5E7EB]">
        <span className="text-sm font-semibold text-[#03045e] uppercase opacity-70">
          {activeMode}
        </span>
        <span className="text-2xl font-mono font-bold text-[#03045e]">
          {inputBuffer}
        </span>
      </div>

      <div className="flex">
        {/* Payment Button */}
       <div className="w-1/3 h-full flex flex-col">
  
  {/* 30% Top: Independent Payment Button */}
  <button className="h-[30%] w-full bg-[#03045e] text-white flex flex-col items-center justify-center shadow-md hover:bg-[#05067a] transition-all border border-[#03045e] group">
    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200 group-hover:text-white transition-colors"
      onClick={()=>{
        setShowPayment && setShowPayment(!showPayment)
      }}
    
    >
      Payment
    </span>
    <span className="text-[9px] opacity-50 font-bold uppercase mt-1">Method</span>
  </button>

  {/* 70% Bottom: Independent Order Button */}
  <button className="h-[70%] w-full bg-[#1F47E6] text-white flex flex-col items-center justify-center gap-3  shadow-lg shadow-blue-100 hover:brightness-110 transition-all border border-[#1F47E6]">
    <div className="p-2 bg-white/10 rounded-full">
      <ChevronRight size={40} strokeWidth={3} />
    </div>
    <div className="flex flex-col items-center">
      <span className="text-3xl font-black uppercase tracking-widest leading-none">
        Order
      </span>
      <span className="text-[11px] font-bold opacity-70 mt-2 uppercase tracking-tighter">
        Validate & Print
      </span>
    </div>
  </button>

</div>

        <div className="w-2/3 grid grid-cols-4 bg-white">
          {actionKeys.map((item) => {
            const isModeKey = ['Qty', '% Disc', 'Price'].includes(item.key);
            const isActive = activeMode === item.key;

            return (
              <button
                key={item.key}
                onClick={item.handler}
                className={`h-16 border-l border-b border-[#E5E7EB] font-bold text-lg transition-colors ${
                  isModeKey
                    ? isActive 
                      ? 'bg-[#03045e] text-white' 
                      : 'bg-[#ECF3FA] text-[#03045e]'
                    : 'text-[#03045e] hover:bg-[#F6F8FC]'
                }`}
              >
                {item.key === '⌫' ? (
                  <div className="flex justify-center text-[#99a1af]"><Delete size={20} /></div>
                ) : (
                  item.key
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActionNumpad;