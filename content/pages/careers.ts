// Careers page content (the list and each job's page). These defaults are what the
// site shows until the page is edited in the admin panel (Pages → Careers).
// The openings themselves are under Content → Job Openings.
export const CAREERS_DEFAULTS = {
  seo: {
    title: "Careers | KeRaeva",
    description: "Explore careers at KeRaeva and help build the AI-powered healthcare workforce platform for Canada.",
  },
  pageHeader: {
    title: "Careers",
    parentLabel: "About KeRaeva",
    breadcrumb: "Careers",
  },
  noOpenings: {
    heading: "No Open Roles **Right Now**",
    body: "We don't have any openings at the moment, but we're always happy to hear from people who want to improve healthcare staffing. Send us your CV and we'll be in touch when a role fits.",
    linkLabel: "Email support@keraeva.com",
    linkUrl: "mailto:support@keraeva.com?subject=Careers%20at%20KeRaeva",
  },
  jobPage: {
    whyJoinHeading: "Why join",
    whyKeRaevaHeading: "Why KeRaeva",
    documentsHeading: "What you'll need",
    documentsIntro: "Documents to upload in the KeRaeva app:",
    skillsHeading: "Skills",
    howToApplyHeading: "How to apply",
    howToApplyIntro: "Register on the KeRaeva app and complete your pre-verification to get hired faster.",
  },
  careerCta: {
    show: true,
    heading: "Where Your Career Goals\nMeet Real Opportunity",
    body: "Whether you're an ambitious professional seeking your next role or a healthcare institution building your dream team, we connect you with unparalleled opportunities and talent.",
    cta: { label: "Get Started Now", link: "#get-started" },
    image: "/images/team/girl-with-specs.webp",
  },
};
