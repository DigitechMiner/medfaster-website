import { Heading } from "@/components/ui/heading";
import { Paragraph, ResponsiveParagraph } from "@/components/ui/paragraph";
import { AccentText } from "@/components/ui/accent-text";
import { IconChip } from "@/components/ui/icon-chip";
import { iconFor } from "@/lib/cms/icons";
import { cn } from "@/lib/utils";
import type { SectionOf } from "@/lib/cms/pages";
import { BlockSection, tones } from "./shell";
import { BlockButton } from "./block-button";

export function StepsBlock({ block }: { block: SectionOf<"steps"> }) {
  const t = tones(block.background);
  const steps = block.steps ?? [];
  return (
    <BlockSection background={block.background}>
      <div className="space-y-4 mb-8">
        <Heading as="h2" size="md" className={t.heading}>
          <AccentText text={block.heading} accentClassName={t.accent} />
        </Heading>
        {block.intro && (
          <ResponsiveParagraph size="base" className={`${t.body} max-w-2xl whitespace-pre-line`}>
            {block.intro}
          </ResponsiveParagraph>
        )}
      </div>
      <ol className={cn("grid grid-cols-1 gap-6 mb-8", steps.length >= 3 ? "lg:grid-cols-3" : steps.length === 2 ? "md:grid-cols-2" : "")}>
        {steps.map((step, index) => (
          <li key={step.id ?? index} className={cn("flex items-start gap-4 pb-6 border-b", t.orange ? "border-white/20" : "border-[#E9EAEB]")}>
            <IconChip icon={iconFor(step.icon ?? undefined)} variant={t.orange ? "white" : "light"} />
            <div className="space-y-2">
              <span className={cn("block text-sm font-semibold", t.orange ? "text-white/80" : "text-[#F3651B]")}>Step {index + 1}</span>
              <Heading as="h3" size="xs" className={t.heading}>
                {step.title}
              </Heading>
              {step.description && (
                <Paragraph size="sm" className={`${t.body} leading-relaxed whitespace-pre-line`}>
                  {step.description}
                </Paragraph>
              )}
            </div>
          </li>
        ))}
      </ol>
      <BlockButton button={block.button} variant={t.orange ? "inverse" : "primary"} />
    </BlockSection>
  );
}
