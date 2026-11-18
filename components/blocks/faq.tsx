"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { AccentText } from "@/components/ui/accent-text";
import type { SectionOf } from "@/lib/cms/pages";
import { BlockSection, tones } from "./shell";

// Same accordion as the Support page FAQs
export function FaqBlock({ block, index: blockIndex }: { block: SectionOf<"faq">; index: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = tones(block.background);
  const id = (part: string, i: number) => `faq-${blockIndex}-${part}-${i}`;
  return (
    <BlockSection background={block.background}>
      <div className="space-y-4">
        {block.heading && (
          <Heading as="h2" size="md" className={t.heading}>
            <AccentText text={block.heading} accentClassName={t.accent} />
          </Heading>
        )}
        {block.intro && (
          <Paragraph size="xs" className={`${t.body} whitespace-pre-line`}>
            {block.intro}
          </Paragraph>
        )}
        <div className="space-y-3 pt-2">
          {(block.items ?? []).map((item, i) => (
            <div key={item.id ?? i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <button
                type="button"
                id={id("question", i)}
                aria-expanded={openIndex === i}
                aria-controls={id("answer", i)}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="text-sm font-semibold text-[#252B37]">{item.question}</span>
                <span className="text-[#F3651B] ml-4 shrink-0" aria-hidden="true">
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              {openIndex === i && (
                <div id={id("answer", i)} role="region" aria-labelledby={id("question", i)} className="px-6 pb-4 pt-3 border-t border-gray-100">
                  <Paragraph size="sm" className="text-[#717680] leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </Paragraph>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </BlockSection>
  );
}
