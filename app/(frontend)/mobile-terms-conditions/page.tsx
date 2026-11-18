import type { Metadata } from "next";
import { Screen } from "@/components/global/screen";
import { LegalPageHeader } from "@/components/global/legal-page-header";
import { LegalDocument } from "@/components/global/legal-document";
import { getLegalDocument } from "@/lib/cms/content";

export const metadata: Metadata = {
  title: "Terms & Conditions | KeRaeva",
  description: "The terms that apply to users of the KeRaeva platform.",
  robots: { index: false, follow: false },
};

export default async function MobileTermsConditionsPage() {
  const TERMS_AND_CONDITIONS = await getLegalDocument("terms-conditions");
  return (
    <Screen>
      <LegalPageHeader title={TERMS_AND_CONDITIONS.title} showBreadcrumb={false} />
      <LegalDocument document={TERMS_AND_CONDITIONS} />
    </Screen>
  );
}
