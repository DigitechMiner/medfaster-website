
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { JobListingsSection } from "./sections/job-listings";
import { CareerCTASection } from "./sections/career-cta";
import { Link } from "lucide-react";
import { Paragraph } from "@/components/ui/paragraph";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import { CareersPageHeader } from "./sections/CareersPageHeader";

export default function CareersPage() {
  return (
    <><div className="w-full min-h-screen bg-neutral-100 flex flex-col overflow-x-hidden">

    <main className="flex-1 flex flex-col gap-2 md:gap-4 lg:gap-6 xl:gap-8 p-1 md:p-4 lg:p-6 xl:p-8 w-full">
       <Section
                className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl w-full"
                padding={false}
              >
                <div className="w-full">
                  <Header />
                </div>
                <div className="p-4 md:p-8 lg:p-16 ">
                  <CareersPageHeader />
                </div>
              </Section>
      <JobListingsSection />
 
      {/* Career CTA */}
      <CareerCTASection />
<Footer />
    </main>
    
    </div>
    </>
  );
}
