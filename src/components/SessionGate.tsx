import React, { useEffect, useState } from 'react';
import { PlayCircle, AlertCircle, LogOut, MapPin, Wallet } from 'lucide-react';
import { toast } from 'sonner';
import { SellerSession, PosSession, getActiveOrPendingSession, startSession } from '../lib/api';

interface SessionGateProps {
    session: SellerSession;
    onSessionStarted: (posSession: PosSession) => void;
    onLogout: () => void;
}

const SessionGate: React.FC<SessionGateProps> = ({ session, onSessionStarted, onLogout }) => {
    const [loading, setLoading] = useState(true);
    const [pending, setPending] = useState<PosSession | null>(null);
    const [isStarting, setIsStarting] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        let cancelled = false;
        getActiveOrPendingSession(session)
            .then((result) => {
                if (cancelled) return;
                if (result?.alreadyOpen) {
                    // Already running (e.g. re-logged in mid-shift) — resume straight in, no need to "start" it again.
                    onSessionStarted(result.session);
                    return;
                }
                setPending(result?.session ?? null);
            })
            .catch((err) => {
                if (cancelled) return;
                const msg = err instanceof Error ? err.message : 'Failed to load session.';
                setError(msg);
                toast.error(msg);
            })
            .finally(() => { if (!cancelled) setLoading(false); });
        return () => { cancelled = true; };
    }, [session]);

    const handleStart = async () => {
        if (!pending) return;
        setIsStarting(true);
        setError('');
        try {
            const started = await startSession(session, pending.id);
            toast.success('Session started.');
            onSessionStarted(started);
        } catch (err) {
            const msg = err instanceof Error ? err.message : 'Failed to start session.';
            setError(msg);
            toast.error(msg);
        } finally {
            setIsStarting(false);
        }
    };

    if (loading) {
        return (
            <div className="flex-1 flex items-center justify-center bg-[#F6F8FC]">
                <div className="w-8 h-8 border-4 border-gray-100 border-t-[#1F47E6] rounded-full animate-spin" />
            </div>
        );
    }

    if (!pending) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center bg-[#F6F8FC]">
                <div className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-[#03045e] p-8 text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                            <AlertCircle size={32} className="text-white" />
                        </div>
                        <h2 className="text-white text-xl font-black uppercase tracking-widest">Aucune Session</h2>
                        <p className="text-white/60 text-xs mt-1">Rien de programmé pour l'instant</p>
                    </div>

                    <div className="p-8 space-y-6 text-center">
                        <p className="text-[#99a1af] font-bold text-sm">
                            Aucune session n'est programmée pour vous. Contactez votre responsable pour en planifier une.
                        </p>
                        <button
                            onClick={onLogout}
                            className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-500 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-gray-200 transition-all"
                        >
                            <LogOut size={16} /> Déconnexion
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col items-center justify-center bg-[#F6F8FC]">
            <div className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-[#03045e] p-8 text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <PlayCircle size={32} className="text-white" />
                    </div>
                    <h2 className="text-white text-xl font-black uppercase tracking-widest">Votre Session</h2>
                    <p className="text-white/60 text-xs mt-1">Prête à démarrer</p>
                </div>

                <div className="p-8 space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <MapPin size={18} className="text-[#1F47E6]" />
                        <div>
                            <p className="text-[10px] font-black uppercase text-gray-400">Point de vente</p>
                            <p className="text-sm font-bold text-[#03045e]">{pending.salesPointId}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <Wallet size={18} className="text-[#1F47E6]" />
                        <div>
                            <p className="text-[10px] font-black uppercase text-gray-400">Fonds de caisse</p>
                            <p className="text-sm font-bold text-[#03045e]">
                                {pending.openingAmount?.toLocaleString() ?? 0} FCFA
                            </p>
                        </div>
                    </div>

                    {error && (
                        <p className="text-red-500 text-xs font-bold text-center">{error}</p>
                    )}

                    <button
                        onClick={handleStart}
                        disabled={isStarting}
                        className="w-full bg-[#1F47E6] text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-blue-200 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                    >
                        <PlayCircle size={18} />
                        {isStarting ? 'Démarrage…' : 'Démarrer la session'}
                    </button>

                    <button onClick={onLogout} className="w-full text-gray-400 text-[10px] font-black uppercase tracking-widest hover:text-gray-600">
                        Déconnexion
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SessionGate;
