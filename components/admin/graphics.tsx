import { KeRaevaLogo, KeRaevaMark } from "./logo";

// Shown on the login page and other full-page admin screens
export function AdminLogo() {
  return <KeRaevaLogo className="kr-logo kr-logo--lg" />;
}

// Compact mark used by Payload in small spots (breadcrumb home link, favicon area)
export function AdminIcon() {
  return <KeRaevaMark className="kr-mark" />;
}
