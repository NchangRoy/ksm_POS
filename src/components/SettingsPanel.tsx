import React from 'react';
import { X, PanelLeft, PanelRight, Settings } from 'lucide-react';

export type PanelPosition = 'left' | 'right';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  panelPosition: PanelPosition;
  onChangePanelPosition: (position: PanelPosition) => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ isOpen, onClose, panelPosition, onChangePanelPosition }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* HEADER */}
        <div className="px-8 py-5 border-b border-[#E5E7EB] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ECF3FA] flex items-center justify-center">
              <Settings size={18} className="text-[#1F47E6]" />
            </div>
            <h2 className="text-lg font-black uppercase tracking-widest text-[#03045e]">Paramètres</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-[#F6F8FC] rounded-full transition-colors">
            <X size={18} className="text-[#99a1af]" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-8 space-y-3">
          <p className="text-[10px] font-black uppercase tracking-widest text-[#99a1af]">Cart &amp; Numpad Position</p>
          <p className="text-xs text-[#99a1af] font-medium mb-4">Choose which side the cart and numpad appear on, versus the product grid.</p>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => onChangePanelPosition('left')}
              className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all ${
                panelPosition === 'left' ? 'border-[#1F47E6] bg-[#ECF3FA]' : 'border-[#E5E7EB] bg-white hover:border-[#1F47E6]/30'
              }`}
            >
              <PanelLeft size={28} className={panelPosition === 'left' ? 'text-[#1F47E6]' : 'text-[#99a1af]'} />
              <span className={`text-xs font-black uppercase tracking-widest ${panelPosition === 'left' ? 'text-[#1F47E6]' : 'text-[#03045e]'}`}>Left</span>
            </button>

            <button
              type="button"
              onClick={() => onChangePanelPosition('right')}
              className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all ${
                panelPosition === 'right' ? 'border-[#1F47E6] bg-[#ECF3FA]' : 'border-[#E5E7EB] bg-white hover:border-[#1F47E6]/30'
              }`}
            >
              <PanelRight size={28} className={panelPosition === 'right' ? 'text-[#1F47E6]' : 'text-[#99a1af]'} />
              <span className={`text-xs font-black uppercase tracking-widest ${panelPosition === 'right' ? 'text-[#1F47E6]' : 'text-[#03045e]'}`}>Right</span>
            </button>
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-8 py-5 border-t border-[#E5E7EB] flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#1F47E6] text-white px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#03045e] transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
