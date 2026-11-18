// Loads the website's current content into the CMS so editors start from what is live.
// Same as the admin dashboard's "Import website content" button.
// Safe to re-run: existing entries are left alone unless --force is passed.
// Usage: npm run payload run scripts/cms/seed.ts [-- --force]
import { getPayload } from "payload";
import config from "@payload-config";
import { importWebsiteContent } from "../../lib/cms/import-content";

const payload = await getPayload({ config });
const { imported, skipped } = await importWebsiteContent(payload, { force: process.argv.includes("--force") });

for (const item of imported) console.log(`✓ ${item}`);
for (const item of skipped) console.log(`- ${item}: already in the CMS, skipped`);
console.log("Seed complete.");
process.exit(0);
