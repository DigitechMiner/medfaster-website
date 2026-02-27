"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

const faqs = [
  {
    question: "Is the platform free to use?",
    answer:
      "Yes, completely. KeRaeva is 100% free for doctors, nurses, and healthcare staff looking for jobs. We only charge hospitals and clinics to post vacancies. You will never be asked to pay to apply for a role.",
  },
  {
    question: "Can I search for remote or part-time jobs?",
    answer:
      "Yes, KeRaeva supports filtering by remote, part-time, full-time, and contract roles so you can find exactly what suits your schedule.",
  },
  {
    question: "How can I improve my chances of getting hired?",
    answer:
      "Complete your profile 100%, upload your certifications, and enable AI interview prep to stand out to recruiters.",
  },
  {
    question: "How do I know if a hospital has viewed my application?",
    answer:
      "You will receive a real-time notification in your app and email when a recruiter views your application.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <Section className="bg-gray-50">
      <div className="space-y-4">
        {/* Header */}
        <Heading as="h2" size="md" className="text-[#252B37]">
          Need Help? Start With These{" "}
          <span className="text-[#F3651B]">Answers</span>
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
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <Paragraph size="sm" weight="semibold" className="text-[#252B37]">
                  {faq.question}
                </Paragraph>
                <span className="text-[#F3651B] ml-4 shrink-0">
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-4 pt-3 border-t border-gray-100">
                  <Paragraph size="sm" className="text-[#717680] leading-relaxed">
                    {faq.answer}
                  </Paragraph>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
