import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
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
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_cookie_banner_preferences_label" varchar DEFAULT 'Cookie preferences';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
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
