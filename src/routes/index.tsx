import * as Accordion from "@radix-ui/react-accordion";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  ClipboardList,
  HandCoins,
  House,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wrench,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { popularServices } from "../lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Compare Free Home Quotes | SafeHomeRates" },
      { name: "description", content: "Compare free quotes for home services, improvement projects and home warranty plans with SafeHomeRates." },
      { property: "og:title", content: "Compare Free Home Quotes | SafeHomeRates" },
      { property: "og:description", content: "Tell us what your home needs, get matched with vetted providers and compare your options for free." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const serviceCards = [
  { title: "Home Services", description: "Connect with trusted local professionals for everyday repairs and maintenance.", icon: Wrench, to: "/home-services" as const, link: "Find a home pro" },
  { title: "Home Improvement", description: "Compare estimates for upgrades, renovations and major home projects.", icon: House, to: "/home-improvement" as const, link: "Plan your project" },
  { title: "Home Warranty", description: "Explore coverage options that can help protect your home systems and appliances.", icon: ShieldCheck, to: "/home-warranty" as const, link: "Compare plans" },
];

const faqs = [
  { question: "Is SafeHomeRates free to use?", answer: "Yes. Requesting and comparing quotes through SafeHomeRates is free, and there is no obligation to hire or purchase." },
  { question: "How does the matching process work?", answer: "You tell us what you need. We use those details to connect you with providers that may serve your area and fit your request." },
  { question: "Are the service providers vetted?", answer: "We work with provider networks that review participating professionals. You should still review credentials, references and terms before making a decision." },
  { question: "Will I be required to accept a quote?", answer: "No. You are free to compare your options and decide whether any provider is right for you." },
  { question: "What types of home projects can I request quotes for?", answer: "Common requests include plumbing, HVAC, roofing, windows, remodeling and home warranty coverage, among many others." },
];

function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-hero text-primary-foreground">
        <div className="absolute inset-y-0 right-0 hidden w-2/5 border-l border-footer-border bg-primary-hover/50 lg:block" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 pb-30 pt-16 sm:px-6 sm:pt-22 lg:px-8 lg:pb-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-footer-border px-3 py-1.5 text-xs font-bold text-hero-muted">
              <BadgeCheck size={16} className="text-hero-accent" /> Trusted home quote matching
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">Compare Free Quotes for Your Home — In Minutes</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-hero-muted sm:text-xl">Tell us what you need, get matched with trusted providers, and compare your options with no cost and no obligation.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {serviceCards.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.title} to={service.to} className="group flex min-h-64 flex-col rounded-lg border border-footer-border bg-background p-6 text-foreground shadow-xl transition-transform hover:-translate-y-1 sm:p-7">
                  <span className="flex size-12 items-center justify-center rounded-md bg-accent text-brand"><Icon size={25} /></span>
                  <h2 className="mt-5 text-xl font-extrabold text-primary">{service.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{service.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand">{service.link} <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Simple from start to finish" title="How it works" description="Three quick steps can put you on the path to a better home quote." />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              { icon: ClipboardList, number: "01", title: "Tell us what you need", text: "Answer a few quick questions about your home and project." },
              { icon: Users, number: "02", title: "Get matched with vetted pros", text: "Connect with providers who may be a fit for your request." },
              { icon: HandCoins, number: "03", title: "Compare and save", text: "Review your options and choose what works for your budget." },
            ].map((step) => (
              <article key={step.title} className="relative text-center md:text-left">
                <div className="mx-auto flex size-14 items-center justify-center rounded-md bg-primary text-primary-foreground md:mx-0"><step.icon size={26} /></div>
                <span className="mt-5 block text-xs font-extrabold text-brand">STEP {step.number}</span>
                <h3 className="mt-2 text-xl font-extrabold text-primary">{step.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted py-7">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {[{ icon: Sparkles, label: "100% Free" }, { icon: Check, label: "No obligation" }, { icon: BadgeCheck, label: "Vetted partners" }, { icon: LockKeyhole, label: "Secure" }].map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 text-sm font-bold text-primary"><item.icon size={19} className="text-cta" />{item.label}</div>
          ))}
        </div>
      </section>

      <section className="bg-background py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Help for every corner of your home" title="Popular home services" description="Start with one of the services homeowners request most often." />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {popularServices.map((service) => {
              const Icon = service.icon;
              return <Link key={service.name} to="/home-services" className="group bg-background p-6 hover:bg-muted"><Icon size={25} className="text-brand" /><h3 className="mt-4 font-extrabold text-primary">{service.name}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{service.description}</p><ArrowRight size={17} className="mt-4 text-cta transition-transform group-hover:translate-x-1" /></Link>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Homeowners come first" title="A simpler way to find help" description="What homeowners value about comparing their options." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { quote: "“I received several options without spending hours calling around. The whole process felt straightforward.”", name: "Maya R.", project: "Roofing quote" },
              { quote: "“We found a local HVAC company quickly and could compare the details before deciding.”", name: "Daniel T.", project: "HVAC service" },
              { quote: "“A convenient place to start when we were planning our kitchen update and needed real estimates.”", name: "Lisa M.", project: "Kitchen remodel" },
            ].map((testimonial) => (
              <figure key={testimonial.name} className="rounded-lg border border-border bg-background p-7">
                <div className="flex gap-1 text-cta">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={16} fill="currentColor" />)}</div>
                <blockquote className="mt-5 leading-7 text-foreground">{testimonial.quote}</blockquote>
                <figcaption className="mt-6 text-sm"><strong className="text-primary">{testimonial.name}</strong><span className="ml-2 text-muted-foreground">{testimonial.project}</span></figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-muted-foreground">Illustrative testimonials. Individual experiences may vary.</p>
        </div>
      </section>

      <section className="bg-background py-18 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading eyebrow="Good to know" title="Frequently asked questions" />
          <Accordion.Root type="single" collapsible className="mt-10 border-t border-border">
            {faqs.map((faq) => (
              <Accordion.Item key={faq.question} value={faq.question} className="border-b border-border">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-5 text-left font-bold text-primary">
                    {faq.question}<ChevronDown size={19} className="shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden pb-5 text-sm leading-7 text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">{faq.answer}</Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      <section className="bg-brand py-16 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div><p className="text-sm font-extrabold text-hero-muted">READY TO GET STARTED?</p><h2 className="mt-2 text-3xl font-extrabold">Your home project deserves a better quote.</h2><p className="mt-3 text-hero-muted">It’s free to compare, and there’s no obligation.</p></div>
          <Button asChild variant="light" size="lg"><Link to="/home-services">Get Free Quotes <ArrowRight size={18} /></Link></Button>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-extrabold uppercase tracking-wide text-brand">{eyebrow}</p><h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">{title}</h2>{description && <p className="mt-4 leading-7 text-muted-foreground">{description}</p>}</div>;
}