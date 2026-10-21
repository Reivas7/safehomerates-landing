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
