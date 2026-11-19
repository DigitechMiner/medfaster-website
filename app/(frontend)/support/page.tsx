import { Section } from "@/components/ui/section";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { PageTitle } from "@/components/global/page-title";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { AccentText } from "@/components/ui/accent-text";
import { ReportIssueForm } from "./components/form";

import { FreqAskQuest } from "./components/FreqAskQuest";
import { ContactInfo } from "./components/ContactInfo";
import { getFaqs, getPageContent } from "@/lib/cms/content";

// Text comes from the admin panel (Pages → Support); questions from Content → FAQs
export default async function ReportAnIssuePage() {
  const [content, faqs] = await Promise.all([getPageContent("support"), getFaqs()]);
  return (
    <Screen>
      <Header>
        <PageTitle title={content.pageHeader.title} crumbs={[{ label: "Home", href: "/" }, { label: content.pageHeader.breadcrumb }]} />
      </Header>
      <Section>
        <ContactInfo content={content.intro} />
      </Section>

      {/* Form */}
      <Section>
        <div className="space-y-4 mb-8">
          <Heading as="h2" size="md" className="text-[#252B37]">
            <AccentText text={content.form.heading} />
          </Heading>
          <Paragraph size="lg" className="text-[#717680]">
            {content.form.body}
          </Paragraph>
        </div>
        <ReportIssueForm content={content.form} />
      </Section>

      {content.faqs.show && faqs.length > 0 && (
        <Section id="faq" className="scroll-mt-24">
          <FreqAskQuest faqs={faqs} content={content.faqs} />
        </Section>
      )}
      <Footer />
    </Screen>
  );
}
