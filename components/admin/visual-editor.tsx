"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useDocumentTitle } from "@payloadcms/ui";
import { Monitor, Smartphone, Tablet, Minimize2 } from "lucide-react";

// Full-screen visual editor (opened from Pages → Edit page, in a new tab):
// hides the admin sidebar, keeps Live Preview open beside the form and adds
// Phone / Tablet / Desktop buttons that size and fit the preview.

const DEVICES = [
  { label: "Phone", width: 390, icon: Smartphone },
  { label: "Tablet", width: 820, icon: Tablet },
  { label: "Desktop", width: 1440, icon: Monitor },
] as const;
type DeviceLabel = (typeof DEVICES)[number]["label"];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Picks an option in one of Payload's Live Preview toolbar menus
async function pick(menu: string, option: string) {
  const trigger = document.querySelector<HTMLButtonElement>(`${menu} .popup-button`);
  if (!trigger) return false;
  if (trigger.textContent?.trim() === option) return true;
  trigger.click();
  for (let i = 0; i < 10; i += 1) {
    await sleep(60);
    const button = [...document.querySelectorAll<HTMLButtonElement>(".popup button, [class*=popup] button")].find(
      (b) => b !== trigger && b.textContent?.trim() === option
    );
    if (button) {
      button.click();
      return true;
    }
  }
  trigger.click(); // close the menu again
  return false;
}

let currentDevice: DeviceLabel = "Desktop";
const CANVAS_PADDING = 20;

// Scales the page down (never up) so the whole device width fits the canvas, and
// centres it. The page itself keeps the real device width, so its layout is exact.
function fitToCanvas() {
  const canvas = document.querySelector<HTMLElement>(".live-preview-window");
  if (!canvas) return;
  const width = DEVICES.find((d) => d.label === currentDevice)!.width;
  const availableWidth = canvas.clientWidth - CANVAS_PADDING * 2;
  const availableHeight = canvas.clientHeight - CANVAS_PADDING * 2;
  const scale = Math.min(1, availableWidth / width);
  const root = document.documentElement.style;
  root.setProperty("--kr-device-w", `${width}px`);
  root.setProperty("--kr-device-h", `${Math.round(availableHeight / scale)}px`);
  root.setProperty("--kr-scale", String(scale));
  root.setProperty("--kr-offset", `${Math.max(0, Math.round((availableWidth - width * scale) / 2))}px`);
}

// Opens Live Preview at a device size and fits it to the canvas
async function showDevice(label: DeviceLabel) {
  currentDevice = label;
  if (!(await ensureLivePreview())) return;
  await pick(".live-preview-toolbar-controls__breakpoint", label);
  await pick(".live-preview-toolbar-controls__zoom", "100%");
  fitToCanvas();
}

async function ensureLivePreview() {
  for (let i = 0; i < 30; i += 1) {
    if (document.querySelector(".collection-edit--is-live-previewing")) return true;
    const toggler = document.querySelector<HTMLButtonElement>(".live-preview-toggler:not(.live-preview-toggler--active)");
    if (toggler) toggler.click();
    await sleep(150);
  }
  return false;
}

export function VisualEditor() {
  const searchParams = useSearchParams();
  const visual = searchParams?.get("visual") === "1";
  const [device, setDevice] = useState<DeviceLabel>("Desktop");
  const { title } = useDocumentTitle();

  useEffect(() => {
    if (!visual) return;
    document.documentElement.classList.add("kr-visual");
    void showDevice("Desktop");
    window.addEventListener("resize", fitToCanvas);
    return () => {
      window.removeEventListener("resize", fitToCanvas);
      document.documentElement.classList.remove("kr-visual");
    };
  }, [visual]);

  if (!visual) return null;
  const exitHref = typeof window === "undefined" ? "#" : window.location.pathname;

  return (
    <div className="kr-visual-bar" role="group" aria-label="Preview size">
      <span className="kr-visual-bar__title" title={title}>
        <span className="kr-visual-bar__mark" aria-hidden="true" />
        {title}
      </span>
      <div className="kr-segmented">
        {DEVICES.map(({ label, icon: Icon }) => (
          <button key={label} type="button" className={device === label ? "is-active" : ""} aria-pressed={device === label} onClick={() => {
              setDevice(label);
              void showDevice(label);
            }}>
            <Icon aria-hidden="true" strokeWidth={1.75} />
            {label}
          </button>
        ))}
      </div>
      <a className="kr-visual-bar__exit" href={exitHref} title="Back to the normal editor with the menu">
        <Minimize2 aria-hidden="true" strokeWidth={1.75} />
        <span>Exit full screen</span>
      </a>
    </div>
  );
}
