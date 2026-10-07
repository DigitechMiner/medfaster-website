"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { LogoLoader } from "@/components/ui/logo-loader";

// Full-screen KeRaeva preloader for the first paint of a page load.
// It is server-rendered (so it shows immediately), fades out as soon as the
// page has loaded, and has a CSS fallback that hides it even without JS.
export function Preloader() {
  const [phase, setPhase] = useState<"visible" | "hiding" | "done">("visible");

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;
    const hide = () => {
      setPhase("hiding");
      hideTimer = setTimeout(() => setPhase("done"), 400);
    };

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
    }
    return () => {
      window.removeEventListener("load", hide);
      clearTimeout(hideTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading KeRaeva"
      aria-hidden={phase === "hiding"}
      className={cn(
        "kr-preloader fixed inset-0 z-[10000] flex items-center justify-center bg-white",
        "transition-opacity duration-400 ease-out motion-reduce:transition-none",
        phase === "hiding" ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <LogoLoader />
    </div>
  );
}
