import React from 'react';
import { User, ChevronRight, Delete } from 'lucide-react';

const ActionNumpad: React.FC = () => {
  const keys = ['1', '2', '3', 'Qty', '4', '5', '6', '% Disc', '7', '8', '9', 'Price', '+/-', '0', '.', '⌫'];

  return (
    <div className="border-t border-[var(--color-secondary-light)] flex">
      {/* Payment Action */}
      <button className="w-1/3 bg-[#6a4c6a] text-white flex flex-col items-center justify-center gap-2 hover:brightness-110 transition-all">
        <ChevronRight size={32} />
        <span className="text-xl font-bold uppercase tracking-wider">Payment</span>
      </button>

      {/* Grid Keys */}
      <div className="w-2/3 grid grid-cols-4 bg-white">
        {keys.map((key) => (
          <button 
            key={key}
            className={`h-16 border-l border-b border-[var(--color-secondary-light)] font-bold text-lg transition-colors ${
              ['Qty', '% Disc', 'Price'].includes(key) 
                ? 'bg-[var(--color-secondary-super-light)] text-[var(--color-primary)]' 
                : 'text-[var(--color-primary)] hover:bg-[var(--color-secondary-background)]'
            }`}
          >
            {key === '⌫' ? <div className="flex justify-center"><Delete size={20}/></div> : key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActionNumpad;