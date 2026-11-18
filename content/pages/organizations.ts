// Healthcare Organizations page content. These defaults are what the site shows
// until the page is edited in the admin panel (Pages → Healthcare Organizations).
import { dashboardFeatures, hiringSteps } from "../../utils/constant/landingPage";
import { URGENT_STAFFING_STEPS, WORKFORCE_STEPS } from "../../utils/constant";

const HIRING_ICONS = ["Wand2", "Sparkles", "Mic", "ClipboardList", "ShieldCheck"];
const URGENT_ICONS = ["Siren", "BrainCircuit", "BellRing", "Inbox", "CalendarCheck"];

export const ORGANIZATIONS_DEFAULTS = {
  seo: {
    title: "Healthcare Organizations | AI Hiring & Urgent Staffing | KeRaeva",
    description:
      "Hire verified healthcare professionals, review AI interview scorecards, fill urgent shifts and track shifts to payment with KeRaeva, built for Canadian hospitals, clinics and care organizations.",
    shareTitle: "KeRaeva for Healthcare Organizations",
    shareDescription: "AI-powered hiring, urgent staffing and shift management for Canadian healthcare organizations.",
  },
  hero: {
    heading: "Build Your Healthcare Workforce — **Faster & Smarter**",
    body: "AI-powered hiring, urgent staffing and shift management for Canadian hospitals, clinics and care organizations. Find pre-screened, credentialed professionals, review AI interview scorecards and fill shifts from one platform.",
    primaryCta: { label: "Request Demo", link: "#request-demo" },
    secondaryCta: { label: "Post a Job", link: "#start-hiring" },
    image: "/img/dashboard/dashboard-hero.webp",
    imageAlt: "KeRaeva recruiter dashboard showing open jobs and a candidate pipeline",
  },
  hiring: {
    show: true,
    heading: "Smarter, Faster, and More Reliable Hiring",
    body: "Our AI-powered platform automates screening and matching, connecting you with top-tier talent in record time",
    image: "/img/hero/doctor-with-ipad.webp",
    imageAlt: "A healthcare manager reviewing a staffing dashboard on a tablet",
    steps: hiringSteps.map((step, index) => ({ icon: HIRING_ICONS[index] ?? "ShieldCheck", title: step.title, description: step.description })),
    cta: { label: "Post a job", link: "#start-hiring" },
  },
  urgentStaffing: {
    show: true,
    eyebrow: "Urgent Staffing",
    heading: "Cover Last-Minute Gaps with **Urgent Staffing**",
    body: [
      "Create an urgent requirement and KeRaeva notifies professionals whose role, qualifications and availability fit the shift. You follow responses as they arrive and confirm who’s covering it.",
      "Because professionals set their own availability, the people you reach are ready to work. How quickly a shift fills depends on who is available nearby.",
    ],
    steps: URGENT_STAFFING_STEPS.organizations.map((step, index) => ({ icon: URGENT_ICONS[index] ?? "CalendarCheck", ...step })),
    primaryCta: { label: "Start Hiring", link: "#start-hiring" },
    secondaryCta: { label: "Request Demo", link: "#request-demo" },
  },
  dashboard: {
    show: true,
    heading: "Everything You Need, in **One Dashboard**",
    body: "Post jobs, review AI-assessed candidates, schedule interviews and track hiring progress from one recruiter dashboard.",
    features: dashboardFeatures.map((feature) => ({ screenshot: feature.screen, title: feature.title, description: feature.description })),
  },
  capabilities: {
    show: true,
    heading: "Built for **Healthcare Staffing**",
    body: "Beyond hiring, KeRaeva gives your team the tools to staff shifts and keep your workforce connected.",
    features: [
      { icon: "Send", title: "Job Invites", description: "Invite professionals directly to apply for your open roles." },
      { icon: "Users", title: "In-House Staff Pool", description: "Invite your existing staff to your organization's in-house pool on KeRaeva." },
      { icon: "Repeat", title: "Rotation Schedules", description: "Post roles with rotation schedules so professionals see the pattern before they apply." },
      { icon: "MessageSquare", title: "Direct Messaging", description: "Chat with candidates and professionals directly from the platform." },
      { icon: "ClipboardCheck", title: "Shift Tracking", description: "Follow shifts from scheduled to completed, with check-in and attendance built in." },
      { icon: "FileCheck2", title: "Credentials on Every Profile", description: "Review uploaded licences, certifications and documents alongside each candidate." },
    ],
  },
  confidence: {
    show: true,
    heading: "Hire with **Confidence**",
    body: "Every candidate profile brings together uploaded documents, verification status and AI interview results, so you can decide with the full picture.",
    image: "/img/features/confidence.webp",
    imageAlt: "Candidate profile with uploaded documents, AI interview scores and strengths",
  },
  shiftToPayment: {
    show: true,
    heading: "From Shift to Payment, Seamlessly",
    body: "Assigned shifts, attendance and payment status stay connected in the recruiter platform, so your team knows what was worked and what’s been paid.",
    steps: [...WORKFORCE_STEPS.organizations],
    cta: { label: "Request a Demo", link: "#request-demo" },
    sampleAmount: "$480",
    sampleShift: "RN Night Shift",
    sampleStatus: "Paid",
  },
  dataDriven: {
    show: true,
    heading: "Make **Data-Driven** Hiring Decisions",
    body: "See active jobs, candidates, AI matches, interviews and hires at a glance, so you always know where hiring stands and where to focus next.",
    cta: { label: "Request Demo", link: "#request-demo" },
  },
  testimonials: {
    show: true,
    heading: "What Healthcare Teams Say About **KeRaeva**",
    body: "Feedback from healthcare teams using KeRaeva to hire verified professionals, simplify compliance checks and fill shifts faster.",
  },
  startHiring: {
    show: true,
    heading: "Start Smart Hiring Today",
    body: "Hire verified healthcare professionals and fill urgent shifts, all in one AI-powered platform.",
    primaryCta: { label: "Post a Job", link: "#start-hiring" },
    secondaryCta: { label: "Schedule Demo", link: "#request-demo" },
    image: "/img/people/nurse-02.webp",
    imageAlt: "Healthcare professional",
  },
};
