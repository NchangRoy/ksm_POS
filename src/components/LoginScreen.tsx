import { KeyRound, ShieldCheck, ArrowLeft, User, Lock, Eye, EyeOff, LogIn, Building2 } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { clickedContainer } from '../Types/ClickedContainer';
import { tryOut, loginSeller, loginByPin, KernelOrganizationSummary, SellerSession } from '../lib/api';
import OrganizationPicker from './OrganizationPicker';

interface LoginScreenProps {
  onBack: () => void;
  onSuccess: (name: string) => void;
  clickedContainer: clickedContainer | undefined;
  setClickedContainer: (container: clickedContainer | null) => void;
}

// Two stages: an account-level sign-in (who/which org) followed by the
// till's own lock screen (which seller is working it right now — PIN or
// credentials). Clicking "Sign In" from the landing page always starts at
// the first stage; logging back out of an already-set-up terminal skips
// straight to the lock screen instead (via initialStage), since the
// terminal already knows its organization.
const LoginScreen: React.FC<LoginScreenProps & {
  onStageChange?: (stage: 'account' | 'terminal') => void;
  initialStage?: 'account' | 'terminal';
}> = ({
  onBack, onSuccess, clickedContainer, setClickedContainer, onStageChange, initialStage = 'account'
}) => {
  const [stage, setStage] = useState<'account' | 'terminal'>(initialStage);

  const goToStage = (next: 'account' | 'terminal') => {
    setStage(next);
    onStageChange?.(next);
  };

  if (stage === 'account') {
    return (
      <AccountSignIn
        onBack={onBack}
        onResolved={() => goToStage('terminal')}
        clickedContainer={clickedContainer}
        setClickedContainer={setClickedContainer}
      />
    );
  }

  return (
    <TerminalLockScreen
      onBack={() => goToStage('account')}
      onSuccess={onSuccess}
      clickedContainer={clickedContainer}
      setClickedContainer={setClickedContainer}
    />
  );
};

// Stage 1 — plain email/password, same form as Billing's /login, going
// through the same Kernel-backed try-out auth as the Try Out screen so it can
// resolve/choose an organization the same way. This only binds the terminal
// to an organization; it deliberately doesn't log anyone in yet — that's
// what the lock screen (stage 2) is for.
const AccountSignIn: React.FC<{
  onBack: () => void;
  onResolved: () => void;
  clickedContainer: clickedContainer | undefined;
  setClickedContainer: (container: clickedContainer | null) => void;
}> = ({ onBack, onResolved, clickedContainer, setClickedContainer }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [organizations, setOrganizations] = useState<KernelOrganizationSummary[] | null>(null);
  const [selectingOrgId, setSelectingOrgId] = useState<string | null>(null);

  const completeSignIn = async (organizationId?: string) => {
    const result = await tryOut(username, password, organizationId);
    if (result.requiresOrganizationSelection === true) {
      setOrganizations(result.availableOrganizations);
      return;
    }
    const { session } = result;
    if (session.organizationId) {
      localStorage.setItem('terminalOrganizationId', session.organizationId);
    }
    onResolved();
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError('');
    setIsSubmitting(true);
    try {
      await completeSignIn();
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Authentication failed';
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
      await completeSignIn(org.id);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Authentication failed';
      setError(msg);
      toast.error(msg);
    } finally {
      setSelectingOrgId(null);
    }
  };

  const inputWrapper = "flex items-center gap-3 bg-gray-50 border border-gray-100 px-4 py-3 rounded-xl focus-within:border-[#1F47E6] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#1F47E6]/5 transition-all duration-200";
  const inputStyle = "bg-transparent border-none outline-none text-gray-700 w-full text-sm placeholder:text-gray-400";

  return (
    <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center bg-[#F6F8FC] p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">

        {/* Branding Header */}
        <div className="p-8 pb-4 text-center">
          <div className="w-12 h-12 bg-[#1F47E6] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200">
            {organizations ? <Building2 size={20} className="text-white" /> : <LogIn size={20} className="text-white" />}
          </div>
          {organizations ? (
            <>
              <h1 className="text-2xl font-black text-gray-900 tracking-tight">Choose an Organization</h1>
              <p className="text-gray-500 text-sm mt-1 font-medium">Several spaces are linked to this account. Pick the one to connect to.</p>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-black text-gray-900 tracking-tight">Welcome Back</h1>
              <p className="text-gray-500 text-sm mt-1 font-medium">Please enter your details to sign in</p>
            </>
          )}
        </div>

        {organizations ? (
          <OrganizationPicker
            organizations={organizations}
            selectingOrgId={selectingOrgId}
            error={error}
            onSelect={handleSelectOrganization}
            onBack={() => { setOrganizations(null); setError(''); }}
          />
        ) : (
          <form onSubmit={handleSubmit} className="p-8 pt-4 space-y-5">

            {/* Username Field */}
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1">Username</label>
              <div className={inputWrapper}>
                <User size={16} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="johndoe123"
                  className={inputStyle}
                  required
                  value={username}
                  onFocus={() => setClickedContainer({ type: 'input', data: username, setData: setUsername })}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setClickedContainer({ type: 'input', data: e.target.value, setData: setUsername });
                  }}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1">Password</label>
              <div className={inputWrapper}>
                <Lock size={16} className="text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={inputStyle}
                  required
                  value={password}
                  onFocus={() => setClickedContainer({ type: 'input', data: password, setData: setPassword })}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setClickedContainer({ type: 'input', data: e.target.value, setData: setPassword });
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-[#1F47E6] transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-sm text-red-500 font-medium bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#1F47E6] text-white rounded-2xl font-bold text-sm shadow-lg shadow-[#1F47E6]/25 hover:bg-[#03045e] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        )}
      </div>

      <button onClick={onBack} className="mt-6 text-gray-400 text-[10px] font-black uppercase tracking-widest hover:text-gray-600">
        Back to home
      </button>
    </div>
  );
};

// Stage 2 — the terminal's own lock screen, shown unconditionally right after
// stage 1 resolves an organization. Quick PIN or full credentials, since
// sellers share the same physical till through the day; this is what actually
// starts the seller session.
const TerminalLockScreen: React.FC<LoginScreenProps> = ({ onBack, onSuccess, clickedContainer, setClickedContainer }) => {
  type Method = 'none' | 'pin' | 'password';
  const [method, setMethod] = useState<Method>('none');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset fields whenever the chosen method changes
  React.useEffect(() => {
    setUsername('');
    setPassword('');
    setPin('');
    setError('');
    setClickedContainer(null);
  }, [method]);

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
    <div className="flex-1 overflow-y-auto bg-[#F6F8FC] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-blue-100">

        {/* Branding Header */}
        <div className="bg-[#03045e] p-8 text-center relative">
          <button
            onClick={() => (method !== 'none' ? setMethod('none') : onBack())}
            className="absolute left-6 top-8 text-white/60 hover:text-white"
          >
            <ArrowLeft size={20} />
          </button>
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

          <button onClick={onBack} className="w-full mt-6 text-gray-400 text-[10px] font-black uppercase tracking-widest hover:text-gray-600">
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
