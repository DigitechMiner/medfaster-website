"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";
import { Heading } from "@/components/ui/heading";
import { Paragraph, ResponsiveParagraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import { ArrowRight, Calendar } from "lucide-react";
import { COMPANY_LOGOS, AI_FEATURES, APP_FEATURES } from "@/lib/constants";

// Company Logos Section
export function CompanyLogos() {
  const logos = COMPANY_LOGOS;
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <Section padding={false} className="overflow-hidden">
      <div className="flex items-center animate-scroll ">
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
              className="object-contain hover:opacity-80 transition-opacity duration-300"
              quality={100}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
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
      <div className="mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          <span className="text-[#F4781B] font-extrabold">Intelligent AI</span>
          {", Working Medical Professionals & Medical Organisations"}
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">
          Our advanced AI optimizes every step of the healthcare staffing
          process, delivering unparalleled efficiency and precision for
          everyone.
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            className="bg-[#FAFAFA] p-2 sm:p-4 rounded-lg"
            title={feature.title}
            description={feature.description}
            visual={{
              type: "image",
              content: feature.icon,
            }}
          />
        ))}
      </div>

      <CustomButton className="mb-0" rightIcon={ArrowRight}>
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
      <div className="mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          Manage Your{" "}
          <span className="text-[#F4781B]">
            Entire Career & Hiring Journey,
          </span>{" "}
          Mobile-First
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">
          From secure document management to full-suite dashboard functionality,
          our mobile app puts everything you need at your fingertips.
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            imageFullWidth={true}
            imageCenter={true}
            visual={{
              type: "image",
              content: feature.screen,
              alt: feature.title,
            }}
          />
        ))}

        {/* Download the App Section */}
        <div className="flex flex-col border-b border-[#E9EAEB]">
          <Heading
            as="h5"
            size="sm"
            className="!text-2xl md:!text-2xl lg:!text-3xl font-semibold mb-6"
          >
            <span className="text-[#F4781B]">Download</span>{" "}
            <span className="text-[#252B37]">the App</span>
          </Heading>

          <div className="flex flex-1 flex-col gap-6 w-full lg:w-auto">
            {/* QR Codes */}
            <div className="flex gap-4 justify-center items-center">
              <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0">
                <Image
                  src="/images/ui/qr-code-1.png"
                  alt="QR Code for App Store"
                  width={180}
                  height={180}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0">
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
      className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 xl:gap-8"
    >
      <Section className="flex items-start w-full">
        <div className="space-y-4 font-[500]">
          <Heading as="h2" size="md" className="text-[#252B37] leading-tight">
            Medical Professional will
            <br />
            earn a <span className="text-[#F4781B] font-bold">
              Verified
            </span>{" "}
            badge to
            <br />
            get hired faster and get snooze{" "}
            <span className="text-[#F4781B] font-bold">Faster</span>
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
        className="flex overflow-hidden items-end justify-end"
      >
        <div className="relative mx-auto max-w-2xl">
          <Image
            src="/images/ui/verified-card.png"
            alt="Verified score card showing Dr. Noah Liam profile"
            width={500}
            height={1000}
            className="object-contain"
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
    backgroundBlendMode: "overlay",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Section
      backgroundColor="bg-neutral-100"
      className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 xl:gap-8"
      padding={false}
    >
      {/* Left Card - Job Seeker */}
      <Section backgroundColor="bg-[#F4781B]" padding={false} style={cardStyle}>
        <div className="p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col min-h-[300px] md:min-h-[400px]">
          <div className="space-y-4 md:space-y-6">
            <Heading
              as="h1"
              size="md"
              className="text-white font-bold leading-tight"
            >
              Your Next Career Move Starts Here.
            </Heading>

            <ResponsiveParagraph
              size="base"
              className="text-white/90 leading-relaxed"
            >
              Create your free profile to connect with verified jobs and smart
              AI matching today.
            </ResponsiveParagraph>

            <div className="pt-2">
              <CustomButton
                className="bg-white text-[#F4781B] hover:bg-gray-100"
                rightIcon={ArrowRight}
                iconClassName="text-white"
                iconContainerClassName="bg-[#F4781B]"
              >
                Create Free Profile
              </CustomButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Right Card - Employer */}
      <Section backgroundColor="bg-[#F4781B]" padding={false} style={cardStyle}>
        <div className="p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col min-h-[300px] md:min-h-[400px]">
          <div className="space-y-4 md:space-y-6">
            <Heading
              as="h1"
              size="md"
              className="text-white font-bold leading-tight"
            >
              Start Hiring Smarter Today
            </Heading>

            <ResponsiveParagraph
              size="base"
              className="text-white/90 leading-relaxed"
            >
              Access verified healthcare talent in minutes with our AI-powered
              recruitment solution.
            </ResponsiveParagraph>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <CustomButton
                className="bg-white text-[#F4781B] hover:bg-gray-100"
                rightIcon={ArrowRight}
                iconClassName="text-white"
                iconContainerClassName="bg-[#F4781B]"
              >
                Post a Job
              </CustomButton>

              <CustomButton
                className="bg-white text-[#F4781B] hover:bg-gray-100"
                rightIcon={Calendar}
                iconClassName="text-white"
                iconContainerClassName="bg-[#F4781B]"
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
