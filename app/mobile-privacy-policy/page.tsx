import type { Metadata } from "next";
import { Screen } from "@/components/global/screen";
import { LegalPageHeader } from "@/components/global/legal-page-header";
import { LegalDocument } from "@/components/global/legal-document";
import { PRIVACY_POLICY } from "@/lib/legal/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy | KeRaeva",
  description: "How KeRaeva collects, uses and protects personal information.",
  robots: { index: false, follow: false },
};

export default function MobilePrivacyPolicyPage() {
  return (
    <Screen>
      <LegalPageHeader title={PRIVACY_POLICY.title} showBreadcrumb={false} />
      <LegalDocument document={PRIVACY_POLICY} />
    </Screen>
  );
}
