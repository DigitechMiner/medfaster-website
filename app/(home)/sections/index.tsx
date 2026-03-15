"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";
import { Heading } from "@/components/ui/heading";
import { Paragraph, ResponsiveParagraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import { ArrowRight, Calendar } from "lucide-react";
import { COMPANY_LOGOS, AI_FEATURES, APP_FEATURES } from "@/utils/constant";

// Company Logos Section
export function CompanyLogos() {
  const logos = COMPANY_LOGOS;
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <Section padding={false} className="overflow-hidden">
      <div className="flex items-center animate-scroll">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 md:p-8 lg:p-16 flex-shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={100}
              // ↓ smaller on mobile, normal on md+
              className="object-contain w-14 h-14 md:w-20 md:h-20 lg:w-[100px] lg:h-[100px] hover:opacity-80 transition-opacity duration-300"
              quality={100}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </Section>
  );
}

// AI Helps Section
export function AIHelpsSection() {
  const features = AI_FEATURES;

  return (
    <Section backgroundColor="bg-white">
      <div className="mb-8 md:mb-12">
        {/* ↓ text-2xl on mobile, scales up */}
        <Heading as="h2" size="md" className="text-[#252B37] mb-4 text-2xl md:text-3xl lg:text-4xl">
          <span className="text-[#F3651B] font-extrabold">Intelligent AI</span>
          {", Working Medical Professionals & Medical Organisations"}
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl text-sm md:text-base">
          Our advanced AI optimizes every step of the healthcare staffing
          process, delivering unparalleled efficiency and precision for everyone.
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            className="bg-[#FAFAFA] p-3 sm:p-4 rounded-lg"
            title={feature.title}
            description={feature.description}
            visual={{ type: "image", content: feature.icon }}
          />
        ))}
      </div>

      <CustomButton className="w-full sm:w-auto" rightIcon={ArrowRight}>
        AI Recruiter Features
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
        <Heading as="h2" size="md" className="text-[#252B37] mb-4 text-2xl md:text-3xl lg:text-4xl">
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
          <Heading
            as="h5"
            size="sm"
            className="!text-xl md:!text-2xl lg:!text-3xl font-semibold mb-4 md:mb-6"
          >
            <span className="text-[#F3651B]">Download</span>{" "}
            <span className="text-[#252B37]">the App</span>
          </Heading>
          
          <div className="flex gap-3 md:gap-4 justify-start items-center mt-4">
            <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex-shrink-0">
              <Image
                src="/images/ui/qr-code-1.png"
                alt="QR Code for App Store"
                width={180}
                height={180}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex-shrink-0">
              <Image
                src="/images/ui/qr-code-2.png"
                alt="QR Code for Google Play"
                width={180}
                height={180}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Verified Section
export function VerifiedSection() {
  return (
    <Section
      padding={false}
      backgroundColor="bg-neutral-100"
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8"
    >
      <Section className="flex items-start w-full">
        <div className="space-y-4 font-[500]">
          <Heading
            as="h2"
            size="md"
            // ↓ tighter leading on mobile, break only on lg+
            className="text-[#252B37] leading-snug text-2xl md:text-3xl lg:text-4xl"
          >
            Medical Professional will earn a{" "}
            <span className="text-[#F3651B] font-bold">Verified</span> badge to
            get hired faster and get snooze{" "}
            <span className="text-[#F3651B] font-bold">Faster</span>
          </Heading>

          <ResponsiveParagraph
            size="sm"
            className="text-[#717680] leading-relaxed font-[400]"
          >
            Once you complete onboarding and pre-screening, you&apos;ll receive
            an AI-generated scorecard. Recruiters see only verified candidates —
            so you stand out instantly.
          </ResponsiveParagraph>
        </div>
      </Section>

      <Section
        padding={false}
        // ↓ center on mobile, right-align on lg
        className="flex overflow-hidden items-end justify-center lg:justify-end pt-6 lg:pt-0"
      >
        <div className="relative mx-auto max-w-xs md:max-w-sm lg:max-w-2xl w-full">
          <Image
            src="/images/ui/verified-card.svg"
            alt="Verified score card showing Dr. Noah Liam profile"
            width={500}
            height={1000}
            className="object-contain w-full"
            priority
          />
        </div>
      </Section>
    </Section>
  );
}

// Next Career Section
export function NextCareer() {
  const cardStyle = {
    backgroundImage: "url(/images/patterns/orange-pattern-2.png)",
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
            <Heading
              as="h1"
              size="md"
              className="text-white font-bold leading-tight text-2xl md:text-3xl lg:text-4xl"
            >
              Your Next Career Move Starts Here.
            </Heading>

            <ResponsiveParagraph size="base" className="text-white/90 leading-relaxed">
              Create your free profile to connect with verified jobs and smart
              AI matching today.
            </ResponsiveParagraph>

            <div className="pt-2">
              <CustomButton
                className="bg-white text-[#F3651B] hover:bg-gray-100 w-full sm:w-auto"
                rightIcon={ArrowRight}
                iconClassName="text-white"
                iconContainerClassName="bg-[#F3651B]"
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
            <Heading
              as="h1"
              size="md"
              className="text-white font-bold leading-tight text-2xl md:text-3xl lg:text-4xl"
            >
              Start Hiring Smarter Today
            </Heading>

            <ResponsiveParagraph size="base" className="text-white/90 leading-relaxed">
              Access verified healthcare talent in minutes with our AI-powered
              recruitment solution.
            </ResponsiveParagraph>

            {/* ↓ stack buttons on mobile, row on sm+ */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <CustomButton
                className="bg-white text-[#F3651B] hover:bg-gray-100 w-full sm:w-auto"
                rightIcon={ArrowRight}
                iconClassName="text-white"
                iconContainerClassName="bg-[#F3651B]"
                onClick={() => window.open("https://recruiter.keraeva.com/registration")}
              >
                Post a Job
              </CustomButton>

              <CustomButton
                className="bg-white text-[#F3651B] hover:bg-gray-100 w-full sm:w-auto"
                rightIcon={Calendar}
                iconClassName="text-white"
                iconContainerClassName="bg-[#F3651B]"
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
