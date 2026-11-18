"use client";

import { CtaButton } from "@/components/ui/cta-button";
import { AccentText } from "@/components/ui/accent-text";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph } from "@/components/ui/paragraph";
import type { HOME_DEFAULTS } from "@/content/pages/home";

export default function GetHiredSection({ content }: { content: (typeof HOME_DEFAULTS)["journey"] }) {
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
        <div className="mb-8">
          <Heading className="text-white mb-4">
            <AccentText text={content.heading} accentClassName="text-white underline decoration-white/60" />
          </Heading>
          <ResponsiveParagraph size="base" className="text-white max-w-2xl">
            {content.body}
          </ResponsiveParagraph>
        </div>

        {/* Journey Cards - swipe on mobile, grid from md */}
        <ol className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
          {content.steps.map((step, index) => (
            <li
              key={`${index}-${step.title}`}
              className="bg-white rounded-2xl p-6 flex flex-col flex-shrink-0 w-[75%] sm:w-[45%] md:w-auto snap-start"
            >
              <span className="text-sm font-semibold text-[#C44408] mb-2">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Heading as="h3" size="xs" weight="medium" className="text-[#252B37] mb-3">
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
        <CtaButton cta={content.cta} variant="inverse" rightIcon={ArrowRight} />
      </div>
    </Section>
  );
}
