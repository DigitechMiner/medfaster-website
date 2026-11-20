import { cache } from "react";
import { TRACKING_DEFAULTS, type TrackingSettings } from "@/content/tracking";
import { mergeContent } from "./merge";
import { fromCms } from "./payload";

// Settings → Tracking & Analytics
export const getTracking = cache(
  async (): Promise<TrackingSettings> =>
    fromCms(TRACKING_DEFAULTS, async (payload) => {
      const doc = await payload.findGlobal({ slug: "tracking", depth: 0 });
      return mergeContent(TRACKING_DEFAULTS, doc, Boolean(doc?.updatedAt));
    })
);
