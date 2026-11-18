"use client";

import { GetStartedModal } from "./get-started-modal";
import { RequestDemoModal } from "./request-demo-modal";
import type { PopupsContent } from "@/content/pages/popups";

// Site-wide modals, opened from anywhere via useModalStore().openModal(...)
// Text comes from the admin panel (Pages → Pop-ups)
export function GlobalModals({ content }: { content: PopupsContent }) {
  return (
    <>
      <GetStartedModal content={content} />
      <RequestDemoModal content={content.requestDemo} />
    </>
  );
}
