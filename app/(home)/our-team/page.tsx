
import { Section } from "@/components/ui/section";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";import { CareerCTASection } from "../careers/sections/career-cta";
import { TeamSection } from "./sections/team-section";
import { ChevronRight } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import Link from "next/link";

export default function TeamPage() {
  return (
    <>
      <main className="bg-neutral-100 flex-1 flex flex-col gap-2 md:gap-4 lg:gap-6 xl:gap-8 p-1 md:p-4 lg:p-6 xl:p-8 w-full">
        {/* Page Header Section */}
        <Section className="bg-white border-b border-gray-200">
            <div className="">
            <Header />
            </div>
          <div className="max-w-7xl mx-auto px-4 py-12">
             <div className="space-y-4">
                <div className="">
      <Heading as="h1" size="lg" className="text-[#252B37]">
        Our Team
      </Heading>
      </div>
      <div className="flex items-center gap-2 text-sm">
     <Link href="/about" className="text-[#252B37] hover:text-[#F4781B]">
          About MedFaster
        </Link>
        <ChevronRight className="w-4 h-4 text-[#717680]" />
        <Paragraph size="sm" className="text-[#717680]">
          Our Team
        </Paragraph>
      </div>
          </div>
          </div>
        </Section>

        {/* Team Section */}
        <TeamSection />

        {/* Career CTA */}
        <CareerCTASection />
      </main>

      <Footer />
    </>
  );
}
