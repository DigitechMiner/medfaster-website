import type { Metadata } from "next";
import { JsonLd } from "@/components/global/json-ld";
import { getFaqs, getPageContent } from "@/lib/cms/content";
import { stripAccents } from "@/components/ui/accent-text";

// Title and description come from the admin panel (Pages → Support)
export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPageContent("support");
  return { title: stripAccents(seo.title), description: seo.description };
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const faqs = await getFaqs();
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
      {children}
    </>
  );
}
