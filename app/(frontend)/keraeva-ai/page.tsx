import type { Metadata } from "next";
import { BASE_OPEN_GRAPH } from "@/lib/seo/site";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { NextCareer } from "../(home)/sections";
import {
  AIHero,
  AIJourney,
  ProfessionalAI,
  OrganizationAI,
  ScorecardSection,
  IntegritySection,
  SmartFeaturesSection,
  PrinciplesSection,
} from "./sections";

export const metadata: Metadata = {
  title: "KeRaeva AI | AI Interviews, Matching & Smart Features for Healthcare Hiring",
  description:
    "See every AI and smart feature in KeRaeva: AI resume parsing, AI voice interviews and scorecards, AI-matched candidates, urgent shift matching, interview integrity checks and smart phone features.",
  openGraph: {
    ...BASE_OPEN_GRAPH,
    title: "KeRaeva AI: Intelligence Built Into Every Step",
    description:
      "AI resume parsing, interviews, scorecards, matching, urgent dispatch and smart features for Canadian healthcare hiring.",
  },
};

export default function KeRaevaAIPage() {
  return (
    <Screen>
      <Header>
        <AIHero />
      </Header>
      <AIJourney />
      <ProfessionalAI />
      <OrganizationAI />
      <ScorecardSection />
      <IntegritySection />
      <SmartFeaturesSection />
      <PrinciplesSection />
      <NextCareer />
      <Footer />
    </Screen>
  );
}
