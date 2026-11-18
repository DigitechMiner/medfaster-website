// KeRaeva AI page content. These defaults are what the site shows until the page
// is edited in the admin panel (Pages → KeRaeva AI); the admin form is built from them.
import { HOME_DEFAULTS } from "./home";

export const KERAEVA_AI_DEFAULTS = {
  seo: {
    title: "KeRaeva AI | AI Interviews, Matching & Smart Features for Healthcare Hiring",
    description:
      "See every AI and smart feature in KeRaeva: AI resume parsing, AI voice interviews and scorecards, AI-matched candidates, urgent shift matching, interview integrity checks and smart phone features.",
    shareTitle: "KeRaeva AI: Intelligence Built Into Every Step",
    shareDescription: "AI resume parsing, interviews, scorecards, matching, urgent dispatch and smart features for Canadian healthcare hiring.",
  },
  hero: {
    heading: "Intelligence Built Into **Every Step**",
    body: "KeRaeva AI isn't a chatbot bolted on. It's built into how profiles are created, how professionals are interviewed and assessed, how roles and urgent shifts are matched, and how hiring teams make decisions.",
    primaryCta: { label: "Get the App", link: "#get-app" },
    secondaryCta: { label: "Request Demo", link: "#request-demo" },
    image: "/img/features/confidence.webp",
    imageAlt: "An AI-assessed candidate profile with uploaded documents, interview scores and strengths",
  },
  journey: {
    show: true,
    heading: "Where AI Works in KeRaeva",
    body: "From the first resume upload to the shift on your calendar, AI helps at every stage of the healthcare workforce lifecycle.",
    steps: [
      { title: "Profile", description: "AI reads your resume and structures it into a complete profile." },
      { title: "Interview", description: "A structured AI voice interview, with identity and liveness checks." },
      { title: "Scorecard", description: "Scores, strengths, areas to improve, risk flags and a transcript." },
      { title: "Match", description: "Professionals and roles matched on skills, experience and location." },
      { title: "Urgent Dispatch", description: "Urgent shifts reach eligible professionals who are available." },
      { title: "Hire", description: "Recruiters see AI scores on every candidate in their pipeline." },
      { title: "Work", description: "Smart widgets and live status keep your next shift in view." },
      { title: "Insights", description: "Dashboards show AI matches, interviews and hiring progress." },
    ],
  },
  forProfessionals: {
    show: true,
    heading: "AI for Healthcare **Professionals**",
    body: "Build a stronger profile, prove your skills once and get matched with the jobs and urgent shifts that fit your life.",
    features: [
      { icon: "FileText", title: "AI Resume Parsing", description: "Upload your resume and KeRaeva extracts your details into a structured professional profile." },
      { icon: "Mic", title: "AI Voice Interview", description: "Complete a structured, conversational AI interview from your phone, with a mic check before you start." },
      { icon: "Repeat", title: "Reusable Profile Interview", description: "Interview once and choose which completed interview recruiters see on your profile." },
      { icon: "ClipboardList", title: "Job-Specific Interviews", description: "When an organization requests one, complete an AI interview tailored to their role." },
      { icon: "Gauge", title: "Your Personal Scorecard", description: "See your overall score, strengths and areas to improve, so you know how to stand out." },
      { icon: "Target", title: "Recommended Jobs", description: "A personalized list of roles matched to your skills, experience and preferences." },
      { icon: "Siren", title: "Urgent Shift Matching", description: "Set your availability and receive urgent shifts nearby that match your role." },
      { icon: "MapPin", title: "Location-Aware Discovery", description: "Find opportunities around you on a map and within the distance you choose." },
    ],
  },
  forOrganizations: {
    show: true,
    heading: "AI for Healthcare **Organizations**",
    body: "Review consistent, AI-assessed candidates, spot risks early and fill urgent shifts with professionals who can actually work.",
    features: [
      { icon: "Sparkles", title: "AI-Matched Candidates", description: "See new AI-matched candidates for your roles, ranked by overall score." },
      { icon: "Gauge", title: "AI Score on Every Candidate", description: "Each candidate card in your pipeline shows their AI interview score at a glance." },
      { icon: "ListChecks", title: "Structured Interview Rounds", description: "Review conversational and behavioural rounds, communication analysis and accuracy of answers." },
      { icon: "ThumbsUp", title: "Strengths & Areas to Improve", description: "AI-written summaries highlight each candidate's strengths and where they can grow." },
      { icon: "ShieldAlert", title: "Risk Flags", description: "Flags for communication concerns, critical safety violations and unsafe decisions." },
      { icon: "ScanFace", title: "Interview Integrity Checks", description: "Identity matching, liveness checks and multiple-face detection during AI interviews." },
      { icon: "BellRing", title: "Urgent Dispatch", description: "Send urgent shifts to eligible, available professionals and see who accepts." },
      { icon: "LayoutDashboard", title: "AI Hiring Insights", description: "Track active jobs, AI matches, interviews scheduled and hires on your dashboard." },
    ],
  },
  scorecard: {
    show: true,
    eyebrow: "AI Interview Scorecard",
    heading: "Everything a Hiring Team Needs, **In One Scorecard**",
    body: "Every completed AI interview produces a structured scorecard, so candidates are compared on the same criteria and nothing important is missed.",
    points: [
      "Overall score and recommendation",
      "Interview summary written by AI",
      "Category scores with detailed sub-metrics",
      "Strengths and areas to improve",
      "Risk flags for safety and communication",
      "Full interview transcript",
    ],
    image: "/img/dashboard/feature-ai-ranking.webp",
    imageAlt: "KeRaeva AI interview scorecard with conversational and behavioural round scores",
  },
  integrity: {
    show: true,
    heading: "Interviews You Can **Trust**",
    body: "AI interviews include integrity checks, so organizations can rely on the results and professionals know the process is fair for everyone.",
    checks: [
      { icon: "ScanFace", title: "Identity Match", description: "The person interviewing is matched to the professional's profile." },
      { icon: "Activity", title: "Liveness Check", description: "Confirms a real, live person is taking the interview." },
      { icon: "Users", title: "Multiple-Face Detection", description: "Flags when more than one person appears during the interview." },
      { icon: "ShieldAlert", title: "Proctoring Rules", description: "Interviews that break proctoring rules are stopped and recorded." },
    ],
  },
  smartFeatures: {
    show: true,
    heading: "Smart Features **on Your Phone**",
    body: "The KeRaeva app works with your phone's built-in assistant and system features, shown in Settings as “Siri & Apple Intelligence” on iOS and “AI Assistant & Smart Features” on Android.",
    features: [
      { icon: "Sparkles", title: "Siri, Spotlight & App Actions", description: "Ask Siri or use Android App Actions to open urgent jobs, your work, saved jobs or start an AI interview.", status: "" },
      { icon: "Smartphone", title: "App Shortcuts", description: "Long-press the app icon for quick shortcuts to the screens you use most.", status: "" },
      { icon: "LayoutGrid", title: "Home & Lock Screen Widgets", description: "Nearby jobs, today's shift, your next interview and availability, without opening the app.", status: "Rolling out" },
      { icon: "Activity", title: "Live Shift & Interview Status", description: "Live Activities, Dynamic Island and Android live updates for active shifts and interview countdowns.", status: "Rolling out" },
      { icon: "ToggleRight", title: "Quick Controls", description: "Control Center and Quick Settings tiles for Urgent Jobs, My Work and availability setup.", status: "Rolling out" },
      { icon: "BellRing", title: "Actionable Notifications", description: "Rich notifications that take you straight to the shift, interview or job they're about.", status: "" },
    ],
    footnote: "Device features depend on your phone and operating system version.",
  },
  principles: {
    show: true,
    heading: "How We **Use AI**",
    body: "AI should make healthcare hiring faster and fairer, never take people out of the decision.",
    items: [
      { icon: "UserCheck", title: "AI Assists, People Decide", description: "AI organizes and scores information. Hiring decisions are always made by the organization's team." },
      { icon: "Eye", title: "Transparent to Professionals", description: "Professionals can see their own scorecard, including strengths and areas to improve." },
      { icon: "BadgeCheck", title: "Professionals Stay in Control", description: "Choose which completed interview recruiters see, and when you're available for urgent shifts." },
      { icon: "Scale", title: "Consistent for Every Candidate", description: "Structured interviews assess every candidate on the same criteria for the role." },
    ],
  },
  // The two orange call-to-action cards at the bottom (same design as the home page)
  closingCtas: { ...HOME_DEFAULTS.closingCtas },
};

export type KeRaevaAiContent = typeof KERAEVA_AI_DEFAULTS;
