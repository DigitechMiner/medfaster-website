"use client";

import { useRowLabel } from "@payloadcms/ui";

// Shows a list item's own title in the admin instead of "Item 01"
export function RowLabel() {
  const { data, rowNumber } = useRowLabel<Record<string, unknown>>();
  const text = ["title", "label", "question", "name", "text", "heading"]
    .map((key) => data?.[key])
    .find((value): value is string => typeof value === "string" && value.trim() !== "");
  const plain = text?.replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
  return <span>{plain ? (plain.length > 80 ? plain.slice(0, 77) + "…" : plain) : `Item ${String((rowNumber ?? 0) + 1).padStart(2, "0")}`}</span>;
}
