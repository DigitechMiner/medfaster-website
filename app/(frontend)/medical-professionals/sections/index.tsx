"use client";

import Image from "@/components/ui/image";
import { Section } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";
import { Heading } from "@/components/ui/heading";
import { Paragraph, ResponsiveParagraph } from "@/components/ui/paragraph";
import { CtaButton } from "@/components/ui/cta-button";
import { AccentText, stripAccents } from "@/components/ui/accent-text";
import { Download } from "lucide-react";
import { IconChip } from "@/components/ui/icon-chip";
import { iconFor } from "@/lib/cms/icons";
import { useSiteSettings } from "@/components/providers/site-settings";
import type { PROFESSIONALS_DEFAULTS } from "@/content/pages/professionals";

type Content = typeof PROFESSIONALS_DEFAULTS;

// AI Helps Section
export function AIHelpsSection({ content }: { content: Content["ai"] }) {
  return (
    <Section>
      <div className=" mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          <AccentText text={content.heading} />
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">{content.body}</Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {content.features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            visual={{ type: "icon", content: iconFor(feature.icon) }}
          />
        ))}
      </div>
    </Section>
  );
}

// All In One App Section
export function AllInOneSection({ content }: { content: Content["appFeatures"] }) {
  return (
    <Section>
      <div className=" mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          <AccentText text={content.heading} />
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">{content.body}</Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {content.features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            imageFullWidth={true}
            imageCenter={true}
            visual={{ type: "image", content: feature.screenshot, alt: feature.title }}
          />
        ))}
      </div>
    </Section>
  );
}

// Verified Section
export function VerifiedSection({ content }: { content: Content["verified"] }) {
  return (
    <Section padding={false} backgroundColor="bg-neutral-100" className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 xl:gap-8">
      <Section className="flex items-start w-full">
        <div className="space-y-4">
          <Heading as="h2" size="md" className="text-[#252B37]">
            <AccentText text={content.heading} />
          </Heading>

          <ResponsiveParagraph size="sm" className="text-[#717680] leading-relaxed">
            {content.body}
          </ResponsiveParagraph>
        </div>
      </Section>

      <Section padding={false} className="flex overflow-hidden items-center justify-end">
        <div className="relative mx-auto max-w-2xl">
          <Image src={content.image} alt={stripAccents(content.imageAlt)} width={500} height={1000} className="object-contain" />
        </div>
      </Section>
    </Section>
  );
}

// Career On The Go Section
export function CareerOnTheGo({ content }: { content: Content["appDownload"] }) {
  const { apps } = useSiteSettings();
  return (
    <Section
      backgroundColor="bg-neutral-100"
      className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 xl:gap-8"
      padding={false}
    >
      <Section>
        <div className="space-y-4">
          <Heading as="h2" size="md" className="text-[#252B37]">
            <AccentText text={content.heading} />
          </Heading>

          <ResponsiveParagraph size="base" className="text-[#717680] leading-relaxed">
            {content.body}
          </ResponsiveParagraph>
        </div>

        <div className="relative w-full max-w-2xl mx-auto flex justify-center items-start gap-4 md:gap-6 lg:gap-8 mt-10 overflow-hidden">
          {/* Google Play - scannable QR linking to the live listing */}
          <a
            href={apps.googlePlayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[150px] md:w-[180px] flex items-center"
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

          {/* App Store - link once the iOS app is published */}
          {apps.appStoreUrl ? (
            <a
              href={apps.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[150px] md:w-[180px] self-end"
              aria-label="Download KeRaeva on the App Store"
            >
              <Image
                src="/images/ui/badge-app-store.png"
                alt="Download on the App Store"
                width={169}
                height={55}
                className="object-contain w-full h-auto"
              />
            </a>
          ) : (
            <div className="w-[150px] md:w-[180px] self-end flex flex-col items-center gap-1">
              <Image
                src="/images/ui/badge-app-store.png"
                alt="App Store (coming soon)"
                width={169}
                height={55}
                className="object-contain w-full h-auto opacity-40"
              />
              <span className="text-xs text-[#717680]">{apps.iosComingSoonLabel}</span>
            </div>
          )}
        </div>
      </Section>

      <Section padding={false} className="flex overflow-hidden items-end justify-end">
        <div className="relative mt-10 max-w-2xl mx-auto">
          <Image src={content.screenshot} alt={stripAccents(content.screenshotAlt)} width={500} height={900} className="object-contain" />
        </div>
      </Section>
    </Section>
  );
}

// Next Career Section
export function NextCareer({ content }: { content: Content["nextCareer"] }) {
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
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div className="p-4 md:p-8 lg:p-16 flex flex-col justify-center">
          <div className="space-y-2 md:space-y-4 lg:space-y-6 xl:space-y-8">
            <Heading as="h2" size="md" className="text-white">
              <AccentText text={content.heading} accentClassName="text-white underline decoration-white/60" />
            </Heading>

            <ResponsiveParagraph size="base" className="text-white/90 max-w-xl leading-relaxed">
              {content.body}
            </ResponsiveParagraph>

            <div className="flex flex-col sm:flex-row sm:gap-4">
              <CtaButton cta={content.cta} variant="inverse" rightIcon={Download} />
            </div>
          </div>
        </div>

        <div className="relative flex items-end justify-center lg:justify-end overflow-hidden md:block">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-full">
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

// Application Status Section - real statuses from the KeRaeva app
export function ApplicationStatusSection({ content }: { content: Content["applicationStatus"] }) {
  return (
    <Section>
      <div className="mb-8 md:mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          <AccentText text={content.heading} />
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">{content.body}</Paragraph>
      </div>

      <ol className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
        {content.statuses.map((status, index) => (
          <li
            key={`${index}-${status.title}`}
            className="bg-[#FAFAFA] border border-[#E9EAEB] rounded-2xl p-6 flex flex-col gap-3 flex-shrink-0 w-[75%] sm:w-[45%] md:w-auto snap-start"
          >
            <div className="flex items-center justify-between">
              <IconChip icon={iconFor(status.icon)} />
              <span className="text-sm font-semibold text-[#C44408]">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <Heading as="h3" size="xs" weight="medium" className="text-[#252B37]">
              {status.title}
            </Heading>
            <ResponsiveParagraph size="sm" className="text-[#717680] leading-relaxed">
              {status.description}
            </ResponsiveParagraph>
          </li>
        ))}
      </ol>
    </Section>
  );
}

// More In The App Section - verified Candidate App features
export function MoreInTheApp({ content }: { content: Content["moreInTheApp"] }) {
  return (
    <Section>
      <div className="mb-8 md:mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          <AccentText text={content.heading} />
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">{content.body}</Paragraph>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {content.features.map((feature, index) => (
          <FeatureCard
            key={`${index}-${feature.title}`}
            title={feature.title}
            description={feature.description}
            visual={{ type: "icon", content: iconFor(feature.icon) }}
          />
        ))}
      </div>
    </Section>
  );
}
