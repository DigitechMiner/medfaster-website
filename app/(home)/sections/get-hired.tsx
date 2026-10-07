"use client";

import { CustomButton } from "@/components/ui/custom-button";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph } from "@/components/ui/paragraph";
import { PLATFORM_JOURNEY } from "@/utils/constant";
import { useModalStore } from "@/stores/modalStore";

export default function GetHiredSection() {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <Section
      backgroundColor="bg-[#F3651B]"
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
            From the first profile to the final payment, KeRaeva connects every
            step of healthcare hiring and staffing for professionals and
            organizations alike.
          </ResponsiveParagraph>
        </div>

        {/* Journey Cards - swipe on mobile, grid from md */}
        <ol className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
          {PLATFORM_JOURNEY.map((step, index) => (
            <li
              key={step.title}
              className="bg-white rounded-2xl p-6 flex flex-col flex-shrink-0 w-[75%] sm:w-[45%] md:w-auto snap-start"
            >
              <span className="text-sm font-semibold text-[#F3651B] mb-2">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Heading
                as="h3"
                size="xs"
                weight="medium"
                className="text-[#252B37] mb-3"
              >
                {step.title}
              </Heading>
              <ResponsiveParagraph
                size="sm"
                className="text-[#717680] leading-relaxed"
              >
                {step.description}
              </ResponsiveParagraph>
            </li>
          ))}
        </ol>

        {/* Call-to-Action Button */}
        <CustomButton
            variant="inverse"
          rightIcon={ArrowRight}
          onClick={() => openModal("get-started")}
        >
          Get Started
        </CustomButton>
      </div>
    </Section>
  );
}
