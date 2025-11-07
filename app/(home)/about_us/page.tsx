import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import {
  AboutUsPageHeader,
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
import { CompanyLogos } from "../sections";

export const metadata: Metadata = {
  title: "About MedFaster | Revolutionizing Healthcare Hiring",
  description:
    "Learn about MedFaster's mission to revolutionize healthcare recruitment with AI-powered matching and human-centric care.",
};

export default function AboutUsPage() {
  return (
    <div className="w-full min-h-screen bg-neutral-100 flex flex-col overflow-x-hidden">
      <main className="flex-1 flex flex-col gap-2 md:gap-4 lg:gap-6 xl:gap-8 p-2 md:p-4 lg:p-6 xl:p-8 w-full">
        <Section
          className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl w-full"
          padding={false}
        >
          <div className="w-full">
            <Header />
          </div>
          <div className="p-4 md:p-8 lg:p-16 border-t border-gray-100">
            <AboutUsPageHeader />
          </div>
        </Section>

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
      </main>

      <Footer />
    </div>
  );
}
