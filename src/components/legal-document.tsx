import type { ReactNode } from "react";
import { BellOff, FileText, Lock, Phone, ShieldCheck } from "lucide-react";

export type LegalSection = { id: string; title: string; content: ReactNode };

type Props = {
  title: string;
  intro: string;
  sections: LegalSection[];
  /** "sidebar" = policy hub with sticky table of contents; "agreement" = centered card with jump bar. */
  variant: "sidebar" | "agreement";
  /** Section ids rendered as high-visibility callouts. Text is not changed. */
  calloutIds?: string[];
  /** Section ids shown in the jump bar (agreement variant). Defaults to all sections. */
  navIds?: string[];
  subtitle?: string;
  badge?: string;
  /** Shown in the header badge (privacy) and the footer line. Update when the text changes. */
  lastUpdated?: string;
};

const PHONE = "+13077851466";

const proseClasses =
  "[&_p]:mt-3 [&_p]:leading-relaxed [&_p]:text-slate-600 [&_a]:font-semibold [&_a]:text-blue-700 [&_a]:underline";

export function LegalDocument({ title, intro, sections, variant, calloutIds = [], navIds, subtitle, badge, lastUpdated = "September 29, 2026" }: Props) {
  const navSections = navIds ? sections.filter((s) => navIds.includes(s.id)) : sections;

  const draftNotice = (
    <div role="note" className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
      <p className="font-bold">Draft — review with an attorney before publishing.</p>
      <p className="mt-1 leading-relaxed">{intro}</p>
    </div>
  );

  const updatedLine = <p className="mt-12 border-t border-slate-100 pt-6 text-sm text-slate-500">Last updated: {lastUpdated}</p>;

  const body = sections.map((s) => {
    const isCallout = calloutIds.includes(s.id);
    return (
      <section key={s.id} id={s.id} className="scroll-mt-28">
        <h2 className="mb-3 mt-8 flex items-center gap-2 border-b border-slate-100 pb-2 text-xl font-bold text-slate-900 sm:text-2xl">
          <span className="h-6 w-1 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
          {s.title}
        </h2>
        {isCallout ? (
          <div className={`my-4 rounded-r-lg border-l-4 border-blue-600 bg-blue-50/70 p-4 text-sm leading-relaxed text-slate-800 sm:p-5 ${proseClasses} [&_p]:text-slate-800`}>{s.content}</div>
        ) : (
          <div className={proseClasses}>{s.content}</div>
        )}
      </section>
    );
  });

  const header = (
    <header className={variant === "sidebar" ? "relative isolate overflow-hidden bg-slate-900 py-12 text-white" : "relative isolate overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 pb-16 pt-12 text-white"}>
      {variant === "sidebar" ? (
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" aria-hidden="true" />
      ) : (
        <>
          <div className="absolute -left-20 top-0 -z-10 size-80 rounded-full bg-indigo-500/25 blur-3xl" aria-hidden="true" />
          <div className="absolute -right-16 bottom-0 -z-10 size-72 rounded-full bg-blue-500/20 blur-3xl" aria-hidden="true" />
        </>
      )}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className={variant === "sidebar" ? "inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400" : "inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300"}>
          {variant === "sidebar" ? `Last Updated: ${lastUpdated}` : badge}
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-lg text-slate-300">{subtitle}</p>}
      </div>
    </header>
  );

  if (variant === "sidebar") {
    return (
      <main className="bg-slate-100/60">
        {header}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
          <aside className="lg:col-span-1">
            <nav aria-label="On this page" className="sticky top-24 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-900"><FileText size={16} className="text-blue-600" aria-hidden="true" /> On this page</p>
              <ul className="space-y-1">
                {navSections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="block rounded-md px-2 py-1.5 text-sm text-slate-600 transition hover:bg-white hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">{s.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <article className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-lg sm:p-10 lg:col-span-3">
            {draftNotice}
            {body}
            {updatedLine}
            <div className="mt-12 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-3">
              {[
                { icon: Lock, label: "SSL Security", text: "Served over an encrypted (HTTPS) connection." },
                { icon: Phone, label: "Privacy requests", text: PHONE, href: `tel:${PHONE}` },
                { icon: BellOff, label: "Opt-out", text: "Reply STOP to texts, or call to opt out." },
              ].map(({ icon: Icon, label, text, href }) => (
                <div key={label} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <span className="rounded-full bg-emerald-100 p-2 text-emerald-600"><Icon size={18} aria-hidden="true" /></span>
                  <div className="text-sm">
                    <p className="font-bold text-slate-900">{label}</p>
                    {href ? <a href={href} className="font-semibold text-blue-700 underline">{text}</a> : <p className="text-slate-600">{text}</p>}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-slate-100/60">
      {header}
      <div className="mx-auto -mt-6 mb-16 max-w-4xl rounded-2xl border border-slate-200/80 bg-white p-8 shadow-xl sm:p-12">
        <nav aria-label="Jump to clause" className="-mx-2 mb-6 flex flex-wrap gap-2 border-b border-slate-100 pb-5">
          {navSections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">{s.title}</a>
          ))}
        </nav>
        {draftNotice}
        {body}
            {updatedLine}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-blue-100 p-3 text-blue-600"><ShieldCheck size={22} aria-hidden="true" /></span>
            <div>
              <p className="font-bold text-slate-900">Questions about these terms?</p>
              <p className="text-sm text-slate-600">Contact Safe Home Rates support or legal.</p>
            </div>
          </div>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300">
            <Phone size={17} aria-hidden="true" /> {PHONE}
          </a>
        </div>
      </div>
    </main>
  );
}