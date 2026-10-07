import type { Metadata } from "next";
import Header from "@/components/global/header";
import HeroSection from "./sections/hero";
import GetHiredSection from "./sections/get-hired";
import { Footer } from "@/components/global/footer";
import TestimonialsSection from "./sections/testimonials";
import BookADemo from "./sections/book-demo";
import {
  AIHelpsSection,
  AllInOneSection,
  VerifiedSection,
  NextCareer,
} from "./sections";
import { UrgentStaffingSection } from "@/components/section/urgent-staffing";
import { Screen } from "@/components/global/screen";

export const metadata: Metadata = {
  title: "KeRaeva | AI-Powered Healthcare Workforce Platform in Canada",
  description:
    "Hire, verify and match healthcare professionals, fill urgent shifts and manage shifts and payments with KeRaeva, the AI-powered healthcare workforce platform for Canada.",
  openGraph: {
    title: "KeRaeva | Healthcare Workforce, Powered by Intelligence",
    description:
      "AI interviews, smart matching, urgent staffing, shifts and payments for healthcare organizations and professionals across Canada.",
    siteName: "KeRaeva",
    type: "website",
    locale: "en_CA",
  },
};

export default function Home() {
  return (
    <Screen>
      <Header>
        <HeroSection />
      </Header>
      <GetHiredSection />
      <UrgentStaffingSection />
      <AIHelpsSection />
      <VerifiedSection />
      <AllInOneSection />
      <BookADemo />
      <TestimonialsSection />
      <NextCareer />
      <Footer />
    </Screen>
  );
}
