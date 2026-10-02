import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export type LeadServiceType = "home-services" | "home-improvement" | "home-warranty";

type LeadFormProps = {
  serviceType: LeadServiceType;
  presentation?: "section" | "hero";
};

const consentDetails: Record<LeadServiceType, { offer: string; providers: string }> = {
  "home-services": {
    offer: "the home services I requested",
    providers: "participating home service providers",
  },
  "home-improvement": {
    offer: "the home improvement projects I requested",
    providers: "participating contractors and home improvement providers",
  },
  "home-warranty": {
    offer: "home warranty plans and related offers",
    providers: "participating home warranty providers",
  },
};

function getConsentText(serviceType: LeadServiceType) {
  const details = consentDetails[serviceType];
  return `By checking this box and clicking "Submit request," I agree to SafeHomeRates' Terms and Conditions and Privacy Policy, and authorize SafeHomeRates, ${details.providers}, and its marketing partners to contact me about ${details.offer} at the phone number I provided by calls and text messages, including using an automated telephone dialing system or prerecorded or artificial voice, even if my number is on a national or state Do Not Call list. Consent is not a condition of purchase and may be revoked at any time. Message and data rates may apply.`;
}

const states = [
  ["AL", "Alabama"], ["AK", "Alaska"], ["AZ", "Arizona"], ["AR", "Arkansas"], ["CA", "California"],
  ["CO", "Colorado"], ["CT", "Connecticut"], ["DE", "Delaware"], ["DC", "District of Columbia"], ["FL", "Florida"],
  ["GA", "Georgia"], ["HI", "Hawaii"], ["ID", "Idaho"], ["IL", "Illinois"], ["IN", "Indiana"],
  ["IA", "Iowa"], ["KS", "Kansas"], ["KY", "Kentucky"], ["LA", "Louisiana"], ["ME", "Maine"],
  ["MD", "Maryland"], ["MA", "Massachusetts"], ["MI", "Michigan"], ["MN", "Minnesota"], ["MS", "Mississippi"],
  ["MO", "Missouri"], ["MT", "Montana"], ["NE", "Nebraska"], ["NV", "Nevada"], ["NH", "New Hampshire"],
  ["NJ", "New Jersey"], ["NM", "New Mexico"], ["NY", "New York"], ["NC", "North Carolina"], ["ND", "North Dakota"],
  ["OH", "Ohio"], ["OK", "Oklahoma"], ["OR", "Oregon"], ["PA", "Pennsylvania"], ["RI", "Rhode Island"],
  ["SC", "South Carolina"], ["SD", "South Dakota"], ["TN", "Tennessee"], ["TX", "Texas"], ["UT", "Utah"],
  ["VT", "Vermont"], ["VA", "Virginia"], ["WA", "Washington"], ["WV", "West Virginia"], ["WI", "Wisconsin"],
  ["WY", "Wyoming"],
] as const;
const stateCodes = new Set(states.map(([code]) => code));

const baseSchema = z.object({
  firstName: z.string().trim().min(1, "Enter your first name."),
  lastName: z.string().trim().min(1, "Enter your last name."),
  phone: z.string().refine((value) => /^\d{10}$/.test(value.replace(/\D/g, "")), "Enter a valid 10-digit phone number."),
  dateOfBirth: z.string().refine((value) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const date = new Date(`${value}T00:00:00.000Z`);
    return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value && value <= new Date().toISOString().slice(0, 10);
  }, "Enter a valid date of birth."),
  state: z.string().refine((value) => stateCodes.has(value as (typeof states)[number][0]), "Choose a state."),
  zipCode: z.string().regex(/^\d{5}$/, "Enter a valid 5-digit ZIP code."),
  city: z.string().trim().min(1, "Enter your city."),
  address: z.string().trim().min(1, "Enter your street address."),
  consent: z.boolean().refine((value) => value, "Consent is required to submit your request."),
  website: z.string(),
});

type LeadFormValues = z.infer<typeof baseSchema>;

function formatPhoneNumber(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function ErrorMessage({ message }: { message?: string | undefined }) {
  return message ? <p className="mt-1 text-sm text-destructive" role="alert">{message}</p> : null;
}

export function LeadForm({ serviceType, presentation = "section" }: LeadFormProps) {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"editing" | "loading" | "success" | "error">("editing");
  const [submitError, setSubmitError] = useState("");
  const disclosureDetails = consentDetails[serviceType];
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(baseSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      dateOfBirth: "",
      state: "",
      zipCode: "",
      city: "",
      address: "",
      consent: false,
      website: "",
    },
    mode: "onTouched",
  });

  const phoneValue = watch("phone");

  // LeadiD: load the campaign script once per page, after the form is in the DOM.
  useEffect(() => {
    const campaignKey = import.meta.env["VITE_JORNAYA_CAMPAIGN_KEY"];
    if (campaignKey && !document.getElementById("LeadiDscript_campaign")) {
      const jornayaScript = document.createElement("script");
      jornayaScript.id = "LeadiDscript_campaign";
      jornayaScript.type = "text/javascript";
      jornayaScript.async = true;
      jornayaScript.src = `//create.lidstatic.com/campaign/${campaignKey}.js?snippet_version=2`;
      document.body.appendChild(jornayaScript);
    }

    if (!document.getElementById("trustedform_script")) {
      const trustedFormScript = document.createElement("script");
      trustedFormScript.id = "trustedform_script";
      trustedFormScript.type = "text/javascript";
      trustedFormScript.async = true;
      trustedFormScript.src = `https://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=${Date.now()}${Math.random()}`;
      document.body.appendChild(trustedFormScript);
    }
  }, []);

  async function submitLead(values: LeadFormValues) {
    setSubmitError("");
    if (values.website) {
      await navigate({ to: "/thank-you" });
      return;
    }

    const leadIdInput = document.getElementById("leadid_token") as HTMLInputElement | null;
    const leadIdToken = leadIdInput?.value.trim();
    if (!leadIdToken) {
      setStatus("error");
      setSubmitError(" Form Submission is not ready. Please wait a moment and try again.");
      return;
    }

    setStatus("loading");
    const query = new URLSearchParams(window.location.search);
    const attribution = Object.fromEntries(
      ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"].map((key) => [key, query.get(key) ?? ""]),
    );
    const trustedFormCertUrl =
      document.querySelector<HTMLInputElement>("input[name='xxTrustedFormCertUrl']")?.value.trim() ?? "";
    const payload = {
      universal_leadid: leadIdToken,
      trustedFormCertUrl,
      serviceType,
      answers: {
        dateOfBirth: values.dateOfBirth,
        state: values.state,
        city: values.city,
        address: values.address,
      },
      zipCode: values.zipCode,
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
      dateOfBirth: values.dateOfBirth,
      state: values.state,
      city: values.city,
      address: values.address,
      contact: {
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
        dateOfBirth: values.dateOfBirth,
        state: values.state,
        zipCode: values.zipCode,
        city: values.city,
        address: values.address,
      },
      consent: values.consent,
      consentText: getConsentText(serviceType),
      timestamp: new Date().toISOString(),
      pageUrl: window.location.href,
      ...attribution,
    };

    try {
      const apiUrl = import.meta.env["VITE_API_URL"];
      if (!apiUrl) throw new Error("Lead submission is temporarily unavailable.");
      const response = await fetch(`${apiUrl.replace(/\/$/, "")}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("We couldn't send your request right now.");
      await navigate({ to: "/thank-you" });
    } catch {
      setStatus("error");
      setSubmitError("We couldn't send your request just now. Please try again in a moment.");
    }
  }

  const labelClass = "mb-2 block text-sm font-semibold text-foreground";
  const controlClass = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <section id="lead-form" className={presentation === "hero" ? "bg-transparent py-0" : "bg-muted py-16 sm:py-20"}>
      <div className={presentation === "hero" ? "w-full" : "mx-auto max-w-3xl px-4 sm:px-6"}>
        <div className="mb-5 text-center">
          <p className="text-sm font-extrabold uppercase tracking-wide text-brand">{presentation === "hero" ? "Start your free request" : "Get matched with local providers"}</p>
          <h2 className={presentation === "hero" ? "mt-2 text-2xl font-extrabold text-primary" : "mt-2 text-3xl font-extrabold text-primary"}>{presentation === "hero" ? "What can we help with?" : "Tell us about your home"}</h2>
        </div>

        <form data-tf-element-role="offer" onSubmit={handleSubmit(submitLead)} noValidate className={presentation === "hero" ? "rounded-xl border border-border bg-background p-5 shadow-2xl shadow-black/20 sm:p-7" : "border border-border bg-background p-5 sm:p-8"}>
          <div className="mt-5 border-t border-border pt-5">
            <h3 className="mb-3 text-sm font-extrabold text-primary">Your contact details</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="firstName">First name</label>
                <Input id="firstName" autoComplete="given-name" {...register("firstName")} />
                <ErrorMessage message={errors.firstName?.message} />
              </div>
              <div>
                <label className={labelClass} htmlFor="lastName">Last name</label>
                <Input id="lastName" autoComplete="family-name" {...register("lastName")} />
                <ErrorMessage message={errors.lastName?.message} />
              </div>
              <div>
                <label className={labelClass} htmlFor="phone">Phone number</label>
                <Input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(555) 123-4567"
                  value={phoneValue}
                  {...register("phone")}
                  onChange={(event) => setValue("phone", formatPhoneNumber(event.target.value), { shouldDirty: true, shouldValidate: true })}
                />
                <ErrorMessage message={errors.phone?.message} />
              </div>
              <div>
                <label className={labelClass} htmlFor="dateOfBirth">Date of birth</label>
                <Input id="dateOfBirth" type="date" autoComplete="bday" max={new Date().toISOString().slice(0, 10)} {...register("dateOfBirth")} />
                <ErrorMessage message={errors.dateOfBirth?.message} />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="address">Street address</label>
                <Input id="address" autoComplete="street-address" {...register("address")} />
                <ErrorMessage message={errors.address?.message} />
              </div>
              <div>
                <label className={labelClass} htmlFor="city">City</label>
                <Input id="city" autoComplete="address-level2" {...register("city")} />
                <ErrorMessage message={errors.city?.message} />
              </div>
              <div>
                <label className={labelClass} htmlFor="state">State</label>
                <select id="state" autoComplete="address-level1" className={controlClass} defaultValue="" {...register("state")}>
                  <option value="" disabled>Select a state</option>
                  {states.map(([code, name]) => <option key={code} value={code}>{name}</option>)}
                </select>
                <ErrorMessage message={errors.state?.message} />
              </div>
              <div>
                <label className={labelClass} htmlFor="zipCode">ZIP code</label>
                <Input id="zipCode" inputMode="numeric" autoComplete="postal-code" maxLength={5} placeholder="e.g. 10001" {...register("zipCode")} />
                <ErrorMessage message={errors.zipCode?.message} />
              </div>
            </div>
          </div>

          <div className="mt-5 border-t border-border pt-4">
            <div className="flex items-start gap-3">
              <input id="leadid_tcpa_disclosure" type="checkbox" data-tf-element-role="consent-opt-in" {...register("consent")} className="mt-1 size-4 shrink-0 accent-[var(--cta)]" />
              <div>
                <label htmlFor="leadid_tcpa_disclosure" data-tf-element-role="consent-language" className="cursor-pointer text-xs leading-5 text-muted-foreground">
                  By checking this box and clicking &quot;Submit request,&quot; I agree to SafeHomeRates&apos; <a className="font-semibold text-brand underline" href="/terms">Terms and Conditions</a> and <a className="font-semibold text-brand underline" href="/privacy">Privacy Policy</a>, and authorize SafeHomeRates, {disclosureDetails.providers}, and its marketing partners to contact me about {disclosureDetails.offer} <span data-tf-element-role="contact-method">at the phone number I provided by calls and text messages</span>, including using an automated telephone dialing system or prerecorded or artificial voice, <span data-tf-element-role="consent-grantor-waived-dnc">even if my number is on a national or state Do Not Call list</span>. <span data-tf-element-role="consent-grantor-waived-purchase-condition">Consent is not a condition of purchase</span> and may be revoked at any time. Message and data rates may apply.
                </label>
                <ErrorMessage message={errors.consent?.message} />
              </div>
            </div>
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[10000px] h-px w-px opacity-0"
              {...register("website")}
            />
            <input id="leadid_token" name="universal_leadid" type="hidden" defaultValue="" />
            <noscript><img src="https://api.trustedform.com/ns.gif" alt="" /></noscript>
            {submitError && <p className="mt-4 text-sm text-destructive" role="alert">{submitError}</p>}
            <div className="mt-4 flex justify-end">
              <Button type="submit" data-tf-element-role="submit" variant="quote" disabled={status === "loading"} className="w-full sm:w-auto">
                <span data-tf-element-role="submit-text">{status === "loading" ? "Submitting..." : "Submit request"}</span>
                {status !== "loading" && <ArrowRight size={17} />}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}