"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { ContactInfoSection } from "./components/info";
import { ContactForm } from "./components/form";

export default function ContactUsPage() {
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
              Contact Us
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
                Contact Us
              </Paragraph>
            </div>
          </div>
        </Section>
      </Header>

      <Section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <ContactInfoSection />
        <ContactForm />
      </Section>

      {/* Footer */}
      <Footer />
    </Screen>
  );
}
