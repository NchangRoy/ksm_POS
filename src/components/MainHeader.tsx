import React, { useState, useEffect, useRef } from 'react';
import { User, Wifi, MapPin, Clock, ChevronDown, Settings, LogOut, LogIn } from 'lucide-react';

interface MainHeaderProps {
  sellerName?: string;
  stationName?: string;
  onLogout: () => void;
  onLoginClick: () => void;
  isLoggedIn: boolean;
}

const MainHeader: React.FC<MainHeaderProps> = ({ 
  sellerName = "Chargement...", 
  stationName = "Caisse Principale",
  onLogout,
  onLoginClick,
  isLoggedIn
}) => {
  const [time, setTime] = useState(new Date());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-16 bg-white/80 backdrop-blur-xl border-b border-white/40 flex justify-between items-center px-6 shadow-[0_4px_30px_rgba(0,0,0,0.03)] z-50 transition-all">
      
      {/* Left: Station & Time */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#F6F8FC] to-white border border-[#E5E7EB]/60 rounded-full shadow-inner">
          <MapPin size={14} className="text-[#1F47E6]" />
          <span className="text-[11px] font-black text-[#03045e] uppercase tracking-wider">{stationName}</span>
        </div>
        
        <div className="flex items-center gap-2 text-[#64748b] bg-white/50 px-3 py-1.5 rounded-full border border-white/60 shadow-sm">
          <Clock size={14} className="text-[#1F47E6]" />
          <span className="text-xs font-bold text-[#03045e]">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>

      {/* Right: Connectivity & User Dropdown */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1.5 text-[#99a1af] font-black text-[10px] uppercase tracking-widest">
          <span className="hidden sm:inline">Connecté</span>
          <Wifi size={14} className="text-green-500" />
        </div>

        <div className="h-6 w-[1px] bg-[#E5E7EB]" />

        {isLoggedIn ? (
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-3 hover:bg-slate-50/80 p-1.5 pr-3 rounded-2xl transition-all group border border-transparent hover:border-slate-200 hover:shadow-sm"
            >
              <div className="flex flex-col items-end leading-none">
                <span className="text-sm font-black text-[#03045e] group-hover:text-[#1F47E6] transition-colors">{sellerName}</span>
                <span className="text-[10px] font-bold text-[#99a1af] uppercase mt-0.5">Vendeur</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ECF3FA] to-blue-50 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                <User size={18} className="text-[#1F47E6]" />
              </div>
              <ChevronDown size={14} className={`text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* DROPDOWN MENU */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-[#E5E7EB] rounded-xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2">
                <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-[#F6F8FC] hover:text-[#1F47E6] transition-colors">
                  <Settings size={16} /> Paramètres
                </button>
                <div className="h-[1px] bg-[#E5E7EB] my-1" />
                <button 
                  onClick={() => { onLogout(); setIsDropdownOpen(false); }}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors"
                >
                  <LogOut size={16} /> Déconnexion
                </button>
              </div>
            )}
          </div>
        ) : (
          <button 
            onClick={onLoginClick}
            className="flex items-center gap-2 bg-[#1F47E6] text-white px-4 py-2 rounded-lg font-black text-xs uppercase tracking-widest hover:bg-[#03045e] transition-all"
          >
            <LogIn size={14} /> Se Connecter
          </button>
        )}
      </div>
    </header>
  );
};
export default MainHeader;