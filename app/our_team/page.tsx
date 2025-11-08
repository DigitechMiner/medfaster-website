import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { CareerCTASection } from "@/components/section/career";
import { TeamSection } from "./sections/team-section";

export default function TeamPage() {
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
              Our Team
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
                Our Team
              </Paragraph>
            </div>
          </div>
        </Section>
      </Header>

      {/* Team Section */}
      <TeamSection />

      {/* Career CTA */}
      <CareerCTASection />

      <Footer />
    </Screen>
  );
}
