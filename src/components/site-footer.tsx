import { Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { footerNavigation } from "../lib/site-config";

export function SiteFooter() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 border-b border-footer-border pb-8 md:flex-row">
          <div className="max-w-xl">
            <Link to="/" className="inline-flex items-center gap-2 text-lg font-extrabold">
              <ShieldCheck size={24} aria-hidden="true" /> SafeHomeRates
            </Link>
            <p className="mt-4 text-sm leading-6 text-footer-muted">
              SafeHomeRates is a lead-generation service and not a contractor, insurer or warranty provider.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-3" aria-label="Footer navigation">
            {footerNavigation.map((item) => (
              <Link key={item.to} to={item.to} className="text-sm font-semibold text-footer-muted hover:text-footer-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="pt-6 text-xs text-footer-muted">© {new Date().getFullYear()} SafeHomeRates. All rights reserved.</p>
      </div>
    </footer>
  );
}