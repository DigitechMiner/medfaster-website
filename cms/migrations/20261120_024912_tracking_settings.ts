import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "tracking" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"tracking_codes_google_tag_manager_id" varchar DEFAULT 'GTM-K99PCL4X',
  	"tracking_codes_google_analytics_id" varchar DEFAULT '',
  	"tracking_codes_google_analytics_property_id" varchar DEFAULT '',
  	"tracking_codes_meta_pixel_id" varchar DEFAULT '',
  	"cookie_banner_message" varchar DEFAULT 'We use cookies to understand how people use our website and to measure our advertising. You can accept or decline analytics and marketing cookies.',
  	"cookie_banner_accept_label" varchar DEFAULT 'Accept',
  	"cookie_banner_decline_label" varchar DEFAULT 'Decline',
  	"cookie_banner_policy_link_label" varchar DEFAULT 'Privacy Policy',
  	"cookie_banner_policy_link" varchar DEFAULT '/privacy-policy',
  	"cookie_banner_preferences_label" varchar DEFAULT 'Cookie preferences',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_tracking_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_tracking_codes_google_tag_manager_id" varchar DEFAULT 'GTM-K99PCL4X',
  	"version_tracking_codes_google_analytics_id" varchar DEFAULT '',
  	"version_tracking_codes_google_analytics_property_id" varchar DEFAULT '',
  	"version_tracking_codes_meta_pixel_id" varchar DEFAULT '',
  	"version_cookie_banner_message" varchar DEFAULT 'We use cookies to understand how people use our website and to measure our advertising. You can accept or decline analytics and marketing cookies.',
  	"version_cookie_banner_accept_label" varchar DEFAULT 'Accept',
  	"version_cookie_banner_decline_label" varchar DEFAULT 'Decline',
  	"version_cookie_banner_policy_link_label" varchar DEFAULT 'Privacy Policy',
  	"version_cookie_banner_policy_link" varchar DEFAULT '/privacy-policy',
  	"version_cookie_banner_preferences_label" varchar DEFAULT 'Cookie preferences',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE INDEX "_tracking_v_created_at_idx" ON "_tracking_v" USING btree ("created_at");
  CREATE INDEX "_tracking_v_updated_at_idx" ON "_tracking_v" USING btree ("updated_at");

  -- Keep the IDs and banner text already saved in Site Settings: copy them to the new Tracking & Analytics settings
  INSERT INTO "tracking" ("tracking_codes_google_analytics_id", "tracking_codes_google_analytics_property_id", "tracking_codes_meta_pixel_id", "cookie_banner_message", "cookie_banner_accept_label", "cookie_banner_decline_label", "cookie_banner_policy_link_label", "cookie_banner_policy_link", "cookie_banner_preferences_label", "updated_at", "created_at")
  SELECT COALESCE("tracking_google_analytics_id", ''), COALESCE("tracking_google_analytics_property_id", ''), COALESCE("tracking_meta_pixel_id", ''), COALESCE("cookie_banner_message", 'We use cookies to understand how people use our website and to measure our advertising. You can accept or decline analytics and marketing cookies.'), COALESCE("cookie_banner_accept_label", 'Accept'), COALESCE("cookie_banner_decline_label", 'Decline'), COALESCE("cookie_banner_policy_link_label", 'Privacy Policy'), COALESCE("cookie_banner_policy_link", '/privacy-policy'), COALESCE("cookie_banner_preferences_label", 'Cookie preferences'), "updated_at", "created_at"
  FROM "site_settings" WHERE "updated_at" IS NOT NULL ORDER BY "id" LIMIT 1;
  ALTER TABLE "site_settings" DROP COLUMN "tracking_google_analytics_id";
  ALTER TABLE "site_settings" DROP COLUMN "tracking_google_analytics_property_id";
  ALTER TABLE "site_settings" DROP COLUMN "tracking_meta_pixel_id";
  ALTER TABLE "site_settings" DROP COLUMN "cookie_banner_message";
  ALTER TABLE "site_settings" DROP COLUMN "cookie_banner_accept_label";
  ALTER TABLE "site_settings" DROP COLUMN "cookie_banner_decline_label";
  ALTER TABLE "site_settings" DROP COLUMN "cookie_banner_policy_link_label";
  ALTER TABLE "site_settings" DROP COLUMN "cookie_banner_policy_link";
  ALTER TABLE "site_settings" DROP COLUMN "cookie_banner_preferences_label";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_tracking_google_analytics_id";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_tracking_google_analytics_property_id";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_tracking_meta_pixel_id";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_cookie_banner_message";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_cookie_banner_accept_label";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_cookie_banner_decline_label";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_cookie_banner_policy_link_label";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_cookie_banner_policy_link";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_cookie_banner_preferences_label";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "site_settings" ADD COLUMN "tracking_google_analytics_id" varchar DEFAULT '';
  ALTER TABLE "site_settings" ADD COLUMN "tracking_google_analytics_property_id" varchar DEFAULT '';
  ALTER TABLE "site_settings" ADD COLUMN "tracking_meta_pixel_id" varchar DEFAULT '';
  ALTER TABLE "site_settings" ADD COLUMN "cookie_banner_message" varchar DEFAULT 'We use cookies to understand how people use our website and to measure our advertising. You can accept or decline analytics and marketing cookies.';
  ALTER TABLE "site_settings" ADD COLUMN "cookie_banner_accept_label" varchar DEFAULT 'Accept';
  ALTER TABLE "site_settings" ADD COLUMN "cookie_banner_decline_label" varchar DEFAULT 'Decline';
  ALTER TABLE "site_settings" ADD COLUMN "cookie_banner_policy_link_label" varchar DEFAULT 'Privacy Policy';
  ALTER TABLE "site_settings" ADD COLUMN "cookie_banner_policy_link" varchar DEFAULT '/privacy-policy';
  ALTER TABLE "site_settings" ADD COLUMN "cookie_banner_preferences_label" varchar DEFAULT 'Cookie preferences';
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_tracking_google_analytics_id" varchar DEFAULT '';
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_tracking_google_analytics_property_id" varchar DEFAULT '';
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_tracking_meta_pixel_id" varchar DEFAULT '';
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_cookie_banner_message" varchar DEFAULT 'We use cookies to understand how people use our website and to measure our advertising. You can accept or decline analytics and marketing cookies.';
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_cookie_banner_accept_label" varchar DEFAULT 'Accept';
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_cookie_banner_decline_label" varchar DEFAULT 'Decline';
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_cookie_banner_policy_link_label" varchar DEFAULT 'Privacy Policy';
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_cookie_banner_policy_link" varchar DEFAULT '/privacy-policy';
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_cookie_banner_preferences_label" varchar DEFAULT 'Cookie preferences';
  UPDATE "site_settings" SET "tracking_google_analytics_id" = t."tracking_codes_google_analytics_id", "tracking_google_analytics_property_id" = t."tracking_codes_google_analytics_property_id", "tracking_meta_pixel_id" = t."tracking_codes_meta_pixel_id", "cookie_banner_message" = t."cookie_banner_message", "cookie_banner_accept_label" = t."cookie_banner_accept_label", "cookie_banner_decline_label" = t."cookie_banner_decline_label", "cookie_banner_policy_link_label" = t."cookie_banner_policy_link_label", "cookie_banner_policy_link" = t."cookie_banner_policy_link", "cookie_banner_preferences_label" = t."cookie_banner_preferences_label"
  FROM (SELECT * FROM "tracking" ORDER BY "id" LIMIT 1) AS t;
  DROP TABLE "tracking" CASCADE;
  DROP TABLE "_tracking_v" CASCADE;`)
}
