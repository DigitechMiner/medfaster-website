import type { AboutContent } from "@/content/pages/about";
import type { TeamMember } from "@/lib/cms/team";
import { AboutHeroSection, StatsSection } from "./hero-and-stats";
import { JourneySection } from "./journey-section";
import { PurposeSection } from "./mission-and-purpose";
import { WhyKeRaevaSection } from "./goals-and-features";
import { TeamSection } from "./team-section";
import { CTASection } from "./cta-section";

// Body of the About page, shared with the in-app version (/mobile-about-us)
export function AboutSections({ content, team }: { content: AboutContent; team: TeamMember[] }) {
  return (
    <>
      {/* 1. Story */}
      <AboutHeroSection content={content.hero} />
      <StatsSection content={content.story} />
      {content.journey.show && <JourneySection content={content.journey} />}
      {/* 2. Mission & Vision */}
      {content.purpose.show && <PurposeSection content={content.purpose} />}
      {/* 3. Why KeRaeva */}
      {content.whyKeRaeva.show && <WhyKeRaevaSection content={content.whyKeRaeva} />}
      {/* 4. Team */}
      {content.team.show && <TeamSection content={content.team} members={team.filter((member) => member.showOnAbout)} />}
      {/* 5. CTA */}
      {content.closingCta.show && <CTASection content={content.closingCta} />}
    </>
  );
}
