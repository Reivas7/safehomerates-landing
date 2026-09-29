import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Compass,
  FileCheck2,
  House,
  MessagesSquare,
  Phone,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SafeHomeRates | A Clearer Way to Find Home Help" },
      { name: "description", content: "Learn how SafeHomeRates helps homeowners explore home service, improvement and warranty options from independent providers." },
      { property: "og:title", content: "About SafeHomeRates" },
      { property: "og:description", content: "A clearer way to explore options for your home and connect with independent providers." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const heroCards = [
  { icon: House, title: "Home-focused", detail: "Services, projects and warranty interests", tone: "text-emerald-400 bg-emerald-400/10 ring-emerald-400/20" },
  { icon: UsersRound, title: "Independent providers", detail: "Explore options from separate businesses", tone: "text-cyan-400 bg-cyan-400/10 ring-cyan-400/20" },
  { icon: BadgeCheck, title: "Your choice", detail: "Compare and decide at your own pace", tone: "text-emerald-400 bg-emerald-400/10 ring-emerald-400/20" },
];

const reasons = [
  {
    icon: UsersRound,
    title: "A people-first experience",
    description: "The request starts with your needs, timing and home details, not a one-size-fits-all recommendation.",
  },
  {
    icon: FileCheck2,
    title: "Useful home categories",
    description: "Explore home services, improvement projects and warranty options in one clear place.",
  },
  {
    icon: ShieldCheck,
    title: "Your decision stays yours",
    description: "We can introduce requests to independent providers. You choose whether to speak with them or move forward.",
  },
];

const values = [
  { icon: BadgeCheck, title: "Clear choices", description: "We aim to make request options and next steps easy to understand.", badge: "bg-blue-100 text-blue-600" },
  { icon: House, title: "Home-focused help", description: "From repairs and upgrades to coverage interests, home needs guide the experience.", badge: "bg-emerald-100 text-emerald-600" },
  { icon: SearchCheck, title: "Thoughtful matching", description: "Information you provide can help identify providers whose services may fit your request.", badge: "bg-violet-100 text-violet-600" },
  { icon: UsersRound, title: "Independent providers", description: "Providers are separate businesses. You can review their services and terms directly before deciding.", badge: "bg-amber-100 text-amber-600" },
];

const steps = [
  { number: "01", title: "Tell us what you need", description: "Choose a home service, improvement project or warranty topic and share a few relevant details." },
  { number: "02", title: "Your request may be shared", description: "With your consent, request details may be introduced to relevant participating independent providers." },
  { number: "03", title: "Review your options", description: "Providers may contact you. Compare their information, pricing and terms directly." },
  { number: "04", title: "Choose what works for you", description: "There is no obligation to hire a provider or purchase a product through SafeHomeRates." },
];

function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.22),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.28),transparent_55%),radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.12),transparent_40%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 backdrop-blur-sm">
            <ShieldCheck size={15} aria-hidden="true" /> A home-focused matching service
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            A clearer, human way to care for your home.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Explore home service, improvement and warranty options, and connect with independent providers who may be relevant to your request.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {heroCards.map(({ icon: Icon, title, detail, tone }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-2xl shadow-black/20 backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:bg-white/10"
              >
                <span className={`inline-flex rounded-xl p-3 ring-1 ${tone}`}>
                  <Icon size={24} aria-hidden="true" />
                </span>
                <p className="mt-5 text-xl font-extrabold">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE REASON WE EXIST */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-wider text-emerald-600">THE REASON WE EXIST</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">Home decisions should feel more human.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Finding the right next step for a home can feel complicated. We organize the first conversation around what you need, then help make room for informed choices.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Who We Are */}
            <article className="rounded-2xl border border-slate-100 bg-white p-8 shadow-xl md:col-span-2">
              <span className="inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-700">
                <House size={26} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl font-extrabold text-slate-900">Who We Are</h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                SafeHomeRates is a home-focused lead-generation service. We help people describe what they need and may connect their request with relevant independent providers.
              </p>
              <div className="mt-8 h-1 w-16 rounded-full bg-emerald-500" aria-hidden="true" />
            </article>

            {/* Vision & Mission */}
            <article className="relative overflow-hidden rounded-2xl bg-slate-900 p-8 text-white shadow-xl">
              <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-emerald-500/20 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <span className="inline-flex rounded-xl bg-white/10 p-3 text-emerald-400">
                  <Compass size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold">Our Vision</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Make it easier to navigate home decisions with clear information, useful choices and a straightforward path to exploring providers.
                </p>
                <div className="my-6 border-t border-white/10" aria-hidden="true" />
                <span className="inline-flex rounded-xl bg-white/10 p-3 text-cyan-400">
                  <MessagesSquare size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold">Our Mission</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Help homeowners share their needs with participating providers, then give them the space to compare and decide what is right for them.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* WHY HOMEOWNERS USE US */}
      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold tracking-wider text-emerald-600">A BETTER PLACE TO START</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">Why homeowners use SafeHomeRates</h2>
            <p className="mt-4 leading-7 text-slate-600">
              We help organize the search, not make the decision for you. Share what you are looking for, then review provider information directly.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {reasons.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-xl border border-slate-200 border-t-4 border-t-emerald-500 bg-slate-50 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon size={22} className="text-emerald-600" aria-hidden="true" />
                <h3 className="mt-4 font-extrabold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-wider text-emerald-600">WHAT GUIDES US</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">Our core values</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description, badge }) => (
              <article
                key={title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className={`inline-block rounded-xl p-3 ${badge}`}>
                  <Icon size={23} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-wider text-emerald-600">OUR JOURNEY</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900">How a request moves forward</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            A simple process helps you move from a question to a clearer set of options.
          </p>

          <ol className="relative isolate mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* connector line (desktop) */}
            <div
              className="absolute left-0 right-0 top-0 -z-10 hidden h-px bg-gradient-to-r from-emerald-500/0 via-emerald-300 to-emerald-500/0 lg:block"
              aria-hidden="true"
            />
            {steps.map((step) => (
              <li key={step.number} className="relative">
                <span
                  className="pointer-events-none absolute -left-2 -top-8 -z-10 select-none text-7xl font-black text-slate-100"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <div className="h-full rounded-xl border border-slate-200 border-t-4 border-t-emerald-500 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-xs font-extrabold text-emerald-700">STEP {step.number}</span>
                  <h3 className="mt-2 text-lg font-extrabold text-slate-900">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-white pb-8 pt-4">
        <div className="relative isolate mx-4 mb-8 overflow-hidden rounded-3xl bg-slate-900 py-16 text-white shadow-2xl">
          <div
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(16,185,129,0.25),transparent_45%),radial-gradient(circle_at_10%_90%,rgba(99,102,241,0.25),transparent_50%)]"
            aria-hidden="true"
          />
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between lg:px-10">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-400">
                <Sparkles size={14} aria-hidden="true" /> TAKE THE NEXT STEP
              </p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Ready to explore options for your home?</h2>
              <p className="mt-3 leading-7 text-slate-300">
                Tell us what you are looking for. Participating independent providers may follow up about your request.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <a
                href="tel:+13077851466"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-8 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
              >
                <Phone size={17} aria-hidden="true" /> Call +13077851466
              </a>
              <a
                href="/home-services#lead-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-600 px-8 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
              >
                Request Online Quote <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
          <p className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-6 pt-6 text-xs leading-5 text-slate-400 lg:px-10">
            SafeHomeRates is a lead-generation service and is not an insurance agency, insurer, contractor or home warranty provider. Coverage and services are offered by independent third parties; availability, eligibility, terms and pricing vary. Review details directly with each provider.
          </p>
        </div>
      </section>
    </main>
  );
}