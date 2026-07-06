import { KeyRound, ShieldCheck, ArrowLeft, User } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { clickedContainer } from '../Types/ClickedContainer';
import { loginSeller, loginByPin, SellerSession } from '../lib/api';

const LoginModal = ({
  isOpen,
  onClose,
  onSuccess,
  clickedContainer,
  setClickedContainer
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (name: string) => void;
  clickedContainer: clickedContainer | undefined;
  setClickedContainer: (container: clickedContainer | null) => void;
}) => {
  type Method = 'none' | 'pin' | 'password';
  const [method, setMethod] = useState<Method>('none');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset fields when method changes or modal opens/closes
  React.useEffect(() => {
    setUsername('');
    setPassword('');
    setPin('');
    setError('');
    setClickedContainer(null);
  }, [method, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError('');

    setIsSubmitting(true);
    try {
      let session: SellerSession;

      if (method === 'pin') {
        const organizationId = localStorage.getItem('terminalOrganizationId') || undefined;
        if (!organizationId) {
          const msg = 'No organization on this terminal yet — sign in once with your username and password first.';
          setError(msg);
          toast.error(msg);
          setIsSubmitting(false);
          return;
        }
        session = await loginByPin(organizationId, pin);
      } else {
        session = await loginSeller(username, password);
      }

      localStorage.setItem('seller', JSON.stringify(session));
      toast.success(`Welcome back, ${session.username}!`);
      onSuccess(session.username);
    } catch (err) {
      const msg = err instanceof Error ? err.message : method === 'pin' ? 'Code PIN incorrect.' : "Nom d'utilisateur ou mot de passe incorrect.";
      setError(msg);
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-[2rem] overflow-hidden shadow-2xl transition-all">

        {/* Header */}
        <div className="bg-[#03045e] p-8 text-center relative">
          {method !== 'none' && (
            <button
              onClick={() => setMethod('none')}
              className="absolute left-6 top-8 text-white/60 hover:text-white"
            >
              <ArrowLeft size={20} />
            </button>
          )}
          <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <ShieldCheck size={32} className="text-white" />
          </div>
          <h2 className="text-white text-xl font-black uppercase tracking-widest">Identification</h2>
          <p className="text-white/60 text-xs mt-1">Veuillez choisir une méthode</p>
        </div>

        <div className="p-8">
          {method === 'none' ? (
            /* PHASE 1: METHOD SELECTION */
            <div className="space-y-4">
              <button
                onClick={() => setMethod('pin')}
                className="w-full flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-100 hover:border-[#1F47E6] hover:bg-blue-50 transition-all group"
              >
                <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-[#1F47E6] group-hover:text-white">
                  <KeyRound size={24} />
                </div>
                <div className="text-left">
                  <p className="font-black text-[#03045e] text-sm uppercase">Code PIN</p>
                  <p className="text-xs text-gray-400">Connexion rapide via 5 chiffres</p>
                </div>
              </button>

              <button
                onClick={() => setMethod('password')}
                className="w-full flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-100 hover:border-[#1F47E6] hover:bg-blue-50 transition-all group"
              >
                <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-[#1F47E6] group-hover:text-white">
                  <User size={24} />
                </div>
                <div className="text-left">
                  <p className="font-black text-[#03045e] text-sm uppercase">Identifiants</p>
                  <p className="text-xs text-gray-400">Nom d'utilisateur & Mot de passe</p>
                </div>
              </button>
            </div>
          ) : (
            /* PHASE 2: LOGIN FORM */
            <form onSubmit={handleSubmit} className="space-y-6 animate-in slide-in-from-right-4 duration-300">
              {method === 'pin' ? (
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Entrez votre PIN</label>
                  <input
                    type="password"
                    maxLength={5}
                    placeholder="•••••"
                    value={pin}
                    onFocus={() => {
                      setClickedContainer({
                        type: 'input',
                        data: pin,
                        setData: setPin
                      });
                    }}
                    onChange={(e) => {
                      setPin(e.target.value);
                      setClickedContainer({
                        type: 'input',
                        data: e.target.value,
                        setData: setPin
                      });
                    }}
                    className="w-full text-center text-4xl tracking-[1.5rem] font-black py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#1F47E6] outline-none"
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Utilisateur</label>
                    <input
                      type="text"
                      value={username}
                      onFocus={() => {
                        setClickedContainer({
                          type: 'input',
                          data: username,
                          setData: setUsername
                        });
                      }}
                      onChange={(e) => {
                        setUsername(e.target.value);
                        setClickedContainer({
                          type: 'input',
                          data: e.target.value,
                          setData: setUsername
                        });
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
                        setClickedContainer({
                          type: 'input',
                          data: password,
                          setData: setPassword
                        });
                      }}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setClickedContainer({
                          type: 'input',
                          data: e.target.value,
                          setData: setPassword
                        });
                      }}
                      className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#1F47E6] outline-none font-bold"
                    />
                  </div>
                </div>
              )}

              {error && (
                <p className="text-red-500 text-xs font-bold text-center">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1F47E6] text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-blue-200 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100">
                {isSubmitting ? 'Connexion…' : 'Se Connecter'}
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
export default LoginModal;  