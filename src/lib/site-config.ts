import {
  Bath,
  Cctv,
  CloudRain,
  CookingPot,
  DoorOpen,
  Fan,
  Flame,
  Hammer,
  House,
  Layers,
  PanelsTopLeft,
  ShieldCheck,
  ShowerHead,
  WashingMachine,
  Wrench,
  Zap,
} from "lucide-react";

// TODO(Toby): replace with the ResultCalls tracking number and confirmed hours.
// Interim value is the existing company line, so calls are NOT yet tracked.
export const callNumber = { display: "+13077851466", tel: "+13077851466" };
export const callHours = "Mon–Fri 9am–6pm ET";

export const referralDisclaimer =
  "SafeHomeRates is a free referral service. When you call, you’ll be connected with an independent home service provider in our network. We are not a contractor and don’t perform any work ourselves. Availability and pricing vary by provider.";

export const primaryNavigation = [
  { label: "About Us", to: "/about" as const },
  { label: "Contact Us", to: "/contact" as const },
];

export const serviceNavigation = [
  { label: "Home Services", to: "/home-services" as const, description: "Repairs, maintenance and local services" },
  { label: "Home Improvement", to: "/home-improvement" as const, description: "Projects, renovations and upgrades" },
  { label: "Home Warranty", to: "/home-warranty" as const, description: "Explore systems and appliance options" },
];

export const footerNavigation = [
  { label: "About Us", to: "/about" as const },
  { label: "Terms & Conditions", to: "/terms" as const },
  { label: "Privacy Policy", to: "/privacy" as const },
  { label: "Partners", to: "/partners" as const },
];

export const popularServices = [
  { name: "Plumbing", description: "Leaks, clogs, fixtures and repairs", icon: Wrench },
  { name: "Heating & Cooling", description: "HVAC repair, service and installation", icon: Fan },
  { name: "Electrical", description: "Wiring, panels, outlets and lighting", icon: Zap },
  { name: "Roofing", description: "Roof repair and replacement quotes", icon: House },
  { name: "Windows", description: "Energy-efficient window replacement", icon: PanelsTopLeft },
  { name: "Kitchen Remodel", description: "Plan and price your ideal kitchen", icon: CookingPot },
  { name: "Bathroom Remodel", description: "Updates from fixtures to full renovations", icon: Bath },
  { name: "General Contracting", description: "Help for projects large and small", icon: Hammer },
  { name: "Appliance Protection", description: "Coverage for essential home systems", icon: ShieldCheck },
  { name: "Doors", description: "Entry, patio and interior door installation", icon: DoorOpen },
  { name: "Flooring", description: "Hardwood, tile, vinyl and carpet options", icon: Layers },
  { name: "Gutters", description: "Gutter cleaning, repair and installation", icon: CloudRain },
  { name: "Water & Fire Damage Restoration", description: "Cleanup and restoration after damage", icon: Flame },
  { name: "Appliance Repair", description: "Fixes for washers, fridges, ovens and more", icon: WashingMachine },
  { name: "Home Security", description: "Alarms, cameras and monitoring systems", icon: Cctv },
  { name: "Walk-in Tubs & Showers", description: "Walk-in tub and shower replacement", icon: ShowerHead },
];

export const apiBaseUrl = import.meta.env["VITE_API_URL"];