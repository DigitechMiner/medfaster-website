import type { Metadata } from "next";
import { getPageContent, getTestimonials } from "@/lib/cms/content";
import { BASE_OPEN_GRAPH } from "@/lib/seo/site";
import { stripAccents } from "@/components/ui/accent-text";
import Header from "@/components/global/header";
import HeroSection from "./sections/hero";
import GetHiredSection from "./sections/get-hired";
import { Footer } from "@/components/global/footer";
import TestimonialsSection from "./sections/testimonials";
import {
  AIHelpsSection,
  AllInOneSection,
  VerifiedSection,
  CareerOnTheGo,
  NextCareer,
  ApplicationStatusSection,
  MoreInTheApp,
} from "./sections";
import { UrgentStaffingSection } from "@/components/section/urgent-staffing";
import { ShiftToPaymentSection } from "@/components/section/shift-to-payment";
import { Screen } from "@/components/global/screen";

// Text, images and buttons come from the admin panel (Pages → Healthcare Professionals)
export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPageContent("professionals");
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

export default async function MedicalProfessionalsPage() {
  const [content, testimonials] = await Promise.all([getPageContent("professionals"), getTestimonials("professionals")]);
  return (
    <Screen>
      <Header>
        <HeroSection content={content.hero} />
      </Header>
      {content.getHired.show && <GetHiredSection content={content.getHired} />}
      {content.urgentStaffing.show && <UrgentStaffingSection audience="professionals" content={content.urgentStaffing} />}
      {content.ai.show && <AIHelpsSection content={content.ai} />}
      {content.verified.show && <VerifiedSection content={content.verified} />}
      {content.appFeatures.show && <AllInOneSection content={content.appFeatures} />}
      {content.applicationStatus.show && <ApplicationStatusSection content={content.applicationStatus} />}
      {content.shiftToPayment.show && <ShiftToPaymentSection audience="professionals" content={content.shiftToPayment} />}
      {content.moreInTheApp.show && <MoreInTheApp content={content.moreInTheApp} />}
      {content.testimonials.show && <TestimonialsSection items={testimonials} content={content.testimonials} />}
      {content.nextCareer.show && <NextCareer content={content.nextCareer} />}
      {content.appDownload.show && <CareerOnTheGo content={content.appDownload} />}
      <Footer />
    </Screen>
  );
}
