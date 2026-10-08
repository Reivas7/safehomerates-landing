const serviceTabs = {
  "home-services": "Home Services",
  "home-improvement": "Home Improvement",
  "home-warranty": "Home Warranty",
};

export const GOOGLE_SHEETS_HEADERS = [
  "Timestamp",
  "Service",
  "First Name",
  "Last Name",
  "Email",
  "Phone",
  "Address",
  "City",
  "State",
  "ZIP",
  "Date of Birth",
  "Consent Affirmative",
  "Consent Text",
  "Universal Lead ID",
  "TrustedForm Certificate URL",
  "Page URL",
  "Client Submitted At",
];

export function createGoogleSheetsWriter({ webhookUrl, sharedSecret, fetchImpl = fetch, logger = console }) {
  if (!webhookUrl || !sharedSecret) return null;

  return async function writeLeadToGoogleSheets(lead, request) {
    const response = await fetchImpl(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...toGoogleSheetsLead(lead, request),
        secret: sharedSecret,
      }),
    });

    const responseBody = await response.json().catch(() => ({}));
    if (!response.ok || responseBody.ok !== true) {
      const error = new Error("Google Sheets rejected the lead.");
      error.status = response.status;
      throw error;
    }

    logger.info("Lead written to Google Sheets", { serviceType: lead.serviceType, tabName: serviceTabs[lead.serviceType] });
    return responseBody;
  };
}

export function toGoogleSheetsLead(lead, request = {}) {
  const { contact, answers, attribution } = lead;
  return {
    serviceType: lead.serviceType,
    tabName: serviceTabs[lead.serviceType],
    firstName: contact.firstName,
    lastName: contact.lastName,
    email: contact.email,
    phone: contact.phone,
    address: contact.address,
    city: contact.city,
    state: contact.state,
    zip: lead.zipCode,
    dateOfBirth: contact.dateOfBirth,
    answers: { ...answers, ...lead.serviceDetails },
    consent: {
      affirmative: lead.consent,
      text: lead.consentText,
    },
    universal_leadid: lead.leadId,
    trustedFormCertUrl: lead.trustedFormCertUrl,
    pageUrl: lead.pageUrl,
    submittedAt: lead.submittedAt?.toISOString() ?? "",
    receivedAt: new Date().toISOString(),
    request: {
      ip: request.ip ?? "",
      userAgent: request.userAgent ?? "",
    },
    attribution,
  };
}