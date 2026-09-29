import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, CheckCircle2, Clock3, ShieldCheck } from "lucide-react";
import { LeadForm, type LeadFormConfig, type LeadServiceType } from "@/components/lead-form";
import { Button } from "@/components/ui/button";

type ServiceLandingPageProps = {
  serviceType: LeadServiceType;
  eyebrow: string;
  headline: string;
  intro: string;
  config: LeadFormConfig;
  why: string;
  benefits: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

const trustPoints = [
  { icon: ShieldCheck, title: "Your request, handled securely", description: "Your details are used to help connect your request with relevant providers." },
  { icon: BadgeCheck, title: "Options from participating providers", description: "Review available providers and decide what works for your home." },
  { icon: Clock3, title: "No-cost request", description: "Submitting a request is free and does not obligate you to purchase." },
];

export function ServiceLandingPage({
  serviceType,
  eyebrow,
  headline,
  intro,
  config,
  why,
  benefits,
  faqs,
}: ServiceLandingPageProps) {
  return (
    <main className="pb-20 lg:pb-0">
      <section className="bg-hero pb-10 pt-10 text-primary-foreground sm:pb-14 sm:pt-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-extrabold uppercase tracking-wide text-hero-accent">{eyebrow}</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{headline}</h1>
        </div>
      </section>

      <LeadForm serviceType={serviceType} config={config} />

      <section className="border-y border-border bg-background py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-wide text-brand">Why SafeHomeRates</p>
            <h2 className="mt-3 text-2xl font-extrabold text-primary">A clearer way to get started</h2>
            <p className="mt-4 leading-7 text-muted-foreground">{intro} {why}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {trustPoints.map(({ icon: Icon, title, description }) => (
              <article key={title} className="border-l-2 border-cta pl-4">
                <Icon size={21} className="text-brand" aria-hidden="true" />
                <h3 className="mt-3 font-bold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-wide text-brand">The SafeHomeRates difference</p>
            <h2 className="mt-3 text-2xl font-extrabold text-primary">Useful choices for your next home decision</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <article key={benefit.title} className="border-t border-border bg-background p-5 sm:p-6">
                <span className="text-sm font-extrabold text-brand">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-extrabold text-primary">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-extrabold uppercase tracking-wide text-brand">Answers before you begin</p>
          <h2 className="mt-3 text-2xl font-extrabold text-primary">Frequently asked questions</h2>
          <div className="mt-7 divide-y divide-border border-y border-border">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-primary marker:hidden">
                  {faq.question}
                  <span className="text-brand transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur lg:hidden">
        <Button asChild variant="quote" className="w-full">
          <a href="#lead-form">Get free options <ArrowRight size={17} aria-hidden="true" /></a>
        </Button>
      </div>
    </main>
  );
}

export function ThankYouPage() {
  return (
    <main className="bg-background">
      <section className="bg-hero px-4 py-16 text-center text-primary-foreground sm:py-20">
        <CheckCircle2 className="mx-auto text-hero-accent" size={44} aria-hidden="true" />
        <p className="mt-5 text-sm font-extrabold uppercase tracking-wide text-hero-accent">Request received</p>
        <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">Thanks! A specialist will contact you shortly.</h1>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-hero-muted">Your request is on its way. Keep an eye on your phone and inbox for a follow-up.</p>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-wide text-brand">Explore other services</p>
            <h2 className="mt-2 text-2xl font-extrabold text-primary">What else can we help with?</h2>
          </div>
          <Button asChild variant="outline"><Link to="/">Back to SafeHomeRates</Link></Button>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { title: "Home services", description: "Find help with repairs, maintenance and more.", to: "/home-services" as const },
            { title: "Home improvement", description: "Compare options for your next renovation.", to: "/home-improvement" as const },
            { title: "Home warranty", description: "Explore coverage for systems and appliances.", to: "/home-warranty" as const },
          ].map((service) => (
            <Link key={service.to} to={service.to} className="group border border-border p-5 hover:bg-muted sm:p-6">
              <h3 className="font-extrabold text-primary">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand">Explore <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}