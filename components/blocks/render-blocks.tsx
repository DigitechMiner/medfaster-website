import type { PageSection } from "@/lib/cms/pages";
import { getOpenJobs, getQuotes } from "@/lib/cms/pages";
import { HeroBlock } from "./hero";
import { TextBlock } from "./text";
import { ImageTextBlock } from "./image-text";
import { FeatureCardsBlock } from "./feature-cards";
import { StepsBlock } from "./steps";
import { FaqBlock } from "./faq";
import { TestimonialsBlock } from "./testimonials";
import { JobOpeningsBlock } from "./job-openings";
import { CtaBlock } from "./cta";

// Draws a custom page's sections in order
export async function RenderBlocks({ sections }: { sections: PageSection[] }) {
  const needsQuotes = sections.some((s) => s.blockType === "testimonials");
  const needsJobs = sections.some((s) => s.blockType === "jobOpenings");
  const [quotes, jobs] = await Promise.all([needsQuotes ? getQuotes() : [], needsJobs ? getOpenJobs() : []]);

  return (
    <>
      {sections.map((section, index) => {
        const key = section.id ?? `${section.blockType}-${index}`;
        switch (section.blockType) {
          case "hero":
            return <HeroBlock key={key} block={section} first={index === 0} />;
          case "text":
            return <TextBlock key={key} block={section} />;
          case "imageText":
            return <ImageTextBlock key={key} block={section} />;
          case "featureCards":
            return <FeatureCardsBlock key={key} block={section} />;
          case "steps":
            return <StepsBlock key={key} block={section} />;
          case "faq":
            return <FaqBlock key={key} block={section} index={index} />;
          case "testimonials":
            return <TestimonialsBlock key={key} block={section} quotes={quotes} />;
          case "jobOpenings":
            return <JobOpeningsBlock key={key} block={section} jobs={jobs} />;
          case "cta":
            return <CtaBlock key={key} block={section} />;
          default:
            return null;
        }
      })}
    </>
  );
}
