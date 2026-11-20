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

async function reveal(path: string) {
  const id = `field-${path.replace(/\./g, "__")}`;
  const find = () => document.getElementById(id) ?? document.querySelector<HTMLElement>(`[id^="${id}"]`);
  let el = find();
  if (!el) {
    // Fields live in tabs named after the first part of the path
    const tab = humanize(path.split(".")[0]);
    const button = [...document.querySelectorAll<HTMLButtonElement>(".tabs-field__tab-button")].find((b) => b.textContent?.trim() === tab);
    button?.click();
    for (let i = 0; i < 15 && !el; i += 1) {
      await sleep(100);
      el = find();
    }
  }
  if (!el) {
    // Collapsed blocks don't draw their fields until opened: open each row on the path
    const parts = path.split(".");
    for (let i = 1; i < parts.length && !el; i += 1) {
      if (!/^\d+$/.test(parts[i])) continue;
      const listPath = parts.slice(0, i).join(".");
      const row =
        document.getElementById(`${listPath}-row-${parts[i]}`) ??
        document.getElementById(`${listPath.replace(/\./g, "__")}-row-${parts[i]}`);
      const collapsed = row?.querySelector(".collapsible--collapsed") ?? (row?.classList.contains("collapsible--collapsed") ? row : null);
      collapsed?.querySelector<HTMLButtonElement>(".collapsible__toggle")?.click();
      // Blocks render their fields from the server, which can take a moment
      for (let j = 0; j < 30 && !el; j += 1) {
        await sleep(100);
        el = find();
      }
    }
  }
  if (!el) return false;
  // Open any collapsed list rows around the field
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
