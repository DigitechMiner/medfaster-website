"use client";

import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph } from "@/components/ui/paragraph";
import { ActionButton } from "@/components/ui/action-button";
import Image from "next/image";
import { ArrowRight, Briefcase, ShieldCheck, UserPlus } from "lucide-react";

const STEPS = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description:
      "Upload your resume and certificates, and and our AI helps fill in your profile details.",
  },
  {
    icon: ShieldCheck,
    title: "Verify & Pre-Screen",
    description:
      "Get your credentials verified and complete a short AI interview to showcase your skills to top employers.",
  },
  {
    icon: Briefcase,
    title: "Start Working",
    description:
      "Apply for nearby shifts or full-time roles and get paid directly and reliably through the platform.",
  },
];

export function ThreeStepsSection() {
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
      {/* Content */}
      <div className="relative">
        {/* Top Text Section */}
        <div className=" mb-8">
          <Heading className="text-white mb-4">
            Get Your Next Healthcare Job in 3 Easy Steps
          </Heading>
          <ResponsiveParagraph size="base" className="text-white max-w-2xl">
            Our AI-driven, step-by-step approach to get you verified and hired,
            faster.
          </ResponsiveParagraph>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-left">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="/images/hero/get-hired.webp"
                alt="Healthcare professional assisting patient"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className="order-1 lg:order-2 text-white">
            <div className="space-y-6 mb-8">
              {STEPS.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 border-b border-white/20 pb-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-opacity-20 rounded-full flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-white" strokeWidth={1.5} aria-hidden="true" />
                  </div>

                  <div>
                    <Heading
                      as="h3"
                      size="xs"
                      weight="medium"
                      className="text-white mb-2"
                    >
                      {step.title}
                    </Heading>
                    <ResponsiveParagraph
                      size="sm"
                      className="text-white text-opacity-90 leading-relaxed"
                    >
                      {step.description}
                    </ResponsiveParagraph>
                  </div>
                </div>
              ))}
            </div>

            <ActionButton
            variant="inverse"
              rightIcon={ArrowRight}
             modal="get-app">
              Get Started
            </ActionButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
