import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export type LeadServiceType = "home-services" | "home-improvement" | "home-warranty";

export type LeadServiceField = {
  name: string;
  label: string;
  type: "select" | "radio" | "textarea";
  options?: string[];
  required?: boolean;
  placeholder?: string;
};

export type LeadFormConfig = {
  serviceFields: LeadServiceField[];
};

type LeadFormProps = {
  serviceType: LeadServiceType;
  config: LeadFormConfig;
  presentation?: "section" | "hero";
};

const consentText =
  "By clicking Submit, I provide my electronic signature and express written consent to be contacted by SafeHomeRates and its partners at the phone number and email provided, including by autodialed calls, prerecorded messages and text messages, even if my number is on a Do Not Call list. Consent is not a condition of purchase. Message/data rates may apply. See our Privacy Policy and Terms.";

const baseSchema = z.object({
  serviceDetails: z.record(z.string(), z.string()),
  zipCode: z.string().regex(/^\d{5}$/, "Enter a valid 5-digit ZIP code."),
  firstName: z.string().trim().min(1, "Enter your first name."),
  lastName: z.string().trim().min(1, "Enter your last name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().refine((value) => /^\d{10}$/.test(value.replace(/\D/g, "")), "Enter a valid 10-digit phone number."),
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

export function LeadForm({ serviceType, config, presentation = "section" }: LeadFormProps) {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"editing" | "loading" | "success" | "error">("editing");
  const [submitError, setSubmitError] = useState("");
  const schema = baseSchema.superRefine((values, context) => {
    for (const field of config.serviceFields) {
      if (field.required !== false && !values.serviceDetails[field.name]?.trim()) {
        context.addIssue({
          code: "custom",
          path: ["serviceDetails", field.name],
          message: `Complete ${field.label.toLowerCase()}.`,
        });
      }
    }
  });
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      serviceDetails: {},
      zipCode: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      consent: false,
      website: "",
    },
    mode: "onTouched",
  });

  const phoneValue = watch("phone");

  // LeadiD: load the campaign script once per page, after the form is in the DOM.
  useEffect(() => {
    const campaignKey = import.meta.env["VITE_JORNAYA_CAMPAIGN_KEY"];
    if (!campaignKey) return;
    if (document.getElementById("LeadiDscript_campaign")) return;
    const s = document.createElement("script");
    s.id = "LeadiDscript_campaign";
    s.type = "text/javascript";
    s.async = true;
    s.src = `//create.lidstatic.com/campaign/${campaignKey}.js?snippet_version=2`;
    document.body.appendChild(s);
  }, []);

  async function submitLead(values: LeadFormValues) {
    setSubmitError("");
    if (values.website) {
      await navigate({ to: "/thank-you" });
      return;
    }

    setStatus("loading");
    const query = new URLSearchParams(window.location.search);
    const attribution = Object.fromEntries(
      ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"].map((key) => [key, query.get(key) ?? ""]),
    );
    const serviceAnswers = values.serviceDetails;
    const leadIdToken =
      (document.getElementById("leadid_token") as HTMLInputElement | null)?.value ?? "";
    const trustedFormCertUrl =
      document.querySelector<HTMLInputElement>("input[name='xxTrustedFormCertUrl']")?.value.trim() ?? "";
    const payload = {
      universal_leadid: leadIdToken,
      trustedFormCertUrl,
      serviceType,
      answers: {
        ...serviceAnswers,
        zipCode: values.zipCode,
      },
      serviceDetails: serviceAnswers,
      zipCode: values.zipCode,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      contact: {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
      },
      consent: values.consent,
      consentText,
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

        <form onSubmit={handleSubmit(submitLead)} noValidate className={presentation === "hero" ? "rounded-xl border border-border bg-background p-5 shadow-2xl shadow-black/20 sm:p-7" : "border border-border bg-background p-5 sm:p-8"}>
          <div className="grid gap-4 sm:grid-cols-2">
            {config.serviceFields.map((field) => {
              const fieldError = errors.serviceDetails?.[field.name]?.message;
              return field.type === "radio" ? (
                <fieldset key={field.name} className="sm:col-span-2">
                  <legend className={labelClass}>{field.label}{field.required === false ? " (optional)" : ""}</legend>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {field.options?.map((option) => (
                      <label key={option} className="flex min-h-10 cursor-pointer items-center gap-3 border border-border px-3 py-2 text-sm hover:bg-muted">
                        <input type="radio" value={option} {...register(`serviceDetails.${field.name}`)} className="accent-[var(--cta)]" />
                        {option}
                      </label>
                    ))}
                  </div>
                  <ErrorMessage message={fieldError} />
                </fieldset>
              ) : field.type === "textarea" ? (
                <div key={field.name} className="sm:col-span-2">
                  <label className={labelClass} htmlFor={`service-${field.name}`}>{field.label}{field.required === false ? " (optional)" : ""}</label>
                  <textarea
                    id={`service-${field.name}`}
                    rows={2}
                    maxLength={500}
                    placeholder={field.placeholder ?? "Add a few details"}
                    className={controlClass}
                    {...register(`serviceDetails.${field.name}`)}
                  />
                  <ErrorMessage message={fieldError} />
                </div>
              ) : (
                <div key={field.name}>
                  <label className={labelClass} htmlFor={`service-${field.name}`}>{field.label}{field.required === false ? " (optional)" : ""}</label>
                  <select id={`service-${field.name}`} className={controlClass} defaultValue="" {...register(`serviceDetails.${field.name}`)}>
                    <option value="" disabled>{field.placeholder ?? "Select an option"}</option>
                    {field.options?.map((option) => <option key={option} value={option}>{option}</option>)}
                  </select>
                  <ErrorMessage message={fieldError} />
                </div>
              );
            })}
          </div>

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
                <label className={labelClass} htmlFor="email">Email</label>
                <Input id="email" type="email" autoComplete="email" {...register("email")} />
                <ErrorMessage message={errors.email?.message} />
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
                <label className={labelClass} htmlFor="zipCode">ZIP code</label>
                <Input id="zipCode" inputMode="numeric" autoComplete="postal-code" maxLength={5} placeholder="e.g. 10001" {...register("zipCode")} />
                <ErrorMessage message={errors.zipCode?.message} />
              </div>
            </div>
          </div>

          <div className="mt-5 border-t border-border pt-4">
            <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-muted-foreground">
              <input type="checkbox" {...register("consent")} className="mt-1 size-4 shrink-0 accent-[var(--cta)]" />
              <span>
                By clicking Submit, I provide my electronic signature and express written consent to be contacted by SafeHomeRates and its partners at the phone number and email provided, including by autodialed calls, prerecorded messages and text messages, even if my number is on a Do Not Call list. Consent is not a condition of purchase. Message/data rates may apply. See our <a className="font-semibold text-brand underline" href="/privacy">Privacy Policy</a> and <a className="font-semibold text-brand underline" href="/terms">Terms</a>.
              </span>
            </label>
            <ErrorMessage message={errors.consent?.message} />
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[10000px] h-px w-px opacity-0"
              {...register("website")}
            />
            <input id="leadid_token" name="universal_leadid" type="hidden" defaultValue="" />
            {submitError && <p className="mt-4 text-sm text-destructive" role="alert">{submitError}</p>}
            <div className="mt-4 flex justify-end">
              <Button type="submit" variant="quote" disabled={status === "loading"} className="w-full sm:w-auto">
                {status === "loading" ? "Submitting..." : "Submit request"}
                {status !== "loading" && <ArrowRight size={17} />}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}