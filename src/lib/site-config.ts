import {
  Bath,
  CookingPot,
  Fan,
  Hammer,
  House,
  PanelsTopLeft,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const primaryNavigation = [
  { label: "Home Services", to: "/home-services" as const },
  { label: "Home Improvement", to: "/home-improvement" as const },
  { label: "Home Warranty", to: "/home-warranty" as const },
  { label: "Partners", to: "/partners" as const },
];

export const footerNavigation = [
  { label: "Terms & Conditions", to: "/terms" as const },
  { label: "Privacy Policy", to: "/privacy" as const },
  { label: "Partners", to: "/partners" as const },
];

export const popularServices = [
  { name: "Plumbing", description: "Leaks, clogs, fixtures and repairs", icon: Wrench },
  { name: "Heating & Cooling", description: "HVAC repair, service and installation", icon: Fan },
  { name: "Roofing", description: "Roof repair and replacement quotes", icon: House },
  { name: "Windows", description: "Energy-efficient window replacement", icon: PanelsTopLeft },
  { name: "Kitchen Remodel", description: "Plan and price your ideal kitchen", icon: CookingPot },
  { name: "Bathroom Remodel", description: "Updates from fixtures to full renovations", icon: Bath },
  { name: "General Contracting", description: "Vetted help for projects large and small", icon: Hammer },
  { name: "Appliance Protection", description: "Coverage for essential home systems", icon: ShieldCheck },
];

export const apiBaseUrl = import.meta.env.VITE_API_URL;