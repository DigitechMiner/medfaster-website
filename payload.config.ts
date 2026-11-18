import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";

import { Users } from "./cms/collections/Users";
import { Media } from "./cms/collections/Media";
import { Jobs } from "./cms/collections/Jobs";
import { Posts } from "./cms/collections/Posts";
import { Testimonials } from "./cms/collections/Testimonials";
import { TeamMembers } from "./cms/collections/TeamMembers";
import { Faqs } from "./cms/collections/Faqs";
import { LegalDocuments } from "./cms/collections/LegalDocuments";
import { FormSubmissions } from "./cms/collections/FormSubmissions";
import { PageGlobals, SiteSettings } from "./cms/globals";
import { migrations } from "./cms/migrations";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://keraeva.com";

// Origins allowed to use the admin login cookie: the site, its Vercel preview URL and local development
const trustedOrigins = [
  siteUrl,
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "",
  process.env.VERCEL_BRANCH_URL ? `https://${process.env.VERCEL_BRANCH_URL}` : "",
  "http://localhost:3000",
].filter(Boolean);

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || undefined,
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: { titleSuffix: " | KeRaeva Admin" },
  },
  collections: [Users, Media, Jobs, Posts, Testimonials, TeamMembers, Faqs, LegalDocuments, FormSubmissions],
  globals: [SiteSettings, ...PageGlobals],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: { outputFile: path.resolve(dirname, "payload-types.ts") },
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI || "" },
    migrationDir: path.resolve(dirname, "cms/migrations"),
    // Production applies committed migrations on start-up; local development syncs the schema automatically
    prodMigrations: migrations,
  }),
  sharp,
  csrf: trustedOrigins,
  graphQL: { disable: true },
  telemetry: false,
  plugins: [
    vercelBlobStorage({
      // Uploads go to Vercel Blob in production; local development stores them in ./media
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      collections: { media: true },
      token: process.env.BLOB_READ_WRITE_TOKEN,
      clientUploads: true,
    }),
  ],
});
