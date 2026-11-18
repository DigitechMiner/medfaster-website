import { Star } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Paragraph, ResponsiveParagraph } from "@/components/ui/paragraph";
import { AccentText } from "@/components/ui/accent-text";
import { InitialsAvatar } from "@/components/ui/initials-avatar";
import type { QuoteItem, SectionOf } from "@/lib/cms/pages";
import { BlockSection } from "./shell";

export function TestimonialsBlock({ block, quotes }: { block: SectionOf<"testimonials">; quotes: QuoteItem[] }) {
  const items = quotes.slice(0, block.limit ?? 4);
  if (items.length === 0) return null;
  return (
    <BlockSection background="white">
      {(block.heading || block.intro) && (
        <div className="mb-8">
          {block.heading && (
            <Heading as="h2" size="md" className="text-[#252B37] mb-4">
              <AccentText text={block.heading} />
            </Heading>
          )}
          {block.intro && (
            <ResponsiveParagraph size="sm" className="text-[#717680] max-w-3xl whitespace-pre-line">
              {block.intro}
            </ResponsiveParagraph>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((quote, index) => (
          <figure key={`${quote.name}-${index}`} className="rounded-2xl border border-[#E9EAEB] p-6 flex flex-col gap-4">
            <div className="flex gap-1" aria-label={`${quote.rating} out of 5 stars`}>
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className={i < quote.rating ? "w-4 h-4 fill-[#F3651B] text-[#F3651B]" : "w-4 h-4 text-gray-300"} aria-hidden="true" />
              ))}
            </div>
            <blockquote>
              <Paragraph size="base" className="text-[#252B37] leading-relaxed">
                “{quote.review}”
              </Paragraph>
            </blockquote>
            <figcaption className="flex items-center gap-3 mt-auto">
              <InitialsAvatar name={quote.name} />
              <span>
                <span className="block font-semibold text-[#252B37] text-sm">{quote.name}</span>
                <span className="block text-[#717680] text-sm">{quote.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </BlockSection>
  );
}
