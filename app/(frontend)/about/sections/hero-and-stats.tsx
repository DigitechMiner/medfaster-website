import Image from "@/components/ui/image";
import { Section } from "@/components/ui/section";
import { IconChip } from "@/components/ui/icon-chip";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph, Paragraph } from "@/components/ui/paragraph";
import { AccentText, stripAccents } from "@/components/ui/accent-text";
import { iconFor } from "@/lib/cms/icons";
import type { AboutContent } from "@/content/pages/about";

// Hero Section
export function AboutHeroSection({ content }: { content: AboutContent["hero"] }) {
  return (
    <Section padding={false} backgroundColor="!bg-neutral-100">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 xl:gap-8 items-stretch">
        {/* Left Column - Image (2 grid columns) */}
        <div className="relative w-full aspect-[16/10] rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl overflow-hidden shadow-md lg:col-span-2">
          <Image
            src={content.image}
            alt={stripAccents(content.imageAlt)}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover"
          />
        </div>

        {/* Right Column - Orange Card (1 grid column) */}
        <div
          className="relative bg-[#F3651B] rounded-3xl p-6 text-white shadow-lg flex flex-col justify-end lg:col-span-1 overflow-hidden"
          style={{
            backgroundImage: "url('/images/patterns/pattern-3.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "overlay",
            opacity: 1,
          }}
        >
          <div className="relative z-10 space-y-4" style={{ opacity: 1 }}>
            <Heading as="h2" size="xs">
              <AccentText text={content.cardHeading} accentClassName="text-white" />
            </Heading>
            <p className="text-sm leading-relaxed opacity-95">{content.cardBody}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Stats Section
export function StatsSection({ content }: { content: AboutContent["story"] }) {
  const main = content.mainStat;
  return (
    <Section>
      {/* Header Section */}
      <div className="mb-16 lg:mb-24">
        <Heading as="h2" size="md" className="text-[#252B37] mb-6">
          <AccentText text={content.heading} />
        </Heading>
        <ResponsiveParagraph size="lg" className="text-[#717680] max-w-full leading-relaxed">
          {content.body}
        </ResponsiveParagraph>
      </div>

      {/* Stats Grid with Horizontal Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-2 md:gap-4 lg:gap-6 xl:gap-8 items-stretch">
        {/* Left Box */}
        <div className="border border-gray-200 rounded-lg p-8 lg:p-10 flex flex-col justify-between">
          {main.icon && (
            <div className="mb-6">
              <IconChip icon={iconFor(main.icon)} size="lg" />
            </div>
          )}
          <div>
            <Heading as="h3" size="md" className="text-[#252B37] mb-4">
              {main.value}
            </Heading>
            <div className="grid grid-cols-2">
              <Paragraph size="lg" className="text-[#252B37] mb-6">
                {main.label}
              </Paragraph>
              {main.description && (
                <ResponsiveParagraph size="base" className="text-[#717680] leading-relaxed">
                  {main.description}
                </ResponsiveParagraph>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Stacked Boxes */}
        <div className="flex flex-col space-y-2 md:space-y-4 lg:space-y-6 xl:space-y-8 w-full h-full">
          {content.sideStats.map((stat, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 lg:p-8 flex flex-col flex-1">
              <Heading as="h3" size="md" className="text-[#252B37] mb-2">
                {stat.value}
              </Heading>
              <ResponsiveParagraph size="base" className="text-[#252B37]">
                {stat.label}
              </ResponsiveParagraph>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
