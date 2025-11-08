import React from "react";
import Image from "next/image";
import { Paragraph } from "@/components/ui/paragraph";
import { cn } from "@/lib/utils";

interface CardProps {
  icon?: string;
  iconAlt?: string;
  title: string;
  description: string;
  className?: string;

}

export function Card({
  icon,
  iconAlt,
  title,
  description,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "relative bg-[#FDFDFD] rounded-lg p-4 md:p-6 lg:p-8 border border-gray-200 overflow-hidden gap-4 md:gap-6 lg:gap-8 ",
        className
      )}
      style={{
        backgroundImage: "url('/images/patterns/pattern-4.png')",
        backgroundSize: "auto",
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
        }}

    >
      {/* Icon */}
      {icon && (
        <div className="flex-shrink-0 mb-4 ">
        <Image
          src={icon}
          alt={iconAlt || title}
          width={100}
          height={100}
        />
      </div>
      )}

      <div className="flex flex-col items-start gap-4 relative z-10">
        <Paragraph
          size="base"
          weight="semibold"
          className="text-[#252B37]"
        >
          {title}
        </Paragraph>

        <Paragraph size="sm" className="text-[#717680] leading-relaxed">
          {description}
        </Paragraph>
      </div>
    </div>
  );
}
