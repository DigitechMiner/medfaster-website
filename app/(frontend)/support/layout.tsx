import type { Metadata } from "next";
import { JsonLd } from "@/components/global/json-ld";
import { SUPPORT_FAQS } from "@/utils/constant/faqs";

// Metadata lives here because the page itself is a client component
export const metadata: Metadata = {
  title: "Support | KeRaeva",
  description:
    "Get help with the KeRaeva app or recruiter platform: accounts, verification, jobs, shifts, check-in, payments and AI interviews.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: SUPPORT_FAQS.map((faq) => ({
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
