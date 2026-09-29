import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/page-hero";

export const Route = createFileRoute("/home-warranty")({
  head: () => ({ meta: [{ title: "Compare Home Warranty Plans | SafeHomeRates" }, { name: "description", content: "Explore home warranty options for household systems and appliances." }, { property: "og:title", content: "Compare Home Warranty Plans | SafeHomeRates" }, { property: "og:description", content: "Compare coverage options for essential home systems and appliances." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/home-warranty" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/home-warranty" }] }),
  component: HomeWarrantyPage,
});

function HomeWarrantyPage() { return <PageHero eyebrow="Home Warranty" title="Explore protection for the systems you rely on" description="Compare home warranty choices that may help with eligible repair and replacement costs." points={["Major home systems", "Kitchen appliances", "Optional add-on coverage", "Clear plan comparisons"]} />; }