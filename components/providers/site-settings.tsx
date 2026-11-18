"use client";

import { createContext, useContext } from "react";
import { SITE_DEFAULTS, type SiteSettings } from "@/content/site";

const SiteSettingsContext = createContext<SiteSettings>(SITE_DEFAULTS);

export function SiteSettingsProvider({ value, children }: { value: SiteSettings; children: React.ReactNode }) {
  return <SiteSettingsContext.Provider value={value}>{children}</SiteSettingsContext.Provider>;
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}
