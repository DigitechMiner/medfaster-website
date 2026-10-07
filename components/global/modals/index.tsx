"use client";

import { GetStartedModal } from "./get-started-modal";
import { RequestDemoModal } from "./request-demo-modal";

// Site-wide modals, opened from anywhere via useModalStore().openModal(...)
export function GlobalModals() {
  return (
    <>
      <GetStartedModal />
      <RequestDemoModal />
    </>
  );
}
