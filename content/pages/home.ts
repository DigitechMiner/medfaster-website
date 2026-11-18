// Home page content. These defaults are what the site shows until the page is
// edited in the admin panel (Pages → Home); the admin form is built from them.
export const HOME_DEFAULTS = {
  seo: {
    title: "KeRaeva | AI-Powered Healthcare Workforce Platform in Canada",
    description:
      "Hire, verify and match healthcare professionals, fill urgent shifts and manage shifts and payments with KeRaeva, the AI-powered healthcare workforce platform for Canada.",
    shareTitle: "KeRaeva | Healthcare Workforce, Powered by Intelligence",
    shareDescription:
      "AI interviews, smart matching, urgent staffing, shifts and payments for healthcare organizations and professionals across Canada.",
  },
  hero: {
    heading: "Healthcare Workforce, Powered by **Intelligence**",
    body: "KeRaeva connects healthcare organizations and professionals across Canada to hire, verify, match, fill urgent shifts and get paid, all in one AI-powered platform.",
    primaryCta: { label: "Find Opportunities", link: "#get-app" },
    secondaryCta: { label: "Start Hiring", link: "#start-hiring" },
    image: "/images/hero/card-photo.webp",
    imageAlt: "A healthcare professional walking with an older patient in a hospital",
  },
  journey: {
    show: true,
    heading: "A Simpler Path To Success For Everyone",
    body: "From the first profile to the final payment, KeRaeva connects every step of healthcare hiring and staffing for professionals and organizations alike.",
    steps: [
      { title: "Build Your Profile", description: "Professionals upload a resume and credentials. Organizations post jobs and shifts." },
      { title: "Get Verified", description: "Identity, documents and credentials are reviewed before work begins." },
      { title: "Complete an AI Interview", description: "A structured interview produces a scorecard recruiters can rely on." },
      { title: "Smart AI Matching", description: "Our AI finds ideal job and candidate fits based on skills, availability and location." },
      { title: "Hire or Fill Shifts", description: "Apply to roles, respond to job invites, or accept urgent shifts in a tap." },
      { title: "Work Your Shifts", description: "Upcoming shifts, check-in and shift history, all in one place." },
      { title: "Get Paid", description: "Earnings are credited to your wallet once attendance is verified." },
      { title: "Stay in the Loop", description: "Real-time notifications, chat and application status for both sides." },
    ],
    cta: { label: "Get Started", link: "#get-started" },
  },
  urgentStaffing: {
    show: true,
    eyebrow: "Urgent Staffing",
    heading: "When a Shift Can’t Wait, **KeRaeva** Finds Who Can Work",
    body: [
      "When a facility needs cover fast, KeRaeva matches the shift to verified professionals who are available nearby, and they respond from their phone.",
    ],
    steps: [
      { icon: "Siren", title: "Urgent Need", description: "A facility needs cover for a shift that starts soon." },
      { icon: "BrainCircuit", title: "KeRaeva Matching", description: "The shift is matched to professionals by role, availability and location." },
      { icon: "UserCheck", title: "Available Professional", description: "Matched professionals see the details and respond from their phone." },
      { icon: "CalendarCheck", title: "Shift Filled", description: "Once a professional accepts, the facility knows the shift is covered." },
    ],
    primaryCta: { label: "Explore Urgent Staffing", link: "/medical-organizations#urgent-staffing" },
    secondaryCta: { label: "Get the App", link: "#get-app" },
  },
  ai: {
    show: true,
    heading: "**Intelligent AI**, Working for Healthcare Professionals & Organizations",
    body: "AI is built into every step of KeRaeva, from building a profile to interviewing, matching and filling urgent shifts.",
    features: [
      {
        icon: "FileText",
        title: "AI Resume Parsing",
        description: "Professionals upload a resume and KeRaeva structures it into a complete profile, giving organizations consistent candidate information.",
      },
      {
        icon: "Target",
        title: "Smart Matching",
        description: "Matches professionals and roles using profession, skills, experience, location and availability.",
      },
      {
        icon: "Mic",
        title: "AI Interviews",
        description: "Structured AI interviews professionals complete once and reuse, plus job-specific interviews when an organization requests one.",
      },
      {
        icon: "ClipboardList",
        title: "AI Scorecards",
        description: "Every completed interview produces a scorecard with category scores, a summary and a full transcript recruiters can review.",
      },
      {
        icon: "CalendarCheck",
        title: "Availability-Aware Staffing",
        description: "Professionals choose when they're available, so urgent shifts reach people nearby who can actually work.",
      },
      {
        icon: "ShieldCheck",
        title: "Verified Profiles & Opportunities",
        description: "Identity, documents and credentials are reviewed, and verification status is visible before anyone commits.",
      },
    ],
    cta: { label: "Explore KeRaeva AI", link: "/keraeva-ai" },
  },
  trust: {
    show: true,
    eyebrow: "Trust & Verification",
    heading: "Hiring Built on **Verified** Profiles and **Structured** Interviews",
    body: "Professionals upload their credentials and can follow the verification status of each document. They then complete a structured AI interview, and recruiters review the scorecard alongside the profile, so every candidate is assessed the same way.",
    audiences: [
      {
        title: "For Professionals",
        points: [
          "Upload licences and certifications once",
          "See the verification status of each document",
          "Choose which completed interview recruiters see",
        ],
      },
      {
        title: "For Organizations",
        points: [
          "Verification status on every profile",
          "AI interview scores, a summary and the full transcript",
          "Credentials reviewed alongside the scorecard",
        ],
      },
    ],
    image: "/images/ui/verified-card.webp",
    imageAlt: "Sample verified AI interview scorecard on a KeRaeva professional profile",
  },
  ecosystem: {
    show: true,
    heading: "One **Connected Ecosystem**, Two Products",
    body: "Professionals use the KeRaeva app. Organizations use the recruiter platform. Jobs, interviews, shifts and payments move between them in one connected flow.",
    products: [
      {
        icon: "Smartphone",
        title: "KeRaeva App",
        audience: "For healthcare professionals",
        points: [
          "Profile, documents and verification status",
          "AI interview and scorecard",
          "Jobs, job invites and urgent shifts",
          "Shifts with in-app check-in and check-out",
          "Wallet and withdrawals to your bank",
        ],
        cta: { label: "KeRaeva for Professionals", link: "/medical-professionals" },
      },
      {
        icon: "LayoutDashboard",
        title: "KeRaeva Recruiter Platform",
        audience: "For healthcare organizations",
        points: [
          "Post jobs and urgent requirements",
          "Review verified profiles and AI interview scorecards",
          "Invite professionals and manage applications",
          "Follow assigned shifts and attendance",
          "See payment status for completed shifts",
        ],
        cta: { label: "KeRaeva for Organizations", link: "/medical-organizations" },
      },
    ],
    downloadHeading: "**Download** the App",
    downloadBody: "Scan to get KeRaeva on Android. iOS is coming soon.",
  },
  shiftToPayment: {
    show: true,
    heading: "From Opportunity to Completed Work",
    body: "KeRaeva doesn’t stop at the hire. Accepted shifts, check-ins and earnings stay connected in one flow.",
    steps: [
      "Opportunity accepted and shift scheduled",
      "Check in and out from the app",
      "Shift completed",
      "Earnings credited to the wallet",
    ],
    cta: { label: "Request a Demo", link: "#request-demo" },
    sampleAmount: "$480",
    sampleShift: "RN Night Shift",
    sampleStatus: "Paid",
  },
  testimonials: {
    show: true,
    heading: "**Real Results,** Real Partnerships",
    body: "Hear from both the professionals finding their dream roles and the hospitals building their dream teams.",
  },
  closingCtas: {
    show: true,
    professionalsHeading: "Find Your Next Healthcare Role",
    professionalsBody: "Create your free profile in the KeRaeva app to see jobs and urgent shifts matched to your role and availability.",
    professionalsCta: { label: "Create Free Profile", link: "#get-app" },
    organizationsHeading: "Start Hiring Smarter Today",
    organizationsBody: "Reach verified healthcare professionals, fill urgent shifts and review AI-assessed candidates in one platform.",
    organizationsPrimaryCta: { label: "Post a Job", link: "#start-hiring" },
    organizationsSecondaryCta: { label: "Schedule Demo", link: "#request-demo" },
  },
};
