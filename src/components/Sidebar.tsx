import React from 'react';
import { LayoutDashboard, UtensilsCrossed, History, Wallet, Gift, Settings } from 'lucide-react';


interface props{
    currentPage: string;
    setCurrentPage: (page: string) => void;
}
const Sidebar: React.FC<props> = ({ currentPage, setCurrentPage }) => {
  return (
    <aside className="w-64 bg-white border-r border-[var(--color-secondary-light)] flex flex-col p-6">
      <div className="flex items-center gap-2 mb-10 text-[var(--color-primary)] font-bold text-xl tracking-tight">
        <div className="p-1.5 bg-[var(--color-primary)] rounded-lg text-white">
          <UtensilsCrossed size={20} />
        </div>
        Foodyoow
      </div>
      
      <nav className="flex-1 space-y-2">
        <NavItem icon={LayoutDashboard} label="Dashboard" active />
        <NavItem icon={UtensilsCrossed} label="Menus" badge="NEW" />
        <NavItem icon={History} label="History" />
        <NavItem icon={Wallet} label="Wallet" />
        <NavItem icon={Gift} label="Promotion" badge="12+" />
      </nav>

      <div className="pt-6 border-t border-[var(--color-secondary-light)]">
        <NavItem icon={Settings} label="Settings" />
      </div>
    </aside>
  );
};

const NavItem: React.FC<{ icon: any, label: string, active?: boolean, badge?: string }> = ({ icon: Icon, label, active, badge }) => (
  <div className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
    active ? 'bg-[var(--color-secondary-super-light)] text-[var(--color-secondary)] font-semibold' : 'text-[var(--color-secondary-gray)] hover:bg-[var(--color-secondary-background)]'
  }`}>
    <div className="flex items-center gap-3">
      <Icon size={20} />
      <span>{label}</span>
    </div>
    {badge && <span className="bg-[var(--color-secondary)] text-white text-[10px] px-2 py-0.5 rounded-full">{badge}</span>}
  </div>
);

export default Sidebar;