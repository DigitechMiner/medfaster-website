import { CheckCircle2 } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph } from "@/components/ui/paragraph";
import { AccentText } from "@/components/ui/accent-text";
import Image from "@/components/ui/image";
import { mediaUrl } from "@/lib/cms/merge";
import { cn } from "@/lib/utils";
import type { SectionOf } from "@/lib/cms/pages";
import { BlockSection, tones } from "./shell";
import { BlockButton } from "./block-button";

export function ImageTextBlock({ block }: { block: SectionOf<"imageText"> }) {
  const t = tones(block.background);
  const image = mediaUrl(block.image);
  const alt = typeof block.image === "object" && block.image ? block.image.alt ?? "" : "";
  const left = block.imagePosition === "left";
  return (
    <BlockSection background={block.background}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className={cn("space-y-6", left && "lg:order-2")}>
          <Heading as="h2" size="md" className={t.heading}>
            <AccentText text={block.heading} accentClassName={t.accent} />
          </Heading>
          {block.body && (
            <ResponsiveParagraph size="base" className={`${t.body} whitespace-pre-line`}>
              {block.body}
            </ResponsiveParagraph>
          )}
          {block.bullets && block.bullets.length > 0 && (
            <ul className="space-y-3">
              {block.bullets.map((bullet, index) => (
                <li key={bullet.id ?? index} className={cn("flex items-start gap-3", t.orange ? "text-white" : "text-[#252B37]")}>
                  <CheckCircle2 className={cn("w-5 h-5 mt-0.5 shrink-0", t.orange ? "text-white" : "text-[#F3651B]")} strokeWidth={1.5} aria-hidden="true" />
                  <span>{bullet.text}</span>
                </li>
              ))}
            </ul>
          )}
          <BlockButton button={block.button} variant={t.orange ? "inverse" : "primary"} />
        </div>
        {image && (
          <div className={cn("relative w-full aspect-[4/3] rounded-2xl overflow-hidden", left && "lg:order-1")}>
            <Image src={image} alt={alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        )}
      </div>
    </BlockSection>
  );
}
