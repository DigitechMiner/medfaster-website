"use client";

import Image from "@/components/ui/image";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph, ResponsiveParagraph } from "@/components/ui/paragraph";
import { FeatureCard } from "@/components/ui/feature-card";
import { CtaButton } from "@/components/ui/cta-button";
import { IconChip } from "@/components/ui/icon-chip";
import { AccentText, stripAccents } from "@/components/ui/accent-text";
import { iconFor } from "@/lib/cms/icons";
import type { KeRaevaAiContent } from "@/content/pages/keraeva-ai";

type Feature = { icon: string; title: string; description: string };
type Content = KeRaevaAiContent;

// Hero
export function AIHero({ content }: { content: Content["hero"] }) {
  return (
    <Section className="!pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <Heading as="h1" size="lg" className="text-[#252B37]" weight="normal">
          <AccentText text={content.heading} accentClassName="font-medium" />
        </Heading>
        <div className="flex flex-col justify-start space-y-6">
          <ResponsiveParagraph size="base" className="text-[#252B37] leading-relaxed">
            {content.body}
          </ResponsiveParagraph>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <CtaButton cta={content.primaryCta} rightIcon={ArrowRight} />
            <CtaButton cta={content.secondaryCta} variant="muted" rightIcon={Calendar} />
          </div>
        </div>
      </div>
      <div className="relative mt-10 max-w-5xl mx-auto">
        <Image
          src={content.image}
          alt={stripAccents(content.imageAlt)}
          width={2877}
          height={1356}
          sizes="(max-width: 1280px) 100vw, 1024px"
          className="w-full h-auto"
          priority
        />
      </div>
    </Section>
  );
}

// AI across the lifecycle (orange journey panel)
export function AIJourney({ content }: { content: Content["journey"] }) {
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
      <div className="mb-8">
        <Heading className="text-white mb-4">
          <AccentText text={content.heading} accentClassName="text-white" />
        </Heading>
        <ResponsiveParagraph size="base" className="text-white max-w-2xl">
          {content.body}
        </ResponsiveParagraph>
      </div>
      <ol className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
        {content.steps.map((step, index) => (
          <li
            key={`${step.title}-${index}`}
            className="bg-white rounded-2xl p-6 flex flex-col flex-shrink-0 w-[75%] sm:w-[45%] md:w-auto snap-start"
          >
            <span className="text-sm font-semibold text-[#C44408] mb-2">
              {String(index + 1).padStart(2, "0")}
            </span>
            <Heading as="h3" size="xs" weight="medium" className="text-[#252B37] mb-3">
              {step.title}
            </Heading>
            <ResponsiveParagraph size="sm" className="text-[#717680] leading-relaxed">
              {step.description}
            </ResponsiveParagraph>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function FeatureGridSection({ heading, intro, features }: { heading: string; intro: string; features: Feature[] }) {
  return (
    <Section>
      <div className="mb-8 md:mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          <AccentText text={heading} />
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">{intro}</Paragraph>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={`${feature.title}-${index}`}
            title={feature.title}
            description={feature.description}
            visual={{ type: "icon", content: iconFor(feature.icon) }}
          />
        ))}
      </div>
    </Section>
  );
}

export function ProfessionalAI({ content }: { content: Content["forProfessionals"] }) {
  return <FeatureGridSection heading={content.heading} intro={content.body} features={content.features} />;
}

export function OrganizationAI({ content }: { content: Content["forOrganizations"] }) {
  return <FeatureGridSection heading={content.heading} intro={content.body} features={content.features} />;
}

// Inside an AI interview scorecard (two-column layout from VerifiedSection)
export function ScorecardSection({ content }: { content: Content["scorecard"] }) {
  return (
    <Section
      padding={false}
      backgroundColor="bg-neutral-100"
      className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 xl:gap-8"
    >
      <Section className="flex flex-col justify-center">
        <div className="space-y-4 md:space-y-6">
          <Paragraph size="sm" className="text-[#C44408] font-semibold uppercase tracking-wider">
            {content.eyebrow}
          </Paragraph>
          <Heading as="h2" size="md" className="text-[#252B37]">
            <AccentText text={content.heading} />
          </Heading>
          <ResponsiveParagraph size="sm" className="text-[#717680] leading-relaxed">
            {content.body}
          </ResponsiveParagraph>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {content.points.map((part, index) => (
              <li key={`${part}-${index}`} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F3651B] mt-1 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                <Paragraph size="sm" className="text-[#717680]">{part}</Paragraph>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section className="flex items-center justify-center">
        <Image
          src={content.image}
          alt={stripAccents(content.imageAlt)}
          width={1200}
          height={900}
          className="w-full h-auto object-contain"
        />
      </Section>
    </Section>
  );
}

// Interview integrity (white cards with icon chips)
export function IntegritySection({ content }: { content: Content["integrity"] }) {
  return (
    <Section>
      <div className="mb-8 md:mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          <AccentText text={content.heading} />
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">
          {content.body}
        </Paragraph>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {content.checks.map((check, index) => (
          <div key={`${check.title}-${index}`} className="bg-[#FAFAFA] border border-[#E9EAEB] rounded-2xl p-6 flex flex-col gap-3">
            <IconChip icon={iconFor(check.icon)} />
            <Heading as="h3" size="xs" weight="medium" className="text-[#252B37]">
              {check.title}
            </Heading>
            <ResponsiveParagraph size="sm" className="text-[#717680] leading-relaxed">
              {check.description}
            </ResponsiveParagraph>
          </div>
        ))}
      </div>
    </Section>
  );
}

// Smart features on the phone
export function SmartFeaturesSection({ content }: { content: Content["smartFeatures"] }) {
  return (
    <Section>
      <div className="mb-8 md:mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          <AccentText text={content.heading} />
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">
          {content.body}
        </Paragraph>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {content.features.map((feature, index) => (
          <div key={`${feature.title}-${index}`} className="bg-[#FAFAFA] border border-[#E9EAEB] rounded-2xl p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3">
              <IconChip icon={iconFor(feature.icon)} />
              {feature.status && (
                <span className="bg-[#FEF0E7] text-[#C44408] text-xs font-semibold px-3 py-1 rounded-full">
                  {feature.status}
                </span>
              )}
            </div>
            <Heading as="h3" size="xs" weight="medium" className="text-[#252B37]">
              {feature.title}
            </Heading>
            <ResponsiveParagraph size="sm" className="text-[#717680] leading-relaxed">
              {feature.description}
            </ResponsiveParagraph>
          </div>
        ))}
      </div>
      {content.footnote && (
        <Paragraph size="sm" className="text-[#717680] mt-6">
          {content.footnote}
        </Paragraph>
      )}
    </Section>
  );
}

// How we use AI
export function PrinciplesSection({ content }: { content: Content["principles"] }) {
  return (
    <Section>
      <div className="mb-8 md:mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          <AccentText text={content.heading} />
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">
          {content.body}
        </Paragraph>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {content.items.map((principle, index) => (
          <FeatureCard
            key={`${principle.title}-${index}`}
            title={principle.title}
            description={principle.description}
            visual={{ type: "icon", content: iconFor(principle.icon) }}
          />
        ))}
      </div>
    </Section>
  );
}

