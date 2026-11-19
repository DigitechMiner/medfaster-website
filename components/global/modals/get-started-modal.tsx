"use client";

import { useState } from "react";
import Image from "@/components/ui/image";
import { ArrowLeft, Briefcase, ChevronRight, Stethoscope } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { ModalShell } from "./modal-shell";
import { IconChip } from "@/components/ui/icon-chip";
import { useModalStore } from "@/stores/modalStore";
import { AccentText } from "@/components/ui/accent-text";
import { useSiteSettings } from "@/components/providers/site-settings";
import type { PopupsContent } from "@/content/pages/popups";

type View = "choose" | "app";

export function GetStartedModal({ content }: { content: PopupsContent }) {
  const { activeModal, openModal, closeModal } = useModalStore();
  const { apps, branding } = useSiteSettings();
  const { getStarted, getApp } = content;
  const isOpen = activeModal === "get-started" || activeModal === "get-app";
  const [view, setView] = useState<View>("choose");

  // Pick the starting view whenever the modal opens (or switches) to this one
  const [lastActiveModal, setLastActiveModal] = useState(activeModal);
  if (activeModal !== lastActiveModal) {
    setLastActiveModal(activeModal);
    if (isOpen) setView(activeModal === "get-app" ? "app" : "choose");
  }

  const cardClass =
    "w-full text-left bg-white rounded-2xl p-5 border-2 border-gray-200 hover:border-[#F3651B] focus-visible:border-[#F3651B] focus-visible:outline-none transition-colors flex items-start gap-4";

  return (
    <ModalShell isOpen={isOpen} onClose={closeModal} labelledBy="get-started-title">
      {view === "choose" ? (
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <Heading id="get-started-title" as="h2" size="xs" className="text-[#252B37]">
              <AccentText text={getStarted.heading} />
            </Heading>
            <Paragraph size="sm" className="text-[#717680]">
              {getStarted.body}
            </Paragraph>
          </div>

          <div className="space-y-4">
            <button type="button" className={cardClass} onClick={() => setView("app")}>
              <IconChip icon={Stethoscope} />
              <span className="flex-1">
                <span className="block font-medium text-[#252B37]">{getStarted.professionalTitle}</span>
                <span className="block text-sm text-[#717680] mt-1">{getStarted.professionalDescription}</span>
              </span>
              <ChevronRight className="w-5 h-5 text-[#717680] self-center" />
            </button>

            <a href={apps.recruiterRegistrationUrl} target="_blank" rel="noopener noreferrer" className={cardClass} onClick={closeModal}>
              <IconChip icon={Briefcase} />
              <span className="flex-1">
                <span className="block font-medium text-[#252B37]">{getStarted.hiringTitle}</span>
                <span className="block text-sm text-[#717680] mt-1">{getStarted.hiringDescription}</span>
              </span>
              <ChevronRight className="w-5 h-5 text-[#717680] self-center" />
            </a>
          </div>

          <Paragraph size="sm" className="text-center text-[#717680]">
            {getStarted.demoPrompt}{" "}
            <button
              type="button"
              className="text-[#F3651B] font-medium hover:underline"
              onClick={() => openModal("request-demo")}
            >
              {getStarted.demoLinkLabel}
            </button>
          </Paragraph>
        </div>
      ) : (
        <div className="space-y-6">
          {activeModal === "get-started" && (
            <button
              type="button"
              onClick={() => setView("choose")}
              className="inline-flex items-center gap-1 text-sm text-[#717680] hover:text-[#F3651B] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> {getApp.backLabel}
            </button>
          )}

          <div className="text-center space-y-2">
            <Heading id="get-started-title" as="h2" size="xs" className="text-[#252B37]">
              <AccentText text={getApp.heading} />
            </Heading>
            <Paragraph size="sm" className="text-[#717680]">
              {getApp.body}
            </Paragraph>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Google Play: QR on larger screens, badge link everywhere */}
            <a
              href={apps.googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2"
              aria-label="Get KeRaeva on Google Play"
            >
              <Image
                src={branding.appQrCodeImage}
                alt="QR code to download KeRaeva on Google Play"
                width={186}
                height={223}
                className="w-36 h-auto"
              />
            </a>

            {/* App Store: shown as coming soon until the iOS app is published */}
            <div className="flex flex-col items-center gap-2">
              {apps.appStoreUrl ? (
                <a href={apps.appStoreUrl} target="_blank" rel="noopener noreferrer" aria-label="Download KeRaeva on the App Store">
                  <Image src="/images/ui/badge-app-store.png" alt="Download on the App Store" width={169} height={55} className="w-36 h-auto" />
                </a>
              ) : (
                <>
                  <Image
                    src="/images/ui/badge-app-store.png"
                    alt="App Store (coming soon)"
                    width={169}
                    height={55}
                    className="w-36 h-auto opacity-40"
                  />
                  <Paragraph size="xs" className="text-[#717680]">
                    {apps.iosComingSoonLabel}
                  </Paragraph>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </ModalShell>
  );
}
