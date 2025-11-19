'use client';

import Header from "@/components/global/header";
import HeroSection from "./sections/hero";
import GetHiredSection from "./sections/get-hired";
import { Footer } from "@/components/global/footer";
import TestimonialsSection from "./sections/testimonials";
import BookADemo from "./sections/book-demo";
import LoginModal from "./sections/login-modal";
import {
  CompanyLogos,
  AIHelpsSection,
  AllInOneSection,
  VerifiedSection,
  NextCareer,
} from "./sections";
import { Screen } from "@/components/global/screen";
import { LoginModalProvider, useLoginModal } from "@/contexts/login-modal-context";

function HomeContent() {
  const { isOpen, closeLogin } = useLoginModal();

  return (
    <>
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
      
      <LoginModal isOpen={isOpen} onClose={closeLogin} />
    </>
  );
}

export default function Home() {
  return (
    <Screen>
      <LoginModalProvider>
        <HomeContent />
      </LoginModalProvider>
    </Screen>
  );
}
