import type { Metadata } from "next";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { LegalPageHeader } from "@/components/global/legal-page-header";
import { LegalDocument } from "@/components/global/legal-document";
import { TERMS_AND_CONDITIONS } from "@/lib/legal/terms";

export const metadata: Metadata = {
  title: "Terms & Conditions | KeRaeva",
  description: "The terms that apply to healthcare organizations and healthcare professionals using the KeRaeva platform.",
};

export default function TermsConditionsPage() {
  return (
    <Screen>
      <Header>
        <LegalPageHeader title={TERMS_AND_CONDITIONS.title} />
      </Header>
      <LegalDocument document={TERMS_AND_CONDITIONS} />
      <Footer />
    </Screen>
  );
}
