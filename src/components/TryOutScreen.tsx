import { User, Lock, Eye, EyeOff, Rocket, Building2 } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { clickedContainer } from '../Types/ClickedContainer';
import { tryOut, KernelOrganizationSummary, SellerSession } from '../lib/api';
import OrganizationPicker from './OrganizationPicker';

const TryOutScreen = ({
  onBack,
  onSuccess,
  onSwitchToLogin,
  clickedContainer,
  setClickedContainer
}: {
  onBack: () => void;
  onSuccess: (session: SellerSession) => void;
  onSwitchToLogin: () => void;
  clickedContainer: clickedContainer | undefined;
  setClickedContainer: (container: clickedContainer | null) => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [organizations, setOrganizations] = useState<KernelOrganizationSummary[] | null>(null);
  const [selectingOrgId, setSelectingOrgId] = useState<string | null>(null);

  const completeTryOut = async (organizationId?: string) => {
    const result = await tryOut(username, password, organizationId);
    // `=== true` (not a truthy check) — TS only narrows the `false` branch
    // of a boolean-literal discriminant via strict equality.
    if (result.requiresOrganizationSelection === true) {
      setOrganizations(result.availableOrganizations);
      return;
    }
    const { session } = result;
    localStorage.setItem('seller', JSON.stringify(session));
    toast.success(`Welcome, ${session.username}!`);
    onSuccess(session);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError('');
    setIsSubmitting(true);
    try {
      await completeTryOut();
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
      await completeTryOut(org.id);
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
            {organizations ? <Building2 size={20} className="text-white" /> : <Rocket size={20} className="text-white" />}
          </div>
          {organizations ? (
            <>
              <h1 className="text-2xl font-black text-gray-900 tracking-tight">Choose an Organization</h1>
              <p className="text-gray-500 text-sm mt-1 font-medium">Several spaces are linked to this account. Pick the one to connect to.</p>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-black text-gray-900 tracking-tight">Try Out KSM POS</h1>
              <p className="text-gray-500 text-sm mt-1 font-medium">Sign in with your existing KSM account to jump straight in</p>
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
              <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1">Email</label>
              <div className={inputWrapper}>
                <User size={16} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="you@company.com"
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
              {isSubmitting ? 'Connecting…' : 'Try It Out'}
            </button>
          </form>
        )}

        {/* Footer */}
        <div className="p-6 bg-gray-50/50 border-t border-gray-50 text-center">
          <p className="text-sm text-gray-500 font-medium">
            Already have a KSM POS account?{' '}
            <button onClick={onSwitchToLogin} className="text-[#1F47E6] font-bold hover:underline">Sign in instead</button>
          </p>
        </div>
      </div>

      <button onClick={onBack} className="mt-6 text-gray-400 text-[10px] font-black uppercase tracking-widest hover:text-gray-600">
        Back to home
      </button>
    </div>
  );
};
export default TryOutScreen;
