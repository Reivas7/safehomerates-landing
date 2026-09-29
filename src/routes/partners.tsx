import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Handshake, Phone, Radio, SlidersHorizontal, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/partners")({
  head: () => ({ meta: [{ title: "Partner With SafeHomeRates" }, { name: "description", content: "Learn how independent home service providers can partner with SafeHomeRates and reach consumers exploring home solutions." }, { property: "og:title", content: "Partner With SafeHomeRates" }, { property: "og:description", content: "Connect with consumers exploring home service and improvement options." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/partners" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/partners" }] }),
  component: PartnersPage,
});

const partnerSchema = z.object({
  companyName: z.string().trim().min(1, "Enter your company name."),
  contactName: z.string().trim().min(1, "Enter your contact name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().refine((value) => /^\d{10}$/.test(value.replace(/\D/g, "")), "Enter a valid 10-digit phone number."),
  serviceCategory: z.string().min(1, "Choose a service category."),
  message: z.string().trim().min(10, "Add a few details (at least 10 characters)."),
});

type PartnerInquiryValues = z.infer<typeof partnerSchema>;

function FormError({ message }: { message?: string | undefined }) {
  return message ? <p className="mt-1 text-sm text-destructive" role="alert">{message}</p> : null;
}

function PartnersPage() {
  const [submission, setSubmission] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PartnerInquiryValues>({
    resolver: zodResolver(partnerSchema),
    defaultValues: { companyName: "", contactName: "", email: "", phone: "", serviceCategory: "", message: "" },
    mode: "onTouched",
  });

  async function submitInquiry(values: PartnerInquiryValues) {
    setSubmission("loading");
    setSubmitError("");
    try {
      const apiUrl = import.meta.env["VITE_API_URL"];
      if (!apiUrl) throw new Error("Partner inquiries are temporarily unavailable.");
      const response = await fetch(`${apiUrl.replace(/\/$/, "")}/api/partners`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, timestamp: new Date().toISOString(), pageUrl: window.location.href }),
      });
      if (!response.ok) throw new Error("We couldn't send your inquiry right now.");
      setSubmission("success");
      reset();
    } catch {
      setSubmission("error");
      setSubmitError("We couldn't send your inquiry just now. Please try again later or call +13077851466.");
    }
  }

  // METRICS ARE PLACEHOLDERS: verify every figure before publishing to prospective partners.
  const features = [
    { icon: Radio, title: "Real-Time Delivery", metric: "Real-time", text: "Requests can be introduced to relevant providers as consumers submit them.", tone: "bg-blue-50 text-blue-600" },
    { icon: SlidersHorizontal, title: "Custom Targeting & Filters", metric: "98% Match Rate", text: "Consumers share their service needs and location so inquiries can be directed to relevant providers.", tone: "bg-emerald-50 text-emerald-600" },
    { icon: ShieldCheck, title: "Consent-Based Data", metric: "Consent-led", text: "Partners may follow up using the contact details and consent supplied by the consumer.", tone: "bg-indigo-50 text-indigo-600" },
    { icon: TrendingUp, title: "Scalable Volume", metric: "100k+ Monthly Leads", text: "Grow across categories and coverage areas as your capacity allows.", tone: "bg-amber-50 text-amber-600" },
    { icon: Handshake, title: "A Direct Introduction", metric: "Direct", text: "Connect directly with independent companies and homeowners exploring their options.", tone: "bg-rose-50 text-rose-600" },
    { icon: Users, title: "A Clear Consumer Journey", metric: "Clear intent", text: "Help homeowners understand their options before they speak with you.", tone: "bg-sky-50 text-sky-600" },
  ];
  const industries = ["Plumbing", "Electrical", "HVAC", "Roofing", "Home Warranty", "General Contracting"];
  const faqs = [
    { q: "Can I filter which requests I receive?", a: "Filtering by service category and coverage area is discussed during onboarding. Subject to consumer choices, availability and partner criteria, a request may be shared with one or more providers." },
    { q: "What integration options are available?", a: "Delivery methods such as webhook, API or ping-post are reviewed with our team when you apply. Availability depends on your setup and partner criteria." },
    { q: "How does account management work?", a: "After your inquiry, our team follows up about potential fit and next steps. Reach us any time at +13077851466." },
    { q: "How is consumer consent handled?", a: "Consumers submit their own contact details and consent choices with a request. Partners should follow up only as that consent allows and in line with applicable law." },
  ];
  const fieldCls = "border-slate-300 focus-visible:ring-2 focus-visible:ring-emerald-500";
  const labelCls = "mb-2 block text-sm font-semibold text-slate-800";

  return (
    <main className="bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-slate-900 py-16 text-white sm:py-24">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px]" aria-hidden="true" />
        <div className="absolute -left-24 top-0 -z-10 size-96 rounded-full bg-indigo-500/25 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-20 bottom-0 -z-10 size-96 rounded-full bg-emerald-500/20 blur-3xl" aria-hidden="true" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3.5 py-1.5 text-sm font-bold text-emerald-300">Partner network</span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Expand Your Reach with <span className="text-emerald-400">Premium Home Service &amp; Warranty Leads</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Connect directly with high-intent homeowners requesting service quotes in real time.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#partner-inquiry" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300">Become a Partner <ArrowRight size={18} aria-hidden="true" /></a>
            <a href="tel:+13077851466" className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/15"><Phone size={17} aria-hidden="true" /> +13077851466</a>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">Requests are routed by service interest</h2>
            <p className="mt-4 leading-7 text-slate-600">Consumers tell us what they are looking for and where they need help. Subject to their choices, availability and partner criteria, a request may be shared with one or more providers or marketing partners that may contact the consumer directly.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, metric, text, tone }) => (
              <article key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                <span className={`inline-flex rounded-xl p-3 ${tone}`}><Icon size={24} aria-hidden="true" /></span>
                <p className="mt-4 text-2xl font-black text-slate-900">{metric}</p>
                <h3 className="mt-1 text-lg font-extrabold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Industries we serve</h2>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {industries.map((i) => (
              <li key={i} className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2 font-semibold text-blue-700 transition duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-100">{i}</li>
            ))}
          </ul>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-slate-600">Any companies listed as partners are independent companies. They are not owned, operated or controlled by SafeHomeRates.</p>
        </div>
      </section>

      <section id="partner-inquiry" className="scroll-mt-24 bg-slate-100 py-14 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-9 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-8">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Tell us about your company</h2>
            <p className="mt-4 leading-7 text-slate-600">Share your service category and how to reach you. Our team can follow up about potential fit and next steps.</p>
            <p className="mt-4 text-sm text-slate-600">Questions? Call <a className="font-semibold text-blue-700 underline" href="tel:+13077851466">+13077851466</a>.</p>
          </div>

          <form onSubmit={handleSubmit(submitInquiry)} noValidate className="rounded-2xl border border-slate-100 bg-white p-8 shadow-2xl">
            {submission === "success" ? (
              <div role="status" className="rounded-r-lg border-l-4 border-emerald-500 bg-emerald-50 py-3 pl-4">
                <h3 className="font-extrabold text-slate-900">Thanks for reaching out.</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Your partner inquiry has been received. Our team will review it and follow up if there is a potential fit.</p>
              </div>
            ) : (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="companyName" className={labelCls}>Company name</label>
                    <Input id="companyName" className={fieldCls} autoComplete="organization" {...register("companyName")} />
                    <FormError message={errors.companyName?.message} />
                  </div>
                  <div>
                    <label htmlFor="contactName" className={labelCls}>Contact name</label>
                    <Input id="contactName" className={fieldCls} autoComplete="name" {...register("contactName")} />
                    <FormError message={errors.contactName?.message} />
                  </div>
                  <div>
                    <label htmlFor="partnerEmail" className={labelCls}>Email</label>
                    <Input id="partnerEmail" className={fieldCls} type="email" autoComplete="email" {...register("email")} />
                    <FormError message={errors.email?.message} />
                  </div>
                  <div>
                    <label htmlFor="partnerPhone" className={labelCls}>Phone</label>
                    <Input id="partnerPhone" className={fieldCls} type="tel" inputMode="tel" autoComplete="tel" placeholder="(555) 123-4567" {...register("phone")} />
                    <FormError message={errors.phone?.message} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="serviceCategory" className={labelCls}>Service category</label>
                    <select id="serviceCategory" className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500" defaultValue="" {...register("serviceCategory")}>
                      <option value="" disabled>Select a category</option>
                      <option>Home services</option>
                      <option>Home improvement</option>
                      <option>Home warranty</option>
                      <option>Other</option>
                    </select>
                    <FormError message={errors.serviceCategory?.message} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="partnerMessage" className={labelCls}>Message</label>
                    <Textarea id="partnerMessage" className={fieldCls} rows={4} maxLength={2000} placeholder="Tell us about your services and coverage areas." {...register("message")} />
                    <FormError message={errors.message?.message} />
                  </div>
                </div>
                {submitError && <p className="mt-4 text-sm text-destructive" role="alert">{submitError}</p>}
                {submission === "error" && <Button type="button" variant="outline" className="mt-3" onClick={() => setSubmission("idle")}>Dismiss</Button>}
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <button type="submit" disabled={submission === "loading"} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3.5 font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0">
                    {submission === "loading" ? "Sending..." : "Become a Partner Network Contractor"}
                    {submission !== "loading" && <ArrowRight size={17} aria-hidden="true" />}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-extrabold text-slate-900">Partner questions</h2>
          <div className="mt-8 border-t border-slate-200">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-slate-200 py-3">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg px-3 py-3 font-bold text-slate-900 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown size={19} className="shrink-0 text-emerald-600 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="px-3 pb-3 pt-2 leading-7 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Talk to our team about your volume and coverage.</h2>
            <p className="mt-3 text-slate-300">Enterprise and multi-region providers are welcome.</p>
          </div>
          <a href="tel:+13077851466" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"><Phone size={17} aria-hidden="true" /> +13077851466</a>
        </div>
      </section>
    </main>
  );
}