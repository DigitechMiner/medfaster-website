import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { PageTitle } from "@/components/global/page-title";
import { stripAccents } from "@/components/ui/accent-text";
import { getPageContent } from "@/lib/cms/content";
import { ContactInfoSection } from "./components/info";
import { ContactForm } from "./components/form";

// Text comes from the admin panel (Pages → Contact Us)
export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPageContent("contact");
  return { title: stripAccents(seo.title), description: seo.description };
}

export default async function ContactUsPage() {
  const content = await getPageContent("contact");
  return (
    <Screen>
      <Header>
        <PageTitle title={content.pageHeader.title} crumbs={[{ label: "Home", href: "/" }, { label: content.pageHeader.breadcrumb }]} />
      </Header>

      <Section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <ContactInfoSection content={content.intro} />
        <ContactForm />
      </Section>

      {/* Footer */}
      <Footer />
    </Screen>
  );
}
