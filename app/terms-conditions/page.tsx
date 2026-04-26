import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import { Screen } from "@/components/global/screen";

const TERMS_SECTIONS = [
  {
    id: 1,
    title: "1. Platform Terms",
    content: `By accessing or using the KeRaeva platform (including mobile applications and web portals), you agree to be bound by these Terms and Conditions, including any entity-specific terms applicable to your role (candidate or recruiter).

• If you are using the platform as a healthcare provider, you agree to the Candidate Terms.
• If you are using the platform as a recruiter or organization, you agree to the Recruiter Terms.
• If you do not agree, you must not use the platform.

KeRaeva does not guarantee job placements, assignments, or minimum earnings for any user on the platform.`,
  },
  {
    id: 2,
    title: "2. Recruiter Terms",
    content: ``,
  },
  {
    id: 3,
    title: "2.0 Definitions",
    content: `In these Terms and Conditions – Recruitment Partner (Client):

• "Client" means the healthcare facility, clinic, hospital, organization or other entity entering into this Agreement with KeRaeva.
• "KeRaeva Personnel" means healthcare professionals and other workers recruited, onboarded or assigned by KeRaeva to the Client.
• "Platform" means KeRaeva's web and mobile applications, systems, and related technology services.
• "Services" means staffing, telehealth and related services provided or facilitated by KeRaeva under this Agreement.
• "Assignment" means any shift, placement or engagement of KeRaeva Personnel at the Client's site or through virtual care.`,
  },
  {
    id: 4,
    title: "2.1 Relationship and Status",
    content: `KeRaeva provides healthcare staffing, telehealth and related services as an independent contractor, and nothing in the agreement shall be construed as creating a partnership, joint venture or employment relationship between KeRaeva and the client.

KeRaeva's staff and contractors remain under KeRaeva's direction and are not employees of the client, except as expressly agreed otherwise in writing.

KeRaeva is a technology platform that facilitates connections between healthcare professionals and organizations. KeRaeva does not directly provide medical services or act as a healthcare provider.`,
  },
  {
    id: 5,
    title: "2.2 Services and Service Levels",
    content: `KeRaeva will use commercially reasonable efforts to provide qualified healthcare professionals and technology services in accordance with agreed specifications, schedules and service levels, but does not guarantee that specific individuals, times, locations or volumes will always be available.

The client must ensure that KeRaeva staff receive orientation information to site-specific policies, equipment, documentation systems, emergency procedures and local protocols, and must provide a safe and compliant workplace.`,
  },
  {
    id: 6,
    title: "2.3 Client Obligations",
    content: `The client shall:

– Provide accurate and complete information regarding assignment requirements, patient or resident acuity, scope of practice, and any known risks.
– Ensure compliance with all applicable health, safety, labour and privacy laws at its facilities.
– Not directly solicit or hire KeRaeva providers outside of the agreed arrangements.
– Promptly review and sign off on timesheets, invoices and reports, and timely pay all fees, overtime charges, holiday rates and reimbursable expenses as per the fee schedule.`,
  },
  {
    id: 7,
    title: "2.4 Non‑Solicitation and Conversion Fee",
    content: `The Client acknowledges that KeRaeva has invested substantial time and resources in recruiting, screening, onboarding, and training its healthcare professionals and other personnel (collectively, "KeRaeva Personnel"). Accordingly:

Non‑Solicitation
The Client agrees that it shall not, directly or indirectly, during the term of this Agreement and for a period of twelve (12) months following the later of (a) the termination or expiry of this Agreement, or (b) the last date on which any KeRaeva Personnel provided services to the Client, solicit for employment or engagement, hire, or otherwise engage any KeRaeva Personnel introduced or supplied to the Client by KeRaeva, except with KeRaeva's prior written consent.

Conversion / Placement Fee
If the Client breaches the non‑solicitation obligation in this clause by hiring or engaging any KeRaeva Personnel (whether directly, through an affiliate, or via another agency), the Client shall pay to KeRaeva, as liquidated damages and not as a penalty, a fee equal to 40% of the KeRaeva Personnel's estimated gross annual remuneration (including wages, bonuses, allowances and other guaranteed compensation) or the total billings generated by that individual over the previous 12 weeks, whichever is higher, payable within thirty (30) days of the date the KeRaeva Personnel commences such engagement. The Parties agree that this amount is a genuine pre‑estimate of KeRaeva's losses and is reasonable given the difficulty of quantifying such losses.

Additional Remedies
The fee set out above is without prejudice to KeRaeva's right to seek injunctive relief, specific performance, or other equitable or legal remedies for any breach of this clause, including recovery of any additional demonstrable losses and legal costs incurred in enforcing its rights.`,
  },
  {
    id: 8,
    title: "2.5 Fees, Overtime and Expenses",
    content: `The Client agrees to pay KeRaeva the hourly service rates, overtime premiums, statutory holiday rates, and any other fees set out in the applicable schedule(s), together with all applicable taxes, where chargeable.

Overtime and statutory holiday rates shall apply only where such hours have been pre‑approved by the Client or are required by applicable law, as further described in this Agreement and the relevant schedule(s).

Where a provider is not local to the site of services, the Client shall reimburse KeRaeva for reasonable and pre‑approved travel, accommodation, and meal expenses in accordance with this Agreement and the applicable schedule(s).`,
  },
  {
    id: 9,
    title: "2.6 Compliance, Insurance and Licensing",
    content: `KeRaeva warrants that its staff and contractors will hold and maintain all required registrations, licenses, permits and professional insurances, and will comply with applicable health, labour and privacy laws.

The client must maintain its own professional, general liability and property insurances and workers' compensation coverage as required by law and industry standards.`,
  },
  {
    id: 10,
    title: "2.7 Intellectual Property",
    content: `KeRaeva retains all rights, title and interest in and to the Platform, software, documentation, trademarks, logos, and all related intellectual property, whether registered or unregistered.

The Client receives a limited, non‑exclusive, non‑transferable right to access and use the Platform solely for its internal business purposes and only for the term of the Agreement, subject to these Terms.

The Client shall not reverse engineer, copy, modify, sublicense, or create derivative works of the Platform or any KeRaeva intellectual property, except as expressly permitted in writing.`,
  },
  {
    id: 11,
    title: "2.8 Limitation of Liability",
    content: `To the maximum extent permitted by law, KeRaeva's aggregate liability arising from or in connection with the Agreement (whether in contract, tort, negligence or otherwise) shall be limited to the total fees paid by the client to KeRaeva under the Agreement during the preceding twelve (12) months.

KeRaeva shall not be liable for any consequential, indirect, incidental, special or punitive damages, including loss of profits, revenue, goodwill, or business interruption, even if advised of the possibility of such damages.

Nothing limits liability for death or personal injury caused by gross negligence, fraud, or any liability that cannot be excluded under applicable law.`,
  },
  {
    id: 12,
    title: "2.9 Indemnities",
    content: `The client shall indemnify and hold KeRaeva and its directors, officers, employees and contractors harmless from claims, losses, damages, costs or expenses arising out of:

– The client's breach of law or contract, negligence, or failure to provide a safe environment.
– Misuse of KeRaeva's platform or data by the client or its staff.

KeRaeva shall indemnify the client for claims arising solely from KeRaeva's gross negligence, willful misconduct or material breach of the Agreement, subject to the above limitations.`,
  },
  {
    id: 13,
    title: "2.10 Term, Termination and Suspension",
    content: `The Agreement is effective for the term specified, with rights of renewal by written agreement.

Either party may terminate for convenience with 15 days' written notice, subject to payment of all outstanding fees and approved costs up to the effective termination date.

Either party may terminate immediately for material breach not cured within a specified cure period, or for insolvency or regulatory prohibition.

KeRaeva may suspend services, access to the platform or specific providers where necessary to protect patient safety, comply with law, or address non‑payment or misuse.`,
  },
  {
    id: 14,
    title: "2.11 Confidentiality and Data Protection",
    content: `Both parties must safeguard all confidential and personal information received under the Agreement, and use it only for the purpose of performing their obligations and as permitted by law.

Confidentiality obligations survive termination for at least 3 years or as long as the information remains confidential, whichever is longer.`,
  },
  {
    id: 15,
    title: "2.12 Data Protection and Roles",
    content: `For staffing and workforce data (e.g., candidate profiles, schedules, timesheets) KeRaeva is generally the organization determining purposes of processing and acts as an independent data controller under applicable privacy laws.

For patient health information processed through the Platform on behalf of the Client, the Client is primarily responsible for determining purposes and means of processing and remains the custodian or controller of such data, while KeRaeva acts as a service provider / processor.

Each party agrees to comply with applicable privacy and health information laws for data under its control and to cooperate in good faith to address any data subject requests, incidents or regulator inquiries.`,
  },
  {
    id: 16,
    title: "2.13 Force Majeure",
    content: `Neither party shall be liable for delay or failure to perform obligations (other than payment obligations) caused by events beyond its reasonable control, including acts of God, pandemics, government actions, labour disputes, system outages, or internet/telecommunications failures.

The affected party shall use commercially reasonable efforts to mitigate the impact and resume performance as soon as practicable, and will notify the other party of the force majeure event where feasible.`,
  },
  {
    id: 17,
    title: "2.14 Governing Law and Jurisdiction",
    content: `This Agreement is governed by the laws of the Province of Alberta and the federal laws of Canada applicable therein, without giving effect to conflict‑of‑law rules.

The parties irrevocably attorn to the exclusive jurisdiction of the courts of Calgary, Alberta for any dispute arising out of or relating to this Agreement, subject to any mandatory laws.`,
  },
  {
    id: 18,
    title: "2.15 Assignment",
    content: `The Client may not assign or transfer this Agreement, or any rights or obligations under it, without KeRaeva's prior written consent, except to an affiliate as part of a bona fide corporate reorganization.

KeRaeva may assign this Agreement to an affiliate, successor, or purchaser of substantially all of its assets or business, upon notice to the Client.`,
  },
  {
    id: 19,
    title: "2.16 Entire Agreement, Severability and Waiver",
    content: `This Agreement, together with any schedules, constitutes the entire agreement between the parties regarding the subject matter and supersedes all prior proposals or understandings.

If any provision is held invalid or unenforceable, the remaining provisions shall remain in full force, and the provision shall be modified to the minimum extent necessary to be enforceable.

No waiver of any breach is effective unless in writing, and no failure to exercise a right constitutes a waiver of future rights.`,
  },
  {
    id: 20,
    title: "3. Candidate Terms",
    content: ``,
  },
  {
    id: 21,
    title: "3.0 Eligibility and Registration",
    content: `By registering on the Platform, providers represent that they: (a) are at least the minimum legal age to work in the relevant jurisdiction, (b) have legal capacity to enter into binding agreements, and (c) hold valid authorization to work in the jurisdictions where they accept assignments.

Providers agree to maintain accurate account information and promptly update any changes to contact details, licenses, or employment status.

Providers are responsible for maintaining the confidentiality of their login credentials and for all activity conducted under their account.

Providers must notify KeRaeva promptly of any suspected unauthorized access or security incident; KeRaeva is not liable for losses resulting from unauthorized use of credentials where KeRaeva has implemented reasonable safeguards.`,
  },
  {
    id: 22,
    title: "3.1 Status and Relationship",
    content: `Providers engaged through KeRaeva are independent contractors or temporary employees, as specified in their individual agreements; nothing creates an employment relationship with the recruitment partner (client) unless expressly agreed in writing.

As independent contractors, providers are responsible for their own taxes, benefits, and insurance, except where otherwise required by law or explicitly agreed by KeRaeva.`,
  },
  {
    id: 23,
    title: "3.2 Accuracy and Completeness of Information",
    content: `Candidates and providers warrant that all information supplied in application forms, CVs, references, skills checklists, medical forms, criminal checks and other documents is complete, accurate and not misleading, and agree to promptly update KeRaeva of any changes.

Any misrepresentation or omission may result in immediate termination of assignments and contractual relations.

Providers acknowledge that assignments may be conditional on satisfactory completion of credential verification, reference checks, criminal record and vulnerable sector checks, and other screening required by KeRaeva or clients.

KeRaeva reserves the right to conduct periodic re‑verification, and to suspend or terminate assignments where screening results, regulatory actions, or misrepresentations raise safety or compliance concerns.`,
  },
  {
    id: 24,
    title: "3.3 Professional Obligations",
    content: `Providers must:

– Maintain required licenses, certifications, professional liability insurance, and any mandated continuing education as per standard.
– Comply with all applicable laws, professional standards, codes of ethics, and facility policies.
– Adhere to KeRaeva's policies on confidentiality, abuse prevention, respectful workplace, conflict of interest, and safe practice.
– Use only authorized software, tools and systems for documentation, communication and telehealth services.`,
  },
  {
    id: 25,
    title: "3.4 Assignment, Scheduling and Cancellation",
    content: `KeRaeva may offer assignments but does not guarantee any minimum number of shifts, hours or assignments.

Providers may accept or decline assignments subject to any minimum commitment obligations set out in their agreements or letters of acceptance.

KeRaeva or the recruitment partner (client) may cancel or modify assignments, including on short notice, to respond to patient needs and operational requirements, without liability beyond payment for hours actually worked as specified in the agreement.

Providers are not permitted to cancel an accepted assignment within 2 hours of its scheduled start time. In the event a provider cancels within this restricted period, KeRaeva reserves the right to deduct an increased payment amount equivalent to the replacement assignment cost or associated penalties incurred to ensure client coverage. This deduction helps offset the operational impact of short-notice cancellations and maintain service continuity for clients.

KeRaeva will calculate any deduction for short‑notice cancellations based on the documented replacement costs, minimum call‑out charges, or contractual penalties incurred to maintain client coverage, up to a reasonable maximum not exceeding the provider's expected gross earnings for that assignment.

Repeated late cancellations or no‑shows may constitute misconduct and may result in corrective action, including suspension or permanent removal from the Platform, in accordance with section 4.6.`,
  },
  {
    id: 26,
    title: "3.5 Compensation, Expenses and Taxes",
    content: `Compensation, overtime, holiday rates, travel, accommodation and meals are as set out in each provider's individual contract or offer letter, and may differ by assignment, location and role if applicable.

Independent contractors are solely responsible for reporting and remitting all applicable taxes, contributions, and government charges on their income.

Providers must follow KeRaeva's invoicing, timesheet and expense procedures; failure to do so may delay or prevent payment.`,
  },
  {
    id: 27,
    title: "3.6 Confidentiality and Data Protection",
    content: `Providers must keep all patient, client, KeRaeva and third-party information strictly confidential, and use it only for the performance of their duties.

Providers must comply with applicable privacy and health information laws, and with KeRaeva's Privacy and Confidentiality policies, including any electronic access, password and system security rules.`,
  },
  {
    id: 28,
    title: "3.7 Conduct, Abuse Prevention and Safety",
    content: `Providers must maintain professional conduct at all times, treat patients and colleagues with respect, and strictly avoid any form of abuse, exploitation, harassment or discrimination.

Providers must immediately report any actual or suspected abuse, neglect, exploitation, harassment, unsafe practice or serious incident through the appropriate channels within the facility and to KeRaeva.

Any breach of conduct provisions is a material breach and may result in immediate termination of assignments and contracts.`,
  },
  {
    id: 29,
    title: "3.8 Limitation of Liability and Indemnity",
    content: `KeRaeva's liability to providers is limited to amounts owing under their contract for services, subject to applicable laws, and excludes consequential or indirect losses (such as loss of future opportunities or earnings).

Providers agree to indemnify KeRaeva for losses arising from their negligence, misrepresentation, breach of law, or breach of their agreement with KeRaeva.`,
  },
  {
    id: 30,
    title: "3.9 Subscription Terms",
    content: `Upon registration, all users are automatically enrolled in KeRaeva's default subscription plan under the freemium model. During the freemium period, users may access limited platform features at no cost. After the freemium period expires or when a user chooses to access premium features, applicable subscription or service charges will apply as per KeRaeva's current pricing structure.

By maintaining an active account, users consent to automatic billing of applicable fees through their chosen payment method. KeRaeva reserves the right to revise subscription plans and pricing with prior notice in accordance with platform billing policies.

Users may cancel their paid subscription at any time through their account settings or by contacting KeRaeva support; cancellation will take effect at the end of the then‑current billing period, unless otherwise specified.

Unless prohibited by law or expressly stated otherwise, subscription fees already charged for the current billing period are non‑refundable, and services will remain available until the end of that period.

Users will be clearly informed of applicable charges before any payment is processed. No charges will be applied without user confirmation where required by applicable laws.`,
  },
  {
    id: 31,
    title: "3.10 Provider Concerns and Dispute Resolution",
    content: `Providers who wish to raise concerns about pay, timesheets, assignment conditions, conduct of clients, or platform decisions (including suspension or blacklisting) should notify KeRaeva in writing via the designated support or escalation channel within 5 days of becoming aware of the issue.

KeRaeva will review reasonable complaints in good faith, may request additional information, and will communicate its decision or proposed resolution within a commercially reasonable timeframe, subject to any applicable legal obligations.`,
  },
  {
    id: 32,
    title: "3.11 Payment and Wallet Redemption",
    content: `When a user redeems earned amounts from their KeRaeva Wallet, payments will be processed and transferred to their registered bank account via direct deposit or pre-authorized payment setup.

Processing times depend on the user's financial institution but are generally completed within 2 to 7 business days. KeRaeva will not be liable for delays caused by incorrect banking details or third-party payment processor issues.`,
  },
  {
    id: 33,
    title: "3.12 Refunds, Chargebacks and Set‑Off",
    content: `Except where required by law or expressly stated in a specific offer, fees for completed services and subscription periods are non‑refundable.

In the event of a payment dispute or chargeback, KeRaeva may suspend access to the Platform or wallet withdrawals until the matter is resolved.

KeRaeva may set off or deduct from amounts payable to a provider any undisputed amounts owed by that provider to KeRaeva under these Terms, including approved short‑notice cancellation fees or overpayments, subject to applicable employment and wage laws.`,
  },
  {
    id: 34,
    title: "3.13 Currency and Taxes",
    content: `Unless otherwise indicated, all prices and payments are in Canadian dollars and may be subject to applicable taxes, levies and withholdings.

Where users are paid or charged in a different currency, exchange rates and any bank or card fees are determined by the user's financial institution, and KeRaeva is not responsible for such variations or fees.`,
  },
];


export default function TermsConditionsPage() {
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
              Terms & Condition
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
                Terms & Condition
              </Paragraph>
            </div>
          </div>
        </Section>
      </Header>

      {/* Content Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="space-y-12">
            {TERMS_SECTIONS.map((section) => (
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
