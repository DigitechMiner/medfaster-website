import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { PricingCards } from "./components/pricing-cards";

export const metadata: Metadata = {
  title: "Pricing | KeRaeva",
  description:
    "KeRaeva is free for healthcare professionals. Healthcare organizations get pricing tailored to their hiring and staffing needs. Talk to our team.",
};

export default function SubscriptionsPage() {
  return (
    <Screen>
      <Header>
        {/* Hero */}
        <Section className="pt-2 md:pt-4 lg:pt-6 xl:pt-8 text-center">
          <div className="space-y-4 max-w-2xl mx-auto">
            <Heading as="h1" size="lg" weight="normal" className="text-[#252B37]">
              Simple, Transparent{" "}
              <span className="text-[#F3651B]">Pricing</span>
            </Heading>
            <Paragraph size="sm" className="text-[#717680]">
              Free for healthcare professionals. Healthcare organizations get
              pricing tailored to how they hire and staff. Talk to our team to
              find the right fit.
            </Paragraph>
          </div>
        </Section>
      </Header>

      {/* Pricing Cards */}
      <Section className="bg-[#FDF3EC]">
        <PricingCards />
      </Section>

      <Footer />
    </Screen>
  );
}
