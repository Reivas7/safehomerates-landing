import { Link } from "@tanstack/react-router";
import { footerNavigation } from "../lib/site-config";

export function SiteFooter() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-footer-border pb-9 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
          <div className="max-w-xl">
            <Link to="/" className="inline-flex items-center rounded-md bg-white px-2 py-1" aria-label="SafeHomeRates home">
              <img src="/HomeLogo.jpg" alt="SafeHomeRates" className="h-[88px] w-auto max-w-[420px] object-contain" />
            </Link>
            <p className="mt-4 text-sm leading-6 text-footer-muted">
              Compare ways to get help with home repairs, maintenance, improvement projects and warranty options. Tell us what your home needs and we may connect your request with independent providers.
            </p>
            <p className="mt-3 text-xs leading-5 text-footer-muted">
              SafeHomeRates is a lead-generation service. We are not a contractor, insurer or home warranty provider. Service availability, pricing and terms vary by independent provider.
            </p>
          </div>
          <nav aria-label="Quick links">
            <h2 className="text-sm font-extrabold">Quick Links</h2>
            <ul className="mt-4 grid gap-3">
              {[
                { label: "Home", to: "/" as const },
                { label: "Home Services", to: "/home-services" as const },
                { label: "Home Improvement", to: "/home-improvement" as const },
                { label: "Home Warranty", to: "/home-warranty" as const },
                ...footerNavigation,
                { label: "Contact Us", to: "/contact" as const },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm font-semibold text-footer-muted hover:text-footer-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="text-sm font-extrabold">Contact Us</h2>
            <a href="tel:+13077851466" className="mt-4 inline-block text-sm font-semibold text-footer-muted hover:text-footer-foreground">+13077851466</a>
            <address className="mt-3 text-sm not-italic leading-6 text-footer-muted">
              Safe Home Rates<br />
              30 N Gould St, 48907<br />
              Sheridan, WY 82801
            </address>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-6 text-xs text-footer-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SafeHomeRates. All rights reserved.</p>
          <p>Home service information and connections for homeowners.</p>
        </div>
      </div>
    </footer>
  );
}