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
import { getPageContent, getTestimonials } from "@/lib/cms/content";
import { stripAccents } from "@/components/ui/accent-text";

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

// Text, images and buttons come from the admin panel (Pages → Home)
export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPageContent("home");
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

export default async function Home() {
  const [content, testimonials] = await Promise.all([getPageContent("home"), getTestimonials("home")]);

  return (
    <Screen>
      <JsonLd data={STRUCTURED_DATA} />
      <Header>
        <HeroSection content={content.hero} />
      </Header>
      {content.journey.show && <GetHiredSection content={content.journey} />}
      {content.urgentStaffing.show && <UrgentStaffingSection content={content.urgentStaffing} />}
      {content.ai.show && <AIHelpsSection content={content.ai} />}
      {content.trust.show && <VerifiedSection content={content.trust} />}
      {content.ecosystem.show && <AllInOneSection content={content.ecosystem} />}
      {content.shiftToPayment.show && <ShiftToPaymentSection content={content.shiftToPayment} />}
      {content.testimonials.show && <TestimonialsSection items={testimonials} content={content.testimonials} />}
      {content.closingCtas.show && <NextCareer content={content.closingCtas} />}
      <Footer />
    </Screen>
  );
}
