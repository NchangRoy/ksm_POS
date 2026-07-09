import React from 'react';
import {
  ScanLine, PlayCircle, Building2, Printer, Wallet, ShieldCheck,
  Settings2, Rocket, Layers, Zap, Sparkles, Check, Minus, X, LogIn
} from 'lucide-react';

interface LandingScreenProps {
  onSignIn: () => void;
  onTryOut: () => void;
}

const FEATURES = [
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
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: 'radial-gradient(80% 60% at 90% -10%, #ECF3FA 0%, transparent 55%), radial-gradient(60% 50% at 0% 100%, #ECF3FA 0%, transparent 60%)',
          }}
        />
        <div className="max-w-5xl mx-auto px-8 pt-16 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#E5E7EB] shadow-sm text-[#1F47E6] rounded-full text-[11px] font-black uppercase tracking-widest mb-7">
            <Sparkles size={13} /> The POS Terminal, by KSM
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] mb-6">
            Sell fast,<br />
            <span className="text-[#1F47E6]">reconcile faster.</span> Right at the till.
          </h1>
          <p className="text-lg text-[#64748b] font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            KSM POS puts sessions, stock and invoicing on the same screen as the sale — every
            receipt printed instantly, every session reconciled, every sale point scoped to its own agency.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onTryOut}
              className="inline-flex items-center gap-2 bg-[#1F47E6] hover:bg-[#03045e] text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-blue-100 transition-all active:scale-95"
            >
              <Rocket size={16} /> Try It Out
            </button>
            <button
              onClick={onSignIn}
              className="inline-flex items-center gap-2 bg-white border-2 border-[#E5E7EB] hover:border-[#1F47E6] text-[#03045e] px-8 py-4 rounded-2xl font-black text-sm transition-all active:scale-95"
            >
              <LogIn size={16} /> Sign In
            </button>
          </div>
          <div className="flex items-center justify-center gap-6 mt-10 text-[#99a1af]">
            <div className="flex items-center gap-2 text-xs font-bold">
              <Layers size={15} className="text-[#1F47E6]" /> Multi-agency sale points
            </div>
            <div className="flex items-center gap-2 text-xs font-bold">
              <Zap size={15} className="text-[#1F47E6]" /> Real-time sessions
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#F6F8FC] border-y border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-8 py-20">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3">From setup to sale, in four steps</h2>
            <p className="text-[#99a1af] font-medium">Everything is configured once, then it just runs on the till.</p>
          </div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-[#E5E7EB]" />
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-white border-2 border-[#1F47E6] text-[#1F47E6] flex items-center justify-center mb-5 shadow-sm">
                    <Icon size={22} />
                  </div>
                  <span className="text-[11px] font-black text-[#1F47E6]/50 tracking-widest mb-2">STEP {step.step}</span>
                  <h3 className="text-sm font-black mb-2">{step.title}</h3>
                  <p className="text-xs text-[#99a1af] font-medium leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3">Everything your till needs</h2>
          <p className="text-[#99a1af] font-medium">A single system for selling, printing and reconciling, right at the point of sale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="h-full p-7 rounded-3xl border border-[#E5E7EB] bg-white hover:shadow-xl hover:shadow-blue-50 hover:border-[#1F47E6]/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#ECF3FA] text-[#1F47E6] flex items-center justify-center mb-5">
                  <Icon size={20} />
                </div>
                <h3 className="text-sm font-black mb-2">{feature.title}</h3>
                <p className="text-xs text-[#99a1af] font-medium leading-relaxed">{feature.description}</p>
              </div>
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
      <section className="max-w-5xl mx-auto px-8 py-20">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-[#03045e] to-[#1F47E6] px-10 py-16 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{ background: 'radial-gradient(50% 80% at 20% 20%, white 0%, transparent 60%)' }}
          />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">Ready to open your first till?</h2>
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
      </section>

      <footer className="border-t border-[#E5E7EB] py-8 text-center">
        <p className="text-xs text-[#99a1af] font-medium">© {new Date().getFullYear()} KSM. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingScreen;
