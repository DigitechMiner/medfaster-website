"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CloudDownload } from "lucide-react";
import { IconChip } from "./ui";

// Shown to admins while the CMS is still empty: copies the website's current
// content (jobs, FAQs, testimonials, team, legal pages, page text) into the admin.
export function ImportBanner({ mode = "first" }: { mode?: "first" | "partial" }) {
  const router = useRouter();
  const [state, setState] = useState<"idle" | "working" | "error">("idle");
  const [message, setMessage] = useState("");

  async function runImport() {
    setState("working");
    setMessage("");
    try {
      const response = await fetch("/api/cms/import", { method: "POST", credentials: "include" });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(body.error || `Import failed (${response.status})`);
      router.refresh();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Import failed");
    }
  }

  return (
    <section className="kr-card kr-import" aria-labelledby="kr-import-title">
      <IconChip icon={CloudDownload} />
      <div className="kr-import__text">
        <h2 id="kr-import-title">
          {mode === "first" ? "Bring the website’s content into the admin" : "Some of the website’s content isn’t in the admin yet"}
        </h2>
        <p>
          {mode === "first"
            ? "The site is showing its built-in content. Import it once to edit the current job opening, FAQs, testimonials, team, legal pages and page text here. Nothing on the live site changes."
            : "Newer pages or lists still use the site’s built-in content. Import fills in only what’s missing; nothing you’ve already edited is touched, and the live site looks the same."}
        </p>
        {state === "error" && <p className="kr-import__error" role="alert">{message}</p>}
      </div>
      <button type="button" className="kr-btn kr-btn--primary kr-btn--md" onClick={runImport} disabled={state === "working"}>
        {state === "working" ? "Importing…" : mode === "first" ? "Import website content" : "Import the rest"}
      </button>
    </section>
  );
}
