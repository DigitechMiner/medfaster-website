import { CalendarCheck, Briefcase, FileText, MessageSquareText, ShieldCheck, Target, UserPlus, type LucideIcon } from "lucide-react";

// Home page constants

export interface GetHiredStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface AIFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface AppFeature {
  screen: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  review: string;
}

export const GET_HIRED_STEPS: GetHiredStep[] = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description:
      "Upload your resume and certificates, and our AI helps fill in your profile details.",
  },
  {
    icon: ShieldCheck,
    title: "Verify & Pre-Screen",
    description:
      "Get your credentials verified and complete a short AI interview to showcase your skills to top employers.",
  },
  {
    icon: Briefcase,
    title: "Start Working",
    description:
      "Apply for nearby shifts or full-time roles, accept urgent shifts and get paid through the platform.",
  },
];

export const AI_FEATURES: AIFeature[] = [
  {
    icon: FileText,
    title: "AI Resume Parsing",
    description: "Build your professional profile faster. Upload your resume and our AI structures it into your profile."
  },
  {
    icon: Target,
    title: "Smart Job Matching",
    description: "Stop scrolling through irrelevant listings. Get matched with roles that fit your specific skills and schedule."
  },
  {
    icon: CalendarCheck,
    title: "Availability-Aware Matching",
    description: "Set when you're available and get matched with jobs and urgent shifts that fit your schedule."
  },
  {
    icon: MessageSquareText,
    title: "AI Interview Scorecard",
    description: "After your AI interview, see your scorecard and strengths, and choose which interview recruiters see."
  },
  {
    icon: ShieldCheck,
    title: "Verified Opportunities",
    description: "Hiring organizations are reviewed on KeRaeva, so you can apply with confidence."
  }
];

export const APP_FEATURES: AppFeature[] = [
  {
    screen: "/images/features/resume-upload.webp",
    title: "Resume & Certificate Upload",
    description: "Keep your professional documents in one place to build a complete, standout profile."
  },
  {
    screen: "/images/features/document-verification.webp",
    title: "Document Verification",
    description: "Upload your licences and certifications and track their verification status. Verified profiles stand out to employers."
  },
  {
    screen: "/images/features/map-view.webp",
    title: "Map View",
    description: "Discover openings around you on a map and find shifts close to home."
  },
  {
    screen: "/images/features/job-marketplace.webp",
    title: "Job Marketplace",
    description: "Browse recommended roles, urgent shifts and job invites, and save the ones that fit your schedule and skills."
  },
  {
    screen: "/images/features/wallet-payment.webp",
    title: "Wallet & Payment History",
    description: "Track the earnings for every shift and withdraw to your linked bank account."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Registered Nurse",
    rating: 5,
    review:
      "Got a part-time nursing job in 2 days — everything was verified! The smart job recommendations saved me so much time. Highly recommend it!",
  },
  {
    id: 2,
    name: "David L.",
    role: "Freelance Physiotherapist",
    rating: 4,
    review:
      "I had been looking for flexible shifts with no luck. The easy payments and map view here made freelancing smooth. Totally worth it.",
  },
  {
    id: 3,
    name: "Emily R.",
    role: "Healthcare Specialist",
    rating: 5,
    review:
      "The AI matching is incredible! Found my dream job within a week. The verification process gave me confidence in every application.",
  },
  {
    id: 4,
    name: "Michael K.",
    role: "Medical Technician",
    rating: 5,
    review:
      "Best platform for healthcare professionals! The instant notifications and easy application process made job hunting stress-free.",
  },
];


