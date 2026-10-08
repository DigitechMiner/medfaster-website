"use client";

import { useState } from "react";
import NextImage, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

// next/image with a grey KeRaeva mark shown while the image loads and kept if
// it fails. Skipped for vector SVGs and tiny images, which load instantly.
export default function Image({ className, onLoad, onError, ...props }: ImageProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const src = typeof props.src === "string" ? props.src : "";
  const width = typeof props.width === "number" ? props.width : Number(props.width ?? 0);
  const usePlaceholder = !src.endsWith(".svg") && !(width > 0 && width < 48);

  return (
    <NextImage
      {...props}
      className={cn(
        usePlaceholder && status !== "loaded" && "kr-img-placeholder",
        status === "error" && "kr-img-error",
        className
      )}
      onLoad={(event) => {
        setStatus("loaded");
        onLoad?.(event);
      }}
      onError={(event) => {
        // Keep the description for screen readers without the browser's
        // broken-image alt text being drawn over the placeholder
        const img = event.currentTarget;
        if (img.alt) img.setAttribute("aria-label", img.alt);
        setStatus("error");
        onError?.(event);
      }}
    />
  );
}
