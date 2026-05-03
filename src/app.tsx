import * as React from "react"
import { createRoot } from "react-dom/client"
import { useState } from "react"
import "./index.css"
import ActionNumpad from "./components/Calculator"
import CartSection from "./components/OrderPanel"
import ProductGrid from "./components/ProductGrid"
import { User, Wifi } from 'lucide-react';

import { UpdatedProductResponse } from "./Types/Product"
const App: React.FC = () => {
    const [products,setProducts]=useState<UpdatedProductResponse[]>([])
  return (
    <div className="flex flex-col h-screen overflow-hidden text-[var(--color-primary)]">
      {/* Minimal Header */}
      <div className="h-12 bg-white border-b border-[var(--color-secondary-light)] flex justify-end items-center px-6 gap-6">
        <div className="flex items-center gap-2 text-sm font-medium">
          <div className="w-6 h-6 rounded-full bg-[var(--color-secondary-super-light)] flex items-center justify-center overflow-hidden">
            <User size={14} />
          </div>
          Mitchell Admin
        </div>
        <Wifi size={16} className="text-green-500" />
      </div>

      {/* Main Container */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT SIDE: Cart + Calculator */}
        <div className="w-[450px] flex flex-col border-r border-[var(--color-secondary-light)]">
          <CartSection />
          
          {/* Action Buttons Row */}
          <div className="grid grid-cols-3 bg-white text-[var(--color-secondary-gray)] text-[10px] uppercase font-bold text-center border-t border-[var(--color-secondary-light)]">
            <button className="py-4 border-r border-[var(--color-secondary-light)] hover:bg-gray-50">Refund</button>
            <button className="py-4 border-r border-[var(--color-secondary-light)] hover:bg-gray-50">Customer Note</button>
            <button className="py-4 hover:bg-gray-50">Enter Code</button>
          </div>

          <ActionNumpad />
          
          {/* User Footer */}
          <div className="p-4 bg-white border-t border-[var(--color-secondary-light)] flex items-center gap-3 text-[var(--color-secondary)]">
            <User size={20} className="p-1 bg-[var(--color-secondary-super-light)] rounded-full"/>
            <span className="font-bold text-sm underline cursor-pointer">Anita Oliver</span>
          </div>
        </div>

        {/* RIGHT SIDE: Products */}
        <ProductGrid 
        
        setProducts={(products:UpdatedProductResponse[])=>{
            setProducts(products)
            console.log(products)
        }} 
            products={products}
            />
      </div>
    </div>
  );
};

export default App;



const root = createRoot(document.getElementById("root")!)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)