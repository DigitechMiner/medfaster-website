"use client";

import { useRouter } from "next/navigation";
import { CustomButton, type CustomButtonProps } from "@/components/ui/custom-button";
import { useModalStore, type ModalId } from "@/stores/modalStore";

// CustomButton that can be used from server components: it either opens a
// site-wide modal or navigates to a page.
type ActionButtonProps = Omit<CustomButtonProps, "onClick"> &
  ({ modal: ModalId; href?: never } | { href: string; modal?: never });

export function ActionButton({ modal, href, ...props }: ActionButtonProps) {
  const router = useRouter();
  const openModal = useModalStore((state) => state.openModal);

  return (
    <CustomButton
      {...props}
      onClick={() => (modal ? openModal(modal) : router.push(href!))}
    />
  );
}
