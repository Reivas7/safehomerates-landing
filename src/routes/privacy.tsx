import { createFileRoute } from "@tanstack/react-router";
import { LegalDocument } from "@/components/legal-document";

export const Route = createFileRoute("/privacy")({
	head: () => ({
		meta: [
			{ title: "Privacy Policy | SafeHomeRates" },
			{ name: "description", content: "Learn what information SafeHomeRates collects, how it is used, and the privacy choices available to you." },
			{ property: "og:title", content: "Privacy Policy | SafeHomeRates" },
			{ property: "og:description", content: "Privacy information and choices for users of SafeHomeRates." },
			{ property: "og:type", content: "website" },
			{ property: "og:url", content: "/privacy" },
			{ name: "twitter:card", content: "summary_large_image" },
		],
		links: [{ rel: "canonical", href: "/privacy" }],
	}),
	component: PrivacyPage,
});

function PrivacyPage() {
	return (
		<LegalDocument variant="sidebar" subtitle="We believe you should know what we collect, why we collect it, and the choices you have." calloutIds={["information-collected", "sharing"]}
			title="Privacy Policy"
			intro="This draft describes how Safe Home Rates may collect, use and share information when you visit SafeHomeRates or submit a request. Complete remaining placeholders and confirm actual practices with counsel before publishing."
			sections={[
				{
					id: "summary",
					title: "Summary of This Policy",
					content: <><p>This summary covers the basics. Please read the full policy below for details.</p><ul className="list-disc space-y-1 pl-5"><li>We collect information you give us when you submit a request, such as your contact details, ZIP code and project details, plus basic technical data from your browser or device.</li><li>With your consent, we share your request with independent service providers and marketing partners so they can contact you.</li><li>Some of this sharing may count as a "sale" or "sharing" under certain state laws. You can opt out at any time.</li><li>We and our vendors use cookies and similar technologies to run the site and measure advertising.</li><li>The site is for adults. We do not knowingly collect information from children under 13.</li><li>You can make privacy requests by calling +13077851466.</li></ul></>,
				},
				{
					id: "information-collected",
					title: "Information We Collect",
					content: <><p>Depending on how you use the site, we may collect information you provide directly, such as your name, email address, phone number, ZIP code, property details, service interests, project description and communication or consent choices. If you contact us or submit a partner inquiry, we may collect the details in that communication.</p><p>We may also receive basic technical and usage information from your browser or device, such as IP address, device and browser type, pages viewed, referring page, approximate location derived from IP, and the date and time of a visit. We may associate advertising or campaign identifiers (such as UTM parameters, click IDs and similar values) with a request.</p></>,
				},
				{
					id: "use-of-information",
					title: "How We Use Information",
					content: <p>We may use information to operate the website; process and route service requests; help match consumers with independent service providers or marketing partners; communicate about a request; respond to questions and privacy requests; prevent fraud and abuse; maintain security; measure site performance and advertising; comply with legal obligations; and enforce our terms.</p>,
				},
				{
					id: "sharing",
					title: "How We Share Information",
					content: <><p>To respond to a request, we may share the information submitted with relevant independent service providers and marketing partners, who may contact you about their services. We may also share information with vendors that help us host, secure, analyze or operate the website, and with professional advisers, regulators or other parties when necessary to comply with law, protect rights or support a business transfer.</p><p>Some disclosures or advertising activities may be considered a "sale" or "sharing" of personal information under certain state privacy laws. See the choices below for how to submit an opt-out request. We do not intend to share information for purposes unrelated to the disclosures described in this notice.</p></>,
				},
				{
					id: "categories",
					title: "Categories of Personal Information (California Notice at Collection)",
					content: <><p>In the past 12 months we may have collected the categories below. We collect them for the purposes listed in "How We Use Information" and may disclose them as described in "How We Share Information."</p><div className="overflow-x-auto"><table className="w-full border-collapse text-left text-sm"><thead><tr className="border-b border-slate-200 text-slate-900"><th className="py-2 pr-4 font-bold">Category</th><th className="py-2 pr-4 font-bold">Examples</th><th className="py-2 pr-4 font-bold">Source</th><th className="py-2 font-bold">Disclosed to</th></tr></thead><tbody className="align-top"><tr className="border-b border-slate-100"><td className="py-2 pr-4">Identifiers</td><td className="py-2 pr-4">Name, email, phone number, IP address</td><td className="py-2 pr-4">You; your device</td><td className="py-2">Providers, partners, vendors</td></tr><tr className="border-b border-slate-100"><td className="py-2 pr-4">Property and project details</td><td className="py-2 pr-4">ZIP code, home type and age, service or project description, budget, timeline</td><td className="py-2 pr-4">You</td><td className="py-2">Providers, partners</td></tr><tr className="border-b border-slate-100"><td className="py-2 pr-4">Communication and consent records</td><td className="py-2 pr-4">Form submissions, consent choices, timestamps</td><td className="py-2 pr-4">You</td><td className="py-2">Providers, vendors as needed</td></tr><tr className="border-b border-slate-100"><td className="py-2 pr-4">Internet and device activity</td><td className="py-2 pr-4">Pages viewed, referring page, UTM parameters, click IDs, cookie identifiers</td><td className="py-2 pr-4">Your browser; vendors</td><td className="py-2">Analytics and advertising vendors</td></tr><tr><td className="py-2 pr-4">Approximate location</td><td className="py-2 pr-4">City or region derived from IP address</td><td className="py-2 pr-4">Your device</td><td className="py-2">Vendors</td></tr></tbody></table></div><p>[CONFIRM THESE CATEGORIES AND THE 12-MONTH DISCLOSURE PRACTICES AGAINST ACTUAL DATA FLOWS BEFORE PUBLISHING.]</p></>,
				},
				{
					id: "sensitive-info",
					title: "Information You Should Not Submit",
					content: <p>Our forms are not designed to collect Social Security numbers, driver's license numbers, bank or card numbers, or health information. Please do not include this information in a request or in free-text fields. If you do, it may already have been shared with a provider or partner as part of your request, so contact them directly if you need it removed.</p>,
				},
				{
					id: "location",
					title: "Location Information",
					content: <p>We do not intend to collect precise geolocation from your device. We may derive an approximate location, such as a city or region, from your IP address to show relevant content and route requests to providers that serve your area. Your browser or device settings may let you limit location sharing.</p>,
				},
				{
					id: "cookies-tracking",
					title: "Cookies and Tracking Technologies",
					content: <p>We and our vendors may use cookies, pixels, tags, local storage and similar technologies to remember preferences, understand site use, measure campaigns and support advertising or analytics. Browser settings may allow you to block or remove cookies, though parts of the site may not work as intended. Any analytics or advertising technologies must be configured to match the site's actual deployment and your choices before launch.</p>,
				},
				{
					id: "retention",
					title: "Data Retention",
					content: <p>We retain information for as long as reasonably necessary for the purposes described here, including fulfilling requests, maintaining records, resolving disputes, enforcing agreements and meeting legal requirements. Retention periods may vary based on the type of information and applicable obligations. Insert the operational retention schedule: [RETENTION PERIOD / SCHEDULE].</p>,
				},
				{
					id: "security",
					title: "Security",
					content: <p>We use administrative, technical and organizational measures intended to protect information. No method of transmission or storage is completely secure, and we cannot guarantee absolute security. Contact us promptly if you believe information submitted through the site has been misused.</p>,
				},
				{
					id: "california-rights",
					title: "California and Other State Privacy Rights",
					content: <><p>Depending on where you live and subject to applicable exceptions, you may have rights to request access to or know about personal information, obtain a portable copy, request deletion or correction, and opt out of certain sales, sharing or targeted advertising. You may also have the right not to receive discriminatory treatment for exercising a privacy right.</p><p>To submit a request, call +13077851466 and ask for the privacy contact. We may need to verify your identity and authority before responding. An authorized agent may submit a request where permitted by law, and we may request proof of authorization. We will respond within the time required by applicable law and explain any decision if we cannot fulfill a request.</p></>,
				},
				{
					id: "do-not-sell-share",
					title: "Do Not Sell or Share My Personal Information",
					content: <><p>If you want to opt out of a sale or sharing of personal information as those terms are defined by applicable law, call +13077851466 and ask to make a "Do Not Sell or Share My Personal Information" request. Include enough information for us to locate and verify your request; do not send sensitive identity documents unless we specifically request them through a secure method.</p><p>Where required, we will also honor a recognized browser-based opt-out preference signal for the browser or device that sends it. You can submit another privacy request by calling +13077851466 or writing to Safe Home Rates, 30 N Gould St, 48907, Sheridan, WY 82801.</p></>,
				},
				{
					id: "other-state-rights",
					title: "Rights for Residents of Other States",
					content: <><p>Residents of some states have rights to confirm and access personal information, correct inaccuracies, delete information, receive a portable copy, and opt out of targeted advertising, sales or certain profiling. To use these rights, follow the steps in the sections above. If we deny a request, you may ask us to reconsider by calling +13077851466 and asking for an appeal. If you are still concerned, you may contact your state attorney general.</p><p>Nevada residents may opt out of the sale of certain covered information by calling +13077851466. California residents may also ask which categories of personal information we shared with third parties for their direct marketing purposes in the prior calendar year.</p></>,
				},
				{
					id: "children",
					title: "Children's Privacy",
					content: <p>SafeHomeRates is intended for adults and is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided information, call +13077851466 so we can review and take appropriate steps.</p>,
				},
				{
					id: "communications-choices",
					title: "Marketing and Contact Choices",
					content: <p>You can opt out of marketing emails by using the unsubscribe link in the message. For marketing texts, reply STOP where that option is available; for calls, tell the caller you do not want further marketing calls or call +13077851466. Allow reasonable time for requests to take effect. These choices may not stop non-marketing or service-related communications where permitted by law, and you may need to separately contact a provider or partner that has your information.</p>,
				},
				{
					id: "third-party-sites",
					title: "Third-Party Websites",
					content: <p>The site may link to websites operated by others, including providers and partners. We do not control their privacy practices. Review a company's privacy policy before you share information with it.</p>,
				},
				{
					id: "alternative-format",
					title: "Alternative Format",
					content: <p>If you need this policy in another format, call +13077851466 and we will work with you to provide it.</p>,
				},
				{
					id: "changes",
					title: "Changes to This Policy",
					content: <p>We may update this policy as practices or legal requirements change. We will post the updated version here and revise the date below. Changes take effect when posted unless stated otherwise.</p>,
				},
				{
					id: "contact",
					title: "Contact Us",
					content: <p>Privacy questions and requests:<br />Safe Home Rates<br />30 N Gould St, 48907<br />Sheridan, WY 82801<br />+13077851466</p>,
				},
			]}
		/>
	);
}