import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { PageTitle } from "@/components/global/page-title";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { CtaButton } from "@/components/ui/cta-button";
import { AccentText, stripAccents } from "@/components/ui/accent-text";
import { getPageContent } from "@/lib/cms/content";
import { getTeam } from "@/lib/cms/team";
import { TeamGrid } from "./team-grid";

// Text comes from Pages → Our Team; people from Content → Team
export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPageContent("ourTeam");
  return { title: stripAccents(seo.title), description: seo.description };
}

export default async function TeamPage() {
  const [content, team] = await Promise.all([getPageContent("ourTeam"), getTeam()]);
  const { pageHeader, intro } = content;

  return (
    <Screen>
      <Header>
        <PageTitle title={pageHeader.title} crumbs={[{ label: pageHeader.parentLabel, href: pageHeader.parentLink || "/about" }, { label: pageHeader.breadcrumb }]} />
      </Header>

      <Section className="pb-10 sm:pb-12 lg:pb-16">
        <div className="mb-8 sm:mb-10">
          {intro.eyebrow && (
            <Paragraph size="lg" className="mb-2 font-semibold text-[#F3651B]">
              {intro.eyebrow}
            </Paragraph>
          )}

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Heading as="h2" size="sm" className="mb-3 text-[#252B37]">
                <AccentText text={intro.heading} />
              </Heading>
              <Paragraph size="base" className="text-[#717680]">
                {intro.body}
              </Paragraph>
            </div>

            <CtaButton cta={intro.cta} className="w-full sm:w-fit" size="lg" />
          </div>
        </div>

        <TeamGrid members={team} filters={content.filters} />
      </Section>
      <Footer />
    </Screen>
  );
}
