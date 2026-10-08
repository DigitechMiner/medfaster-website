"use client";

import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import { useModalStore } from "@/stores/modalStore";

// Pricing for organizations is not published yet, so organizations are
// routed to the team instead of showing assumed prices.
const PLANS = [
  {
    id: "professionals",
    audience: "For Healthcare Professionals",
    price: "Free",
    priceNote: "No cost to join or apply",
    features: [
      "Verified professional profile",
      "AI interview and scorecard",
      "Recommended jobs, urgent shifts and job invites",
      "Shift schedule, check-in and wallet",
      "Withdraw earnings to your bank account",
    ],
    cta: "Get the App",
    highlighted: false,
  },
  {
    id: "organizations",
    audience: "For Healthcare Organizations",
    price: "Custom",
    priceNote: "Pricing based on your hiring and staffing needs",
    features: [
      "Job and shift posting, including urgent shifts",
      "AI-ranked candidates and interview scorecards",
      "Candidate pipeline and calendar",
      "In-house staff pool and job invites",
      "Messaging and hiring dashboard",
    ],
    cta: "Talk to Our Team",
    highlighted: true,
  },
] as const;

export function PricingCards() {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-4xl mx-auto">
      {PLANS.map((plan) => (
        <div
          key={plan.id}
          className={`relative bg-white rounded-2xl p-7 flex flex-col gap-6 border-2 ${
            plan.highlighted ? "border-[#F3651B] shadow-lg" : "border-gray-200"
          }`}
        >
          {plan.highlighted && (
            <span className="absolute top-6 right-6 bg-[#FEF0E7] text-[#F3651B] text-xs font-semibold px-3 py-1 rounded-full">
              Contact Sales
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
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F3651B] mt-0.5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                <Paragraph size="sm" className="text-[#717680]">{feature}</Paragraph>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            {plan.highlighted ? (
              <CustomButton
                className="w-full justify-between my-0"
                rightIcon={Calendar}
                onClick={() => openModal("request-demo")}
              >
                {plan.cta}
              </CustomButton>
            ) : (
              <CustomButton
                variant="secondary"
                className="w-full justify-between my-0"
                rightIcon={ArrowRight}
                onClick={() => openModal("get-app")}
              >
                {plan.cta}
              </CustomButton>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
