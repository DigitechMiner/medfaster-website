import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "header_footer" ADD COLUMN "footer_newsletter_email_placeholder" varchar DEFAULT 'Enter your email address';
  ALTER TABLE "_header_footer_v" ADD COLUMN "version_footer_newsletter_email_placeholder" varchar DEFAULT 'Enter your email address';
  ALTER TABLE "page_professionals" ADD COLUMN "hero_keyword_placeholder" varchar DEFAULT 'Job Title/Skill/Keyword';
  ALTER TABLE "page_professionals" ADD COLUMN "hero_postal_code_placeholder" varchar DEFAULT 'Postal Code';
  ALTER TABLE "_page_professionals_v" ADD COLUMN "version_hero_keyword_placeholder" varchar DEFAULT 'Job Title/Skill/Keyword';
  ALTER TABLE "_page_professionals_v" ADD COLUMN "version_hero_postal_code_placeholder" varchar DEFAULT 'Postal Code';
  ALTER TABLE "page_contact" ADD COLUMN "form_name_placeholder" varchar DEFAULT 'Your full name';
  ALTER TABLE "page_contact" ADD COLUMN "form_email_placeholder" varchar DEFAULT 'you@example.com';
  ALTER TABLE "page_contact" ADD COLUMN "form_phone_placeholder" varchar DEFAULT '(403) 555-0123';
  ALTER TABLE "page_contact" ADD COLUMN "form_topic_placeholder" varchar DEFAULT 'Select a topic';
  ALTER TABLE "page_contact" ADD COLUMN "form_message_placeholder" varchar DEFAULT 'Tell us how we can help, e.g. hiring for your organization, a partnership or a general question.';
  ALTER TABLE "_page_contact_v" ADD COLUMN "version_form_name_placeholder" varchar DEFAULT 'Your full name';
  ALTER TABLE "_page_contact_v" ADD COLUMN "version_form_email_placeholder" varchar DEFAULT 'you@example.com';
  ALTER TABLE "_page_contact_v" ADD COLUMN "version_form_phone_placeholder" varchar DEFAULT '(403) 555-0123';
  ALTER TABLE "_page_contact_v" ADD COLUMN "version_form_topic_placeholder" varchar DEFAULT 'Select a topic';
  ALTER TABLE "_page_contact_v" ADD COLUMN "version_form_message_placeholder" varchar DEFAULT 'Tell us how we can help, e.g. hiring for your organization, a partnership or a general question.';
  ALTER TABLE "page_support" ADD COLUMN "form_issue_type_placeholder" varchar DEFAULT 'Select an issue type';
  ALTER TABLE "page_support" ADD COLUMN "form_subject_placeholder" varchar DEFAULT 'e.g. I can''t check in to my shift';
  ALTER TABLE "page_support" ADD COLUMN "form_email_placeholder" varchar DEFAULT 'you@example.com';
  ALTER TABLE "page_support" ADD COLUMN "form_phone_placeholder" varchar DEFAULT '(403) 555-0123';
  ALTER TABLE "page_support" ADD COLUMN "form_description_placeholder" varchar DEFAULT 'Please describe the issue in detail, including the job or shift it relates to if relevant.';
  ALTER TABLE "_page_support_v" ADD COLUMN "version_form_issue_type_placeholder" varchar DEFAULT 'Select an issue type';
  ALTER TABLE "_page_support_v" ADD COLUMN "version_form_subject_placeholder" varchar DEFAULT 'e.g. I can''t check in to my shift';
  ALTER TABLE "_page_support_v" ADD COLUMN "version_form_email_placeholder" varchar DEFAULT 'you@example.com';
  ALTER TABLE "_page_support_v" ADD COLUMN "version_form_phone_placeholder" varchar DEFAULT '(403) 555-0123';
  ALTER TABLE "_page_support_v" ADD COLUMN "version_form_description_placeholder" varchar DEFAULT 'Please describe the issue in detail, including the job or shift it relates to if relevant.';
  ALTER TABLE "page_coming_soon" ADD COLUMN "content_email_placeholder" varchar DEFAULT 'Enter your email address';
  ALTER TABLE "_page_coming_soon_v" ADD COLUMN "version_content_email_placeholder" varchar DEFAULT 'Enter your email address';
  ALTER TABLE "page_popups" ADD COLUMN "request_demo_name_placeholder" varchar DEFAULT 'Emily Wilson';
  ALTER TABLE "page_popups" ADD COLUMN "request_demo_email_placeholder" varchar DEFAULT 'emily@hospital.ca';
  ALTER TABLE "page_popups" ADD COLUMN "request_demo_organization_placeholder" varchar DEFAULT 'Organization name';
  ALTER TABLE "page_popups" ADD COLUMN "request_demo_role_placeholder" varchar DEFAULT 'HR Director';
  ALTER TABLE "page_popups" ADD COLUMN "request_demo_phone_placeholder" varchar DEFAULT '(403) 555-0123';
  ALTER TABLE "page_popups" ADD COLUMN "request_demo_organization_type_placeholder" varchar DEFAULT 'Select type';
  ALTER TABLE "page_popups" ADD COLUMN "request_demo_province_placeholder" varchar DEFAULT 'Select province or territory';
  ALTER TABLE "_page_popups_v" ADD COLUMN "version_request_demo_name_placeholder" varchar DEFAULT 'Emily Wilson';
  ALTER TABLE "_page_popups_v" ADD COLUMN "version_request_demo_email_placeholder" varchar DEFAULT 'emily@hospital.ca';
  ALTER TABLE "_page_popups_v" ADD COLUMN "version_request_demo_organization_placeholder" varchar DEFAULT 'Organization name';
  ALTER TABLE "_page_popups_v" ADD COLUMN "version_request_demo_role_placeholder" varchar DEFAULT 'HR Director';
  ALTER TABLE "_page_popups_v" ADD COLUMN "version_request_demo_phone_placeholder" varchar DEFAULT '(403) 555-0123';
  ALTER TABLE "_page_popups_v" ADD COLUMN "version_request_demo_organization_type_placeholder" varchar DEFAULT 'Select type';
  ALTER TABLE "_page_popups_v" ADD COLUMN "version_request_demo_province_placeholder" varchar DEFAULT 'Select province or territory';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "header_footer" DROP COLUMN "footer_newsletter_email_placeholder";
  ALTER TABLE "_header_footer_v" DROP COLUMN "version_footer_newsletter_email_placeholder";
  ALTER TABLE "page_professionals" DROP COLUMN "hero_keyword_placeholder";
  ALTER TABLE "page_professionals" DROP COLUMN "hero_postal_code_placeholder";
  ALTER TABLE "_page_professionals_v" DROP COLUMN "version_hero_keyword_placeholder";
  ALTER TABLE "_page_professionals_v" DROP COLUMN "version_hero_postal_code_placeholder";
  ALTER TABLE "page_contact" DROP COLUMN "form_name_placeholder";
  ALTER TABLE "page_contact" DROP COLUMN "form_email_placeholder";
  ALTER TABLE "page_contact" DROP COLUMN "form_phone_placeholder";
  ALTER TABLE "page_contact" DROP COLUMN "form_topic_placeholder";
  ALTER TABLE "page_contact" DROP COLUMN "form_message_placeholder";
  ALTER TABLE "_page_contact_v" DROP COLUMN "version_form_name_placeholder";
  ALTER TABLE "_page_contact_v" DROP COLUMN "version_form_email_placeholder";
  ALTER TABLE "_page_contact_v" DROP COLUMN "version_form_phone_placeholder";
  ALTER TABLE "_page_contact_v" DROP COLUMN "version_form_topic_placeholder";
  ALTER TABLE "_page_contact_v" DROP COLUMN "version_form_message_placeholder";
  ALTER TABLE "page_support" DROP COLUMN "form_issue_type_placeholder";
  ALTER TABLE "page_support" DROP COLUMN "form_subject_placeholder";
  ALTER TABLE "page_support" DROP COLUMN "form_email_placeholder";
  ALTER TABLE "page_support" DROP COLUMN "form_phone_placeholder";
  ALTER TABLE "page_support" DROP COLUMN "form_description_placeholder";
  ALTER TABLE "_page_support_v" DROP COLUMN "version_form_issue_type_placeholder";
  ALTER TABLE "_page_support_v" DROP COLUMN "version_form_subject_placeholder";
  ALTER TABLE "_page_support_v" DROP COLUMN "version_form_email_placeholder";
  ALTER TABLE "_page_support_v" DROP COLUMN "version_form_phone_placeholder";
  ALTER TABLE "_page_support_v" DROP COLUMN "version_form_description_placeholder";
  ALTER TABLE "page_coming_soon" DROP COLUMN "content_email_placeholder";
  ALTER TABLE "_page_coming_soon_v" DROP COLUMN "version_content_email_placeholder";
  ALTER TABLE "page_popups" DROP COLUMN "request_demo_name_placeholder";
  ALTER TABLE "page_popups" DROP COLUMN "request_demo_email_placeholder";
  ALTER TABLE "page_popups" DROP COLUMN "request_demo_organization_placeholder";
  ALTER TABLE "page_popups" DROP COLUMN "request_demo_role_placeholder";
  ALTER TABLE "page_popups" DROP COLUMN "request_demo_phone_placeholder";
  ALTER TABLE "page_popups" DROP COLUMN "request_demo_organization_type_placeholder";
  ALTER TABLE "page_popups" DROP COLUMN "request_demo_province_placeholder";
  ALTER TABLE "_page_popups_v" DROP COLUMN "version_request_demo_name_placeholder";
  ALTER TABLE "_page_popups_v" DROP COLUMN "version_request_demo_email_placeholder";
  ALTER TABLE "_page_popups_v" DROP COLUMN "version_request_demo_organization_placeholder";
  ALTER TABLE "_page_popups_v" DROP COLUMN "version_request_demo_role_placeholder";
  ALTER TABLE "_page_popups_v" DROP COLUMN "version_request_demo_phone_placeholder";
  ALTER TABLE "_page_popups_v" DROP COLUMN "version_request_demo_organization_type_placeholder";
  ALTER TABLE "_page_popups_v" DROP COLUMN "version_request_demo_province_placeholder";`)
}
