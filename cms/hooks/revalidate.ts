import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, GlobalAfterChangeHook } from "payload";
// ".js" so the Payload CLI (plain Node ESM) can load this file too
import { revalidatePath } from "next/cache.js";

// The site is statically generated, so saving content refreshes every page.
// Outside a Next.js request (e.g. the seed script) there is nothing to refresh.
function refreshSite() {
  try {
    revalidatePath("/", "layout");
  } catch {
    // not running inside Next.js
  }
}

export const revalidateAfterChange: CollectionAfterChangeHook = ({ doc }) => {
  refreshSite();
  return doc;
};

export const revalidateAfterDelete: CollectionAfterDeleteHook = ({ doc }) => {
  refreshSite();
  return doc;
};

export const revalidateGlobal: GlobalAfterChangeHook = ({ doc }) => {
  refreshSite();
  return doc;
};

export const revalidateHooks = {
  afterChange: [revalidateAfterChange],
  afterDelete: [revalidateAfterDelete],
};
