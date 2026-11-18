"use client";

import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph } from "@/components/ui/paragraph";
import { CtaButton } from "@/components/ui/cta-button";
import { AccentText } from "@/components/ui/accent-text";
import type { AboutContent } from "@/content/pages/about";

export function CTASection({ content }: { content: AboutContent["closingCta"] }) {
  return (
    <Section
      backgroundColor="bg-[#F3651B]"
      style={{
        backgroundImage: "url(/images/patterns/orange-pattern-2.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Heading as="h2" size="md" className="text-white mb-4">
        <AccentText text={content.heading} accentClassName="text-white" />
      </Heading>

      <ResponsiveParagraph size="base" className="text-white/90 mb-8">
        {content.body}
      </ResponsiveParagraph>

      <CtaButton cta={content.cta} variant="inverse" rightIcon={ArrowRight} size="lg" />
    </Section>
  );
}
