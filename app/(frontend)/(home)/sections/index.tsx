"use client";

import Image from "@/components/ui/image";
import { Section } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";
import { Heading } from "@/components/ui/heading";
import { Paragraph, ResponsiveParagraph } from "@/components/ui/paragraph";
import { CtaButton } from "@/components/ui/cta-button";
import { AccentText, stripAccents } from "@/components/ui/accent-text";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { IconChip } from "@/components/ui/icon-chip";
import { iconFor } from "@/lib/cms/icons";
import { useSiteSettings } from "@/components/providers/site-settings";
import { HOME_DEFAULTS } from "@/content/pages/home";

type Home = typeof HOME_DEFAULTS;

// AI Helps Section
export function AIHelpsSection({ content }: { content: Home["ai"] }) {
  return (
    <Section backgroundColor="bg-white">
      <div className="mb-8 md:mb-12">
        {/* ↓ text-2xl on mobile, scales up */}
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          <AccentText text={content.heading} />
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl text-sm md:text-base">
          {content.body}
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8">
        {content.features.map((feature, index) => (
          <FeatureCard
            key={index}
            className="bg-[#FAFAFA] p-3 sm:p-4 rounded-lg"
            title={feature.title}
            description={feature.description}
            visual={{ type: "icon", content: iconFor(feature.icon) }}
          />
        ))}
      </div>

      <CtaButton cta={content.cta} className="w-full sm:w-auto" rightIcon={ArrowRight} />
    </Section>
  );
}

// Product Ecosystem Section - the app for professionals and the recruiter platform
export function AllInOneSection({ content }: { content: Home["ecosystem"] }) {
  const { apps } = useSiteSettings();

  return (
    <Section>
      <div className="mb-8 md:mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          <AccentText text={content.heading} />
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl text-sm md:text-base">
          {content.body}
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {content.products.map((product, index) => (
          <div key={`${index}-${product.title}`} className="bg-[#FAFAFA] rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <IconChip icon={iconFor(product.icon)} />
              <div>
                <Heading as="h3" size="xs" className="text-[#252B37]">
                  {product.title}
                </Heading>
                <Paragraph size="sm" className="text-[#717680]">
                  {product.audience}
                </Paragraph>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {product.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F3651B] mt-1 shrink-0" aria-hidden="true" />
                  <Paragraph size="sm" className="text-[#717680]">
                    {point}
                  </Paragraph>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <CtaButton cta={product.cta} variant="secondary" className="w-full sm:w-auto" rightIcon={ArrowRight} />
            </div>
          </div>
        ))}
      </div>

      {/* Download the App */}
      <div className="flex flex-col sm:flex-row sm:items-end gap-6 border-b border-[#E9EAEB] pt-8 md:pt-12 pb-6">
        <div className="sm:flex-1">
          <Heading as="h3" size="xs" className="mb-4">
            <span className="text-[#252B37]">
              <AccentText text={content.downloadHeading} />
            </span>
          </Heading>
          <Paragraph className="text-[#717680] text-sm md:text-base">
            {content.downloadBody}
          </Paragraph>
        </div>

        <div className="flex gap-3 md:gap-4 justify-start items-end">
          <a
            href={apps.googlePlayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-28 md:w-32 lg:w-36 flex-shrink-0"
            aria-label="Get KeRaeva on Google Play"
          >
            <Image
              src="/images/ui/qr-google-play.png"
              alt="QR code to download KeRaeva on Google Play"
              width={186}
              height={223}
              className="object-contain w-full h-auto"
            />
          </a>
          <div className="w-28 md:w-32 lg:w-36 flex-shrink-0 flex flex-col items-center gap-1">
            <Image
              src="/images/ui/badge-app-store.png"
              alt="App Store (coming soon)"
              width={169}
              height={55}
              className="object-contain w-full h-auto opacity-40"
            />
            <span className="text-xs text-[#717680]">Coming soon on iOS</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Trust & Verification Section - verified documents + structured AI interview
export function VerifiedSection({ content }: { content: Home["trust"] }) {
  const audiences = content.audiences;

  return (
    <Section
      padding={false}
      backgroundColor="bg-neutral-100"
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8"
    >
      <Section className="flex items-start w-full">
        <div className="space-y-4">
          <Paragraph size="sm" className="text-[#C44408] font-semibold uppercase tracking-wider">
            {content.eyebrow}
          </Paragraph>
          <Heading as="h2" size="md" className="text-[#252B37]">
            <AccentText text={content.heading} />
          </Heading>

          <ResponsiveParagraph
            size="sm"
            className="text-[#717680] leading-relaxed"
          >
            {content.body}
          </ResponsiveParagraph>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {audiences.map((audience, index) => (
              <div key={`${index}-${audience.title}`}>
                <Heading as="h3" size="xs" className="text-[#252B37] mb-3">
                  {audience.title}
                </Heading>
                <ul className="space-y-2">
                  {audience.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F3651B] mt-1 shrink-0" aria-hidden="true" />
                      <Paragraph size="sm" className="text-[#717680]">
                        {point}
                      </Paragraph>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        padding={false}
        // ↓ center on mobile, right-align on lg
        className="flex overflow-hidden items-end justify-center lg:justify-end pt-6 lg:pt-0"
      >
        <div className="relative mx-auto max-w-xs md:max-w-sm lg:max-w-2xl w-full">
          <Image
            src={content.image}
            alt={stripAccents(content.imageAlt)}
            width={500}
            height={1000}
            className="object-contain w-full"
          />
        </div>
      </Section>
    </Section>
  );
}

// Next Career Section
// Also used on the KeRaeva AI page, which keeps the built-in text
export function NextCareer({ content = HOME_DEFAULTS.closingCtas }: { content?: Home["closingCtas"] }) {
  const cardStyle = {
    backgroundImage: "url(/images/patterns/orange-pattern-2.webp)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "overlay" as const,
    backgroundRepeat: "no-repeat",
  };

  return (
    <Section
      backgroundColor="bg-neutral-100"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8"
      padding={false}
    >
      {/* Left Card */}
      <Section backgroundColor="bg-[#F3651B]" padding={false} style={cardStyle}>
        <div className="p-6 sm:p-8 md:p-8 lg:p-12 xl:p-16 flex flex-col min-h-[260px] md:min-h-[400px]">
          <div className="space-y-4 md:space-y-6">
            <Heading as="h2" size="md" className="text-white">
              <AccentText text={content.professionalsHeading} accentClassName="text-white underline decoration-white/60" />
            </Heading>

            <ResponsiveParagraph size="base" className="text-white/90 leading-relaxed">
              {content.professionalsBody}
            </ResponsiveParagraph>

            <div className="pt-2">
              <CtaButton cta={content.professionalsCta} variant="inverse" className="w-full sm:w-auto" rightIcon={ArrowRight} />
            </div>
          </div>
        </div>
      </Section>

      {/* Right Card */}
      <Section backgroundColor="bg-[#F3651B]" padding={false} style={cardStyle}>
        <div className="p-6 sm:p-8 md:p-8 lg:p-12 xl:p-16 flex flex-col min-h-[260px] md:min-h-[400px]">
          <div className="space-y-4 md:space-y-6">
            <Heading as="h2" size="md" className="text-white">
              <AccentText text={content.organizationsHeading} accentClassName="text-white underline decoration-white/60" />
            </Heading>

            <ResponsiveParagraph size="base" className="text-white/90 leading-relaxed">
              {content.organizationsBody}
            </ResponsiveParagraph>

            {/* ↓ stack buttons on mobile, row on sm+ */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <CtaButton cta={content.organizationsPrimaryCta} variant="inverse" className="w-full sm:w-auto" rightIcon={ArrowRight} />
              <CtaButton cta={content.organizationsSecondaryCta} variant="inverse" className="w-full sm:w-auto" rightIcon={Calendar} />
            </div>
          </div>
        </div>
      </Section>
    </Section>
  );
}
