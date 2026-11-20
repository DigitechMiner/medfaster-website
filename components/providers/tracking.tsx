"use client";

import { createContext, useContext } from "react";
import { TRACKING_DEFAULTS, type TrackingSettings } from "@/content/tracking";

const TrackingContext = createContext<TrackingSettings>(TRACKING_DEFAULTS);

export function TrackingProvider({ value, children }: { value: TrackingSettings; children: React.ReactNode }) {
  return <TrackingContext.Provider value={value}>{children}</TrackingContext.Provider>;
}

export function useTracking() {
  return useContext(TrackingContext);
}
