"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";
import { Heading } from "@/components/ui/heading";
import { Paragraph, ResponsiveParagraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import { ArrowRight, Download } from "lucide-react";
import { 
  COMPANY_LOGOS, 
  AI_FEATURES, 
  APP_FEATURES 
} from "@/lib/constants";

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
    <Section>
      <div className=" mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          How{" "}
          <span className="text-[#F4781B] font-extrabold">AI Helps You</span>{" "}
          Get the Right Job Faster
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">
          Our intelligent platform works behind the scenes to help you get the right job, faster. Here&apos;s how:
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            visual={{
              type: "image",
              content: feature.icon
            }}
          />
        ))}
      </div>
    </Section>
  );
}

// All In One App Section
export function AllInOneSection() {
  const features = APP_FEATURES;

  return (
    <Section>
      <div className=" mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          Your{" "}
          <span className="text-[#F4781B]">All-in-One</span>{" "}
          Healthcare career App
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">
          From building a verified profile to managing your payments, everything you need is right here
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
              alt: feature.title
            }}
          />
        ))}
      </div>
    </Section>
  );
}

// Verified Section
export function VerifiedSection() {
  return (
    <Section padding={false} backgroundColor="bg-neutral-100" className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 xl:gap-8">
      <Section className="flex items-start w-full">
        <div className="space-y-4 font-[500]">
          <Heading as="h2" size="md" className="text-[#252B37] leading-tight">
            Earn a{" "}
            <span className="text-[#F4781B] font-bold">Verified</span>{" "}
            Score.
            <br />
            Get Hired Faster.
          </Heading>
          
          <ResponsiveParagraph size="sm" className="text-[#717680] leading-relaxed font-[400]">
            Once you complete onboarding and pre-screening, you&apos;ll receive an 
            AI-generated scorecard. Recruiters see only verified candidates — so 
            you stand out instantly.
          </ResponsiveParagraph>
        </div>
      </Section>
      
      <Section padding={false} className="flex overflow-hidden items-center justify-end">
        <div className="relative mx-auto max-w-2xl">
          <Image 
            src="/images/ui/verified-card.png" 
            alt="Verified score card showing Dr. Noah Liam profile"
            width={500}
            height={1000}
            className="object-contain"
            quality={100}
            priority
          />
        </div>
      </Section>
    </Section>
  );
}

// Career On The Go Section
export function CareerOnTheGo() {
  return (
    <Section
      backgroundColor="bg-neutral-100"
      className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 xl:gap-8"
      padding={false}
    >
      <Section>
        <div className="space-y-4">
          <Heading as="h2" size="md" className="text-[#252B37] leading-tight">
            Your Career, Your Control{" "}
            <span className="text-[#F4781B]">On the Go.</span>{" "}
          </Heading>

          <ResponsiveParagraph
            size="base"
            className="text-[#717680] leading-relaxed"
          >
            Get instant job alerts, apply with a single tap, and manage your
            entire job search — anytime, anywhere.
          </ResponsiveParagraph>
        </div>

        <div className="relative w-full max-w-2xl mx-auto flex justify-center items-start gap-4 md:gap-6 lg:gap-8 mt-10 overflow-hidden">
          <div className="w-[200px] h-[180px] md:h-[220px] overflow-hidden flex items-center">
            <Image
              src="/images/ui/qr-code-1.png"
              alt="QR Code 1"
              width={250}
              height={220}
              className="object-contain w-full h-full"
              quality={100}
              priority
            />
          </div>
          <div className="w-[200px] h-[180px] md:h-[220px] overflow-hidden flex items-center">
            <Image
              src="/images/ui/qr-code-2.png"
              alt="QR Code 2"
              width={250}
              height={220}
              className="object-contain w-full h-full"
              quality={100}
              priority
            />
          </div>
        </div>
      </Section>

      <Section
        padding={false}
        className="flex overflow-hidden items-end justify-end"
      >
        <div className="relative mt-10 max-w-2xl mx-auto">
          <Image
            src="/images/ui/mobile-screen.png"
            alt="Mobile app showing job search interface"
            width={500}
            height={900}
            className="object-contain"
            quality={100}
            priority
          />
        </div>
      </Section>
    </Section>
  );
}

// Next Career Section
export function NextCareer() {
  return (
    <Section 
      backgroundColor="bg-[#F4781B]"
      padding={false}
      style={{
        backgroundImage: "url(/images/patterns/orange-pattern-2.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: 'overlay',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div className="p-4 md:p-8 lg:p-16 flex flex-col justify-center">
          <div className="space-y-2 md:space-y-4 lg:space-y-6 xl:space-y-8">
            <Heading as="h1" size="md" className="text-white tracking-widest">
              Your Next Career Move Starts Here.
            </Heading>

            <ResponsiveParagraph size="base" className="text-white/90 max-w-xl leading-relaxed">
              Join now to get access to verified listings, instant matches, and
              a network that&apos;s invested in your success
            </ResponsiveParagraph>

            <div className="flex flex-col sm:flex-row sm:gap-4">
              <CustomButton
                className="bg-white text-black hover:bg-gray-100"
                rightIcon={ArrowRight}
                iconClassName="text-white"
                iconContainerClassName="bg-[#F4781B]"
              >
                Get Started
              </CustomButton>

              <CustomButton
                className="bg-white text-black hover:bg-gray-100"
                rightIcon={Download}
                iconClassName="text-white"
                iconContainerClassName="bg-[#F4781B]"
              >
                Download app
              </CustomButton>
            </div>
          </div>
        </div>

        <div className="relative flex items-end justify-center lg:justify-end overflow-hidden md:block">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-full">
            <Image
              src="/images/hero/nurse.png"
              alt="Healthcare professional"
              fill
              className="object-contain object-bottom lg:object-right-bottom"
              quality={100}
              priority
              sizes="(max-width: 768px) 33vw, 50vw"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

