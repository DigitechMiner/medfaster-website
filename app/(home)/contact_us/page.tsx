"use client";

import { Section } from "@/components/ui/section";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import {
  ContactInfoSection,
  ContactForm,
  PageHeader,
} from "./sections";

export default function ContactUsPage() {
  return (
    <div className="w-full min-h-screen bg-neutral-100 flex flex-col overflow-x-hidden">
      {/* Main Content - Scrollable Area */}
      <main className="flex-1 flex flex-col gap-2 md:gap-4 lg:gap-6 xl:gap-8 p-2 md:p-4 lg:p-6 xl:p-8 w-full">
        {/* Header + Breadcrumb in unified card */}
        <Section 
          className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl w-full"
          padding={false}
        >
            <Header />

          {/* Page Header with gap and padding */}
          <div className="p-2 md:p-8 lg:p-12 ">
            <PageHeader />
          </div>
        </Section>

        {/* Main Contact Section */}
        <Section className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl w-full">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <ContactInfoSection />
              <ContactForm />
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
