import type { Metadata } from "next";
import { Screen } from "@/components/global/screen";
import { LegalPageHeader } from "@/components/global/legal-page-header";
import { LegalDocument } from "@/components/global/legal-document";
import { TERMS_AND_CONDITIONS } from "@/lib/legal/terms";

export const metadata: Metadata = {
  title: "Terms & Conditions | KeRaeva",
  description: "The terms that apply to users of the KeRaeva platform.",
  robots: { index: false, follow: false },
};

export default function MobileTermsConditionsPage() {
  return (
    <Screen>
      <LegalPageHeader title={TERMS_AND_CONDITIONS.title} showBreadcrumb={false} />
      <LegalDocument document={TERMS_AND_CONDITIONS} />
    </Screen>
  );
}
