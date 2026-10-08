"use client";

import Image from "@/components/ui/image";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BellRing,
  Calendar,
  CheckCircle2,
  ClipboardList,
  Eye,
  FileText,
  Gauge,
  LayoutDashboard,
  LayoutGrid,
  ListChecks,
  MapPin,
  Mic,
  Repeat,
  ScanFace,
  Scale,
  ShieldAlert,
  Siren,
  Smartphone,
  Sparkles,
  Target,
  ThumbsUp,
  ToggleRight,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph, ResponsiveParagraph } from "@/components/ui/paragraph";
import { FeatureCard } from "@/components/ui/feature-card";
import { CustomButton } from "@/components/ui/custom-button";
import { IconChip } from "@/components/ui/icon-chip";
import { useModalStore } from "@/stores/modalStore";

type Feature = { icon: LucideIcon; title: string; description: string };

// Where AI shows up across the KeRaeva workforce lifecycle
const AI_JOURNEY = [
  { title: "Profile", description: "AI reads your resume and structures it into a complete profile." },
  { title: "Interview", description: "A structured AI voice interview, with identity and liveness checks." },
  { title: "Scorecard", description: "Scores, strengths, areas to improve, risk flags and a transcript." },
  { title: "Match", description: "Professionals and roles matched on skills, experience and location." },
  { title: "Urgent Dispatch", description: "Urgent shifts reach eligible professionals who are available." },
  { title: "Hire", description: "Recruiters see AI scores on every candidate in their pipeline." },
  { title: "Work", description: "Smart widgets and live status keep your next shift in view." },
  { title: "Insights", description: "Dashboards show AI matches, interviews and hiring progress." },
];

// For healthcare professionals (verified in the KeRaeva app)
const PROFESSIONAL_AI: Feature[] = [
  {
    icon: FileText,
    title: "AI Resume Parsing",
    description: "Upload your resume and KeRaeva extracts your details into a structured professional profile.",
  },
  {
    icon: Mic,
    title: "AI Voice Interview",
    description: "Complete a structured, conversational AI interview from your phone, with a mic check before you start.",
  },
  {
    icon: Repeat,
    title: "Reusable Profile Interview",
    description: "Interview once and choose which completed interview recruiters see on your profile.",
  },
  {
    icon: ClipboardList,
    title: "Job-Specific Interviews",
    description: "When an organization requests one, complete an AI interview tailored to their role.",
  },
  {
    icon: Gauge,
    title: "Your Personal Scorecard",
    description: "See your overall score, strengths and areas to improve, so you know how to stand out.",
  },
  {
    icon: Target,
    title: "Recommended Jobs",
    description: "A personalized list of roles matched to your skills, experience and preferences.",
  },
  {
    icon: Siren,
    title: "Urgent Shift Matching",
    description: "Set your availability and receive urgent shifts nearby that match your role.",
  },
  {
    icon: MapPin,
    title: "Location-Aware Discovery",
    description: "Find opportunities around you on a map and within the distance you choose.",
  },
];

// For healthcare organizations (from the KeRaeva recruiter platform)
const ORGANIZATION_AI: Feature[] = [
  {
    icon: Sparkles,
    title: "AI-Matched Candidates",
    description: "See new AI-matched candidates for your roles, ranked by overall score.",
  },
  {
    icon: Gauge,
    title: "AI Score on Every Candidate",
    description: "Each candidate card in your pipeline shows their AI interview score at a glance.",
  },
  {
    icon: ListChecks,
    title: "Structured Interview Rounds",
    description: "Review conversational and behavioural rounds, communication analysis and accuracy of answers.",
  },
  {
    icon: ThumbsUp,
    title: "Strengths & Areas to Improve",
    description: "AI-written summaries highlight each candidate's strengths and where they can grow.",
  },
  {
    icon: ShieldAlert,
    title: "Risk Flags",
    description: "Flags for communication concerns, critical safety violations and unsafe decisions.",
  },
  {
    icon: ScanFace,
    title: "Interview Integrity Checks",
    description: "Identity matching, liveness checks and multiple-face detection during AI interviews.",
  },
  {
    icon: BellRing,
    title: "Urgent Dispatch",
    description: "Send urgent shifts to eligible, available professionals and see who accepts.",
  },
  {
    icon: LayoutDashboard,
    title: "AI Hiring Insights",
    description: "Track active jobs, AI matches, interviews scheduled and hires on your dashboard.",
  },
];

// Smart features in the KeRaeva app (device features depend on OS version)
const SMART_FEATURES: (Feature & { status?: string })[] = [
  {
    icon: Sparkles,
    title: "Siri, Spotlight & App Actions",
    description: "Ask Siri or use Android App Actions to open urgent jobs, your work, saved jobs or start an AI interview.",
  },
  {
    icon: Smartphone,
    title: "App Shortcuts",
    description: "Long-press the app icon for quick shortcuts to the screens you use most.",
  },
  {
    icon: LayoutGrid,
    title: "Home & Lock Screen Widgets",
    description: "Nearby jobs, today's shift, your next interview and availability, without opening the app.",
    status: "Rolling out",
  },
  {
    icon: Activity,
    title: "Live Shift & Interview Status",
    description: "Live Activities, Dynamic Island and Android live updates for active shifts and interview countdowns.",
    status: "Rolling out",
  },
  {
    icon: ToggleRight,
    title: "Quick Controls",
    description: "Control Center and Quick Settings tiles for Urgent Jobs, My Work and availability setup.",
    status: "Rolling out",
  },
  {
    icon: BellRing,
    title: "Actionable Notifications",
    description: "Rich notifications that take you straight to the shift, interview or job they're about.",
  },
];

const SCORECARD_PARTS = [
  "Overall score and recommendation",
  "Interview summary written by AI",
  "Category scores with detailed sub-metrics",
  "Strengths and areas to improve",
  "Risk flags for safety and communication",
  "Full interview transcript",
];

const PRINCIPLES: Feature[] = [
  {
    icon: UserCheck,
    title: "AI Assists, People Decide",
    description: "AI organizes and scores information. Hiring decisions are always made by the organization's team.",
  },
  {
    icon: Eye,
    title: "Transparent to Professionals",
    description: "Professionals can see their own scorecard, including strengths and areas to improve.",
  },
  {
    icon: BadgeCheck,
    title: "Professionals Stay in Control",
    description: "Choose which completed interview recruiters see, and when you're available for urgent shifts.",
  },
  {
    icon: Scale,
    title: "Consistent for Every Candidate",
    description: "Structured interviews assess every candidate on the same criteria for the role.",
  },
];

// Hero
export function AIHero() {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <Section className="!pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <Heading as="h1" size="lg" className="text-[#252B37]" weight="normal">
          Intelligence Built Into{" "}
          <span className="text-[#F3651B] font-medium">Every Step</span>
        </Heading>
        <div className="flex flex-col justify-start space-y-6">
          <ResponsiveParagraph size="base" className="text-[#252B37] leading-relaxed">
            KeRaeva AI isn&apos;t a chatbot bolted on. It&apos;s built into how
            profiles are created, how professionals are interviewed and
            assessed, how roles and urgent shifts are matched, and how hiring
            teams make decisions.
          </ResponsiveParagraph>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <CustomButton rightIcon={ArrowRight} onClick={() => openModal("get-app")}>
              Get the App
            </CustomButton>
            <CustomButton variant="muted" rightIcon={Calendar} onClick={() => openModal("request-demo")}>
              Request Demo
            </CustomButton>
          </div>
        </div>
      </div>
      <div className="relative mt-10 max-w-5xl mx-auto">
        <Image
          src="/img/features/confidence.webp"
          alt="An AI-assessed candidate profile with uploaded documents, interview scores and strengths"
          width={2877}
          height={1356}
          sizes="(max-width: 1280px) 100vw, 1024px"
          className="w-full h-auto"
          priority
        />
      </div>
    </Section>
  );
}

// AI across the lifecycle (orange journey panel)
export function AIJourney() {
  return (
    <Section
      backgroundColor="bg-[#F3651B]"
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url(/images/patterns/orange-pattern-1.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mb-8">
        <Heading className="text-white mb-4">Where AI Works in KeRaeva</Heading>
        <ResponsiveParagraph size="base" className="text-white max-w-2xl">
          From the first resume upload to the shift on your calendar, AI helps
          at every stage of the healthcare workforce lifecycle.
        </ResponsiveParagraph>
      </div>
      <ol className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
        {AI_JOURNEY.map((step, index) => (
          <li
            key={step.title}
            className="bg-white rounded-2xl p-6 flex flex-col flex-shrink-0 w-[75%] sm:w-[45%] md:w-auto snap-start"
          >
            <span className="text-sm font-semibold text-[#C44408] mb-2">
              {String(index + 1).padStart(2, "0")}
            </span>
            <Heading as="h3" size="xs" weight="medium" className="text-[#252B37] mb-3">
              {step.title}
            </Heading>
            <ResponsiveParagraph size="sm" className="text-[#717680] leading-relaxed">
              {step.description}
            </ResponsiveParagraph>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function FeatureGridSection({
  title,
  accent,
  intro,
  features,
}: {
  title: string;
  accent: string;
  intro: string;
  features: Feature[];
}) {
  return (
    <Section>
      <div className="mb-8 md:mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          {title} <span className="text-[#F3651B]">{accent}</span>
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">{intro}</Paragraph>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            visual={{ type: "icon", content: feature.icon }}
          />
        ))}
      </div>
    </Section>
  );
}

export function ProfessionalAI() {
  return (
    <FeatureGridSection
      title="AI for Healthcare"
      accent="Professionals"
      intro="Build a stronger profile, prove your skills once and get matched with the jobs and urgent shifts that fit your life."
      features={PROFESSIONAL_AI}
    />
  );
}

export function OrganizationAI() {
  return (
    <FeatureGridSection
      title="AI for Healthcare"
      accent="Organizations"
      intro="Review consistent, AI-assessed candidates, spot risks early and fill urgent shifts with professionals who can actually work."
      features={ORGANIZATION_AI}
    />
  );
}

// Inside an AI interview scorecard (two-column layout from VerifiedSection)
export function ScorecardSection() {
  return (
    <Section
      padding={false}
      backgroundColor="bg-neutral-100"
      className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 xl:gap-8"
    >
      <Section className="flex flex-col justify-center">
        <div className="space-y-4 md:space-y-6">
          <Paragraph size="sm" className="text-[#C44408] font-semibold uppercase tracking-wider">
            AI Interview Scorecard
          </Paragraph>
          <Heading as="h2" size="md" className="text-[#252B37]">
            Everything a Hiring Team Needs,{" "}
            <span className="text-[#F3651B]">In One Scorecard</span>
          </Heading>
          <ResponsiveParagraph size="sm" className="text-[#717680] leading-relaxed">
            Every completed AI interview produces a structured scorecard, so
            candidates are compared on the same criteria and nothing important
            is missed.
          </ResponsiveParagraph>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SCORECARD_PARTS.map((part) => (
              <li key={part} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F3651B] mt-1 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                <Paragraph size="sm" className="text-[#717680]">{part}</Paragraph>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section className="flex items-center justify-center">
        <Image
          src="/img/dashboard/feature-ai-ranking.webp"
          alt="KeRaeva AI interview scorecard with conversational and behavioural round scores"
          width={1200}
          height={900}
          className="w-full h-auto object-contain"
        />
      </Section>
    </Section>
  );
}

// Interview integrity (white cards with icon chips)
export function IntegritySection() {
  const checks: Feature[] = [
    { icon: ScanFace, title: "Identity Match", description: "The person interviewing is matched to the professional's profile." },
    { icon: Activity, title: "Liveness Check", description: "Confirms a real, live person is taking the interview." },
    { icon: Users, title: "Multiple-Face Detection", description: "Flags when more than one person appears during the interview." },
    { icon: ShieldAlert, title: "Proctoring Rules", description: "Interviews that break proctoring rules are stopped and recorded." },
  ];

  return (
    <Section>
      <div className="mb-8 md:mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          Interviews You Can <span className="text-[#F3651B]">Trust</span>
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">
          AI interviews include integrity checks, so organizations can rely on
          the results and professionals know the process is fair for everyone.
        </Paragraph>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {checks.map((check) => (
          <div key={check.title} className="bg-[#FAFAFA] border border-[#E9EAEB] rounded-2xl p-6 flex flex-col gap-3">
            <IconChip icon={check.icon} />
            <Heading as="h3" size="xs" weight="medium" className="text-[#252B37]">
              {check.title}
            </Heading>
            <ResponsiveParagraph size="sm" className="text-[#717680] leading-relaxed">
              {check.description}
            </ResponsiveParagraph>
          </div>
        ))}
      </div>
    </Section>
  );
}

// Smart features on the phone
export function SmartFeaturesSection() {
  return (
    <Section>
      <div className="mb-8 md:mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          Smart Features <span className="text-[#F3651B]">on Your Phone</span>
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">
          The KeRaeva app works with your phone&apos;s built-in assistant and
          system features, shown in Settings as &ldquo;Siri &amp; Apple
          Intelligence&rdquo; on iOS and &ldquo;AI Assistant &amp; Smart
          Features&rdquo; on Android.
        </Paragraph>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {SMART_FEATURES.map((feature) => (
          <div key={feature.title} className="bg-[#FAFAFA] border border-[#E9EAEB] rounded-2xl p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3">
              <IconChip icon={feature.icon} />
              {feature.status && (
                <span className="bg-[#FEF0E7] text-[#C44408] text-xs font-semibold px-3 py-1 rounded-full">
                  {feature.status}
                </span>
              )}
            </div>
            <Heading as="h3" size="xs" weight="medium" className="text-[#252B37]">
              {feature.title}
            </Heading>
            <ResponsiveParagraph size="sm" className="text-[#717680] leading-relaxed">
              {feature.description}
            </ResponsiveParagraph>
          </div>
        ))}
      </div>
      <Paragraph size="sm" className="text-[#717680] mt-6">
        Device features depend on your phone and operating system version.
      </Paragraph>
    </Section>
  );
}

// How we use AI
export function PrinciplesSection() {
  return (
    <Section>
      <div className="mb-8 md:mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          How We <span className="text-[#F3651B]">Use AI</span>
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">
          AI should make healthcare hiring faster and fairer, never take
          people out of the decision.
        </Paragraph>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {PRINCIPLES.map((principle) => (
          <FeatureCard
            key={principle.title}
            title={principle.title}
            description={principle.description}
            visual={{ type: "icon", content: principle.icon }}
          />
        ))}
      </div>
    </Section>
  );
}

