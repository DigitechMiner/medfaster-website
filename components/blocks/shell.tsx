import type { CSSProperties, ReactNode } from "react";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

export type Background = "white" | "grey" | "orange" | null | undefined;

const ORANGE_STYLE: CSSProperties = {
  backgroundImage: "url(/images/patterns/orange-pattern-2.webp)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundBlendMode: "overlay",
  backgroundRepeat: "no-repeat",
};

// The site's section card with one of three backgrounds
export function BlockSection({ background, className, children }: { background?: Background; className?: string; children: ReactNode }) {
  if (background === "orange") {
    return (
      <Section backgroundColor="bg-[#F3651B]" className={cn("relative overflow-hidden text-white", className)} style={ORANGE_STYLE}>
        {children}
      </Section>
    );
  }
  return (
    <Section backgroundColor={background === "grey" ? "bg-gray-50" : "bg-white"} className={className}>
      {children}
    </Section>
  );
}

// Text colours that read well on each background
export function tones(background: Background) {
  const orange = background === "orange";
  return {
    orange,
    heading: orange ? "text-white" : "text-[#252B37]",
    body: orange ? "text-white/90" : "text-[#717680]",
    accent: orange ? "text-white underline decoration-white/40 underline-offset-4" : undefined,
  };
}
