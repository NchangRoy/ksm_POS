import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
    PlayCircle,
    AlertCircle,
    LogOut,
    MapPin,
    Wallet,
    Clock,
    CheckCircle2,
    Timer,
    CalendarClock,
} from 'lucide-react';
import { toast } from 'sonner';
import {
    SellerSession,
    PosSession,
    SalesPoint,
    getActiveOrPendingSession,
    getSalesPointById,
    startSession,
    parseSessionDate,
} from '../lib/api';

interface SessionGateProps {
    session: SellerSession;
    onSessionStarted: (posSession: PosSession) => void;
    onLogout: () => void;
}

// ─── Utilities ────────────────────────────────────────────────────────────────

function formatCountdown(ms: number): string {
    if (ms <= 0) return '00:00:00';
    const totalSec = Math.floor(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    return [h, m, s].map((v) => String(v).padStart(2, '0')).join(':');
}

function formatDateTime(d: Date): string {
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Delay auto-start by this many ms after the countdown hits zero.
// 15 s gives the backend's own guard plenty of margin.
const AUTO_START_BUFFER_MS = 15_000;

// ─── Component ────────────────────────────────────────────────────────────────

const SessionGate: React.FC<SessionGateProps> = ({ session, onSessionStarted, onLogout }) => {
    const [loading, setLoading] = useState(true);
    const [posSession, setPosSession] = useState<PosSession | null>(null);
    const [salesPointName, setSalesPointName] = useState<string | null>(null);
    const [isStarting, setIsStarting] = useState(false);
    const [error, setError] = useState('');

    // Countdown / phase tracking
    const [now, setNow] = useState(() => Date.now());
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    // Once true, auto-start will NEVER fire again (even on retry failure).
    // The user must click the button manually if auto-start fails.
    const autoStartFiredRef = useRef(false);

    // ── fetch the seller's session on mount ──────────────────────────────────
    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        getActiveOrPendingSession(session)
            .then(async (result) => {
                if (cancelled) return;
                if (result?.alreadyOpen) {
                    onSessionStarted(result.session);
                    return;
                }
                const ps = result?.session ?? null;
                setPosSession(ps);

                // Resolve sales point name in parallel (best-effort)
                if (ps?.salesPointId) {
                    getSalesPointById(session, ps.salesPointId)
                        .then((sp) => { if (!cancelled) setSalesPointName(sp?.salesPointName ?? null); })
                        .catch(() => {});
                }
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

    // ── Auto-start callback ───────────────────────────────────────────────────
    // Guard is PERMANENT: if it fires and fails, we stop retrying and show the
    // error so the seller can click manually rather than hammering the server.
    const startApiSession = useCallback(async (ps: PosSession) => {
        if (autoStartFiredRef.current) return;
        autoStartFiredRef.current = true; // never reset — prevents infinite loop
        setIsStarting(true);
        try {
            const started = await startSession(session, ps.id, ps.salesPointId);
            toast.success('Session started — bonne vente !');
            onSessionStarted(started);
        } catch (err) {
            const msg = err instanceof Error ? err.message : 'Failed to auto-start session. Click the button to retry.';
            // Do NOT reset autoStartFiredRef here — that caused the infinite loop.
            // The seller must click the button manually.
            setError(msg);
            toast.error(msg);
        } finally {
            setIsStarting(false);
        }
    }, [session, onSessionStarted]);

    // ── 1-second clock that drives the countdown & phase transitions ─────────
    useEffect(() => {
        if (!posSession) return;

        const startDate = parseSessionDate(posSession.startTime);
        const endDate = parseSessionDate(posSession.endTime);

        const tick = () => {
            const n = Date.now();
            setNow(n);

            // Auto-start only fires once (guard is permanent after first attempt)
            if (
                startDate &&
                n >= startDate.getTime() + AUTO_START_BUFFER_MS &&
                posSession.status === 'PENDING' &&
                !autoStartFiredRef.current
            ) {
                startApiSession(posSession);
                return;
            }

            // Auto-close when end time is passed
            if (endDate && n >= endDate.getTime()) {
                toast.error('Your session has ended — logging out.');
                onLogout();
            }
        };

        tick();
        intervalRef.current = setInterval(tick, 1000);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [posSession, startApiSession, onLogout]);

    // ── Manual start (seller-initiated, or retry after auto-start failure) ───
    const handleManualStart = async () => {
        if (!posSession) return;
        setIsStarting(true);
        setError('');
        // Reset the guard so this explicit click is allowed even if auto-start
        // already ran and failed (the one case where resetting is safe — it's
        // a deliberate human action, not an infinite automatic retry).
        autoStartFiredRef.current = false;
        try {
            const started = await startSession(session, posSession.id, posSession.salesPointId);
            toast.success('Session started.');
            onSessionStarted(started);
        } catch (err) {
            autoStartFiredRef.current = true; // re-lock so auto-loop can't restart
            const msg = err instanceof Error ? err.message : 'Failed to start session.';
            setError(msg);
            toast.error(msg);
        } finally {
            setIsStarting(false);
        }
    };

    // ─── Derived state ────────────────────────────────────────────────────────
    const startDate = posSession ? parseSessionDate(posSession.startTime) : null;
    const endDate   = posSession ? parseSessionDate(posSession.endTime)   : null;

    // "Not yet startable" = countdown to (startTime + buffer) hasn't finished
    const msUntilAutoStart = startDate ? startDate.getTime() + AUTO_START_BUFFER_MS - now : null;
    const isNotYetStartable = msUntilAutoStart !== null && msUntilAutoStart > 0;

    // Show raw time-until-start (without the buffer) for a cleaner UX
    const msUntilStart = startDate ? startDate.getTime() - now : null;
    const countdownStr = msUntilStart !== null && msUntilStart > 0
        ? formatCountdown(msUntilStart)
        : '00:00:00';

    const msUntilEnd = endDate ? endDate.getTime() - now : null;
    const endCountdownStr = msUntilEnd !== null && msUntilEnd > 0
        ? formatCountdown(msUntilEnd)
        : '00:00:00';

    const displaySalesPoint = salesPointName ?? posSession?.salesPointId ?? '—';

    // ─── Loading ──────────────────────────────────────────────────────────────
    if (loading) {
        return (
            <div className="flex-1 flex items-center justify-center bg-[#F6F8FC]">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-gray-100 border-t-[#1F47E6] rounded-full animate-spin" />
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400">Chargement de la session…</p>
                </div>
            </div>
        );
    }

    // ─── No session found ─────────────────────────────────────────────────────
    if (!posSession) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center bg-[#F6F8FC] p-6">
                <div className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-[#03045e] p-8 text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                            <AlertCircle size={32} className="text-amber-300" />
                        </div>
                        <h2 className="text-white text-xl font-black uppercase tracking-widest">Aucune Session</h2>
                        <p className="text-white/60 text-xs mt-1">Rien de programmé pour {session.username}</p>
                    </div>
                    <div className="p-8 space-y-6 text-center">
                        <p className="text-[#99a1af] font-bold text-sm leading-relaxed">
                            Aucune session n'est programmée pour vous. Contactez votre responsable pour en planifier une.
                        </p>
                        {error && (
                            <p className="text-red-500 text-xs font-bold bg-red-50 border border-red-100 rounded-xl px-4 py-3">{error}</p>
                        )}
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

    // ─── Session card ─────────────────────────────────────────────────────────
    return (
        <div className="flex-1 flex flex-col items-center justify-center bg-[#F6F8FC] p-6">
            <div className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden">

                {/* Header */}
                <div className={`p-8 text-center transition-colors duration-700 ${
                    isStarting ? 'bg-blue-600' :
                    isNotYetStartable ? 'bg-[#03045e]' : 'bg-emerald-600'
                }`}>
                    <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        {isStarting
                            ? <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                            : isNotYetStartable
                                ? <CalendarClock size={32} className="text-white" />
                                : <CheckCircle2 size={32} className="text-white" />
                        }
                    </div>
                    <h2 className="text-white text-xl font-black uppercase tracking-widest">
                        {isStarting ? 'Démarrage…' :
                         isNotYetStartable ? 'Session Programmée' : 'Prête à Démarrer'}
                    </h2>
                    <p className="text-white/60 text-xs mt-1">
                        {isStarting ? 'Connexion au point de vente…' :
                         isNotYetStartable
                            ? (msUntilStart !== null && msUntilStart > 0
                                ? `Démarrage dans ${countdownStr}`
                                : 'Démarrage imminent…')
                            : 'La session peut démarrer maintenant'}
                    </p>
                </div>

                {/* Countdown ring (only when waiting) */}
                {isNotYetStartable && (
                    <div className="flex flex-col items-center py-6 bg-gradient-to-b from-[#03045e]/5 to-transparent border-b border-gray-100">
                        <div className="relative flex items-center justify-center w-32 h-32">
                            <div className="absolute inset-0 rounded-full border-4 border-[#1F47E6]/20 animate-ping" style={{ animationDuration: '2s' }} />
                            <div className="absolute inset-0 rounded-full border-4 border-[#1F47E6]/10" />
                            <div className="z-10 text-center">
                                <Timer size={20} className="text-[#1F47E6] mx-auto mb-1" />
                                <span className="text-2xl font-black text-[#03045e] tabular-nums">{countdownStr}</span>
                            </div>
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-3">
                            Démarrage automatique
                        </p>
                    </div>
                )}

                {/* Session details */}
                <div className="p-6 space-y-3">
                    {/* Start / End times */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                            <Clock size={16} className="text-[#1F47E6] shrink-0" />
                            <div>
                                <p className="text-[10px] font-black uppercase text-blue-400">Début</p>
                                <p className="text-sm font-bold text-[#03045e]">
                                    {startDate ? formatDateTime(startDate) : '—'}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <Clock size={16} className="text-gray-400 shrink-0" />
                            <div>
                                <p className="text-[10px] font-black uppercase text-gray-400">Fin</p>
                                <p className="text-sm font-bold text-[#03045e]">
                                    {endDate ? formatDateTime(endDate) : '—'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Duration (while pending) */}
                    {isNotYetStartable && startDate && endDate && (
                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <Timer size={16} className="text-gray-400 shrink-0" />
                            <div>
                                <p className="text-[10px] font-black uppercase text-gray-400">Durée de la session</p>
                                <p className="text-sm font-bold text-[#03045e]">
                                    {formatCountdown(endDate.getTime() - startDate.getTime())}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Remaining time (once ready) */}
                    {!isNotYetStartable && endDate && (
                        <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-100">
                            <Timer size={16} className="text-amber-500 shrink-0" />
                            <div>
                                <p className="text-[10px] font-black uppercase text-amber-400">Fin de session dans</p>
                                <p className="text-sm font-bold text-[#03045e]">{endCountdownStr}</p>
                            </div>
                        </div>
                    )}

                    {/* Sales point — name resolved from API, falls back to UUID */}
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <MapPin size={16} className="text-[#1F47E6] shrink-0" />
                        <div className="min-w-0">
                            <p className="text-[10px] font-black uppercase text-gray-400">Point de vente</p>
                            <p className="text-sm font-bold text-[#03045e] truncate">{displaySalesPoint}</p>
                        </div>
                    </div>

                    {/* Opening amount */}
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <Wallet size={16} className="text-[#1F47E6] shrink-0" />
                        <div>
                            <p className="text-[10px] font-black uppercase text-gray-400">Fonds de caisse</p>
                            <p className="text-sm font-bold text-[#03045e]">
                                {(posSession.openingAmount ?? 0).toLocaleString()} FCFA
                            </p>
                        </div>
                    </div>

                    {error && (
                        <p className="text-red-500 text-xs font-bold text-center bg-red-50 border border-red-100 rounded-xl px-4 py-3">{error}</p>
                    )}

                    {/* CTA button */}
                    <button
                        onClick={handleManualStart}
                        disabled={isStarting || isNotYetStartable}
                        className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-2
                            ${isNotYetStartable || isStarting
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'
                                : 'bg-[#1F47E6] text-white shadow-blue-200 hover:scale-[1.02] active:scale-[0.98]'}
                            disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100`}
                    >
                        <PlayCircle size={18} />
                        {isStarting
                            ? 'Démarrage…'
                            : isNotYetStartable
                                ? `Commence à ${startDate ? formatDateTime(startDate) : '—'}`
                                : 'Démarrer la session'}
                    </button>

                    <button
                        onClick={onLogout}
                        className="w-full flex items-center justify-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-widest hover:text-gray-600 py-2"
                    >
                        <LogOut size={12} /> Déconnexion
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SessionGate;
