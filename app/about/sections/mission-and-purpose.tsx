import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph, Paragraph } from "@/components/ui/paragraph";
import { Globe, Heart, Shield, Stethoscope, Users, Zap, ArrowRight } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";
import { Card } from "@/components/ui/card";
import { IconChip } from "@/components/ui/icon-chip";

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
      title: "Privacy-Minded",
      description: "Your information is handled with care",
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
            <span className="text-[#F3651B] font-bold">AI-Powered Hiring</span>{" "}
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
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-3"
              >
                <IconChip icon={Icon} size="lg" />
                <Paragraph
                  size="sm"
                  weight="semibold"
                  className="text-[#252B37]"
                >
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
  const MISSION_VISION_CARDS = [
    {
      icon: Stethoscope,
      title: "Our Mission",
      description:
        "We aim to reduce staffing shortages and help healthcare organizations and professionals work together faster and more reliably.",
    },
    {
      icon: Globe,
      title: "Our Vision",
      description:
        "To become the world's most trusted digital healthcare ecosystem—a future where no patient waits, no hospital runs short-staffed, and every medical professional works at their full potential.",
    },
  ];

  return (
    <Section>
      <div className="mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          Driving Our <span className="text-[#F3651B]">Purpose:</span> The{" "}
          <span className="text-[#F3651B]">Mission</span> at Our Core
        </Heading>
        <ResponsiveParagraph size="base" className="text-[#717680]">
          To make healthcare staffing faster and more reliable through
          intelligent, real-time matching, connecting healthcare organizations
          and professionals on one transparent, AI-driven platform.
        </ResponsiveParagraph>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 xl:gap-10 mb-8">
        {MISSION_VISION_CARDS.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      {/* Learn More Button */}
      <CustomButton rightIcon={ArrowRight} size="md" className="my-0">
        Learn More
      </CustomButton>
    </Section>
  );
}
