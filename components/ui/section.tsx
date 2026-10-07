import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  backgroundColor?: string;
  padding?: boolean;
  as?: "section" | "footer" | "div";
}

export function Section({ 
  children, 
  className = "", 
  style = {},
  backgroundColor = "bg-white",
  padding = true,
  as: Component = "section",
}: SectionProps) {
  const paddingClasses = padding ? "p-4 md:p-8 lg:p-16" : "p-0";
  
  return (
    <Component
      className={`w-full ${backgroundColor} rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl ${paddingClasses} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
}

