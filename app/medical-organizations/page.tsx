import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Healthcare Organizations | AI Hiring & Urgent Staffing | KeRaeva",
  description:
    "Hire verified healthcare professionals, review AI interview scorecards, fill urgent shifts and track shifts to payment with KeRaeva, built for Canadian hospitals, clinics and care organizations.",
  openGraph: {
    ...BASE_OPEN_GRAPH,
    title: "KeRaeva for Healthcare Organizations",
    description:
      "AI-powered hiring, urgent staffing and shift management for Canadian healthcare organizations.",
  },
};

export default function MedicalOrganizationsPage() {
  return (
    <Screen>
      <Header>
        <HeroSection />
      </Header>
      <HiredSection />
      <UrgentStaffingSection audience="organizations" />
      <OneDashboard />
      <StaffingCapabilities />
      <HireWithConfidence />
      <ShiftToPaymentSection audience="organizations" />
      <DataDrivenHiring />
      <TestimonialsSlider />
      <StartHiring />
      <Footer />
    </Screen>
  );
}
