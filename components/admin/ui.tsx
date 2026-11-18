import Link from "next/link";
import type { LucideIcon } from "lucide-react";

// Shared building blocks for the custom admin views (styled in app/(payload)/custom.scss)

export function Badge({ tone = "neutral", children }: { tone?: string; children: React.ReactNode }) {
  return (
    <span className={`kr-badge kr-badge--${tone}`}>
      <span className="kr-badge__dot" aria-hidden="true" />
      {children}
    </span>
  );
}

export function IconChip({ icon: Icon, tone = "brand" }: { icon: LucideIcon; tone?: "brand" | "neutral" }) {
  return (
    <span className={`kr-chip kr-chip--${tone}`} aria-hidden="true">
      <Icon strokeWidth={1.75} />
    </span>
  );
}

export function Avatar({ text, size = "md" }: { text: string; size?: "md" | "lg" }) {
  return <span className={`kr-avatar kr-avatar--${size}`} aria-hidden="true">{text}</span>;
}

export function ButtonLink({ href, icon: Icon, variant = "primary", size = "md", children, external }: { href: string; icon?: LucideIcon; variant?: "primary" | "secondary" | "ghost"; size?: "md" | "sm"; children: React.ReactNode; external?: boolean }) {
  const className = `kr-btn kr-btn--${variant} kr-btn--${size}`;
  const content = (
    <>
      {Icon ? <Icon aria-hidden="true" strokeWidth={1.75} /> : null}
      {children}
    </>
  );
  return external ? (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">{content}</a>
  ) : (
    <Link className={className} href={href} prefetch={false}>{content}</Link>
  );
}

export function PageHeader({ title, subtitle, actions, children }: { title: React.ReactNode; subtitle?: React.ReactNode; actions?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <header className="kr-page-header">
      <div className="kr-page-header__titles">
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
        {children}
      </div>
      {actions ? <div className="kr-page-header__actions">{actions}</div> : null}
    </header>
  );
}
