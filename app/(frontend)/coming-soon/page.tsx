import type { Metadata } from "next";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { ComingSoon } from "@/components/global/coming-soon";
import { Screen } from "@/components/global/screen";
import { stripAccents } from "@/components/ui/accent-text";
import { getPageContent } from "@/lib/cms/content";

// Text and image come from the admin panel (Pages → Coming Soon)
export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPageContent("comingSoon");
  return {
    title: stripAccents(seo.title),
    description: seo.description,
    // In-app / placeholder page: keep it out of search results
    robots: { index: false, follow: true },
  };
}

export default async function ComingSoonPage() {
  const content = await getPageContent("comingSoon");
  return (
    <Screen>
      <Header>
        <ComingSoon content={content.content} />
      </Header>
      <Footer />
    </Screen>
  );
}
