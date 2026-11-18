import { RichText } from "@payloadcms/richtext-lexical/react";
import { Heading } from "@/components/ui/heading";
import { AccentText } from "@/components/ui/accent-text";
import type { SectionOf } from "@/lib/cms/pages";
import { BlockSection, tones } from "./shell";

export function TextBlock({ block }: { block: SectionOf<"text"> }) {
  const t = tones(block.background);
  return (
    <BlockSection background={block.background}>
      <div className="max-w-4xl space-y-6">
        {block.heading && (
          <Heading as="h2" size="md" className={t.heading}>
            <AccentText text={block.heading} accentClassName={t.accent} />
          </Heading>
        )}
        {block.content && <RichText data={block.content} className={`kr-richtext ${t.orange ? "kr-richtext--inverse" : ""}`} />}
      </div>
    </BlockSection>
  );
}
