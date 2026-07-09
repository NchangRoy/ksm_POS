import { ArrowLeft, Rocket, Building2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { clickedContainer } from '../Types/ClickedContainer';
import { tryOut, KernelOrganizationSummary, SellerSession } from '../lib/api';

const TryOutModal = ({
  isOpen,
  onClose,
  onSuccess,
  clickedContainer,
  setClickedContainer
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (session: SellerSession) => void;
  clickedContainer: clickedContainer | undefined;
  setClickedContainer: (container: clickedContainer | null) => void;
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [organizations, setOrganizations] = useState<KernelOrganizationSummary[] | null>(null);
  const [selectingOrgId, setSelectingOrgId] = useState<string | null>(null);

  useEffect(() => {
    setUsername('');
    setPassword('');
    setError('');
    setOrganizations(null);
    setSelectingOrgId(null);
    setClickedContainer(null);
  }, [isOpen]);

  if (!isOpen) return null;

  const completeTryOut = async (organizationId?: string) => {
    const result = await tryOut(username, password, organizationId);
    if (result.requiresOrganizationSelection) {
      setOrganizations(result.availableOrganizations);
      return;
    }
    localStorage.setItem('seller', JSON.stringify(result.session));
    toast.success(`Welcome, ${result.session.username}!`);
    onSuccess(result.session);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError('');
    setIsSubmitting(true);
    try {
      await completeTryOut();
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Authentication failed.';
      setError(msg);
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSelectOrganization = async (org: KernelOrganizationSummary) => {
    setError('');
    setSelectingOrgId(org.id);
    try {
      await completeTryOut(org.id);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Authentication failed.';
      setError(msg);
      toast.error(msg);
    } finally {
      setSelectingOrgId(null);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-[2rem] overflow-hidden shadow-2xl transition-all">

        {/* Header */}
        <div className="bg-[#1F47E6] p-8 text-center relative">
          {organizations && (
            <button
              onClick={() => { setOrganizations(null); setError(''); }}
              className="absolute left-6 top-8 text-white/60 hover:text-white"
            >
              <ArrowLeft size={20} />
            </button>
          )}
          <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            {organizations ? <Building2 size={32} className="text-white" /> : <Rocket size={32} className="text-white" />}
          </div>
          <h2 className="text-white text-xl font-black uppercase tracking-widest">
            {organizations ? 'Choisir une Organisation' : 'Try Out'}
          </h2>
          <p className="text-white/60 text-xs mt-1">
            {organizations ? 'Plusieurs espaces sont associés à ce compte' : 'Connectez-vous avec votre compte KSM existant'}
          </p>
        </div>

        <div className="p-8">
          {organizations ? (
            /* PHASE: ORGANIZATION SELECTION */
            <div className="space-y-3">
              {organizations.length === 0 ? (
                <p className="text-center text-sm text-gray-400 font-bold py-6">Aucune organisation trouvée pour ce compte.</p>
              ) : (
                <div className="space-y-2.5 max-h-72 overflow-y-auto">
                  {organizations.map((org) => (
                    <button
                      key={org.id}
                      type="button"
                      onClick={() => handleSelectOrganization(org)}
                      disabled={selectingOrgId !== null}
                      className="w-full flex items-center gap-3 p-4 rounded-2xl border-2 border-gray-100 hover:border-[#1F47E6] hover:bg-blue-50 transition-all text-left disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <div className="p-2.5 bg-gray-100 rounded-xl">
                        <Building2 size={20} className="text-[#1F47E6]" />
                      </div>
                      <span className="font-black text-[#03045e] text-sm flex-1">
                        {org.displayName || org.shortName || org.legalName}
                      </span>
                      {selectingOrgId === org.id && (
                        <span className="text-[10px] font-black uppercase text-[#1F47E6]">Connexion…</span>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {error && (
                <p className="text-red-500 text-xs font-bold text-center">{error}</p>
              )}
            </div>
          ) : (
            /* PHASE: CREDENTIALS */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Email</label>
                  <input
                    type="text"
                    value={username}
                    onFocus={() => {
                      setClickedContainer({ type: 'input', data: username, setData: setUsername });
                    }}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      setClickedContainer({ type: 'input', data: e.target.value, setData: setUsername });
                    }}
                    className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#1F47E6] outline-none font-bold"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Mot de passe</label>
                  <input
                    type="password"
                    value={password}
                    onFocus={() => {
                      setClickedContainer({ type: 'input', data: password, setData: setPassword });
                    }}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setClickedContainer({ type: 'input', data: e.target.value, setData: setPassword });
                    }}
                    className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#1F47E6] outline-none font-bold"
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-xs font-bold text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1F47E6] text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-blue-200 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Connexion…' : 'Try It Out'}
              </button>
            </form>
          )}

          <button onClick={onClose} className="w-full mt-6 text-gray-400 text-[10px] font-black uppercase tracking-widest hover:text-gray-600">
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};
export default TryOutModal;
