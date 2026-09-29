import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/page-hero";

export const Route = createFileRoute("/home-services")({
  head: () => ({ meta: [{ title: "Home Service Quotes | SafeHomeRates" }, { name: "description", content: "Compare free quotes from home service professionals for repairs, maintenance and installations." }, { property: "og:title", content: "Home Service Quotes | SafeHomeRates" }, { property: "og:description", content: "Find home service providers and compare your options for free." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/home-services" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/home-services" }] }),
  component: HomeServicesPage,
});

function HomeServicesPage() { return <PageHero eyebrow="Home Services" title="Find reliable help for the work your home needs" description="From urgent repairs to routine maintenance, compare options from home service professionals in your area." points={["Plumbing and electrical", "Heating and cooling", "Roofing and windows", "Cleaning and maintenance"]} />; }