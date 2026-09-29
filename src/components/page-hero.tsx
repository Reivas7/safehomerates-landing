import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
};

export function PageHero({ eyebrow, title, description, points }: PageHeroProps) {
  return (
    <main>
      <section className="bg-hero py-18 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-extrabold uppercase tracking-wide text-hero-accent">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-hero-muted">{description}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm font-semibold">
                <CheckCircle2 className="text-hero-accent" size={20} /> {point}
              </li>
            ))}
          </ul>
          <Button asChild variant="quote" size="lg" className="mt-9">
            <Link to="/home-services">Get Free Quotes <ArrowRight size={18} /></Link>
          </Button>
        </div>
      </section>
      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-extrabold uppercase tracking-wide text-brand">Simple. Free. No obligation.</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary">A better way to compare home quotes</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">Tell us what you need and we’ll help connect you with suitable providers in your area. Compare your options before deciding what works for your home and budget.</p>
        </div>
      </section>
    </main>
  );
}