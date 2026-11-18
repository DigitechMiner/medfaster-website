import type { Metadata } from "next"
import { BASE_OPEN_GRAPH } from "@/lib/seo/site"
import Header from "@/components/global/header"
import HeroSection from "./sections/hero"
import GetHiredSection from "./sections/get-hired"
import { Footer } from "@/components/global/footer"
import TestimonialsSection from "./sections/testimonials"
import {
  AIHelpsSection,
  AllInOneSection,
  VerifiedSection,
  CareerOnTheGo,
  NextCareer,
  ApplicationStatusSection,
  MoreInTheApp,
} from "./sections"
import { UrgentStaffingSection } from "@/components/section/urgent-staffing"
import { ShiftToPaymentSection } from "@/components/section/shift-to-payment"
import { Screen } from "@/components/global/screen"

export const metadata: Metadata = {
  title: "Healthcare Professionals | Jobs, Urgent Shifts & AI Interviews | KeRaeva",
  description:
    "Find healthcare jobs and urgent shifts near you, complete a reusable AI interview, track every application and get paid through the KeRaeva app.",
  openGraph: {
    ...BASE_OPEN_GRAPH,
    title: "KeRaeva for Healthcare Professionals",
    description: "Jobs, urgent shifts, AI interviews and earnings in one app for Canadian healthcare professionals.",
  },
}

export default function MedicalProfessionalsPage() {
  return (
    <Screen>
      <Header>
      <HeroSection />
      </Header>
      <GetHiredSection />
      <UrgentStaffingSection audience="professionals" />
      <AIHelpsSection />
      <VerifiedSection />
      <AllInOneSection />
      <ApplicationStatusSection />
      <ShiftToPaymentSection audience="professionals" />
      <MoreInTheApp />
      <TestimonialsSection />
      <NextCareer />
      <CareerOnTheGo />
      <Footer />
    </Screen>
  );
}