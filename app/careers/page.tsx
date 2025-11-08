import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { JobListingsSection } from "./components/job-listings";
import { CareerCTASection } from "@/components/section/career";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Paragraph } from "@/components/ui/paragraph";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";

export default function CareersPage() {
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
              Careers
            </Heading>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 ">
              <Link
                href="/about_us"
                className="text-[#252B37] hover:text-[#F4781B] transition-colors text-lg"
              >
                About MedFaster
              </Link>
              <ChevronRight className="w-4 h-4 text-[#717680]" />
              <Paragraph size="lg" className="text-[#717680]">
                Careers
              </Paragraph>
            </div>
          </div>
        </Section>
      </Header>

      <JobListingsSection />

      {/* Career CTA */}
      <CareerCTASection />

      <Footer />
    </Screen>
  );
}
