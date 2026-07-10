import React from 'react';
import {
  ScanLine, PlayCircle, Building2, Printer, Wallet, ShieldCheck,
  Settings2, Rocket, Layers, Zap, Sparkles, Check, Minus, X, LogIn, ArrowRight,
  CloudOff, Receipt
} from 'lucide-react';
import Reveal from './Reveal';

interface LandingScreenProps {
  onSignIn: () => void;
  onTryOut: () => void;
}

const Logo = ({ variant = 'dark' }: { variant?: 'dark' | 'light' }) => (
  <div className="flex items-center gap-2.5">
    <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-white bg-gradient-to-br from-[#1F47E6] to-[#03045e] shadow-lg shadow-blue-200 text-sm">
      KSM
    </div>
    <div className="flex items-baseline gap-1.5">
      <span className={`text-lg font-black tracking-tight ${variant === 'dark' ? 'text-[#03045e]' : 'text-white'}`}>POS</span>
      <span className={`text-[10px] font-bold uppercase tracking-widest ${variant === 'dark' ? 'text-[#99a1af]' : 'text-white/50'}`}>by KSM</span>
    </div>
  </div>
);

const FEATURES = [
  {
    icon: CloudOff,
    title: 'Offline-First Selling',
    description: 'Keep selling through a dropped connection — every sale, quotation and product lookup runs off a local cache and queues for sync, with a live connectivity indicator right on the till.',
  },
  {
    icon: ScanLine,
    title: 'Touch-First POS Terminal',
    description: 'Ring up sales fast on a touch-first interface built for busy sale points, with or without a keyboard.',
  },
  {
    icon: PlayCircle,
    title: 'Real-Time Seller Sessions',
    description: 'Open, suspend and reconcile a session per sale point with a full cash-in / cash-out audit trail.',
  },
  {
    icon: Printer,
    title: 'Instant Receipts & Invoices',
    description: 'Print thermal receipts or full A4 invoices straight from the till, wired to your printer module.',
  },
  {
    icon: Building2,
    title: 'Multi-Agency Ready',
    description: 'Every sale point, seller and session is scoped correctly across your agencies from day one.',
  },
  {
    icon: Wallet,
    title: 'Live Cash Reconciliation',
    description: 'Track cash in and cash out per session, and close the till with numbers that actually match.',
  },
  {
    icon: ShieldCheck,
    title: 'Role-Based Access',
    description: 'Fine-grained seller permissions for pricing, discounts and refunds, agency by agency.',
  },
];

const STEPS = [
  {
    icon: Building2,
    step: '01',
    title: 'Set up your sale points',
    description: 'Add agencies and sale points, then invite sellers with exactly the permissions they need.',
  },
  {
    icon: Settings2,
    step: '02',
    title: 'Configure pricing & numbering',
    description: 'Set tiered pricing per sale size and compose your receipt/invoice numbering your own way.',
  },
  {
    icon: PlayCircle,
    step: '03',
    title: 'Open a session on the till',
    description: 'A seller opens a session on their sale point and starts selling — cash in, cash out, tracked live.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Sell, print & reconcile',
    description: 'Every sale prints instantly and rolls straight into your invoice journal, agency by agency.',
  },
];

type ComparisonMark = 'yes' | 'partial' | 'no';

const COMPARISON_ROWS: { feature: string; ksm: ComparisonMark; odoo: ComparisonMark; classic: ComparisonMark }[] = [
  { feature: 'Fully offline selling, auto-synced on reconnect', ksm: 'yes', odoo: 'partial', classic: 'no' },
  { feature: 'Touch-first POS terminal', ksm: 'yes', odoo: 'yes', classic: 'no' },
  { feature: 'Real-time seller sessions with cash reconciliation', ksm: 'yes', odoo: 'partial', classic: 'no' },
  { feature: 'Thermal receipt and A4 invoice from the same sale', ksm: 'yes', odoo: 'partial', classic: 'partial' },
  { feature: 'Native multi-agency (isolated agencies and sale points)', ksm: 'yes', odoo: 'partial', classic: 'no' },
  { feature: 'Tiered, negotiable pricing per sale size', ksm: 'yes', odoo: 'no', classic: 'no' },
  { feature: 'Fully custom document numbering', ksm: 'yes', odoo: 'partial', classic: 'no' },
  { feature: 'Real-time stock, synced with every sale', ksm: 'yes', odoo: 'yes', classic: 'partial' },
  { feature: 'Fine-grained roles per seller and per agency', ksm: 'yes', odoo: 'partial', classic: 'partial' },
  { feature: 'Cash in / cash out tracking per session', ksm: 'yes', odoo: 'partial', classic: 'no' },
  { feature: 'Real-time link to accounting and invoicing', ksm: 'yes', odoo: 'yes', classic: 'no' },
  { feature: 'Several organizations on the same platform', ksm: 'yes', odoo: 'partial', classic: 'no' },
  { feature: 'Local or cloud deployment, no per-till license', ksm: 'yes', odoo: 'no', classic: 'no' },
  { feature: 'Total cost fit for the African market', ksm: 'yes', odoo: 'no', classic: 'partial' },
];

const MarkIcon = ({ mark }: { mark: ComparisonMark }) => {
  if (mark === 'yes') {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600">
        <Check size={14} strokeWidth={3} />
      </span>
    );
  }
  if (mark === 'partial') {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-600">
        <Minus size={14} strokeWidth={3} />
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-500">
      <X size={14} strokeWidth={3} />
    </span>
  );
};

const LandingScreen: React.FC<LandingScreenProps> = ({ onSignIn, onTryOut }) => {
  return (
    <div className="flex-1 overflow-y-auto bg-white text-[#03045e]">
      {/* TOP ACCENT */}
      <div className="h-1 bg-gradient-to-r from-[#1F47E6] via-[#03045e] to-[#1F47E6]" />

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-[#E5E7EB]/70">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            <a href="#workflow" className="text-sm font-bold text-[#64748b] hover:text-[#1F47E6] transition-colors">How it works</a>
            <a href="#features" className="text-sm font-bold text-[#64748b] hover:text-[#1F47E6] transition-colors">Features</a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onSignIn}
              className="text-sm font-bold text-[#03045e] hover:text-[#1F47E6] transition-colors px-2"
            >
              Sign In
            </button>
            <button
              onClick={onTryOut}
              className="flex items-center gap-1.5 bg-[#1F47E6] hover:bg-[#03045e] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-100 transition-all active:scale-95"
            >
              Try Out <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: 'radial-gradient(80% 60% at 90% -10%, #ECF3FA 0%, transparent 55%), radial-gradient(60% 50% at 0% 100%, #ECF3FA 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0 -z-10 opacity-[0.4]"
          style={{
            backgroundImage: 'radial-gradient(#E5E7EB 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(60% 50% at 75% 20%, black 0%, transparent 70%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-28 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          {/* Left: copy */}
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#E5E7EB] shadow-sm text-[#1F47E6] rounded-full text-[11px] font-black uppercase tracking-widest mb-7">
              <Sparkles size={13} /> The POS Terminal, by KSM
            </div>
            <h1 className="text-5xl md:text-[3.75rem] font-black text-[#03045e] tracking-tight leading-[1.05] mb-6">
              Sell fast,<br />
              <span className="bg-gradient-to-r from-[#1F47E6] to-[#03045e] bg-clip-text text-transparent">reconcile faster.</span><br />
              Right at the till.
            </h1>
            <p className="text-lg text-[#64748b] font-medium max-w-xl mb-10 leading-relaxed">
              KSM POS puts sessions, stock and invoicing on the same screen as the sale — every
              receipt printed instantly, every session reconciled, every sale point scoped to its own agency.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onTryOut}
                className="flex items-center gap-2 bg-[#1F47E6] hover:bg-[#03045e] text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-blue-100 transition-all active:scale-95 hover:shadow-2xl hover:shadow-blue-200"
              >
                <Rocket size={16} /> Try It Out
              </button>
              <button
                onClick={onSignIn}
                className="flex items-center gap-2 bg-white border-2 border-[#E5E7EB] hover:border-[#1F47E6] text-[#03045e] px-8 py-4 rounded-2xl font-black text-sm transition-all active:scale-95"
              >
                <LogIn size={16} /> Sign In
              </button>
            </div>
            <div className="flex items-center gap-6 text-[#99a1af]">
              <div className="flex items-center gap-2 text-xs font-bold">
                <Layers size={15} className="text-[#1F47E6]" /> Multi-agency sale points
              </div>
              <div className="flex items-center gap-2 text-xs font-bold">
                <Zap size={15} className="text-[#1F47E6]" /> Real-time sessions
              </div>
            </div>
          </Reveal>

          {/* Right: product mockup */}
          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-80 h-80 bg-[#ECF3FA] rounded-full blur-3xl -z-10" />
              <div className="rounded-[2rem] bg-white border border-[#E5E7EB] shadow-2xl shadow-blue-100 overflow-hidden rotate-1 hover:rotate-0 transition-transform duration-500 flex">
                {/* fake icon rail */}
                <div className="w-12 bg-[#F6F8FC] border-r border-[#E5E7EB] py-4 flex flex-col items-center gap-3 shrink-0">
                  <div className="w-7 h-7 rounded-lg bg-[#1F47E6] shadow-sm" />
                  <div className="w-6 h-6 rounded-md bg-[#E5E7EB]/70" />
                  <div className="w-6 h-6 rounded-md bg-[#E5E7EB]/70" />
                  <div className="w-6 h-6 rounded-md bg-[#E5E7EB]/70" />
                </div>
                <div className="flex-1 min-w-0">
                  {/* fake window chrome */}
                  <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-[#E5E7EB] bg-[#F6F8FC]">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
                    <div className="ml-3 h-2 w-36 rounded-full bg-[#E5E7EB]/70" />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-3 w-28 rounded-full bg-[#03045e]/10" />
                      <div className="h-7 w-24 rounded-lg bg-[#1F47E6]/90" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="rounded-xl bg-[#ECF3FA] p-3 space-y-2">
                          <div className="h-2 w-10 rounded-full bg-[#1F47E6]/30" />
                          <div className="h-4 w-14 rounded-full bg-[#03045e]/20" />
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl border border-[#E5E7EB] overflow-hidden">
                      {[1, 2, 3, 4].map((row) => (
                        <div key={row} className="flex items-center gap-3 px-4 py-3 border-b border-[#E5E7EB] last:border-b-0">
                          <div className="w-7 h-7 rounded-lg bg-[#ECF3FA] shrink-0" />
                          <div className="h-2.5 flex-1 rounded-full bg-[#E5E7EB]" />
                          <div className="h-2.5 w-14 rounded-full bg-emerald-100" />
                          <div className="h-5 w-5 rounded bg-[#ECF3FA]" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-xl border border-[#E5E7EB] px-5 py-4 flex items-center gap-3 -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
                  <Receipt size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#99a1af] uppercase tracking-widest">Sale reconciled</p>
                  <p className="text-sm font-black text-[#03045e]">REC-20260710-0143</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="workflow" className="bg-[#F6F8FC] border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#03045e] tracking-tight mb-3">From setup to sale, in four steps</h2>
              <p className="text-[#99a1af] font-medium">Everything is configured once, then it just runs on the till.</p>
            </div>
          </Reveal>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-[#E5E7EB]" />
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.step} delay={i * 100}>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 w-14 h-14 rounded-2xl bg-white border-2 border-[#1F47E6] text-[#1F47E6] flex items-center justify-center mb-5 shadow-sm">
                      <Icon size={22} />
                    </div>
                    <span className="text-[11px] font-black text-[#1F47E6]/50 tracking-widest mb-2">STEP {step.step}</span>
                    <h3 className="text-base font-black text-[#03045e] mb-2">{step.title}</h3>
                    <p className="text-sm text-[#99a1af] font-medium leading-relaxed">{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORKFLOW / SHOWCASE */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-[2rem] bg-white border border-[#E5E7EB] p-10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#ECF3FA] text-[#1F47E6] flex items-center justify-center mb-6">
                  <Receipt size={22} />
                </div>
                <h3 className="text-xl font-black text-[#03045e] mb-3">Every sale, printed and reconciled instantly</h3>
                <p className="text-sm text-[#64748b] font-medium leading-relaxed max-w-md">
                  Configure exactly how each receipt and invoice number is built — org code, branch code,
                  tax status, date, sequence — per document type. What prints at the till looks like your business, not a template.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 font-mono text-xs font-bold text-[#1F47E6] bg-[#ECF3FA] rounded-xl px-4 py-3 w-fit">
                KSM-REC-CPA-20260710-0143
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-[2rem] bg-[#03045e] p-10 flex flex-col justify-between text-white relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-40"
                style={{ background: 'radial-gradient(60% 60% at 90% 10%, #1F47E6 0%, transparent 70%)' }}
              />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6">
                  <Building2 size={22} />
                </div>
                <h3 className="text-xl font-black mb-3">Built for multi-agency tills</h3>
                <p className="text-sm text-white/70 font-medium leading-relaxed">
                  Agencies, sellers, sale points and sessions, all scoped correctly — every seller sees only what their agency needs.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-24">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#03045e] tracking-tight mb-3">Everything your till needs</h2>
            <p className="text-[#99a1af] font-medium">A single system for selling, printing and reconciling, right at the point of sale.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={(i % 3) * 100}>
                <div className="h-full p-8 rounded-[2rem] border border-[#E5E7EB] bg-white hover:shadow-xl hover:shadow-blue-50 hover:border-[#1F47E6]/20 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-[#ECF3FA] text-[#1F47E6] flex items-center justify-center mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-black text-[#03045e] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#99a1af] font-medium leading-relaxed">{feature.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-[#F6F8FC] border-y border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-8 py-20">
          <div className="text-center mb-4">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3">Point of Sale: KSM vs Odoo</h2>
            <p className="text-[#99a1af] font-medium max-w-xl mx-auto">
              Sessions, multi-agency scoping and cash reconciliation — a POS built for how sales
              actually happen on the ground.
            </p>
          </div>

          <div className="mt-10 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm overflow-hidden">
            <div className="grid grid-cols-[1.6fr_0.8fr_0.8fr_0.8fr] bg-[#F6F8FC]">
              <div className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-[#99a1af]">Feature</div>
              <div className="px-4 py-4 text-center text-[11px] font-black uppercase tracking-widest text-[#1F47E6]">
                KSM<br /><span className="text-[9px] font-bold normal-case tracking-normal text-[#1F47E6]/60">Our Solution</span>
              </div>
              <div className="px-4 py-4 text-center text-[11px] font-black uppercase tracking-widest text-[#99a1af]">Odoo</div>
              <div className="px-4 py-4 text-center text-[11px] font-black uppercase tracking-widest text-[#99a1af]">Classic Solutions</div>
            </div>

            <div className="divide-y divide-[#E5E7EB]">
              {COMPARISON_ROWS.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-[1.6fr_0.8fr_0.8fr_0.8fr] items-center ${i % 2 === 1 ? 'bg-[#F6F8FC]/60' : ''}`}
                >
                  <div className="px-6 py-4 text-sm font-bold">{row.feature}</div>
                  <div className="px-4 py-4 flex justify-center"><MarkIcon mark={row.ksm} /></div>
                  <div className="px-4 py-4 flex justify-center"><MarkIcon mark={row.odoo} /></div>
                  <div className="px-4 py-4 flex justify-center"><MarkIcon mark={row.classic} /></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-[#99a1af]">
            <div className="flex items-center gap-2"><MarkIcon mark="yes" /> Included</div>
            <div className="flex items-center gap-2"><MarkIcon mark="partial" /> Limited / paid option</div>
            <div className="flex items-center gap-2"><MarkIcon mark="no" /> Not available</div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <Reveal>
          <div className="rounded-[2.5rem] bg-gradient-to-br from-[#03045e] to-[#1F47E6] px-10 py-16 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-30"
              style={{ background: 'radial-gradient(50% 80% at 20% 20%, white 0%, transparent 60%)' }}
            />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">Ready to open your first till?</h2>
              <p className="text-white/70 font-medium mb-8 max-w-xl mx-auto">
                Try KSM POS out with an existing account, or sign in with your organization credentials to open a session.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={onTryOut}
                  className="inline-flex items-center gap-2 bg-white text-[#1F47E6] px-8 py-4 rounded-2xl font-black text-sm shadow-lg transition-all active:scale-95 hover:bg-[#ECF3FA]"
                >
                  <Rocket size={16} /> Try It Out
                </button>
                <button
                  onClick={onSignIn}
                  className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-2xl font-black text-sm transition-all active:scale-95"
                >
                  <LogIn size={16} /> Sign In
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#03045e]">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-10">
          <div>
            <Logo variant="light" />
            <p className="text-sm text-white/50 font-medium mt-4 max-w-xs leading-relaxed">
              KSM POS is the point-of-sale terminal of the KSM business suite.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-widest text-white/40 mb-4">Product</p>
            <div className="flex flex-col gap-2.5">
              <a href="#workflow" className="text-sm font-bold text-white/70 hover:text-white transition-colors w-fit">How it works</a>
              <a href="#features" className="text-sm font-bold text-white/70 hover:text-white transition-colors w-fit">Features</a>
              <button onClick={onSignIn} className="text-sm font-bold text-white/70 hover:text-white transition-colors w-fit text-left">Sign In</button>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-widest text-white/40 mb-4">Company</p>
            <div className="flex flex-col gap-2.5">
              <span className="text-sm font-bold text-white/70 w-fit">KSM</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <p className="text-xs text-white/40 font-medium">© {new Date().getFullYear()} KSM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingScreen;
