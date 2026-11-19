// Healthcare Professionals page content. These defaults are what the site shows
// until the page is edited in the admin panel (Pages → Healthcare Professionals).
import { AI_FEATURES, APP_FEATURES, GET_HIRED_STEPS } from "../../lib/constants";
import { URGENT_STAFFING_STEPS, WORKFORCE_STEPS } from "../../utils/constant";

const URGENT_ICONS = ["CalendarClock", "BellRing", "ClipboardList", "CircleCheck", "Briefcase"];

export const PROFESSIONALS_DEFAULTS = {
  seo: {
    title: "Healthcare Professionals | Jobs, Urgent Shifts & AI Interviews | KeRaeva",
    description:
      "Find healthcare jobs and urgent shifts near you, complete a reusable AI interview, track every application and get paid through the KeRaeva app.",
    shareTitle: "KeRaeva for Healthcare Professionals",
    shareDescription: "Jobs, urgent shifts, AI interviews and earnings in one app for Canadian healthcare professionals.",
  },
  hero: {
    heading: "Find Healthcare Jobs Near You **Instantly**",
    keywordPlaceholder: "Job Title/Skill/Keyword",
    postalCodePlaceholder: "Postal Code",
    searchHint: "Search, apply and accept shifts in the KeRaeva app.",
    body: "The AI-powered platform connecting you directly with verified healthcare service providers, such as hospitals, nursing home facilities, medical clinics, dental clinics, physiotherapy clinics and more across Canada. Discover full-time, part-time, and on-demand roles all on your terms.",
    cta: { label: "Browse Nearby Jobs", link: "#get-app" },
    appImage: "/images/hero/mobile-address.webp",
    appImageAlt: "KeRaeva app interface",
    sideImage: "/images/hero/doctor.webp",
    flexibilityHeading: "Total Flexibility & Control",
    flexibilityBody:
      "Take charge of your career. Choose full-time, part-time or on-demand shifts that fit your schedule, and get instant alerts for jobs you actually want.",
    opportunitiesHeading: "Direct & Verified Opportunities",
    opportunitiesBody:
      "Connect directly with hospitals, care facilities and clinics. Apply in a tap, chat with hiring teams and track every application in the app.",
  },
  getHired: {
    show: true,
    heading: "Get Hired in 3 Simple Steps",
    body: "Our AI-powered process makes finding your next role faster and more direct than ever before.",
    image: "/images/hero/get-hired.webp",
    imageAlt: "Healthcare professional assisting patient",
    steps: GET_HIRED_STEPS.map((step, index) => ({
      icon: ["UserPlus", "ShieldCheck", "Briefcase"][index] ?? "CheckCircle2",
      title: step.title,
      description: step.description,
    })),
    cta: { label: "Get Started", link: "#get-app" },
  },
  urgentStaffing: {
    show: true,
    eyebrow: "Urgent Shifts",
    heading: "Urgent Shifts, **On Your Terms**",
    body: [
      "Turn on your availability and KeRaeva can send you urgent shifts nearby that match your role. You see the location, timing and pay before you decide.",
      "Accept the shifts that work for you and decline the ones that don’t. Accepted shifts go straight to your upcoming work.",
    ],
    steps: URGENT_STAFFING_STEPS.professionals.map((step, index) => ({ icon: URGENT_ICONS[index] ?? "CalendarCheck", ...step })),
    primaryCta: { label: "Get the App", link: "#get-app" },
    secondaryCta: { label: "", link: "" },
  },
  ai: {
    show: true,
    heading: "How **AI Helps You** Get the Right Job Faster",
    body: "Our intelligent platform works behind the scenes to help you get the right job, faster. Here's how:",
    features: AI_FEATURES.map((feature, index) => ({
      icon: ["FileText", "Target", "CalendarCheck", "MessageSquareText", "ShieldCheck"][index] ?? "CheckCircle2",
      title: feature.title,
      description: feature.description,
    })),
  },
  verified: {
    show: true,
    heading: "Earn a **Verified** Score.\nGet Hired Faster.",
    body: "Once you complete onboarding and pre-screening, you'll receive an AI-generated scorecard. A verified profile with a completed AI interview helps you stand out to recruiters.",
    image: "/images/ui/verified-card.webp",
    imageAlt: "Sample verified AI interview scorecard on a KeRaeva professional profile",
  },
  appFeatures: {
    show: true,
    heading: "Your **All-in-One** Healthcare career App",
    body: "From building a verified profile to managing your payments, everything you need is right here",
    features: APP_FEATURES.map((feature) => ({ screenshot: feature.screen, title: feature.title, description: feature.description })),
  },
  applicationStatus: {
    show: true,
    heading: "Know Where You **Stand**",
    body: "No more wondering. Every application shows its current status in the app, and you get notified as it moves forward.",
    statuses: [
      { icon: "Send", title: "Applied", description: "Your application is with the organization." },
      { icon: "Mail", title: "Invited", description: "An organization invited you to apply for a role." },
      { icon: "Mic", title: "Interview", description: "You're in the interview stage, including any AI interview the organization requests." },
      { icon: "CircleCheck", title: "Accepted", description: "You've been accepted, and your shifts appear in your upcoming work." },
      { icon: "CircleSlash", title: "Not Selected / Withdrawn", description: "The role went another way or you withdrew. Either way, you'll know." },
    ],
  },
  shiftToPayment: {
    show: true,
    heading: "From Accepted Shift to Your Wallet",
    body: "Your shifts, check-ins and earnings live in one place in the app, so you always know what you’ve worked and what you’ve earned.",
    steps: [...WORKFORCE_STEPS.professionals],
    cta: { label: "Get the App", link: "#get-app" },
    sampleAmount: "$480",
    sampleShift: "RN Night Shift",
    sampleStatus: "Paid",
  },
  moreInTheApp: {
    show: true,
    heading: "More Ways KeRaeva **Works for You**",
    body: "Everything you need to manage your healthcare career, from the first application to your next shift.",
    features: [
      { icon: "Bookmark", title: "Saved Jobs", description: "Save roles you like and come back to them when you're ready to apply." },
      { icon: "Send", title: "Job Invites", description: "Organizations can invite you directly to apply for their open roles." },
      { icon: "Building2", title: "Hiring Organizations", description: "Browse the organizations hiring on KeRaeva and see their open roles." },
      { icon: "Users", title: "In-House Requests", description: "Accept an organization's request to join its in-house staff pool." },
      { icon: "MessageSquare", title: "Chat with Hiring Teams", description: "Message recruiters directly in the app about roles and shifts." },
      { icon: "Gift", title: "Referral Rewards", description: "Invite other professionals with your code and earn rewards in your wallet." },
      { icon: "CalendarCheck", title: "Shift Check-In", description: "Check in and out of shifts from the app so your attendance is recorded." },
      { icon: "Bell", title: "Instant Notifications", description: "Get alerts for urgent shifts, interview requests and application updates." },
    ],
  },
  testimonials: {
    show: true,
    heading: "What Our Professionals Are Saying About\n**KeRaeva**",
    body: "Real experiences from nurses, specialists and therapists using KeRaeva to find roles and shifts that fit their lives.",
  },
  nextCareer: {
    show: true,
    heading: "Your Next Career Move Starts Here.",
    body: "Join now to get access to verified listings, instant matches, and a network that's invested in your success",
    cta: { label: "Download app", link: "#get-app" },
    image: "/images/hero/nurse.webp",
    imageAlt: "Healthcare professional",
  },
  appDownload: {
    show: true,
    heading: "Your Career, Your Control **On the Go.**",
    body: "Get instant job alerts, apply with a single tap, and manage your entire job search — anytime, anywhere.",
    screenshot: "/images/ui/mobile-screen.webp",
    screenshotAlt: "Mobile app showing job search interface",
  },
};
