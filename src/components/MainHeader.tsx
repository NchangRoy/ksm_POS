import React, { useState, useEffect } from 'react';
import { User, Wifi, MapPin, Clock } from 'lucide-react';

interface MainHeaderProps {
  userName?: string;
  stationName?: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ 
  userName = "Mitchell Admin", 
  stationName = "Caisse Principale" 
}) => {
  const [time, setTime] = useState(new Date());

  // Update clock every minute
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="h-12 bg-white border-b border-[#E5E7EB] flex justify-between items-center px-6 shadow-sm z-10">
      
      {/* Left Side: Station Info & Time */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F6F8FC] border border-[#E5E7EB] rounded-full">
          <MapPin size={12} className="text-[#1F47E6]" />
          <span className="text-[10px] font-black text-[#03045e] uppercase tracking-tight">
            {stationName}
          </span>
        </div>
        
        <div className="flex items-center gap-1.5 text-[#99a1af]">
          <Clock size={14} />
          <span className="text-xs font-bold text-[#03045e]">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>

      {/* Right Side: User & Connectivity */}
      <div className="flex items-center gap-6">
        {/* Connection Status */}
        <div className="flex items-center gap-1.5 text-[#99a1af] font-black text-[10px] uppercase tracking-widest">
          <span className="hidden sm:inline">System Online</span>
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <Wifi size={14} className="text-green-500 relative inline-flex" />
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="h-6 w-[1px] bg-[#E5E7EB]" />

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="flex flex-col items-end leading-none">
            <span className="text-sm font-black text-[#03045e] group-hover:text-[#1F47E6] transition-colors">
              {userName}
            </span>
            <span className="text-[9px] font-bold text-[#99a1af] uppercase">
              Manager
            </span>
          </div>
          
          <div className="w-8 h-8 rounded-full bg-[#F6F8FC] border border-[#E5E7EB] flex items-center justify-center overflow-hidden group-hover:border-[#1F47E6] transition-all">
            <User size={16} className="text-[#1F47E6]" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;