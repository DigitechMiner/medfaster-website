"use client";

import { useEffect, useSyncExternalStore } from "react";
import { usePathname, useRouter } from "next/navigation";
import { RefreshRouteOnSave } from "@payloadcms/live-preview-react";

const noop = () => () => {};
// Elements whose text editors can change
const EDITABLE = "h1,h2,h3,h4,h5,h6,p,li,blockquote,figcaption,button,a,label,dt,dd,td,th,span";

// Shown only while draft mode is on (an editor is previewing unpublished changes).
// Inside the admin's Live Preview it re-renders the page each time the draft
// autosaves; in a normal tab it shows a small bar to leave preview mode.
export function PreviewMode() {
  const router = useRouter();
  const pathname = usePathname();
  const inEditor = useSyncExternalStore(noop, () => window.self !== window.top, () => true);
  const origin = useSyncExternalStore(noop, () => window.location.origin, () => "");

  // Click-to-edit inside the editor: hovering outlines text and images, and a
  // click tells the editor what was clicked (Alt/⌥-click still works normally)
  useEffect(() => {
    if (!inEditor) return;
    const style = document.createElement("style");
    style.textContent =
      ".kr-edit-hover{outline:2px solid #F3651B !important;outline-offset:3px;border-radius:4px;cursor:pointer !important}";
    document.head.append(style);
    let hovered: Element | null = null;
    const pick = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return null;
      return target.closest("img") ?? target.closest(EDITABLE) ?? null;
    };
    const over = (event: MouseEvent) => {
      const next = event.altKey ? null : pick(event.target);
      if (next === hovered) return;
      hovered?.classList.remove("kr-edit-hover");
      hovered = next;
      hovered?.classList.add("kr-edit-hover");
    };
    const click = (event: MouseEvent) => {
      if (event.altKey) return;
      const target = pick(event.target);
      if (!target) return;
      event.preventDefault();
      event.stopPropagation();
      hovered?.classList.remove("kr-edit-hover");
      hovered = null;
      const message =
        target instanceof HTMLImageElement
          ? { type: "kr:edit-field", alt: target.alt }
          : { type: "kr:edit-field", text: (target as HTMLElement).innerText };
      window.parent.postMessage(message, window.location.origin);
    };
    document.addEventListener("mouseover", over, true);
    document.addEventListener("click", click, true);
    return () => {
      document.removeEventListener("mouseover", over, true);
      document.removeEventListener("click", click, true);
      hovered?.classList.remove("kr-edit-hover");
      style.remove();
    };
  }, [inEditor]);

  return (
    <>
      {origin && <RefreshRouteOnSave refresh={() => router.refresh()} serverURL={origin} />}
      {!inEditor && (
        <div className="fixed bottom-4 left-4 z-[70] flex items-center gap-3 rounded-full bg-[#252B37] px-4 py-2 text-sm text-white shadow-lg">
          <span className="h-2 w-2 rounded-full bg-[#F3651B]" aria-hidden="true" />
          Previewing drafts
          <a href={`/api/preview/exit?path=${encodeURIComponent(pathname || "/")}`} className="font-medium underline underline-offset-2">
            Exit
          </a>
        </div>
      )}
    </>
  );
}
