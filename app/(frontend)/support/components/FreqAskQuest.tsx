"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { SUPPORT_FAQS as faqs } from "@/utils/constant/faqs";

export function FreqAskQuest() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <Section className="bg-gray-50">
      <div className="space-y-4">
        {/* Header */}
        <Heading as="h2" size="md" className="text-[#252B37]">
          Frequently Asked <span className="text-[#F3651B]">Questions</span>
        </Heading>

        <Paragraph size="xs" className="text-[#717680]">
          Before you reach out, see if we&apos;ve already answered your
          question. Our FAQ is fast, clear, and easy to follow.
        </Paragraph>

        {/* Accordion */}
        <div className="space-y-3 pt-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                type="button"
                id={`faq-question-${i}`}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="text-sm font-semibold text-[#252B37]">
                  {faq.question}
                </span>

                <span className="text-[#F3651B] ml-4 shrink-0" aria-hidden="true">
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              {openIndex === i && (
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className="px-6 pb-4 pt-3 border-t border-gray-100"
                >
                  <Paragraph
                    size="sm"
                    className="text-[#717680] leading-relaxed"
                  >
                    {faq.answer}
                  </Paragraph>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <Paragraph size="xs" className="text-[#717680]">
            Still need help? Submit your issue above or contact our support
            team.
          </Paragraph>

          <Paragraph
            size="xs"
            className="text-[#717680] sm:text-right shrink-0 italic"
          >
            Last updated: April 2026
          </Paragraph>
        </div>
      </div>
    </Section>
  );
}