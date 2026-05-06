import * as React from "react"
import { createRoot } from "react-dom/client"
import { useState, useEffect } from "react"
import { Toaster } from "sonner"
import "./index.css"

import PaymentPage from "./components/Payment"
import ActionNumpad from "./components/Calculator"
import CartSection from "./components/OrderPanel"
import ProductGrid from "./components/ProductGrid"
import MainHeader from "./components/MainHeader"

import { User } from 'lucide-react'
import { clickedContainer } from "./Types/ClickedContainer"
import { UpdatedProductResponse } from "./Types/Product"
import { CartItem } from "./Types/CartItem"

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<UpdatedProductResponse[]>([]);
  const [clickedContainer, setClickedContainer] = useState<clickedContainer | undefined>(undefined);
  const [showPayment, setShowPayment] = useState<boolean>(false);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + (item.unitPrice ?? item.prixVente ?? 0) * item.quantity, 
    0
  );

  return (
    <div className="flex flex-col h-screen overflow-hidden text-[#03045e] font-sans selection:bg-[#ECF3FA]">
      <Toaster 
        position="top-right" 
        richColors 
        toastOptions={{ style: { borderRadius: '12px' } }} 
      />

      <MainHeader userName="Mitchell Admin" stationName="Point de Vente A" />

      <div className="flex flex-1 overflow-hidden bg-[#F6F8FC]">
        {showPayment ? (
          /* FULL SCREEN PAYMENT VIEW */
          <PaymentPage 
            total={totalAmount} 
            onBack={() => setShowPayment(false)} 
            cartItems={cartItems}
          />
        ) : (
          /* STANDARD POS VIEW */
          <>
            {/* LEFT SIDE: Cart + Controls */}
            <div className="w-[450px] flex flex-col border-r border-[#E5E7EB] bg-white shadow-xl z-20">
              <CartSection 
                cartItems={cartItems} 
                setCartItems={setCartItems} 
                setClickedContainer={setClickedContainer}
              />
              
              {/* Refined Action Buttons Row (5 Columns) */}
              <div className="grid grid-cols-5 bg-white text-[#99a1af] text-[9px] uppercase font-black text-center border-t border-[#E5E7EB]">
                <button className="py-4 border-r border-[#E5E7EB] hover:bg-[#F6F8FC] hover:text-[#1F47E6]">Refund</button>
                <button className="py-4 border-r border-[#E5E7EB] hover:bg-[#F6F8FC] hover:text-[#1F47E6] text-[#03045e]">Customer</button>
                <button className="py-4 border-r border-[#E5E7EB] hover:bg-[#F6F8FC] hover:text-[#1F47E6]">Note</button>
                <button className="py-4 border-r border-[#E5E7EB] hover:bg-[#F6F8FC] hover:text-[#1F47E6]">Code</button>
                <button className="py-4 hover:bg-[#F6F8FC] hover:text-[#1F47E6]">Receipt</button>
              </div>

              <ActionNumpad 
                clickedContainer={clickedContainer} 
                showPayment={showPayment} 
                setShowPayment={setShowPayment} 
              />

              {/* User Footer */}
              <div className="p-4 bg-white border-t border-[#E5E7EB] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#ECF3FA] rounded-lg">
                    <User size={18} className="text-[#1F47E6]"/>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#99a1af] uppercase leading-none mb-1">Cashier</span>
                    <span className="font-black text-sm text-[#03045e]">Anita Oliver</span>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-[#E5E7EB] uppercase tracking-widest">v2.0.4-Stable</span>
              </div>
            </div>

            {/* RIGHT SIDE: Products Grid */}
            <div className="flex-1 bg-[#F6F8FC]">
              <ProductGrid products={products} setCartItems={setCartItems} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;

const root = createRoot(document.getElementById("root")!)
root.render(<React.StrictMode><App /></React.StrictMode>)