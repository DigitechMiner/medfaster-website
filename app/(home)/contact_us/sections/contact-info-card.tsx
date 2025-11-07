import { Paragraph } from "@/components/ui/paragraph";
import React from "react";

interface ContactInfoCardProps {
  icon: React.ComponentType<{ className: string }>;
  label: string;
  content: React.ReactNode;
}

export function ContactInfoCard({
  icon: Icon,
  label,
  content,
}: ContactInfoCardProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F4781B] flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <Paragraph size="sm" weight="medium" className="text-[#717680]">
          {label}
        </Paragraph>
        <div className="mt-1">{content}</div>
      </div>
    </div>
  );
}
