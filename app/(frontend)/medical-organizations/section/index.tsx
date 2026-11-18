"use client";

import Image from "@/components/ui/image";
import { CustomButton } from "@/components/ui/custom-button";
import { ArrowRight, Wand2, ShieldCheck, Sparkles, Mic, ClipboardList, Send, Users, Repeat, MessageSquare, ClipboardCheck, FileCheck2, Calendar } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph, ResponsiveParagraph } from "@/components/ui/paragraph";
import { FeatureCard } from "@/components/ui/feature-card";
import { hiringSteps, dashboardFeatures } from "@/utils/constant/landingPage";
import { RECRUITER_REGISTRATION_URL } from "@/utils/constant";
import { useModalStore } from "@/stores/modalStore";

// Hero Section
export function HeroSection() {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <Section className="!pb-0">
      {/* Two Grid Layout - Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* First Grid Section - Left 50% */}
        <div className="flex flex-col justify-between h-full space-y-8">
          {/* Main Heading */}
          <div className="text-left">
            <Heading as="h1" size="lg" className="text-[#252B37] mb-6" weight="normal">
              Build Your Healthcare Workforce —
              <span className="text-[#F3651B] font-medium">
                {" "}
                Faster & Smarter
              </span>
            </Heading>
          </div>
        </div>
        {/* Second Grid Section - Right 50% */}
        <div className="flex flex-col justify-start space-y-6">
          {/* Description Text */}
          <p className="text-[#252B37] text-base lg:text-lg leading-relaxed">
            AI-powered hiring, urgent staffing and shift management for
            Canadian hospitals, clinics and care organizations. Find
            pre-screened, credentialed professionals, review AI interview
            scorecards and fill shifts from one platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <CustomButton
              rightIcon={ArrowRight}
              onClick={() => openModal("request-demo")}
            >
              Request Demo
            </CustomButton>
            <CustomButton
            variant="muted"
              onClick={() => window.open(RECRUITER_REGISTRATION_URL, "_blank")}
            >
              Post a Job
            </CustomButton>
          </div>

        </div>
      </div>
      <Section
        padding={false}
        className="flex overflow-hidden items-end justify-end "
      >
        <div className="relative mt-10 max-w-7xl mx-auto">
          <Image
            src="/img/dashboard/dashboard-hero.webp"
            alt="KeRaeva recruiter dashboard showing open jobs and a candidate pipeline"
            width={1200}
            height={600}
            className="object-contain"
            priority
          />
        </div>
      </Section>
    </Section>
  );
}

// Hired Section
export function HiredSection() {
  const steps = hiringSteps.map((s, idx) => ({
    icon: [Wand2, Sparkles, Mic, ClipboardList, ShieldCheck][idx] || ShieldCheck,
    ...s,
  }));

  return (
    <Section 
      backgroundColor="bg-[#F3651B]"
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url(/images/patterns/orange-pattern-1.webp)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Content */}
      <div className="relative">
        {/* Top Text Section */}
        <div className=" mb-8">
            <Heading className="text-white mb-4">
              Smarter, Faster, and More Reliable Hiring
            </Heading>
          <ResponsiveParagraph size="base" className="text-white max-w-2xl">
            Our AI-powered platform automates screening and matching, connecting you with top-tier talent in record time
          </ResponsiveParagraph>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-left">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-[300px] lg:h-[700px]">
              <Image
                src="/img/hero/doctor-with-ipad.webp"
                alt="A healthcare manager reviewing a staffing dashboard on a tablet"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className="order-1 lg:order-2 text-white">
            <div className="space-y-6 mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 border-b border-white/20 pb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-opacity-20 rounded-full flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-white" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div>
                    <Heading as="h3" size="xs" weight="medium" className="text-white mb-2">{step.title}</Heading>
                    <ResponsiveParagraph size="sm" className="text-white text-opacity-90 leading-relaxed">
                      {step.description}
                    </ResponsiveParagraph>
                  </div>
                </div>
              ))}
            </div>

            <CustomButton
            variant="inverse"
              rightIcon={ArrowRight}
              onClick={() => window.open(RECRUITER_REGISTRATION_URL, "_blank")}
            >
              Post a job
            </CustomButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

// One Dashboard Section
export function OneDashboard() {
  const features = dashboardFeatures;
  return (
    <Section>
      {/* Header */}
      <div className=" mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          Everything You Need, in{" "}
          <span className="text-[#F3651B]">One Dashboard</span>{" "}
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">
          Post jobs, review AI-assessed candidates, schedule interviews and
          track hiring progress from one recruiter dashboard.
        </Paragraph>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            imageFullWidth={true}
            visual={{
              type: "image",
              content: feature.screen,
              alt: feature.title,
            }}
          />
        ))}
      </div>
    </Section>
  );
}

// Staffing Capabilities Section
export function StaffingCapabilities() {
  const capabilities = [
    {
      icon: Send,
      title: "Job Invites",
      description: "Invite professionals directly to apply for your open roles.",
    },
    {
      icon: Users,
      title: "In-House Staff Pool",
      description: "Invite your existing staff to your organization's in-house pool on KeRaeva.",
    },
    {
      icon: Repeat,
      title: "Rotation Schedules",
      description: "Post roles with rotation schedules so professionals see the pattern before they apply.",
    },
    {
      icon: MessageSquare,
      title: "Direct Messaging",
      description: "Chat with candidates and professionals directly from the platform.",
    },
    {
      icon: ClipboardCheck,
      title: "Shift Tracking",
      description: "Follow shifts from scheduled to completed, with check-in and attendance built in.",
    },
    {
      icon: FileCheck2,
      title: "Credentials on Every Profile",
      description: "Review uploaded licences, certifications and documents alongside each candidate.",
    },
  ];

  return (
    <Section>
      <div className="mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          Built for <span className="text-[#F3651B]">Healthcare Staffing</span>
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">
          Beyond hiring, KeRaeva gives your team the tools to staff shifts and
          keep your workforce connected.
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {capabilities.map((capability) => (
          <FeatureCard
            key={capability.title}
            title={capability.title}
            description={capability.description}
            visual={{ type: "icon", content: capability.icon }}
          />
        ))}
      </div>
    </Section>
  );
}

// Data Driven Hiring Section
export function DataDrivenHiring() {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <Section>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        
        {/* Left Content */}
        <div className="flex-1 max-w-3xl">
          <Heading className="text-[#252B37] mb-6">
            Make <span className="text-[#F3651B]">Data-Driven</span> Hiring Decisions
          </Heading>
          <Paragraph className="text-[#717680] leading-relaxed">
            See active jobs, candidates, AI matches, interviews and hires at a
            glance, so you always know where hiring stands and where to focus next.
          </Paragraph>
        </div>

        {/* Right Button */}
        <div className="flex-shrink-0">
          <CustomButton
            size="lg"
            rightIcon={ArrowRight}
            onClick={() => openModal("request-demo")}
          >
            Request Demo
          </CustomButton>
        </div>
      </div>
    </Section>
  );
}

// Hire With Confidence Section
export function HireWithConfidence() {
  return (
    <Section>
      {/* Header - Title and Description */}
      <div className="mb-12 lg:mb-16">
        <Heading className="text-[#252B37] mb-6">
          Hire with <span className="text-[#F3651B]">Confidence</span>
        </Heading>
        <Paragraph className="text-[#717680] leading-relaxed max-w-3xl">
          Every candidate profile brings together uploaded documents,
          verification status and AI interview results, so you can decide
          with the full picture.
        </Paragraph>
      </div>

      {/* Main Content Image */}
      <div className="w-full max-w-7xl mx-auto">
        <Image
          src="/img/features/confidence.webp"
          alt="Candidate profile with uploaded documents, AI interview scores and strengths"
          width={1200}
          height={600}
          className="w-full h-auto rounded-2xl"
        />
      </div>
    </Section>
  );
}

// Start Hiring Section
export function StartHiring() {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <Section 
      backgroundColor="bg-[#F3651B]"
      padding={false}
      style={{
        backgroundImage: "url(/images/patterns/orange-pattern-2.webp)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] ">
        {/* Left Side - Content */}
        <div className="p-4 md:p-8 lg:p-16 flex flex-col gap-6 justify-center">
            <Heading as="h2" size="md" className="text-white">
             Start Smart Hiring Today
            </Heading>

            <ResponsiveParagraph size="base" className="text-white/90 max-w-xl leading-relaxed">
              Hire verified healthcare professionals and fill urgent shifts, all
              in one AI-powered platform.
            </ResponsiveParagraph>

            {/* Buttons */}
            <div className="flex flex-wrap md:flex-row ">
              <CustomButton
            variant="inverse"
                className="mr-2 md:mr-4"
                rightIcon={ArrowRight}
                onClick={() => window.open(RECRUITER_REGISTRATION_URL, "_blank")}
              >
                Post a Job
              </CustomButton>

              <CustomButton
            variant="inverse"
                rightIcon={Calendar}
                onClick={() => openModal("request-demo")}
              >
                Schedule Demo
              </CustomButton>
           
          </div>
        </div>

        {/* Right Side - Nurse Image */}
        <div className="relative flex items-end justify-center lg:justify-end overflow-hidden md:block">
          <div className="relative w-full h-[250px] md:h-[300px] lg:h-[400px]">
            <Image
              src="/img/people/nurse-02.webp"
              alt="Healthcare professional"
              fill
              className="object-contain object-bottom lg:object-right-bottom"
              sizes="(max-width: 768px) 33vw, 50vw"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

