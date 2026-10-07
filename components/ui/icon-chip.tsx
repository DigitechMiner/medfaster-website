import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Site-wide icon treatment: a lucide outline icon inside a round chip.
// "light" = soft orange chip on white, "white" = white chip on orange panels,
// "solid" = orange chip with a white icon (contact details).
interface IconChipProps {
  icon: LucideIcon;
  variant?: "light" | "white" | "solid";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: { chip: "w-10 h-10", icon: "w-5 h-5" },
  md: { chip: "w-12 h-12", icon: "w-6 h-6" },
  lg: { chip: "w-16 h-16", icon: "w-8 h-8" },
};

const variantClasses = {
  light: { chip: "bg-[#FEF0E7]", icon: "text-[#F3651B]" },
  white: { chip: "bg-white", icon: "text-[#F3651B]" },
  solid: { chip: "bg-[#F3651B]", icon: "text-white" },
};

export function IconChip({ icon: Icon, variant = "light", size = "md", className }: IconChipProps) {
  return (
    <span
      className={cn(
        "flex-shrink-0 rounded-full flex items-center justify-center",
        sizeClasses[size].chip,
        variantClasses[variant].chip,
        className
      )}
    >
      <Icon className={cn(variantClasses[variant].icon, sizeClasses[size].icon)} strokeWidth={1.5} aria-hidden="true" />
    </span>
  );
}
