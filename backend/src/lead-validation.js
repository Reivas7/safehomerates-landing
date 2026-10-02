const leadIdPattern = /^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$/i;
const serviceTypes = new Set(["home-services", "home-improvement", "home-warranty"]);
const attributionKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];

export class LeadValidationError extends Error {}

function requireText(value, field, maxLength = 200) {
  if (typeof value !== "string" || !value.trim() || value.trim().length > maxLength) {
    throw new LeadValidationError(`Invalid ${field}.`);
  }
  return value.trim();
}

function readAnswers(value, field) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new LeadValidationError(`Invalid ${field}.`);
  }

  return Object.fromEntries(
    Object.entries(value).slice(0, 40).map(([key, answer]) => [
      key.slice(0, 100),
      typeof answer === "string" ? answer.trim().slice(0, 1000) : "",
    ]),
  );
}

function optionalHttpsUrl(value, field) {
  if (value == null || value === "") return null;
  if (typeof value !== "string" || value.length > 2048) {
    throw new LeadValidationError(`Invalid ${field}.`);
  }

  try {
    const url = new URL(value);
    if (url.protocol !== "https:") throw new Error();
    return url.toString();
  } catch {
    throw new LeadValidationError(`Invalid ${field}.`);
  }
}

export function validateLead(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    throw new LeadValidationError("Invalid lead payload.");
  }

  const leadId = requireText(body.leadId ?? body.universal_leadid ?? body.leadid_token, "LeadiD", 36).toUpperCase();
  if (!leadIdPattern.test(leadId)) throw new LeadValidationError("A valid Jornaya LeadiD is required.");

  const serviceType = requireText(body.serviceType, "service type", 40);
  if (!serviceTypes.has(serviceType)) throw new LeadValidationError("Invalid service type.");

  const contact = body.contact && typeof body.contact === "object" ? body.contact : {};
  const firstName = requireText(body.firstName ?? contact.firstName, "first name", 100);
  const lastName = requireText(body.lastName ?? contact.lastName, "last name", 100);
  const email = requireText(body.email ?? contact.email, "email", 254).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new LeadValidationError("Invalid email.");

  const phone = requireText(body.phone ?? contact.phone, "phone", 40);
  if (!/^\d{10}$/.test(phone.replace(/\D/g, ""))) throw new LeadValidationError("Invalid phone.");

  const answers = readAnswers(body.answers ?? body.serviceDetails ?? {}, "answers");
  const zipCode = requireText(body.zipCode ?? answers.zipCode, "ZIP code", 5);
  if (!/^\d{5}$/.test(zipCode)) throw new LeadValidationError("Invalid ZIP code.");

  if (body.consent !== true) throw new LeadValidationError("Consent is required.");
  const consentText = requireText(body.consentText, "consent text", 5000);
  const pageUrl = optionalHttpsUrl(body.pageUrl, "page URL");
  const trustedFormCertUrl = optionalHttpsUrl(
    body.trustedFormCertUrl ?? body.xxTrustedFormCertUrl,
    "TrustedForm certificate URL",
  );

  const submittedAt = typeof body.timestamp === "string" && !Number.isNaN(Date.parse(body.timestamp))
    ? new Date(body.timestamp)
    : null;
  const attribution = Object.fromEntries(
    attributionKeys.map((key) => [key, typeof body[key] === "string" ? body[key].slice(0, 500) : ""]),
  );

  return {
    leadId,
    serviceType,
    contact: { firstName, lastName, email, phone },
    answers: { ...answers, zipCode },
    serviceDetails: readAnswers(body.serviceDetails ?? {}, "service details"),
    zipCode,
    consent: true,
    consentText,
    submittedAt,
    pageUrl,
    trustedFormCertUrl,
    attribution,
  };
}