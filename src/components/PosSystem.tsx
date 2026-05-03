import React from 'react';
import { LayoutDashboard, UtensilsCrossed, History, Wallet, Gift, Settings, Search, Filter } from 'lucide-react';
import { Product, CartItem } from '../types';
import FloatingCalculator from './Calculator';
// Components with explicit Prop types
interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, badge }) => (
  <div className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${active ? 'bg-red-50 text-red-500' : 'text-gray-400 hover:bg-gray-50'}`}>
    <div className="flex items-center gap-3">
      {icon}
      <span className="font-medium">{label}</span>
    </div>
    {badge && <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">{badge}</span>}
  </div>
);

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-white p-4 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer text-center group">
    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{product.image}</div>
    <h3 className="font-bold">{product.name}</h3>
    <p className="text-red-500 font-bold mt-1">${product.price.toFixed(2)}</p>
  </div>
);

const PosSystem: React.FC = () => {
  // Example state for the order list
  const cart: CartItem[] = [
    { id: '1', name: 'Big Mac', price: 1.99, image: '🍔', category: 'Burger', quantity: 1 },
    { id: '2', name: 'Big Burg', price: 2.69, image: '🍔', category: 'Burger', quantity: 1 },
  ];

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1;

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col p-6">
        <div className="flex items-center gap-2 mb-10 text-[#ff5b5b] font-bold text-xl">
          <UtensilsCrossed size={24} /> Foodyoow
        </div>
        <nav className="flex-1 space-y-1">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
          <NavItem icon={<UtensilsCrossed size={20} />} label="Menus" badge="NEW" />
          <NavItem icon={<History size={20} />} label="History" />
          <NavItem icon={<Wallet size={20} />} label="Wallet" />
          <NavItem icon={<Gift size={20} />} label="Promotion" badge="12+" />
        </nav>
        <NavItem icon={<Settings size={20} />} label="Settings" />
      </aside>

      {/* PRODUCT GRID */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="Search menu..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-xl hover:bg-gray-50"><Filter size={18} /> Filter</button>
        </div>
        
        <h1 className="text-3xl font-bold">Hamburger</h1>
        <p className="text-gray-500 mb-8">Discover whatever you need easily</p>

        <div className="grid grid-cols-4 gap-6">
          {/* Mock Product List */}
          {[1,2,3,4,5,6,7,8].map(i => (
            <ProductCard key={i} product={{id: String(i), name: 'Burger', price: 1.99, image: '🍔', category: 'Burger'}} />
          ))}
        </div>
      </main>

      {/* ORDER PANEL */}
      <aside className="w-80 bg-white border-l border-gray-200 flex flex-col">
        <div className="p-6 flex-1">
          <h2 className="text-xl font-bold mb-6">My Order</h2>
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-sm">{item.name}</h4>
                  <p className="text-red-500 text-xs">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-2 py-1 rounded-lg text-sm font-bold">
                  <span>{item.quantity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-100 bg-gray-50/50">
          <div className="flex justify-between text-gray-500 mb-2"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
          <div className="flex justify-between text-gray-500 mb-4"><span>Tax (10%)</span><span>${tax.toFixed(2)}</span></div>
          <div className="flex justify-between font-bold text-lg mb-6 border-t border-dashed pt-4">
            <span>Total</span><span>${(subtotal + tax).toFixed(2)}</span>
          </div>
          <button className="w-full py-4 bg-[#ff5b5b] text-white rounded-2xl font-bold shadow-lg shadow-red-100">Print Bills</button>
        </div>
      </aside>

      <FloatingCalculator />
    </div>
  );
};
export default PosSystem