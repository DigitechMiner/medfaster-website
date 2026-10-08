"use client";

import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph } from "@/components/ui/paragraph";
import { ActionButton } from "@/components/ui/action-button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
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
      <Heading as="h2" size="md" className="text-white mb-4 leading-tight">
        Find Your Next Hire. Or Your Next Job.
      </Heading>

      <ResponsiveParagraph size="base" className="text-white/90 mb-8">
        Join KeRaeva, the AI-powered healthcare workforce platform built for Canada.
        Get started in minutes.
      </ResponsiveParagraph>

      {/* CTA Button */}
      <ActionButton
            variant="inverse"
        rightIcon={ArrowRight}
        size="lg"
       modal="get-started">
        Get Started Now
      </ActionButton>
    </Section>
  );
}
