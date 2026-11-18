"use client";

import { ExternalLink, Moon, Sun } from "lucide-react";
import { useTheme } from "@payloadcms/ui";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://keraeva.com").replace(/\/$/, "");

// Top-bar actions: open the live site and switch between light and dark
export function HeaderActions() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="kr-header-actions">
      <a className="kr-btn kr-btn--secondary kr-btn--sm" href={SITE_URL} target="_blank" rel="noopener noreferrer">
        <ExternalLink aria-hidden="true" strokeWidth={1.75} />
        View site
      </a>
      <div className="kr-theme-toggle" role="group" aria-label="Colour theme">
        <button type="button" className={theme === "light" ? "is-active" : ""} aria-pressed={theme === "light"} aria-label="Light theme" onClick={() => setTheme("light")}>
          <Sun aria-hidden="true" strokeWidth={1.75} />
        </button>
        <button type="button" className={theme === "dark" ? "is-active" : ""} aria-pressed={theme === "dark"} aria-label="Dark theme" onClick={() => setTheme("dark")}>
          <Moon aria-hidden="true" strokeWidth={1.75} />
        </button>
      </div>
    </div>
  );
}
