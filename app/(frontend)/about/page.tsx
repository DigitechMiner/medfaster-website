import type { Metadata } from "next";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { PageTitle } from "@/components/global/page-title";
import { stripAccents } from "@/components/ui/accent-text";
import { getPageContent } from "@/lib/cms/content";
import { getTeam } from "@/lib/cms/team";
import { AboutSections } from "./sections";

// Text, images and buttons come from the admin panel (Pages → About)
export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPageContent("about");
  return { title: stripAccents(seo.title), description: seo.description };
}

export default async function AboutUsPage() {
  const [content, team] = await Promise.all([getPageContent("about"), getTeam()]);

  return (
    <Screen>
      <Header>
        <PageTitle title={content.pageHeader.title} crumbs={[{ label: "Home", href: "/" }, { label: content.pageHeader.breadcrumb }]} />
      </Header>
      <AboutSections content={content} team={team} />
      <Footer />
    </Screen>
  );
}
