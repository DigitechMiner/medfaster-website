"use client";

import Image from "@/components/ui/image";
import { CtaButton } from "@/components/ui/cta-button";
import { AccentText, stripAccents } from "@/components/ui/accent-text";
import { ArrowRight, Calendar } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph, ResponsiveParagraph } from "@/components/ui/paragraph";
import { FeatureCard } from "@/components/ui/feature-card";
import { iconFor } from "@/lib/cms/icons";
import GetHiredSection from "../../medical-professionals/sections/get-hired";
import type { ORGANIZATIONS_DEFAULTS } from "@/content/pages/organizations";

type Content = typeof ORGANIZATIONS_DEFAULTS;

// Hero Section
export function HeroSection({ content }: { content: Content["hero"] }) {
  return (
    <Section className="!pb-0">
      {/* Two Grid Layout - Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* First Grid Section - Left 50% */}
        <div className="flex flex-col justify-between h-full space-y-8">
          {/* Main Heading */}
          <div className="text-left">
            <Heading as="h1" size="lg" className="text-[#252B37] mb-6" weight="normal">
              <AccentText text={content.heading} accentClassName="font-medium" />
            </Heading>
          </div>
        </div>
        {/* Second Grid Section - Right 50% */}
        <div className="flex flex-col justify-start space-y-6">
          {/* Description Text */}
          <p className="text-[#252B37] text-base lg:text-lg leading-relaxed">{content.body}</p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <CtaButton cta={content.primaryCta} rightIcon={ArrowRight} />
            <CtaButton cta={content.secondaryCta} variant="muted" />
          </div>
        </div>
      </div>
      <Section padding={false} className="flex overflow-hidden items-end justify-end ">
        <div className="relative mt-10 max-w-7xl mx-auto">
          <Image src={content.image} alt={stripAccents(content.imageAlt)} width={1200} height={600} className="object-contain" priority />
        </div>
      </Section>
    </Section>
  );
}

// Hired Section
export function HiredSection({ content }: { content: Content["hiring"] }) {
  return <GetHiredSection content={content} imageHeight="h-[300px] lg:h-[700px]" />;
}

// One Dashboard Section
export function OneDashboard({ content }: { content: Content["dashboard"] }) {
  return (
    <Section>
      {/* Header */}
      <div className=" mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          <AccentText text={content.heading} />
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">{content.body}</Paragraph>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
        {content.features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            imageFullWidth={true}
            visual={{ type: "image", content: feature.screenshot, alt: feature.title }}
          />
        ))}
      </div>
    </Section>
  );
}

// Staffing Capabilities Section
export function StaffingCapabilities({ content }: { content: Content["capabilities"] }) {
  return (
    <Section>
      <div className="mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          <AccentText text={content.heading} />
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">{content.body}</Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {content.features.map((capability, index) => (
          <FeatureCard
            key={`${index}-${capability.title}`}
            title={capability.title}
            description={capability.description}
            visual={{ type: "icon", content: iconFor(capability.icon) }}
          />
        ))}
      </div>
    </Section>
  );
}

// Data Driven Hiring Section
export function DataDrivenHiring({ content }: { content: Content["dataDriven"] }) {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Left Content */}
        <div className="flex-1 max-w-3xl">
          <Heading className="text-[#252B37] mb-6">
            <AccentText text={content.heading} />
          </Heading>
          <Paragraph className="text-[#717680] leading-relaxed">{content.body}</Paragraph>
        </div>

        {/* Right Button */}
        <div className="flex-shrink-0">
          <CtaButton cta={content.cta} size="lg" rightIcon={ArrowRight} />
        </div>
      </div>
    </Section>
  );
}

// Hire With Confidence Section
export function HireWithConfidence({ content }: { content: Content["confidence"] }) {
  return (
    <Section>
      {/* Header - Title and Description */}
      <div className="mb-12 lg:mb-16">
        <Heading className="text-[#252B37] mb-6">
          <AccentText text={content.heading} />
        </Heading>
        <Paragraph className="text-[#717680] leading-relaxed max-w-3xl">{content.body}</Paragraph>
      </div>

      {/* Main Content Image */}
      <div className="w-full max-w-7xl mx-auto">
        <Image src={content.image} alt={stripAccents(content.imageAlt)} width={1200} height={600} className="w-full h-auto rounded-2xl" />
      </div>
    </Section>
  );
}

// Start Hiring Section
export function StartHiring({ content }: { content: Content["startHiring"] }) {
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
    >
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] ">
        {/* Left Side - Content */}
        <div className="p-4 md:p-8 lg:p-16 flex flex-col gap-6 justify-center">
          <Heading as="h2" size="md" className="text-white">
            <AccentText text={content.heading} accentClassName="text-white underline decoration-white/60" />
          </Heading>

          <ResponsiveParagraph size="base" className="text-white/90 max-w-xl leading-relaxed">
            {content.body}
          </ResponsiveParagraph>

          {/* Buttons */}
          <div className="flex flex-wrap md:flex-row ">
            <CtaButton cta={content.primaryCta} variant="inverse" className="mr-2 md:mr-4" rightIcon={ArrowRight} />
            <CtaButton cta={content.secondaryCta} variant="inverse" rightIcon={Calendar} />
          </div>
        </div>

        {/* Right Side - Nurse Image */}
        <div className="relative flex items-end justify-center lg:justify-end overflow-hidden md:block">
          <div className="relative w-full h-[250px] md:h-[300px] lg:h-[400px]">
            <Image
              src={content.image}
              alt={stripAccents(content.imageAlt)}
              fill
              className="object-contain object-bottom lg:object-right-bottom"
              sizes="(max-width: 768px) 33vw, 50vw"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
