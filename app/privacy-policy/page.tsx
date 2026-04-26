import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import { Screen } from "@/components/global/screen";

const PRIVACY_SECTIONS = [
  {
    id: 1,
    title: "Summary of Key Points",
    content: `We collect your personal and professional information to help match you with healthcare jobs and manage platform services.

We use your data to:
• Connect you with recruiters and job opportunities
• Manage shifts, payments, and platform usage
• Improve platform performance and security

We do not sell your personal data. You have the right to access, update, or request deletion of your data.

For any privacy concerns, contact: support@keraeva.com`,
  },
  {
    id: 2,
    title: "Introduction",
    content: `Keraeva ("Platform") is operated in Canada by MedFaster Heath Tech Inc. ("Company," "we," "our," or "us").

We provide a healthcare workforce marketplace platform connecting licensed healthcare professionals ("Candidates") with healthcare institutions and recruiters ("Recruiters").

This Privacy Policy explains how we collect, use, disclose, store, and protect personal information in accordance with:
• PIPEDA (Personal Information Protection and Electronic Documents Act – Canada)
• Applicable provincial privacy regulations
• Industry best practices in healthcare data security

By using Keraeva, you consent to the practices described herein.`,
  },
  {
    id: 3,
    title: "1.1 Scope and Application",
    content: `This Privacy Policy applies to all users of the KeRaeva platform, including:

(a) Candidates using the mobile application,
(b) Recruiter's organizations and staffing organizations using the web portal, and
(c) Any users accessing services through web or mobile interfaces.

The Policy covers information collected via paper forms, phone, email, in person and via KeRaeva's web and mobile applications.`,
  },
  {
    id: 4,
    title: "1.2 Types of Information Collected",
    content: `• Identification and contact: name, address, phone, email, date of birth, government identifiers where legally required (e.g., license numbers, professional registration numbers, tax IDs).

• Professional data (candidates/providers): CV, education, licenses, references, skills checklists, performance evaluations, timesheets, assignment history, criminal record, immunization record and vulnerable sector checks, professional liability/insurance details.

• Recruiter Information: contact persons, facility addresses, contract terms, staffing requirements, scheduling and billing information.

• Health and clinical data (Home Care Clients): limited to what is necessary to arrange staffing, telecommunication, and home care plans, such as clinical notes, lab reports, prescriptions and monitoring data, subject to applicable health privacy laws.

• Technical and usage data: device identifiers, IP address, approximate location, logs of access, browser data and usage analytics.

Location data (including GPS) is collected only with your explicit permission and can be disabled at any time through your device settings.`,
  },
  {
    id: 5,
    title: "1.3 Purposes of Collection and Use",
    content: `• To assess, qualify and onboard healthcare professionals, including verification of identity, credentials, references, licensing, background checks and work eligibility.

• To enter into, manage and enforce recruitment processes, service and licensing agreements with healthcare organizations, including shift allocation, scheduling, billing and performance monitoring.

• To provide telecommunication and home services, including triage, appointment booking, documentation, remote monitoring and coordination with pharmacies and labs.

• To manage payroll, invoicing, reimbursements and tax-related obligations for contractors and staff.

• To maintain clinical and operational quality, safety, complaint management and incident reporting.

• To comply with applicable laws, regulations, court orders, and the requirements of regulators and professional bodies, and to cooperate with audits and inspections.

• To secure KeRaeva's systems, prevent fraud, abuse or exploitation, and protect patients, providers and clients.`,
  },
  {
    id: 6,
    title: "1.4 Legal Bases / Consent",
    content: `KeRaeva relies on one or more legal bases for processing personal information, including:

• Consent (express or implied) from providers, candidates and patients, where required.
• Performance of a contract (e.g., recruitment agreements, independent contractor agreements, employment letters).
• Compliance with legal and regulatory obligations (health, labour, tax, insurance, public health).
• Legitimate interests such as ensuring patient safety, preventing abuse and fraud, and managing business operations, where permitted by law.`,
  },
  {
    id: 7,
    title: "1.5 Disclosure of Information",
    content: `KeRaeva may share information with the following categories of recipients, subject to confidentiality obligations and applicable law:

• Healthcare facilities, clinics, and other B2B clients that require provider information for clinical assignments, orientation, compliance and auditing.
• Telecommunication partners, pharmacies, diagnostic labs and logistics partners needed to deliver end‑to‑end care if applicable.
• Payment processors, payroll providers, insurers, auditors, legal advisors and IT service providers that support KeRaeva's operations, under data protection and confidentiality commitments.
• Regulatory authorities, law enforcement and professional bodies as required by law or for complaint, investigation or disciplinary purposes.

KeRaeva does not sell personal information under any circumstances and does not permit third parties to use personal data for their own independent marketing without consent.`,
  },
  {
    id: 8,
    title: "1.6 Cross‑Border Transfers",
    content: `Where personal data is transferred outside your jurisdiction, KeRaeva ensures appropriate legal, contractual, and technical safeguards are implemented to protect your information.

Access to such information will be strictly limited to KeRaeva's leadership and other specifically designated personnel who require it to perform their duties, and KeRaeva will maintain appropriate contractual and security safeguards to protect privacy and confidentiality.`,
  },
  {
    id: 9,
    title: "1.7 Data Security and Retention",
    content: `KeRaeva implements administrative, technical and physical safeguards designed to protect personal information against loss, theft, unauthorized access, disclosure, alteration and destruction.

Access to health and confidential business information is strictly limited on a "need-to-know" basis and subject to confidentiality obligations and disciplinary action for breaches.

Records are retained for the period required by applicable law, contractual obligations and professional standards, and then securely destroyed or anonymized.`,
  },
  {
    id: 10,
    title: "1.8 Individual Rights",
    content: `Subject to legal and contractual restrictions, individuals may have rights to:

• Access their personal information.
• Request correction or update of inaccurate or incomplete data.
• Withdraw consent to certain processing (where consent is the legal basis), noting that withdrawal may limit access to certain services or assignments.
• Lodge a complaint with a relevant supervisory authority.

Requests may be submitted in writing to KeRaeva's designated privacy contact at the address or email specified in the applicable agreement or policy.

KeRaeva will respond to written requests to access or correct personal information within the timeframes required by applicable privacy laws (within 30 days), subject to permitted extensions.

KeRaeva may request additional information to verify identity before granting access and may refuse certain requests where allowed or required by law, providing reasons where legally required.

Users may request deletion of their account and personal data by contacting support@keraeva.com. Requests will be processed in accordance with applicable laws and retention obligations.`,
  },
  {
    id: 11,
    title: "1.9 Confidentiality Commitment",
    content: `All KeRaeva staff, contractors and agents must sign confidentiality undertakings and adhere to KeRaeva's Privacy, Confidentiality and Security policies, and to all facility/clinic policies where they are placed.

Any breach or suspected breach of privacy or confidentiality must be reported immediately through KeRaeva's incident reporting channels and will be investigated and addressed, including notification to affected parties and regulators where required.

Where a privacy breach creates a real risk of significant harm, KeRaeva will assess the incident and notify affected individuals and relevant regulators as required by applicable privacy laws.`,
  },
  {
    id: 12,
    title: "1.10 Privacy Officer and Contact Information",
    content: `KeRaeva has designated a Privacy Officer who is accountable for KeRaeva's compliance with this Privacy Policy and applicable privacy laws.

Questions, requests to access or correct personal information, withdrawal of consent, or privacy complaints may be submitted in writing to:

Email: support@keraeva.com

The Privacy Officer will review and respond to written inquiries within timelines required by applicable law.`,
  },
  {
    id: 13,
    title: "1.11 Effective Date and Changes to this Policy",
    content: `This Privacy Policy is effective as of April 2, 2026 and may be updated from time to time.

KeRaeva will post any material changes on the Platform and update the "Last Updated" date. Continued use of the Platform after changes take effect constitutes acceptance of the revised Policy.`,
  },
  {
    id: 14,
    title: "1.12 Methods of Collection",
    content: `KeRaeva collects personal information: (a) directly from individuals (e.g., registration forms, applications, teleconsultations, support interactions), (b) from clients and partners involved in staffing or care delivery, and (c) from third‑party verification, analytics and service providers, where permitted by law.

KeRaeva may also collect technical and usage information automatically through cookies, SDKs, web beacons and similar technologies when you use the Platform.

You may manage cookie preferences through your browser settings; however, disabling certain cookies may impact Platform functionality.`,
  },
  {
    id: 15,
    title: "1.13 Cookies, Analytics and Tracking Technologies",
    content: `The Platform uses cookies and similar technologies to: (a) maintain session security, (b) remember preferences, and (c) analyze usage to improve performance and user experience.

KeRaeva may use third‑party analytics tools and service providers that process limited personal information on KeRaeva's behalf under contractual confidentiality and security commitments.`,
  },
  {
    id: 16,
    title: "1.14 Children and Minors",
    content: `The Platform is primarily intended for use by adults and licensed healthcare professionals. KeRaeva does not knowingly collect personal information directly from children below the age permitted under applicable law without the consent of a parent or legal guardian.

Where services involve minors (e.g., pediatric care), their information is collected and used through the consent and involvement of a parent, guardian, or authorized healthcare provider in accordance with applicable health information laws.`,
  },
  {
    id: 17,
    title: "1.15 Notifications",
    content: `We may send notifications related to job opportunities, shift updates, and platform activity. You can manage or disable notifications at any time through your device or app settings.`,
  },
  {
    id: 18,
    title: "1.16 Platform Roles and Data Context",
    content: `Depending on how you use the KeRaeva platform:

• Candidates (mobile app users) provide professional, identity, and availability data for job matching and assignments.
• Recruiters and organizations (web portal users) provide business, staffing, and operational data to manage workforce requirements.
• In certain cases involving patient services, KeRaeva may process limited health-related information strictly for operational and service delivery purposes.

All such data is handled under this unified Privacy Policy with role-based access and protection controls.

Last Updated: April 26, 2026`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <Screen>
      <Header>
        <Section className="pt-2 md:pt-4 lg:pt-6 xl:pt-8">
          <div className="space-y-4">
            {/* Title */}
            <Heading
              as="h1"
              size="lg"
              weight="normal"
              className="text-[#252B37]"
            >
              Privacy Policy
            </Heading>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="text-[#252B37] hover:text-[#F3651B] transition-colors text-lg"
              >
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-[#717680]" />
              <Paragraph size="lg" className="text-[#717680]">
                Privacy Policy
              </Paragraph>
            </div>
          </div>
        </Section>
      </Header>

      {/* Content Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="space-y-12">
            {PRIVACY_SECTIONS.map((section) => (
              <div key={section.id} className="space-y-4">
                <Heading as="h2" size="sm" className="text-[#252B37] font-bold">
                  {section.title}
                </Heading>

                <Paragraph size="sm" className="text-[#717680] leading-relaxed whitespace-pre-line">
                  {section.content}
                </Paragraph>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </Screen>
  );
}