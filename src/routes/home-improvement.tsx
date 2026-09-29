import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/page-hero";

export const Route = createFileRoute("/home-improvement")({
  head: () => ({ meta: [{ title: "Home Improvement Quotes | SafeHomeRates" }, { name: "description", content: "Compare free estimates for remodeling, renovation and home improvement projects." }, { property: "og:title", content: "Home Improvement Quotes | SafeHomeRates" }, { property: "og:description", content: "Plan your next home improvement project with quotes from suitable providers." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/home-improvement" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/home-improvement" }] }),
  component: HomeImprovementPage,
});

function HomeImprovementPage() { return <PageHero eyebrow="Home Improvement" title="Bring your next home project within reach" description="Compare estimates for upgrades and renovations without the hassle of searching one contractor at a time." points={["Kitchen remodeling", "Bathroom renovations", "Window replacement", "Roofing and exterior work"]} />; }