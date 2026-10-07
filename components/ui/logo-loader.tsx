import Image from "next/image";
import { cn } from "@/lib/utils";

// KeRaeva logo with a pulsing mark and an indeterminate brand-orange bar.
// Shared by the page preloader and route loading states.
export function LogoLoader({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center gap-5", className)}>
      <Image
        src="/images/ui/KeRaeva-logo.svg"
        alt="KeRaeva"
        width={192}
        height={32}
        priority
        className="w-44 md:w-52 h-auto kr-logo-pulse"
      />
      <div className="relative h-1 w-32 md:w-40 overflow-hidden rounded-full bg-[#FEF0E7]" aria-hidden="true">
        <span className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-[#F3651B] kr-loader-bar" />
      </div>
    </div>
  );
}
