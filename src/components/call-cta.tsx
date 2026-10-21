import { Phone } from "lucide-react";
import { callHours, callNumber, referralDisclaimer } from "../lib/site-config";

export function CallCta({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const dark = tone === "dark";
  return (
    <div>
      <a
        href={`tel:${callNumber.tel}`}
        className="inline-flex flex-wrap items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 text-base font-extrabold text-white shadow-lg transition-all hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300 sm:text-lg"
      >
        <Phone size={20} aria-hidden="true" /> Talk to a local pro now: Call {callNumber.display}
      </a>
      <p className={`mt-3 text-sm font-semibold ${dark ? "text-slate-300" : "text-slate-600"}`}>
        Free to compare · No obligation · {callHours}
      </p>
      <p className={`mt-3 max-w-xl text-xs leading-5 ${dark ? "text-slate-400" : "text-slate-500"}`}>{referralDisclaimer}</p>
    </div>
  );
}

/** Hero call card. `buttonClassName` sets the page's accent colors for the call button. */
export function CallBox({ buttonClassName }: { buttonClassName: string }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 text-center text-slate-900 shadow-2xl sm:p-8">
      <h2 className="text-2xl font-extrabold text-slate-900">Talk to a local pro about your project</h2>
      <a
        href={`tel:${callNumber.tel}`}
        className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-lg font-extrabold shadow-lg transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 ${buttonClassName}`}
      >
        <Phone size={20} aria-hidden="true" /> Call {callNumber.display}
      </a>
      <p className="mt-4 text-sm font-semibold text-slate-600">Free to compare · No obligation · {callHours}</p>
    </div>
  );
}
