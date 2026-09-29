import { createFileRoute } from "@tanstack/react-router";
import { ThankYouPage } from "@/components/service-landing-page";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Request Received | SafeHomeRates" },
      { name: "description", content: "Your SafeHomeRates request has been received. Explore other home services and options." },
      { property: "og:title", content: "Request Received | SafeHomeRates" },
      { property: "og:description", content: "Thanks for contacting SafeHomeRates." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/thank-you" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/thank-you" }],
  }),
  component: ThankYouPage,
});