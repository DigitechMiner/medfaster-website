// Home page constants

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
      icon: "/images/icons/ai-resume-parsing.svg",
      title: "AI Resume Parsing",
      description: "Professionals upload a resume and KeRaeva structures it into a complete profile, giving organizations consistent candidate information."
    },
    {
      icon: "/images/icons/ai-job-matching.svg",
      title: "Smart Matching",
      description: "Matches professionals and roles using profession, skills, experience, location and availability."
    },
    {
      icon: "/images/icons/ai-feedback.svg",
      title: "AI Interviews",
      description: "Structured AI interviews professionals complete once and reuse, plus job-specific interviews when an organization requests one."
    },
    {
      icon: "/images/icons/ai-powered.svg",
      title: "AI Scorecards",
      description: "Every completed interview produces a scorecard with category scores, a summary and a full transcript recruiters can review."
    },
    {
      icon: "/images/icons/ai-predictive-availability.svg",
      title: "Availability-Aware Staffing",
      description: "Professionals choose when they're available, so urgent shifts reach people nearby who can actually work."
    },
    {
      icon: "/images/icons/ai-verified-opportunities.svg",
      title: "Verified Profiles & Opportunities",
      description: "Identity, documents and credentials are reviewed, and verification status is visible before anyone commits."
    }
  ];
  
  export const APP_FEATURES: AppFeature[] = [
    {
      screen: "/images/features/resume-upload.png",
      title: "Profile & Document Upload",
      description: "Upload your resume, licences and certifications once, then track their verification status in one place."
    },
    {
      screen: "/images/features/map-view.svg",
      title: "Map View",
      description: "See opportunities around you on a map and search within the distance you're willing to travel."
    },
    {
      screen: "/images/features/job-marketplace.svg",
      title: "Job Marketplace",
      description: "Browse recommended roles, urgent shifts, job invites and hiring organizations. Save the ones you like and track every application."
    },
    {
      screen: "/images/features/wallet-payment.svg",
      title: "Wallet & Payments",
      description: "See the earnings and transaction history for every shift, and withdraw to your linked bank account."
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
  // Platform journey (Home)
  export interface JourneyStep {
    title: string;
    description: string;
  }

  export const PLATFORM_JOURNEY: JourneyStep[] = [
    {
      title: "Build Your Profile",
      description: "Professionals upload a resume and credentials. Organizations post jobs and shifts.",
    },
    {
      title: "Get Verified",
      description: "Identity, documents and credentials are reviewed before work begins.",
    },
    {
      title: "Complete an AI Interview",
      description: "A structured interview produces a scorecard recruiters can rely on.",
    },
    {
      title: "Smart AI Matching",
      description: "Our AI finds ideal job and candidate fits based on skills, availability and location.",
    },
    {
      title: "Hire or Fill Shifts",
      description: "Apply to roles, respond to job invites, or accept urgent shifts in a tap.",
    },
    {
      title: "Work Your Shifts",
      description: "Upcoming shifts, check-in and shift history, all in one place.",
    },
    {
      title: "Get Paid",
      description: "Earnings are credited to your wallet once attendance is verified.",
    },
    {
      title: "Stay in the Loop",
      description: "Real-time notifications, chat and application status for both sides.",
    },
  ];

  // Urgent staffing flow (Home)
  export const URGENT_STAFFING_STEPS: JourneyStep[] = [
    {
      title: "Urgent Requirement Posted",
      description: "An organization needs a Registered Nurse for tonight's shift.",
    },
    {
      title: "KeRaeva Finds Who's Eligible",
      description: "The requirement is matched against professionals' role, availability and location.",
    },
    {
      title: "Instant Opportunity Alert",
      description: "Eligible professionals get the shift details (location, timing and pay) on their phone.",
    },
    {
      title: "Accept or Decline in a Tap",
      description: "Professionals review the shift and respond. Shifts are filled on a first-accept basis.",
    },
    {
      title: "Shift Confirmed",
      description: "The shift moves to the professional's upcoming work, and the organization knows it's covered.",
    },
  ];

  // Shift-to-payment flow (Home)
  export const WORKFORCE_STEPS: string[] = [
    "Shift scheduled",
    "Check in and out from the app",
    "Attendance verified",
    "Earnings credited to the wallet",
    "Withdraw to a linked bank account",
  ];

  // External links
  export const RECRUITER_REGISTRATION_URL = "https://recruiter.keraeva.com/registration";

  export const APP_STORE_LINKS = {
    googlePlay: "https://play.google.com/store/apps/details?id=com.keraeva",
    // iOS app is not yet published on the App Store
    appStore: null as string | null,
  };

  export const DEMO_VIDEO_URL = "https://youtu.be/4Rd9ZeAYZgc?si=0zWtfUsrjAJRqWbO";
