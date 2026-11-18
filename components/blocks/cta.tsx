import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph } from "@/components/ui/paragraph";
import { AccentText } from "@/components/ui/accent-text";
import type { SectionOf } from "@/lib/cms/pages";
import { BlockSection, tones } from "./shell";
import { BlockButton } from "./block-button";

// Same layout as the About page's closing call to action
export function CtaBlock({ block }: { block: SectionOf<"cta"> }) {
  const t = tones(block.background);
  return (
    <BlockSection background={block.background}>
      <Heading as="h2" size="md" className={`${t.heading} mb-4`}>
        <AccentText text={block.heading} accentClassName={t.accent} />
      </Heading>
      {block.body && (
        <ResponsiveParagraph size="base" className={`${t.body} mb-8 whitespace-pre-line`}>
          {block.body}
        </ResponsiveParagraph>
      )}
      <BlockButton button={block.button} variant={t.orange ? "inverse" : "primary"} />
    </BlockSection>
  );
}
