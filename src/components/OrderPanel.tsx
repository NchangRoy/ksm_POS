import React, { useState, useEffect } from 'react';
import { Plus, Minus, Trash2, Info } from 'lucide-react';
import { CartItem } from '../Types/CartItem';
import { clickedContainer } from '../Types/ClickedContainer';

interface CartSectionProps {
  cartItems?: CartItem[];
  setCartItems?: React.Dispatch<React.SetStateAction<CartItem[]>>;
  setClickedContainer: (item: clickedContainer | null) => void;
}

const TAX_RATE = 0.18;

const CartSection: React.FC<CartSectionProps> = ({ 
  cartItems = [], 
  setCartItems,
  setClickedContainer,
}) => {
  const [selectedItem, setSelectedItem] = useState<CartItem | null>(null);

  // 1. SYNC SELECTED ITEM BACK TO CART
  useEffect(() => {
    if (selectedItem && setCartItems) {
      setCartItems((prevCart) =>
        prevCart.map((item) =>
          item.idProduit === selectedItem.idProduit ? { ...selectedItem } : item
        )
      );
    }
  }, [selectedItem, setCartItems]);

  // 2. SYNC TO ACTION PAD (NUMPAD)
  useEffect(() => {
    if (selectedItem) {
      setClickedContainer({
        type: 'cartItem',
        data: selectedItem,
        setData: setSelectedItem,
      });
    }
  }, [selectedItem, setClickedContainer]);

  // 3. COMPLETE DISCOUNT & TOTAL LOGIC
  // Raw Subtotal (Before any discounts)
  const rawSubtotal = cartItems.reduce((acc, item) => {
    const price = item.unitPrice ?? item.prixVente ?? 0;
    return acc + (price * item.quantity);
  }, 0);

  // Discounted Subtotal (The actual taxable base)
  const discountedSubtotal = cartItems.reduce((acc, item) => {
    const price = item.unitPrice ?? item.prixVente ?? 0;
    const discount = item.discountPercentage || 0;
    const itemTotal = (price * (1 - discount / 100)) * item.quantity;
    return acc + itemTotal;
  }, 0);

  const totalSavings = rawSubtotal - discountedSubtotal;
  const taxes = Math.round(discountedSubtotal * TAX_RATE);
  const finalTotal = Math.round(discountedSubtotal + taxes);
  const avgDiscount = rawSubtotal > 0 ? (totalSavings / rawSubtotal) * 100 : 0;

  // 4. HANDLERS
  const handleItemClick = (item: CartItem) => {
    setSelectedItem(item);
  };

  const updateQuantity = (id: string | undefined, delta: number) => {
    if (!id || !setCartItems) return;
    setCartItems(prev => prev.map(item => {
      if (item.idProduit === id) {
        const newQty = Math.max(0, item.quantity + delta);
        const updated = { ...item, quantity: newQty };
        if (selectedItem?.idProduit === id) setSelectedItem(updated);
        return updated;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const getDiscountAdvice = () => {
    if (totalSavings === 0) return { text: "Aucune remise", color: "text-gray-400", bg: "bg-gray-50" };
    if (avgDiscount > 20) return { text: "Remise élevée (Manager ?)", color: "text-orange-600", bg: "bg-orange-50" };
    return { text: "Remise appliquée", color: "text-emerald-600", bg: "bg-emerald-50" };
  };

  const advice = getDiscountAdvice();

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-white">
      {/* HEADER TOOLS */}
      <div className="px-5 py-3 border-b border-slate-100 flex justify-between items-center bg-white/60 backdrop-blur-md">
        <span className="text-[11px] font-black uppercase text-[#03045e] tracking-widest flex items-center gap-2">
          Panier <span className="bg-[#1F47E6] text-white px-2 py-0.5 rounded-full text-[10px]">{cartItems.length}</span>
        </span>
        {cartItems.length > 0 && (
          <button 
            onClick={() => { setCartItems?.([]); setSelectedItem(null); }}
            className="flex items-center gap-1 text-[10px] font-black text-red-500 uppercase hover:bg-red-50 px-2 py-1 rounded transition-colors"
          >
            <Trash2 size={12} /> Vider
          </button>
        )}
      </div>

      {/* ITEMS LIST */}
      <div className="flex-1 p-2 space-y-1 overflow-y-auto">
        {cartItems.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-[#99a1af] text-sm italic">
            <div className="text-4xl mb-2 opacity-20">🛒</div>
            Panier vide
          </div>
        ) : (
          cartItems.map((item, index) => {
            const displayUnitPrice = item.unitPrice ?? item.prixVente ?? 0;
            const hasDiscount = (item.discountPercentage || 0) > 0;
            const itemLineTotal = (displayUnitPrice * (1 - (item.discountPercentage || 0) / 100)) * item.quantity;
            const isSelected = selectedItem?.idProduit === item.idProduit;

            return (
              <div
                key={item.idProduit || index}
                onClick={() => handleItemClick(item)}
                className={`flex items-center gap-3 p-3 rounded-[1rem] cursor-pointer transition-all border ${
                  isSelected 
                    ? 'bg-gradient-to-r from-[#ECF3FA] to-white border-[#1F47E6]/40 shadow-[0_4px_20px_-4px_rgba(31,71,230,0.2)] scale-[1.01]' 
                    : 'bg-white hover:bg-[#F6F8FC] border-slate-100 hover:border-[#1F47E6]/20 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Product Image */}
                <div className="w-14 h-14 rounded-xl bg-[#F6F8FC] flex-shrink-0 overflow-hidden border border-slate-100 shadow-inner">
                  {item.photo ? (
                    <img src={item.photo} alt={item.nomProduit} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-[#99a1af]">📦</div>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4 className={`font-bold text-sm truncate ${isSelected ? 'text-[#03045e]' : 'text-gray-700'}`}>
                    {item.nomProduit}
                  </h4>
                  <div className="flex items-center gap-2">
                    <p className="text-[10px] text-[#99a1af] font-bold uppercase">
                      {displayUnitPrice.toLocaleString()} FCFA
                    </p>
                    {hasDiscount && (
                      <span className="bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-black animate-pulse">
                        -{item.discountPercentage}%
                      </span>
                    )}
                  </div>
                </div>

                {/* Qty Controls */}
                <div className="flex items-center gap-1 bg-[#F6F8FC] rounded-xl p-1 border border-slate-100 shadow-inner" onClick={(e) => e.stopPropagation()}>
                  <button onClick={() => updateQuantity(item.idProduit, -1)} className="p-1.5 hover:bg-white rounded-lg text-[#1F47E6] hover:shadow-sm transition-all">
                    {item.quantity === 1 ? <Trash2 size={14} className="text-red-500" /> : <Minus size={14} />}
                  </button>
                  <span className="w-6 text-center font-black text-xs text-[#03045e]">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.idProduit, 1)} className="p-1.5 hover:bg-white rounded-lg text-[#1F47E6] hover:shadow-sm transition-all">
                    <Plus size={14} />
                  </button>
                </div>

                {/* Line Total */}
                <div className="w-32 text-right flex flex-col justify-center">
                  <span className="block text-[9px] uppercase font-bold text-[#99a1af]">Total</span>
                  {hasDiscount && (
                    <span className="text-[10px] text-[#99a1af] line-through decoration-red-400">
                      {(displayUnitPrice * item.quantity).toLocaleString()}
                    </span>
                  )}
                  <span className={`font-black text-sm ${hasDiscount ? 'text-red-600' : 'text-[#03045e]'}`}>
                    {Math.round(itemLineTotal).toLocaleString()}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* FOOTER AREA */}
      <div className="p-6 bg-white/80 backdrop-blur-xl border-t border-slate-100 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.05)]">
        <div className="flex justify-between items-end">
          {/* Advice Section */}
          <div className={`${advice.bg} p-3 rounded-2xl border border-white/50 min-w-[150px] shadow-sm`}>
            <div className="flex items-center gap-1.5 mb-1">
              <Info size={12} className={advice.color} />
              <span className="text-[9px] font-black uppercase text-[#99a1af]">Statut Remise</span>
            </div>
            <p className={`text-[11px] font-bold ${advice.color}`}>{advice.text}</p>
            {totalSavings > 0 && (
              <p className="text-[10px] text-gray-500 font-medium">-{totalSavings.toLocaleString()} FCFA</p>
            )}
          </div>

          {/* Money Totals */}
          <div className="text-right">
            {totalSavings > 0 && (
              <div className="text-[10px] font-bold text-gray-400 line-through uppercase">
                Brut: {rawSubtotal.toLocaleString()} FCFA
              </div>
            )}
            <div className="text-xs font-bold text-[#99a1af] uppercase tracking-wider">
              TVA (18%): {taxes.toLocaleString()} FCFA
            </div>
            <div className="text-3xl font-black text-[#03045e] flex items-baseline justify-end gap-1">
              {finalTotal.toLocaleString()} 
              <span className="text-sm font-bold text-[#1F47E6]">FCFA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;