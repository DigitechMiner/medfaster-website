"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, Briefcase, ChevronRight, Stethoscope } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { ModalShell } from "./modal-shell";
import { useModalStore } from "@/stores/modalStore";
import { APP_STORE_LINKS, RECRUITER_REGISTRATION_URL } from "@/utils/constant";

type View = "choose" | "app";

export function GetStartedModal() {
  const { activeModal, openModal, closeModal } = useModalStore();
  const isOpen = activeModal === "get-started" || activeModal === "get-app";
  const [view, setView] = useState<View>("choose");

  useEffect(() => {
    if (isOpen) setView(activeModal === "get-app" ? "app" : "choose");
  }, [isOpen, activeModal]);

  const cardClass =
    "w-full text-left bg-white rounded-2xl p-5 border-2 border-gray-200 hover:border-[#F3651B] focus-visible:border-[#F3651B] focus-visible:outline-none transition-colors flex items-start gap-4";

  return (
    <ModalShell isOpen={isOpen} onClose={closeModal} labelledBy="get-started-title">
      {view === "choose" ? (
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <Heading id="get-started-title" as="h2" size="xs" weight="semibold" className="!text-2xl text-[#252B37]">
              How will you use <span className="text-[#F3651B]">KeRaeva</span>?
            </Heading>
            <Paragraph size="sm" className="text-[#717680]">
              Choose your path to get started.
            </Paragraph>
          </div>

          <div className="space-y-4">
            <button type="button" className={cardClass} onClick={() => setView("app")}>
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FEF0E7] flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-[#F3651B]" />
              </span>
              <span className="flex-1">
                <span className="block font-medium text-[#252B37]">I&apos;m a Healthcare Professional</span>
                <span className="block text-sm text-[#717680] mt-1">
                  Build a verified profile, find jobs and urgent shifts, and get paid through the KeRaeva app.
                </span>
              </span>
              <ChevronRight className="w-5 h-5 text-[#717680] self-center" />
            </button>

            <a href={RECRUITER_REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className={cardClass} onClick={closeModal}>
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FEF0E7] flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-[#F3651B]" />
              </span>
              <span className="flex-1">
                <span className="block font-medium text-[#252B37]">I&apos;m Hiring</span>
                <span className="block text-sm text-[#717680] mt-1">
                  Post jobs, fill urgent shifts and review AI-assessed, verified professionals.
                </span>
              </span>
              <ChevronRight className="w-5 h-5 text-[#717680] self-center" />
            </a>
          </div>

          <Paragraph size="sm" className="text-center text-[#717680]">
            Want a walkthrough first?{" "}
            <button
              type="button"
              className="text-[#F3651B] font-medium hover:underline"
              onClick={() => openModal("request-demo")}
            >
              Request a demo
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
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          )}

          <div className="text-center space-y-2">
            <Heading id="get-started-title" as="h2" size="xs" weight="semibold" className="!text-2xl text-[#252B37]">
              <span className="text-[#F3651B]">Download</span> the App
            </Heading>
            <Paragraph size="sm" className="text-[#717680]">
              Create your free profile, complete your AI interview and start finding opportunities near you.
            </Paragraph>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Google Play: QR on larger screens, badge link everywhere */}
            <a
              href={APP_STORE_LINKS.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2"
              aria-label="Get KeRaeva on Google Play"
            >
              <Image
                src="/images/ui/qr-google-play.png"
                alt="QR code to download KeRaeva on Google Play"
                width={186}
                height={223}
                className="w-36 h-auto"
              />
            </a>

            {/* App Store: shown as coming soon until the iOS app is published */}
            <div className="flex flex-col items-center gap-2">
              {APP_STORE_LINKS.appStore ? (
                <a href={APP_STORE_LINKS.appStore} target="_blank" rel="noopener noreferrer" aria-label="Download KeRaeva on the App Store">
                  <Image src="/images/ui/badge-app-store.png" alt="Download on the App Store" width={169} height={55} className="w-36 h-auto" />
                </a>
              ) : (
                <>
                  <Image
                    src="/images/ui/badge-app-store.png"
                    alt="App Store"
                    width={169}
                    height={55}
                    className="w-36 h-auto opacity-40"
                  />
                  <Paragraph size="xs" className="text-[#717680]">
                    Coming soon on iOS
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
