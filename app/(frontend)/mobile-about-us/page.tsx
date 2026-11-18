import type { Metadata } from "next";
import { Screen } from "@/components/global/screen";
import { PageTitle } from "@/components/global/page-title";
import { stripAccents } from "@/components/ui/accent-text";
import { getPageContent } from "@/lib/cms/content";
import { getTeam } from "@/lib/cms/team";
import { AboutSections } from "@/app/(frontend)/about/sections";

// In-app version of the About page: same content (Pages → About), no site header or footer
export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPageContent("about");
  return {
    title: stripAccents(seo.title),
    description: seo.description,
    // In-app / placeholder page: keep it out of search results
    robots: { index: false, follow: true },
  };
}

export default async function MobileAboutUsPage() {
  const [content, team] = await Promise.all([getPageContent("about"), getTeam()]);

  return (
    <Screen>
      <PageTitle title={content.pageHeader.title} crumbs={[{ label: "Home", href: "/" }, { label: content.pageHeader.breadcrumb }]} />
      <AboutSections content={content} team={team} />
    </Screen>
  );
}
