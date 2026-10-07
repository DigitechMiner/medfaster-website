import type { Metadata } from "next";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { LegalPageHeader } from "@/components/global/legal-page-header";
import { LegalDocument } from "@/components/global/legal-document";
import { PRIVACY_POLICY } from "@/lib/legal/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy | KeRaeva",
  description: "How KeRaeva collects, uses and protects personal information, including AI interview data, under PIPEDA and Canadian privacy law.",
};

export default function PrivacyPolicyPage() {
  return (
    <Screen>
      <Header>
        <LegalPageHeader title={PRIVACY_POLICY.title} />
      </Header>
      <LegalDocument document={PRIVACY_POLICY} />
      <Footer />
    </Screen>
  );
}
