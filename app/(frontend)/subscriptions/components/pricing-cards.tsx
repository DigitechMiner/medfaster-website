"use client";

import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { CtaButton } from "@/components/ui/cta-button";
import type { PRICING_DEFAULTS } from "@/content/pages/pricing";

type Plan = (typeof PRICING_DEFAULTS)["plans"]["items"][number];

export function PricingCards({ plans }: { plans: Plan[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-4xl mx-auto">
      {plans.map((plan, index) => (
        <div
          key={`${index}-${plan.audience}`}
          className={`relative bg-white rounded-2xl p-7 flex flex-col gap-6 border-2 ${
            plan.highlighted ? "border-[#F3651B] shadow-lg" : "border-gray-200"
          }`}
        >
          {plan.badge && (
            <span className="absolute top-6 right-6 bg-[#FEF0E7] text-[#C44408] text-xs font-semibold px-3 py-1 rounded-full">
              {plan.badge}
            </span>
          )}

          <div>
            <Paragraph size="sm" className="text-[#252B37] font-semibold mb-3">
              {plan.audience}
            </Paragraph>
            <Heading as="h2" size="md" className="text-[#252B37]">
              {plan.price}
            </Heading>
            <Paragraph size="sm" className="text-[#717680] mt-1">
              {plan.priceNote}
            </Paragraph>
          </div>

          <ul className="space-y-2">
            {plan.features.map((feature, featureIndex) => (
              <li key={`${featureIndex}-${feature}`} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F3651B] mt-0.5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                <Paragraph size="sm" className="text-[#717680]">{feature}</Paragraph>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <CtaButton
              cta={plan.cta}
              variant={plan.highlighted ? undefined : "secondary"}
              className="w-full justify-between my-0"
              rightIcon={plan.highlighted ? Calendar : ArrowRight}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
