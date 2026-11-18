import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_users_roles" AS ENUM('admin', 'editor');
  CREATE TYPE "public"."enum_jobs_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__jobs_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_testimonial_pages" AS ENUM('home', 'professionals', 'organizations');
  CREATE TYPE "public"."enum_team_department" AS ENUM('board', 'dev', 'marketing');
  CREATE TYPE "public"."enum_legal_document" AS ENUM('privacy-policy', 'terms-conditions');
  CREATE TYPE "public"."enum_submission_type" AS ENUM('contact', 'support', 'demo', 'newsletter');
  CREATE TYPE "public"."enum_submission_status" AS ENUM('new', 'in-progress', 'done', 'spam');
  CREATE TYPE "public"."e_13zxfz5" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'FileCheck2', 'FileText', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scan', 'Search', 'Send', 'Shield', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'Timer', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  CREATE TYPE "public"."e_1tz110" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'FileCheck2', 'FileText', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scan', 'Search', 'Send', 'Shield', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'Timer', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  CREATE TYPE "public"."e_22ywr" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'FileCheck2', 'FileText', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scan', 'Search', 'Send', 'Shield', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'Timer', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  CREATE TABLE "users_roles" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_users_roles",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "jobs_details_summary" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "jobs_details_why_join" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "jobs_details_why_ke_raeva" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "jobs_details_documents" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "jobs_details_skills" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "jobs_details_how_to_apply" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"order" numeric DEFAULT 0,
  	"company" varchar DEFAULT 'KeRaeva',
  	"location" varchar,
  	"type" varchar,
  	"mode" varchar,
  	"experience" varchar,
  	"salary" varchar,
  	"posted_at" timestamp(3) with time zone,
  	"apply_url" varchar,
  	"details_why_ke_raeva_intro" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_jobs_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_jobs_v_version_details_summary" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_jobs_v_version_details_why_join" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_jobs_v_version_details_why_ke_raeva" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_jobs_v_version_details_documents" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_jobs_v_version_details_skills" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_jobs_v_version_details_how_to_apply" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_jobs_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_order" numeric DEFAULT 0,
  	"version_company" varchar DEFAULT 'KeRaeva',
  	"version_location" varchar,
  	"version_type" varchar,
  	"version_mode" varchar,
  	"version_experience" varchar,
  	"version_salary" varchar,
  	"version_posted_at" timestamp(3) with time zone,
  	"version_apply_url" varchar,
  	"version_details_why_ke_raeva_intro" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__jobs_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "posts_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"author" varchar DEFAULT 'KeRaeva Team',
  	"published_date" timestamp(3) with time zone,
  	"excerpt" varchar,
  	"cover_image_id" integer,
  	"featured" boolean DEFAULT false,
  	"content" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_posts_v_version_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_author" varchar DEFAULT 'KeRaeva Team',
  	"version_published_date" timestamp(3) with time zone,
  	"version_excerpt" varchar,
  	"version_cover_image_id" integer,
  	"version_featured" boolean DEFAULT false,
  	"version_content" jsonb,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "testimonials_pages" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_testimonial_pages",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "testimonials" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" varchar NOT NULL,
  	"review" varchar NOT NULL,
  	"rating" numeric DEFAULT 5 NOT NULL,
  	"active" boolean DEFAULT true,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "team_members" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" varchar NOT NULL,
  	"department" "enum_team_department" DEFAULT 'dev' NOT NULL,
  	"photo_id" integer,
  	"bio" varchar,
  	"linkedin" varchar,
  	"twitter" varchar,
  	"show_on_about" boolean DEFAULT false,
  	"active" boolean DEFAULT true,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "faqs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL,
  	"active" boolean DEFAULT true,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "legal_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"content" varchar NOT NULL
  );
  
  CREATE TABLE "legal_parts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"intro" varchar
  );
  
  CREATE TABLE "legal_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"document" "enum_legal_document" NOT NULL,
  	"title" varchar NOT NULL,
  	"effective_date" varchar NOT NULL,
  	"last_updated" varchar NOT NULL,
  	"summary" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "_legal_sections_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"content" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_legal_parts_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"intro" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_legal_documents_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_document" "enum_legal_document" NOT NULL,
  	"version_title" varchar NOT NULL,
  	"version_effective_date" varchar NOT NULL,
  	"version_last_updated" varchar NOT NULL,
  	"version_summary" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum_submission_type" NOT NULL,
  	"status" "enum_submission_status" DEFAULT 'new' NOT NULL,
  	"summary" varchar,
  	"name" varchar,
  	"email" varchar,
  	"fields" jsonb,
  	"source" varchar,
  	"forwarded" boolean,
  	"notes" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"jobs_id" integer,
  	"posts_id" integer,
  	"testimonials_id" integer,
  	"team_members_id" integer,
  	"faqs_id" integer,
  	"legal_documents_id" integer,
  	"form_submissions_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"contact_email" varchar DEFAULT 'support@keraeva.com',
  	"contact_phone" varchar DEFAULT '(403) 919-6824',
  	"contact_location" varchar DEFAULT 'KeRaeva Canada Head Office',
  	"apps_google_play_url" varchar DEFAULT 'https://play.google.com/store/apps/details?id=com.keraeva',
  	"apps_app_store_url" varchar DEFAULT '',
  	"apps_ios_coming_soon_label" varchar DEFAULT 'Coming soon on iOS',
  	"apps_recruiter_registration_url" varchar DEFAULT 'https://recruiter.keraeva.com/registration',
  	"social_linkedin_url" varchar DEFAULT '',
  	"social_facebook_url" varchar DEFAULT '',
  	"social_instagram_url" varchar DEFAULT '',
  	"pages_show_our_team_page" boolean DEFAULT false,
  	"company_legal_name" varchar DEFAULT 'MedFaster Health Tech Inc.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_site_settings_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_contact_email" varchar DEFAULT 'support@keraeva.com',
  	"version_contact_phone" varchar DEFAULT '(403) 919-6824',
  	"version_contact_location" varchar DEFAULT 'KeRaeva Canada Head Office',
  	"version_apps_google_play_url" varchar DEFAULT 'https://play.google.com/store/apps/details?id=com.keraeva',
  	"version_apps_app_store_url" varchar DEFAULT '',
  	"version_apps_ios_coming_soon_label" varchar DEFAULT 'Coming soon on iOS',
  	"version_apps_recruiter_registration_url" varchar DEFAULT 'https://recruiter.keraeva.com/registration',
  	"version_social_linkedin_url" varchar DEFAULT '',
  	"version_social_facebook_url" varchar DEFAULT '',
  	"version_social_instagram_url" varchar DEFAULT '',
  	"version_pages_show_our_team_page" boolean DEFAULT false,
  	"version_company_legal_name" varchar DEFAULT 'MedFaster Health Tech Inc.',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "a_5cpntb" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Build Your Profile',
  	"description" varchar DEFAULT 'Professionals upload a resume and credentials. Organizations post jobs and shifts.'
  );
  
  CREATE TABLE "a_1ug9r6x" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "a_1qbo9hm" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "e_13zxfz5" DEFAULT 'Siren',
  	"title" varchar DEFAULT 'Urgent Need',
  	"description" varchar DEFAULT 'A facility needs cover for a shift that starts soon.'
  );
  
  CREATE TABLE "a_1fhf3el" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "e_1tz110" DEFAULT 'FileText',
  	"title" varchar DEFAULT 'AI Resume Parsing',
  	"description" varchar DEFAULT 'Professionals upload a resume and KeRaeva structures it into a complete profile, giving organizations consistent candidate information.'
  );
  
  CREATE TABLE "a_yjh70y" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "a_15k5e2v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'For Professionals'
  );
  
  CREATE TABLE "a_1vra5jj" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "a_j1z8bo" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "e_22ywr" DEFAULT 'Smartphone',
  	"title" varchar DEFAULT 'KeRaeva App',
  	"audience" varchar DEFAULT 'For healthcare professionals',
  	"cta_label" varchar DEFAULT 'KeRaeva for Professionals',
  	"cta_link" varchar DEFAULT '/medical-professionals'
  );
  
  CREATE TABLE "a_74vpr6" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "page_home" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seo_title" varchar DEFAULT 'KeRaeva | AI-Powered Healthcare Workforce Platform in Canada',
  	"seo_description" varchar DEFAULT 'Hire, verify and match healthcare professionals, fill urgent shifts and manage shifts and payments with KeRaeva, the AI-powered healthcare workforce platform for Canada.',
  	"seo_share_title" varchar DEFAULT 'KeRaeva | Healthcare Workforce, Powered by Intelligence',
  	"seo_share_description" varchar DEFAULT 'AI interviews, smart matching, urgent staffing, shifts and payments for healthcare organizations and professionals across Canada.',
  	"hero_heading" varchar DEFAULT 'Healthcare Workforce, Powered by **Intelligence**',
  	"hero_body" varchar DEFAULT 'KeRaeva connects healthcare organizations and professionals across Canada to hire, verify, match, fill urgent shifts and get paid, all in one AI-powered platform.',
  	"hero_primary_cta_label" varchar DEFAULT 'Find Opportunities',
  	"hero_primary_cta_link" varchar DEFAULT '#get-app',
  	"hero_secondary_cta_label" varchar DEFAULT 'Start Hiring',
  	"hero_secondary_cta_link" varchar DEFAULT '#start-hiring',
  	"hero_image_id" integer,
  	"hero_image_alt" varchar DEFAULT 'A healthcare professional walking with an older patient in a hospital',
  	"journey_show" boolean DEFAULT true,
  	"journey_heading" varchar DEFAULT 'A Simpler Path To Success For Everyone',
  	"journey_body" varchar DEFAULT 'From the first profile to the final payment, KeRaeva connects every step of healthcare hiring and staffing for professionals and organizations alike.',
  	"journey_cta_label" varchar DEFAULT 'Get Started',
  	"journey_cta_link" varchar DEFAULT '#get-started',
  	"urgent_staffing_show" boolean DEFAULT true,
  	"urgent_staffing_eyebrow" varchar DEFAULT 'Urgent Staffing',
  	"urgent_staffing_heading" varchar DEFAULT 'When a Shift Can’t Wait, **KeRaeva** Finds Who Can Work',
  	"urgent_staffing_primary_cta_label" varchar DEFAULT 'Explore Urgent Staffing',
  	"urgent_staffing_primary_cta_link" varchar DEFAULT '/medical-organizations#urgent-staffing',
  	"urgent_staffing_secondary_cta_label" varchar DEFAULT 'Get the App',
  	"urgent_staffing_secondary_cta_link" varchar DEFAULT '#get-app',
  	"ai_show" boolean DEFAULT true,
  	"ai_heading" varchar DEFAULT '**Intelligent AI**, Working for Healthcare Professionals & Organizations',
  	"ai_body" varchar DEFAULT 'AI is built into every step of KeRaeva, from building a profile to interviewing, matching and filling urgent shifts.',
  	"ai_cta_label" varchar DEFAULT 'Explore KeRaeva AI',
  	"ai_cta_link" varchar DEFAULT '/keraeva-ai',
  	"trust_show" boolean DEFAULT true,
  	"trust_eyebrow" varchar DEFAULT 'Trust & Verification',
  	"trust_heading" varchar DEFAULT 'Hiring Built on **Verified** Profiles and **Structured** Interviews',
  	"trust_body" varchar DEFAULT 'Professionals upload their credentials and can follow the verification status of each document. They then complete a structured AI interview, and recruiters review the scorecard alongside the profile, so every candidate is assessed the same way.',
  	"trust_image_id" integer,
  	"trust_image_alt" varchar DEFAULT 'Sample verified AI interview scorecard on a KeRaeva professional profile',
  	"ecosystem_show" boolean DEFAULT true,
  	"ecosystem_heading" varchar DEFAULT 'One **Connected Ecosystem**, Two Products',
  	"ecosystem_body" varchar DEFAULT 'Professionals use the KeRaeva app. Organizations use the recruiter platform. Jobs, interviews, shifts and payments move between them in one connected flow.',
  	"ecosystem_download_heading" varchar DEFAULT '**Download** the App',
  	"ecosystem_download_body" varchar DEFAULT 'Scan to get KeRaeva on Android. iOS is coming soon.',
  	"shift_to_payment_show" boolean DEFAULT true,
  	"shift_to_payment_heading" varchar DEFAULT 'From Opportunity to Completed Work',
  	"shift_to_payment_body" varchar DEFAULT 'KeRaeva doesn’t stop at the hire. Accepted shifts, check-ins and earnings stay connected in one flow.',
  	"shift_to_payment_cta_label" varchar DEFAULT 'Request a Demo',
  	"shift_to_payment_cta_link" varchar DEFAULT '#request-demo',
  	"shift_to_payment_sample_amount" varchar DEFAULT '$480',
  	"shift_to_payment_sample_shift" varchar DEFAULT 'RN Night Shift',
  	"shift_to_payment_sample_status" varchar DEFAULT 'Paid',
  	"testimonials_show" boolean DEFAULT true,
  	"testimonials_heading" varchar DEFAULT '**Real Results,** Real Partnerships',
  	"testimonials_body" varchar DEFAULT 'Hear from both the professionals finding their dream roles and the hospitals building their dream teams.',
  	"closing_ctas_show" boolean DEFAULT true,
  	"closing_ctas_professionals_heading" varchar DEFAULT 'Find Your Next Healthcare Role',
  	"closing_ctas_professionals_body" varchar DEFAULT 'Create your free profile in the KeRaeva app to see jobs and urgent shifts matched to your role and availability.',
  	"closing_ctas_professionals_cta_label" varchar DEFAULT 'Create Free Profile',
  	"closing_ctas_professionals_cta_link" varchar DEFAULT '#get-app',
  	"closing_ctas_organizations_heading" varchar DEFAULT 'Start Hiring Smarter Today',
  	"closing_ctas_organizations_body" varchar DEFAULT 'Reach verified healthcare professionals, fill urgent shifts and review AI-assessed candidates in one platform.',
  	"closing_ctas_organizations_primary_cta_label" varchar DEFAULT 'Post a Job',
  	"closing_ctas_organizations_primary_cta_link" varchar DEFAULT '#start-hiring',
  	"closing_ctas_organizations_secondary_cta_label" varchar DEFAULT 'Schedule Demo',
  	"closing_ctas_organizations_secondary_cta_link" varchar DEFAULT '#request-demo',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_a_5cpntb_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Build Your Profile',
  	"description" varchar DEFAULT 'Professionals upload a resume and credentials. Organizations post jobs and shifts.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_1ug9r6x_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_1qbo9hm_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "e_13zxfz5" DEFAULT 'Siren',
  	"title" varchar DEFAULT 'Urgent Need',
  	"description" varchar DEFAULT 'A facility needs cover for a shift that starts soon.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_1fhf3el_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "e_1tz110" DEFAULT 'FileText',
  	"title" varchar DEFAULT 'AI Resume Parsing',
  	"description" varchar DEFAULT 'Professionals upload a resume and KeRaeva structures it into a complete profile, giving organizations consistent candidate information.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_yjh70y_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_15k5e2v_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'For Professionals',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_1vra5jj_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_j1z8bo_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "e_22ywr" DEFAULT 'Smartphone',
  	"title" varchar DEFAULT 'KeRaeva App',
  	"audience" varchar DEFAULT 'For healthcare professionals',
  	"cta_label" varchar DEFAULT 'KeRaeva for Professionals',
  	"cta_link" varchar DEFAULT '/medical-professionals',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_74vpr6_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_page_home_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_seo_title" varchar DEFAULT 'KeRaeva | AI-Powered Healthcare Workforce Platform in Canada',
  	"version_seo_description" varchar DEFAULT 'Hire, verify and match healthcare professionals, fill urgent shifts and manage shifts and payments with KeRaeva, the AI-powered healthcare workforce platform for Canada.',
  	"version_seo_share_title" varchar DEFAULT 'KeRaeva | Healthcare Workforce, Powered by Intelligence',
  	"version_seo_share_description" varchar DEFAULT 'AI interviews, smart matching, urgent staffing, shifts and payments for healthcare organizations and professionals across Canada.',
  	"version_hero_heading" varchar DEFAULT 'Healthcare Workforce, Powered by **Intelligence**',
  	"version_hero_body" varchar DEFAULT 'KeRaeva connects healthcare organizations and professionals across Canada to hire, verify, match, fill urgent shifts and get paid, all in one AI-powered platform.',
  	"version_hero_primary_cta_label" varchar DEFAULT 'Find Opportunities',
  	"version_hero_primary_cta_link" varchar DEFAULT '#get-app',
  	"version_hero_secondary_cta_label" varchar DEFAULT 'Start Hiring',
  	"version_hero_secondary_cta_link" varchar DEFAULT '#start-hiring',
  	"version_hero_image_id" integer,
  	"version_hero_image_alt" varchar DEFAULT 'A healthcare professional walking with an older patient in a hospital',
  	"version_journey_show" boolean DEFAULT true,
  	"version_journey_heading" varchar DEFAULT 'A Simpler Path To Success For Everyone',
  	"version_journey_body" varchar DEFAULT 'From the first profile to the final payment, KeRaeva connects every step of healthcare hiring and staffing for professionals and organizations alike.',
  	"version_journey_cta_label" varchar DEFAULT 'Get Started',
  	"version_journey_cta_link" varchar DEFAULT '#get-started',
  	"version_urgent_staffing_show" boolean DEFAULT true,
  	"version_urgent_staffing_eyebrow" varchar DEFAULT 'Urgent Staffing',
  	"version_urgent_staffing_heading" varchar DEFAULT 'When a Shift Can’t Wait, **KeRaeva** Finds Who Can Work',
  	"version_urgent_staffing_primary_cta_label" varchar DEFAULT 'Explore Urgent Staffing',
  	"version_urgent_staffing_primary_cta_link" varchar DEFAULT '/medical-organizations#urgent-staffing',
  	"version_urgent_staffing_secondary_cta_label" varchar DEFAULT 'Get the App',
  	"version_urgent_staffing_secondary_cta_link" varchar DEFAULT '#get-app',
  	"version_ai_show" boolean DEFAULT true,
  	"version_ai_heading" varchar DEFAULT '**Intelligent AI**, Working for Healthcare Professionals & Organizations',
  	"version_ai_body" varchar DEFAULT 'AI is built into every step of KeRaeva, from building a profile to interviewing, matching and filling urgent shifts.',
  	"version_ai_cta_label" varchar DEFAULT 'Explore KeRaeva AI',
  	"version_ai_cta_link" varchar DEFAULT '/keraeva-ai',
  	"version_trust_show" boolean DEFAULT true,
  	"version_trust_eyebrow" varchar DEFAULT 'Trust & Verification',
  	"version_trust_heading" varchar DEFAULT 'Hiring Built on **Verified** Profiles and **Structured** Interviews',
  	"version_trust_body" varchar DEFAULT 'Professionals upload their credentials and can follow the verification status of each document. They then complete a structured AI interview, and recruiters review the scorecard alongside the profile, so every candidate is assessed the same way.',
  	"version_trust_image_id" integer,
  	"version_trust_image_alt" varchar DEFAULT 'Sample verified AI interview scorecard on a KeRaeva professional profile',
  	"version_ecosystem_show" boolean DEFAULT true,
  	"version_ecosystem_heading" varchar DEFAULT 'One **Connected Ecosystem**, Two Products',
  	"version_ecosystem_body" varchar DEFAULT 'Professionals use the KeRaeva app. Organizations use the recruiter platform. Jobs, interviews, shifts and payments move between them in one connected flow.',
  	"version_ecosystem_download_heading" varchar DEFAULT '**Download** the App',
  	"version_ecosystem_download_body" varchar DEFAULT 'Scan to get KeRaeva on Android. iOS is coming soon.',
  	"version_shift_to_payment_show" boolean DEFAULT true,
  	"version_shift_to_payment_heading" varchar DEFAULT 'From Opportunity to Completed Work',
  	"version_shift_to_payment_body" varchar DEFAULT 'KeRaeva doesn’t stop at the hire. Accepted shifts, check-ins and earnings stay connected in one flow.',
  	"version_shift_to_payment_cta_label" varchar DEFAULT 'Request a Demo',
  	"version_shift_to_payment_cta_link" varchar DEFAULT '#request-demo',
  	"version_shift_to_payment_sample_amount" varchar DEFAULT '$480',
  	"version_shift_to_payment_sample_shift" varchar DEFAULT 'RN Night Shift',
  	"version_shift_to_payment_sample_status" varchar DEFAULT 'Paid',
  	"version_testimonials_show" boolean DEFAULT true,
  	"version_testimonials_heading" varchar DEFAULT '**Real Results,** Real Partnerships',
  	"version_testimonials_body" varchar DEFAULT 'Hear from both the professionals finding their dream roles and the hospitals building their dream teams.',
  	"version_closing_ctas_show" boolean DEFAULT true,
  	"version_closing_ctas_professionals_heading" varchar DEFAULT 'Find Your Next Healthcare Role',
  	"version_closing_ctas_professionals_body" varchar DEFAULT 'Create your free profile in the KeRaeva app to see jobs and urgent shifts matched to your role and availability.',
  	"version_closing_ctas_professionals_cta_label" varchar DEFAULT 'Create Free Profile',
  	"version_closing_ctas_professionals_cta_link" varchar DEFAULT '#get-app',
  	"version_closing_ctas_organizations_heading" varchar DEFAULT 'Start Hiring Smarter Today',
  	"version_closing_ctas_organizations_body" varchar DEFAULT 'Reach verified healthcare professionals, fill urgent shifts and review AI-assessed candidates in one platform.',
  	"version_closing_ctas_organizations_primary_cta_label" varchar DEFAULT 'Post a Job',
  	"version_closing_ctas_organizations_primary_cta_link" varchar DEFAULT '#start-hiring',
  	"version_closing_ctas_organizations_secondary_cta_label" varchar DEFAULT 'Schedule Demo',
  	"version_closing_ctas_organizations_secondary_cta_link" varchar DEFAULT '#request-demo',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "users_roles" ADD CONSTRAINT "users_roles_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "jobs_details_summary" ADD CONSTRAINT "jobs_details_summary_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "jobs_details_why_join" ADD CONSTRAINT "jobs_details_why_join_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "jobs_details_why_ke_raeva" ADD CONSTRAINT "jobs_details_why_ke_raeva_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "jobs_details_documents" ADD CONSTRAINT "jobs_details_documents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "jobs_details_skills" ADD CONSTRAINT "jobs_details_skills_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "jobs_details_how_to_apply" ADD CONSTRAINT "jobs_details_how_to_apply_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_jobs_v_version_details_summary" ADD CONSTRAINT "_jobs_v_version_details_summary_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_jobs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_jobs_v_version_details_why_join" ADD CONSTRAINT "_jobs_v_version_details_why_join_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_jobs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_jobs_v_version_details_why_ke_raeva" ADD CONSTRAINT "_jobs_v_version_details_why_ke_raeva_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_jobs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_jobs_v_version_details_documents" ADD CONSTRAINT "_jobs_v_version_details_documents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_jobs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_jobs_v_version_details_skills" ADD CONSTRAINT "_jobs_v_version_details_skills_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_jobs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_jobs_v_version_details_how_to_apply" ADD CONSTRAINT "_jobs_v_version_details_how_to_apply_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_jobs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_jobs_v" ADD CONSTRAINT "_jobs_v_parent_id_jobs_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."jobs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_tags" ADD CONSTRAINT "posts_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_cover_image_id_media_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_version_tags" ADD CONSTRAINT "_posts_v_version_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_cover_image_id_media_id_fk" FOREIGN KEY ("version_cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "testimonials_pages" ADD CONSTRAINT "testimonials_pages_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "team_members" ADD CONSTRAINT "team_members_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "legal_sections" ADD CONSTRAINT "legal_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."legal_parts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "legal_parts" ADD CONSTRAINT "legal_parts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."legal_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_legal_sections_v" ADD CONSTRAINT "_legal_sections_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_legal_parts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_legal_parts_v" ADD CONSTRAINT "_legal_parts_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_legal_documents_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_legal_documents_v" ADD CONSTRAINT "_legal_documents_v_parent_id_legal_documents_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."legal_documents"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_jobs_fk" FOREIGN KEY ("jobs_id") REFERENCES "public"."jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_team_members_fk" FOREIGN KEY ("team_members_id") REFERENCES "public"."team_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_legal_documents_fk" FOREIGN KEY ("legal_documents_id") REFERENCES "public"."legal_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_5cpntb" ADD CONSTRAINT "a_5cpntb_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_1ug9r6x" ADD CONSTRAINT "a_1ug9r6x_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_1qbo9hm" ADD CONSTRAINT "a_1qbo9hm_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_1fhf3el" ADD CONSTRAINT "a_1fhf3el_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_yjh70y" ADD CONSTRAINT "a_yjh70y_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."a_15k5e2v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_15k5e2v" ADD CONSTRAINT "a_15k5e2v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_1vra5jj" ADD CONSTRAINT "a_1vra5jj_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."a_j1z8bo"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_j1z8bo" ADD CONSTRAINT "a_j1z8bo_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_74vpr6" ADD CONSTRAINT "a_74vpr6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "page_home" ADD CONSTRAINT "page_home_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "page_home" ADD CONSTRAINT "page_home_trust_image_id_media_id_fk" FOREIGN KEY ("trust_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_a_5cpntb_v" ADD CONSTRAINT "_a_5cpntb_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_1ug9r6x_v" ADD CONSTRAINT "_a_1ug9r6x_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_1qbo9hm_v" ADD CONSTRAINT "_a_1qbo9hm_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_1fhf3el_v" ADD CONSTRAINT "_a_1fhf3el_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_yjh70y_v" ADD CONSTRAINT "_a_yjh70y_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_a_15k5e2v_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_15k5e2v_v" ADD CONSTRAINT "_a_15k5e2v_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_1vra5jj_v" ADD CONSTRAINT "_a_1vra5jj_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_a_j1z8bo_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_j1z8bo_v" ADD CONSTRAINT "_a_j1z8bo_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_74vpr6_v" ADD CONSTRAINT "_a_74vpr6_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_page_home_v" ADD CONSTRAINT "_page_home_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_page_home_v" ADD CONSTRAINT "_page_home_v_version_trust_image_id_media_id_fk" FOREIGN KEY ("version_trust_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "users_roles_order_idx" ON "users_roles" USING btree ("order");
  CREATE INDEX "users_roles_parent_idx" ON "users_roles" USING btree ("parent_id");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "jobs_details_summary_order_idx" ON "jobs_details_summary" USING btree ("_order");
  CREATE INDEX "jobs_details_summary_parent_id_idx" ON "jobs_details_summary" USING btree ("_parent_id");
  CREATE INDEX "jobs_details_why_join_order_idx" ON "jobs_details_why_join" USING btree ("_order");
  CREATE INDEX "jobs_details_why_join_parent_id_idx" ON "jobs_details_why_join" USING btree ("_parent_id");
  CREATE INDEX "jobs_details_why_ke_raeva_order_idx" ON "jobs_details_why_ke_raeva" USING btree ("_order");
  CREATE INDEX "jobs_details_why_ke_raeva_parent_id_idx" ON "jobs_details_why_ke_raeva" USING btree ("_parent_id");
  CREATE INDEX "jobs_details_documents_order_idx" ON "jobs_details_documents" USING btree ("_order");
  CREATE INDEX "jobs_details_documents_parent_id_idx" ON "jobs_details_documents" USING btree ("_parent_id");
  CREATE INDEX "jobs_details_skills_order_idx" ON "jobs_details_skills" USING btree ("_order");
  CREATE INDEX "jobs_details_skills_parent_id_idx" ON "jobs_details_skills" USING btree ("_parent_id");
  CREATE INDEX "jobs_details_how_to_apply_order_idx" ON "jobs_details_how_to_apply" USING btree ("_order");
  CREATE INDEX "jobs_details_how_to_apply_parent_id_idx" ON "jobs_details_how_to_apply" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "jobs_slug_idx" ON "jobs" USING btree ("slug");
  CREATE INDEX "jobs_updated_at_idx" ON "jobs" USING btree ("updated_at");
  CREATE INDEX "jobs_created_at_idx" ON "jobs" USING btree ("created_at");
  CREATE INDEX "jobs__status_idx" ON "jobs" USING btree ("_status");
  CREATE INDEX "_jobs_v_version_details_summary_order_idx" ON "_jobs_v_version_details_summary" USING btree ("_order");
  CREATE INDEX "_jobs_v_version_details_summary_parent_id_idx" ON "_jobs_v_version_details_summary" USING btree ("_parent_id");
  CREATE INDEX "_jobs_v_version_details_why_join_order_idx" ON "_jobs_v_version_details_why_join" USING btree ("_order");
  CREATE INDEX "_jobs_v_version_details_why_join_parent_id_idx" ON "_jobs_v_version_details_why_join" USING btree ("_parent_id");
  CREATE INDEX "_jobs_v_version_details_why_ke_raeva_order_idx" ON "_jobs_v_version_details_why_ke_raeva" USING btree ("_order");
  CREATE INDEX "_jobs_v_version_details_why_ke_raeva_parent_id_idx" ON "_jobs_v_version_details_why_ke_raeva" USING btree ("_parent_id");
  CREATE INDEX "_jobs_v_version_details_documents_order_idx" ON "_jobs_v_version_details_documents" USING btree ("_order");
  CREATE INDEX "_jobs_v_version_details_documents_parent_id_idx" ON "_jobs_v_version_details_documents" USING btree ("_parent_id");
  CREATE INDEX "_jobs_v_version_details_skills_order_idx" ON "_jobs_v_version_details_skills" USING btree ("_order");
  CREATE INDEX "_jobs_v_version_details_skills_parent_id_idx" ON "_jobs_v_version_details_skills" USING btree ("_parent_id");
  CREATE INDEX "_jobs_v_version_details_how_to_apply_order_idx" ON "_jobs_v_version_details_how_to_apply" USING btree ("_order");
  CREATE INDEX "_jobs_v_version_details_how_to_apply_parent_id_idx" ON "_jobs_v_version_details_how_to_apply" USING btree ("_parent_id");
  CREATE INDEX "_jobs_v_parent_idx" ON "_jobs_v" USING btree ("parent_id");
  CREATE INDEX "_jobs_v_version_version_slug_idx" ON "_jobs_v" USING btree ("version_slug");
  CREATE INDEX "_jobs_v_version_version_updated_at_idx" ON "_jobs_v" USING btree ("version_updated_at");
  CREATE INDEX "_jobs_v_version_version_created_at_idx" ON "_jobs_v" USING btree ("version_created_at");
  CREATE INDEX "_jobs_v_version_version__status_idx" ON "_jobs_v" USING btree ("version__status");
  CREATE INDEX "_jobs_v_created_at_idx" ON "_jobs_v" USING btree ("created_at");
  CREATE INDEX "_jobs_v_updated_at_idx" ON "_jobs_v" USING btree ("updated_at");
  CREATE INDEX "_jobs_v_latest_idx" ON "_jobs_v" USING btree ("latest");
  CREATE INDEX "posts_tags_order_idx" ON "posts_tags" USING btree ("_order");
  CREATE INDEX "posts_tags_parent_id_idx" ON "posts_tags" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX "posts_cover_image_idx" ON "posts" USING btree ("cover_image_id");
  CREATE INDEX "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX "_posts_v_version_tags_order_idx" ON "_posts_v_version_tags" USING btree ("_order");
  CREATE INDEX "_posts_v_version_tags_parent_id_idx" ON "_posts_v_version_tags" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX "_posts_v_version_version_cover_image_idx" ON "_posts_v" USING btree ("version_cover_image_id");
  CREATE INDEX "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX "testimonials_pages_order_idx" ON "testimonials_pages" USING btree ("order");
  CREATE INDEX "testimonials_pages_parent_idx" ON "testimonials_pages" USING btree ("parent_id");
  CREATE INDEX "testimonials_updated_at_idx" ON "testimonials" USING btree ("updated_at");
  CREATE INDEX "testimonials_created_at_idx" ON "testimonials" USING btree ("created_at");
  CREATE INDEX "team_members_photo_idx" ON "team_members" USING btree ("photo_id");
  CREATE INDEX "team_members_updated_at_idx" ON "team_members" USING btree ("updated_at");
  CREATE INDEX "team_members_created_at_idx" ON "team_members" USING btree ("created_at");
  CREATE INDEX "faqs_updated_at_idx" ON "faqs" USING btree ("updated_at");
  CREATE INDEX "faqs_created_at_idx" ON "faqs" USING btree ("created_at");
  CREATE INDEX "legal_sections_order_idx" ON "legal_sections" USING btree ("_order");
  CREATE INDEX "legal_sections_parent_id_idx" ON "legal_sections" USING btree ("_parent_id");
  CREATE INDEX "legal_parts_order_idx" ON "legal_parts" USING btree ("_order");
  CREATE INDEX "legal_parts_parent_id_idx" ON "legal_parts" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "legal_documents_document_idx" ON "legal_documents" USING btree ("document");
  CREATE INDEX "legal_documents_updated_at_idx" ON "legal_documents" USING btree ("updated_at");
  CREATE INDEX "legal_documents_created_at_idx" ON "legal_documents" USING btree ("created_at");
  CREATE INDEX "_legal_sections_v_order_idx" ON "_legal_sections_v" USING btree ("_order");
  CREATE INDEX "_legal_sections_v_parent_id_idx" ON "_legal_sections_v" USING btree ("_parent_id");
  CREATE INDEX "_legal_parts_v_order_idx" ON "_legal_parts_v" USING btree ("_order");
  CREATE INDEX "_legal_parts_v_parent_id_idx" ON "_legal_parts_v" USING btree ("_parent_id");
  CREATE INDEX "_legal_documents_v_parent_idx" ON "_legal_documents_v" USING btree ("parent_id");
  CREATE INDEX "_legal_documents_v_version_version_document_idx" ON "_legal_documents_v" USING btree ("version_document");
  CREATE INDEX "_legal_documents_v_version_version_updated_at_idx" ON "_legal_documents_v" USING btree ("version_updated_at");
  CREATE INDEX "_legal_documents_v_version_version_created_at_idx" ON "_legal_documents_v" USING btree ("version_created_at");
  CREATE INDEX "_legal_documents_v_created_at_idx" ON "_legal_documents_v" USING btree ("created_at");
  CREATE INDEX "_legal_documents_v_updated_at_idx" ON "_legal_documents_v" USING btree ("updated_at");
  CREATE INDEX "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_jobs_id_idx" ON "payload_locked_documents_rels" USING btree ("jobs_id");
  CREATE INDEX "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX "payload_locked_documents_rels_testimonials_id_idx" ON "payload_locked_documents_rels" USING btree ("testimonials_id");
  CREATE INDEX "payload_locked_documents_rels_team_members_id_idx" ON "payload_locked_documents_rels" USING btree ("team_members_id");
  CREATE INDEX "payload_locked_documents_rels_faqs_id_idx" ON "payload_locked_documents_rels" USING btree ("faqs_id");
  CREATE INDEX "payload_locked_documents_rels_legal_documents_id_idx" ON "payload_locked_documents_rels" USING btree ("legal_documents_id");
  CREATE INDEX "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "_site_settings_v_created_at_idx" ON "_site_settings_v" USING btree ("created_at");
  CREATE INDEX "_site_settings_v_updated_at_idx" ON "_site_settings_v" USING btree ("updated_at");
  CREATE INDEX "a_5cpntb_order_idx" ON "a_5cpntb" USING btree ("_order");
  CREATE INDEX "a_5cpntb_parent_id_idx" ON "a_5cpntb" USING btree ("_parent_id");
  CREATE INDEX "a_1ug9r6x_order_idx" ON "a_1ug9r6x" USING btree ("_order");
  CREATE INDEX "a_1ug9r6x_parent_id_idx" ON "a_1ug9r6x" USING btree ("_parent_id");
  CREATE INDEX "a_1qbo9hm_order_idx" ON "a_1qbo9hm" USING btree ("_order");
  CREATE INDEX "a_1qbo9hm_parent_id_idx" ON "a_1qbo9hm" USING btree ("_parent_id");
  CREATE INDEX "a_1fhf3el_order_idx" ON "a_1fhf3el" USING btree ("_order");
  CREATE INDEX "a_1fhf3el_parent_id_idx" ON "a_1fhf3el" USING btree ("_parent_id");
  CREATE INDEX "a_yjh70y_order_idx" ON "a_yjh70y" USING btree ("_order");
  CREATE INDEX "a_yjh70y_parent_id_idx" ON "a_yjh70y" USING btree ("_parent_id");
  CREATE INDEX "a_15k5e2v_order_idx" ON "a_15k5e2v" USING btree ("_order");
  CREATE INDEX "a_15k5e2v_parent_id_idx" ON "a_15k5e2v" USING btree ("_parent_id");
  CREATE INDEX "a_1vra5jj_order_idx" ON "a_1vra5jj" USING btree ("_order");
  CREATE INDEX "a_1vra5jj_parent_id_idx" ON "a_1vra5jj" USING btree ("_parent_id");
  CREATE INDEX "a_j1z8bo_order_idx" ON "a_j1z8bo" USING btree ("_order");
  CREATE INDEX "a_j1z8bo_parent_id_idx" ON "a_j1z8bo" USING btree ("_parent_id");
  CREATE INDEX "a_74vpr6_order_idx" ON "a_74vpr6" USING btree ("_order");
  CREATE INDEX "a_74vpr6_parent_id_idx" ON "a_74vpr6" USING btree ("_parent_id");
  CREATE INDEX "page_home_hero_hero_image_idx" ON "page_home" USING btree ("hero_image_id");
  CREATE INDEX "page_home_trust_trust_image_idx" ON "page_home" USING btree ("trust_image_id");
  CREATE INDEX "_a_5cpntb_v_order_idx" ON "_a_5cpntb_v" USING btree ("_order");
  CREATE INDEX "_a_5cpntb_v_parent_id_idx" ON "_a_5cpntb_v" USING btree ("_parent_id");
  CREATE INDEX "_a_1ug9r6x_v_order_idx" ON "_a_1ug9r6x_v" USING btree ("_order");
  CREATE INDEX "_a_1ug9r6x_v_parent_id_idx" ON "_a_1ug9r6x_v" USING btree ("_parent_id");
  CREATE INDEX "_a_1qbo9hm_v_order_idx" ON "_a_1qbo9hm_v" USING btree ("_order");
  CREATE INDEX "_a_1qbo9hm_v_parent_id_idx" ON "_a_1qbo9hm_v" USING btree ("_parent_id");
  CREATE INDEX "_a_1fhf3el_v_order_idx" ON "_a_1fhf3el_v" USING btree ("_order");
  CREATE INDEX "_a_1fhf3el_v_parent_id_idx" ON "_a_1fhf3el_v" USING btree ("_parent_id");
  CREATE INDEX "_a_yjh70y_v_order_idx" ON "_a_yjh70y_v" USING btree ("_order");
  CREATE INDEX "_a_yjh70y_v_parent_id_idx" ON "_a_yjh70y_v" USING btree ("_parent_id");
  CREATE INDEX "_a_15k5e2v_v_order_idx" ON "_a_15k5e2v_v" USING btree ("_order");
  CREATE INDEX "_a_15k5e2v_v_parent_id_idx" ON "_a_15k5e2v_v" USING btree ("_parent_id");
  CREATE INDEX "_a_1vra5jj_v_order_idx" ON "_a_1vra5jj_v" USING btree ("_order");
  CREATE INDEX "_a_1vra5jj_v_parent_id_idx" ON "_a_1vra5jj_v" USING btree ("_parent_id");
  CREATE INDEX "_a_j1z8bo_v_order_idx" ON "_a_j1z8bo_v" USING btree ("_order");
  CREATE INDEX "_a_j1z8bo_v_parent_id_idx" ON "_a_j1z8bo_v" USING btree ("_parent_id");
  CREATE INDEX "_a_74vpr6_v_order_idx" ON "_a_74vpr6_v" USING btree ("_order");
  CREATE INDEX "_a_74vpr6_v_parent_id_idx" ON "_a_74vpr6_v" USING btree ("_parent_id");
  CREATE INDEX "_page_home_v_version_hero_version_hero_image_idx" ON "_page_home_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_page_home_v_version_trust_version_trust_image_idx" ON "_page_home_v" USING btree ("version_trust_image_id");
  CREATE INDEX "_page_home_v_created_at_idx" ON "_page_home_v" USING btree ("created_at");
  CREATE INDEX "_page_home_v_updated_at_idx" ON "_page_home_v" USING btree ("updated_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_roles" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "jobs_details_summary" CASCADE;
  DROP TABLE "jobs_details_why_join" CASCADE;
  DROP TABLE "jobs_details_why_ke_raeva" CASCADE;
  DROP TABLE "jobs_details_documents" CASCADE;
  DROP TABLE "jobs_details_skills" CASCADE;
  DROP TABLE "jobs_details_how_to_apply" CASCADE;
  DROP TABLE "jobs" CASCADE;
  DROP TABLE "_jobs_v_version_details_summary" CASCADE;
  DROP TABLE "_jobs_v_version_details_why_join" CASCADE;
  DROP TABLE "_jobs_v_version_details_why_ke_raeva" CASCADE;
  DROP TABLE "_jobs_v_version_details_documents" CASCADE;
  DROP TABLE "_jobs_v_version_details_skills" CASCADE;
  DROP TABLE "_jobs_v_version_details_how_to_apply" CASCADE;
  DROP TABLE "_jobs_v" CASCADE;
  DROP TABLE "posts_tags" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "_posts_v_version_tags" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "testimonials_pages" CASCADE;
  DROP TABLE "testimonials" CASCADE;
  DROP TABLE "team_members" CASCADE;
  DROP TABLE "faqs" CASCADE;
  DROP TABLE "legal_sections" CASCADE;
  DROP TABLE "legal_parts" CASCADE;
  DROP TABLE "legal_documents" CASCADE;
  DROP TABLE "_legal_sections_v" CASCADE;
  DROP TABLE "_legal_parts_v" CASCADE;
  DROP TABLE "_legal_documents_v" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TABLE "_site_settings_v" CASCADE;
  DROP TABLE "a_5cpntb" CASCADE;
  DROP TABLE "a_1ug9r6x" CASCADE;
  DROP TABLE "a_1qbo9hm" CASCADE;
  DROP TABLE "a_1fhf3el" CASCADE;
  DROP TABLE "a_yjh70y" CASCADE;
  DROP TABLE "a_15k5e2v" CASCADE;
  DROP TABLE "a_1vra5jj" CASCADE;
  DROP TABLE "a_j1z8bo" CASCADE;
  DROP TABLE "a_74vpr6" CASCADE;
  DROP TABLE "page_home" CASCADE;
  DROP TABLE "_a_5cpntb_v" CASCADE;
  DROP TABLE "_a_1ug9r6x_v" CASCADE;
  DROP TABLE "_a_1qbo9hm_v" CASCADE;
  DROP TABLE "_a_1fhf3el_v" CASCADE;
  DROP TABLE "_a_yjh70y_v" CASCADE;
  DROP TABLE "_a_15k5e2v_v" CASCADE;
  DROP TABLE "_a_1vra5jj_v" CASCADE;
  DROP TABLE "_a_j1z8bo_v" CASCADE;
  DROP TABLE "_a_74vpr6_v" CASCADE;
  DROP TABLE "_page_home_v" CASCADE;
  DROP TYPE "public"."enum_users_roles";
  DROP TYPE "public"."enum_jobs_status";
  DROP TYPE "public"."enum__jobs_v_version_status";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum_testimonial_pages";
  DROP TYPE "public"."enum_team_department";
  DROP TYPE "public"."enum_legal_document";
  DROP TYPE "public"."enum_submission_type";
  DROP TYPE "public"."enum_submission_status";
  DROP TYPE "public"."e_13zxfz5";
  DROP TYPE "public"."e_1tz110";
  DROP TYPE "public"."e_22ywr";`)
}
