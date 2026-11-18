"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Check, Reply } from "lucide-react";

const STATUSES = [
  ["new", "New"],
  ["in-progress", "In progress"],
  ["done", "Done"],
  ["spam", "Spam"],
] as const;

// Status, internal notes and reply for one submission. Saves through the
// Payload REST API with the signed-in user's session.
export function InboxActions({ id, status, notes, email, name }: { id: string | number; status: string; notes: string; email?: string | null; name?: string | null }) {
  const router = useRouter();
  const [value, setValue] = useState({ status, notes });
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [, startTransition] = useTransition();

  async function save(next: { status: string; notes: string }) {
    setState("saving");
    try {
      const res = await fetch(`/api/form-submissions/${id}`, {
        method: "PATCH",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(next),
      });
      if (!res.ok) throw new Error(String(res.status));
      setValue(next);
      setState("saved");
      startTransition(() => router.refresh());
    } catch {
      setState("error");
    }
  }

  const dirty = value.notes !== notes;
  const reply = email ? `mailto:${email}?subject=${encodeURIComponent("Re: your message to KeRaeva")}&body=${encodeURIComponent(`Hi ${name?.split(" ")[0] || "there"},\n\n`)}` : undefined;

  return (
    <div className="kr-inbox-actions">
      <label className="kr-field">
        <span className="kr-field__label">Internal notes</span>
        <textarea
          rows={4}
          value={value.notes}
          placeholder="Only visible to your team."
          onChange={(e) => { setValue({ ...value, notes: e.target.value }); setState("idle"); }}
        />
      </label>
      <div className="kr-inbox-actions__bar">
        {reply ? (
          <a className="kr-btn kr-btn--primary kr-btn--md" href={reply}>
            <Reply aria-hidden="true" strokeWidth={1.75} /> Reply by email
          </a>
        ) : null}
        {value.status !== "done" ? (
          <button type="button" className="kr-btn kr-btn--secondary kr-btn--md" disabled={state === "saving"} onClick={() => save({ ...value, status: "done" })}>
            <Check aria-hidden="true" strokeWidth={1.75} /> Mark as done
          </button>
        ) : null}
        {dirty ? (
          <button type="button" className="kr-btn kr-btn--secondary kr-btn--md" disabled={state === "saving"} onClick={() => save(value)}>
            Save notes
          </button>
        ) : null}
        <span className="kr-inbox-actions__state" role="status">
          {state === "saving" ? "Saving…" : state === "saved" ? "Saved" : state === "error" ? "Couldn’t save. Try again." : ""}
        </span>
      </div>
    </div>
  );
}

export function StatusSelect({ id, status }: { id: string | number; status: string }) {
  const router = useRouter();
  const [value, setValue] = useState(status);
  const [busy, setBusy] = useState(false);
  return (
    <label className="kr-field kr-field--inline">
      <span className="kr-field__label">Status</span>
      <select
        value={value}
        disabled={busy}
        onChange={async (e) => {
          const next = e.target.value;
          setValue(next);
          setBusy(true);
          const res = await fetch(`/api/form-submissions/${id}`, { method: "PATCH", credentials: "include", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status: next }) });
          setBusy(false);
          if (!res.ok) setValue(status);
          router.refresh();
        }}
      >
        {STATUSES.map(([v, label]) => (
          <option key={v} value={v}>{label}</option>
        ))}
      </select>
    </label>
  );
}
