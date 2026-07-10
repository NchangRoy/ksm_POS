import { ArrowLeft, Building2 } from 'lucide-react';
import React from 'react';
import { KernelOrganizationSummary } from '../lib/api';

interface OrganizationPickerProps {
  organizations: KernelOrganizationSummary[];
  selectingOrgId: string | null;
  error: string;
  onSelect: (org: KernelOrganizationSummary) => void;
  onBack: () => void;
}

// Shared "pick which of your Kernel organizations to connect to" body, used
// wherever auth can resolve to more than one org (Sign In and Try Out both
// go through Kernel and can hit this).
const OrganizationPicker: React.FC<OrganizationPickerProps> = ({ organizations, selectingOrgId, error, onSelect, onBack }) => {
  return (
    <div className="p-8 pt-4 space-y-5">
      {error && (
        <p className="text-sm text-red-500 font-medium bg-red-50 border border-red-100 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <div className="space-y-2.5 max-h-80 overflow-y-auto">
        {organizations.length === 0 ? (
          <p className="text-sm text-gray-400 font-medium text-center py-6">No organizations found for this account.</p>
        ) : (
          organizations.map((org) => (
            <button
              key={org.id}
              type="button"
              onClick={() => onSelect(org)}
              disabled={selectingOrgId !== null}
              className="w-full flex items-center gap-3 px-4 py-3.5 bg-gray-50 hover:bg-[#1F47E6]/5 border border-gray-100 hover:border-[#1F47E6] rounded-xl transition-all text-left disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <div className="w-9 h-9 rounded-lg bg-[#1F47E6]/10 text-[#1F47E6] flex items-center justify-center shrink-0">
                <Building2 size={16} />
              </div>
              <span className="text-sm font-bold text-gray-700 flex-1">
                {org.displayName || org.shortName || org.legalName}
              </span>
              {selectingOrgId === org.id && (
                <span className="text-[10px] font-black uppercase tracking-widest text-[#1F47E6]">Connecting…</span>
              )}
            </button>
          ))
        )}
      </div>

      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-[#1F47E6] transition-colors"
      >
        <ArrowLeft size={14} /> Back
      </button>
    </div>
  );
};

export default OrganizationPicker;
