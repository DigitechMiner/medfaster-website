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
  // Hint text shown inside the empty form fields
  form: {
    namePlaceholder: "Your full name",
    emailPlaceholder: "you@example.com",
    phonePlaceholder: "(403) 555-0123",
    topicPlaceholder: "Select a topic",
    messagePlaceholder: "Tell us how we can help, e.g. hiring for your organization, a partnership or a general question.",
  },
};

export type ContactContent = typeof CONTACT_DEFAULTS;
