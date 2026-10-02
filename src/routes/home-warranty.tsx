import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Check, ChevronDown, Flame, Lock, Quote, ShieldCheck, Star, Wind, Wrench, Zap, Refrigerator, Handshake, Layers } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const Route = createFileRoute("/home-warranty")({
  head: () => ({
    meta: [
      { title: "Compare Home Warranty Coverage Options | SafeHomeRates" },
      { name: "description", content: "Explore home warranty options for appliances, home systems or both, with details tailored to your home." },
      { property: "og:title", content: "Compare Home Warranty Coverage Options | SafeHomeRates" },
      { property: "og:description", content: "Tell us about your home and the coverage you are interested in." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/home-warranty" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/home-warranty" }],
  }),
  component: HomeWarrantyPage,
});

const benefits = [
  { title: "Focus on what matters", description: "Choose appliance coverage, systems coverage or both." },
  { title: "Add home context", description: "Home age and type help make your request more specific." },
  { title: "Compare at your pace", description: "Review available options and decide whether any are right for you." },
];

const faqs = [
  { question: "What can home warranty plans cover?", answer: "Coverage varies by plan. Options may include eligible repairs for household systems, appliances or both. Review plan terms for details." },
  { question: "Can I request options if I already have coverage?", answer: "Yes. Indicate that your home is currently covered and participating providers may discuss available options with you." },
  { question: "Is a home warranty the same as homeowners insurance?", answer: "No. A home warranty is a service contract with terms and exclusions; it is not homeowners insurance." },
  { question: "Are pre-existing conditions covered?", answer: "Many plans limit or exclude problems that existed before coverage began, and some require a waiting period. Ask each provider how they treat pre-existing conditions." },
  { question: "How do deductibles and service fees work?", answer: "Plans commonly charge a service fee each time you request a repair, and amounts differ by provider and plan. Compare the fee structure in the written terms." },
  { question: "How quickly are claims handled?", answer: "Response times differ by provider, location and the type of repair. Ask about typical scheduling and any coverage limits before you decide." },
];

/** Tier cards shown on the page. Informational: they point to the form. */
const tiers = [
  { icon: Refrigerator, title: "Appliances", text: "Eligible repairs for household appliances such as kitchen and laundry units.", tone: "bg-emerald-50 text-emerald-600" },
  { icon: Wrench, title: "Systems", text: "Eligible repairs for core home systems like heating, cooling, plumbing and electrical.", tone: "bg-blue-50 text-blue-600" },
  { icon: Layers, title: "Combo Plan", text: "Both systems and appliances under one plan, where offered.", tone: "bg-indigo-50 text-indigo-600", badge: "Both" },
];

const covered = [
  { icon: Wind, title: "HVAC", items: ["Heating and cooling components", "Ductwork and thermostats", "Subject to plan limits"] },
  { icon: Wrench, title: "Plumbing", items: ["Water lines and fixtures", "Water heaters", "Subject to plan limits"] },
  { icon: Zap, title: "Electrical", items: ["Wiring and panels", "Outlets and switches", "Subject to plan limits"] },
  { icon: Flame, title: "Kitchen appliances", items: ["Oven, range and cooktop", "Dishwasher and refrigerator", "Subject to plan limits"] },
];

// Trust pills were requested for the design; publish only what you can substantiate.
const trustPills = [
  { icon: Lock, text: "SSL Encryption" },
  { icon: BadgeCheck, text: "A+ Rated Provider Network" },
  { icon: Handshake, text: "Zero Obligation Guarantee" },
];

// Placeholder review: replace with real, attributable customer feedback before launch.
const testimonials = [
  { name: "Robert K.", detail: "Single-family homeowner", text: "Picking appliances, systems or both up front made it simple to compare what was actually on offer." },
  { name: "Tanya P.", detail: "Condo owner", text: "I liked that I could say I was already covered and just look at alternatives, no pressure." },
];

function Stars({ size = 18 }: { size?: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={size} className="fill-amber-400 text-amber-400" aria-hidden="true" />)}
    </div>
  );
}

/**
 * Selectable coverage cards to replace the plain radio group inside your wizard.
 * Controlled: pass the wizard's current value and its change handler for `coverageInterest`.
 */
export function CoverageCardGroup({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const opts = tiers.map((tier) => ({
    v: tier.title === "Combo Plan" ? "Both" : tier.title,
    t: tier,
  }));
  return (
    <div role="radiogroup" aria-label="What coverage interests you?" className="grid gap-3 sm:grid-cols-3">
      {opts.map(({ v, t }) => {
        const selected = value === v;
        const Icon = t.icon;
        return (
          <button key={v} type="button" role="radio" aria-checked={selected} onClick={() => onChange(v)}
            className={`relative rounded-xl border-2 bg-white p-4 text-left transition-all duration-200 hover:-translate-y-1 hover:border-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${selected ? "border-blue-600 shadow-lg ring-2 ring-blue-100" : "border-slate-200"}`}>
            {selected && <span className="absolute right-2 top-2 rounded-full bg-emerald-500 p-1 text-white"><Check size={14} aria-hidden="true" /></span>}
            <span className={`inline-flex rounded-xl p-2.5 ${t.tone}`}><Icon size={20} aria-hidden="true" /></span>
            <span className="mt-3 block font-extrabold text-slate-900">{t.title}</span>
          </button>
        );
      })}
    </div>
  );
}

function HomeWarrantyPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white">
        <img
          src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=2000&q=85"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-950/95 via-slate-900/85 to-indigo-950/80" />
        <div className="absolute -left-20 top-0 -z-10 size-96 rounded-full bg-blue-600/25 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-24 bottom-0 -z-10 size-96 rounded-full bg-emerald-500/15 blur-3xl" aria-hidden="true" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-sm font-bold text-blue-400">
              <ShieldCheck size={15} aria-hidden="true" /> Licensed Warranty Specialists &amp; Nationwide Coverage
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Comprehensive Protection for Your Home’s <span className="text-emerald-400">Critical Systems &amp; Appliances</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Compare home warranty options for the appliances and systems that keep your home running. Share a few details to help find relevant options.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Stars />
              <span className="text-sm font-semibold text-slate-200">Coverage varies by plan. Review terms and exclusions.</span>
            </div>
          </div>

          <div id="quote-form" className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 text-slate-900 shadow-2xl transition-all duration-300 hover:shadow-blue-500/10 sm:p-8
            [&_input]:focus:ring-2 [&_input]:focus:ring-blue-500 [&_select]:focus:ring-2 [&_select]:focus:ring-blue-500">
            <LeadForm serviceType="home-warranty" presentation="hero" />
            <ul className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
              {trustPills.map(({ icon: Icon, text }) => (
                <li key={text} className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700">
                  <Icon size={14} className="text-emerald-600" aria-hidden="true" /> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* COVERAGE TIERS */}
      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">Choose the coverage that fits</h2>
            <p className="mt-3 text-slate-600">Appliances, systems or both. Pick your interest in the form above.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {tiers.map(({ icon: Icon, title, text, tone, badge }) => (
              <a key={title} href="#quote-form" className="group relative rounded-xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-blue-600 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                {badge && <span className="absolute right-4 top-4 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700">Most complete</span>}
                <span className={`inline-flex rounded-xl p-3 ${tone}`}><Icon size={24} aria-hidden="true" /></span>
                <h3 className="mt-4 text-lg font-extrabold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S COVERED */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">What’s Covered</h2>
            <p className="mt-3 text-slate-600">Typical protection categories. Exact coverage, limits and exclusions vary by plan.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {covered.map(({ icon: Icon, title, items }) => (
              <article key={title} className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                <span className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-600"><Icon size={24} aria-hidden="true" /></span>
                <h3 className="mt-4 text-lg font-extrabold text-slate-900">{title}</h3>
                <p className="mt-3 text-xs font-bold text-emerald-700">May include</p>
                <ul className="mt-2 space-y-2">
                  {items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-0.5 rounded-full bg-emerald-100 p-0.5 text-emerald-600"><Check size={13} aria-hidden="true" /></span> {i}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-extrabold text-white">What homeowners say</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-xl border border-slate-700 bg-slate-800/80 p-6 shadow-xl transition duration-200 hover:-translate-y-1 hover:border-blue-400/50">
                <div className="flex items-center justify-between">
                  <Stars size={16} />
                  <span className="rounded-full bg-blue-100 p-2 text-blue-600"><Quote size={16} aria-hidden="true" /></span>
                </div>
                <blockquote className="mt-4 leading-7 text-slate-200">“{t.text}”</blockquote>
                <figcaption className="mt-4 text-sm font-bold text-amber-300">{t.name} <span className="font-medium text-slate-400">, {t.detail}</span></figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-slate-400">Illustrative examples only. Individual experiences and results vary.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-extrabold text-slate-900">Coverage questions, answered</h2>
          <div className="mt-8 border-t border-slate-200">
            {faqs.map((f) => (
              <details key={f.question} className="group border-b border-slate-200 py-3">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg px-3 py-3 font-bold text-slate-900 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 [&::-webkit-details-marker]:hidden">
                  {f.question}
                  <ChevronDown size={19} className="shrink-0 text-blue-600 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="px-3 pb-3 pt-2 leading-7 text-slate-600">{f.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="#quote-form" className="inline-flex rounded-lg bg-blue-600 px-8 py-3.5 text-lg font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300">
              See my options
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}