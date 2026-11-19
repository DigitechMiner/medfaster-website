// Website header and footer. These defaults are what the site shows until they
// are edited in the admin panel (Pages → Header & Footer); the admin form is built from them.
// Links can be a page (/about), a full URL, or #get-app, #get-started,
// #request-demo or #start-hiring to open the matching popup or recruiter sign-up.
export const HEADER_FOOTER_DEFAULTS = {
  header: {
    menu: [
      { label: "Home", link: "/", dropdownLinks: [] as { label: string; link: string; description: string }[] },
      {
        label: "Our Platforms",
        link: "",
        dropdownLinks: [
          { label: "Healthcare Organizations", link: "/medical-organizations", description: "Hire, fill urgent shifts and manage your workforce" },
          { label: "Healthcare Professionals", link: "/medical-professionals", description: "Find jobs and shifts, get verified and get paid" },
          { label: "KeRaeva AI", link: "/keraeva-ai", description: "Every AI and smart feature across the platform" },
        ],
      },
      { label: "Why KeRaeva?", link: "/about", dropdownLinks: [] as { label: string; link: string; description: string }[] },
      { label: "Contact Us", link: "/contact-us", dropdownLinks: [] as { label: string; link: string; description: string }[] },
    ],
    secondaryButton: { label: "Get the App", link: "#get-app" },
    primaryButton: { label: "Login as Recruiter", link: "https://recruiter.keraeva.com" },
  },
  footer: {
    newsletter: {
      show: true,
      heading: "Healthcare Hiring Insights & **Job Alerts**",
      body: "Product updates, hiring insights and new opportunities. No spam.",
      emailPlaceholder: "Enter your email address",
    },
    tagline: "The AI-powered healthcare workforce platform connecting organizations and professionals across Canada.",
    appButton: { label: "Get the App", link: "#get-app" },
    columns: [
      {
        title: "Platform",
        links: [
          { label: "Healthcare Organizations", link: "/medical-organizations" },
          { label: "Healthcare Professionals", link: "/medical-professionals" },
          { label: "KeRaeva AI", link: "/keraeva-ai" },
          { label: "Pricing", link: "/subscriptions" },
          { label: "Request a Demo", link: "#request-demo" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About KeRaeva", link: "/about" },
          { label: "Careers", link: "/careers" },
          { label: "Blog", link: "/blog" },
          { label: "Contact Us", link: "/contact-us" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Help & Support", link: "/support" },
          { label: "FAQs", link: "/support#faq" },
          { label: "Privacy Policy", link: "/privacy-policy" },
          { label: "Terms & Conditions", link: "/terms-conditions" },
        ],
      },
    ],
    copyright: "Copyright © {year} KeRaeva, All Rights Reserved. KeRaeva is operated by MedFaster Health Tech Inc.",
    creditPrefix: "Designed & Developed by",
    creditLabel: "Digitech Miner",
    creditUrl: "https://digitechminer.in",
  },
};

export type HeaderFooter = typeof HEADER_FOOTER_DEFAULTS;
