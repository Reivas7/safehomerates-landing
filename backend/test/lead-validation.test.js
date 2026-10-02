import assert from "node:assert/strict";
import test from "node:test";
import { LeadValidationError, validateLead } from "../src/lead-validation.js";

const validLead = {
  serviceType: "home-services",
  leadId: "4XYZ78B9-0CDC-43A7-98EA-2B680A5313A2",
  firstName: "Taylor",
  lastName: "Homeowner",
  email: "taylor@example.com",
  phone: "(555) 123-4567",
  zipCode: "10001",
  answers: { service: "Plumbing", zipCode: "10001" },
  consent: true,
  consentText: "Consent to be contacted by SafeHomeRates.",
  pageUrl: "https://safehomerates.com/home-services",
  trustedFormCertUrl: "https://cert.trustedform.com/example",
};

test("normalizes lead data and retains both verification references", () => {
  const lead = validateLead(validLead);

  assert.equal(lead.leadId, validLead.leadId);
  assert.equal(lead.contact.phone, validLead.phone);
  assert.equal(lead.trustedFormCertUrl, validLead.trustedFormCertUrl);
  assert.equal(lead.answers.zipCode, validLead.zipCode);
});

test("rejects a missing or malformed Jornaya LeadiD", () => {
  assert.throws(() => validateLead({ ...validLead, leadId: undefined }), LeadValidationError);
  assert.throws(() => validateLead({ ...validLead, leadId: "not-a-uuid" }), /valid Jornaya LeadiD/);
});

test("rejects leads without explicit consent or with invalid TrustedForm URLs", () => {
  assert.throws(() => validateLead({ ...validLead, consent: false }), /Consent is required/);
  assert.throws(() => validateLead({ ...validLead, trustedFormCertUrl: "http://example.com/cert" }), /TrustedForm certificate URL/);
});