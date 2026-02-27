"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { PricingCards } from "./components/pricing-cards";

export default function SubscriptionsPage() {
  const [billing, setBilling] = useState<"yearly" | "monthly">("yearly");
  const [selectedPlan, setSelectedPlan] = useState<"free" | "pro" | "enterprise">("pro");


  return (
    <Screen>
      <Header>
        {/* Hero */}
        <Section className="pt-2 md:pt-4 lg:pt-6 xl:pt-8 text-center">
          <div className="space-y-4 max-w-2xl mx-auto">
            <Heading as="h1" size="lg" weight="normal" className="text-[#252B37]">
              Simple, Transparent Partner{" "}
              <span className="text-[#F3651B]">Pricing</span>
            </Heading>
            <Paragraph size="sm" className="text-[#717680]">
              Choose the plan that fits your practice. No hidden fees. Cancel anytime.
            </Paragraph>

            {/* Toggle */}
            <div className="inline-flex items-center bg-white rounded-full p-1 border border-gray-200 mt-2">
              <button
                onClick={() => setBilling("yearly")}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  billing === "yearly"
                    ? "bg-[#F3651B] text-white"
                    : "text-[#717680] hover:text-[#252B37]"
                }`}
              >
                Yearly (Save 20%)
              </button>
              <button
                onClick={() => setBilling("monthly")}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  billing === "monthly"
                    ? "bg-[#F3651B] text-white"
                    : "text-[#717680] hover:text-[#252B37]"
                }`}
              >
                Monthly
              </button>
            </div>
          </div>
        </Section>
      </Header>

      {/* Pricing Cards */}
      <Section className="bg-[#FDF3EC]">
        <PricingCards
  billing={billing}
  selectedPlan={selectedPlan}
  onSelectPlan={setSelectedPlan}
/>
      </Section>

      <Footer />
    </Screen>
  );
}
