import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "site_settings" ADD COLUMN "branding_logo_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "branding_white_logo_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "branding_favicon_image_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "branding_share_image_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "branding_app_qr_code_image_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "branding_placeholder_image_id" integer;
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_branding_logo_id" integer;
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_branding_white_logo_id" integer;
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_branding_favicon_image_id" integer;
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_branding_share_image_id" integer;
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_branding_app_qr_code_image_id" integer;
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_branding_placeholder_image_id" integer;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_branding_logo_id_media_id_fk" FOREIGN KEY ("branding_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_branding_white_logo_id_media_id_fk" FOREIGN KEY ("branding_white_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_branding_favicon_image_id_media_id_fk" FOREIGN KEY ("branding_favicon_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_branding_share_image_id_media_id_fk" FOREIGN KEY ("branding_share_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_branding_app_qr_code_image_id_media_id_fk" FOREIGN KEY ("branding_app_qr_code_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_branding_placeholder_image_id_media_id_fk" FOREIGN KEY ("branding_placeholder_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_site_settings_v" ADD CONSTRAINT "_site_settings_v_version_branding_logo_id_media_id_fk" FOREIGN KEY ("version_branding_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_site_settings_v" ADD CONSTRAINT "_site_settings_v_version_branding_white_logo_id_media_id_fk" FOREIGN KEY ("version_branding_white_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_site_settings_v" ADD CONSTRAINT "_site_settings_v_version_branding_favicon_image_id_media_id_fk" FOREIGN KEY ("version_branding_favicon_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_site_settings_v" ADD CONSTRAINT "_site_settings_v_version_branding_share_image_id_media_id_fk" FOREIGN KEY ("version_branding_share_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_site_settings_v" ADD CONSTRAINT "_site_settings_v_version_branding_app_qr_code_image_id_media_id_fk" FOREIGN KEY ("version_branding_app_qr_code_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_site_settings_v" ADD CONSTRAINT "_site_settings_v_version_branding_placeholder_image_id_media_id_fk" FOREIGN KEY ("version_branding_placeholder_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "site_settings_branding_branding_logo_idx" ON "site_settings" USING btree ("branding_logo_id");
  CREATE INDEX "site_settings_branding_branding_white_logo_idx" ON "site_settings" USING btree ("branding_white_logo_id");
  CREATE INDEX "site_settings_branding_branding_favicon_image_idx" ON "site_settings" USING btree ("branding_favicon_image_id");
  CREATE INDEX "site_settings_branding_branding_share_image_idx" ON "site_settings" USING btree ("branding_share_image_id");
  CREATE INDEX "site_settings_branding_branding_app_qr_code_image_idx" ON "site_settings" USING btree ("branding_app_qr_code_image_id");
  CREATE INDEX "site_settings_branding_branding_placeholder_image_idx" ON "site_settings" USING btree ("branding_placeholder_image_id");
  CREATE INDEX "_site_settings_v_version_branding_version_branding_logo_idx" ON "_site_settings_v" USING btree ("version_branding_logo_id");
  CREATE INDEX "_site_settings_v_version_branding_version_branding_white_idx" ON "_site_settings_v" USING btree ("version_branding_white_logo_id");
  CREATE INDEX "_site_settings_v_version_branding_version_branding_favic_idx" ON "_site_settings_v" USING btree ("version_branding_favicon_image_id");
  CREATE INDEX "_site_settings_v_version_branding_version_branding_share_idx" ON "_site_settings_v" USING btree ("version_branding_share_image_id");
  CREATE INDEX "_site_settings_v_version_branding_version_branding_app_q_idx" ON "_site_settings_v" USING btree ("version_branding_app_qr_code_image_id");
  CREATE INDEX "_site_settings_v_version_branding_version_branding_place_idx" ON "_site_settings_v" USING btree ("version_branding_placeholder_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "site_settings" DROP CONSTRAINT "site_settings_branding_logo_id_media_id_fk";
  
  ALTER TABLE "site_settings" DROP CONSTRAINT "site_settings_branding_white_logo_id_media_id_fk";
  
  ALTER TABLE "site_settings" DROP CONSTRAINT "site_settings_branding_favicon_image_id_media_id_fk";
  
  ALTER TABLE "site_settings" DROP CONSTRAINT "site_settings_branding_share_image_id_media_id_fk";
  
  ALTER TABLE "site_settings" DROP CONSTRAINT "site_settings_branding_app_qr_code_image_id_media_id_fk";
  
  ALTER TABLE "site_settings" DROP CONSTRAINT "site_settings_branding_placeholder_image_id_media_id_fk";
  
  ALTER TABLE "_site_settings_v" DROP CONSTRAINT "_site_settings_v_version_branding_logo_id_media_id_fk";
  
  ALTER TABLE "_site_settings_v" DROP CONSTRAINT "_site_settings_v_version_branding_white_logo_id_media_id_fk";
  
  ALTER TABLE "_site_settings_v" DROP CONSTRAINT "_site_settings_v_version_branding_favicon_image_id_media_id_fk";
  
  ALTER TABLE "_site_settings_v" DROP CONSTRAINT "_site_settings_v_version_branding_share_image_id_media_id_fk";
  
  ALTER TABLE "_site_settings_v" DROP CONSTRAINT "_site_settings_v_version_branding_app_qr_code_image_id_media_id_fk";
  
  ALTER TABLE "_site_settings_v" DROP CONSTRAINT "_site_settings_v_version_branding_placeholder_image_id_media_id_fk";
  
  DROP INDEX "site_settings_branding_branding_logo_idx";
  DROP INDEX "site_settings_branding_branding_white_logo_idx";
  DROP INDEX "site_settings_branding_branding_favicon_image_idx";
  DROP INDEX "site_settings_branding_branding_share_image_idx";
  DROP INDEX "site_settings_branding_branding_app_qr_code_image_idx";
  DROP INDEX "site_settings_branding_branding_placeholder_image_idx";
  DROP INDEX "_site_settings_v_version_branding_version_branding_logo_idx";
  DROP INDEX "_site_settings_v_version_branding_version_branding_white_idx";
  DROP INDEX "_site_settings_v_version_branding_version_branding_favic_idx";
  DROP INDEX "_site_settings_v_version_branding_version_branding_share_idx";
  DROP INDEX "_site_settings_v_version_branding_version_branding_app_q_idx";
  DROP INDEX "_site_settings_v_version_branding_version_branding_place_idx";
  ALTER TABLE "site_settings" DROP COLUMN "branding_logo_id";
  ALTER TABLE "site_settings" DROP COLUMN "branding_white_logo_id";
  ALTER TABLE "site_settings" DROP COLUMN "branding_favicon_image_id";
  ALTER TABLE "site_settings" DROP COLUMN "branding_share_image_id";
  ALTER TABLE "site_settings" DROP COLUMN "branding_app_qr_code_image_id";
  ALTER TABLE "site_settings" DROP COLUMN "branding_placeholder_image_id";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_branding_logo_id";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_branding_white_logo_id";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_branding_favicon_image_id";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_branding_share_image_id";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_branding_app_qr_code_image_id";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_branding_placeholder_image_id";`)
}
