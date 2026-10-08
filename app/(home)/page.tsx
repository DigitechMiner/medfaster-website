import type { Metadata } from "next";
import Header from "@/components/global/header";
import HeroSection from "./sections/hero";
import GetHiredSection from "./sections/get-hired";
import { Footer } from "@/components/global/footer";
import TestimonialsSection from "./sections/testimonials";
import {
  AIHelpsSection,
  AllInOneSection,
  VerifiedSection,
  NextCareer,
} from "./sections";
import { UrgentStaffingSection } from "@/components/section/urgent-staffing";
import { ShiftToPaymentSection } from "@/components/section/shift-to-payment";
import { Screen } from "@/components/global/screen";
import { JsonLd } from "@/components/global/json-ld";
import { BASE_OPEN_GRAPH, SITE_NAME, SITE_URL } from "@/lib/seo/site";
import { APP_STORE_LINKS } from "@/utils/constant";

// Facts only: no ratings, prices or statistics
const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: "MedFaster Health Tech Inc.",
      url: SITE_URL,
      logo: `${SITE_URL}/images/ui/KeRaeva-logo.svg`,
      email: "support@keraeva.com",
      telephone: "+1-403-919-6824",
      areaServed: { "@type": "Country", name: "Canada" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "en-CA",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: "KeRaeva",
      description:
        "The KeRaeva app for healthcare professionals: profile and document verification, AI interviews, jobs and urgent shifts, check-in and earnings.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android",
      installUrl: APP_STORE_LINKS.googlePlay,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export const metadata: Metadata = {
  title: "KeRaeva | AI-Powered Healthcare Workforce Platform in Canada",
  description:
    "Hire, verify and match healthcare professionals, fill urgent shifts and manage shifts and payments with KeRaeva, the AI-powered healthcare workforce platform for Canada.",
  openGraph: {
    ...BASE_OPEN_GRAPH,
    title: "KeRaeva | Healthcare Workforce, Powered by Intelligence",
    description:
      "AI interviews, smart matching, urgent staffing, shifts and payments for healthcare organizations and professionals across Canada.",
  },
};

export default function Home() {
  return (
    <Screen>
      <JsonLd data={STRUCTURED_DATA} />
      <Header>
        <HeroSection />
      </Header>
      <GetHiredSection />
      <UrgentStaffingSection />
      <AIHelpsSection />
      <VerifiedSection />
      <AllInOneSection />
      <ShiftToPaymentSection />
      <TestimonialsSection />
      <NextCareer />
      <Footer />
    </Screen>
  );
}
