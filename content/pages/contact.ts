// Contact Us page content. These defaults are what the site shows until the page
// is edited in the admin panel (Pages → Contact Us). The phone number, location
// and social links come from Settings → Site Settings.
export const CONTACT_DEFAULTS = {
  seo: {
    title: "Contact Us | KeRaeva",
    description: "Talk to KeRaeva about hiring healthcare professionals, partnerships, media or general questions.",
  },
  pageHeader: {
    title: "Contact Us",
    breadcrumb: "Contact Us",
  },
  intro: {
    heading: "Got a Question?\nLet's **Talk**",
    body: "Talk to us about hiring with KeRaeva, partnerships, media or any general question, and we'll get back to you by email.",
    supportNote: "Already using the KeRaeva app or recruiter platform?",
    supportLinkLabel: "Get help on the Support page",
    locationLabel: "Location",
    phoneLabel: "Phone Number",
    followLabel: "Follow Us",
  },
  // Labels, hint text, buttons and messages in the contact form
  form: {
    nameLabel: "Name",
    namePlaceholder: "Your full name",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    phoneLabel: "Phone Number",
    phonePlaceholder: "(403) 555-0123",
    optionalLabel: "(optional)",
    topicLabel: "What is your enquiry about?",
    topicPlaceholder: "Select a topic",
    messageLabel: "Message",
    messagePlaceholder: "Tell us how we can help, e.g. hiring for your organization, a partnership or a general question.",
    submitLabel: "Send Your Message",
    sendingLabel: "Sending...",
    successMessage: "Thank you. Your message has been sent and our team will get back to you.",
    errorMessages: {
      nameRequired: "Please enter your name",
      emailRequired: "Please enter your email",
      emailInvalid: "Please enter a valid email",
      phoneInvalid: "Please enter a valid phone number",
      messageRequired: "Please enter a message",
      messageTooShort: "Message must be at least 10 characters",
    },
  },
};

export type ContactContent = typeof CONTACT_DEFAULTS;
