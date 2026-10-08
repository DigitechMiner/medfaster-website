"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Apple-style reveal: each page section fades and rises into place the first
// time it scrolls into view, and its cards follow in a short stagger.
// Content is only hidden at runtime, and only below the first screen, so it
// stays visible without JavaScript and nothing on screen flashes.
const MAX_STAGGERED_ITEMS = 8;
const STAGGER_MS = 70;
const REVEAL_LINE = 0.92; // reveal once a section's top passes 92% of the viewport

function staggerItems(section: Element) {
  // Direct children of grids/lists of cards, excluding nested sections
  const groups = section.querySelectorAll(":scope .grid, :scope ol, :scope ul");
  groups.forEach((group) => {
    const items = Array.from(group.children).filter((child) => child.tagName !== "SECTION");
    if (items.length < 2 || items.length > 12) return;
    items.forEach((item, index) => {
      (item as HTMLElement).classList.add("kr-reveal-item");
      (item as HTMLElement).style.transitionDelay = `${Math.min(index, MAX_STAGGERED_ITEMS) * STAGGER_MS}ms`;
    });
  });
}

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let pending: HTMLElement[] = [];
    const reveal = (section: Element) => {
      section.classList.add("kr-revealed");
      pending = pending.filter((item) => item !== section);
    };

    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                reveal(entry.target);
                observer?.unobserve(entry.target);
              });
            },
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
          )
        : null;

    // Backup for fast scrolls, anchor jumps or a missed observer callback:
    // anything whose top has crossed the reveal line is shown
    let scrollTimer: ReturnType<typeof setTimeout> | null = null;
    const checkOnScroll = () => {
      if (scrollTimer) return;
      scrollTimer = setTimeout(() => {
        scrollTimer = null;
        pending.forEach((section) => {
          if (section.getBoundingClientRect().top < window.innerHeight * REVEAL_LINE) reveal(section);
        });
      }, 100);
    };
    const revealAll = () => pending.forEach(reveal);

    // Wait briefly so the new page is laid out after client navigation
    // (setTimeout rather than requestAnimationFrame, which pauses in background tabs)
    const setupTimer = setTimeout(() => {
      // Only the page's own top-level sections (not toasts, dialogs or the menu)
      const sections = Array.from(document.querySelectorAll<HTMLElement>(".min-h-screen > section"));
      sections.forEach((section) => {
        // Leave anything already on screen (or above it) untouched
        if (section.getBoundingClientRect().top < window.innerHeight * REVEAL_LINE) return;
        section.classList.add("kr-reveal");
        staggerItems(section);
        pending.push(section);
        observer?.observe(section);
      });
      if (!observer) revealAll();
    }, 50);

    window.addEventListener("scroll", checkOnScroll, { passive: true });
    window.addEventListener("hashchange", checkOnScroll);
    window.addEventListener("beforeprint", revealAll);

    return () => {
      clearTimeout(setupTimer);
      if (scrollTimer) clearTimeout(scrollTimer);
      observer?.disconnect();
      window.removeEventListener("scroll", checkOnScroll);
      window.removeEventListener("hashchange", checkOnScroll);
      window.removeEventListener("beforeprint", revealAll);
    };
  }, [pathname]);

  return null;
}
