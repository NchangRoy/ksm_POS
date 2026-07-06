import React, { useEffect, useState } from 'react';
import { Search, X, User, Check } from 'lucide-react';
import { toast } from 'sonner';
import { ClientResponse } from '../Types/Client';
import { getClients, SellerSession } from '../lib/api';

interface CustomerSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  session?: SellerSession;
  selectedCustomer?: ClientResponse | null;
  onSelect: (customer: ClientResponse | null) => void;
}

const CustomerSelectModal: React.FC<CustomerSelectModalProps> = ({
  isOpen,
  onClose,
  session,
  selectedCustomer,
  onSelect,
}) => {
  const [customers, setCustomers] = useState<ClientResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!isOpen || !session) return;
    setLoading(true);
    getClients(session)
      .then(setCustomers)
      .catch((err) => {
        console.error('Failed to load customers', err);
        toast.error('Failed to load customers.');
      })
      .finally(() => setLoading(false));
  }, [isOpen, session]);

  if (!isOpen) return null;

  const filtered = customers.filter((c) => {
    const term = search.trim().toLowerCase();
    if (!term) return true;
    return [c.raisonSociale, c.username, c.codeClient, c.email]
      .some((v) => v?.toLowerCase().includes(term));
  });

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-[2rem] overflow-hidden shadow-2xl max-h-[80vh] flex flex-col">
        <div className="bg-[#03045e] p-6 flex items-center justify-between">
          <h2 className="text-white text-lg font-black uppercase tracking-widest">Sélectionner un client</h2>
          <button onClick={onClose} className="text-white/60 hover:text-white">
            <X size={22} />
          </button>
        </div>

        <div className="p-4 border-b border-[#E5E7EB]">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-[#99a1af]" size={16} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Nom, code ou email..."
              className="w-full pl-10 py-2.5 border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:border-[#1F47E6]"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {selectedCustomer && (
            <button
              onClick={() => { onSelect(null); onClose(); toast.success('Client removed.'); }}
              className="w-full flex items-center gap-3 p-4 border-b border-[#E5E7EB] hover:bg-red-50 text-red-500 text-left"
            >
              <X size={18} />
              <span className="font-bold text-sm">Retirer le client sélectionné</span>
            </button>
          )}

          {loading ? (
            <div className="p-10 text-center text-[#99a1af] text-sm font-bold">Chargement...</div>
          ) : filtered.length === 0 ? (
            <div className="p-10 text-center text-[#99a1af] text-sm font-bold">Aucun client trouvé</div>
          ) : (
            filtered.map((customer) => {
              const isSelected = selectedCustomer?.idClient === customer.idClient;
              return (
                <button
                  key={customer.idClient}
                  onClick={() => { onSelect(customer); onClose(); toast.success(`Client selected: ${customer.raisonSociale || customer.username}`); }}
                  className={`w-full flex items-center gap-3 p-4 border-b border-[#E5E7EB] text-left hover:bg-[#F6F8FC] transition-colors ${isSelected ? 'bg-[#ECF3FA]' : ''}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#ECF3FA] flex items-center justify-center shrink-0">
                    <User size={18} className="text-[#1F47E6]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-[#03045e] truncate">
                      {customer.raisonSociale || customer.username}
                    </p>
                    <p className="text-[10px] text-[#99a1af] font-bold uppercase">{customer.codeClient}</p>
                  </div>
                  {isSelected && <Check size={18} className="text-[#1F47E6] shrink-0" />}
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerSelectModal;
