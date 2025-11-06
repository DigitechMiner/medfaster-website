"use client";

import { CustomButton } from "@/components/ui/custom-button";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph } from "@/components/ui/paragraph";

const featureCards = [
  {
    title: "Connect Your Profile",
    description: "Professionals upload credentials, while organizations share needs.",
  },
  {
    title: "Smart AI Matching",
    description: "Our AI finds ideal job/candidate fits based on skills, availability, and compliance.",
  },
  {
    title: "Achieve Your Goals",
    description: "Professionals start working, organizations make quality hires - seamlessly.",
  },
];

export default function GetHiredSection() {
  return (
    <Section
      backgroundColor="bg-[#F4781B]"
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url(/images/patterns/orange-pattern-1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="relative">
        {/* Top Text Section */}
        <div className="mb-8">
          <Heading className="text-white mb-4">
            A Simpler Path To Success For Everyone
          </Heading>
          <ResponsiveParagraph size="base" className="text-white max-w-2xl">
            Whether you&apos;re finding a job or filling a role, our streamlined process uses smart technology to get you results faster.
          </ResponsiveParagraph>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 flex flex-col"
            >
              <Heading
                as="h3"
                size="xs"
                weight="medium"
                className="text-[#252B37] mb-3"
              >
                {card.title}
              </Heading>
              <ResponsiveParagraph
                size="sm"
                className="text-[#717680] leading-relaxed"
              >
                {card.description}
              </ResponsiveParagraph>
            </div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <CustomButton
          className="bg-white text-black hover:bg-gray-100"
          rightIcon={ArrowRight}
          iconClassName="text-white"
          iconContainerClassName="bg-[#F4781B]"
        >
          Get Started
        </CustomButton>
      </div>
    </Section>
  );
}
