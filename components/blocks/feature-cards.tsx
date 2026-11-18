import { Heading } from "@/components/ui/heading";
import { Paragraph, ResponsiveParagraph } from "@/components/ui/paragraph";
import { AccentText } from "@/components/ui/accent-text";
import { IconChip } from "@/components/ui/icon-chip";
import { iconFor } from "@/lib/cms/icons";
import { cn } from "@/lib/utils";
import type { SectionOf } from "@/lib/cms/pages";
import { BlockSection, tones } from "./shell";

const COLUMNS: Record<string, string> = {
  "2": "md:grid-cols-2",
  "3": "md:grid-cols-2 lg:grid-cols-3",
  "4": "md:grid-cols-2 lg:grid-cols-4",
};

export function FeatureCardsBlock({ block }: { block: SectionOf<"featureCards"> }) {
  const t = tones(block.background);
  return (
    <BlockSection background={block.background}>
      <div className="space-y-4 mb-8 md:mb-12">
        <Heading as="h2" size="md" className={t.heading}>
          <AccentText text={block.heading} accentClassName={t.accent} />
        </Heading>
        {block.intro && (
          <ResponsiveParagraph size="sm" className={`${t.body} max-w-3xl whitespace-pre-line`}>
            {block.intro}
          </ResponsiveParagraph>
        )}
      </div>
      <div className={cn("grid grid-cols-1 gap-6", COLUMNS[block.columns ?? "3"] ?? COLUMNS["3"])}>
        {(block.cards ?? []).map((card, index) => (
          <div
            key={card.id ?? index}
            className={cn("rounded-2xl p-6 space-y-4", t.orange ? "bg-white/10 border border-white/20" : "bg-white border border-[#E9EAEB]")}
          >
            <IconChip icon={iconFor(card.icon ?? undefined)} variant={t.orange ? "white" : "light"} />
            <Heading as="h3" size="xs" className={t.heading}>
              {card.title}
            </Heading>
            {card.description && (
              <Paragraph size="sm" className={`${t.body} leading-relaxed whitespace-pre-line`}>
                {card.description}
              </Paragraph>
            )}
          </div>
        ))}
      </div>
    </BlockSection>
  );
}
