import type { ModalId } from "@/stores/modalStore";

// How a link typed in the admin panel behaves on the website
export type ResolvedLink =
  | { kind: "modal"; modal: ModalId }
  | { kind: "recruiter" }
  | { kind: "external"; href: string }
  | { kind: "internal"; href: string }
  | { kind: "none" };

const MODAL_LINKS: Record<string, ModalId> = {
  "#get-app": "get-app",
  "#get-started": "get-started",
  "#request-demo": "request-demo",
};

export function resolveLink(link?: string | null): ResolvedLink {
  const value = (link || "").trim();
  if (!value) return { kind: "none" };
  if (MODAL_LINKS[value]) return { kind: "modal", modal: MODAL_LINKS[value] };
  if (value === "#start-hiring") return { kind: "recruiter" };
  if (/^(https?:|mailto:|tel:)/i.test(value)) return { kind: "external", href: value };
  return { kind: "internal", href: value.startsWith("/") || value.startsWith("#") ? value : `/${value}` };
}

// Digits for tel: links, assuming North American numbers
export function telHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return `tel:+${digits.length === 10 ? "1" + digits : digits}`;
}
