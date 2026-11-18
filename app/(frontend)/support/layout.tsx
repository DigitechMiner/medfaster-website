import type { Metadata } from "next";
import { JsonLd } from "@/components/global/json-ld";
import { getFaqs } from "@/lib/cms/content";

// Metadata lives here because the page itself is a client component
export const metadata: Metadata = {
  title: "Support | KeRaeva",
  description:
    "Get help with the KeRaeva app or recruiter platform: accounts, verification, jobs, shifts, check-in, payments and AI interviews.",
};

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
