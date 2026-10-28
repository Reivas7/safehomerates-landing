import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, CloudRain, DoorOpen, Fan, Hammer, Home, MapPin, PanelTop, Phone, ShowerHead, Sun, Utensils, FileCheck2 } from "lucide-react";
import { CallBox } from "@/components/call-cta";
import { LeadForm } from "@/components/lead-form";
import { callNumber } from "@/lib/site-config";

export const Route = createFileRoute("/home-improvement")({
  head: () => ({
    meta: [
      { title: "Compare Home Improvement Quotes | SafeHomeRates" },
      { name: "description", content: "Talk to a local pro about roofing, windows, kitchen and bathroom remodels, walk-in tubs and showers, doors, flooring, gutters, siding, solar and more." },
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

const benefits = [
  { title: "Scope your project", description: "Choose a project category so your request starts with the right context." },
  { title: "Share your budget", description: "A rough range helps providers understand the scale you have in mind." },
  { title: "Set a timeline", description: "Whether you are ready now or planning ahead, tell providers what to expect." },
];

const faqs = [
  { question: "Do I need an exact project budget?", answer: "No. Choose the closest range or select 'Not sure yet' if you are still exploring costs." },
  { question: "What if my project isn't listed?", answer: "Call and tell us about your project. We'll try to connect you with a local pro who handles that kind of work." },
  { question: "Am I committed to starting the work?", answer: "No. Requesting options does not obligate you to hire a provider or proceed with a project." },
];

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=75`;
const projects = [
  { icon: Home, label: "Roofing", tag: "Repair & replacement", src: img("photo-1632759145351-1d592919f522") },
  { icon: PanelTop, label: "Windows & Siding", tag: "Curb appeal", src: img("photo-1784932328897-ba9e9df97a93") },
  { icon: Utensils, label: "Kitchen & Bath", tag: "Most requested", src: img("photo-1556911220-bff31c812dba") },
  { icon: Fan, label: "HVAC", tag: "Comfort upgrades", src: img("photo-1718203862467-c33159fdc504") },
  { icon: Sun, label: "Solar", tag: "Energy savings", src: img("photo-1509391366360-2e959784a276") },
  { icon: ShowerHead, label: "Walk-in Tubs & Showers", tag: "Safer bathing", src: img("photo-1600566752355-35792bedcfea") },
  { icon: DoorOpen, label: "Doors", tag: "Entry & patio", src: img("photo-1770827960635-89263df7bb63") },
  { icon: CloudRain, label: "Gutters", tag: "Exterior protection", src: img("photo-1524568292009-5c8f3fe5dcc7") },
  { icon: Hammer, label: "Flooring & More", tag: "Something else?", src: img("photo-1581858726788-75bc0f6a952d") },
];

// Only claims the site can back up. Don't add licensing, vetting or volume claims without proof.
const trust = [
  { icon: MapPin, title: "Local Home Service Pros", text: "Talk to independent providers who serve your area." },
  { icon: FileCheck2, title: "Free to Compare", text: "Calling or sending a request never commits you to hire." },
  { icon: Phone, title: "One Call to Start", text: "Tell us about your project and we'll help connect you." },
];

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
              <MapPin size={15} aria-hidden="true" /> Local home service pros in your area
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transform &amp; Protect <span className="text-amber-400">Your Home</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Planning a renovation starts with knowing what your project may involve. Share your project type, budget and timeline to help connect with relevant participating providers.
            </p>
          </div>

          {/* Call box */}
          <CallBox buttonClassName="bg-amber-500 text-slate-950 hover:bg-amber-400 focus-visible:ring-amber-300" />
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
          <p className="mt-3 max-w-2xl text-slate-600">Not sure which fits? Call and tell us about your project.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(({ icon: Icon, label, tag, src }) => (
              <a key={label} href={`tel:${callNumber.tel}`} aria-label={`${label}: call ${callNumber.display}`} className="group relative block h-64 overflow-hidden rounded-2xl bg-slate-800 shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500">
                <img src={src} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-slate-900/10" />
                <span className="absolute left-4 top-4 rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-300 backdrop-blur">{tag}</span>
                <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5">
                  <span className="rounded-xl bg-amber-100 p-3 text-amber-600"><Icon size={22} aria-hidden="true" /></span>
                  <span className="text-xl font-extrabold text-white">{label}</span>
                  <span className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-2 text-sm font-extrabold text-slate-950 transition group-hover:bg-amber-400">
                    <Phone size={15} aria-hidden="true" /> Call
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* REQUEST FORM */}
      <section id="quote-form" className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-extrabold text-slate-900">Prefer not to call? Send your request online</h2>
          <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 text-slate-900 shadow-2xl sm:p-8
            [&_input]:focus:ring-2 [&_input]:focus:ring-amber-500 [&_select]:focus:ring-2 [&_select]:focus:ring-amber-500 [&_textarea]:focus:ring-2 [&_textarea]:focus:ring-amber-500">
            <LeadForm serviceType="home-improvement" presentation="hero" />
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
          <a href={`tel:${callNumber.tel}`} className="mt-10 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-8 py-3.5 text-lg font-extrabold text-slate-950 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300">
            <Phone size={20} aria-hidden="true" /> Call {callNumber.display}
          </a>
        </div>
      </section>
    </main>
  );
}