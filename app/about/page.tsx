import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import {
  AboutHeroSection,
  StatsSection,
  PurposeSection,
  ThreeStepsSection,
  CoreGoalsSection,
  WhyMedFasterSection,
  JourneySection,
  TeamSection,
  AboutTestimonialsSection,
  FAQSection,
  CTASection,
} from "./sections";
import { CompanyLogos } from "../(home)/sections";

export const metadata: Metadata = {
  title: "About MedFaster | Revolutionizing Healthcare Hiring",
  description:
    "Learn about MedFaster's mission to revolutionize healthcare recruitment with AI-powered matching and human-centric care.",
};

export default function AboutUsPage() {
  return (
    <Screen>
      <Header>
        <Section className="pt-2 md:pt-4 lg:pt-6 xl:pt-8">
          <div className="space-y-4">
            {/* Title */}
            <Heading
              as="h1"
              size="lg"
              weight="normal"
              className="text-[#252B37]"
            >
              About MedFaster
            </Heading>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 ">
              <Link
                href="/"
                className="text-[#252B37] hover:text-[#F4781B] transition-colors text-lg"
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
      </Header>

      <AboutHeroSection />
      <CompanyLogos />
      <StatsSection />
      <PurposeSection />
      <ThreeStepsSection />
      <CoreGoalsSection />
      <WhyMedFasterSection />
      <JourneySection />
      <TeamSection />
      <AboutTestimonialsSection />
      <FAQSection />
      <CTASection />

      <Footer />
    </Screen>
  );
}
