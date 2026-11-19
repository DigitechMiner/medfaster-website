// Coming Soon page content (Pages → Coming Soon)
export const COMING_SOON_DEFAULTS = {
  seo: {
    title: "Coming Soon | KeRaeva",
    description: "Something exciting is coming to KeRaeva. Stay tuned for updates!",
  },
  content: {
    image: "/images/features/coming-soon.svg",
    imageAlt: "Coming Soon",
    heading: "Stay Tuned",
    body: "Get the latest updates on the KeRaeva platform, exclusive invites, and early access for healthcare professionals and recruiters in Canada.",
    emailPlaceholder: "Enter your email address",
    buttonLabel: "Notify Me",
    successMessage: "Thanks! We'll let you know when it's ready.",
    note: "Sign up and we'll email you when it launches.",
  },
};

export type ComingSoonContent = typeof COMING_SOON_DEFAULTS;
