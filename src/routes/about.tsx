import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Compass,
  FileCheck2,
  House,
  MessagesSquare,
  SearchCheck,
  ShieldCheck,
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

const principles = [
  {
    icon: House,
    title: "Who We Are",
    description: "SafeHomeRates is a home-focused lead-generation service. We help people describe what they need and may connect their request with relevant independent providers.",
  },
  {
    icon: Compass,
    title: "Our Vision",
    description: "Make it easier to navigate home decisions with clear information, useful choices and a straightforward path to exploring providers.",
  },
  {
    icon: MessagesSquare,
    title: "Our Mission",
    description: "Help homeowners share their needs with participating providers, then give them the space to compare and decide what is right for them.",
  },
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
  {
    icon: BadgeCheck,
    title: "Clear choices",
    description: "We aim to make request options and next steps easy to understand.",
  },
  {
    icon: House,
    title: "Home-focused help",
    description: "From repairs and upgrades to coverage interests, home needs guide the experience.",
  },
  {
    icon: SearchCheck,
    title: "Thoughtful matching",
    description: "Information you provide can help identify providers whose services may fit your request.",
  },
  {
    icon: UsersRound,
    title: "Independent providers",
    description: "Providers are separate businesses. You can review their services and terms directly before deciding.",
  },
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
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-16 text-white sm:py-20">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px]" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
            <ShieldCheck size={15} aria-hidden="true" /> A home-focused matching service
          </span>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">A clearer, human way to care for your home.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Explore home service, improvement and warranty options, and connect with independent providers who may be relevant to your request.
          </p>

          <div className="mt-9 grid max-w-4xl gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md sm:grid-cols-3 sm:p-6">
            {[
              { title: "Home-focused", detail: "Services, projects and warranty interests" },
              { title: "Independent providers", detail: "Explore options from separate businesses" },
              { title: "Your choice", detail: "Compare and decide at your own pace" },
            ].map((item, index) => (
              <div key={item.title} className={`px-2 py-3 text-center sm:px-4 ${index > 0 ? "sm:border-l sm:border-white/10" : ""}`}>
                <p className="text-lg font-extrabold text-white sm:text-xl">{item.title}</p>
                <p className="mt-2 text-sm leading-5 text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-wider text-emerald-600">THE REASON WE EXIST</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">Home decisions should feel more human.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">Finding the right next step for a home can feel complicated. We organize the first conversation around what you need, then help make room for informed choices.</p>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <span className="inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-700"><Icon size={23} aria-hidden="true" /></span>
                <h3 className="mt-5 text-lg font-extrabold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold tracking-wider text-emerald-600">A BETTER PLACE TO START</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">Why homeowners use SafeHomeRates</h2>
            <p className="mt-4 leading-7 text-slate-600">We help organize the search, not make the decision for you. Share what you are looking for, then review provider information directly.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {reasons.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
                <Icon size={22} className="text-emerald-600" aria-hidden="true" />
                <h3 className="mt-4 font-extrabold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-wider text-emerald-600">WHAT GUIDES US</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">Our core values</h2>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                <span className="inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-600"><Icon size={23} aria-hidden="true" /></span>
                <h3 className="mt-5 text-lg font-extrabold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-wider text-emerald-600">OUR JOURNEY</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900">How a request moves forward</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">A simple process helps you move from a question to a clearer set of options.</p>
          <ol className="relative mt-9 grid gap-4 border-l-2 border-emerald-200 pl-6 sm:grid-cols-2 sm:gap-5">
            {steps.map((step) => (
              <li key={step.number} className="relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6">
                <span className="absolute -left-[2.05rem] top-6 flex size-8 items-center justify-center rounded-full border-4 border-slate-50 bg-emerald-600 text-xs font-extrabold text-white">{step.number.slice(1)}</span>
                <span className="text-xs font-extrabold text-emerald-700">STEP {step.number}</span>
                <h3 className="mt-2 text-lg font-extrabold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-14 text-white sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-wider text-emerald-400">TAKE THE NEXT STEP</p>
            <h2 className="mt-3 text-3xl font-extrabold">Ready to explore options for your home?</h2>
            <p className="mt-3 leading-7 text-slate-300">Tell us what you are looking for. Participating independent providers may follow up about your request.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="tel:+13077851466" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300">
              Call +13077851466 <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href="/home-services#lead-form" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              Request Online Quote
            </a>
          </div>
        </div>
        <p className="mx-auto mt-9 max-w-6xl px-4 text-xs leading-5 text-slate-400 sm:px-6 lg:px-8">
          SafeHomeRates is a lead-generation service and is not an insurance agency, insurer, contractor or home warranty provider. Coverage and services are offered by independent third parties; availability, eligibility, terms and pricing vary. Review details directly with each provider.
        </p>
      </section>
    </main>
  );
}