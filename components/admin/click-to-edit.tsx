"use client";

import { useEffect, useRef } from "react";
import { toast, useAllFormFields } from "@payloadcms/ui";
import { humanize } from "@/cms/fields/from-defaults";

// Click-to-edit for Live Preview: clicking text or an image in the preview
// (components/global/preview-mode.tsx) sends what was clicked here, and the
// editor jumps to the field that holds it: switches tab, opens collapsed
// rows, scrolls to the field and highlights it.

type Clicked = { type: "kr:edit-field"; text?: string; alt?: string };
type FieldState = Record<string, { value?: unknown } | undefined>;

const clean = (value: string) => value.replace(/\*\*/g, "").replace(/\s+/g, " ").trim().toLowerCase();
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
// SEO fields often repeat a heading; prefer the field that is actually on the page
const rank = (path: string) => (path.startsWith("seo.") ? 1 : 0);

function findPath(fields: FieldState, clicked: Clicked): string | null {
  const strings = Object.entries(fields)
    .filter(([, field]) => typeof field?.value === "string" && (field.value as string).trim() !== "")
    .map(([path, field]) => ({ path, value: clean(field!.value as string) }))
    .sort((a, b) => rank(a.path) - rank(b.path));

  if (clicked.alt) {
    const alt = clean(clicked.alt);
    const altField = strings.find((s) => /Alt$/.test(s.path) && s.value === alt);
    if (altField) {
      const imagePath = altField.path.replace(/Alt$/, "");
      return imagePath in fields ? imagePath : altField.path;
    }
  }
  if (!clicked.text) return null;
  const text = clean(clicked.text);
  if (!text) return null;
  const exact = strings.find((s) => s.value === text);
  if (exact) return exact.path;
  // The clicked block contains a field's text (e.g. a heading with a highlighted word)
  const inside = strings.filter((s) => s.value.length >= 3 && text.includes(s.value)).sort((a, b) => b.value.length - a.value.length)[0];
  if (inside) return inside.path;
  // The clicked text is part of a longer field (e.g. one line of a paragraph)
  const around = text.length >= 4 ? strings.filter((s) => s.value.includes(text)).sort((a, b) => a.value.length - b.value.length)[0] : undefined;
  return around?.path ?? null;
}

// Payload names list rows after the list's path with dashes: "journey.steps" row 2 → "journey-steps-row-2"
const rowId = (listPath: string, index: string) => `${listPath.split(".").join("-")}-row-${index}`;

// Opens every collapsed list row along the path that is already on the page
function openRows(parts: string[]) {
  for (let i = 1; i < parts.length; i += 1) {
    if (!/^\d+$/.test(parts[i])) continue;
    const row = document.getElementById(rowId(parts.slice(0, i).join("."), parts[i]));
    const toggle = row?.querySelector<HTMLButtonElement>(".collapsible__toggle--collapsed");
    toggle?.click();
  }
}

// Payload only draws fields once they are near the visible screen, so scroll the
// deepest part of the path that already exists into view to get the rest drawn
function bringNearView(parts: string[]) {
  for (let i = parts.length; i > 0; i -= 1) {
    const sub = parts.slice(0, i);
    const last = sub[sub.length - 1];
    const el = /^\d+$/.test(last)
      ? document.getElementById(rowId(sub.slice(0, -1).join("."), last))
      : document.getElementById(`field-${sub.join("__")}`);
    if (el) {
      el.scrollIntoView({ block: "start" });
      return;
    }
  }
}

async function reveal(path: string) {
  const id = `field-${path.replace(/\./g, "__")}`;
  const find = () => document.getElementById(id) ?? document.querySelector<HTMLElement>(`[id^="${id}"]`);
  const parts = path.split(".");
  let el = find();
  if (!el) {
    // Fields live in tabs named after the first part of the path
    const tab = humanize(parts[0]);
    const button = [...document.querySelectorAll<HTMLButtonElement>(".tabs-field__tab-button")].find((b) => b.textContent?.trim() === tab);
    if (button && !button.classList.contains("tabs-field__tab-button--active")) button.click();
  }
  // Open rows and scroll closer until the field is drawn (blocks can take a moment)
  for (let i = 0; i < 40 && !el; i += 1) {
    if (i % 4 === 0) {
      openRows(parts);
      bringNearView(parts);
    }
    await sleep(100);
    el = find();
  }
  if (!el) return false;
  // Open any collapsed rows still around the field
  for (let i = 0; i < 6; i += 1) {
    const collapsed = el.closest(".collapsible--collapsed");
    if (!collapsed) break;
    collapsed.querySelector<HTMLButtonElement>(".collapsible__toggle")?.click();
    await sleep(250);
  }
  const wrapper = (el.closest(".field-type") as HTMLElement | null) ?? el;
  wrapper.scrollIntoView({ block: "center", behavior: "smooth" });
  (el as HTMLElement).focus?.({ preventScroll: true });
  wrapper.classList.remove("kr-field-flash");
  void wrapper.offsetWidth; // restart the highlight animation
  wrapper.classList.add("kr-field-flash");
  return true;
}

export function ClickToEdit() {
  const [fields] = useAllFormFields();
  const latest = useRef<FieldState>(fields as FieldState);
  useEffect(() => {
    latest.current = fields as FieldState;
  }, [fields]);

  useEffect(() => {
    const onMessage = async (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      const data = event.data as Clicked | undefined;
      if (!data || data.type !== "kr:edit-field") return;
      const path = findPath(latest.current, data);
      if (path && (await reveal(path))) return;
      toast.info(
        "That part isn't on this page's form. It may be in Header & Footer, Site Settings, or a list such as Testimonials, Jobs or FAQs."
      );
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return null;
}
