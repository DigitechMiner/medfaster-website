"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";
import { Heading } from "@/components/ui/heading";
import { Paragraph, ResponsiveParagraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import {

  AI_FEATURES,
  APP_FEATURES,
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

// All In One App Section
export function AllInOneSection() {
  const features = APP_FEATURES;

  return (
    <Section>
      <div className="mb-8 md:mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          Manage Your{" "}
          <span className="text-[#F3651B]">Entire Career & Hiring Journey,</span>{" "}
          Mobile-First
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl text-sm md:text-base">
          From secure document management to full-suite dashboard functionality,
          our mobile app puts everything you need at your fingertips.
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            imageFullWidth={true}
            imageCenter={true}
            visual={{ type: "image", content: feature.screen, alt: feature.title }}
          />
        ))}

        {/* Download the App Card */}
        <div className="flex flex-col border-b border-[#E9EAEB] py-4 md:py-0">
          <Heading as="h3" size="xs" className="mb-4 md:mb-6">
            <span className="text-[#F3651B]">Download</span>{" "}
            <span className="text-[#252B37]">the App</span>
          </Heading>
          
          <Paragraph className="text-[#717680] text-sm md:text-base mb-4">
            Scan to get KeRaeva on Android. iOS is coming soon.
          </Paragraph>

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
                alt="App Store"
                width={169}
                height={55}
                className="object-contain w-full h-auto opacity-40"
              />
              <span className="text-xs text-[#717680]">Coming soon on iOS</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Verified Section - AI interview + verified scorecard
export function VerifiedSection() {
  const audiences = [
    {
      title: "For Professionals",
      points: [
        "Complete a structured AI interview from your phone",
        "Choose which completed interview recruiters see",
        "Take job-specific interviews when an organization requests one",
      ],
    },
    {
      title: "For Organizations",
      points: [
        "Consistent, structured assessments for every candidate",
        "Category scores, a summary and the full transcript",
        "Credentials and documents alongside the scorecard",
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
          <Heading as="h2" size="md" className="text-[#252B37]">
            Interview Once with{" "}
            <span className="text-[#F3651B]">AI</span>. Earn a{" "}
            <span className="text-[#F3651B]">Verified</span> Scorecard.
          </Heading>

          <ResponsiveParagraph
            size="sm"
            className="text-[#717680] leading-relaxed"
          >
            After onboarding and verification, professionals complete a
            structured AI interview. It produces a scorecard that travels with
            their profile, so recruiters can review candidates faster and more
            consistently.
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
                      <CheckCircle2 className="w-4 h-4 text-[#F3651B] mt-1 shrink-0" />
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
            alt="Verified AI interview scorecard on a KeRaeva professional profile"
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
              Your Next Career Move Starts Here.
            </Heading>

            <ResponsiveParagraph size="base" className="text-white/90 leading-relaxed">
              Create your free profile to connect with verified jobs and smart
              AI matching today.
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
