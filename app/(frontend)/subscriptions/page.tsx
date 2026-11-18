import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { AccentText, stripAccents } from "@/components/ui/accent-text";
import { getPageContent } from "@/lib/cms/content";
import { PricingCards } from "./components/pricing-cards";

// Text and plans come from the admin panel (Pages → Pricing)
export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPageContent("pricing");
  return { title: stripAccents(seo.title), description: seo.description };
}

export default async function SubscriptionsPage() {
  const content = await getPageContent("pricing");
  return (
    <Screen>
      <Header>
        {/* Hero */}
        <Section className="pt-2 md:pt-4 lg:pt-6 xl:pt-8 text-center">
          <div className="space-y-4 max-w-2xl mx-auto">
            <Heading as="h1" size="lg" className="text-[#252B37]" weight="normal">
              <AccentText text={content.hero.heading} accentClassName="font-medium" />
            </Heading>
            <Paragraph size="sm" className="text-[#717680]">
              {content.hero.body}
            </Paragraph>
          </div>
        </Section>
      </Header>

      {/* Pricing Cards */}
      <Section className="bg-[#FDF3EC]">
        <PricingCards plans={content.plans.items} />
      </Section>

      <Footer />
    </Screen>
  );
}
