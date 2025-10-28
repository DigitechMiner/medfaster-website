import React from "react";
import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

interface FeatureCardProps {
  title: string;
  description?: string;
  visual?: {
    type: "image" | "icon";
    content: string | LucideIcon;
    alt?: string;
  };
  imageFullWidth?: boolean;
  imageCenter?: boolean;
}

export function FeatureCard({ title, description, visual, imageFullWidth = false, imageCenter = false }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-start text-left border-b border-[#E9EAEB] pb-6">
      {/* Visual element (image or icon) */}
      {visual && (
        <div className={imageFullWidth ? "w-full mb-6" : ""}>
          {visual.type === "image" && (
            <div className={imageFullWidth ? "relative w-full aspect-[500/327]" : "relative w-12 h-12 mb-4"}>
              <Image 
                src={visual.content as string}
                alt={visual.alt || title}
                fill
                className={`object-contain ${imageCenter ? "object-center md:object-left" : "object-left"}`}
                sizes={imageFullWidth ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" : "48px"}
                quality={100}
              />
            </div>
          )}
          {visual.type === "icon" && (
            <>{React.createElement(visual.content as LucideIcon, { className: "w-12 h-12 text-[#F4781B] mb-4" })}</>
          )}
        </div>
      )}

      {/* Title */}
      <Heading as="h3" size="xs" weight="medium" className="text-[#252B37] mb-3">
        {title}
      </Heading>

      {/* Description */}
      {description && (
        <Paragraph className="text-[#717680] leading-relaxed">
          {description}
        </Paragraph>
      )}
    </div>
  );
}

