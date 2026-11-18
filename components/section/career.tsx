"use client";

import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { CtaButton } from "@/components/ui/cta-button";
import { AccentText } from "@/components/ui/accent-text";
import type { CAREERS_DEFAULTS } from "@/content/pages/careers";
import { ArrowRight } from "lucide-react";
import Image from "@/components/ui/image";

export function CareerCTASection({ content }: { content: (typeof CAREERS_DEFAULTS)["careerCta"] }) {
  return (
    <Section
      backgroundColor="bg-[#F3651B]"
      padding={false}
      style={{
        backgroundImage: "url(/images/patterns/orange-pattern-2.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
      }}
      className="overflow-hidden"
    >

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-stretch min-h-96 ">
          <Section backgroundColor="bg-transparent" className="lg:col-span-2">
            <Heading as="h2" size="md" className="text-white mb-4">
              <AccentText text={content.heading} accentClassName="text-white underline decoration-white/60" />
            </Heading>

            <Paragraph
              size="base"
              className="text-white/90 mb-8 leading-relaxed"
            >
              {content.body}
            </Paragraph>

            <CtaButton cta={content.cta} variant="inverse" rightIcon={ArrowRight} size="lg" />
          </Section>

          <div className="relative w-full h-96 lg:h-auto lg:col-span-1">
            <Image
              src={content.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain object-center overflow-hidden"
            />
          </div>
        </div>

    </Section>
  );
}

