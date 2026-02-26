
import LandingFooter from "@/components/global/otpModal/landing-footer";
import {
  HeroSection,
  CompanyLogos,
  HiredSection,
  OneDashboard,
  DataDrivenHiring,
  HireWithConfidence,
  StartHiring,
} from "./section";
import BookADemo from "./section/book-a-demo";
import TestimonialsSlider from "./section/testimonial";

export default function MedicalOrganizationsPage() {
  return (
    <div className="min-h-screen bg-neutral-100 p-2 md:p-4 lg:p-6 xl:p-8 gap-2 md:gap-4 lg:gap-6 xl:gap-8 flex flex-col">
        <HeroSection />
      <CompanyLogos />
      <HiredSection />
      <OneDashboard />
      <BookADemo />
      <DataDrivenHiring />
      <HireWithConfidence />
      <TestimonialsSlider />
      <StartHiring />
      <LandingFooter />
    </div>
  );
}
