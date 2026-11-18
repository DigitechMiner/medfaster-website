"use client";

import { ArrowRight } from "lucide-react";
import { CtaButton } from "@/components/ui/cta-button";

type ButtonValue = { label?: string | null; link?: string | null } | null | undefined;

// A section button: popups, recruiter sign-up, site pages or full URLs
export function BlockButton({ button, variant = "primary", arrow = true, size = "lg" }: { button: ButtonValue; variant?: "primary" | "secondary" | "inverse"; arrow?: boolean; size?: "md" | "lg" }) {
  if (!button?.label) return null;
  return (
    <CtaButton
      cta={{ label: button.label, link: button.link ?? "" }}
      variant={variant}
      size={size}
      rightIcon={arrow ? ArrowRight : undefined}
      className="my-0"
    />
  );
}
