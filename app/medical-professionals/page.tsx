import type { Metadata } from "next"
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
import BookADemo from "../(home)/sections/book-demo"
import { Screen } from "@/components/global/screen"

export const metadata: Metadata = {
  title: "Healthcare Professionals | Jobs, Urgent Shifts & AI Interviews | KeRaeva",
  description:
    "Find healthcare jobs and urgent shifts near you, complete a reusable AI interview, track every application and get paid through the KeRaeva app.",
  openGraph: {
    title: "KeRaeva for Healthcare Professionals",
    description: "Jobs, urgent shifts, AI interviews and earnings in one app for Canadian healthcare professionals.",
    siteName: "KeRaeva",
    type: "website",
    locale: "en_CA",
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
      <BookADemo />
      <MoreInTheApp />
      <TestimonialsSection />
      <NextCareer />
      <CareerOnTheGo />
      <Footer />
    </Screen>
  );
}