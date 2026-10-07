import type { LegalDocumentData } from "./types";

// Single source for the website and in-app (mobile) Privacy Policy pages.
export const PRIVACY_POLICY: LegalDocumentData = {
  title: "Privacy Policy",
  effectiveDate: "April 2, 2026",
  lastUpdated: "October 7, 2026",
  summary: `We collect personal and professional information to connect healthcare professionals with healthcare organizations and to run the KeRaeva platform.

• We use your information to build your profile, verify credentials, run AI interviews, match you with jobs and shifts, and manage scheduling and payments.
• We do not sell your personal information.
• You can access, correct or request deletion of your information at any time.

Questions? Contact our Privacy Officer at support@keraeva.com.`,
  parts: [
    {
      sections: [
        {
          id: "introduction",
          title: "1. Introduction",
          content: `KeRaeva (the "Platform") is operated in Canada by MedFaster Health Tech Inc. ("Company," "we," "our," or "us").

KeRaeva is a healthcare workforce platform that connects licensed healthcare professionals ("Professionals" or "Candidates") with healthcare organizations and their recruiters ("Organizations" or "Recruiters").

This Privacy Policy explains how we collect, use, disclose, store and protect personal information in accordance with:
• the Personal Information Protection and Electronic Documents Act (PIPEDA),
• applicable provincial privacy laws, and
• industry practices for protecting sensitive information.

By using KeRaeva, you consent to the practices described in this Privacy Policy.`,
        },
        {
          id: "scope",
          title: "2. Scope and Application",
          content: `This Privacy Policy applies to everyone who uses KeRaeva, including:
• Professionals using the KeRaeva mobile app,
• Organizations, recruiters and staffing organizations using the KeRaeva web portal, and
• anyone who visits our website or contacts us.

It covers information collected through our website and apps, and by email, phone or in person.`,
        },
        {
          id: "information-collected",
          title: "3. Information We Collect",
          content: `• Identity and contact information: name, address, phone number, email, date of birth, and government or professional identifiers where legally required (for example, licence or registration numbers).
• Professional information (Professionals): resume, education, work experience, skills, licences, certifications, references, assignment history, and screening results such as criminal record, vulnerable sector or immunization checks where required for an assignment.
• AI interview information (Professionals): audio and video recorded during AI interviews, interview transcripts, and the scores, summaries, strengths, areas to improve and flags generated from them.
• Identity verification information (Professionals): images captured during AI interviews to confirm that the person interviewing matches the profile and is present (identity and liveness checks).
• Availability and work information: your availability settings, shifts, check-in and check-out times, and attendance records.
• Payment information: wallet balances, transaction history and payout details. Bank account details for payouts are collected and stored by our payment processor.
• Organization information: contact persons, facility addresses, job and shift requirements, scheduling, billing and contract details.
• Communications: messages exchanged through in-app chat, support requests and feedback.
• Referral information: referral codes and the sign-up and milestone status of people you refer.
• Technical and usage information: device identifiers, push notification tokens, IP address, approximate location, app and browser data, and usage analytics.

Location data, including precise (GPS) location, is collected only with your permission. It is used to show nearby opportunities, match urgent shifts and record shift check-in, and you can turn it off at any time in your device settings.`,
        },
        {
          id: "how-we-use",
          title: "4. How We Use Your Information",
          content: `• To create and manage accounts and professional profiles, including using AI to extract details from uploaded resumes.
• To verify identity, credentials, licences, references, screening results and work eligibility.
• To run AI interviews and produce structured scorecards that help Organizations assess Professionals consistently.
• To match Professionals with jobs and shifts, including sending urgent shift opportunities to eligible, available Professionals nearby.
• To manage applications, interviews, scheduling, shifts, attendance, wallet payments, payouts and invoicing.
• To provide in-app messaging, notifications and customer support.
• To operate the referral program.
• To maintain quality and safety, handle complaints and investigate incidents.
• To comply with laws, regulations, court orders and the requirements of regulators and professional bodies.
• To secure our systems, prevent fraud and misuse, and improve the Platform.`,
        },
        {
          id: "ai-and-automated-assessment",
          title: "5. AI Interviews and Automated Assessment",
          content: `KeRaeva uses artificial intelligence to parse resumes, conduct and assess structured interviews, and match Professionals with opportunities.

• AI interviews are recorded and transcribed so that a scorecard can be generated.
• During an AI interview, we check that the person interviewing matches the profile and is present, and we may end an interview that does not meet these integrity checks.
• Scorecards and AI matches are tools to support decisions. Hiring and staffing decisions are made by Organizations, not solely by automated means.
• Professionals can view their own scorecards and choose which completed profile interview is shown to recruiters.

If you have questions about an AI assessment, contact us at support@keraeva.com.`,
        },
        {
          id: "consent",
          title: "6. Legal Bases and Consent",
          content: `We rely on one or more of the following, as permitted by applicable law:
• your consent (express or implied),
• performance of a contract, such as an agreement with a Professional or Organization,
• compliance with legal and regulatory obligations (including labour, tax and insurance requirements), and
• legitimate business purposes such as preventing fraud and keeping the Platform safe and secure.`,
        },
        {
          id: "disclosure",
          title: "7. How We Share Information",
          content: `We share information only as needed and subject to confidentiality obligations and applicable law:
• With Organizations: when you apply, are invited, or are matched or considered for a role or shift, relevant profile, credential, availability and interview information is shared with that Organization.
• With service providers that support the Platform, such as cloud hosting, AI and voice interview technology, communications, payment processing, analytics, insurance, auditing, legal and IT services, under contractual confidentiality and security commitments.
• With regulators, law enforcement and professional bodies, where required by law or for investigations and complaints.
• As part of a merger, acquisition or sale of assets, subject to this Privacy Policy.

We do not sell personal information and do not allow third parties to use it for their own marketing without your consent.`,
        },
        {
          id: "cross-border",
          title: "8. Cross-Border Transfers",
          content: `Some of our service providers may store or process information outside your province or outside Canada. When this happens, we use contractual, technical and organizational safeguards to protect your information. Information stored outside Canada may be subject to the laws of the country where it is held.`,
        },
        {
          id: "security-retention",
          title: "9. Data Security and Retention",
          content: `We use administrative, technical and physical safeguards to protect personal information against loss, theft and unauthorized access, use, disclosure, alteration or destruction.

Access to personal and confidential business information is limited to people who need it to perform their duties and who are bound by confidentiality obligations.

We keep personal information only as long as needed for the purposes described in this Privacy Policy, or as required by law, contract or professional standards, and then securely destroy or anonymize it.`,
        },
        {
          id: "your-rights",
          title: "10. Your Rights",
          content: `Subject to legal and contractual limits, you can:
• access the personal information we hold about you,
• ask us to correct inaccurate or incomplete information,
• withdraw your consent to certain uses (which may limit the services we can provide), and
• make a complaint to us or to the Office of the Privacy Commissioner of Canada or a provincial privacy regulator.

You can request deletion of your account and personal information in the app or by emailing support@keraeva.com. We will respond within the timelines required by applicable law (generally within 30 days), may ask you to verify your identity, and may retain some information where the law requires it.`,
        },
        {
          id: "breaches",
          title: "11. Confidentiality and Privacy Breaches",
          content: `Our staff, contractors and agents are bound by confidentiality obligations and our privacy and security policies.

If a privacy breach creates a real risk of significant harm, we will assess the incident and notify affected individuals and the relevant regulators as required by applicable privacy laws.`,
        },
        {
          id: "cookies",
          title: "12. Cookies, Analytics and Tracking Technologies",
          content: `Our website and apps use cookies, SDKs and similar technologies to keep sessions secure, remember your preferences and understand how the Platform is used so we can improve it.

You can manage cookies in your browser settings, but disabling some cookies may affect how the Platform works.`,
        },
        {
          id: "notifications",
          title: "13. Notifications",
          content: `We send notifications about job opportunities, urgent shifts, interviews, applications, shift updates and account activity. You can manage or turn off notifications at any time in the app or in your device settings.`,
        },
        {
          id: "children",
          title: "14. Children",
          content: `KeRaeva is intended for adults and for healthcare professionals and organizations. We do not knowingly collect personal information from children.`,
        },
        {
          id: "privacy-officer",
          title: "15. Privacy Officer and Contact",
          content: `We have designated a Privacy Officer who is accountable for our compliance with this Privacy Policy and applicable privacy laws.

Send questions, access or correction requests, consent withdrawals or complaints to:
• Email: support@keraeva.com

We will respond within the timelines required by applicable law.`,
        },
        {
          id: "changes",
          title: "16. Changes to This Privacy Policy",
          content: `We may update this Privacy Policy from time to time. We will post material changes on the Platform and update the "Last updated" date above. Continued use of the Platform after changes take effect means you accept the updated Privacy Policy.`,
        },
      ],
    },
  ],
};
