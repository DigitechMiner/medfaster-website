"use client";

import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { ActionButton } from "@/components/ui/action-button";
import { ArrowRight } from "lucide-react";
import Image from "@/components/ui/image";

export function CareerCTASection() {
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
              Where Your Career Goals<br /> Meet Real Opportunity
            </Heading>

            <Paragraph
              size="base"
              className="text-white/90 mb-8 leading-relaxed"
            >
              Whether you&apos;re an ambitious professional seeking your next role or
              a healthcare institution building your dream team, we connect you
              with unparalleled opportunities and talent.
            </Paragraph>

            <ActionButton
            variant="inverse"
              rightIcon={ArrowRight}
              size="lg"
             modal="get-started">
              Get Started Now
            </ActionButton>
          </Section>

          <div className="relative w-full h-96 lg:h-auto lg:col-span-1">
            <Image
              src="/images/team/girl-with-specs.webp"
              alt="Career opportunity"
              fill
              className="object-contain object-center overflow-hidden"
            />
          </div>
        </div>

    </Section>
  );
}

