import { CalendarCheck, ClipboardList, Facebook, FileText, Instagram, Linkedin, Mic, ShieldCheck, Target, type LucideIcon } from "lucide-react";

// Home page constants

  
  export interface AIFeature {
    icon: LucideIcon;
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
  
  
  export const AI_FEATURES: AIFeature[] = [
    {
      icon: FileText,
      title: "AI Resume Parsing",
      description: "Professionals upload a resume and KeRaeva structures it into a complete profile, giving organizations consistent candidate information."
    },
    {
      icon: Target,
      title: "Smart Matching",
      description: "Matches professionals and roles using profession, skills, experience, location and availability."
    },
    {
      icon: Mic,
      title: "AI Interviews",
      description: "Structured AI interviews professionals complete once and reuse, plus job-specific interviews when an organization requests one."
    },
    {
      icon: ClipboardList,
      title: "AI Scorecards",
      description: "Every completed interview produces a scorecard with category scores, a summary and a full transcript recruiters can review."
    },
    {
      icon: CalendarCheck,
      title: "Availability-Aware Staffing",
      description: "Professionals choose when they're available, so urgent shifts reach people nearby who can actually work."
    },
    {
      icon: ShieldCheck,
      title: "Verified Profiles & Opportunities",
      description: "Identity, documents and credentials are reviewed, and verification status is visible before anyone commits."
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
  // Urgent staffing flow, told from each audience's side
  export const URGENT_STAFFING_STEPS: Record<"everyone" | "organizations" | "professionals", JourneyStep[]> = {
    everyone: [
      { title: "Urgent Need", description: "A facility needs cover for a shift that starts soon." },
      { title: "KeRaeva Matching", description: "The shift is matched to professionals by role, availability and location." },
      { title: "Available Professional", description: "Matched professionals see the details and respond from their phone." },
      { title: "Shift Filled", description: "Once a professional accepts, the facility knows the shift is covered." },
    ],
    organizations: [
      {
        title: "Create an Urgent Requirement",
        description: "Add the role, date, time, location and pay for the shift you need covered.",
      },
      {
        title: "KeRaeva Finds Eligible Professionals",
        description: "The requirement is matched against professionals\u2019 role, qualifications, availability and location.",
      },
      {
        title: "Professionals Are Notified",
        description: "Eligible professionals get the shift details on their phone straight away.",
      },
      {
        title: "Responses Arrive",
        description: "You see who has accepted as responses come in, from the recruiter platform.",
      },
      {
        title: "Fill the Shift",
        description: "The shift is confirmed and appears in your workforce view with the assigned professional.",
      },
    ],
    professionals: [
      {
        title: "Set Your Availability",
        description: "Turn on availability for the days and times you\u2019re open to urgent work.",
      },
      {
        title: "Receive a Matching Urgent Opportunity",
        description: "When a nearby shift fits your role, KeRaeva sends you an alert.",
      },
      {
        title: "Review Shift Details",
        description: "Check the facility, location, timing and pay before you decide.",
      },
      {
        title: "Accept or Decline",
        description: "Take the shift in a tap, or pass on it if it doesn\u2019t suit you.",
      },
      {
        title: "Work the Shift",
        description: "Accepted shifts move to your upcoming work, ready for check-in on the day.",
      },
    ],
  };

  // Shift-to-payment flow, told from each audience's side
  export const WORKFORCE_STEPS: Record<"everyone" | "organizations" | "professionals", string[]> = {
    everyone: [
      "Opportunity accepted and shift scheduled",
      "Check in and out from the app",
      "Shift completed",
      "Earnings credited to the wallet",
    ],
    organizations: [
      "Shifts assigned to accepted professionals",
      "Check-ins and check-outs visible as they happen",
      "Workforce activity followed across every shift",
      "Completed shifts confirmed",
      "Payment status visible for each shift",
    ],
    professionals: [
      "Upcoming and active shifts in one place",
      "Check in when you arrive",
      "Check out when you finish",
      "Completed shifts credited to your wallet",
      "Withdraw to your linked bank account",
    ],
  };

  // External links
  export const RECRUITER_REGISTRATION_URL = "https://recruiter.keraeva.com/registration";

  export const APP_STORE_LINKS = {
    googlePlay: "https://play.google.com/store/apps/details?id=com.keraeva",
    // iOS app is not yet published on the App Store
    appStore: null as string | null,
  };

  export const DEMO_VIDEO_URL = "https://youtu.be/4Rd9ZeAYZgc?si=0zWtfUsrjAJRqWbO";

  // Social profiles: an icon is shown only once its URL is set
  export const SOCIAL_LINKS: { label: string; icon: LucideIcon; href: string | null }[] = [
    { label: "LinkedIn", icon: Linkedin, href: null },
    { label: "Facebook", icon: Facebook, href: null },
    { label: "Instagram", icon: Instagram, href: null },
  ];

  export const ACTIVE_SOCIAL_LINKS = SOCIAL_LINKS.filter(
    (link): link is { label: string; icon: LucideIcon; href: string } => Boolean(link.href)
  );
