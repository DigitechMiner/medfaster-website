import { type Job } from "./job-card";

// Add real KeRaeva openings here; the page shows an empty state when there are none.
export const JOBS: Job[] = [
  {
    id: 1,
    slug: "community-disability-support-worker-calgary",
    title: "Community and Disability Support Worker (CDSW)",
    company: "KeRaeva",
    location: "Calgary, Alberta, Canada",
    type: "Full-time",
    mode: "On-site",
    experience: "25 openings",
    postedAt: "Nov 18, 2026",
    details: {
      summary: [
        "We're hiring 25 full-time Community and Disability Support Workers (CDSW) in Calgary, Alberta.",
        "If you want work where you see the difference you make every single day, this role is for you.",
      ],
      whyJoin: [
        "Make a meaningful impact in your community",
        "Stable, full-time employment",
        "Support individuals to live independently",
        "Be part of a caring, inclusive team",
      ],
      whyKeRaevaIntro:
        "KeRaeva is the app for healthcare professionals to find shifts, apply and manage their profile, all in one place.",
      whyKeRaeva: [
        "Find jobs and shifts near you on a live map",
        "Pick up extra shifts from the Urgent tab: you decide to accept or pass",
        "Upload your resume and it's read into your profile for you",
        "Keep your licences, certificates and documents in one place, ready for every application",
        "Switch on your availability so employers know you're open to work",
        "Apply from your phone in a few taps and save jobs for later",
      ],
      documents: [
        "Proof of eligibility to work in Canada",
        "Government-issued photo ID",
        "Certificate or diploma in Community Disability Studies/Services, Health Care Aide (HCA/PSW) or a related field",
        "Valid Standard First Aid and CPR (Level C)",
        "Police Information Check with Vulnerable Sector Check",
        "Up-to-date resume and references",
      ],
      skills: [
        "Disability Support",
        "Community Support",
        "Personal Care",
        "Activities of Daily Living (ADLs)",
        "Client-Centred Care",
        "Communication",
        "Observation and Reporting",
        "Behaviour Support",
        "First Aid and CPR",
        "Teamwork",
      ],
      howToApply: [
        "Download the KeRaeva app (Android now, iOS coming soon)",
        "Register and set up your profile, then upload your resume and documents",
        "Complete your pre-verification in the app so employers can hire you quickly",
      ],
    },
  },
];

export const ITEMS_PER_PAGE = 8;

export function getJobBySlug(slug: string): Job | undefined {
  return JOBS.find((job) => job.slug === slug);
}
