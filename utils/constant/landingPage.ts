export type CompanyLogo = { src: string; alt: string };
export const companyLogos: CompanyLogo[] = [
  { src: "/img/company/canadian-health-logo.png", alt: "Canadian Health" },
  { src: "/img/company/canadian-specialist-hospital-logo.png", alt: "Canadian Specialist Hospital" },
  { src: "/img/company/medical-canada-logo.png", alt: "Medical Canada" },
  { src: "/img/company/canadian-red-cross-logo.png", alt: "Canadian Red Cross" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
};
export const testimonials: Testimonial[] = [
  {
    quote:
      "The promise of 100% verified healthcare staff is real. We've had zero compliance issues since switching over, which gives our entire team peace of mind. Totally worth it.",
    name: "Maria R.",
    role: "Compliance Officer",
    avatar: "/img/testimonials/michael.png",
    rating: 3,
  },
  {
    quote:
      "KeRaeva cut our hiring time from 6 weeks to just 10 days. The AI matching is incredibly accurate and saves us countless hours of screening.",
    name: "Dr. James Chen",
    role: "Chief Medical Officer",
    avatar: "/img/testimonials/sarah.png",
    rating: 5,
  },
  {
    quote:
      "Finally, a platform that understands healthcare recruitment. The credential verification alone is worth the investment.",
    name: "Sarah Mitchell",
    role: "HR Director",
    avatar: "/img/testimonials/sarah.png",
    rating: 4,
  },
];

export type DashboardFeature = { screen: string; title: string; description: string };
export const dashboardFeatures: DashboardFeature[] = [
  {
    screen: "/img/dashboard/feature-candidate-pipeline.svg",
    title: "Candidate Pipeline",
    description: "Move candidates from Applied to Shortlisted, Interviewed and Hired, with each person's AI score on their card.",
  },
  {
    screen: "/img/dashboard/feature-ai-ranking.svg",
    title: "AI Interview Scorecards",
    description: "Review each candidate's interview rounds, category scores and strengths before you decide.",
  },
  {
    screen: "/img/dashboard/feature-interview-scheduling.svg",
    title: "Calendar & Scheduling",
    description: "See interviews and scheduled professionals across the week in one calendar.",
  },
  {
    screen: "/img/dashboard/feature-analytics-dashboard.svg",
    title: "Hiring Dashboard",
    description: "Track active jobs, candidates, AI matches, interviews and hires at a glance.",
  },
];

export type HiringStep = { title: string; description: string };
export const hiringSteps: HiringStep[] = [
  {
    title: "Automated Screening",
    description:
      "AI parses resumes into structured profiles, with licences and documents collected upfront, so you spend less time on manual review.",
  },
  {
    title: "Smart Matching",
    description:
      "Get a ranked shortlist of top-fit candidates, matched by skills, experience, location and availability.",
  },
  {
    title: "AI-Powered Interviews",
    description:
      "Candidates complete structured AI interviews, assessed consistently on communication, confidence and accuracy of answers.",
  },
  {
    title: "AI Scorecards",
    description:
      "Review category scores, strengths and interview results for every candidate in one scorecard.",
  },
  {
    title: "Built-in Trust Layer",
    description:
      "Every profile shows verification status, uploaded credentials and AI interview results before you hire.",
  },
];

export const orgWorkforceSteps: string[] = [
  "Post a job, shift or urgent requirement",
  "Professional accepts and is scheduled",
  "Check-in and attendance tracked in the app",
  "Shift completed and verified",
  "Professional paid through KeRaeva",
];
