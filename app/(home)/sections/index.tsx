"use client";

import Image from "@/components/ui/image";
import { Section } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";
import { Heading } from "@/components/ui/heading";
import { Paragraph, ResponsiveParagraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import { ArrowRight, Calendar, CheckCircle2, LayoutDashboard, Smartphone } from "lucide-react";
import { IconChip } from "@/components/ui/icon-chip";
import { useRouter } from "next/navigation";
import {
  AI_FEATURES,
  APP_STORE_LINKS,
  RECRUITER_REGISTRATION_URL,
} from "@/utils/constant";
import { useModalStore } from "@/stores/modalStore";

// AI Helps Section
export function AIHelpsSection() {
  const features = AI_FEATURES;
  const router = useRouter();

  return (
    <Section backgroundColor="bg-white">
      <div className="mb-8 md:mb-12">
        {/* ↓ text-2xl on mobile, scales up */}
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          <span className="text-[#F3651B]">Intelligent AI</span>
          {", Working for Healthcare Professionals & Organizations"}
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl text-sm md:text-base">
          AI is built into every step of KeRaeva, from building a profile to
          interviewing, matching and filling urgent shifts.
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            className="bg-[#FAFAFA] p-3 sm:p-4 rounded-lg"
            title={feature.title}
            description={feature.description}
            visual={{ type: "icon", content: feature.icon }}
          />
        ))}
      </div>

      <CustomButton
        className="w-full sm:w-auto"
        rightIcon={ArrowRight}
        onClick={() => router.push("/keraeva-ai")}
      >
        Explore KeRaeva AI
      </CustomButton>
    </Section>
  );
}

// Product Ecosystem Section - the app for professionals and the recruiter platform
const ECOSYSTEM = [
  {
    icon: Smartphone,
    title: "KeRaeva App",
    audience: "For healthcare professionals",
    points: [
      "Profile, documents and verification status",
      "AI interview and scorecard",
      "Jobs, job invites and urgent shifts",
      "Shifts with in-app check-in and check-out",
      "Wallet and withdrawals to your bank",
    ],
    href: "/medical-professionals",
    linkLabel: "KeRaeva for Professionals",
  },
  {
    icon: LayoutDashboard,
    title: "KeRaeva Recruiter Platform",
    audience: "For healthcare organizations",
    points: [
      "Post jobs and urgent requirements",
      "Review verified profiles and AI interview scorecards",
      "Invite professionals and manage applications",
      "Follow assigned shifts and attendance",
      "See payment status for completed shifts",
    ],
    href: "/medical-organizations",
    linkLabel: "KeRaeva for Organizations",
  },
];

export function AllInOneSection() {
  const router = useRouter();

  return (
    <Section>
      <div className="mb-8 md:mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          One <span className="text-[#F3651B]">Connected Ecosystem</span>, Two Products
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl text-sm md:text-base">
          Professionals use the KeRaeva app. Organizations use the recruiter
          platform. Jobs, interviews, shifts and payments move between them in
          one connected flow.
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {ECOSYSTEM.map((product) => (
          <div key={product.title} className="bg-[#FAFAFA] rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <IconChip icon={product.icon} />
              <div>
                <Heading as="h3" size="xs" className="text-[#252B37]">
                  {product.title}
                </Heading>
                <Paragraph size="sm" className="text-[#717680]">
                  {product.audience}
                </Paragraph>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {product.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F3651B] mt-1 shrink-0" aria-hidden="true" />
                  <Paragraph size="sm" className="text-[#717680]">
                    {point}
                  </Paragraph>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <CustomButton
                variant="secondary"
                className="w-full sm:w-auto"
                rightIcon={ArrowRight}
                onClick={() => router.push(product.href)}
              >
                {product.linkLabel}
              </CustomButton>
            </div>
          </div>
        ))}
      </div>

      {/* Download the App */}
      <div className="flex flex-col sm:flex-row sm:items-end gap-6 border-b border-[#E9EAEB] pt-8 md:pt-12 pb-6">
        <div className="sm:flex-1">
          <Heading as="h3" size="xs" className="mb-4">
            <span className="text-[#F3651B]">Download</span>{" "}
            <span className="text-[#252B37]">the App</span>
          </Heading>
          <Paragraph className="text-[#717680] text-sm md:text-base">
            Scan to get KeRaeva on Android. iOS is coming soon.
          </Paragraph>
        </div>

        <div className="flex gap-3 md:gap-4 justify-start items-end">
          <a
            href={APP_STORE_LINKS.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
            className="w-28 md:w-32 lg:w-36 flex-shrink-0"
            aria-label="Get KeRaeva on Google Play"
          >
            <Image
              src="/images/ui/qr-google-play.png"
              alt="QR code to download KeRaeva on Google Play"
              width={186}
              height={223}
              className="object-contain w-full h-auto"
            />
          </a>
          <div className="w-28 md:w-32 lg:w-36 flex-shrink-0 flex flex-col items-center gap-1">
            <Image
              src="/images/ui/badge-app-store.png"
              alt="App Store (coming soon)"
              width={169}
              height={55}
              className="object-contain w-full h-auto opacity-40"
            />
            <span className="text-xs text-[#717680]">Coming soon on iOS</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Trust & Verification Section - verified documents + structured AI interview
export function VerifiedSection() {
  const audiences = [
    {
      title: "For Professionals",
      points: [
        "Upload licences and certifications once",
        "See the verification status of each document",
        "Choose which completed interview recruiters see",
      ],
    },
    {
      title: "For Organizations",
      points: [
        "Verification status on every profile",
        "AI interview scores, a summary and the full transcript",
        "Credentials reviewed alongside the scorecard",
      ],
    },
  ];

  return (
    <Section
      padding={false}
      backgroundColor="bg-neutral-100"
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8"
    >
      <Section className="flex items-start w-full">
        <div className="space-y-4">
          <Paragraph size="sm" className="text-[#C44408] font-semibold uppercase tracking-wider">
            Trust & Verification
          </Paragraph>
          <Heading as="h2" size="md" className="text-[#252B37]">
            Hiring Built on <span className="text-[#F3651B]">Verified</span>{" "}
            Profiles and <span className="text-[#F3651B]">Structured</span> Interviews
          </Heading>

          <ResponsiveParagraph
            size="sm"
            className="text-[#717680] leading-relaxed"
          >
            Professionals upload their credentials and can follow the
            verification status of each document. They then complete a
            structured AI interview, and recruiters review the scorecard
            alongside the profile, so every candidate is assessed the same way.
          </ResponsiveParagraph>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {audiences.map((audience) => (
              <div key={audience.title}>
                <Heading as="h3" size="xs" className="text-[#252B37] mb-3">
                  {audience.title}
                </Heading>
                <ul className="space-y-2">
                  {audience.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F3651B] mt-1 shrink-0" aria-hidden="true" />
                      <Paragraph size="sm" className="text-[#717680]">
                        {point}
                      </Paragraph>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        padding={false}
        // ↓ center on mobile, right-align on lg
        className="flex overflow-hidden items-end justify-center lg:justify-end pt-6 lg:pt-0"
      >
        <div className="relative mx-auto max-w-xs md:max-w-sm lg:max-w-2xl w-full">
          <Image
            src="/images/ui/verified-card.webp"
            alt="Sample verified AI interview scorecard on a KeRaeva professional profile"
            width={500}
            height={1000}
            className="object-contain w-full"
          />
        </div>
      </Section>
    </Section>
  );
}

// Next Career Section
export function NextCareer() {
  const openModal = useModalStore((state) => state.openModal);
  const cardStyle = {
    backgroundImage: "url(/images/patterns/orange-pattern-2.webp)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "overlay" as const,
    backgroundRepeat: "no-repeat",
  };

  return (
    <Section
      backgroundColor="bg-neutral-100"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8"
      padding={false}
    >
      {/* Left Card */}
      <Section backgroundColor="bg-[#F3651B]" padding={false} style={cardStyle}>
        <div className="p-6 sm:p-8 md:p-8 lg:p-12 xl:p-16 flex flex-col min-h-[260px] md:min-h-[400px]">
          <div className="space-y-4 md:space-y-6">
            <Heading as="h2" size="md" className="text-white">
              Find Your Next Healthcare Role
            </Heading>

            <ResponsiveParagraph size="base" className="text-white/90 leading-relaxed">
              Create your free profile in the KeRaeva app to see jobs and
              urgent shifts matched to your role and availability.
            </ResponsiveParagraph>

            <div className="pt-2">
              <CustomButton
            variant="inverse"
                className="w-full sm:w-auto"
                rightIcon={ArrowRight}
                onClick={() => openModal("get-app")}
              >
                Create Free Profile
              </CustomButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Right Card */}
      <Section backgroundColor="bg-[#F3651B]" padding={false} style={cardStyle}>
        <div className="p-6 sm:p-8 md:p-8 lg:p-12 xl:p-16 flex flex-col min-h-[260px] md:min-h-[400px]">
          <div className="space-y-4 md:space-y-6">
            <Heading as="h2" size="md" className="text-white">
              Start Hiring Smarter Today
            </Heading>

            <ResponsiveParagraph size="base" className="text-white/90 leading-relaxed">
              Reach verified healthcare professionals, fill urgent shifts and
              review AI-assessed candidates in one platform.
            </ResponsiveParagraph>

            {/* ↓ stack buttons on mobile, row on sm+ */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <CustomButton
            variant="inverse"
                className="w-full sm:w-auto"
                rightIcon={ArrowRight}
                onClick={() => window.open(RECRUITER_REGISTRATION_URL, "_blank")}
              >
                Post a Job
              </CustomButton>

              <CustomButton
            variant="inverse"
                className="w-full sm:w-auto"
                rightIcon={Calendar}
                onClick={() => openModal("request-demo")}
              >
                Schedule Demo
              </CustomButton>
            </div>
          </div>
        </div>
      </Section>
    </Section>
  );
}
