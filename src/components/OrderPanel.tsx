import React from 'react';

const CartSection: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-white">
      {/* Item List */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-bold text-[var(--color-primary)]">Large Cabinet</h4>
            <p className="text-xs text-[var(--color-secondary-gray)]">1.00 Units x $ 368.00 / Units</p>
          </div>
          <span className="font-bold text-[var(--color-primary)]">$ 368.00</span>
        </div>
        <div className="flex justify-between items-start p-2 bg-[var(--color-secondary-super-light)] rounded-md border-l-4 border-[var(--color-secondary)]">
          <div>
            <h4 className="font-bold text-[var(--color-primary)]">Letter Tray</h4>
            <p className="text-xs text-[var(--color-secondary-gray)]">12.00 Units x $ 5.52 / Units</p>
          </div>
          <span className="font-bold text-[var(--color-primary)]">$ 66.24</span>
        </div>
      </div>

      {/* Totals Section */}
      <div className="p-6 bg-[var(--color-secondary-background)] border-t border-[var(--color-secondary-light)]">
        <div className="flex justify-end items-end flex-col">
          <div className="text-3xl font-black text-[var(--color-primary)]">Total: $ 452.41</div>
          <div className="text-sm text-[var(--color-secondary-gray)] font-medium">Taxes: $ 59.01</div>
        </div>
        
        {/* Points display */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="p-2 bg-white rounded border border-[var(--color-secondary-light)] text-center">
            <p className="text-[10px] uppercase text-[var(--color-secondary-gray)]">Points Won</p>
            <p className="font-bold text-green-600">+4524.1</p>
          </div>
          <div className="p-2 bg-white rounded border border-[var(--color-secondary-light)] text-center">
            <p className="text-[10px] uppercase text-[var(--color-secondary-gray)]">New Total</p>
            <p className="font-bold text-pink-700">4524.1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;