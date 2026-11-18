"use client";

import { useRouter } from "next/navigation";
import { CustomButton, type CustomButtonProps } from "@/components/ui/custom-button";
import { useModalStore, type ModalId } from "@/stores/modalStore";
import { useSiteSettings } from "@/components/providers/site-settings";

export type Cta = { label: string; link: string };

// Special links editors can use to open the site's popups
const MODAL_LINKS: Record<string, ModalId> = {
  "#get-app": "get-app",
  "#get-started": "get-started",
  "#request-demo": "request-demo",
};

export function useCtaAction() {
  const router = useRouter();
  const openModal = useModalStore((state) => state.openModal);
  const { apps } = useSiteSettings();

  return (link: string) => {
    const modal = MODAL_LINKS[link];
    if (modal) return openModal(modal);
    if (link === "#start-hiring") return window.open(apps.recruiterRegistrationUrl, "_blank", "noopener");
    if (/^(https?:|mailto:|tel:)/.test(link)) return window.open(link, "_blank", "noopener");
    router.push(link);
  };
}

// A CustomButton whose label and destination come from the CMS
export function CtaButton({ cta, ...props }: { cta: Cta } & Omit<CustomButtonProps, "onClick" | "children">) {
  const go = useCtaAction();
  if (!cta?.label) return null;
  return (
    <CustomButton {...props} onClick={() => cta.link && go(cta.link)}>
      {cta.label}
    </CustomButton>
  );
}
