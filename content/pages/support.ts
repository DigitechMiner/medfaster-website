// Support page content. These defaults are what the site shows until the page is
// edited in the admin panel (Pages → Support). The questions themselves are under
// Content → FAQs; the phone number, email and location are in Site Settings.
export const SUPPORT_DEFAULTS = {
  seo: {
    title: "Support | KeRaeva",
    description:
      "Get help with the KeRaeva app or recruiter platform: accounts, verification, jobs, shifts, check-in, payments and AI interviews.",
  },
  pageHeader: {
    title: "Support",
    breadcrumb: "Support",
  },
  intro: {
    heading: "Get **Help** with the App, Shifts & Payments",
    body: "Support is for people already using KeRaeva: professionals in the app and organizations on the recruiter platform. Ask about your account and verification, jobs and shifts, check-in, payments or AI interviews. For sales or partnerships, use the",
    contactLinkLabel: "Contact page",
    locationLabel: "Location",
    phoneLabel: "Phone Number",
    emailLabel: "Email us",
  },
  form: {
    heading: "Send a Support Request",
    body: "Tell us what's happening and include the job or shift it relates to. Our support team will reply by email.",
    issueTypeLabel: "Select Issue Type",
    issueTypePlaceholder: "Select an issue type",
    subjectLabel: "Subject",
    subjectPlaceholder: "e.g. I can't check in to my shift",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    phoneLabel: "Phone Number",
    phonePlaceholder: "(403) 555-0123",
    optionalLabel: "(optional)",
    descriptionLabel: "Description",
    descriptionPlaceholder: "Please describe the issue in detail, including the job or shift it relates to if relevant.",
    submitLabel: "Submit Request",
    sendingLabel: "Sending...",
    securityNote: "Your data is securely handled and protected.",
    successMessage: "Thank you. Your request has been sent to our support team, and we'll reply by email.",
    errorMessages: {
      issueTypeRequired: "Please choose an issue type",
      subjectRequired: "Please add a short subject",
      emailRequired: "Please enter your email",
      emailInvalid: "Please enter a valid email",
      phoneInvalid: "Please enter a valid phone number",
      descriptionTooShort: "Please describe the issue (at least 10 characters)",
    },
  },
  faqs: {
    show: true,
    heading: "Frequently Asked **Questions**",
    body: "Before you reach out, see if we've already answered your question. Our FAQ is fast, clear, and easy to follow.",
  },
};
