"use client";

import Image from "@/components/ui/image";
import { CtaButton } from "@/components/ui/cta-button";
import { AccentText, stripAccents } from "@/components/ui/accent-text";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph } from "@/components/ui/paragraph";
import { iconFor } from "@/lib/cms/icons";

// Orange "steps" band with a photo, used on the Professionals and Organizations pages
export type StepsBandContent = {
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
  steps: { icon: string; title: string; description: string }[];
  cta: { label: string; link: string };
};

export default function GetHiredSection({ content, imageHeight = "h-[400px] lg:h-[500px]" }: { content: StepsBandContent; imageHeight?: string }) {
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
        <div className=" mb-8">
          <Heading className="text-white mb-4">
            <AccentText text={content.heading} accentClassName="text-white underline decoration-white/60" />
          </Heading>
          <ResponsiveParagraph size="base" className="text-white max-w-2xl">
            {content.body}
          </ResponsiveParagraph>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-left">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className={`relative ${imageHeight}`}>
              <Image
                src={content.image}
                alt={stripAccents(content.imageAlt)}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className="order-1 lg:order-2 text-white">
            <div className="space-y-6 mb-8">
              {content.steps.map((step, index) => {
                const Icon = iconFor(step.icon);
                return (
                  <div key={index} className="flex items-start gap-4 border-b border-white/20 pb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-opacity-20 rounded-full flex items-center justify-center">
                      <Icon className="w-10 h-10 text-white" strokeWidth={1.5} aria-hidden="true" />
                    </div>

                    <div>
                      <Heading as="h3" size="xs" weight="medium" className="text-white mb-2">
                        {step.title}
                      </Heading>
                      <ResponsiveParagraph size="sm" className="text-white text-opacity-90 leading-relaxed">
                        {step.description}
                      </ResponsiveParagraph>
                    </div>
                  </div>
                );
              })}
            </div>

            <CtaButton cta={content.cta} variant="inverse" rightIcon={ArrowRight} />
          </div>
        </div>
      </div>
    </Section>
  );
}
