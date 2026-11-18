"use client";

import { CtaButton } from "@/components/ui/cta-button";
import { AccentText, stripAccents } from "@/components/ui/accent-text";
import { ArrowRight } from "lucide-react";
import Image from "@/components/ui/image";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph } from "@/components/ui/paragraph";
import type { HOME_DEFAULTS } from "@/content/pages/home";

export default function HeroSection({ content }: { content: (typeof HOME_DEFAULTS)["hero"] }) {
  return (
    <Section>
      <div className="flex flex-col items-center text-center space-y-8">
        {/* Main Heading */}
        <div className="max-w-4xl">
          <Heading as="h1" size="lg" className="text-[#252B37] mb-6" weight="normal">
            <AccentText text={content.heading} accentClassName="font-medium" />
          </Heading>
        </div>

        {/* Sub-text */}
        <div className="max-w-2xl">
          <ResponsiveParagraph size="base" className="text-[#252B37]">
            {content.body}
          </ResponsiveParagraph>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CtaButton cta={content.primaryCta} rightIcon={ArrowRight} size="lg" />
          <CtaButton cta={content.secondaryCta} size="lg" variant="muted" />
        </div>

        {/* Hero Image (photo without baked-in statistics) */}
        <div className="relative w-full mt-6">
          <div className="relative w-full rounded-lg overflow-hidden">
            <Image
              src={content.image}
              alt={stripAccents(content.imageAlt)}
              width={2400}
              height={2000}
              className="w-full h-auto aspect-[4/3] sm:aspect-[1264/640] object-cover object-[center_30%] rounded-lg"
              sizes="(max-width: 1440px) 100vw, 1280px"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
