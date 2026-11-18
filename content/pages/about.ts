// About page content. These defaults are what the site shows until the page is
// edited in the admin panel (Pages → About); the admin form is built from them.
// The team preview comes from Content → Team (members marked "Show on About").
export const ABOUT_DEFAULTS = {
  seo: {
    title: "About KeRaeva | AI-Powered Healthcare Workforce Platform",
    description:
      "Learn about KeRaeva's mission to make healthcare staffing in Canada faster and more reliable with AI-powered matching and human-centred care.",
  },
  pageHeader: {
    title: "About KeRaeva",
    breadcrumb: "About Us",
  },
  hero: {
    image: "/images/hero/hero-image-2.webp",
    imageAlt: "",
    cardHeading: "The Future of Healthcare Staffing is Here.",
    cardBody:
      "Welcome to KeRaeva, an AI-powered platform built in Canada to connect hospitals, healthcare facilities and clinics with verified, hire-ready healthcare professionals. We're rebuilding the foundation of healthcare staffing—making it faster, smarter, and more reliable.",
  },
  story: {
    heading: "Where **AI-Powered** Hiring Meets Human-Centric Care.",
    body: "KeRaeva was founded by healthcare and tech veterans to fix staffing friction. Our platform bridges the gap between healthcare organizations needing staff and professionals seeking good-fit jobs by automating verification, matching, and scheduling.",
    mainStat: {
      icon: "Users",
      value: "1 Platform",
      label: "For Hiring & Staffing",
      description: "Hiring, AI interviews, urgent staffing, shifts and payments for organizations and professionals.",
    },
    sideStats: [
      { value: "AI", label: "Interviews & Scorecards" },
      { value: "Canada", label: "Built for Canadian Healthcare" },
    ],
  },
  journey: {
    show: true,
    heading: "Our **Journey**",
    milestones: [
      {
        year: "2021",
        title: "The Question",
        description:
          "KeRaeva began with a simple question: 'Why should healthcare still struggle with time?' Founded by healthcare providers, we saw how traditional staffing delayed care.",
      },
      { year: "2022", title: "The Concept", description: "What started as a concept to fill last-minute healthcare facility shifts and test our AI models." },
      {
        year: "2024",
        title: "The Ecosystem",
        description: "Evolved into a full-scale digital ecosystem that brings together AI recruitment, real-time workforce matching, shifts and payments.",
      },
      { year: "Today", title: "The Principle", description: "From prototype to a growing platform, our work is built on one principle: speed matters in healthcare." },
      {
        year: "2026",
        title: "The Question",
        description:
          "KeRaeva began with a simple question: 'Why should healthcare still struggle with time?' Founded by doctors and technologists, we saw how traditional staffing delayed care.",
      },
      { year: "2027", title: "The Concept", description: "What started as a concept to fill last-minute hospital shifts and test our AI models." },
      {
        year: "2028",
        title: "The Ecosystem",
        description: "Evolved into a full-scale digital ecosystem that brings together AI recruitment, real-time workforce matching, shifts and payments.",
      },
    ],
  },
  purpose: {
    show: true,
    heading: "Driving Our **Purpose:** The **Mission** at Our Core",
    body: "To make healthcare staffing faster and more reliable through intelligent, real-time matching, connecting healthcare organizations and professionals on one transparent, AI-driven platform.",
    cards: [
      {
        icon: "Stethoscope",
        title: "Our Mission",
        description: "We aim to reduce staffing shortages and help healthcare organizations and professionals work together faster and more reliably.",
      },
      {
        icon: "Globe",
        title: "Our Vision",
        description:
          "To become the world's most trusted digital healthcare ecosystem—a future where no patient waits, no hospital runs short-staffed, and every medical professional works at their full potential.",
      },
    ],
    cta: { label: "Learn More", link: "/medical-organizations" },
  },
  whyKeRaeva: {
    show: true,
    heading: "Why **KeRaeva?**",
    points: [
      {
        title: "AI Matching",
        description: "Our platform intelligently connects hospitals with the right, available professionals, moving beyond keywords to find the perfect fit.",
      },
      {
        title: "Credential Verification",
        description: "Professionals upload licences and credentials, which are reviewed so organizations can see verification status before they hire.",
      },
      { title: "Shift Management", description: "Manage open shifts, urgent requirements and scheduled professionals in one platform." },
      {
        title: "Built for Healthcare",
        description: "We connect healthcare organizations and professionals so staffing gaps are filled faster and care isn't delayed.",
      },
    ],
  },
  team: {
    show: true,
    heading: "Meet our Team",
    body: "Our philosophy is simple—hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.",
  },
  closingCta: {
    show: true,
    heading: "Find Your Next Hire. Or Your Next Job.",
    body: "Join KeRaeva, the AI-powered healthcare workforce platform built for Canada. Get started in minutes.",
    cta: { label: "Get Started Now", link: "#get-started" },
  },
};

export type AboutContent = typeof ABOUT_DEFAULTS;
