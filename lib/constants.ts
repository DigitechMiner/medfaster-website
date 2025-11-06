// Home page constants

export interface CompanyLogo {
  src: string;
  alt: string;
}

export interface GetHiredStep {
  iconSrc: string;
  title: string;
  description: string;
}

export interface AIFeature {
  icon: string;
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
  image: string;
  rating: number;
  review: string;
}

export const COMPANY_LOGOS: CompanyLogo[] = [
  { src: "/images/company/canadian-health.png", alt: "Canadian Health" },
  { src: "/images/company/canadian-specialist-hospital.png", alt: "Canadian Specialist Hospital" },
  { src: "/images/company/medical-canada.png", alt: "Medical Canada" },
  { src: "/images/company/canadian-red-cross.png", alt: "Canadian Red Cross" },
];

export const GET_HIRED_STEPS: GetHiredStep[] = [
  {
    iconSrc: "/images/icons/create-profile.svg",
    title: "Create Your Profile",
    description:
      "Upload your resume and certificates, and let our AI auto-fill your details instantly.",
  },
  {
    iconSrc: "/images/icons/verify-screening.svg",
    title: "Verify & Pre-Screen",
    description:
      "Get your credentials verified and complete a short AI interview to showcase your skills to top employers.",
  },
  {
    iconSrc: "/images/icons/start-working.svg",
    title: "Start Working",
    description:
      "Apply for nearby shifts or full-time roles and get paid directly and reliably through the platform.",
  },
];

export const AI_FEATURES: AIFeature[] = [
  {
    icon: "/images/icons/ai-feedback.svg",
    title: "AI Resume Parsing / Automated Screening",
    description: "Quickly build accurate professional profiles for candidates and automatically screen applicants for organizations."
  },
  {
    icon: "/images/icons/ai-resume-parsing.svg",
    title: "Smart Job Matching",
    description: "Connects candidates to ideal roles and organizations to top-fit talent, instantly."
  },
  {
    icon: "/images/icons/ai-predictive-availability.svg",
    title: "Predictive Availability / Predictive Insights",
    description: "Helps candidates find roles aligning with their future schedules and organizations forecast candidate performance and availability."
  },
  {
    icon: "/images/icons/ai-job-matching.svg",
    title: "Confidential AI Feedback / AI Behavioral Interviews",
    description: "Gives candidates feedback to improve and organizations objective assessments of communication & professionalism."
  },
  {
    icon: "/images/icons/ai-verified-opportunities.svg",
    title: "Verified Opportunities / Trust Layer",
    description: "Ensures candidates apply to trusted roles and organizations hire 100% verified, compliant staff."
  },
  {
    icon: "/images/icons/ai-predictive-availability.svg",
    title: "Unified Communication Tools",
    description: "Seamless chat for candidates to connect with recruiters, and for recruiters to manage all candidate outreach."
  }
];

export const APP_FEATURES: AppFeature[] = [
  {
    screen: "/images/features/resume-upload.png",
    title: "Profile & Doc Upload",
    description: "Securely store all your professional documents in one place to create a comprehensive, standout profile."
  },
  {
    screen: "/images/features/document-verification.png",
    title: "Credential Verification",
    description: "Our system verifies your credentials, giving you a badge of trust that makes your application a priority for top employers."
  },
  {
    screen: "/images/features/map-view.png",
    title: "Map View",
    description: "Visually discover job openings in your area. See commute times and find shifts close to home."
  },
  {
    screen: "/images/features/job-marketplace.png",
    title: "Job / Candidate Marketplace",
    description: "Filter through full-time, contract, and freelance roles to find the perfect opportunity that fits your schedule and skills."
  },
  {
    screen: "/images/features/wallet-payment.png",
    title: "Wallet & Payment History",
    description: "Track your earnings and manage payments directly within the app. Get paid reliably with full transparency."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Registered Nurse",
    image: "/images/testimonials/sarah-m.png",
    rating: 5,
    review:
      "Got a part-time nursing job in 2 days — everything was verified! The smart job recommendations saved me so much time. Highly recommend it!",
  },
  {
    id: 2,
    name: "David L.",
    role: "Freelance Physiotherapist",
    image: "/images/testimonials/michael-k.png",
    rating: 4,
    review:
      "I had been looking for flexible shifts with no luck. The easy payments and map view here made freelancing smooth. Totally worth it.",
  },
  {
    id: 3,
    name: "Emily R.",
    role: "Healthcare Specialist",
    image: "/images/testimonials/sarah-m.png",
    rating: 5,
    review:
      "The AI matching is incredible! Found my dream job within a week. The verification process gave me confidence in every application.",
  },
  {
    id: 4,
    name: "Michael K.",
    role: "Medical Technician",
    image: "/images/testimonials/michael-k.png",
    rating: 5,
    review:
      "Best platform for healthcare professionals! The instant notifications and easy application process made job hunting stress-free.",
  },
];

// Hero section profile images
export const HERO_PROFILE_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format",
    alt: "User 1"
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format",
    alt: "User 2"
  },
  {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format",
    alt: "User 3"
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format",
    alt: "User 4"
  },
];

