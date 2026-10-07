"use client";

import { ReactNode, useEffect, useRef } from "react";
import { CloseButton, Logo } from "@/components/global/otpModal/components";
import { cn } from "@/lib/utils";

interface ModalShellProps {
  isOpen: boolean;
  onClose: () => void;
  labelledBy: string;
  children: ReactNode;
  className?: string;
}

export function ModalShell({ isOpen, onClose, labelledBy, children, className }: ModalShellProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Escape to close, lock page scroll, and move focus into the dialog
  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        className={cn(
          "relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200 focus:outline-none",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          onClose={onClose}
        />
        <Logo />
        {children}
      </div>
    </div>
  );
}
