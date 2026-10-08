import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  className?: string;
  id?: string;
  children: React.ReactNode;
}

// One type scale for the whole site: size + line height live here so pages
// don't need per-heading overrides.
//   lg - page titles (h1)        md - section titles (h2)
//   sm - sub-section titles      xs - card titles (h3)
const sizeClasses = {
  xs: "text-xl leading-snug",
  sm: "text-2xl md:text-3xl lg:text-4xl leading-tight",
  md: "text-3xl md:text-4xl lg:text-5xl leading-tight",
  lg: "text-4xl md:text-5xl lg:text-6xl leading-[1.1]",
  xl: "text-5xl md:text-6xl lg:text-7xl leading-[1.1]",
  "2xl": "text-6xl md:text-7xl lg:text-8xl leading-[1.1]",
};

const weightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export function Heading({
  as = "h2",
  size = "md",
  weight = "medium",
  className = "",
  id,
  children,
}: HeadingProps) {
  const Component = as;

  return (
    <Component id={id} className={cn(sizeClasses[size], weightClasses[weight], className)}>
      {children}
    </Component>
  );
}
