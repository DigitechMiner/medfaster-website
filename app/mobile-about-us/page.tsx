import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Screen } from "@/components/global/screen";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import {
  AboutHeroSection,
  StatsSection,
  PurposeSection,
  WhyKeRaevaSection,
  JourneySection,
  TeamSection,
  CTASection,
} from "@/app/about/sections";

export const metadata: Metadata = {
  title: "About KeRaeva | AI-Powered Healthcare Workforce Platform",
  description:
    "Learn about KeRaeva's mission to make healthcare staffing in Canada faster and more reliable with AI-powered matching and human-centred care.",
  // In-app / placeholder page: keep it out of search results
  robots: { index: false, follow: true },
};

export default function MobileAboutUsPage() {
  return (
    <Screen>

        <Section className="pt-2 md:pt-4 lg:pt-6 xl:pt-8">
          <div className="space-y-4">
            {/* Title */}
            <Heading as="h1" size="lg" className="text-[#252B37]" weight="normal">
              About KeRaeva
            </Heading>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 ">
              <Link
                href="/"
                className="inline-block py-1 text-[#252B37] hover:text-[#F3651B] transition-colors text-lg"
              >
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-[#717680]" />
              <Paragraph size="lg" className="text-[#717680]">
                About Us
              </Paragraph>
            </div>
          </div>
        </Section>

      {/* 1. Story */}
      <AboutHeroSection />
      <StatsSection />
      <JourneySection />
      {/* 2. Mission & Vision */}
      <PurposeSection />
      {/* 3. Why KeRaeva */}
      <WhyKeRaevaSection />
      {/* 4. Team */}
      <TeamSection />
      {/* 5. CTA */}
      <CTASection />
    </Screen>
  );
}
