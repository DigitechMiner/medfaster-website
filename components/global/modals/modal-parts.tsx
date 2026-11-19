"use client";

import Image from '@/components/ui/image';
import { useSiteSettings } from "@/components/providers/site-settings";
import { X } from 'lucide-react';

interface CloseButtonProps {
  className?: string;
  onClose: () => void;
}

export const CloseButton = ({ className, onClose }: CloseButtonProps) => (
  <button
    onClick={onClose}
    className={className}
    aria-label="Close modal"
  >
    <X size={20} />
  </button>
);

export function Logo() {
  const { branding } = useSiteSettings();
  return (
    <div className="mb-6 flex justify-center">
      <Image src={branding.logo} alt="KeRaeva" width={150} height={40} />
    </div>
  );
}
