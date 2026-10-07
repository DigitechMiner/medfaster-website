import type { Metadata } from "next";
import {
  HeroSection,
  CompanyLogos,
  HiredSection,
  OneDashboard,
  StaffingCapabilities,
  DataDrivenHiring,
  HireWithConfidence,
  StartHiring,
} from "./section";
import BookADemo from "./section/book-a-demo";
import TestimonialsSlider from "./section/testimonial";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { UrgentStaffingSection } from "@/components/section/urgent-staffing";

export const metadata: Metadata = {
  title: "Healthcare Organizations | AI Hiring & Urgent Staffing | KeRaeva",
  description:
    "Hire verified healthcare professionals, review AI interview scorecards, fill urgent shifts and track shifts to payment with KeRaeva, built for Canadian hospitals, clinics and care organizations.",
  openGraph: {
    title: "KeRaeva for Healthcare Organizations",
    description:
      "AI-powered hiring, urgent staffing and shift management for Canadian healthcare organizations.",
    siteName: "KeRaeva",
    type: "website",
    locale: "en_CA",
  },
};

export default function MedicalOrganizationsPage() {
  return (
    <Screen>
      <Header>
        <HeroSection />
      </Header>
      <CompanyLogos />
      <HiredSection />
      <UrgentStaffingSection variant="organizations" />
      <OneDashboard />
      <StaffingCapabilities />
      <HireWithConfidence />
      <BookADemo />
      <DataDrivenHiring />
      <TestimonialsSlider />
      <StartHiring />
      <Footer />
    </Screen>
  );
}
