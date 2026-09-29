import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock3, MapPin, PhoneCall, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Safe Home Rates" },
      { name: "description", content: "Contact Safe Home Rates by phone or mail for questions about our home service matching website." },
      { property: "og:title", content: "Contact Safe Home Rates" },
      { property: "og:description", content: "Get in touch with Safe Home Rates." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-14 text-white sm:py-20">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px]" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
            <ShieldCheck size={15} aria-hidden="true" /> Direct Customer Support &amp; Inquiries
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">We&apos;re Here to Help You Get in Touch</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Contact Safe Home Rates for help with our website or a request you submitted. For estimates, appointments, repairs, coverage, or service details, please contact the independent contractor or provider directly.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 pb-14 sm:pb-20">
        <div className="mx-auto -mt-7 grid max-w-6xl grid-cols-1 gap-5 px-4 sm:px-6 lg:-mt-8 lg:grid-cols-2 lg:gap-8 lg:px-8">
          <article className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-8">
            <span className="inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-600"><PhoneCall size={24} aria-hidden="true" /></span>
            <p className="mt-6 text-xs font-bold uppercase text-emerald-700">Phone inquiries</p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900">Talk with Safe Home Rates</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">For website assistance or general questions about submitting a request, call our team directly.</p>
            <a className="mt-5 inline-flex items-center gap-2 text-2xl font-extrabold text-slate-900 transition-colors hover:text-emerald-700" href="tel:+13077851466">
              <PhoneCall size={20} className="text-emerald-600" aria-hidden="true" /> +13077851466
            </a>
            <div className="mt-5 flex items-start gap-2 border-t border-slate-100 pt-4 text-sm text-slate-600">
              <Clock3 size={17} className="mt-0.5 shrink-0 text-slate-500" aria-hidden="true" />
              <span>Call to confirm current support availability.</span>
            </div>
            <a href="tel:+13077851466" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white shadow-md transition-all hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300 sm:w-auto">
              Call Safe Home Rates <ArrowRight size={17} aria-hidden="true" />
            </a>
          </article>

          <article className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-8">
            <span className="inline-flex rounded-xl bg-blue-100 p-3 text-blue-600"><MapPin size={24} aria-hidden="true" /></span>
            <p className="mt-6 text-xs font-bold uppercase text-blue-700">Office &amp; mailing</p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900">Mailing address</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Send written correspondence to:</p>
            <address className="mt-5 not-italic">
              <span className="flex items-start gap-3 text-base font-bold leading-7 text-slate-900">
                <MapPin size={19} className="mt-1 shrink-0 text-blue-600" aria-hidden="true" />
                <span>Safe Home Rates<br />30 N Gould St, 48907</span>
              </span>
              <span className="mt-1 block pl-8 text-sm leading-6 text-slate-600">Sheridan, WY 82801</span>
            </address>
            <div className="mt-6 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600">
              Please do not mail time-sensitive service requests. Contact your independent provider directly for active appointments or service issues.
            </div>
          </article>
        </div>

        <div className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
          <aside className="rounded-r-xl border-l-4 border-blue-600 bg-blue-50/60 p-5 text-sm leading-relaxed text-slate-700 sm:p-6">
            <p className="font-bold text-slate-900">About Safe Home Rates</p>
            <p className="mt-2">Safe Home Rates is a lead-generation service that may connect consumers with independent local service providers. We are not a contractor, insurer, or home warranty provider. Providers are independent businesses; contact them directly about estimates, appointments, services, coverage, terms, and pricing.</p>
          </aside>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:p-6">
            <div>
              <h2 className="font-extrabold text-slate-900">Need to speak with us?</h2>
              <p className="mt-1 text-sm text-slate-600">Call for website and request assistance.</p>
            </div>
            <a href="tel:+13077851466" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-800 transition hover:border-emerald-500 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
              <PhoneCall size={16} aria-hidden="true" /> +13077851466
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}