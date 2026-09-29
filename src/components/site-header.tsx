import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { primaryNavigation, serviceNavigation } from "../lib/site-config";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex shrink-0 items-center" onClick={() => setOpen(false)} aria-label="SafeHomeRates home">
          <img src="/HomeLogo.jpg" alt="SafeHomeRates" className="h-20 w-auto max-w-[380px] object-contain" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          <Link
            to="/"
            className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground outline-none transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring">
              Services <ChevronDown size={15} aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-72 rounded-lg border-border bg-background p-2 shadow-lg">
              {serviceNavigation.map((item) => (
                <DropdownMenuItem key={item.to} asChild className="cursor-pointer rounded-md p-0 focus:bg-muted">
                  <Link to={item.to} className="block w-full px-3 py-2.5">
                    <span className="block text-sm font-bold text-foreground">{item.label}</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">{item.description}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {primaryNavigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="quote">
            <a href="tel:+13077851466">Requesting a Call: +13077851466</a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </Button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            <Link
              to="/"
              className="rounded-md px-3 py-3 text-sm font-semibold text-foreground hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-3 text-sm font-semibold text-foreground hover:bg-muted [&::-webkit-details-marker]:hidden">
                Services
                <ChevronDown size={16} aria-hidden="true" className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="ml-3 border-l border-border pl-3">
                {serviceNavigation.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block rounded-md px-3 py-2.5 hover:bg-muted"
                    onClick={() => setOpen(false)}
                  >
                    <span className="block text-sm font-semibold text-foreground">{item.label}</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">{item.description}</span>
                  </Link>
                ))}
              </div>
            </details>
            {primaryNavigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-3 text-sm font-semibold text-foreground hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="quote" className="mt-3 w-full">
              <a href="tel:+13077851466">Requesting a Call: +13077851466</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}