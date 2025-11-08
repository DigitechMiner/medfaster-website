import Header from "@/components/global/header";
import HeroSection from "./sections/hero";
import GetHiredSection from "./sections/get-hired";
import { Footer } from "@/components/global/footer";
import TestimonialsSection from "./sections/testimonials";
import BookADemo from "./sections/book-demo";
import {
  CompanyLogos,
  AIHelpsSection,
  AllInOneSection,
  VerifiedSection,
  NextCareer,
} from "./sections";
import { Screen } from "@/components/global/screen";

export default function Home() {
  return (
    <Screen>
      <Header>
        <HeroSection />
      </Header>
      <CompanyLogos />
      <GetHiredSection />
      <AIHelpsSection />
      <AllInOneSection />
      <VerifiedSection />
      <BookADemo />
      <TestimonialsSection />
      <NextCareer />
      <Footer />
    </Screen>
  );
}
