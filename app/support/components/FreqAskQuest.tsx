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
  {
    question: "How do I accept an urgent shift?",
    answer:
      "When an urgent shift becomes available, you will receive a real-time notification in the app. Simply open the notification or go to the “Jobs” section, review the shift details (location, timing, pay), and tap “Accept” to confirm your availability. Shifts are assigned on a first-accept basis, so quick response increases your chances of getting hired",
  },
  {
    question: "When do I get paid after a shift?",
    answer:
      "Payments are processed after you successfully complete your shift and check out from the app. Once your attendance is verified, your earnings are credited to your wallet. Processing times may vary depending on the employer, but payments are typically completed within a few business days",
  },
  {
    question: "What happens if I miss check-in?",
    answer:
      "The check-in button becomes active 30 minutes before your shift starts and remains available for 30 minutes after the start time. If you fail to check in within this window, the shift may be marked as a no-show. You may be asked to provide a reason, and repeated no-shows can affect your profile rating and future job opportunities",
  },
  {
    question: "How does referral earning work?",
    answer:
      "You can earn rewards by inviting other healthcare professionals to join KeRaeva using your referral code. Once your referral signs up, completes their profile, and successfully completes shifts on the platform, you will receive rewards in your wallet based on milestone completions. Referral earnings are credited automatically and can be tracked in your wallet section.",
  },
  {
    question: "Can I cancel a shift?",
    answer:
      "Yes, you can cancel a shift before it starts, depending on the employer’s cancellation policy. However, frequent cancellations or last-minute cancellations may impact your reliability score and reduce your chances of getting future job assignments. We recommend cancelling only in genuine situations and as early as possible.",
  },
];

export function FreqAskQuest() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <Section className="bg-gray-50">
      <div className="space-y-4">
        {/* Header */}
        <Heading as="h2" size="md" className="text-[#252B37]">
          Frequently Asked Questions{" "}
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
                <Paragraph
                  size="sm"
                  weight="semibold"
                  className="text-[#252B37]"
                >
                  {faq.question}
                </Paragraph>

                <span className="text-[#F3651B] ml-4 shrink-0">
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-4 pt-3 border-t border-gray-100">
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