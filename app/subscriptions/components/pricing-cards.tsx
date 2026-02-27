"use client";

import { CheckCircle2, ChevronRight } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

type Plan = "free" | "pro" | "enterprise";

interface PricingCardsProps {
  billing: "yearly" | "monthly";
  selectedPlan: Plan;
  onSelectPlan: (plan: Plan) => void;
}

const PLANS = {
  free: {
    name: "Free",
    description: "For Individuals and Small Clinics",
    features: [
      "Professional Profile Listing",
      "Appointment & Schedule Management",
      "Appear in Standard Search Results",
      "Secure Patient Chat",
      "Standard Partner Support",
      "15% Commission per booking",
    ],
    cta: "Start for free",
  },
  pro: {
    name: "Pro",
    description: "For Growing Practices & Professionals",
    features: [
      "Everything in Partner, plus:",
      '"Featured" Profile Boost (Higher in search results)',
      "Advanced Practice Analytics",
      "Priority Partner Support",
      "Reduced 10% Commission per booking",
    ],
    cta: "Start Pro",
  },
  enterprise: {
    name: "Enterprise",
    description: "For Large Hospitals & Lab Chains",
    featureHeader: "For Growing Practices & Professionals",
    features: [
      "Everything in Pro, plus:",
      "Multi-Location & Staff Management",
      "EMR / API Integration",
      "Dedicated Account Manager",
      "Custom Commission Rates",
    ],
    cta: "Get Started",
  },
};

export function PricingCards({ billing, selectedPlan, onSelectPlan }: PricingCardsProps) {
  const cardBase =
    "bg-white rounded-2xl p-7 flex flex-col gap-6 cursor-pointer transition-all duration-200 border-2";

  const cardClass = (plan: Plan) =>
    selectedPlan === plan
      ? `${cardBase} border-[#F3651B] shadow-lg`
      : `${cardBase} border-gray-200 hover:border-[#F3651B]/50`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

      {/* ── Free ── */}
      <div className={cardClass("free")} onClick={() => onSelectPlan("free")}>
        <div>
          <Paragraph size="sm" className="text-[#252B37] font-semibold mb-3">
            Free
          </Paragraph>
          <Heading as="h2" size="lg"  className="text-[#252B37]">
            $0
          </Heading>
          <Paragraph size="sm" className="text-[#717680] mt-1">
            Per user/month, billed annually
          </Paragraph>
        </div>

        <div>
          <Paragraph size="sm" weight="semibold" className="text-[#252B37] mb-3">
            For Individuals and Small Clinics
          </Paragraph>
          <ul className="space-y-2">
            {PLANS.free.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F3651B] mt-0.5 shrink-0" />
                <Paragraph size="sm" className="text-[#717680]">{f}</Paragraph>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <button
            onClick={(e) => { e.stopPropagation(); onSelectPlan("free"); }}
            className="w-full border border-gray-300 text-[#252B37] rounded-lg py-2.5 text-sm font-semibold hover:border-[#F3651B] hover:text-[#F3651B] transition-colors"
          >
            Start for free
          </button>
        </div>
      </div>

      {/* ── Pro ── */}
      <div className={`${cardClass("pro")} relative`} onClick={() => onSelectPlan("pro")}>
        {/* Popular badge */}
        <span className="absolute top-6 right-6 bg-[#FEF0E7] text-[#F3651B] text-xs font-semibold px-3 py-1 rounded-full">
          Popular
        </span>

        <div>
          <Paragraph size="sm" className="text-[#252B37] font-semibold mb-3">
            Pro
          </Paragraph>
          <div className="flex items-baseline gap-2">
            {billing === "yearly" && (
              <Paragraph size="sm" className="text-[#717680] line-through">
                $79
              </Paragraph>
            )}
            <Heading as="h2" size="lg"   className="text-[#252B37]">
              ${billing === "yearly" ? 59 : 79}
            </Heading>
          </div>
          <Paragraph size="sm" className="text-[#717680] mt-1">
            Per user/month, billed annually
          </Paragraph>
        </div>

        <div>
          <Paragraph size="sm" weight="semibold" className="text-[#252B37] mb-3">
            For Growing Practices & Professionals
          </Paragraph>
          <ul className="space-y-2">
            {PLANS.pro.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F3651B] mt-0.5 shrink-0" />
                <Paragraph size="sm" className="text-[#717680]">{f}</Paragraph>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <button
            onClick={(e) => { e.stopPropagation(); onSelectPlan("pro"); }}
            className="w-full flex items-center justify-center gap-2 bg-[#F3651B] text-white rounded-full py-2.5 text-sm font-semibold hover:bg-[#e05510] transition-colors"
          >
            Start Pro
            <span className="bg-white text-[#F3651B] rounded-full w-5 h-5 flex items-center justify-center">
              <ChevronRight size={12} />
            </span>
          </button>
        </div>
      </div>

      {/* ── Enterprise ── */}
      <div className={cardClass("enterprise")} onClick={() => onSelectPlan("enterprise")}>
        <div>
          <Paragraph size="sm" className="text-[#252B37] font-semibold mb-3">
            Enterprise
          </Paragraph>
          <Heading as="h2" size="lg"   className="text-[#252B37]">
            Let&apos;s Talk!
          </Heading>
          <Paragraph size="sm" className="text-[#717680] mt-1">
            For Large Hospitals & Lab Chains
          </Paragraph>
        </div>

        <div>
          <Paragraph size="sm" weight="semibold" className="text-[#252B37] mb-3">
            For Growing Practices & Professionals
          </Paragraph>
          <ul className="space-y-2">
            {PLANS.enterprise.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F3651B] mt-0.5 shrink-0" />
                <Paragraph size="sm" className="text-[#717680]">{f}</Paragraph>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <button
            onClick={(e) => { e.stopPropagation(); onSelectPlan("enterprise"); }}
            className="w-full border border-gray-300 text-[#252B37] rounded-lg py-2.5 text-sm font-semibold hover:border-[#F3651B] hover:text-[#F3651B] transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>

    </div>
  );
}
