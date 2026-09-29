import { createFileRoute } from "@tanstack/react-router";
import { LegalDocument } from "@/components/legal-document";

export const Route = createFileRoute("/terms")({
	head: () => ({
		meta: [
			{ title: "Terms & Conditions | SafeHomeRates" },
			{ name: "description", content: "Terms for using the SafeHomeRates home service and provider matching website." },
			{ property: "og:title", content: "Terms & Conditions | SafeHomeRates" },
			{ property: "og:description", content: "Terms for the SafeHomeRates lead-generation service." },
			{ property: "og:type", content: "website" },
			{ property: "og:url", content: "/terms" },
			{ name: "twitter:card", content: "summary_large_image" },
		],
		links: [{ rel: "canonical", href: "/terms" }],
	}),
	component: TermsPage,
});

function TermsPage() {
	return (
		<LegalDocument variant="agreement" badge="Official Consumer & Partner Agreement" subtitle="Please read these terms carefully before using our home service matching platform." navIds={["acceptance", "service", "eligibility", "communications", "no-guarantees", "disputes"]} calloutIds={["communications", "no-guarantees", "disputes"]}
			title="Terms & Conditions"
			intro="These terms govern your access to and use of the SafeHomeRates website and its home service request and matching features. Replace bracketed placeholders and have counsel review this draft before publication."
			sections={[
				{
					id: "acceptance",
					title: "Acceptance of Terms",
					content: <p>By accessing or using this website, you agree to these Terms & Conditions and any policies linked here. If you do not agree, do not use the website. These terms apply to visitors and people who submit a request.</p>,
				},
				{
					id: "service",
					title: "Description of Service",
					content: <p>SafeHomeRates, operated by Safe Home Rates ("we," "us" or "our"), is a lead-generation and matching service. We collect information about a consumer's home service, improvement or warranty interests and may share that request with independent service providers or marketing partners who may contact the consumer. We are not the contractor, service professional, insurer, warranty provider, seller, or a party to any transaction between you and a third party.</p>,
				},
				{
					id: "eligibility",
					title: "Eligibility",
					content: <p>You must be at least 18 years old and a resident of the United States to submit a request. By using the service, you represent that you meet these requirements and have authority to provide the information you submit.</p>,
				},
				{
					id: "accuracy",
					title: "Your Information",
					content: <p>You agree to provide current, complete and accurate information and to update it if it changes. Do not submit another person's contact information without their authorization. You are responsible for the information submitted through your device or account.</p>,
				},
				{
					id: "communications",
					title: "Consent to Be Contacted",
					content: <p>When you submit a request and provide the required consent, you authorize SafeHomeRates and the identified independent providers or partners to contact you using the contact details and methods described in the consent displayed with that request, which may include calls, text messages and email. Consent is not a condition of purchase. Your consent choices and applicable law govern; review the exact consent language before submitting. You may withdraw marketing consent as described in the communication or applicable privacy notice. Message and data rates may apply.</p>,
				},
				{
					id: "license",
					title: "Limited License",
					content: <p>Use of the website is free. We grant you a limited, revocable, non-exclusive, non-transferable license to access the site to learn about our services and submit a request for your own use. This license does not allow you to copy, scrape, aggregate or create derivative works from the site, or to use bots or other automated tools without our written permission. All rights not expressly granted are reserved.</p>,
				},
				{
					id: "unauthorized-use",
					title: "Prohibited Conduct",
					content: <><p>Unless we agree in writing, you may not:</p><ul className="list-disc space-y-1 pl-5"><li>copy, frame, mirror, republish or distribute any part of the site;</li><li>reverse engineer or create derivative works from the site or its content;</li><li>use automated tools to access, monitor or copy the site;</li><li>submit false, fraudulent or another person's information, or submit requests you do not intend to pursue;</li><li>post or transmit unlawful, abusive, defamatory or harmful material;</li><li>interfere with the site, its servers or networks, or introduce malware; or</li><li>try to gain unauthorized access to the site or related systems.</li></ul><p>We may suspend or end your access if we believe you have violated this section.</p></>,
				},
				{
					id: "no-guarantees",
					title: "No Guarantees; Independent Providers",
					content: <p>We do not guarantee that a provider will be available, contact you, accept a project, or offer any particular price, coverage, quality or result. Provider qualifications, licensing, insurance, terms and performance are the provider's responsibility. You should independently review a provider and all quotes and agreements before proceeding. Any contract is between you and the provider.</p>,
				},
				{
					id: "verification",
					title: "Use Caution and Verify Providers",
					content: <p>Take care when communicating or transacting with any provider you meet through the site. Verify a provider's identity, licenses, insurance, references and written terms independently before you share sensitive personal or financial information or sign an agreement.</p>,
				},
				{
					id: "third-party-links",
					title: "Third-Party Links and Services",
					content: <p>This website may link to third-party websites or services. We do not control or endorse their content, privacy practices, products or services, and your use of them is at your own risk and subject to their terms.</p>,
				},
				{
					id: "intellectual-property",
					title: "Intellectual Property",
					content: <p>Except for materials identified as belonging to others, the website and its content, design, text, graphics and marks are owned by or licensed to Safe Home Rates and protected by applicable intellectual property laws. You may use the site for personal, noncommercial purposes. You may not copy, modify, distribute or exploit website content without written permission.</p>,
				},
				{
					id: "privacy-policy",
					title: "Privacy Policy",
					content: <p>Your use of the site is also governed by our Privacy Policy, which explains what we collect, how we use and share it, and the choices you have. The Privacy Policy is incorporated into these terms by reference.</p>,
				},
				{
					id: "trademarks",
					title: "Trademarks",
					content: <p>SafeHomeRates, Safe Home Rates and related names, logos and marks are our trademarks or those of our licensors. You may not use them without our prior written permission. Names and marks of providers and partners belong to their owners.</p>,
				},
				{
					id: "dmca",
					title: "Copyright Complaints",
					content: <p>We respond to properly submitted notices of alleged copyright infringement. Send a notice to [DMCA DESIGNATED AGENT NAME AND EMAIL] that identifies the work, identifies the material and where we can find it, includes your contact details, states your good-faith belief that the use is unauthorized, and states under penalty of perjury that the notice is accurate and that you are authorized to act for the rights holder. Include a signature. [REGISTER A DMCA AGENT WITH THE U.S. COPYRIGHT OFFICE BEFORE RELYING ON THIS SECTION.]</p>,
				},
				{
					id: "site-changes",
					title: "Changes to the Site",
					content: <p>We may change, suspend or discontinue any part of the website at any time, and may limit or restrict your access, without notice or liability to you.</p>,
				},
				{
					id: "disclaimer",
					title: "Disclaimer of Warranties",
					content: <p>The website and everything offered through it are provided "as is" and "as available," without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose and non-infringement. We do not promise that the site will be uninterrupted, error-free or free of harmful components. Information on the site is general and is not professional, legal, financial or insurance advice. Confirm pricing, coverage and terms directly with the provider before you decide. Some jurisdictions do not allow certain exclusions, so some may not apply to you.</p>,
				},
				{
					id: "liability",
					title: "Limitation of Liability",
					content: <p>To the extent permitted by law, Safe Home Rates and its officers, employees and agents will not be liable for indirect, incidental, special, consequential or punitive damages, lost profits, or losses arising from a provider or third-party transaction, or your use of or inability to use this website. The website is provided "as is" and "as available" without warranties except those that cannot be excluded by law. Insert jurisdiction-specific limits after legal review.</p>,
				},
				{
					id: "release",
					title: "Release",
					content: <p>If you have a dispute with a provider or another third party arising from your use of the site, you release Safe Home Rates and its officers, employees and agents from claims and damages of every kind connected with that dispute, to the extent permitted by law. If you are a California resident, you waive California Civil Code Section 1542, which says a general release does not extend to claims a person does not know or suspect exist at the time of the release. [COUNSEL TO CONFIRM.]</p>,
				},
				{
					id: "indemnification",
					title: "Indemnification",
					content: <p>To the extent permitted by law, you agree to defend and indemnify Safe Home Rates and its personnel against third-party claims, losses and reasonable costs arising from your material breach of these terms, misuse of the website, or violation of another person's rights. This provision is subject to applicable law.</p>,
				},
				{
					id: "no-agency",
					title: "Independent Relationships",
					content: <p>Nothing in these terms creates an agency, partnership, joint venture or employment relationship between you and Safe Home Rates, or between Safe Home Rates and any provider. Providers and partners are independent businesses, not our employees or agents.</p>,
				},
				{
					id: "disputes",
					title: "Disputes; Arbitration; Governing Law",
					content: <><p>Please read this section carefully. It affects your rights. [ENTIRE SECTION IS A DRAFT STRUCTURE FOR COUNSEL TO REVIEW AND ADAPT.]</p><p>Informal resolution: before starting a claim, write to us at the address in the Notices section describing the dispute and the relief you want. If it is not resolved within thirty (30) days, either of us may start arbitration.</p><p>Binding individual arbitration: except for claims that can be brought in small claims court, any dispute arising from these terms or your use of the site, including disputes involving a provider, will be resolved by binding arbitration on an individual basis before a single arbitrator administered by [ARBITRATION PROVIDER] under its consumer rules. You and Safe Home Rates each waive the right to a jury trial and to take part in a class, collective or representative action. [FEE ALLOCATION AND LOCATION OF ARBITRATION.]</p><p>Opt out: you may opt out of arbitration by sending written notice within thirty (30) days of first accepting these terms. If the class waiver is found unenforceable, this arbitration section will not apply and disputes will proceed in court.</p><p>Governing law and venue: these terms are governed by the laws of [GOVERNING LAW STATE], without regard to conflict-of-law rules, and disputes not subject to arbitration will be heard in [VENUE]. Nothing here waives rights that cannot be waived by law.</p></>,
				},
				{
					id: "notices",
					title: "Notices",
					content: <p>Send legal notices to Safe Home Rates, 30 N Gould St, 48907, Sheridan, WY 82801, or [LEGAL EMAIL ADDRESS]. We may send notices to the most recent email address or phone number you gave us. Notices sent by email are treated as received 24 hours after sending unless we learn the address is invalid.</p>,
				},
				{
					id: "changes",
					title: "Changes to These Terms",
					content: <p>We may revise these terms by posting an updated version and changing the "Last updated" date. Changes take effect when posted unless a later effective date is stated. Your continued use after an update means you accept the revised terms to the extent permitted by law.</p>,
				},
				{
					id: "severability",
					title: "Severability",
					content: <p>If a provision of these terms is found invalid or unenforceable, it will be enforced to the fullest extent allowed and the rest of the terms will remain in effect. Our failure to enforce a provision is not a waiver of it.</p>,
				},
				{
					id: "acknowledgement",
					title: "Acknowledgement",
					content: <p>By using the website you confirm that you have read and understood these terms and agree to them. These terms give no rights to anyone other than you and Safe Home Rates.</p>,
				},
				{
					id: "contact",
					title: "Contact Information",
					content: <p>Safe Home Rates<br />30 N Gould St, 48907<br />Sheridan, WY 82801<br />+13077851466</p>,
				},
			]}
		/>
	);
}