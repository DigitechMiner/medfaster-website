import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_hero_background" AS ENUM('white', 'grey', 'orange');
  CREATE TYPE "public"."enum_pages_blocks_text_background" AS ENUM('white', 'grey', 'orange');
  CREATE TYPE "public"."enum_pages_blocks_image_text_image_position" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum_pages_blocks_image_text_background" AS ENUM('white', 'grey', 'orange');
  CREATE TYPE "public"."enum_pages_blocks_feature_cards_cards_icon" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'FileCheck2', 'FileText', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scan', 'Search', 'Send', 'Shield', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'Timer', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  CREATE TYPE "public"."enum_pages_blocks_feature_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_pages_blocks_feature_cards_background" AS ENUM('white', 'grey', 'orange');
  CREATE TYPE "public"."enum_pages_blocks_steps_steps_icon" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'FileCheck2', 'FileText', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scan', 'Search', 'Send', 'Shield', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'Timer', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  CREATE TYPE "public"."enum_pages_blocks_steps_background" AS ENUM('white', 'grey', 'orange');
  CREATE TYPE "public"."enum_pages_blocks_faq_background" AS ENUM('white', 'grey', 'orange');
  CREATE TYPE "public"."enum_pages_blocks_cta_background" AS ENUM('white', 'grey', 'orange');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_background" AS ENUM('white', 'grey', 'orange');
  CREATE TYPE "public"."enum__pages_v_blocks_text_background" AS ENUM('white', 'grey', 'orange');
  CREATE TYPE "public"."enum__pages_v_blocks_image_text_image_position" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum__pages_v_blocks_image_text_background" AS ENUM('white', 'grey', 'orange');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_cards_cards_icon" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'FileCheck2', 'FileText', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scan', 'Search', 'Send', 'Shield', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'Timer', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_cards_background" AS ENUM('white', 'grey', 'orange');
  CREATE TYPE "public"."enum__pages_v_blocks_steps_steps_icon" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'FileCheck2', 'FileText', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scan', 'Search', 'Send', 'Shield', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'Timer', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  CREATE TYPE "public"."enum__pages_v_blocks_steps_background" AS ENUM('white', 'grey', 'orange');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_background" AS ENUM('white', 'grey', 'orange');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_background" AS ENUM('white', 'grey', 'orange');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"body" varchar,
  	"image_id" integer,
  	"primary_button_label" varchar,
  	"primary_button_link" varchar,
  	"secondary_button_label" varchar,
  	"secondary_button_link" varchar,
  	"background" "enum_pages_blocks_hero_background" DEFAULT 'white',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"content" jsonb,
  	"background" "enum_pages_blocks_text_background" DEFAULT 'white',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_image_text_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_image_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"body" varchar,
  	"image_id" integer,
  	"image_position" "enum_pages_blocks_image_text_image_position" DEFAULT 'right',
  	"button_label" varchar,
  	"button_link" varchar,
  	"background" "enum_pages_blocks_image_text_background" DEFAULT 'white',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_feature_cards_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_feature_cards_cards_icon" DEFAULT 'CheckCircle2',
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_feature_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum_pages_blocks_feature_cards_columns" DEFAULT '3',
  	"background" "enum_pages_blocks_feature_cards_background" DEFAULT 'white',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_steps_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_steps_steps_icon" DEFAULT 'CheckCircle2',
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"button_label" varchar,
  	"button_link" varchar,
  	"background" "enum_pages_blocks_steps_background" DEFAULT 'orange',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "pages_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Frequently Asked **Questions**',
  	"intro" varchar,
  	"background" "enum_pages_blocks_faq_background" DEFAULT 'grey',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT '**Real Results,** Real Partnerships',
  	"intro" varchar,
  	"limit" numeric DEFAULT 4,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_job_openings" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Open **Positions**',
  	"intro" varchar,
  	"limit" numeric DEFAULT 6,
  	"button_label" varchar,
  	"button_link" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"body" varchar,
  	"button_label" varchar,
  	"button_link" varchar,
  	"background" "enum_pages_blocks_cta_background" DEFAULT 'orange',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"show_in_footer" boolean DEFAULT false,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_noindex" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_pages_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"body" varchar,
  	"image_id" integer,
  	"primary_button_label" varchar,
  	"primary_button_link" varchar,
  	"secondary_button_label" varchar,
  	"secondary_button_link" varchar,
  	"background" "enum__pages_v_blocks_hero_background" DEFAULT 'white',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"content" jsonb,
  	"background" "enum__pages_v_blocks_text_background" DEFAULT 'white',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_image_text_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_image_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"body" varchar,
  	"image_id" integer,
  	"image_position" "enum__pages_v_blocks_image_text_image_position" DEFAULT 'right',
  	"button_label" varchar,
  	"button_link" varchar,
  	"background" "enum__pages_v_blocks_image_text_background" DEFAULT 'white',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature_cards_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_feature_cards_cards_icon" DEFAULT 'CheckCircle2',
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum__pages_v_blocks_feature_cards_columns" DEFAULT '3',
  	"background" "enum__pages_v_blocks_feature_cards_background" DEFAULT 'white',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_steps_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_steps_steps_icon" DEFAULT 'CheckCircle2',
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"button_label" varchar,
  	"button_link" varchar,
  	"background" "enum__pages_v_blocks_steps_background" DEFAULT 'orange',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Frequently Asked **Questions**',
  	"intro" varchar,
  	"background" "enum__pages_v_blocks_faq_background" DEFAULT 'grey',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT '**Real Results,** Real Partnerships',
  	"intro" varchar,
  	"limit" numeric DEFAULT 4,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_job_openings" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Open **Positions**',
  	"intro" varchar,
  	"limit" numeric DEFAULT 6,
  	"button_label" varchar,
  	"button_link" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"body" varchar,
  	"button_label" varchar,
  	"button_link" varchar,
  	"background" "enum__pages_v_blocks_cta_background" DEFAULT 'orange',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_show_in_footer" boolean DEFAULT false,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_noindex" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "a_4e6ajk" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Healthcare Organizations',
  	"link" varchar DEFAULT '/medical-organizations',
  	"description" varchar DEFAULT 'Hire, fill urgent shifts and manage your workforce'
  );
  
  CREATE TABLE "a_1rs45gk" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Home',
  	"link" varchar DEFAULT '/'
  );
  
  CREATE TABLE "a_9756hx" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Healthcare Organizations',
  	"link" varchar DEFAULT '/medical-organizations'
  );
  
  CREATE TABLE "a_1gvytli" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Platform'
  );
  
  CREATE TABLE "header_footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_secondary_button_label" varchar DEFAULT 'Get the App',
  	"header_secondary_button_link" varchar DEFAULT '#get-app',
  	"header_primary_button_label" varchar DEFAULT 'Login as Recruiter',
  	"header_primary_button_link" varchar DEFAULT 'https://recruiter.keraeva.com',
  	"footer_newsletter_show" boolean DEFAULT true,
  	"footer_newsletter_heading" varchar DEFAULT 'Healthcare Hiring Insights & **Job Alerts**',
  	"footer_newsletter_body" varchar DEFAULT 'Product updates, hiring insights and new opportunities. No spam.',
  	"footer_tagline" varchar DEFAULT 'The AI-powered healthcare workforce platform connecting organizations and professionals across Canada.',
  	"footer_app_button_label" varchar DEFAULT 'Get the App',
  	"footer_app_button_link" varchar DEFAULT '#get-app',
  	"footer_copyright" varchar DEFAULT 'Copyright © {year} KeRaeva, All Rights Reserved. KeRaeva is operated by MedFaster Health Tech Inc.',
  	"footer_credit_prefix" varchar DEFAULT 'Designed & Developed by',
  	"footer_credit_label" varchar DEFAULT 'Digitech Miner',
  	"footer_credit_url" varchar DEFAULT 'https://digitechminer.in',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_a_4e6ajk_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Healthcare Organizations',
  	"link" varchar DEFAULT '/medical-organizations',
  	"description" varchar DEFAULT 'Hire, fill urgent shifts and manage your workforce',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_1rs45gk_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Home',
  	"link" varchar DEFAULT '/',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_9756hx_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Healthcare Organizations',
  	"link" varchar DEFAULT '/medical-organizations',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_1gvytli_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Platform',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_header_footer_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_header_secondary_button_label" varchar DEFAULT 'Get the App',
  	"version_header_secondary_button_link" varchar DEFAULT '#get-app',
  	"version_header_primary_button_label" varchar DEFAULT 'Login as Recruiter',
  	"version_header_primary_button_link" varchar DEFAULT 'https://recruiter.keraeva.com',
  	"version_footer_newsletter_show" boolean DEFAULT true,
  	"version_footer_newsletter_heading" varchar DEFAULT 'Healthcare Hiring Insights & **Job Alerts**',
  	"version_footer_newsletter_body" varchar DEFAULT 'Product updates, hiring insights and new opportunities. No spam.',
  	"version_footer_tagline" varchar DEFAULT 'The AI-powered healthcare workforce platform connecting organizations and professionals across Canada.',
  	"version_footer_app_button_label" varchar DEFAULT 'Get the App',
  	"version_footer_app_button_link" varchar DEFAULT '#get-app',
  	"version_footer_copyright" varchar DEFAULT 'Copyright © {year} KeRaeva, All Rights Reserved. KeRaeva is operated by MedFaster Health Tech Inc.',
  	"version_footer_credit_prefix" varchar DEFAULT 'Designed & Developed by',
  	"version_footer_credit_label" varchar DEFAULT 'Digitech Miner',
  	"version_footer_credit_url" varchar DEFAULT 'https://digitechminer.in',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "pages_id" integer;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text" ADD CONSTRAINT "pages_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_text_bullets" ADD CONSTRAINT "pages_blocks_image_text_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_image_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_text" ADD CONSTRAINT "pages_blocks_image_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_text" ADD CONSTRAINT "pages_blocks_image_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_cards_cards" ADD CONSTRAINT "pages_blocks_feature_cards_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_cards" ADD CONSTRAINT "pages_blocks_feature_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_steps_steps" ADD CONSTRAINT "pages_blocks_steps_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_steps" ADD CONSTRAINT "pages_blocks_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_items" ADD CONSTRAINT "pages_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq" ADD CONSTRAINT "pages_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_job_openings" ADD CONSTRAINT "pages_blocks_job_openings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_text" ADD CONSTRAINT "_pages_v_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_text_bullets" ADD CONSTRAINT "_pages_v_blocks_image_text_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_image_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_text" ADD CONSTRAINT "_pages_v_blocks_image_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_text" ADD CONSTRAINT "_pages_v_blocks_image_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_cards_cards" ADD CONSTRAINT "_pages_v_blocks_feature_cards_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_cards" ADD CONSTRAINT "_pages_v_blocks_feature_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_steps_steps" ADD CONSTRAINT "_pages_v_blocks_steps_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_steps" ADD CONSTRAINT "_pages_v_blocks_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_items" ADD CONSTRAINT "_pages_v_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq" ADD CONSTRAINT "_pages_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_job_openings" ADD CONSTRAINT "_pages_v_blocks_job_openings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "a_4e6ajk" ADD CONSTRAINT "a_4e6ajk_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."a_1rs45gk"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_1rs45gk" ADD CONSTRAINT "a_1rs45gk_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_9756hx" ADD CONSTRAINT "a_9756hx_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."a_1gvytli"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_1gvytli" ADD CONSTRAINT "a_1gvytli_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_4e6ajk_v" ADD CONSTRAINT "_a_4e6ajk_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_a_1rs45gk_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_1rs45gk_v" ADD CONSTRAINT "_a_1rs45gk_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_header_footer_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_9756hx_v" ADD CONSTRAINT "_a_9756hx_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_a_1gvytli_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_1gvytli_v" ADD CONSTRAINT "_a_1gvytli_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_header_footer_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_image_idx" ON "pages_blocks_hero" USING btree ("image_id");
  CREATE INDEX "pages_blocks_text_order_idx" ON "pages_blocks_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_text_parent_id_idx" ON "pages_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_text_path_idx" ON "pages_blocks_text" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_text_bullets_order_idx" ON "pages_blocks_image_text_bullets" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_text_bullets_parent_id_idx" ON "pages_blocks_image_text_bullets" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_text_order_idx" ON "pages_blocks_image_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_text_parent_id_idx" ON "pages_blocks_image_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_text_path_idx" ON "pages_blocks_image_text" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_text_image_idx" ON "pages_blocks_image_text" USING btree ("image_id");
  CREATE INDEX "pages_blocks_feature_cards_cards_order_idx" ON "pages_blocks_feature_cards_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_cards_cards_parent_id_idx" ON "pages_blocks_feature_cards_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature_cards_order_idx" ON "pages_blocks_feature_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_cards_parent_id_idx" ON "pages_blocks_feature_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature_cards_path_idx" ON "pages_blocks_feature_cards" USING btree ("_path");
  CREATE INDEX "pages_blocks_steps_steps_order_idx" ON "pages_blocks_steps_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_steps_steps_parent_id_idx" ON "pages_blocks_steps_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_steps_order_idx" ON "pages_blocks_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_steps_parent_id_idx" ON "pages_blocks_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_steps_path_idx" ON "pages_blocks_steps" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_items_order_idx" ON "pages_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_items_parent_id_idx" ON "pages_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_order_idx" ON "pages_blocks_faq" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_parent_id_idx" ON "pages_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_path_idx" ON "pages_blocks_faq" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonials_order_idx" ON "pages_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_parent_id_idx" ON "pages_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_path_idx" ON "pages_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "pages_blocks_job_openings_order_idx" ON "pages_blocks_job_openings" USING btree ("_order");
  CREATE INDEX "pages_blocks_job_openings_parent_id_idx" ON "pages_blocks_job_openings" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_job_openings_path_idx" ON "pages_blocks_job_openings" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "_pages_v_blocks_hero_order_idx" ON "_pages_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_parent_id_idx" ON "_pages_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_path_idx" ON "_pages_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_hero_image_idx" ON "_pages_v_blocks_hero" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_text_order_idx" ON "_pages_v_blocks_text" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_text_parent_id_idx" ON "_pages_v_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_text_path_idx" ON "_pages_v_blocks_text" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_text_bullets_order_idx" ON "_pages_v_blocks_image_text_bullets" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_text_bullets_parent_id_idx" ON "_pages_v_blocks_image_text_bullets" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_text_order_idx" ON "_pages_v_blocks_image_text" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_text_parent_id_idx" ON "_pages_v_blocks_image_text" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_text_path_idx" ON "_pages_v_blocks_image_text" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_text_image_idx" ON "_pages_v_blocks_image_text" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_feature_cards_cards_order_idx" ON "_pages_v_blocks_feature_cards_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature_cards_cards_parent_id_idx" ON "_pages_v_blocks_feature_cards_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_cards_order_idx" ON "_pages_v_blocks_feature_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature_cards_parent_id_idx" ON "_pages_v_blocks_feature_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_cards_path_idx" ON "_pages_v_blocks_feature_cards" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_steps_steps_order_idx" ON "_pages_v_blocks_steps_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_steps_steps_parent_id_idx" ON "_pages_v_blocks_steps_steps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_steps_order_idx" ON "_pages_v_blocks_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_steps_parent_id_idx" ON "_pages_v_blocks_steps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_steps_path_idx" ON "_pages_v_blocks_steps" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_faq_items_order_idx" ON "_pages_v_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_items_parent_id_idx" ON "_pages_v_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_order_idx" ON "_pages_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_parent_id_idx" ON "_pages_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_path_idx" ON "_pages_v_blocks_faq" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonials_order_idx" ON "_pages_v_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_path_idx" ON "_pages_v_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_job_openings_order_idx" ON "_pages_v_blocks_job_openings" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_job_openings_parent_id_idx" ON "_pages_v_blocks_job_openings" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_job_openings_path_idx" ON "_pages_v_blocks_job_openings" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta_order_idx" ON "_pages_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_parent_id_idx" ON "_pages_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_path_idx" ON "_pages_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "a_4e6ajk_order_idx" ON "a_4e6ajk" USING btree ("_order");
  CREATE INDEX "a_4e6ajk_parent_id_idx" ON "a_4e6ajk" USING btree ("_parent_id");
  CREATE INDEX "a_1rs45gk_order_idx" ON "a_1rs45gk" USING btree ("_order");
  CREATE INDEX "a_1rs45gk_parent_id_idx" ON "a_1rs45gk" USING btree ("_parent_id");
  CREATE INDEX "a_9756hx_order_idx" ON "a_9756hx" USING btree ("_order");
  CREATE INDEX "a_9756hx_parent_id_idx" ON "a_9756hx" USING btree ("_parent_id");
  CREATE INDEX "a_1gvytli_order_idx" ON "a_1gvytli" USING btree ("_order");
  CREATE INDEX "a_1gvytli_parent_id_idx" ON "a_1gvytli" USING btree ("_parent_id");
  CREATE INDEX "_a_4e6ajk_v_order_idx" ON "_a_4e6ajk_v" USING btree ("_order");
  CREATE INDEX "_a_4e6ajk_v_parent_id_idx" ON "_a_4e6ajk_v" USING btree ("_parent_id");
  CREATE INDEX "_a_1rs45gk_v_order_idx" ON "_a_1rs45gk_v" USING btree ("_order");
  CREATE INDEX "_a_1rs45gk_v_parent_id_idx" ON "_a_1rs45gk_v" USING btree ("_parent_id");
  CREATE INDEX "_a_9756hx_v_order_idx" ON "_a_9756hx_v" USING btree ("_order");
  CREATE INDEX "_a_9756hx_v_parent_id_idx" ON "_a_9756hx_v" USING btree ("_parent_id");
  CREATE INDEX "_a_1gvytli_v_order_idx" ON "_a_1gvytli_v" USING btree ("_order");
  CREATE INDEX "_a_1gvytli_v_parent_id_idx" ON "_a_1gvytli_v" USING btree ("_parent_id");
  CREATE INDEX "_header_footer_v_created_at_idx" ON "_header_footer_v" USING btree ("created_at");
  CREATE INDEX "_header_footer_v_updated_at_idx" ON "_header_footer_v" USING btree ("updated_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_image_text_bullets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_image_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_feature_cards_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_feature_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_steps_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_job_openings" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_image_text_bullets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_image_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_feature_cards_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_feature_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_steps_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_job_openings" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "a_4e6ajk" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "a_1rs45gk" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "a_9756hx" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "a_1gvytli" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_footer" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_a_4e6ajk_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_a_1rs45gk_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_a_9756hx_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_a_1gvytli_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_header_footer_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_text" CASCADE;
  DROP TABLE "pages_blocks_image_text_bullets" CASCADE;
  DROP TABLE "pages_blocks_image_text" CASCADE;
  DROP TABLE "pages_blocks_feature_cards_cards" CASCADE;
  DROP TABLE "pages_blocks_feature_cards" CASCADE;
  DROP TABLE "pages_blocks_steps_steps" CASCADE;
  DROP TABLE "pages_blocks_steps" CASCADE;
  DROP TABLE "pages_blocks_faq_items" CASCADE;
  DROP TABLE "pages_blocks_faq" CASCADE;
  DROP TABLE "pages_blocks_testimonials" CASCADE;
  DROP TABLE "pages_blocks_job_openings" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "_pages_v_blocks_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_text" CASCADE;
  DROP TABLE "_pages_v_blocks_image_text_bullets" CASCADE;
  DROP TABLE "_pages_v_blocks_image_text" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_cards_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_steps_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_items" CASCADE;
  DROP TABLE "_pages_v_blocks_faq" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_job_openings" CASCADE;
  DROP TABLE "_pages_v_blocks_cta" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "a_4e6ajk" CASCADE;
  DROP TABLE "a_1rs45gk" CASCADE;
  DROP TABLE "a_9756hx" CASCADE;
  DROP TABLE "a_1gvytli" CASCADE;
  DROP TABLE "header_footer" CASCADE;
  DROP TABLE "_a_4e6ajk_v" CASCADE;
  DROP TABLE "_a_1rs45gk_v" CASCADE;
  DROP TABLE "_a_9756hx_v" CASCADE;
  DROP TABLE "_a_1gvytli_v" CASCADE;
  DROP TABLE "_header_footer_v" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_pages_fk";
  
  DROP INDEX "payload_locked_documents_rels_pages_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "pages_id";
  DROP TYPE "public"."enum_pages_blocks_hero_background";
  DROP TYPE "public"."enum_pages_blocks_text_background";
  DROP TYPE "public"."enum_pages_blocks_image_text_image_position";
  DROP TYPE "public"."enum_pages_blocks_image_text_background";
  DROP TYPE "public"."enum_pages_blocks_feature_cards_cards_icon";
  DROP TYPE "public"."enum_pages_blocks_feature_cards_columns";
  DROP TYPE "public"."enum_pages_blocks_feature_cards_background";
  DROP TYPE "public"."enum_pages_blocks_steps_steps_icon";
  DROP TYPE "public"."enum_pages_blocks_steps_background";
  DROP TYPE "public"."enum_pages_blocks_faq_background";
  DROP TYPE "public"."enum_pages_blocks_cta_background";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_hero_background";
  DROP TYPE "public"."enum__pages_v_blocks_text_background";
  DROP TYPE "public"."enum__pages_v_blocks_image_text_image_position";
  DROP TYPE "public"."enum__pages_v_blocks_image_text_background";
  DROP TYPE "public"."enum__pages_v_blocks_feature_cards_cards_icon";
  DROP TYPE "public"."enum__pages_v_blocks_feature_cards_columns";
  DROP TYPE "public"."enum__pages_v_blocks_feature_cards_background";
  DROP TYPE "public"."enum__pages_v_blocks_steps_steps_icon";
  DROP TYPE "public"."enum__pages_v_blocks_steps_background";
  DROP TYPE "public"."enum__pages_v_blocks_faq_background";
  DROP TYPE "public"."enum__pages_v_blocks_cta_background";
  DROP TYPE "public"."enum__pages_v_version_status";`)
}
