"use client";

import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph } from "@/components/ui/paragraph";
import { CtaButton } from "@/components/ui/cta-button";
import { Card } from "@/components/ui/card";
import { AccentText } from "@/components/ui/accent-text";
import { iconFor } from "@/lib/cms/icons";
import type { AboutContent } from "@/content/pages/about";

export function PurposeSection({ content }: { content: AboutContent["purpose"] }) {
  return (
    <Section>
      <div className="mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          <AccentText text={content.heading} />
        </Heading>
        <ResponsiveParagraph size="base" className="text-[#717680]">
          {content.body}
        </ResponsiveParagraph>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 xl:gap-10 mb-8">
        {content.cards.map((card, index) => (
          <Card key={index} icon={iconFor(card.icon)} title={card.title} description={card.description} />
        ))}
      </div>

      <CtaButton cta={content.cta} rightIcon={ArrowRight} size="md" className="my-0" />
    </Section>
  );
}
