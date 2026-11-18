import type { Metadata } from "next";
import { BASE_OPEN_GRAPH } from "@/lib/seo/site";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { stripAccents } from "@/components/ui/accent-text";
import { getPageContent } from "@/lib/cms/content";
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

// Text, images and buttons come from the admin panel (Pages → KeRaeva AI)
export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPageContent("keraevaAi");
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

export default async function KeRaevaAIPage() {
  const content = await getPageContent("keraevaAi");

  return (
    <Screen>
      <Header>
        <AIHero content={content.hero} />
      </Header>
      {content.journey.show && <AIJourney content={content.journey} />}
      {content.forProfessionals.show && <ProfessionalAI content={content.forProfessionals} />}
      {content.forOrganizations.show && <OrganizationAI content={content.forOrganizations} />}
      {content.scorecard.show && <ScorecardSection content={content.scorecard} />}
      {content.integrity.show && <IntegritySection content={content.integrity} />}
      {content.smartFeatures.show && <SmartFeaturesSection content={content.smartFeatures} />}
      {content.principles.show && <PrinciplesSection content={content.principles} />}
      {content.closingCtas.show && <NextCareer content={content.closingCtas} />}
      <Footer />
    </Screen>
  );
}
