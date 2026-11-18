import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { stripAccents } from "@/components/ui/accent-text";
import { HeroBlock } from "@/components/blocks/hero";
import { RenderBlocks } from "@/components/blocks/render-blocks";
import { getCustomPage, getCustomPageList } from "@/lib/cms/pages";
import { BASE_OPEN_GRAPH } from "@/lib/seo/site";

// Custom pages built in the admin panel (Pages → New page).
// Published pages are generated at build time; new ones render on first visit
// and refresh whenever a page is saved.
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const pages = await getCustomPageList();
  return pages.map((page) => ({ slug: page.slug }));
}

async function loadPage(slug: string) {
  const { isEnabled: draft } = await draftMode();
  return getCustomPage(slug, draft);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await loadPage(slug);
  if (!page) return {};
  const title = page.seo?.title || `${page.title} | KeRaeva`;
  const description = page.seo?.description || undefined;
  return {
    title,
    description,
    openGraph: { ...BASE_OPEN_GRAPH, title, description },
    robots: page.seo?.noindex ? { index: false, follow: true } : undefined,
  };
}

export default async function CustomPage({ params }: Props) {
  const { slug } = await params;
  const page = await loadPage(slug);
  if (!page) notFound();

  const sections = page.sections ?? [];
  const [first, ...rest] = sections;
  const heroFirst = first?.blockType === "hero";

  return (
    <Screen>
      <Header>
        {heroFirst ? (
          <HeroBlock block={first} first />
        ) : (
          <Section className="pt-2 md:pt-4 lg:pt-6 xl:pt-8">
            <div className="space-y-4">
              <Heading as="h1" size="lg" className="text-[#252B37]" weight="normal">
                {stripAccents(page.title)}
              </Heading>
              <div className="flex items-center gap-2">
                <Link href="/" className="inline-block py-1 text-[#252B37] hover:text-[#F3651B] transition-colors text-lg">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4 text-[#717680]" />
                <Paragraph size="lg" className="text-[#717680]">
                  {stripAccents(page.title)}
                </Paragraph>
              </div>
            </div>
          </Section>
        )}
      </Header>

      <RenderBlocks sections={heroFirst ? rest : sections} />

      <Footer />
    </Screen>
  );
}
