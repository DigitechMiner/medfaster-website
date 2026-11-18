import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph } from "@/components/ui/paragraph";
import { AccentText } from "@/components/ui/accent-text";
import Image from "@/components/ui/image";
import { mediaUrl } from "@/lib/cms/merge";
import type { SectionOf } from "@/lib/cms/pages";
import { BlockSection, tones } from "./shell";
import { BlockButton } from "./block-button";

export function HeroBlock({ block, first }: { block: SectionOf<"hero">; first: boolean }) {
  const t = tones(block.background);
  const image = mediaUrl(block.image);
  const alt = typeof block.image === "object" && block.image ? block.image.alt ?? "" : "";
  return (
    <BlockSection background={block.background}>
      <div className={image ? "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center" : "max-w-4xl"}>
        <div className="space-y-6">
          <Heading as={first ? "h1" : "h2"} size="lg" weight="normal" className={t.heading}>
            <AccentText text={block.heading} accentClassName={t.accent} />
          </Heading>
          {block.body && (
            <ResponsiveParagraph size="base" className={`${t.body} max-w-2xl whitespace-pre-line`}>
              {block.body}
            </ResponsiveParagraph>
          )}
          {(block.primaryButton?.label || block.secondaryButton?.label) && (
            <div className="flex flex-wrap gap-3">
              <BlockButton button={block.primaryButton} variant={t.orange ? "inverse" : "primary"} />
              <BlockButton button={block.secondaryButton} variant="secondary" arrow={false} />
            </div>
          )}
        </div>
        {image && (
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src={image} alt={alt} fill priority={first} sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        )}
      </div>
    </BlockSection>
  );
}
