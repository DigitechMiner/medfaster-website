import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph, Paragraph } from "@/components/ui/paragraph";
import { Heart, Shield, Users, Zap, Stethoscope, Globe } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";
import { ChevronRight } from "lucide-react";

// Mission Section
export function MissionSection() {
  const MISSION_FEATURES = [
    {
      icon: Heart,
      title: "Human-Centric",
      description: "People first in every decision we make",
    },
    {
      icon: Zap,
      title: "AI-Powered",
      description: "Smart technology driving results",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Your data is protected always",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Building stronger healthcare teams",
    },
  ];

  return (
    <Section className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Heading as="h2" size="md" className="text-[#252B37] mb-4">
            Where{" "}
            <span className="text-[#F4781B] font-bold">
              AI-Powered Hiring
            </span>{" "}
            Meets Human-Centric Care
          </Heading>
          <ResponsiveParagraph
            size="base"
            className="text-[#717680] max-w-3xl mx-auto"
          >
            We believe technology should enhance human connection, not replace
            it. Our mission is to make healthcare hiring faster, fairer, and
            more fulfilling for everyone.
          </ResponsiveParagraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MISSION_FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-[#F4781B]" />
                </div>
                <Paragraph size="sm" weight="semibold" className="text-[#252B37]">
                  {feature.title}
                </Paragraph>
                <Paragraph size="xs" className="text-[#717680]">
                  {feature.description}
                </Paragraph>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export function PurposeSection() {
  return (
    <Section className="bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Heading as="h2" size="md" className="text-[#252B37] mb-4">
            Driving Our <span className="text-[#F4781B]">Purpose:</span> The{" "}
            <span className="text-[#F4781B]">Mission</span> at Our Core
          </Heading>
          <ResponsiveParagraph size="base" className="text-[#717680] max-w-4xl">
            To revolutionize healthcare accessibility through intelligent,
            real-time staffing and service delivery — connecting hospitals,
            medical professionals, and patients on one transparent, AI-driven
            platform.
          </ResponsiveParagraph>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Mission Card */}
          <div className="bg-white rounded-lg p-8 space-y-6 border-2">
            <div className="flex flex-col items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-22 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <img 
                    src="/images/icons/sthetoscope.svg" 
                    alt="Stethoscope"
                    className="w-22 h-22"
                  />
                </div>
              </div>
              <div className="mt-6">
                <Paragraph size="base" weight="semibold" className="text-[#252B37]">
                  Our Mission
                </Paragraph>
              </div>
            </div>
            <Paragraph size="sm" className="text-[#717680] leading-relaxed -mt-4">
              We aim to eliminate staffing shortages, reduce patient waiting
              time, and empower healthcare providers to deliver faster, better,
              and smarter care.
            </Paragraph>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-lg p-8 space-y-6 border-2">
            <div className="flex flex-col items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-22 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <img 
                    src="/images/icons/globe.svg" 
                    alt="Globe"
                    className="w-22 h-22"
                  />
                </div>
              </div>
              <div className="mt-6">
                <Paragraph size="base" weight="semibold" className="text-[#252B37]">
                  Our Vision
                </Paragraph>
              </div>
            </div>
            <Paragraph size="sm" className="text-[#717680] leading-relaxed -mt-4">
              To become the world's most trusted digital healthcare ecosystem—a
              future where no patient waits, no hospital runs short-staffed, and
              every medical professional works at their full potential.
            </Paragraph>
          </div>
        </div>

        {/* Learn More Button */}
        <CustomButton
          rightIcon={ChevronRight}
          size="md"
          className="my-0"
        >
          Learn More
        </CustomButton>
      </div>
    </Section>
  );
}
