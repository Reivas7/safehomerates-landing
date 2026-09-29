import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BadgeCheck, ChevronDown, Fan, Hammer, Home, PanelTop, ShieldCheck, Star, Sun, Utensils, FileCheck2 } from "lucide-react";
import { LeadForm, type LeadFormConfig } from "@/components/lead-form";

export const Route = createFileRoute("/home-improvement")({
  head: () => ({
    meta: [
      { title: "Compare Home Improvement Quotes | SafeHomeRates" },
      { name: "description", content: "Request project estimates for roofing, windows, kitchen and bathroom remodels, flooring, siding, solar and more." },
      { property: "og:title", content: "Compare Home Improvement Quotes | SafeHomeRates" },
      { property: "og:description", content: "Tell us about your renovation and compare options from participating providers." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/home-improvement" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/home-improvement" }],
  }),
  component: HomeImprovementPage,
});

/* ---- Form config: unchanged, so fields and step logic are preserved ---- */
const formConfig: LeadFormConfig = {
  serviceFields: [
    { name: "projectType", label: "What project are you planning?", type: "select", options: ["Roofing", "Windows", "Kitchen Remodel", "Bathroom Remodel", "Flooring", "Siding", "Solar", "Other"] },
    { name: "budget", label: "Estimated budget range", type: "select", options: ["Under $5,000", "$5,000-$14,999", "$15,000-$29,999", "$30,000-$49,999", "$50,000 or more", "Not sure yet"] },
    { name: "timeline", label: "When would you like to start?", type: "radio", options: ["As soon as possible", "Within 1-3 months", "Within 3-6 months", "Just planning"] },
  ],
};

const benefits = [
  { title: "Scope your project", description: "Choose a project category so your request starts with the right context." },
  { title: "Share your budget", description: "A rough range helps providers understand the scale you have in mind." },
  { title: "Set a timeline", description: "Whether you are ready now or planning ahead, tell providers what to expect." },
];

const faqs = [
  { question: "Do I need an exact project budget?", answer: "No. Choose the closest range or select 'Not sure yet' if you are still exploring costs." },
  { question: "Can I request a quote for a project not listed?", answer: "Yes. Choose Other and share any additional context with the provider when they contact you." },
  { question: "Am I committed to starting the work?", answer: "No. Requesting options does not obligate you to hire a provider or proceed with a project." },
];

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=75`;
const projects = [
  { icon: Home, label: "Roofing", tag: "Repair & replacement", src: img("photo-1632759145351-1d592919f522") },
  { icon: PanelTop, label: "Windows & Siding", tag: "Curb appeal", src: img("photo-1560518883-ce09059eeffa") },
  { icon: Utensils, label: "Kitchen & Bath", tag: "Most requested", src: img("photo-1556911220-bff31c812dba") },
  { icon: Fan, label: "HVAC", tag: "Comfort upgrades", src: img("photo-1585771724684-38269d6639fd") },
  { icon: Sun, label: "Solar", tag: "Energy savings", src: img("photo-1509391366360-2e959784a276") },
  { icon: Hammer, label: "Flooring & More", tag: "Something else?", src: img("photo-1581858726788-75bc0f6a952d") },
];

// Claims below were requested for the design. Only publish them if you can substantiate them.
const trust = [
  { icon: ShieldCheck, title: "Licensed & Insured Pros", text: "Providers are asked about their credentials." },
  { icon: FileCheck2, title: "Free No-Obligation Quotes", text: "Requesting options never commits you to hire." },
  { icon: BadgeCheck, title: "50,000+ Projects Matched", text: "Homeowners connected with providers." },
];

// Placeholder reviews: replace with real, attributable customer feedback before launch.
const reviews = [
  { name: "Karen L.", project: "Roof replacement", text: "I picked a budget range and timeline, and providers reached out with relevant questions instead of generic pitches." },
  { name: "James W.", project: "Kitchen remodel", text: "Quick form, no pressure. I compared a few options before deciding anything." },
  { name: "Alicia M.", project: "Solar install", text: "Being able to say 'just planning' meant I could research without feeling rushed." },
];

function Stars({ size = 18 }: { size?: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} className="fill-amber-400 text-amber-400" aria-hidden="true" />
      ))}
    </div>
  );
}

/** Reusable animated progress bar. Wire `step`/`total` to your wizard's state (e.g. step 2 of 3). */
export function StepProgress({ step, total }: { step: number; total: number }) {
  const pct = Math.round((step / total) * 100);
  return (
    <div className="mb-5" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={step} aria-label={`Step ${step} of ${total}`}>
      <div className="mb-1.5 flex justify-between text-xs font-bold text-slate-500">
        <span>Step {step} of {total}</span>
        <span className="text-emerald-600">{pct}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 transition-all duration-500 ease-out" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <h3>
        <button type="button" aria-expanded={open} onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-bold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
          {question}
          <ChevronDown size={20} aria-hidden="true" className={`shrink-0 text-amber-600 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </button>
      </h3>
      <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden"><p className="pb-5 leading-7 text-slate-600">{answer}</p></div>
      </div>
    </div>
  );
}

function HomeImprovementPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-950/75" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(154,84,30,0.18),transparent_50%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1.5 text-sm font-bold text-amber-400">
              <BadgeCheck size={15} aria-hidden="true" /> Verified Local Contractors &amp; Estimates
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transform &amp; Protect <span className="text-amber-400">Your Home</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Planning a renovation starts with knowing what your project may involve. Share your project type, budget and timeline to help connect with relevant participating providers.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Stars />
              <span className="text-sm font-semibold text-slate-200">Trusted by homeowners planning their next project</span>
            </div>
          </div>

          {/* Floating form card */}
          <div id="quote-form" className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 text-slate-900 shadow-2xl transition-all duration-300 hover:shadow-amber-500/10 sm:p-8
            [&_input]:focus:ring-2 [&_input]:focus:ring-amber-500 [&_select]:focus:ring-2 [&_select]:focus:ring-amber-500 [&_textarea]:focus:ring-2 [&_textarea]:focus:ring-amber-500">
            <LeadForm serviceType="home-improvement" config={formConfig} presentation="hero" />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-slate-200 bg-slate-50 py-12">
        <ul className="mx-auto grid max-w-6xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {trust.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-start gap-4 rounded-xl border border-slate-200/80 bg-white p-5 shadow-lg transition duration-200 hover:-translate-y-1 hover:border-amber-300">
              <span className="rounded-xl bg-amber-100 p-3 text-amber-600"><Icon size={24} aria-hidden="true" /></span>
              <div>
                <p className="font-extrabold text-slate-900">{title}</p>
                <p className="mt-1 text-sm text-slate-600">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* PROJECT GRID */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Popular Improvement Projects</h2>
          <p className="mt-3 max-w-2xl text-slate-600">Pick the closest match to start your request. Not listed? Choose Other in the form.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(({ icon: Icon, label, tag, src }) => (
              <a key={label} href="#quote-form" className="group relative block h-64 overflow-hidden rounded-2xl bg-slate-800 shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500">
                <img src={src} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-slate-900/10" />
                <span className="absolute left-4 top-4 rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-300 backdrop-blur">{tag}</span>
                <div className="absolute bottom-0 flex items-center gap-3 p-5">
                  <span className="rounded-xl bg-amber-100 p-3 text-amber-600"><Icon size={22} aria-hidden="true" /></span>
                  <span className="text-xl font-extrabold text-white">{label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <Stars size={24} />
            <h2 className="text-3xl font-extrabold text-white">What homeowners are saying</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-xl transition duration-200 hover:-translate-y-1 hover:border-amber-400/50">
                <Stars size={16} />
                <blockquote className="mt-4 leading-7 text-slate-200">{r.text}</blockquote>
                <figcaption className="mt-4 text-sm font-bold text-amber-400">{r.name} <span className="font-medium text-slate-400">, {r.project}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-slate-900">Frequently asked questions</h2>
          <div className="mt-6 border-t border-slate-200">
            {faqs.map((f) => <FaqItem key={f.question} {...f} />)}
          </div>
          <a href="#quote-form" className="mt-10 inline-flex rounded-lg bg-amber-500 px-8 py-3.5 text-lg font-extrabold text-slate-950 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300">
            Get my estimate
          </a>
        </div>
      </section>
    </main>
  );
}