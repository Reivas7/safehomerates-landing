import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ClipboardList,
  FileCheck2,
  House,
  Minus,
  Plus,
  Quote,
  ShieldCheck,
  Star,
  ThermometerSun,
  Users,
  Wrench,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { LeadForm } from "@/components/lead-form";
import { popularServices } from "../lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Compare Free Home Quotes | SafeHomeRates" },
      { name: "description", content: "Compare free quotes for home services, improvement projects and home warranty plans with SafeHomeRates." },
      { property: "og:title", content: "Compare Free Home Quotes | SafeHomeRates" },
      { property: "og:description", content: "Tell us what your home needs, get matched with vetted providers and compare your options for free." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const categories = [
  { title: "Home Services", description: "Repairs, maintenance and everyday work from independent local providers.", icon: Wrench, to: "/home-services" as const, link: "Explore home services", tone: "bg-blue-50 text-blue-600" },
  { title: "Home Improvement", description: "Plan renovations and upgrades with project-specific estimates.", icon: House, to: "/home-improvement" as const, link: "Explore home projects", tone: "bg-amber-50 text-amber-600" },
  { title: "Home Warranty", description: "Explore options for eligible repairs to home systems and appliances.", icon: ShieldCheck, to: "/home-warranty" as const, link: "Explore coverage", tone: "bg-emerald-50 text-emerald-600" },
  { title: "Roofing & HVAC", description: "Two of the most requested projects. Start with a few quick details.", icon: ThermometerSun, to: "/home-improvement" as const, link: "Start a request", tone: "bg-rose-50 text-rose-600" },
];

// Only claims the site can back up. Add "Licensed & Verified", "No Sales Pressure" or
// "60-Second Request" only once you can substantiate them (FTC/state ad rules).
const trustBadges = ["Free to compare", "No obligation to hire", "Independent providers", "Short request form"];

const steps = [
  { icon: ClipboardList, number: "01", title: "Tell Us What You Need", text: "Share your service or project details and the timing that works for you." },
  { icon: Users, number: "02", title: "Match with Local Pros", text: "Your request may be shared with relevant independent providers who can follow up." },
  { icon: FileCheck2, number: "03", title: "Compare & Save", text: "Review details, ask questions and decide what works for your home." },
];

// PLACEHOLDERS: replace with real, consented customer reviews before launch.
const testimonials = [
  { quote: "I received several options without spending hours calling around. The whole process felt straightforward.", name: "Maya R.", project: "Roofing request" },
  { quote: "We found a local HVAC company quickly and could compare the details before deciding.", name: "Daniel T.", project: "HVAC request" },
  { quote: "A convenient place to start when we were planning our kitchen update and needed estimates.", name: "Lisa M.", project: "Kitchen project" },
];

const faqs = [
  { question: "Is SafeHomeRates free to use?", answer: "Yes. Requesting and comparing quotes through SafeHomeRates is free, and there is no obligation to hire or purchase." },
  { question: "How does the matching process work?", answer: "You tell us what you need. We use those details to connect you with providers that may serve your area and fit your request." },
  { question: "Are the service providers vetted?", answer: "We work with provider networks that review participating professionals. You should still review credentials, references and terms before making a decision." },
  { question: "Will I be required to accept a quote?", answer: "No. You are free to compare your options and decide whether any provider is right for you." },
  { question: "What types of home projects can I request quotes for?", answer: "Common requests include plumbing, HVAC, roofing, windows, remodeling and home warranty coverage, among many others." },
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

const cardBase =
  "group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500";

function HomePage() {
  return (
    <main>
      {/* 1. HERO — dark navy */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0B1120] via-slate-900 to-indigo-950 text-white">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
          alt="Modern home surrounded by mature trees"
          className="absolute inset-0 -z-20 size-full object-cover opacity-20"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0B1120]/90 via-slate-900/60 to-indigo-950/70" aria-hidden="true" />
        <div className="absolute -left-24 top-0 -z-10 size-96 rounded-full bg-emerald-500/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-20 bottom-0 -z-10 size-96 rounded-full bg-indigo-500/25 blur-3xl" aria-hidden="true" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3.5 py-1.5 text-sm font-bold text-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.25)]">
              <BadgeCheck size={16} aria-hidden="true" /> A clearer way to find home help
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Compare Top Local{" "}
              <span className="text-emerald-400 [text-shadow:0_0_30px_rgba(52,211,153,0.45)]">Home Quotes</span> in Minutes
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Tell us what your home needs. We’ll help connect you with independent providers so you can compare options without the runaround.
            </p>
            <ul className="mt-8 grid gap-3 text-sm font-semibold sm:grid-cols-2">
              {["One simple request", "No cost to compare", "Your choice, always", "Independent providers"].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="rounded-full bg-emerald-400/20 p-1 text-emerald-400"><Check size={14} aria-hidden="true" /></span>
                  {t}
                </li>
              ))}
            </ul>
            <a href="#service-options" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-emerald-300 underline decoration-emerald-300/50 underline-offset-4 transition hover:decoration-emerald-300">
              Explore service options <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>

          {/* Floating form card — LeadForm props unchanged */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 text-slate-900 shadow-2xl ring-1 ring-emerald-400/20 sm:p-8 lg:-mb-6 lg:translate-y-2">
            <LeadForm
              serviceType="home-services"
              presentation="hero"
              config={{
                serviceFields: [
                  { name: "service", label: "What can we help with?", type: "select", options: ["Plumbing", "Electrical", "HVAC", "Roofing", "Windows", "Remodeling", "Home warranty", "Other"] },
                  { name: "timing", label: "When are you looking to get started?", type: "radio", options: ["As soon as possible", "This month", "Just researching"] },
                ],
              }}
            />
          </div>
        </div>
      </section>

      {/* 2. TRUST BANNER — light slate */}
      <section className="border-y border-slate-200 bg-[#F8FAFC] py-10" aria-label="Service highlights">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap justify-center gap-3">
            {trustBadges.map((badge) => (
              <li key={badge} className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                <Check size={16} aria-hidden="true" /> {badge}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. CATEGORY HUB — white */}
      <section id="service-options" className="scroll-mt-20 bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Find the right path for your home</h2>
            <p className="mt-3 leading-7 text-slate-600">Start with the kind of help you need. We’ll guide you through a few details and help you explore relevant options.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map(({ title, description, icon: Icon, to, link, tone }) => (
              <Link key={title} to={to} className={cardBase}>
                <span className={`w-fit rounded-full p-3 ${tone}`}><Icon size={24} aria-hidden="true" /></span>
                <h3 className="mt-5 text-lg font-extrabold text-slate-900">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-700">
                  {link} <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS — dark slate */}
      <section className="bg-slate-900 py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold sm:text-3xl">A little detail goes a long way</h2>
            <p className="mt-3 leading-7 text-slate-300">A few focused questions help set up a more useful conversation with providers.</p>
          </div>
          <ol className="mt-12 flex flex-col gap-6 md:flex-row">
            {steps.map(({ icon: Icon, number, title, text }) => (
              <li key={title} className="relative flex-1 overflow-hidden rounded-xl bg-white p-8 text-slate-900 shadow-xl transition duration-200 hover:-translate-y-1">
                <span className="pointer-events-none absolute -right-2 -top-4 select-none text-8xl font-black text-slate-100" aria-hidden="true">{number}</span>
                <div className="relative">
                  <span className="inline-flex rounded-full bg-emerald-50 p-3 text-emerald-600"><Icon size={22} aria-hidden="true" /></span>
                  <h3 className="mt-5 text-lg font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. POPULAR SERVICES — light slate */}
      <section className="bg-[#F8FAFC] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Popular places to start</h2>
            <p className="mt-3 leading-7 text-slate-600">Choose a common home service and tell us a little about the work.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {popularServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.name} to="/home-services" className={`${cardBase} min-h-40`}>
                  <span className="w-fit rounded-full bg-blue-50 p-3 text-blue-600"><Icon size={22} aria-hidden="true" /></span>
                  <span className="mt-4 block font-extrabold text-slate-900">{service.name}</span>
                  <span className="mt-1 block flex-1 text-sm leading-5 text-slate-600">{service.description}</span>
                  <ArrowRight size={16} className="mt-4 text-emerald-600 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS — white */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">A more considered way to compare</h2>
            <p className="mt-3 leading-7 text-slate-600">A helpful starting point should be straightforward, transparent and on your terms.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <Stars size={16} />
                  <span className="rounded-full bg-indigo-50 p-2 text-indigo-600"><Quote size={16} aria-hidden="true" /></span>
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-7 text-slate-700">“{t.quote}”</blockquote>
                <figcaption className="mt-5 border-t border-slate-200 pt-4 text-sm">
                  <strong className="text-slate-900">{t.name}</strong>
                  <span className="ml-2 text-slate-500">{t.project}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">Illustrative examples only. Individual experiences and results vary.</p>
        </div>
      </section>

      {/* 7. FAQ — dark slate */}
      <section className="bg-slate-900 py-16 text-white lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-extrabold sm:text-3xl">Frequently asked questions</h2>
          <div className="mt-10 rounded-2xl bg-white px-4 text-slate-900 shadow-xl sm:px-6">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-b border-slate-200 last:border-b-0">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg py-5 font-bold transition hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="shrink-0 rounded-full bg-emerald-50 p-1.5 text-emerald-600" aria-hidden="true">
                    <Plus size={16} className="group-open:hidden" />
                    <Minus size={16} className="hidden group-open:block" />
                  </span>
                </summary>
                <p className="pb-5 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CLOSING CTA — navy */}
      <section className="bg-[#0B1120] py-14 text-white lg:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Take the first step toward the right help.</h2>
            <p className="mt-3 text-sm text-slate-300">A short request. No cost to compare. Your decision stays yours.</p>
          </div>
          <Button asChild variant="quote" size="lg" className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
            <Link to="/home-services">Start a request <ArrowRight size={18} aria-hidden="true" /></Link>
          </Button>
        </div>
      </section>
    </main>
  );
}