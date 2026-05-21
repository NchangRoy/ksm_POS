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
import LoginModal from "./components/LoginModal" // New Component

import { clickedContainer } from "./Types/ClickedContainer"
import { UpdatedProductResponse } from "./Types/Product"
import { CartItem } from "./Types/CartItem"

import { EmployeeResponse } from "./Types/Seller"

const TAX_RATE = 0.18;

const App: React.FC = () => {
  // --- AUTH STATES ---
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [sellerName, setSellerName] = useState<string>("Session Fermée");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [employee, setEmployee] = useState<EmployeeResponse | undefined>();
  
  useEffect(() => {
    const seller = localStorage.getItem("seller")
    if (seller) {
      setEmployee(JSON.parse(seller));
    }
  }, []);

  // --- POS STATES ---
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<UpdatedProductResponse[]>([]);
  const [clickedContainer, setClickedContainer] = useState<clickedContainer | undefined>(undefined);
  const [showPayment, setShowPayment] = useState<boolean>(false);

  // --- CALCULATION LOGIC (Including Discounts & Taxes) ---
  const subtotalAfterDiscounts = cartItems.reduce((sum, item) => {
    const basePrice = item.unitPrice ?? item.prixVente ?? 0;
    const discountFactor = 1 - (item.discountPercentage / 100);
    return sum + (basePrice * discountFactor * item.quantity);
  }, 0);

  const taxes = Math.round(subtotalAfterDiscounts * TAX_RATE);
  const finalTotal = Math.round(subtotalAfterDiscounts + taxes);

  // --- HANDLERS ---
  const handleLoginSuccess = (name: string) => {
    setSellerName(name);
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
    const seller = localStorage.getItem("seller");
    if (seller) {
      setEmployee(JSON.parse(seller));
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSellerName("Session Fermée");
    setCartItems([]); // Optional: Clear cart on logout for security
    setEmployee(undefined);
    localStorage.removeItem("seller");
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden text-[#03045e] font-sans selection:bg-[#ECF3FA]">
      <Toaster 
        position="top-right" 
        richColors 
        toastOptions={{ style: { borderRadius: '12px' } }} 
      />

      {/* HEADER: Receives seller name and auth status */}
      <MainHeader 
        sellerName={sellerName} 
        stationName="Caisse Principale A" 
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onLoginClick={() => setIsLoginModalOpen(true)}
      />

      <div className="flex flex-1 overflow-hidden bg-[#F6F8FC]">
        {!isLoggedIn ? (
          /* BLOCKED STATE: Show login prompt if not logged in */
          <div className="flex-1 flex flex-col items-center justify-center bg-white">
            <div className="p-10 text-center space-y-6">
              <div className="w-20 h-20 bg-[#F6F8FC] rounded-3xl flex items-center justify-center mx-auto border border-[#E5E7EB]">
                <span className="text-4xl">🔐</span>
              </div>
              <div>
                <h2 className="text-2xl font-black uppercase tracking-widest text-[#03045e]">Terminal Verrouillé</h2>
                <p className="text-[#99a1af] font-bold mt-2">Veuillez vous identifier pour commencer la vente</p>
              </div>
              <button 
                onClick={() => setIsLoginModalOpen(true)}
                className="bg-[#1F47E6] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-blue-100 hover:bg-[#03045e] transition-all"
              >
                Ouvrir une Session
              </button>
            </div>
          </div>
        ) : showPayment ? (
          /* FULL SCREEN PAYMENT VIEW */
          <PaymentPage 
            total={finalTotal} 
            onBack={() => setShowPayment(false)} 
            cartItems={cartItems}
          />
        ) : (
          /* STANDARD POS VIEW (Only visible when logged in) */
          <>
            {/* LEFT SIDE: Cart + Controls */}
            <div className="w-[450px] flex flex-col border-r border-[#E5E7EB] bg-white shadow-xl z-20">
              <CartSection 
                cartItems={cartItems} 
                setCartItems={setCartItems} 
                setClickedContainer={setClickedContainer}
              />
              
              {/* Action Buttons Row */}
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
                employee={employee}
              />
            </div>

            {/* RIGHT SIDE: Products Grid */}
            <div className="flex-1 bg-[#F6F8FC]">
              <ProductGrid products={products} setCartItems={setCartItems} setClickedContainer={setClickedContainer} />
            </div>
          </>
        )}
      </div>

      {/* LOGIN MODAL LAYER */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        onSuccess={handleLoginSuccess}
        clickedContainer={clickedContainer}
        setClickedContainer={setClickedContainer}
      />

      {/* MODAL ACTION NUMPAD FOR LOGIN / OTHER INPUTS */}
      {isLoginModalOpen && clickedContainer && (
        <div className="fixed bottom-4 left-4 z-[110] w-[450px] bg-transparent p-0 animate-in slide-in-from-bottom duration-300">
          <ActionNumpad 
            clickedContainer={clickedContainer}
            onlyPad={true}
            employee={employee}
          />
        </div>
      )}
    </div>
  );
};

export default App;

const root = createRoot(document.getElementById("root")!)
root.render(<React.StrictMode><App /></React.StrictMode>)