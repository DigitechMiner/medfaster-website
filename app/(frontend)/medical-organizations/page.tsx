import type { Metadata } from "next";
import { getPageContent, getTestimonials } from "@/lib/cms/content";
import { stripAccents } from "@/components/ui/accent-text";
import { BASE_OPEN_GRAPH } from "@/lib/seo/site";
import {
  HeroSection,
  HiredSection,
  OneDashboard,
  StaffingCapabilities,
  DataDrivenHiring,
  HireWithConfidence,
  StartHiring,
} from "./section";
import TestimonialsSlider from "./section/testimonial";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { UrgentStaffingSection } from "@/components/section/urgent-staffing";
import { ShiftToPaymentSection } from "@/components/section/shift-to-payment";

// Text, images and buttons come from the admin panel (Pages → Healthcare Organizations)
export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPageContent("organizations");
  return {
    title: stripAccents(seo.title),
    description: seo.description,
    openGraph: {
      ...BASE_OPEN_GRAPH,
      title: stripAccents(seo.shareTitle || seo.title),
      description: seo.shareDescription || seo.description,
    },
  };
}

export default async function MedicalOrganizationsPage() {
  const [content, testimonials] = await Promise.all([getPageContent("organizations"), getTestimonials("organizations")]);
  return (
    <Screen>
      <Header>
        <HeroSection content={content.hero} />
      </Header>
      {content.hiring.show && <HiredSection content={content.hiring} />}
      {content.urgentStaffing.show && <UrgentStaffingSection audience="organizations" content={content.urgentStaffing} />}
      {content.dashboard.show && <OneDashboard content={content.dashboard} />}
      {content.capabilities.show && <StaffingCapabilities content={content.capabilities} />}
      {content.confidence.show && <HireWithConfidence content={content.confidence} />}
      {content.shiftToPayment.show && <ShiftToPaymentSection audience="organizations" content={content.shiftToPayment} />}
      {content.dataDriven.show && <DataDrivenHiring content={content.dataDriven} />}
      {content.testimonials.show && <TestimonialsSlider items={testimonials} content={content.testimonials} />}
      {content.startHiring.show && <StartHiring content={content.startHiring} />}
      <Footer />
    </Screen>
  );
}
