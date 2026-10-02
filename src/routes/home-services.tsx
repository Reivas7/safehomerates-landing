import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Clock, Droplets, Wrench, Zap, Wind, Bug, Sparkles, Leaf, ShieldCheck, Star, Quote, ChevronDown } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const Route = createFileRoute("/home-services")({
  head: () => ({
    meta: [
      { title: "Compare Local Home Service Quotes | SafeHomeRates" },
      { name: "description", content: "Request free options for plumbing, electrical, HVAC, pest control, cleaning, landscaping and other home services." },
      { property: "og:title", content: "Compare Local Home Service Quotes | SafeHomeRates" },
      { property: "og:description", content: "Tell us what your home needs and compare local home service options." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/home-services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/home-services" }],
  }),
  component: HomeServicesPage,
});

const HERO_IMG = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80";
const CTA_IMG = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80";

const services = [
  { icon: Droplets, label: "Plumbing", tone: "bg-blue-100 text-blue-600" },
  { icon: Zap, label: "Electrical", tone: "bg-amber-100 text-amber-600" },
  { icon: Wind, label: "HVAC", tone: "bg-sky-100 text-sky-600" },
  { icon: Bug, label: "Pest Control", tone: "bg-rose-100 text-rose-600" },
  { icon: Sparkles, label: "Cleaning", tone: "bg-violet-100 text-violet-600" },
  { icon: Leaf, label: "Landscaping", tone: "bg-emerald-100 text-emerald-600" },
];

const benefits = [
  { icon: Wrench, title: "Start with your service", description: "Choose from common home services or tell us about something else.", tone: "bg-blue-100 text-blue-600" },
  { icon: Clock, title: "Set your timing", description: "Let providers know whether you need help soon or are still researching.", tone: "bg-emerald-100 text-emerald-600" },
  { icon: BadgeCheck, title: "Explain the job", description: "A short description adds useful context to your request.", tone: "bg-amber-100 text-amber-600" },
];

const trust = [
  { icon: ShieldCheck, text: "Free to request" },
  { icon: BadgeCheck, text: "No obligation to hire" },
  { icon: Clock, text: "Options at your pace" },
];

const testimonials = [
  { name: "Dana R.", role: "Homeowner", quote: "I described a leaking water heater in two sentences and had someone reach out the same afternoon." },
  { name: "Marcus T.", role: "Homeowner", quote: "The short form made it easy. I compared a few options and picked the one that fit my schedule." },
  { name: "Priya S.", role: "Landlord", quote: "Handy for finding help across a few properties without calling around all day." },
];
// NOTE: replace the testimonials above with real, verifiable customer feedback before launch.

const faqs = [
  { question: "Does it cost anything to request options?", answer: "No. Sending a request through SafeHomeRates is free, and you are not required to hire a provider." },
  { question: "Which home services can I ask about?", answer: "You can request plumbing, electrical, HVAC, pest control, cleaning, landscaping or another home service." },
  { question: "When will a provider contact me?", answer: "Availability varies by service and location. Participating providers may contact you using the details you submit." },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={18} className="fill-amber-400 text-amber-400" aria-hidden="true" />
      ))}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
      {children}
    </span>
  );
}

function HomeServicesPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* 1. HERO: deep navy, photo wash, floating form card */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
        <img src={HERO_IMG} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-indigo-950/60" />
        <div className="absolute -right-24 top-10 -z-10 size-96 rounded-full bg-emerald-500/20 blur-3xl" aria-hidden="true" />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3.5 py-1.5 text-sm font-bold text-emerald-300">
              <Wrench size={15} aria-hidden="true" /> Home services
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Find local help for the work <span className="text-amber-300">your home needs</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Tell us what you need and where you need it. Share a few details to help participating providers understand the job before they reach out.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Stars />
              <span className="text-sm font-semibold text-slate-200">Rated by homeowners like you</span>
            </div>
            <ul className="mt-7 flex flex-wrap gap-3">
              {trust.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-sm font-semibold text-white backdrop-blur transition duration-200 hover:-translate-y-1 hover:bg-white/15">
                  <Icon size={16} className="text-emerald-300" aria-hidden="true" /> {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Floating wizard card */}
          <div id="quote-form" className="scroll-mt-24 rounded-2xl border border-slate-200/80 bg-white p-5 text-slate-900 shadow-2xl ring-1 ring-black/5 transition-all duration-300 hover:shadow-emerald-500/10 sm:p-7">
            <LeadForm serviceType="home-services" presentation="hero" />
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP: light warm slate */}
      <section className="border-y border-slate-200 bg-[#F1F5F9] py-6">
        <ul className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {trust.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center justify-center gap-3 rounded-xl border border-slate-200/80 bg-white px-4 py-3 shadow-lg transition duration-200 hover:-translate-y-1 hover:border-emerald-300">
              <span className="rounded-full bg-emerald-100 p-2.5 text-emerald-600"><Icon size={20} aria-hidden="true" /></span>
              <span className="font-bold text-slate-800">{text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. SERVICES: clean white */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Pill>Popular requests</Pill>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900">What does your home need?</h2>
            <p className="mt-3 text-slate-600">Pick a category to start your request in a few minutes.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {services.map(({ icon: Icon, label, tone }) => (
              <a key={label} href="#quote-form" className="group flex flex-col items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-5 text-center shadow-lg transition duration-200 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500">
                <span className={`rounded-full p-3 ${tone}`}><Icon size={24} aria-hidden="true" /></span>
                <span className="text-sm font-bold text-slate-800">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BENEFITS: warm slate with image card */}
      <section className="bg-[#F1F5F9] py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-stretch gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative min-h-72 overflow-hidden rounded-2xl shadow-xl">
            <img src={CTA_IMG} alt="Bright, comfortable living room in a well-kept home" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <Stars />
              <p className="mt-2 text-xl font-extrabold">A well-kept home starts with one request.</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900">How it works</h2>
            {benefits.map(({ icon: Icon, title, description, tone }) => (
              <article key={title} className="flex gap-4 rounded-xl border border-slate-200/80 bg-white p-5 shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-xl">
                <span className={`h-fit rounded-full p-3 ${tone}`}><Icon size={22} aria-hidden="true" /></span>
                <div>
                  <h3 className="font-extrabold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              </article>
            ))}
            <a href="#quote-form" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300 active:ring-4 active:ring-emerald-300">
              Start my request
            </a>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS: deep indigo */}
      <section className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-white">Homeowners talk about the process</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-emerald-400/50">
                <div className="flex items-center justify-between">
                  <Stars />
                  <span className="rounded-full bg-blue-100 p-2 text-blue-600"><Quote size={16} aria-hidden="true" /></span>
                </div>
                <blockquote className="mt-4 leading-7 text-slate-200">{t.quote}</blockquote>
                <figcaption className="mt-4 text-sm font-bold text-amber-300">{t.name} <span className="font-medium text-slate-400">, {t.role}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ: white */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-extrabold text-slate-900">Common questions</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details key={f.question} className="group rounded-xl border border-slate-200/80 bg-white p-5 shadow-lg transition duration-200 open:border-emerald-300 open:shadow-xl">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500">
                  {f.question}
                  <span className="rounded-full bg-emerald-100 p-1.5 text-emerald-600"><ChevronDown size={16} className="transition group-open:rotate-180" aria-hidden="true" /></span>
                </summary>
                <p className="mt-3 leading-7 text-slate-600">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLOSING CTA */}
      <section className="bg-slate-900 py-14 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold">Ready to get your home taken care of?</h2>
          <p className="mt-3 text-slate-300">It's free, quick, and there's no obligation to hire.</p>
          <a href="#quote-form" className="mt-7 inline-flex rounded-lg bg-emerald-600 px-8 py-3.5 text-lg font-bold text-white shadow-xl transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300">
            Get free options
          </a>
        </div>
      </section>
    </main>
  );
}