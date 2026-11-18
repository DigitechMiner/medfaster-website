import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."e_11hmaat" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bookmark', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'CircleSlash', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'Eye', 'FileCheck2', 'FileText', 'Gauge', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'LayoutGrid', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scale', 'Scan', 'ScanFace', 'Search', 'Send', 'Shield', 'ShieldAlert', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'ThumbsUp', 'Timer', 'ToggleRight', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  CREATE TYPE "public"."e_e3qqv4" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bookmark', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'CircleSlash', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'Eye', 'FileCheck2', 'FileText', 'Gauge', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'LayoutGrid', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scale', 'Scan', 'ScanFace', 'Search', 'Send', 'Shield', 'ShieldAlert', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'ThumbsUp', 'Timer', 'ToggleRight', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  CREATE TYPE "public"."e_ty4583" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bookmark', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'CircleSlash', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'Eye', 'FileCheck2', 'FileText', 'Gauge', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'LayoutGrid', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scale', 'Scan', 'ScanFace', 'Search', 'Send', 'Shield', 'ShieldAlert', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'ThumbsUp', 'Timer', 'ToggleRight', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  CREATE TYPE "public"."e_1wpenzy" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bookmark', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'CircleSlash', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'Eye', 'FileCheck2', 'FileText', 'Gauge', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'LayoutGrid', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scale', 'Scan', 'ScanFace', 'Search', 'Send', 'Shield', 'ShieldAlert', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'ThumbsUp', 'Timer', 'ToggleRight', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  CREATE TYPE "public"."e_1wxluqd" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bookmark', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'CircleSlash', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'Eye', 'FileCheck2', 'FileText', 'Gauge', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'LayoutGrid', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scale', 'Scan', 'ScanFace', 'Search', 'Send', 'Shield', 'ShieldAlert', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'ThumbsUp', 'Timer', 'ToggleRight', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  CREATE TYPE "public"."e_1kdslve" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bookmark', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'CircleSlash', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'Eye', 'FileCheck2', 'FileText', 'Gauge', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'LayoutGrid', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scale', 'Scan', 'ScanFace', 'Search', 'Send', 'Shield', 'ShieldAlert', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'ThumbsUp', 'Timer', 'ToggleRight', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  CREATE TYPE "public"."e_1q77neo" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bookmark', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'CircleSlash', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'Eye', 'FileCheck2', 'FileText', 'Gauge', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'LayoutGrid', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scale', 'Scan', 'ScanFace', 'Search', 'Send', 'Shield', 'ShieldAlert', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'ThumbsUp', 'Timer', 'ToggleRight', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  CREATE TYPE "public"."e_3fqg1f" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bookmark', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'CircleSlash', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'Eye', 'FileCheck2', 'FileText', 'Gauge', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'LayoutGrid', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scale', 'Scan', 'ScanFace', 'Search', 'Send', 'Shield', 'ShieldAlert', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'ThumbsUp', 'Timer', 'ToggleRight', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  CREATE TYPE "public"."e_n6towo" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bookmark', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'CircleSlash', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'Eye', 'FileCheck2', 'FileText', 'Gauge', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'LayoutGrid', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scale', 'Scan', 'ScanFace', 'Search', 'Send', 'Shield', 'ShieldAlert', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'ThumbsUp', 'Timer', 'ToggleRight', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  CREATE TYPE "public"."e_9bhl27" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bookmark', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'CircleSlash', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'Eye', 'FileCheck2', 'FileText', 'Gauge', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'LayoutGrid', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scale', 'Scan', 'ScanFace', 'Search', 'Send', 'Shield', 'ShieldAlert', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'ThumbsUp', 'Timer', 'ToggleRight', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  CREATE TYPE "public"."e_8vtycm" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bookmark', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'CircleSlash', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'Eye', 'FileCheck2', 'FileText', 'Gauge', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'LayoutGrid', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scale', 'Scan', 'ScanFace', 'Search', 'Send', 'Shield', 'ShieldAlert', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'ThumbsUp', 'Timer', 'ToggleRight', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  CREATE TYPE "public"."e_1vvzx7q" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bookmark', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'CircleSlash', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'Eye', 'FileCheck2', 'FileText', 'Gauge', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'LayoutGrid', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scale', 'Scan', 'ScanFace', 'Search', 'Send', 'Shield', 'ShieldAlert', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'ThumbsUp', 'Timer', 'ToggleRight', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  CREATE TYPE "public"."e_1cfbx60" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bookmark', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'CircleSlash', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'Eye', 'FileCheck2', 'FileText', 'Gauge', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'LayoutGrid', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scale', 'Scan', 'ScanFace', 'Search', 'Send', 'Shield', 'ShieldAlert', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'ThumbsUp', 'Timer', 'ToggleRight', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  CREATE TYPE "public"."e_1iegtx9" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bookmark', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'CircleSlash', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'Eye', 'FileCheck2', 'FileText', 'Gauge', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'LayoutGrid', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scale', 'Scan', 'ScanFace', 'Search', 'Send', 'Shield', 'ShieldAlert', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'ThumbsUp', 'Timer', 'ToggleRight', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  CREATE TYPE "public"."e_ts7mgj" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bookmark', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'CircleSlash', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'Eye', 'FileCheck2', 'FileText', 'Gauge', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'LayoutGrid', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scale', 'Scan', 'ScanFace', 'Search', 'Send', 'Shield', 'ShieldAlert', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'ThumbsUp', 'Timer', 'ToggleRight', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  ALTER TYPE "public"."enum_pages_blocks_feature_cards_cards_icon" ADD VALUE 'Bookmark' BEFORE 'Bot';
  ALTER TYPE "public"."enum_pages_blocks_feature_cards_cards_icon" ADD VALUE 'CircleSlash' BEFORE 'ClipboardCheck';
  ALTER TYPE "public"."enum_pages_blocks_feature_cards_cards_icon" ADD VALUE 'Eye' BEFORE 'FileCheck2';
  ALTER TYPE "public"."enum_pages_blocks_feature_cards_cards_icon" ADD VALUE 'Gauge' BEFORE 'Gift';
  ALTER TYPE "public"."enum_pages_blocks_feature_cards_cards_icon" ADD VALUE 'LayoutGrid' BEFORE 'Lightbulb';
  ALTER TYPE "public"."enum_pages_blocks_feature_cards_cards_icon" ADD VALUE 'Scale' BEFORE 'Scan';
  ALTER TYPE "public"."enum_pages_blocks_feature_cards_cards_icon" ADD VALUE 'ScanFace' BEFORE 'Search';
  ALTER TYPE "public"."enum_pages_blocks_feature_cards_cards_icon" ADD VALUE 'ShieldAlert' BEFORE 'ShieldCheck';
  ALTER TYPE "public"."enum_pages_blocks_feature_cards_cards_icon" ADD VALUE 'ThumbsUp' BEFORE 'Timer';
  ALTER TYPE "public"."enum_pages_blocks_feature_cards_cards_icon" ADD VALUE 'ToggleRight' BEFORE 'TrendingUp';
  ALTER TYPE "public"."enum_pages_blocks_steps_steps_icon" ADD VALUE 'Bookmark' BEFORE 'Bot';
  ALTER TYPE "public"."enum_pages_blocks_steps_steps_icon" ADD VALUE 'CircleSlash' BEFORE 'ClipboardCheck';
  ALTER TYPE "public"."enum_pages_blocks_steps_steps_icon" ADD VALUE 'Eye' BEFORE 'FileCheck2';
  ALTER TYPE "public"."enum_pages_blocks_steps_steps_icon" ADD VALUE 'Gauge' BEFORE 'Gift';
  ALTER TYPE "public"."enum_pages_blocks_steps_steps_icon" ADD VALUE 'LayoutGrid' BEFORE 'Lightbulb';
  ALTER TYPE "public"."enum_pages_blocks_steps_steps_icon" ADD VALUE 'Scale' BEFORE 'Scan';
  ALTER TYPE "public"."enum_pages_blocks_steps_steps_icon" ADD VALUE 'ScanFace' BEFORE 'Search';
  ALTER TYPE "public"."enum_pages_blocks_steps_steps_icon" ADD VALUE 'ShieldAlert' BEFORE 'ShieldCheck';
  ALTER TYPE "public"."enum_pages_blocks_steps_steps_icon" ADD VALUE 'ThumbsUp' BEFORE 'Timer';
  ALTER TYPE "public"."enum_pages_blocks_steps_steps_icon" ADD VALUE 'ToggleRight' BEFORE 'TrendingUp';
  ALTER TYPE "public"."enum__pages_v_blocks_feature_cards_cards_icon" ADD VALUE 'Bookmark' BEFORE 'Bot';
  ALTER TYPE "public"."enum__pages_v_blocks_feature_cards_cards_icon" ADD VALUE 'CircleSlash' BEFORE 'ClipboardCheck';
  ALTER TYPE "public"."enum__pages_v_blocks_feature_cards_cards_icon" ADD VALUE 'Eye' BEFORE 'FileCheck2';
  ALTER TYPE "public"."enum__pages_v_blocks_feature_cards_cards_icon" ADD VALUE 'Gauge' BEFORE 'Gift';
  ALTER TYPE "public"."enum__pages_v_blocks_feature_cards_cards_icon" ADD VALUE 'LayoutGrid' BEFORE 'Lightbulb';
  ALTER TYPE "public"."enum__pages_v_blocks_feature_cards_cards_icon" ADD VALUE 'Scale' BEFORE 'Scan';
  ALTER TYPE "public"."enum__pages_v_blocks_feature_cards_cards_icon" ADD VALUE 'ScanFace' BEFORE 'Search';
  ALTER TYPE "public"."enum__pages_v_blocks_feature_cards_cards_icon" ADD VALUE 'ShieldAlert' BEFORE 'ShieldCheck';
  ALTER TYPE "public"."enum__pages_v_blocks_feature_cards_cards_icon" ADD VALUE 'ThumbsUp' BEFORE 'Timer';
  ALTER TYPE "public"."enum__pages_v_blocks_feature_cards_cards_icon" ADD VALUE 'ToggleRight' BEFORE 'TrendingUp';
  ALTER TYPE "public"."enum__pages_v_blocks_steps_steps_icon" ADD VALUE 'Bookmark' BEFORE 'Bot';
  ALTER TYPE "public"."enum__pages_v_blocks_steps_steps_icon" ADD VALUE 'CircleSlash' BEFORE 'ClipboardCheck';
  ALTER TYPE "public"."enum__pages_v_blocks_steps_steps_icon" ADD VALUE 'Eye' BEFORE 'FileCheck2';
  ALTER TYPE "public"."enum__pages_v_blocks_steps_steps_icon" ADD VALUE 'Gauge' BEFORE 'Gift';
  ALTER TYPE "public"."enum__pages_v_blocks_steps_steps_icon" ADD VALUE 'LayoutGrid' BEFORE 'Lightbulb';
  ALTER TYPE "public"."enum__pages_v_blocks_steps_steps_icon" ADD VALUE 'Scale' BEFORE 'Scan';
  ALTER TYPE "public"."enum__pages_v_blocks_steps_steps_icon" ADD VALUE 'ScanFace' BEFORE 'Search';
  ALTER TYPE "public"."enum__pages_v_blocks_steps_steps_icon" ADD VALUE 'ShieldAlert' BEFORE 'ShieldCheck';
  ALTER TYPE "public"."enum__pages_v_blocks_steps_steps_icon" ADD VALUE 'ThumbsUp' BEFORE 'Timer';
  ALTER TYPE "public"."enum__pages_v_blocks_steps_steps_icon" ADD VALUE 'ToggleRight' BEFORE 'TrendingUp';
  ALTER TYPE "public"."e_13zxfz5" ADD VALUE 'Bookmark' BEFORE 'Bot';
  ALTER TYPE "public"."e_13zxfz5" ADD VALUE 'CircleSlash' BEFORE 'ClipboardCheck';
  ALTER TYPE "public"."e_13zxfz5" ADD VALUE 'Eye' BEFORE 'FileCheck2';
  ALTER TYPE "public"."e_13zxfz5" ADD VALUE 'Gauge' BEFORE 'Gift';
  ALTER TYPE "public"."e_13zxfz5" ADD VALUE 'LayoutGrid' BEFORE 'Lightbulb';
  ALTER TYPE "public"."e_13zxfz5" ADD VALUE 'Scale' BEFORE 'Scan';
  ALTER TYPE "public"."e_13zxfz5" ADD VALUE 'ScanFace' BEFORE 'Search';
  ALTER TYPE "public"."e_13zxfz5" ADD VALUE 'ShieldAlert' BEFORE 'ShieldCheck';
  ALTER TYPE "public"."e_13zxfz5" ADD VALUE 'ThumbsUp' BEFORE 'Timer';
  ALTER TYPE "public"."e_13zxfz5" ADD VALUE 'ToggleRight' BEFORE 'TrendingUp';
  ALTER TYPE "public"."e_1tz110" ADD VALUE 'Bookmark' BEFORE 'Bot';
  ALTER TYPE "public"."e_1tz110" ADD VALUE 'CircleSlash' BEFORE 'ClipboardCheck';
  ALTER TYPE "public"."e_1tz110" ADD VALUE 'Eye' BEFORE 'FileCheck2';
  ALTER TYPE "public"."e_1tz110" ADD VALUE 'Gauge' BEFORE 'Gift';
  ALTER TYPE "public"."e_1tz110" ADD VALUE 'LayoutGrid' BEFORE 'Lightbulb';
  ALTER TYPE "public"."e_1tz110" ADD VALUE 'Scale' BEFORE 'Scan';
  ALTER TYPE "public"."e_1tz110" ADD VALUE 'ScanFace' BEFORE 'Search';
  ALTER TYPE "public"."e_1tz110" ADD VALUE 'ShieldAlert' BEFORE 'ShieldCheck';
  ALTER TYPE "public"."e_1tz110" ADD VALUE 'ThumbsUp' BEFORE 'Timer';
  ALTER TYPE "public"."e_1tz110" ADD VALUE 'ToggleRight' BEFORE 'TrendingUp';
  ALTER TYPE "public"."e_22ywr" ADD VALUE 'Bookmark' BEFORE 'Bot';
  ALTER TYPE "public"."e_22ywr" ADD VALUE 'CircleSlash' BEFORE 'ClipboardCheck';
  ALTER TYPE "public"."e_22ywr" ADD VALUE 'Eye' BEFORE 'FileCheck2';
  ALTER TYPE "public"."e_22ywr" ADD VALUE 'Gauge' BEFORE 'Gift';
  ALTER TYPE "public"."e_22ywr" ADD VALUE 'LayoutGrid' BEFORE 'Lightbulb';
  ALTER TYPE "public"."e_22ywr" ADD VALUE 'Scale' BEFORE 'Scan';
  ALTER TYPE "public"."e_22ywr" ADD VALUE 'ScanFace' BEFORE 'Search';
  ALTER TYPE "public"."e_22ywr" ADD VALUE 'ShieldAlert' BEFORE 'ShieldCheck';
  ALTER TYPE "public"."e_22ywr" ADD VALUE 'ThumbsUp' BEFORE 'Timer';
  ALTER TYPE "public"."e_22ywr" ADD VALUE 'ToggleRight' BEFORE 'TrendingUp';
  CREATE TABLE "a_qmgu8e" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "e_11hmaat" DEFAULT 'UserPlus',
  	"title" varchar DEFAULT 'Create Your Profile',
  	"description" varchar DEFAULT 'Upload your resume and certificates, and our AI helps fill in your profile details.'
  );
  
  CREATE TABLE "a_monnd4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "a_12mnuo9" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "e_e3qqv4" DEFAULT 'CalendarClock',
  	"title" varchar DEFAULT 'Set Your Availability',
  	"description" varchar DEFAULT 'Turn on availability for the days and times you’re open to urgent work.'
  );
  
  CREATE TABLE "a_y4norg" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "e_ty4583" DEFAULT 'FileText',
  	"title" varchar DEFAULT 'AI Resume Parsing',
  	"description" varchar DEFAULT 'Build your professional profile faster. Upload your resume and our AI structures it into your profile.'
  );
  
  CREATE TABLE "a_1inwi5u" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"screenshot_id" integer,
  	"title" varchar DEFAULT 'Resume & Certificate Upload',
  	"description" varchar DEFAULT 'Keep your professional documents in one place to build a complete, standout profile.'
  );
  
  CREATE TABLE "a_fmfttz" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "e_1wpenzy" DEFAULT 'Send',
  	"title" varchar DEFAULT 'Applied',
  	"description" varchar DEFAULT 'Your application is with the organization.'
  );
  
  CREATE TABLE "a_1igzcwx" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "a_1jsk11a" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "e_1wxluqd" DEFAULT 'Bookmark',
  	"title" varchar DEFAULT 'Saved Jobs',
  	"description" varchar DEFAULT 'Save roles you like and come back to them when you''re ready to apply.'
  );
  
  CREATE TABLE "page_professionals" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seo_title" varchar DEFAULT 'Healthcare Professionals | Jobs, Urgent Shifts & AI Interviews | KeRaeva',
  	"seo_description" varchar DEFAULT 'Find healthcare jobs and urgent shifts near you, complete a reusable AI interview, track every application and get paid through the KeRaeva app.',
  	"seo_share_title" varchar DEFAULT 'KeRaeva for Healthcare Professionals',
  	"seo_share_description" varchar DEFAULT 'Jobs, urgent shifts, AI interviews and earnings in one app for Canadian healthcare professionals.',
  	"hero_heading" varchar DEFAULT 'Find Healthcare Jobs Near You **Instantly**',
  	"hero_search_hint" varchar DEFAULT 'Search, apply and accept shifts in the KeRaeva app.',
  	"hero_body" varchar DEFAULT 'The AI-powered platform connecting you directly with verified healthcare service providers, such as hospitals, nursing home facilities, medical clinics, dental clinics, physiotherapy clinics and more across Canada. Discover full-time, part-time, and on-demand roles all on your terms.',
  	"hero_cta_label" varchar DEFAULT 'Browse Nearby Jobs',
  	"hero_cta_link" varchar DEFAULT '#get-app',
  	"hero_app_image_id" integer,
  	"hero_app_image_alt" varchar DEFAULT 'KeRaeva app interface',
  	"hero_side_image_id" integer,
  	"hero_flexibility_heading" varchar DEFAULT 'Total Flexibility & Control',
  	"hero_flexibility_body" varchar DEFAULT 'Take charge of your career. Choose full-time, part-time or on-demand shifts that fit your schedule, and get instant alerts for jobs you actually want.',
  	"hero_opportunities_heading" varchar DEFAULT 'Direct & Verified Opportunities',
  	"hero_opportunities_body" varchar DEFAULT 'Connect directly with hospitals, care facilities and clinics. Apply in a tap, chat with hiring teams and track every application in the app.',
  	"get_hired_show" boolean DEFAULT true,
  	"get_hired_heading" varchar DEFAULT 'Get Hired in 3 Simple Steps',
  	"get_hired_body" varchar DEFAULT 'Our AI-powered process makes finding your next role faster and more direct than ever before.',
  	"get_hired_image_id" integer,
  	"get_hired_image_alt" varchar DEFAULT 'Healthcare professional assisting patient',
  	"get_hired_cta_label" varchar DEFAULT 'Get Started',
  	"get_hired_cta_link" varchar DEFAULT '#get-app',
  	"urgent_staffing_show" boolean DEFAULT true,
  	"urgent_staffing_eyebrow" varchar DEFAULT 'Urgent Shifts',
  	"urgent_staffing_heading" varchar DEFAULT 'Urgent Shifts, **On Your Terms**',
  	"urgent_staffing_primary_cta_label" varchar DEFAULT 'Get the App',
  	"urgent_staffing_primary_cta_link" varchar DEFAULT '#get-app',
  	"urgent_staffing_secondary_cta_label" varchar DEFAULT '',
  	"urgent_staffing_secondary_cta_link" varchar DEFAULT '',
  	"ai_show" boolean DEFAULT true,
  	"ai_heading" varchar DEFAULT 'How **AI Helps You** Get the Right Job Faster',
  	"ai_body" varchar DEFAULT 'Our intelligent platform works behind the scenes to help you get the right job, faster. Here''s how:',
  	"verified_show" boolean DEFAULT true,
  	"verified_heading" varchar DEFAULT 'Earn a **Verified** Score.
  Get Hired Faster.',
  	"verified_body" varchar DEFAULT 'Once you complete onboarding and pre-screening, you''ll receive an AI-generated scorecard. A verified profile with a completed AI interview helps you stand out to recruiters.',
  	"verified_image_id" integer,
  	"verified_image_alt" varchar DEFAULT 'Sample verified AI interview scorecard on a KeRaeva professional profile',
  	"app_features_show" boolean DEFAULT true,
  	"app_features_heading" varchar DEFAULT 'Your **All-in-One** Healthcare career App',
  	"app_features_body" varchar DEFAULT 'From building a verified profile to managing your payments, everything you need is right here',
  	"application_status_show" boolean DEFAULT true,
  	"application_status_heading" varchar DEFAULT 'Know Where You **Stand**',
  	"application_status_body" varchar DEFAULT 'No more wondering. Every application shows its current status in the app, and you get notified as it moves forward.',
  	"shift_to_payment_show" boolean DEFAULT true,
  	"shift_to_payment_heading" varchar DEFAULT 'From Accepted Shift to Your Wallet',
  	"shift_to_payment_body" varchar DEFAULT 'Your shifts, check-ins and earnings live in one place in the app, so you always know what you’ve worked and what you’ve earned.',
  	"shift_to_payment_cta_label" varchar DEFAULT 'Get the App',
  	"shift_to_payment_cta_link" varchar DEFAULT '#get-app',
  	"shift_to_payment_sample_amount" varchar DEFAULT '$480',
  	"shift_to_payment_sample_shift" varchar DEFAULT 'RN Night Shift',
  	"shift_to_payment_sample_status" varchar DEFAULT 'Paid',
  	"more_in_the_app_show" boolean DEFAULT true,
  	"more_in_the_app_heading" varchar DEFAULT 'More Ways KeRaeva **Works for You**',
  	"more_in_the_app_body" varchar DEFAULT 'Everything you need to manage your healthcare career, from the first application to your next shift.',
  	"testimonials_show" boolean DEFAULT true,
  	"testimonials_heading" varchar DEFAULT 'What Our Professionals Are Saying About
  **KeRaeva**',
  	"testimonials_body" varchar DEFAULT 'Real experiences from nurses, specialists and therapists using KeRaeva to find roles and shifts that fit their lives.',
  	"next_career_show" boolean DEFAULT true,
  	"next_career_heading" varchar DEFAULT 'Your Next Career Move Starts Here.',
  	"next_career_body" varchar DEFAULT 'Join now to get access to verified listings, instant matches, and a network that''s invested in your success',
  	"next_career_cta_label" varchar DEFAULT 'Download app',
  	"next_career_cta_link" varchar DEFAULT '#get-app',
  	"next_career_image_id" integer,
  	"next_career_image_alt" varchar DEFAULT 'Healthcare professional',
  	"app_download_show" boolean DEFAULT true,
  	"app_download_heading" varchar DEFAULT 'Your Career, Your Control **On the Go.**',
  	"app_download_body" varchar DEFAULT 'Get instant job alerts, apply with a single tap, and manage your entire job search — anytime, anywhere.',
  	"app_download_screenshot_id" integer,
  	"app_download_screenshot_alt" varchar DEFAULT 'Mobile app showing job search interface',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_a_qmgu8e_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "e_11hmaat" DEFAULT 'UserPlus',
  	"title" varchar DEFAULT 'Create Your Profile',
  	"description" varchar DEFAULT 'Upload your resume and certificates, and our AI helps fill in your profile details.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_monnd4_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_12mnuo9_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "e_e3qqv4" DEFAULT 'CalendarClock',
  	"title" varchar DEFAULT 'Set Your Availability',
  	"description" varchar DEFAULT 'Turn on availability for the days and times you’re open to urgent work.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_y4norg_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "e_ty4583" DEFAULT 'FileText',
  	"title" varchar DEFAULT 'AI Resume Parsing',
  	"description" varchar DEFAULT 'Build your professional profile faster. Upload your resume and our AI structures it into your profile.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_1inwi5u_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"screenshot_id" integer,
  	"title" varchar DEFAULT 'Resume & Certificate Upload',
  	"description" varchar DEFAULT 'Keep your professional documents in one place to build a complete, standout profile.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_fmfttz_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "e_1wpenzy" DEFAULT 'Send',
  	"title" varchar DEFAULT 'Applied',
  	"description" varchar DEFAULT 'Your application is with the organization.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_1igzcwx_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_1jsk11a_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "e_1wxluqd" DEFAULT 'Bookmark',
  	"title" varchar DEFAULT 'Saved Jobs',
  	"description" varchar DEFAULT 'Save roles you like and come back to them when you''re ready to apply.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_page_professionals_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_seo_title" varchar DEFAULT 'Healthcare Professionals | Jobs, Urgent Shifts & AI Interviews | KeRaeva',
  	"version_seo_description" varchar DEFAULT 'Find healthcare jobs and urgent shifts near you, complete a reusable AI interview, track every application and get paid through the KeRaeva app.',
  	"version_seo_share_title" varchar DEFAULT 'KeRaeva for Healthcare Professionals',
  	"version_seo_share_description" varchar DEFAULT 'Jobs, urgent shifts, AI interviews and earnings in one app for Canadian healthcare professionals.',
  	"version_hero_heading" varchar DEFAULT 'Find Healthcare Jobs Near You **Instantly**',
  	"version_hero_search_hint" varchar DEFAULT 'Search, apply and accept shifts in the KeRaeva app.',
  	"version_hero_body" varchar DEFAULT 'The AI-powered platform connecting you directly with verified healthcare service providers, such as hospitals, nursing home facilities, medical clinics, dental clinics, physiotherapy clinics and more across Canada. Discover full-time, part-time, and on-demand roles all on your terms.',
  	"version_hero_cta_label" varchar DEFAULT 'Browse Nearby Jobs',
  	"version_hero_cta_link" varchar DEFAULT '#get-app',
  	"version_hero_app_image_id" integer,
  	"version_hero_app_image_alt" varchar DEFAULT 'KeRaeva app interface',
  	"version_hero_side_image_id" integer,
  	"version_hero_flexibility_heading" varchar DEFAULT 'Total Flexibility & Control',
  	"version_hero_flexibility_body" varchar DEFAULT 'Take charge of your career. Choose full-time, part-time or on-demand shifts that fit your schedule, and get instant alerts for jobs you actually want.',
  	"version_hero_opportunities_heading" varchar DEFAULT 'Direct & Verified Opportunities',
  	"version_hero_opportunities_body" varchar DEFAULT 'Connect directly with hospitals, care facilities and clinics. Apply in a tap, chat with hiring teams and track every application in the app.',
  	"version_get_hired_show" boolean DEFAULT true,
  	"version_get_hired_heading" varchar DEFAULT 'Get Hired in 3 Simple Steps',
  	"version_get_hired_body" varchar DEFAULT 'Our AI-powered process makes finding your next role faster and more direct than ever before.',
  	"version_get_hired_image_id" integer,
  	"version_get_hired_image_alt" varchar DEFAULT 'Healthcare professional assisting patient',
  	"version_get_hired_cta_label" varchar DEFAULT 'Get Started',
  	"version_get_hired_cta_link" varchar DEFAULT '#get-app',
  	"version_urgent_staffing_show" boolean DEFAULT true,
  	"version_urgent_staffing_eyebrow" varchar DEFAULT 'Urgent Shifts',
  	"version_urgent_staffing_heading" varchar DEFAULT 'Urgent Shifts, **On Your Terms**',
  	"version_urgent_staffing_primary_cta_label" varchar DEFAULT 'Get the App',
  	"version_urgent_staffing_primary_cta_link" varchar DEFAULT '#get-app',
  	"version_urgent_staffing_secondary_cta_label" varchar DEFAULT '',
  	"version_urgent_staffing_secondary_cta_link" varchar DEFAULT '',
  	"version_ai_show" boolean DEFAULT true,
  	"version_ai_heading" varchar DEFAULT 'How **AI Helps You** Get the Right Job Faster',
  	"version_ai_body" varchar DEFAULT 'Our intelligent platform works behind the scenes to help you get the right job, faster. Here''s how:',
  	"version_verified_show" boolean DEFAULT true,
  	"version_verified_heading" varchar DEFAULT 'Earn a **Verified** Score.
  Get Hired Faster.',
  	"version_verified_body" varchar DEFAULT 'Once you complete onboarding and pre-screening, you''ll receive an AI-generated scorecard. A verified profile with a completed AI interview helps you stand out to recruiters.',
  	"version_verified_image_id" integer,
  	"version_verified_image_alt" varchar DEFAULT 'Sample verified AI interview scorecard on a KeRaeva professional profile',
  	"version_app_features_show" boolean DEFAULT true,
  	"version_app_features_heading" varchar DEFAULT 'Your **All-in-One** Healthcare career App',
  	"version_app_features_body" varchar DEFAULT 'From building a verified profile to managing your payments, everything you need is right here',
  	"version_application_status_show" boolean DEFAULT true,
  	"version_application_status_heading" varchar DEFAULT 'Know Where You **Stand**',
  	"version_application_status_body" varchar DEFAULT 'No more wondering. Every application shows its current status in the app, and you get notified as it moves forward.',
  	"version_shift_to_payment_show" boolean DEFAULT true,
  	"version_shift_to_payment_heading" varchar DEFAULT 'From Accepted Shift to Your Wallet',
  	"version_shift_to_payment_body" varchar DEFAULT 'Your shifts, check-ins and earnings live in one place in the app, so you always know what you’ve worked and what you’ve earned.',
  	"version_shift_to_payment_cta_label" varchar DEFAULT 'Get the App',
  	"version_shift_to_payment_cta_link" varchar DEFAULT '#get-app',
  	"version_shift_to_payment_sample_amount" varchar DEFAULT '$480',
  	"version_shift_to_payment_sample_shift" varchar DEFAULT 'RN Night Shift',
  	"version_shift_to_payment_sample_status" varchar DEFAULT 'Paid',
  	"version_more_in_the_app_show" boolean DEFAULT true,
  	"version_more_in_the_app_heading" varchar DEFAULT 'More Ways KeRaeva **Works for You**',
  	"version_more_in_the_app_body" varchar DEFAULT 'Everything you need to manage your healthcare career, from the first application to your next shift.',
  	"version_testimonials_show" boolean DEFAULT true,
  	"version_testimonials_heading" varchar DEFAULT 'What Our Professionals Are Saying About
  **KeRaeva**',
  	"version_testimonials_body" varchar DEFAULT 'Real experiences from nurses, specialists and therapists using KeRaeva to find roles and shifts that fit their lives.',
  	"version_next_career_show" boolean DEFAULT true,
  	"version_next_career_heading" varchar DEFAULT 'Your Next Career Move Starts Here.',
  	"version_next_career_body" varchar DEFAULT 'Join now to get access to verified listings, instant matches, and a network that''s invested in your success',
  	"version_next_career_cta_label" varchar DEFAULT 'Download app',
  	"version_next_career_cta_link" varchar DEFAULT '#get-app',
  	"version_next_career_image_id" integer,
  	"version_next_career_image_alt" varchar DEFAULT 'Healthcare professional',
  	"version_app_download_show" boolean DEFAULT true,
  	"version_app_download_heading" varchar DEFAULT 'Your Career, Your Control **On the Go.**',
  	"version_app_download_body" varchar DEFAULT 'Get instant job alerts, apply with a single tap, and manage your entire job search — anytime, anywhere.',
  	"version_app_download_screenshot_id" integer,
  	"version_app_download_screenshot_alt" varchar DEFAULT 'Mobile app showing job search interface',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "a_djauwz" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "e_1kdslve" DEFAULT 'Wand2',
  	"title" varchar DEFAULT 'Automated Screening',
  	"description" varchar DEFAULT 'AI parses resumes into structured profiles, with licences and documents collected upfront, so you spend less time on manual review.'
  );
  
  CREATE TABLE "a_zpkp8o" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "a_16aa8qx" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "e_1q77neo" DEFAULT 'Siren',
  	"title" varchar DEFAULT 'Create an Urgent Requirement',
  	"description" varchar DEFAULT 'Add the role, date, time, location and pay for the shift you need covered.'
  );
  
  CREATE TABLE "a_1xluygq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"screenshot_id" integer,
  	"title" varchar DEFAULT 'Candidate Pipeline',
  	"description" varchar DEFAULT 'Move candidates from Applied to Shortlisted, Interviewed and Hired, with each person''s AI score on their card.'
  );
  
  CREATE TABLE "a_lyk3to" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "e_3fqg1f" DEFAULT 'Send',
  	"title" varchar DEFAULT 'Job Invites',
  	"description" varchar DEFAULT 'Invite professionals directly to apply for your open roles.'
  );
  
  CREATE TABLE "a_1m4lqzl" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "page_organizations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seo_title" varchar DEFAULT 'Healthcare Organizations | AI Hiring & Urgent Staffing | KeRaeva',
  	"seo_description" varchar DEFAULT 'Hire verified healthcare professionals, review AI interview scorecards, fill urgent shifts and track shifts to payment with KeRaeva, built for Canadian hospitals, clinics and care organizations.',
  	"seo_share_title" varchar DEFAULT 'KeRaeva for Healthcare Organizations',
  	"seo_share_description" varchar DEFAULT 'AI-powered hiring, urgent staffing and shift management for Canadian healthcare organizations.',
  	"hero_heading" varchar DEFAULT 'Build Your Healthcare Workforce — **Faster & Smarter**',
  	"hero_body" varchar DEFAULT 'AI-powered hiring, urgent staffing and shift management for Canadian hospitals, clinics and care organizations. Find pre-screened, credentialed professionals, review AI interview scorecards and fill shifts from one platform.',
  	"hero_primary_cta_label" varchar DEFAULT 'Request Demo',
  	"hero_primary_cta_link" varchar DEFAULT '#request-demo',
  	"hero_secondary_cta_label" varchar DEFAULT 'Post a Job',
  	"hero_secondary_cta_link" varchar DEFAULT '#start-hiring',
  	"hero_image_id" integer,
  	"hero_image_alt" varchar DEFAULT 'KeRaeva recruiter dashboard showing open jobs and a candidate pipeline',
  	"hiring_show" boolean DEFAULT true,
  	"hiring_heading" varchar DEFAULT 'Smarter, Faster, and More Reliable Hiring',
  	"hiring_body" varchar DEFAULT 'Our AI-powered platform automates screening and matching, connecting you with top-tier talent in record time',
  	"hiring_image_id" integer,
  	"hiring_image_alt" varchar DEFAULT 'A healthcare manager reviewing a staffing dashboard on a tablet',
  	"hiring_cta_label" varchar DEFAULT 'Post a job',
  	"hiring_cta_link" varchar DEFAULT '#start-hiring',
  	"urgent_staffing_show" boolean DEFAULT true,
  	"urgent_staffing_eyebrow" varchar DEFAULT 'Urgent Staffing',
  	"urgent_staffing_heading" varchar DEFAULT 'Cover Last-Minute Gaps with **Urgent Staffing**',
  	"urgent_staffing_primary_cta_label" varchar DEFAULT 'Start Hiring',
  	"urgent_staffing_primary_cta_link" varchar DEFAULT '#start-hiring',
  	"urgent_staffing_secondary_cta_label" varchar DEFAULT 'Request Demo',
  	"urgent_staffing_secondary_cta_link" varchar DEFAULT '#request-demo',
  	"dashboard_show" boolean DEFAULT true,
  	"dashboard_heading" varchar DEFAULT 'Everything You Need, in **One Dashboard**',
  	"dashboard_body" varchar DEFAULT 'Post jobs, review AI-assessed candidates, schedule interviews and track hiring progress from one recruiter dashboard.',
  	"capabilities_show" boolean DEFAULT true,
  	"capabilities_heading" varchar DEFAULT 'Built for **Healthcare Staffing**',
  	"capabilities_body" varchar DEFAULT 'Beyond hiring, KeRaeva gives your team the tools to staff shifts and keep your workforce connected.',
  	"confidence_show" boolean DEFAULT true,
  	"confidence_heading" varchar DEFAULT 'Hire with **Confidence**',
  	"confidence_body" varchar DEFAULT 'Every candidate profile brings together uploaded documents, verification status and AI interview results, so you can decide with the full picture.',
  	"confidence_image_id" integer,
  	"confidence_image_alt" varchar DEFAULT 'Candidate profile with uploaded documents, AI interview scores and strengths',
  	"shift_to_payment_show" boolean DEFAULT true,
  	"shift_to_payment_heading" varchar DEFAULT 'From Shift to Payment, Seamlessly',
  	"shift_to_payment_body" varchar DEFAULT 'Assigned shifts, attendance and payment status stay connected in the recruiter platform, so your team knows what was worked and what’s been paid.',
  	"shift_to_payment_cta_label" varchar DEFAULT 'Request a Demo',
  	"shift_to_payment_cta_link" varchar DEFAULT '#request-demo',
  	"shift_to_payment_sample_amount" varchar DEFAULT '$480',
  	"shift_to_payment_sample_shift" varchar DEFAULT 'RN Night Shift',
  	"shift_to_payment_sample_status" varchar DEFAULT 'Paid',
  	"data_driven_show" boolean DEFAULT true,
  	"data_driven_heading" varchar DEFAULT 'Make **Data-Driven** Hiring Decisions',
  	"data_driven_body" varchar DEFAULT 'See active jobs, candidates, AI matches, interviews and hires at a glance, so you always know where hiring stands and where to focus next.',
  	"data_driven_cta_label" varchar DEFAULT 'Request Demo',
  	"data_driven_cta_link" varchar DEFAULT '#request-demo',
  	"testimonials_show" boolean DEFAULT true,
  	"testimonials_heading" varchar DEFAULT 'What Healthcare Teams Say About **KeRaeva**',
  	"testimonials_body" varchar DEFAULT 'Feedback from healthcare teams using KeRaeva to hire verified professionals, simplify compliance checks and fill shifts faster.',
  	"start_hiring_show" boolean DEFAULT true,
  	"start_hiring_heading" varchar DEFAULT 'Start Smart Hiring Today',
  	"start_hiring_body" varchar DEFAULT 'Hire verified healthcare professionals and fill urgent shifts, all in one AI-powered platform.',
  	"start_hiring_primary_cta_label" varchar DEFAULT 'Post a Job',
  	"start_hiring_primary_cta_link" varchar DEFAULT '#start-hiring',
  	"start_hiring_secondary_cta_label" varchar DEFAULT 'Schedule Demo',
  	"start_hiring_secondary_cta_link" varchar DEFAULT '#request-demo',
  	"start_hiring_image_id" integer,
  	"start_hiring_image_alt" varchar DEFAULT 'Healthcare professional',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_a_djauwz_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "e_1kdslve" DEFAULT 'Wand2',
  	"title" varchar DEFAULT 'Automated Screening',
  	"description" varchar DEFAULT 'AI parses resumes into structured profiles, with licences and documents collected upfront, so you spend less time on manual review.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_zpkp8o_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_16aa8qx_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "e_1q77neo" DEFAULT 'Siren',
  	"title" varchar DEFAULT 'Create an Urgent Requirement',
  	"description" varchar DEFAULT 'Add the role, date, time, location and pay for the shift you need covered.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_1xluygq_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"screenshot_id" integer,
  	"title" varchar DEFAULT 'Candidate Pipeline',
  	"description" varchar DEFAULT 'Move candidates from Applied to Shortlisted, Interviewed and Hired, with each person''s AI score on their card.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_lyk3to_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "e_3fqg1f" DEFAULT 'Send',
  	"title" varchar DEFAULT 'Job Invites',
  	"description" varchar DEFAULT 'Invite professionals directly to apply for your open roles.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_1m4lqzl_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_page_organizations_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_seo_title" varchar DEFAULT 'Healthcare Organizations | AI Hiring & Urgent Staffing | KeRaeva',
  	"version_seo_description" varchar DEFAULT 'Hire verified healthcare professionals, review AI interview scorecards, fill urgent shifts and track shifts to payment with KeRaeva, built for Canadian hospitals, clinics and care organizations.',
  	"version_seo_share_title" varchar DEFAULT 'KeRaeva for Healthcare Organizations',
  	"version_seo_share_description" varchar DEFAULT 'AI-powered hiring, urgent staffing and shift management for Canadian healthcare organizations.',
  	"version_hero_heading" varchar DEFAULT 'Build Your Healthcare Workforce — **Faster & Smarter**',
  	"version_hero_body" varchar DEFAULT 'AI-powered hiring, urgent staffing and shift management for Canadian hospitals, clinics and care organizations. Find pre-screened, credentialed professionals, review AI interview scorecards and fill shifts from one platform.',
  	"version_hero_primary_cta_label" varchar DEFAULT 'Request Demo',
  	"version_hero_primary_cta_link" varchar DEFAULT '#request-demo',
  	"version_hero_secondary_cta_label" varchar DEFAULT 'Post a Job',
  	"version_hero_secondary_cta_link" varchar DEFAULT '#start-hiring',
  	"version_hero_image_id" integer,
  	"version_hero_image_alt" varchar DEFAULT 'KeRaeva recruiter dashboard showing open jobs and a candidate pipeline',
  	"version_hiring_show" boolean DEFAULT true,
  	"version_hiring_heading" varchar DEFAULT 'Smarter, Faster, and More Reliable Hiring',
  	"version_hiring_body" varchar DEFAULT 'Our AI-powered platform automates screening and matching, connecting you with top-tier talent in record time',
  	"version_hiring_image_id" integer,
  	"version_hiring_image_alt" varchar DEFAULT 'A healthcare manager reviewing a staffing dashboard on a tablet',
  	"version_hiring_cta_label" varchar DEFAULT 'Post a job',
  	"version_hiring_cta_link" varchar DEFAULT '#start-hiring',
  	"version_urgent_staffing_show" boolean DEFAULT true,
  	"version_urgent_staffing_eyebrow" varchar DEFAULT 'Urgent Staffing',
  	"version_urgent_staffing_heading" varchar DEFAULT 'Cover Last-Minute Gaps with **Urgent Staffing**',
  	"version_urgent_staffing_primary_cta_label" varchar DEFAULT 'Start Hiring',
  	"version_urgent_staffing_primary_cta_link" varchar DEFAULT '#start-hiring',
  	"version_urgent_staffing_secondary_cta_label" varchar DEFAULT 'Request Demo',
  	"version_urgent_staffing_secondary_cta_link" varchar DEFAULT '#request-demo',
  	"version_dashboard_show" boolean DEFAULT true,
  	"version_dashboard_heading" varchar DEFAULT 'Everything You Need, in **One Dashboard**',
  	"version_dashboard_body" varchar DEFAULT 'Post jobs, review AI-assessed candidates, schedule interviews and track hiring progress from one recruiter dashboard.',
  	"version_capabilities_show" boolean DEFAULT true,
  	"version_capabilities_heading" varchar DEFAULT 'Built for **Healthcare Staffing**',
  	"version_capabilities_body" varchar DEFAULT 'Beyond hiring, KeRaeva gives your team the tools to staff shifts and keep your workforce connected.',
  	"version_confidence_show" boolean DEFAULT true,
  	"version_confidence_heading" varchar DEFAULT 'Hire with **Confidence**',
  	"version_confidence_body" varchar DEFAULT 'Every candidate profile brings together uploaded documents, verification status and AI interview results, so you can decide with the full picture.',
  	"version_confidence_image_id" integer,
  	"version_confidence_image_alt" varchar DEFAULT 'Candidate profile with uploaded documents, AI interview scores and strengths',
  	"version_shift_to_payment_show" boolean DEFAULT true,
  	"version_shift_to_payment_heading" varchar DEFAULT 'From Shift to Payment, Seamlessly',
  	"version_shift_to_payment_body" varchar DEFAULT 'Assigned shifts, attendance and payment status stay connected in the recruiter platform, so your team knows what was worked and what’s been paid.',
  	"version_shift_to_payment_cta_label" varchar DEFAULT 'Request a Demo',
  	"version_shift_to_payment_cta_link" varchar DEFAULT '#request-demo',
  	"version_shift_to_payment_sample_amount" varchar DEFAULT '$480',
  	"version_shift_to_payment_sample_shift" varchar DEFAULT 'RN Night Shift',
  	"version_shift_to_payment_sample_status" varchar DEFAULT 'Paid',
  	"version_data_driven_show" boolean DEFAULT true,
  	"version_data_driven_heading" varchar DEFAULT 'Make **Data-Driven** Hiring Decisions',
  	"version_data_driven_body" varchar DEFAULT 'See active jobs, candidates, AI matches, interviews and hires at a glance, so you always know where hiring stands and where to focus next.',
  	"version_data_driven_cta_label" varchar DEFAULT 'Request Demo',
  	"version_data_driven_cta_link" varchar DEFAULT '#request-demo',
  	"version_testimonials_show" boolean DEFAULT true,
  	"version_testimonials_heading" varchar DEFAULT 'What Healthcare Teams Say About **KeRaeva**',
  	"version_testimonials_body" varchar DEFAULT 'Feedback from healthcare teams using KeRaeva to hire verified professionals, simplify compliance checks and fill shifts faster.',
  	"version_start_hiring_show" boolean DEFAULT true,
  	"version_start_hiring_heading" varchar DEFAULT 'Start Smart Hiring Today',
  	"version_start_hiring_body" varchar DEFAULT 'Hire verified healthcare professionals and fill urgent shifts, all in one AI-powered platform.',
  	"version_start_hiring_primary_cta_label" varchar DEFAULT 'Post a Job',
  	"version_start_hiring_primary_cta_link" varchar DEFAULT '#start-hiring',
  	"version_start_hiring_secondary_cta_label" varchar DEFAULT 'Schedule Demo',
  	"version_start_hiring_secondary_cta_link" varchar DEFAULT '#request-demo',
  	"version_start_hiring_image_id" integer,
  	"version_start_hiring_image_alt" varchar DEFAULT 'Healthcare professional',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "page_contact" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seo_title" varchar DEFAULT 'Contact Us | KeRaeva',
  	"seo_description" varchar DEFAULT 'Talk to KeRaeva about hiring healthcare professionals, partnerships, media or general questions.',
  	"page_header_title" varchar DEFAULT 'Contact Us',
  	"page_header_breadcrumb" varchar DEFAULT 'Contact Us',
  	"intro_heading" varchar DEFAULT 'Got a Question?
  Let''s **Talk**',
  	"intro_body" varchar DEFAULT 'Talk to us about hiring with KeRaeva, partnerships, media or any general question, and we''ll get back to you by email.',
  	"intro_support_note" varchar DEFAULT 'Already using the KeRaeva app or recruiter platform?',
  	"intro_support_link_label" varchar DEFAULT 'Get help on the Support page',
  	"intro_location_label" varchar DEFAULT 'Location',
  	"intro_phone_label" varchar DEFAULT 'Phone Number',
  	"intro_follow_label" varchar DEFAULT 'Follow Us',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_page_contact_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_seo_title" varchar DEFAULT 'Contact Us | KeRaeva',
  	"version_seo_description" varchar DEFAULT 'Talk to KeRaeva about hiring healthcare professionals, partnerships, media or general questions.',
  	"version_page_header_title" varchar DEFAULT 'Contact Us',
  	"version_page_header_breadcrumb" varchar DEFAULT 'Contact Us',
  	"version_intro_heading" varchar DEFAULT 'Got a Question?
  Let''s **Talk**',
  	"version_intro_body" varchar DEFAULT 'Talk to us about hiring with KeRaeva, partnerships, media or any general question, and we''ll get back to you by email.',
  	"version_intro_support_note" varchar DEFAULT 'Already using the KeRaeva app or recruiter platform?',
  	"version_intro_support_link_label" varchar DEFAULT 'Get help on the Support page',
  	"version_intro_location_label" varchar DEFAULT 'Location',
  	"version_intro_phone_label" varchar DEFAULT 'Phone Number',
  	"version_intro_follow_label" varchar DEFAULT 'Follow Us',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "page_support" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seo_title" varchar DEFAULT 'Support | KeRaeva',
  	"seo_description" varchar DEFAULT 'Get help with the KeRaeva app or recruiter platform: accounts, verification, jobs, shifts, check-in, payments and AI interviews.',
  	"page_header_title" varchar DEFAULT 'Support',
  	"page_header_breadcrumb" varchar DEFAULT 'Support',
  	"intro_heading" varchar DEFAULT 'Get **Help** with the App, Shifts & Payments',
  	"intro_body" varchar DEFAULT 'Support is for people already using KeRaeva: professionals in the app and organizations on the recruiter platform. Ask about your account and verification, jobs and shifts, check-in, payments or AI interviews. For sales or partnerships, use the',
  	"intro_contact_link_label" varchar DEFAULT 'Contact page',
  	"intro_location_label" varchar DEFAULT 'Location',
  	"intro_phone_label" varchar DEFAULT 'Phone Number',
  	"intro_email_label" varchar DEFAULT 'Email us',
  	"form_heading" varchar DEFAULT 'Send a Support Request',
  	"form_body" varchar DEFAULT 'Tell us what''s happening and include the job or shift it relates to. Our support team will reply by email.',
  	"faqs_show" boolean DEFAULT true,
  	"faqs_heading" varchar DEFAULT 'Frequently Asked **Questions**',
  	"faqs_body" varchar DEFAULT 'Before you reach out, see if we''ve already answered your question. Our FAQ is fast, clear, and easy to follow.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_page_support_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_seo_title" varchar DEFAULT 'Support | KeRaeva',
  	"version_seo_description" varchar DEFAULT 'Get help with the KeRaeva app or recruiter platform: accounts, verification, jobs, shifts, check-in, payments and AI interviews.',
  	"version_page_header_title" varchar DEFAULT 'Support',
  	"version_page_header_breadcrumb" varchar DEFAULT 'Support',
  	"version_intro_heading" varchar DEFAULT 'Get **Help** with the App, Shifts & Payments',
  	"version_intro_body" varchar DEFAULT 'Support is for people already using KeRaeva: professionals in the app and organizations on the recruiter platform. Ask about your account and verification, jobs and shifts, check-in, payments or AI interviews. For sales or partnerships, use the',
  	"version_intro_contact_link_label" varchar DEFAULT 'Contact page',
  	"version_intro_location_label" varchar DEFAULT 'Location',
  	"version_intro_phone_label" varchar DEFAULT 'Phone Number',
  	"version_intro_email_label" varchar DEFAULT 'Email us',
  	"version_form_heading" varchar DEFAULT 'Send a Support Request',
  	"version_form_body" varchar DEFAULT 'Tell us what''s happening and include the job or shift it relates to. Our support team will reply by email.',
  	"version_faqs_show" boolean DEFAULT true,
  	"version_faqs_heading" varchar DEFAULT 'Frequently Asked **Questions**',
  	"version_faqs_body" varchar DEFAULT 'Before you reach out, see if we''ve already answered your question. Our FAQ is fast, clear, and easy to follow.',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "a_106c0bo" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "a_1xy6obb" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"audience" varchar DEFAULT 'For Healthcare Professionals',
  	"price" varchar DEFAULT 'Free',
  	"price_note" varchar DEFAULT 'No cost to join or apply',
  	"cta_label" varchar DEFAULT 'Get the App',
  	"cta_link" varchar DEFAULT '#get-app',
  	"highlighted" boolean DEFAULT false,
  	"badge" varchar DEFAULT 'Contact Sales'
  );
  
  CREATE TABLE "page_pricing" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seo_title" varchar DEFAULT 'Pricing | KeRaeva',
  	"seo_description" varchar DEFAULT 'KeRaeva is free for healthcare professionals. Healthcare organizations get pricing tailored to their hiring and staffing needs. Talk to our team.',
  	"hero_heading" varchar DEFAULT 'Simple, Transparent **Pricing**',
  	"hero_body" varchar DEFAULT 'Free for healthcare professionals. Healthcare organizations get pricing tailored to how they hire and staff. Talk to our team to find the right fit.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_a_106c0bo_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_1xy6obb_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"audience" varchar DEFAULT 'For Healthcare Professionals',
  	"price" varchar DEFAULT 'Free',
  	"price_note" varchar DEFAULT 'No cost to join or apply',
  	"cta_label" varchar DEFAULT 'Get the App',
  	"cta_link" varchar DEFAULT '#get-app',
  	"highlighted" boolean DEFAULT false,
  	"badge" varchar DEFAULT 'Contact Sales',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_page_pricing_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_seo_title" varchar DEFAULT 'Pricing | KeRaeva',
  	"version_seo_description" varchar DEFAULT 'KeRaeva is free for healthcare professionals. Healthcare organizations get pricing tailored to their hiring and staffing needs. Talk to our team.',
  	"version_hero_heading" varchar DEFAULT 'Simple, Transparent **Pricing**',
  	"version_hero_body" varchar DEFAULT 'Free for healthcare professionals. Healthcare organizations get pricing tailored to how they hire and staff. Talk to our team to find the right fit.',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "page_careers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seo_title" varchar DEFAULT 'Careers | KeRaeva',
  	"seo_description" varchar DEFAULT 'Explore careers at KeRaeva and help build the AI-powered healthcare workforce platform for Canada.',
  	"page_header_title" varchar DEFAULT 'Careers',
  	"page_header_parent_label" varchar DEFAULT 'About KeRaeva',
  	"page_header_breadcrumb" varchar DEFAULT 'Careers',
  	"no_openings_heading" varchar DEFAULT 'No Open Roles **Right Now**',
  	"no_openings_body" varchar DEFAULT 'We don''t have any openings at the moment, but we''re always happy to hear from people who want to improve healthcare staffing. Send us your CV and we''ll be in touch when a role fits.',
  	"no_openings_link_label" varchar DEFAULT 'Email support@keraeva.com',
  	"no_openings_link_url" varchar DEFAULT 'mailto:support@keraeva.com?subject=Careers%20at%20KeRaeva',
  	"job_page_why_join_heading" varchar DEFAULT 'Why join',
  	"job_page_why_ke_raeva_heading" varchar DEFAULT 'Why KeRaeva',
  	"job_page_documents_heading" varchar DEFAULT 'What you''ll need',
  	"job_page_documents_intro" varchar DEFAULT 'Documents to upload in the KeRaeva app:',
  	"job_page_skills_heading" varchar DEFAULT 'Skills',
  	"job_page_how_to_apply_heading" varchar DEFAULT 'How to apply',
  	"job_page_how_to_apply_intro" varchar DEFAULT 'Register on the KeRaeva app and complete your pre-verification to get hired faster.',
  	"career_cta_show" boolean DEFAULT true,
  	"career_cta_heading" varchar DEFAULT 'Where Your Career Goals
  Meet Real Opportunity',
  	"career_cta_body" varchar DEFAULT 'Whether you''re an ambitious professional seeking your next role or a healthcare institution building your dream team, we connect you with unparalleled opportunities and talent.',
  	"career_cta_cta_label" varchar DEFAULT 'Get Started Now',
  	"career_cta_cta_link" varchar DEFAULT '#get-started',
  	"career_cta_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_page_careers_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_seo_title" varchar DEFAULT 'Careers | KeRaeva',
  	"version_seo_description" varchar DEFAULT 'Explore careers at KeRaeva and help build the AI-powered healthcare workforce platform for Canada.',
  	"version_page_header_title" varchar DEFAULT 'Careers',
  	"version_page_header_parent_label" varchar DEFAULT 'About KeRaeva',
  	"version_page_header_breadcrumb" varchar DEFAULT 'Careers',
  	"version_no_openings_heading" varchar DEFAULT 'No Open Roles **Right Now**',
  	"version_no_openings_body" varchar DEFAULT 'We don''t have any openings at the moment, but we''re always happy to hear from people who want to improve healthcare staffing. Send us your CV and we''ll be in touch when a role fits.',
  	"version_no_openings_link_label" varchar DEFAULT 'Email support@keraeva.com',
  	"version_no_openings_link_url" varchar DEFAULT 'mailto:support@keraeva.com?subject=Careers%20at%20KeRaeva',
  	"version_job_page_why_join_heading" varchar DEFAULT 'Why join',
  	"version_job_page_why_ke_raeva_heading" varchar DEFAULT 'Why KeRaeva',
  	"version_job_page_documents_heading" varchar DEFAULT 'What you''ll need',
  	"version_job_page_documents_intro" varchar DEFAULT 'Documents to upload in the KeRaeva app:',
  	"version_job_page_skills_heading" varchar DEFAULT 'Skills',
  	"version_job_page_how_to_apply_heading" varchar DEFAULT 'How to apply',
  	"version_job_page_how_to_apply_intro" varchar DEFAULT 'Register on the KeRaeva app and complete your pre-verification to get hired faster.',
  	"version_career_cta_show" boolean DEFAULT true,
  	"version_career_cta_heading" varchar DEFAULT 'Where Your Career Goals
  Meet Real Opportunity',
  	"version_career_cta_body" varchar DEFAULT 'Whether you''re an ambitious professional seeking your next role or a healthcare institution building your dream team, we connect you with unparalleled opportunities and talent.',
  	"version_career_cta_cta_label" varchar DEFAULT 'Get Started Now',
  	"version_career_cta_cta_link" varchar DEFAULT '#get-started',
  	"version_career_cta_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "page_blog" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seo_title" varchar DEFAULT 'Blog | KeRaeva',
  	"seo_description" varchar DEFAULT 'News and insights from KeRaeva on healthcare hiring, staffing and the healthcare workforce in Canada.',
  	"page_header_title" varchar DEFAULT 'Our Blog',
  	"page_header_breadcrumb" varchar DEFAULT 'Our Blog',
  	"no_articles_heading" varchar DEFAULT 'Articles Are **On the Way**',
  	"no_articles_body" varchar DEFAULT 'We''re preparing practical guides on healthcare hiring, urgent staffing and building a career in Canadian healthcare. Subscribe below to hear when the first articles are published.',
  	"latest_show" boolean DEFAULT true,
  	"latest_heading" varchar DEFAULT 'Latest writings',
  	"latest_body" varchar DEFAULT 'The latest news, technologies, and resources from our team.',
  	"latest_button_label" varchar DEFAULT 'View all posts',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_page_blog_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_seo_title" varchar DEFAULT 'Blog | KeRaeva',
  	"version_seo_description" varchar DEFAULT 'News and insights from KeRaeva on healthcare hiring, staffing and the healthcare workforce in Canada.',
  	"version_page_header_title" varchar DEFAULT 'Our Blog',
  	"version_page_header_breadcrumb" varchar DEFAULT 'Our Blog',
  	"version_no_articles_heading" varchar DEFAULT 'Articles Are **On the Way**',
  	"version_no_articles_body" varchar DEFAULT 'We''re preparing practical guides on healthcare hiring, urgent staffing and building a career in Canadian healthcare. Subscribe below to hear when the first articles are published.',
  	"version_latest_show" boolean DEFAULT true,
  	"version_latest_heading" varchar DEFAULT 'Latest writings',
  	"version_latest_body" varchar DEFAULT 'The latest news, technologies, and resources from our team.',
  	"version_latest_button_label" varchar DEFAULT 'View all posts',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "a_3ayql7" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar DEFAULT 'AI',
  	"label" varchar DEFAULT 'Interviews & Scorecards'
  );
  
  CREATE TABLE "a_13ic8l1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" varchar DEFAULT '2021',
  	"title" varchar DEFAULT 'The Question',
  	"description" varchar DEFAULT 'KeRaeva began with a simple question: ''Why should healthcare still struggle with time?'' Founded by healthcare providers, we saw how traditional staffing delayed care.'
  );
  
  CREATE TABLE "a_yt29k1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "e_n6towo" DEFAULT 'Stethoscope',
  	"title" varchar DEFAULT 'Our Mission',
  	"description" varchar DEFAULT 'We aim to reduce staffing shortages and help healthcare organizations and professionals work together faster and more reliably.'
  );
  
  CREATE TABLE "a_msfjlm" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'AI Matching',
  	"description" varchar DEFAULT 'Our platform intelligently connects hospitals with the right, available professionals, moving beyond keywords to find the perfect fit.'
  );
  
  CREATE TABLE "page_about" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seo_title" varchar DEFAULT 'About KeRaeva | AI-Powered Healthcare Workforce Platform',
  	"seo_description" varchar DEFAULT 'Learn about KeRaeva''s mission to make healthcare staffing in Canada faster and more reliable with AI-powered matching and human-centred care.',
  	"page_header_title" varchar DEFAULT 'About KeRaeva',
  	"page_header_breadcrumb" varchar DEFAULT 'About Us',
  	"hero_image_id" integer,
  	"hero_image_alt" varchar DEFAULT '',
  	"hero_card_heading" varchar DEFAULT 'The Future of Healthcare Staffing is Here.',
  	"hero_card_body" varchar DEFAULT 'Welcome to KeRaeva, an AI-powered platform built in Canada to connect hospitals, healthcare facilities and clinics with verified, hire-ready healthcare professionals. We''re rebuilding the foundation of healthcare staffing—making it faster, smarter, and more reliable.',
  	"story_heading" varchar DEFAULT 'Where **AI-Powered** Hiring Meets Human-Centric Care.',
  	"story_body" varchar DEFAULT 'KeRaeva was founded by healthcare and tech veterans to fix staffing friction. Our platform bridges the gap between healthcare organizations needing staff and professionals seeking good-fit jobs by automating verification, matching, and scheduling.',
  	"story_main_stat_icon" "e_9bhl27" DEFAULT 'Users',
  	"story_main_stat_value" varchar DEFAULT '1 Platform',
  	"story_main_stat_label" varchar DEFAULT 'For Hiring & Staffing',
  	"story_main_stat_description" varchar DEFAULT 'Hiring, AI interviews, urgent staffing, shifts and payments for organizations and professionals.',
  	"journey_show" boolean DEFAULT true,
  	"journey_heading" varchar DEFAULT 'Our **Journey**',
  	"purpose_show" boolean DEFAULT true,
  	"purpose_heading" varchar DEFAULT 'Driving Our **Purpose:** The **Mission** at Our Core',
  	"purpose_body" varchar DEFAULT 'To make healthcare staffing faster and more reliable through intelligent, real-time matching, connecting healthcare organizations and professionals on one transparent, AI-driven platform.',
  	"purpose_cta_label" varchar DEFAULT 'Learn More',
  	"purpose_cta_link" varchar DEFAULT '/medical-organizations',
  	"why_ke_raeva_show" boolean DEFAULT true,
  	"why_ke_raeva_heading" varchar DEFAULT 'Why **KeRaeva?**',
  	"team_show" boolean DEFAULT true,
  	"team_heading" varchar DEFAULT 'Meet our Team',
  	"team_body" varchar DEFAULT 'Our philosophy is simple—hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.',
  	"closing_cta_show" boolean DEFAULT true,
  	"closing_cta_heading" varchar DEFAULT 'Find Your Next Hire. Or Your Next Job.',
  	"closing_cta_body" varchar DEFAULT 'Join KeRaeva, the AI-powered healthcare workforce platform built for Canada. Get started in minutes.',
  	"closing_cta_cta_label" varchar DEFAULT 'Get Started Now',
  	"closing_cta_cta_link" varchar DEFAULT '#get-started',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_a_3ayql7_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar DEFAULT 'AI',
  	"label" varchar DEFAULT 'Interviews & Scorecards',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_13ic8l1_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" varchar DEFAULT '2021',
  	"title" varchar DEFAULT 'The Question',
  	"description" varchar DEFAULT 'KeRaeva began with a simple question: ''Why should healthcare still struggle with time?'' Founded by healthcare providers, we saw how traditional staffing delayed care.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_yt29k1_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "e_n6towo" DEFAULT 'Stethoscope',
  	"title" varchar DEFAULT 'Our Mission',
  	"description" varchar DEFAULT 'We aim to reduce staffing shortages and help healthcare organizations and professionals work together faster and more reliably.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_msfjlm_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'AI Matching',
  	"description" varchar DEFAULT 'Our platform intelligently connects hospitals with the right, available professionals, moving beyond keywords to find the perfect fit.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_page_about_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_seo_title" varchar DEFAULT 'About KeRaeva | AI-Powered Healthcare Workforce Platform',
  	"version_seo_description" varchar DEFAULT 'Learn about KeRaeva''s mission to make healthcare staffing in Canada faster and more reliable with AI-powered matching and human-centred care.',
  	"version_page_header_title" varchar DEFAULT 'About KeRaeva',
  	"version_page_header_breadcrumb" varchar DEFAULT 'About Us',
  	"version_hero_image_id" integer,
  	"version_hero_image_alt" varchar DEFAULT '',
  	"version_hero_card_heading" varchar DEFAULT 'The Future of Healthcare Staffing is Here.',
  	"version_hero_card_body" varchar DEFAULT 'Welcome to KeRaeva, an AI-powered platform built in Canada to connect hospitals, healthcare facilities and clinics with verified, hire-ready healthcare professionals. We''re rebuilding the foundation of healthcare staffing—making it faster, smarter, and more reliable.',
  	"version_story_heading" varchar DEFAULT 'Where **AI-Powered** Hiring Meets Human-Centric Care.',
  	"version_story_body" varchar DEFAULT 'KeRaeva was founded by healthcare and tech veterans to fix staffing friction. Our platform bridges the gap between healthcare organizations needing staff and professionals seeking good-fit jobs by automating verification, matching, and scheduling.',
  	"version_story_main_stat_icon" "e_9bhl27" DEFAULT 'Users',
  	"version_story_main_stat_value" varchar DEFAULT '1 Platform',
  	"version_story_main_stat_label" varchar DEFAULT 'For Hiring & Staffing',
  	"version_story_main_stat_description" varchar DEFAULT 'Hiring, AI interviews, urgent staffing, shifts and payments for organizations and professionals.',
  	"version_journey_show" boolean DEFAULT true,
  	"version_journey_heading" varchar DEFAULT 'Our **Journey**',
  	"version_purpose_show" boolean DEFAULT true,
  	"version_purpose_heading" varchar DEFAULT 'Driving Our **Purpose:** The **Mission** at Our Core',
  	"version_purpose_body" varchar DEFAULT 'To make healthcare staffing faster and more reliable through intelligent, real-time matching, connecting healthcare organizations and professionals on one transparent, AI-driven platform.',
  	"version_purpose_cta_label" varchar DEFAULT 'Learn More',
  	"version_purpose_cta_link" varchar DEFAULT '/medical-organizations',
  	"version_why_ke_raeva_show" boolean DEFAULT true,
  	"version_why_ke_raeva_heading" varchar DEFAULT 'Why **KeRaeva?**',
  	"version_team_show" boolean DEFAULT true,
  	"version_team_heading" varchar DEFAULT 'Meet our Team',
  	"version_team_body" varchar DEFAULT 'Our philosophy is simple—hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.',
  	"version_closing_cta_show" boolean DEFAULT true,
  	"version_closing_cta_heading" varchar DEFAULT 'Find Your Next Hire. Or Your Next Job.',
  	"version_closing_cta_body" varchar DEFAULT 'Join KeRaeva, the AI-powered healthcare workforce platform built for Canada. Get started in minutes.',
  	"version_closing_cta_cta_label" varchar DEFAULT 'Get Started Now',
  	"version_closing_cta_cta_link" varchar DEFAULT '#get-started',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "a_1uvow9o" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Profile',
  	"description" varchar DEFAULT 'AI reads your resume and structures it into a complete profile.'
  );
  
  CREATE TABLE "a_13gv4rz" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "e_8vtycm" DEFAULT 'FileText',
  	"title" varchar DEFAULT 'AI Resume Parsing',
  	"description" varchar DEFAULT 'Upload your resume and KeRaeva extracts your details into a structured professional profile.'
  );
  
  CREATE TABLE "a_x0oypb" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "e_1vvzx7q" DEFAULT 'Sparkles',
  	"title" varchar DEFAULT 'AI-Matched Candidates',
  	"description" varchar DEFAULT 'See new AI-matched candidates for your roles, ranked by overall score.'
  );
  
  CREATE TABLE "a_xdbg38" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "a_18n5cmp" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "e_1cfbx60" DEFAULT 'ScanFace',
  	"title" varchar DEFAULT 'Identity Match',
  	"description" varchar DEFAULT 'The person interviewing is matched to the professional''s profile.'
  );
  
  CREATE TABLE "a_1ut9146" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "e_1iegtx9" DEFAULT 'Sparkles',
  	"title" varchar DEFAULT 'Siri, Spotlight & App Actions',
  	"description" varchar DEFAULT 'Ask Siri or use Android App Actions to open urgent jobs, your work, saved jobs or start an AI interview.',
  	"status" varchar DEFAULT 'Rolling out'
  );
  
  CREATE TABLE "a_15dxlp8" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "e_ts7mgj" DEFAULT 'UserCheck',
  	"title" varchar DEFAULT 'AI Assists, People Decide',
  	"description" varchar DEFAULT 'AI organizes and scores information. Hiring decisions are always made by the organization''s team.'
  );
  
  CREATE TABLE "page_keraeva_ai" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seo_title" varchar DEFAULT 'KeRaeva AI | AI Interviews, Matching & Smart Features for Healthcare Hiring',
  	"seo_description" varchar DEFAULT 'See every AI and smart feature in KeRaeva: AI resume parsing, AI voice interviews and scorecards, AI-matched candidates, urgent shift matching, interview integrity checks and smart phone features.',
  	"seo_share_title" varchar DEFAULT 'KeRaeva AI: Intelligence Built Into Every Step',
  	"seo_share_description" varchar DEFAULT 'AI resume parsing, interviews, scorecards, matching, urgent dispatch and smart features for Canadian healthcare hiring.',
  	"hero_heading" varchar DEFAULT 'Intelligence Built Into **Every Step**',
  	"hero_body" varchar DEFAULT 'KeRaeva AI isn''t a chatbot bolted on. It''s built into how profiles are created, how professionals are interviewed and assessed, how roles and urgent shifts are matched, and how hiring teams make decisions.',
  	"hero_primary_cta_label" varchar DEFAULT 'Get the App',
  	"hero_primary_cta_link" varchar DEFAULT '#get-app',
  	"hero_secondary_cta_label" varchar DEFAULT 'Request Demo',
  	"hero_secondary_cta_link" varchar DEFAULT '#request-demo',
  	"hero_image_id" integer,
  	"hero_image_alt" varchar DEFAULT 'An AI-assessed candidate profile with uploaded documents, interview scores and strengths',
  	"journey_show" boolean DEFAULT true,
  	"journey_heading" varchar DEFAULT 'Where AI Works in KeRaeva',
  	"journey_body" varchar DEFAULT 'From the first resume upload to the shift on your calendar, AI helps at every stage of the healthcare workforce lifecycle.',
  	"for_professionals_show" boolean DEFAULT true,
  	"for_professionals_heading" varchar DEFAULT 'AI for Healthcare **Professionals**',
  	"for_professionals_body" varchar DEFAULT 'Build a stronger profile, prove your skills once and get matched with the jobs and urgent shifts that fit your life.',
  	"for_organizations_show" boolean DEFAULT true,
  	"for_organizations_heading" varchar DEFAULT 'AI for Healthcare **Organizations**',
  	"for_organizations_body" varchar DEFAULT 'Review consistent, AI-assessed candidates, spot risks early and fill urgent shifts with professionals who can actually work.',
  	"scorecard_show" boolean DEFAULT true,
  	"scorecard_eyebrow" varchar DEFAULT 'AI Interview Scorecard',
  	"scorecard_heading" varchar DEFAULT 'Everything a Hiring Team Needs, **In One Scorecard**',
  	"scorecard_body" varchar DEFAULT 'Every completed AI interview produces a structured scorecard, so candidates are compared on the same criteria and nothing important is missed.',
  	"scorecard_image_id" integer,
  	"scorecard_image_alt" varchar DEFAULT 'KeRaeva AI interview scorecard with conversational and behavioural round scores',
  	"integrity_show" boolean DEFAULT true,
  	"integrity_heading" varchar DEFAULT 'Interviews You Can **Trust**',
  	"integrity_body" varchar DEFAULT 'AI interviews include integrity checks, so organizations can rely on the results and professionals know the process is fair for everyone.',
  	"smart_features_show" boolean DEFAULT true,
  	"smart_features_heading" varchar DEFAULT 'Smart Features **on Your Phone**',
  	"smart_features_body" varchar DEFAULT 'The KeRaeva app works with your phone''s built-in assistant and system features, shown in Settings as “Siri & Apple Intelligence” on iOS and “AI Assistant & Smart Features” on Android.',
  	"smart_features_footnote" varchar DEFAULT 'Device features depend on your phone and operating system version.',
  	"principles_show" boolean DEFAULT true,
  	"principles_heading" varchar DEFAULT 'How We **Use AI**',
  	"principles_body" varchar DEFAULT 'AI should make healthcare hiring faster and fairer, never take people out of the decision.',
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
  
  CREATE TABLE "_a_1uvow9o_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Profile',
  	"description" varchar DEFAULT 'AI reads your resume and structures it into a complete profile.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_13gv4rz_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "e_8vtycm" DEFAULT 'FileText',
  	"title" varchar DEFAULT 'AI Resume Parsing',
  	"description" varchar DEFAULT 'Upload your resume and KeRaeva extracts your details into a structured professional profile.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_x0oypb_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "e_1vvzx7q" DEFAULT 'Sparkles',
  	"title" varchar DEFAULT 'AI-Matched Candidates',
  	"description" varchar DEFAULT 'See new AI-matched candidates for your roles, ranked by overall score.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_xdbg38_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_18n5cmp_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "e_1cfbx60" DEFAULT 'ScanFace',
  	"title" varchar DEFAULT 'Identity Match',
  	"description" varchar DEFAULT 'The person interviewing is matched to the professional''s profile.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_1ut9146_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "e_1iegtx9" DEFAULT 'Sparkles',
  	"title" varchar DEFAULT 'Siri, Spotlight & App Actions',
  	"description" varchar DEFAULT 'Ask Siri or use Android App Actions to open urgent jobs, your work, saved jobs or start an AI interview.',
  	"status" varchar DEFAULT 'Rolling out',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_a_15dxlp8_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "e_ts7mgj" DEFAULT 'UserCheck',
  	"title" varchar DEFAULT 'AI Assists, People Decide',
  	"description" varchar DEFAULT 'AI organizes and scores information. Hiring decisions are always made by the organization''s team.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_page_keraeva_ai_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_seo_title" varchar DEFAULT 'KeRaeva AI | AI Interviews, Matching & Smart Features for Healthcare Hiring',
  	"version_seo_description" varchar DEFAULT 'See every AI and smart feature in KeRaeva: AI resume parsing, AI voice interviews and scorecards, AI-matched candidates, urgent shift matching, interview integrity checks and smart phone features.',
  	"version_seo_share_title" varchar DEFAULT 'KeRaeva AI: Intelligence Built Into Every Step',
  	"version_seo_share_description" varchar DEFAULT 'AI resume parsing, interviews, scorecards, matching, urgent dispatch and smart features for Canadian healthcare hiring.',
  	"version_hero_heading" varchar DEFAULT 'Intelligence Built Into **Every Step**',
  	"version_hero_body" varchar DEFAULT 'KeRaeva AI isn''t a chatbot bolted on. It''s built into how profiles are created, how professionals are interviewed and assessed, how roles and urgent shifts are matched, and how hiring teams make decisions.',
  	"version_hero_primary_cta_label" varchar DEFAULT 'Get the App',
  	"version_hero_primary_cta_link" varchar DEFAULT '#get-app',
  	"version_hero_secondary_cta_label" varchar DEFAULT 'Request Demo',
  	"version_hero_secondary_cta_link" varchar DEFAULT '#request-demo',
  	"version_hero_image_id" integer,
  	"version_hero_image_alt" varchar DEFAULT 'An AI-assessed candidate profile with uploaded documents, interview scores and strengths',
  	"version_journey_show" boolean DEFAULT true,
  	"version_journey_heading" varchar DEFAULT 'Where AI Works in KeRaeva',
  	"version_journey_body" varchar DEFAULT 'From the first resume upload to the shift on your calendar, AI helps at every stage of the healthcare workforce lifecycle.',
  	"version_for_professionals_show" boolean DEFAULT true,
  	"version_for_professionals_heading" varchar DEFAULT 'AI for Healthcare **Professionals**',
  	"version_for_professionals_body" varchar DEFAULT 'Build a stronger profile, prove your skills once and get matched with the jobs and urgent shifts that fit your life.',
  	"version_for_organizations_show" boolean DEFAULT true,
  	"version_for_organizations_heading" varchar DEFAULT 'AI for Healthcare **Organizations**',
  	"version_for_organizations_body" varchar DEFAULT 'Review consistent, AI-assessed candidates, spot risks early and fill urgent shifts with professionals who can actually work.',
  	"version_scorecard_show" boolean DEFAULT true,
  	"version_scorecard_eyebrow" varchar DEFAULT 'AI Interview Scorecard',
  	"version_scorecard_heading" varchar DEFAULT 'Everything a Hiring Team Needs, **In One Scorecard**',
  	"version_scorecard_body" varchar DEFAULT 'Every completed AI interview produces a structured scorecard, so candidates are compared on the same criteria and nothing important is missed.',
  	"version_scorecard_image_id" integer,
  	"version_scorecard_image_alt" varchar DEFAULT 'KeRaeva AI interview scorecard with conversational and behavioural round scores',
  	"version_integrity_show" boolean DEFAULT true,
  	"version_integrity_heading" varchar DEFAULT 'Interviews You Can **Trust**',
  	"version_integrity_body" varchar DEFAULT 'AI interviews include integrity checks, so organizations can rely on the results and professionals know the process is fair for everyone.',
  	"version_smart_features_show" boolean DEFAULT true,
  	"version_smart_features_heading" varchar DEFAULT 'Smart Features **on Your Phone**',
  	"version_smart_features_body" varchar DEFAULT 'The KeRaeva app works with your phone''s built-in assistant and system features, shown in Settings as “Siri & Apple Intelligence” on iOS and “AI Assistant & Smart Features” on Android.',
  	"version_smart_features_footnote" varchar DEFAULT 'Device features depend on your phone and operating system version.',
  	"version_principles_show" boolean DEFAULT true,
  	"version_principles_heading" varchar DEFAULT 'How We **Use AI**',
  	"version_principles_body" varchar DEFAULT 'AI should make healthcare hiring faster and fairer, never take people out of the decision.',
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
  
  CREATE TABLE "page_our_team" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seo_title" varchar DEFAULT 'Our Team | KeRaeva',
  	"seo_description" varchar DEFAULT 'Meet the team building KeRaeva, the AI-powered healthcare workforce platform for Canada.',
  	"page_header_title" varchar DEFAULT 'Our Team',
  	"page_header_parent_label" varchar DEFAULT 'About KeRaeva',
  	"page_header_parent_link" varchar DEFAULT '/about',
  	"page_header_breadcrumb" varchar DEFAULT 'Our Team',
  	"intro_eyebrow" varchar DEFAULT 'Our Tech minds',
  	"intro_heading" varchar DEFAULT 'The Minds Behind Product Intelligence',
  	"intro_body" varchar DEFAULT 'Meet the innovators blending Tech and AI to redefine recruitment in healthcare.',
  	"intro_cta_label" varchar DEFAULT 'View Open positions',
  	"intro_cta_link" varchar DEFAULT '/careers',
  	"filters_all_label" varchar DEFAULT 'View All',
  	"filters_board_label" varchar DEFAULT 'Board Members',
  	"filters_dev_label" varchar DEFAULT 'Developers & Designers',
  	"filters_marketing_label" varchar DEFAULT 'Marketing & Advertising',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_page_our_team_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_seo_title" varchar DEFAULT 'Our Team | KeRaeva',
  	"version_seo_description" varchar DEFAULT 'Meet the team building KeRaeva, the AI-powered healthcare workforce platform for Canada.',
  	"version_page_header_title" varchar DEFAULT 'Our Team',
  	"version_page_header_parent_label" varchar DEFAULT 'About KeRaeva',
  	"version_page_header_parent_link" varchar DEFAULT '/about',
  	"version_page_header_breadcrumb" varchar DEFAULT 'Our Team',
  	"version_intro_eyebrow" varchar DEFAULT 'Our Tech minds',
  	"version_intro_heading" varchar DEFAULT 'The Minds Behind Product Intelligence',
  	"version_intro_body" varchar DEFAULT 'Meet the innovators blending Tech and AI to redefine recruitment in healthcare.',
  	"version_intro_cta_label" varchar DEFAULT 'View Open positions',
  	"version_intro_cta_link" varchar DEFAULT '/careers',
  	"version_filters_all_label" varchar DEFAULT 'View All',
  	"version_filters_board_label" varchar DEFAULT 'Board Members',
  	"version_filters_dev_label" varchar DEFAULT 'Developers & Designers',
  	"version_filters_marketing_label" varchar DEFAULT 'Marketing & Advertising',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "page_coming_soon" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seo_title" varchar DEFAULT 'Coming Soon | KeRaeva',
  	"seo_description" varchar DEFAULT 'Something exciting is coming to KeRaeva. Stay tuned for updates!',
  	"content_image_id" integer,
  	"content_image_alt" varchar DEFAULT 'Coming Soon',
  	"content_heading" varchar DEFAULT 'Stay Tuned',
  	"content_body" varchar DEFAULT 'Get the latest updates on the KeRaeva platform, exclusive invites, and early access for healthcare professionals and recruiters in Canada.',
  	"content_button_label" varchar DEFAULT 'Notify Me',
  	"content_success_message" varchar DEFAULT 'Thanks! We''ll let you know when it''s ready.',
  	"content_note" varchar DEFAULT 'Sign up and we''ll email you when it launches.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_page_coming_soon_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_seo_title" varchar DEFAULT 'Coming Soon | KeRaeva',
  	"version_seo_description" varchar DEFAULT 'Something exciting is coming to KeRaeva. Stay tuned for updates!',
  	"version_content_image_id" integer,
  	"version_content_image_alt" varchar DEFAULT 'Coming Soon',
  	"version_content_heading" varchar DEFAULT 'Stay Tuned',
  	"version_content_body" varchar DEFAULT 'Get the latest updates on the KeRaeva platform, exclusive invites, and early access for healthcare professionals and recruiters in Canada.',
  	"version_content_button_label" varchar DEFAULT 'Notify Me',
  	"version_content_success_message" varchar DEFAULT 'Thanks! We''ll let you know when it''s ready.',
  	"version_content_note" varchar DEFAULT 'Sign up and we''ll email you when it launches.',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "a_lqv562" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "page_popups" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"get_started_heading" varchar DEFAULT 'How will you use **KeRaeva**?',
  	"get_started_body" varchar DEFAULT 'Choose your path to get started.',
  	"get_started_professional_title" varchar DEFAULT 'I''m a Healthcare Professional',
  	"get_started_professional_description" varchar DEFAULT 'Build a verified profile, find jobs and urgent shifts, and get paid through the KeRaeva app.',
  	"get_started_hiring_title" varchar DEFAULT 'I''m Hiring',
  	"get_started_hiring_description" varchar DEFAULT 'Post jobs, fill urgent shifts and review AI-assessed, verified professionals.',
  	"get_started_demo_prompt" varchar DEFAULT 'Want a walkthrough first?',
  	"get_started_demo_link_label" varchar DEFAULT 'Request a demo',
  	"get_app_heading" varchar DEFAULT '**Download** the App',
  	"get_app_body" varchar DEFAULT 'Create your free profile, complete your AI interview and start finding opportunities near you.',
  	"get_app_back_label" varchar DEFAULT 'Back',
  	"request_demo_heading" varchar DEFAULT 'Request a **Demo**',
  	"request_demo_body" varchar DEFAULT 'See how KeRaeva helps your organization hire, fill urgent shifts and manage your healthcare workforce.',
  	"request_demo_submit_label" varchar DEFAULT 'Request Demo',
  	"request_demo_message_label" varchar DEFAULT 'What would you like to see?',
  	"request_demo_message_placeholder" varchar DEFAULT 'e.g. urgent shift staffing, AI interviews, onboarding our team',
  	"request_demo_success_heading" varchar DEFAULT 'Thanks, we''ll be in touch',
  	"request_demo_success_body" varchar DEFAULT 'Our team will contact you shortly to schedule your KeRaeva demo.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_a_lqv562_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_page_popups_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_get_started_heading" varchar DEFAULT 'How will you use **KeRaeva**?',
  	"version_get_started_body" varchar DEFAULT 'Choose your path to get started.',
  	"version_get_started_professional_title" varchar DEFAULT 'I''m a Healthcare Professional',
  	"version_get_started_professional_description" varchar DEFAULT 'Build a verified profile, find jobs and urgent shifts, and get paid through the KeRaeva app.',
  	"version_get_started_hiring_title" varchar DEFAULT 'I''m Hiring',
  	"version_get_started_hiring_description" varchar DEFAULT 'Post jobs, fill urgent shifts and review AI-assessed, verified professionals.',
  	"version_get_started_demo_prompt" varchar DEFAULT 'Want a walkthrough first?',
  	"version_get_started_demo_link_label" varchar DEFAULT 'Request a demo',
  	"version_get_app_heading" varchar DEFAULT '**Download** the App',
  	"version_get_app_body" varchar DEFAULT 'Create your free profile, complete your AI interview and start finding opportunities near you.',
  	"version_get_app_back_label" varchar DEFAULT 'Back',
  	"version_request_demo_heading" varchar DEFAULT 'Request a **Demo**',
  	"version_request_demo_body" varchar DEFAULT 'See how KeRaeva helps your organization hire, fill urgent shifts and manage your healthcare workforce.',
  	"version_request_demo_submit_label" varchar DEFAULT 'Request Demo',
  	"version_request_demo_message_label" varchar DEFAULT 'What would you like to see?',
  	"version_request_demo_message_placeholder" varchar DEFAULT 'e.g. urgent shift staffing, AI interviews, onboarding our team',
  	"version_request_demo_success_heading" varchar DEFAULT 'Thanks, we''ll be in touch',
  	"version_request_demo_success_body" varchar DEFAULT 'Our team will contact you shortly to schedule your KeRaeva demo.',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "a_qmgu8e" ADD CONSTRAINT "a_qmgu8e_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_professionals"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_monnd4" ADD CONSTRAINT "a_monnd4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_professionals"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_12mnuo9" ADD CONSTRAINT "a_12mnuo9_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_professionals"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_y4norg" ADD CONSTRAINT "a_y4norg_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_professionals"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_1inwi5u" ADD CONSTRAINT "a_1inwi5u_screenshot_id_media_id_fk" FOREIGN KEY ("screenshot_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "a_1inwi5u" ADD CONSTRAINT "a_1inwi5u_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_professionals"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_fmfttz" ADD CONSTRAINT "a_fmfttz_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_professionals"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_1igzcwx" ADD CONSTRAINT "a_1igzcwx_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_professionals"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_1jsk11a" ADD CONSTRAINT "a_1jsk11a_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_professionals"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "page_professionals" ADD CONSTRAINT "page_professionals_hero_app_image_id_media_id_fk" FOREIGN KEY ("hero_app_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "page_professionals" ADD CONSTRAINT "page_professionals_hero_side_image_id_media_id_fk" FOREIGN KEY ("hero_side_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "page_professionals" ADD CONSTRAINT "page_professionals_get_hired_image_id_media_id_fk" FOREIGN KEY ("get_hired_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "page_professionals" ADD CONSTRAINT "page_professionals_verified_image_id_media_id_fk" FOREIGN KEY ("verified_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "page_professionals" ADD CONSTRAINT "page_professionals_next_career_image_id_media_id_fk" FOREIGN KEY ("next_career_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "page_professionals" ADD CONSTRAINT "page_professionals_app_download_screenshot_id_media_id_fk" FOREIGN KEY ("app_download_screenshot_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_a_qmgu8e_v" ADD CONSTRAINT "_a_qmgu8e_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_professionals_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_monnd4_v" ADD CONSTRAINT "_a_monnd4_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_professionals_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_12mnuo9_v" ADD CONSTRAINT "_a_12mnuo9_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_professionals_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_y4norg_v" ADD CONSTRAINT "_a_y4norg_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_professionals_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_1inwi5u_v" ADD CONSTRAINT "_a_1inwi5u_v_screenshot_id_media_id_fk" FOREIGN KEY ("screenshot_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_a_1inwi5u_v" ADD CONSTRAINT "_a_1inwi5u_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_professionals_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_fmfttz_v" ADD CONSTRAINT "_a_fmfttz_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_professionals_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_1igzcwx_v" ADD CONSTRAINT "_a_1igzcwx_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_professionals_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_1jsk11a_v" ADD CONSTRAINT "_a_1jsk11a_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_professionals_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_page_professionals_v" ADD CONSTRAINT "_page_professionals_v_version_hero_app_image_id_media_id_fk" FOREIGN KEY ("version_hero_app_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_page_professionals_v" ADD CONSTRAINT "_page_professionals_v_version_hero_side_image_id_media_id_fk" FOREIGN KEY ("version_hero_side_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_page_professionals_v" ADD CONSTRAINT "_page_professionals_v_version_get_hired_image_id_media_id_fk" FOREIGN KEY ("version_get_hired_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_page_professionals_v" ADD CONSTRAINT "_page_professionals_v_version_verified_image_id_media_id_fk" FOREIGN KEY ("version_verified_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_page_professionals_v" ADD CONSTRAINT "_page_professionals_v_version_next_career_image_id_media_id_fk" FOREIGN KEY ("version_next_career_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_page_professionals_v" ADD CONSTRAINT "_page_professionals_v_version_app_download_screenshot_id_media_id_fk" FOREIGN KEY ("version_app_download_screenshot_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "a_djauwz" ADD CONSTRAINT "a_djauwz_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_organizations"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_zpkp8o" ADD CONSTRAINT "a_zpkp8o_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_organizations"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_16aa8qx" ADD CONSTRAINT "a_16aa8qx_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_organizations"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_1xluygq" ADD CONSTRAINT "a_1xluygq_screenshot_id_media_id_fk" FOREIGN KEY ("screenshot_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "a_1xluygq" ADD CONSTRAINT "a_1xluygq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_organizations"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_lyk3to" ADD CONSTRAINT "a_lyk3to_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_organizations"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_1m4lqzl" ADD CONSTRAINT "a_1m4lqzl_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_organizations"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "page_organizations" ADD CONSTRAINT "page_organizations_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "page_organizations" ADD CONSTRAINT "page_organizations_hiring_image_id_media_id_fk" FOREIGN KEY ("hiring_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "page_organizations" ADD CONSTRAINT "page_organizations_confidence_image_id_media_id_fk" FOREIGN KEY ("confidence_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "page_organizations" ADD CONSTRAINT "page_organizations_start_hiring_image_id_media_id_fk" FOREIGN KEY ("start_hiring_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_a_djauwz_v" ADD CONSTRAINT "_a_djauwz_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_organizations_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_zpkp8o_v" ADD CONSTRAINT "_a_zpkp8o_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_organizations_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_16aa8qx_v" ADD CONSTRAINT "_a_16aa8qx_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_organizations_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_1xluygq_v" ADD CONSTRAINT "_a_1xluygq_v_screenshot_id_media_id_fk" FOREIGN KEY ("screenshot_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_a_1xluygq_v" ADD CONSTRAINT "_a_1xluygq_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_organizations_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_lyk3to_v" ADD CONSTRAINT "_a_lyk3to_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_organizations_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_1m4lqzl_v" ADD CONSTRAINT "_a_1m4lqzl_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_organizations_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_page_organizations_v" ADD CONSTRAINT "_page_organizations_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_page_organizations_v" ADD CONSTRAINT "_page_organizations_v_version_hiring_image_id_media_id_fk" FOREIGN KEY ("version_hiring_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_page_organizations_v" ADD CONSTRAINT "_page_organizations_v_version_confidence_image_id_media_id_fk" FOREIGN KEY ("version_confidence_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_page_organizations_v" ADD CONSTRAINT "_page_organizations_v_version_start_hiring_image_id_media_id_fk" FOREIGN KEY ("version_start_hiring_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "a_106c0bo" ADD CONSTRAINT "a_106c0bo_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."a_1xy6obb"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_1xy6obb" ADD CONSTRAINT "a_1xy6obb_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_106c0bo_v" ADD CONSTRAINT "_a_106c0bo_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_a_1xy6obb_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_1xy6obb_v" ADD CONSTRAINT "_a_1xy6obb_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_pricing_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "page_careers" ADD CONSTRAINT "page_careers_career_cta_image_id_media_id_fk" FOREIGN KEY ("career_cta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_page_careers_v" ADD CONSTRAINT "_page_careers_v_version_career_cta_image_id_media_id_fk" FOREIGN KEY ("version_career_cta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "a_3ayql7" ADD CONSTRAINT "a_3ayql7_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_13ic8l1" ADD CONSTRAINT "a_13ic8l1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_yt29k1" ADD CONSTRAINT "a_yt29k1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_msfjlm" ADD CONSTRAINT "a_msfjlm_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "page_about" ADD CONSTRAINT "page_about_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_a_3ayql7_v" ADD CONSTRAINT "_a_3ayql7_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_about_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_13ic8l1_v" ADD CONSTRAINT "_a_13ic8l1_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_about_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_yt29k1_v" ADD CONSTRAINT "_a_yt29k1_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_about_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_msfjlm_v" ADD CONSTRAINT "_a_msfjlm_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_about_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_page_about_v" ADD CONSTRAINT "_page_about_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "a_1uvow9o" ADD CONSTRAINT "a_1uvow9o_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_keraeva_ai"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_13gv4rz" ADD CONSTRAINT "a_13gv4rz_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_keraeva_ai"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_x0oypb" ADD CONSTRAINT "a_x0oypb_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_keraeva_ai"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_xdbg38" ADD CONSTRAINT "a_xdbg38_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_keraeva_ai"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_18n5cmp" ADD CONSTRAINT "a_18n5cmp_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_keraeva_ai"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_1ut9146" ADD CONSTRAINT "a_1ut9146_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_keraeva_ai"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "a_15dxlp8" ADD CONSTRAINT "a_15dxlp8_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_keraeva_ai"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "page_keraeva_ai" ADD CONSTRAINT "page_keraeva_ai_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "page_keraeva_ai" ADD CONSTRAINT "page_keraeva_ai_scorecard_image_id_media_id_fk" FOREIGN KEY ("scorecard_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_a_1uvow9o_v" ADD CONSTRAINT "_a_1uvow9o_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_keraeva_ai_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_13gv4rz_v" ADD CONSTRAINT "_a_13gv4rz_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_keraeva_ai_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_x0oypb_v" ADD CONSTRAINT "_a_x0oypb_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_keraeva_ai_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_xdbg38_v" ADD CONSTRAINT "_a_xdbg38_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_keraeva_ai_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_18n5cmp_v" ADD CONSTRAINT "_a_18n5cmp_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_keraeva_ai_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_1ut9146_v" ADD CONSTRAINT "_a_1ut9146_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_keraeva_ai_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_15dxlp8_v" ADD CONSTRAINT "_a_15dxlp8_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_keraeva_ai_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_page_keraeva_ai_v" ADD CONSTRAINT "_page_keraeva_ai_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_page_keraeva_ai_v" ADD CONSTRAINT "_page_keraeva_ai_v_version_scorecard_image_id_media_id_fk" FOREIGN KEY ("version_scorecard_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "page_coming_soon" ADD CONSTRAINT "page_coming_soon_content_image_id_media_id_fk" FOREIGN KEY ("content_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_page_coming_soon_v" ADD CONSTRAINT "_page_coming_soon_v_version_content_image_id_media_id_fk" FOREIGN KEY ("version_content_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "a_lqv562" ADD CONSTRAINT "a_lqv562_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_popups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_a_lqv562_v" ADD CONSTRAINT "_a_lqv562_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_popups_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "a_qmgu8e_order_idx" ON "a_qmgu8e" USING btree ("_order");
  CREATE INDEX "a_qmgu8e_parent_id_idx" ON "a_qmgu8e" USING btree ("_parent_id");
  CREATE INDEX "a_monnd4_order_idx" ON "a_monnd4" USING btree ("_order");
  CREATE INDEX "a_monnd4_parent_id_idx" ON "a_monnd4" USING btree ("_parent_id");
  CREATE INDEX "a_12mnuo9_order_idx" ON "a_12mnuo9" USING btree ("_order");
  CREATE INDEX "a_12mnuo9_parent_id_idx" ON "a_12mnuo9" USING btree ("_parent_id");
  CREATE INDEX "a_y4norg_order_idx" ON "a_y4norg" USING btree ("_order");
  CREATE INDEX "a_y4norg_parent_id_idx" ON "a_y4norg" USING btree ("_parent_id");
  CREATE INDEX "a_1inwi5u_order_idx" ON "a_1inwi5u" USING btree ("_order");
  CREATE INDEX "a_1inwi5u_parent_id_idx" ON "a_1inwi5u" USING btree ("_parent_id");
  CREATE INDEX "a_1inwi5u_screenshot_idx" ON "a_1inwi5u" USING btree ("screenshot_id");
  CREATE INDEX "a_fmfttz_order_idx" ON "a_fmfttz" USING btree ("_order");
  CREATE INDEX "a_fmfttz_parent_id_idx" ON "a_fmfttz" USING btree ("_parent_id");
  CREATE INDEX "a_1igzcwx_order_idx" ON "a_1igzcwx" USING btree ("_order");
  CREATE INDEX "a_1igzcwx_parent_id_idx" ON "a_1igzcwx" USING btree ("_parent_id");
  CREATE INDEX "a_1jsk11a_order_idx" ON "a_1jsk11a" USING btree ("_order");
  CREATE INDEX "a_1jsk11a_parent_id_idx" ON "a_1jsk11a" USING btree ("_parent_id");
  CREATE INDEX "page_professionals_hero_hero_app_image_idx" ON "page_professionals" USING btree ("hero_app_image_id");
  CREATE INDEX "page_professionals_hero_hero_side_image_idx" ON "page_professionals" USING btree ("hero_side_image_id");
  CREATE INDEX "page_professionals_get_hired_get_hired_image_idx" ON "page_professionals" USING btree ("get_hired_image_id");
  CREATE INDEX "page_professionals_verified_verified_image_idx" ON "page_professionals" USING btree ("verified_image_id");
  CREATE INDEX "page_professionals_next_career_next_career_image_idx" ON "page_professionals" USING btree ("next_career_image_id");
  CREATE INDEX "page_professionals_app_download_app_download_screenshot_idx" ON "page_professionals" USING btree ("app_download_screenshot_id");
  CREATE INDEX "_a_qmgu8e_v_order_idx" ON "_a_qmgu8e_v" USING btree ("_order");
  CREATE INDEX "_a_qmgu8e_v_parent_id_idx" ON "_a_qmgu8e_v" USING btree ("_parent_id");
  CREATE INDEX "_a_monnd4_v_order_idx" ON "_a_monnd4_v" USING btree ("_order");
  CREATE INDEX "_a_monnd4_v_parent_id_idx" ON "_a_monnd4_v" USING btree ("_parent_id");
  CREATE INDEX "_a_12mnuo9_v_order_idx" ON "_a_12mnuo9_v" USING btree ("_order");
  CREATE INDEX "_a_12mnuo9_v_parent_id_idx" ON "_a_12mnuo9_v" USING btree ("_parent_id");
  CREATE INDEX "_a_y4norg_v_order_idx" ON "_a_y4norg_v" USING btree ("_order");
  CREATE INDEX "_a_y4norg_v_parent_id_idx" ON "_a_y4norg_v" USING btree ("_parent_id");
  CREATE INDEX "_a_1inwi5u_v_order_idx" ON "_a_1inwi5u_v" USING btree ("_order");
  CREATE INDEX "_a_1inwi5u_v_parent_id_idx" ON "_a_1inwi5u_v" USING btree ("_parent_id");
  CREATE INDEX "_a_1inwi5u_v_screenshot_idx" ON "_a_1inwi5u_v" USING btree ("screenshot_id");
  CREATE INDEX "_a_fmfttz_v_order_idx" ON "_a_fmfttz_v" USING btree ("_order");
  CREATE INDEX "_a_fmfttz_v_parent_id_idx" ON "_a_fmfttz_v" USING btree ("_parent_id");
  CREATE INDEX "_a_1igzcwx_v_order_idx" ON "_a_1igzcwx_v" USING btree ("_order");
  CREATE INDEX "_a_1igzcwx_v_parent_id_idx" ON "_a_1igzcwx_v" USING btree ("_parent_id");
  CREATE INDEX "_a_1jsk11a_v_order_idx" ON "_a_1jsk11a_v" USING btree ("_order");
  CREATE INDEX "_a_1jsk11a_v_parent_id_idx" ON "_a_1jsk11a_v" USING btree ("_parent_id");
  CREATE INDEX "_page_professionals_v_version_hero_version_hero_app_imag_idx" ON "_page_professionals_v" USING btree ("version_hero_app_image_id");
  CREATE INDEX "_page_professionals_v_version_hero_version_hero_side_ima_idx" ON "_page_professionals_v" USING btree ("version_hero_side_image_id");
  CREATE INDEX "_page_professionals_v_version_get_hired_version_get_hire_idx" ON "_page_professionals_v" USING btree ("version_get_hired_image_id");
  CREATE INDEX "_page_professionals_v_version_verified_version_verified__idx" ON "_page_professionals_v" USING btree ("version_verified_image_id");
  CREATE INDEX "_page_professionals_v_version_next_career_version_next_c_idx" ON "_page_professionals_v" USING btree ("version_next_career_image_id");
  CREATE INDEX "_page_professionals_v_version_app_download_version_app_d_idx" ON "_page_professionals_v" USING btree ("version_app_download_screenshot_id");
  CREATE INDEX "_page_professionals_v_created_at_idx" ON "_page_professionals_v" USING btree ("created_at");
  CREATE INDEX "_page_professionals_v_updated_at_idx" ON "_page_professionals_v" USING btree ("updated_at");
  CREATE INDEX "a_djauwz_order_idx" ON "a_djauwz" USING btree ("_order");
  CREATE INDEX "a_djauwz_parent_id_idx" ON "a_djauwz" USING btree ("_parent_id");
  CREATE INDEX "a_zpkp8o_order_idx" ON "a_zpkp8o" USING btree ("_order");
  CREATE INDEX "a_zpkp8o_parent_id_idx" ON "a_zpkp8o" USING btree ("_parent_id");
  CREATE INDEX "a_16aa8qx_order_idx" ON "a_16aa8qx" USING btree ("_order");
  CREATE INDEX "a_16aa8qx_parent_id_idx" ON "a_16aa8qx" USING btree ("_parent_id");
  CREATE INDEX "a_1xluygq_order_idx" ON "a_1xluygq" USING btree ("_order");
  CREATE INDEX "a_1xluygq_parent_id_idx" ON "a_1xluygq" USING btree ("_parent_id");
  CREATE INDEX "a_1xluygq_screenshot_idx" ON "a_1xluygq" USING btree ("screenshot_id");
  CREATE INDEX "a_lyk3to_order_idx" ON "a_lyk3to" USING btree ("_order");
  CREATE INDEX "a_lyk3to_parent_id_idx" ON "a_lyk3to" USING btree ("_parent_id");
  CREATE INDEX "a_1m4lqzl_order_idx" ON "a_1m4lqzl" USING btree ("_order");
  CREATE INDEX "a_1m4lqzl_parent_id_idx" ON "a_1m4lqzl" USING btree ("_parent_id");
  CREATE INDEX "page_organizations_hero_hero_image_idx" ON "page_organizations" USING btree ("hero_image_id");
  CREATE INDEX "page_organizations_hiring_hiring_image_idx" ON "page_organizations" USING btree ("hiring_image_id");
  CREATE INDEX "page_organizations_confidence_confidence_image_idx" ON "page_organizations" USING btree ("confidence_image_id");
  CREATE INDEX "page_organizations_start_hiring_start_hiring_image_idx" ON "page_organizations" USING btree ("start_hiring_image_id");
  CREATE INDEX "_a_djauwz_v_order_idx" ON "_a_djauwz_v" USING btree ("_order");
  CREATE INDEX "_a_djauwz_v_parent_id_idx" ON "_a_djauwz_v" USING btree ("_parent_id");
  CREATE INDEX "_a_zpkp8o_v_order_idx" ON "_a_zpkp8o_v" USING btree ("_order");
  CREATE INDEX "_a_zpkp8o_v_parent_id_idx" ON "_a_zpkp8o_v" USING btree ("_parent_id");
  CREATE INDEX "_a_16aa8qx_v_order_idx" ON "_a_16aa8qx_v" USING btree ("_order");
  CREATE INDEX "_a_16aa8qx_v_parent_id_idx" ON "_a_16aa8qx_v" USING btree ("_parent_id");
  CREATE INDEX "_a_1xluygq_v_order_idx" ON "_a_1xluygq_v" USING btree ("_order");
  CREATE INDEX "_a_1xluygq_v_parent_id_idx" ON "_a_1xluygq_v" USING btree ("_parent_id");
  CREATE INDEX "_a_1xluygq_v_screenshot_idx" ON "_a_1xluygq_v" USING btree ("screenshot_id");
  CREATE INDEX "_a_lyk3to_v_order_idx" ON "_a_lyk3to_v" USING btree ("_order");
  CREATE INDEX "_a_lyk3to_v_parent_id_idx" ON "_a_lyk3to_v" USING btree ("_parent_id");
  CREATE INDEX "_a_1m4lqzl_v_order_idx" ON "_a_1m4lqzl_v" USING btree ("_order");
  CREATE INDEX "_a_1m4lqzl_v_parent_id_idx" ON "_a_1m4lqzl_v" USING btree ("_parent_id");
  CREATE INDEX "_page_organizations_v_version_hero_version_hero_image_idx" ON "_page_organizations_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_page_organizations_v_version_hiring_version_hiring_imag_idx" ON "_page_organizations_v" USING btree ("version_hiring_image_id");
  CREATE INDEX "_page_organizations_v_version_confidence_version_confide_idx" ON "_page_organizations_v" USING btree ("version_confidence_image_id");
  CREATE INDEX "_page_organizations_v_version_start_hiring_version_start_idx" ON "_page_organizations_v" USING btree ("version_start_hiring_image_id");
  CREATE INDEX "_page_organizations_v_created_at_idx" ON "_page_organizations_v" USING btree ("created_at");
  CREATE INDEX "_page_organizations_v_updated_at_idx" ON "_page_organizations_v" USING btree ("updated_at");
  CREATE INDEX "_page_contact_v_created_at_idx" ON "_page_contact_v" USING btree ("created_at");
  CREATE INDEX "_page_contact_v_updated_at_idx" ON "_page_contact_v" USING btree ("updated_at");
  CREATE INDEX "_page_support_v_created_at_idx" ON "_page_support_v" USING btree ("created_at");
  CREATE INDEX "_page_support_v_updated_at_idx" ON "_page_support_v" USING btree ("updated_at");
  CREATE INDEX "a_106c0bo_order_idx" ON "a_106c0bo" USING btree ("_order");
  CREATE INDEX "a_106c0bo_parent_id_idx" ON "a_106c0bo" USING btree ("_parent_id");
  CREATE INDEX "a_1xy6obb_order_idx" ON "a_1xy6obb" USING btree ("_order");
  CREATE INDEX "a_1xy6obb_parent_id_idx" ON "a_1xy6obb" USING btree ("_parent_id");
  CREATE INDEX "_a_106c0bo_v_order_idx" ON "_a_106c0bo_v" USING btree ("_order");
  CREATE INDEX "_a_106c0bo_v_parent_id_idx" ON "_a_106c0bo_v" USING btree ("_parent_id");
  CREATE INDEX "_a_1xy6obb_v_order_idx" ON "_a_1xy6obb_v" USING btree ("_order");
  CREATE INDEX "_a_1xy6obb_v_parent_id_idx" ON "_a_1xy6obb_v" USING btree ("_parent_id");
  CREATE INDEX "_page_pricing_v_created_at_idx" ON "_page_pricing_v" USING btree ("created_at");
  CREATE INDEX "_page_pricing_v_updated_at_idx" ON "_page_pricing_v" USING btree ("updated_at");
  CREATE INDEX "page_careers_career_cta_career_cta_image_idx" ON "page_careers" USING btree ("career_cta_image_id");
  CREATE INDEX "_page_careers_v_version_career_cta_version_career_cta_im_idx" ON "_page_careers_v" USING btree ("version_career_cta_image_id");
  CREATE INDEX "_page_careers_v_created_at_idx" ON "_page_careers_v" USING btree ("created_at");
  CREATE INDEX "_page_careers_v_updated_at_idx" ON "_page_careers_v" USING btree ("updated_at");
  CREATE INDEX "_page_blog_v_created_at_idx" ON "_page_blog_v" USING btree ("created_at");
  CREATE INDEX "_page_blog_v_updated_at_idx" ON "_page_blog_v" USING btree ("updated_at");
  CREATE INDEX "a_3ayql7_order_idx" ON "a_3ayql7" USING btree ("_order");
  CREATE INDEX "a_3ayql7_parent_id_idx" ON "a_3ayql7" USING btree ("_parent_id");
  CREATE INDEX "a_13ic8l1_order_idx" ON "a_13ic8l1" USING btree ("_order");
  CREATE INDEX "a_13ic8l1_parent_id_idx" ON "a_13ic8l1" USING btree ("_parent_id");
  CREATE INDEX "a_yt29k1_order_idx" ON "a_yt29k1" USING btree ("_order");
  CREATE INDEX "a_yt29k1_parent_id_idx" ON "a_yt29k1" USING btree ("_parent_id");
  CREATE INDEX "a_msfjlm_order_idx" ON "a_msfjlm" USING btree ("_order");
  CREATE INDEX "a_msfjlm_parent_id_idx" ON "a_msfjlm" USING btree ("_parent_id");
  CREATE INDEX "page_about_hero_hero_image_idx" ON "page_about" USING btree ("hero_image_id");
  CREATE INDEX "_a_3ayql7_v_order_idx" ON "_a_3ayql7_v" USING btree ("_order");
  CREATE INDEX "_a_3ayql7_v_parent_id_idx" ON "_a_3ayql7_v" USING btree ("_parent_id");
  CREATE INDEX "_a_13ic8l1_v_order_idx" ON "_a_13ic8l1_v" USING btree ("_order");
  CREATE INDEX "_a_13ic8l1_v_parent_id_idx" ON "_a_13ic8l1_v" USING btree ("_parent_id");
  CREATE INDEX "_a_yt29k1_v_order_idx" ON "_a_yt29k1_v" USING btree ("_order");
  CREATE INDEX "_a_yt29k1_v_parent_id_idx" ON "_a_yt29k1_v" USING btree ("_parent_id");
  CREATE INDEX "_a_msfjlm_v_order_idx" ON "_a_msfjlm_v" USING btree ("_order");
  CREATE INDEX "_a_msfjlm_v_parent_id_idx" ON "_a_msfjlm_v" USING btree ("_parent_id");
  CREATE INDEX "_page_about_v_version_hero_version_hero_image_idx" ON "_page_about_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_page_about_v_created_at_idx" ON "_page_about_v" USING btree ("created_at");
  CREATE INDEX "_page_about_v_updated_at_idx" ON "_page_about_v" USING btree ("updated_at");
  CREATE INDEX "a_1uvow9o_order_idx" ON "a_1uvow9o" USING btree ("_order");
  CREATE INDEX "a_1uvow9o_parent_id_idx" ON "a_1uvow9o" USING btree ("_parent_id");
  CREATE INDEX "a_13gv4rz_order_idx" ON "a_13gv4rz" USING btree ("_order");
  CREATE INDEX "a_13gv4rz_parent_id_idx" ON "a_13gv4rz" USING btree ("_parent_id");
  CREATE INDEX "a_x0oypb_order_idx" ON "a_x0oypb" USING btree ("_order");
  CREATE INDEX "a_x0oypb_parent_id_idx" ON "a_x0oypb" USING btree ("_parent_id");
  CREATE INDEX "a_xdbg38_order_idx" ON "a_xdbg38" USING btree ("_order");
  CREATE INDEX "a_xdbg38_parent_id_idx" ON "a_xdbg38" USING btree ("_parent_id");
  CREATE INDEX "a_18n5cmp_order_idx" ON "a_18n5cmp" USING btree ("_order");
  CREATE INDEX "a_18n5cmp_parent_id_idx" ON "a_18n5cmp" USING btree ("_parent_id");
  CREATE INDEX "a_1ut9146_order_idx" ON "a_1ut9146" USING btree ("_order");
  CREATE INDEX "a_1ut9146_parent_id_idx" ON "a_1ut9146" USING btree ("_parent_id");
  CREATE INDEX "a_15dxlp8_order_idx" ON "a_15dxlp8" USING btree ("_order");
  CREATE INDEX "a_15dxlp8_parent_id_idx" ON "a_15dxlp8" USING btree ("_parent_id");
  CREATE INDEX "page_keraeva_ai_hero_hero_image_idx" ON "page_keraeva_ai" USING btree ("hero_image_id");
  CREATE INDEX "page_keraeva_ai_scorecard_scorecard_image_idx" ON "page_keraeva_ai" USING btree ("scorecard_image_id");
  CREATE INDEX "_a_1uvow9o_v_order_idx" ON "_a_1uvow9o_v" USING btree ("_order");
  CREATE INDEX "_a_1uvow9o_v_parent_id_idx" ON "_a_1uvow9o_v" USING btree ("_parent_id");
  CREATE INDEX "_a_13gv4rz_v_order_idx" ON "_a_13gv4rz_v" USING btree ("_order");
  CREATE INDEX "_a_13gv4rz_v_parent_id_idx" ON "_a_13gv4rz_v" USING btree ("_parent_id");
  CREATE INDEX "_a_x0oypb_v_order_idx" ON "_a_x0oypb_v" USING btree ("_order");
  CREATE INDEX "_a_x0oypb_v_parent_id_idx" ON "_a_x0oypb_v" USING btree ("_parent_id");
  CREATE INDEX "_a_xdbg38_v_order_idx" ON "_a_xdbg38_v" USING btree ("_order");
  CREATE INDEX "_a_xdbg38_v_parent_id_idx" ON "_a_xdbg38_v" USING btree ("_parent_id");
  CREATE INDEX "_a_18n5cmp_v_order_idx" ON "_a_18n5cmp_v" USING btree ("_order");
  CREATE INDEX "_a_18n5cmp_v_parent_id_idx" ON "_a_18n5cmp_v" USING btree ("_parent_id");
  CREATE INDEX "_a_1ut9146_v_order_idx" ON "_a_1ut9146_v" USING btree ("_order");
  CREATE INDEX "_a_1ut9146_v_parent_id_idx" ON "_a_1ut9146_v" USING btree ("_parent_id");
  CREATE INDEX "_a_15dxlp8_v_order_idx" ON "_a_15dxlp8_v" USING btree ("_order");
  CREATE INDEX "_a_15dxlp8_v_parent_id_idx" ON "_a_15dxlp8_v" USING btree ("_parent_id");
  CREATE INDEX "_page_keraeva_ai_v_version_hero_version_hero_image_idx" ON "_page_keraeva_ai_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_page_keraeva_ai_v_version_scorecard_version_scorecard_i_idx" ON "_page_keraeva_ai_v" USING btree ("version_scorecard_image_id");
  CREATE INDEX "_page_keraeva_ai_v_created_at_idx" ON "_page_keraeva_ai_v" USING btree ("created_at");
  CREATE INDEX "_page_keraeva_ai_v_updated_at_idx" ON "_page_keraeva_ai_v" USING btree ("updated_at");
  CREATE INDEX "_page_our_team_v_created_at_idx" ON "_page_our_team_v" USING btree ("created_at");
  CREATE INDEX "_page_our_team_v_updated_at_idx" ON "_page_our_team_v" USING btree ("updated_at");
  CREATE INDEX "page_coming_soon_content_content_image_idx" ON "page_coming_soon" USING btree ("content_image_id");
  CREATE INDEX "_page_coming_soon_v_version_content_version_content_imag_idx" ON "_page_coming_soon_v" USING btree ("version_content_image_id");
  CREATE INDEX "_page_coming_soon_v_created_at_idx" ON "_page_coming_soon_v" USING btree ("created_at");
  CREATE INDEX "_page_coming_soon_v_updated_at_idx" ON "_page_coming_soon_v" USING btree ("updated_at");
  CREATE INDEX "a_lqv562_order_idx" ON "a_lqv562" USING btree ("_order");
  CREATE INDEX "a_lqv562_parent_id_idx" ON "a_lqv562" USING btree ("_parent_id");
  CREATE INDEX "_a_lqv562_v_order_idx" ON "_a_lqv562_v" USING btree ("_order");
  CREATE INDEX "_a_lqv562_v_parent_id_idx" ON "_a_lqv562_v" USING btree ("_parent_id");
  CREATE INDEX "_page_popups_v_created_at_idx" ON "_page_popups_v" USING btree ("created_at");
  CREATE INDEX "_page_popups_v_updated_at_idx" ON "_page_popups_v" USING btree ("updated_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "a_qmgu8e" CASCADE;
  DROP TABLE "a_monnd4" CASCADE;
  DROP TABLE "a_12mnuo9" CASCADE;
  DROP TABLE "a_y4norg" CASCADE;
  DROP TABLE "a_1inwi5u" CASCADE;
  DROP TABLE "a_fmfttz" CASCADE;
  DROP TABLE "a_1igzcwx" CASCADE;
  DROP TABLE "a_1jsk11a" CASCADE;
  DROP TABLE "page_professionals" CASCADE;
  DROP TABLE "_a_qmgu8e_v" CASCADE;
  DROP TABLE "_a_monnd4_v" CASCADE;
  DROP TABLE "_a_12mnuo9_v" CASCADE;
  DROP TABLE "_a_y4norg_v" CASCADE;
  DROP TABLE "_a_1inwi5u_v" CASCADE;
  DROP TABLE "_a_fmfttz_v" CASCADE;
  DROP TABLE "_a_1igzcwx_v" CASCADE;
  DROP TABLE "_a_1jsk11a_v" CASCADE;
  DROP TABLE "_page_professionals_v" CASCADE;
  DROP TABLE "a_djauwz" CASCADE;
  DROP TABLE "a_zpkp8o" CASCADE;
  DROP TABLE "a_16aa8qx" CASCADE;
  DROP TABLE "a_1xluygq" CASCADE;
  DROP TABLE "a_lyk3to" CASCADE;
  DROP TABLE "a_1m4lqzl" CASCADE;
  DROP TABLE "page_organizations" CASCADE;
  DROP TABLE "_a_djauwz_v" CASCADE;
  DROP TABLE "_a_zpkp8o_v" CASCADE;
  DROP TABLE "_a_16aa8qx_v" CASCADE;
  DROP TABLE "_a_1xluygq_v" CASCADE;
  DROP TABLE "_a_lyk3to_v" CASCADE;
  DROP TABLE "_a_1m4lqzl_v" CASCADE;
  DROP TABLE "_page_organizations_v" CASCADE;
  DROP TABLE "page_contact" CASCADE;
  DROP TABLE "_page_contact_v" CASCADE;
  DROP TABLE "page_support" CASCADE;
  DROP TABLE "_page_support_v" CASCADE;
  DROP TABLE "a_106c0bo" CASCADE;
  DROP TABLE "a_1xy6obb" CASCADE;
  DROP TABLE "page_pricing" CASCADE;
  DROP TABLE "_a_106c0bo_v" CASCADE;
  DROP TABLE "_a_1xy6obb_v" CASCADE;
  DROP TABLE "_page_pricing_v" CASCADE;
  DROP TABLE "page_careers" CASCADE;
  DROP TABLE "_page_careers_v" CASCADE;
  DROP TABLE "page_blog" CASCADE;
  DROP TABLE "_page_blog_v" CASCADE;
  DROP TABLE "a_3ayql7" CASCADE;
  DROP TABLE "a_13ic8l1" CASCADE;
  DROP TABLE "a_yt29k1" CASCADE;
  DROP TABLE "a_msfjlm" CASCADE;
  DROP TABLE "page_about" CASCADE;
  DROP TABLE "_a_3ayql7_v" CASCADE;
  DROP TABLE "_a_13ic8l1_v" CASCADE;
  DROP TABLE "_a_yt29k1_v" CASCADE;
  DROP TABLE "_a_msfjlm_v" CASCADE;
  DROP TABLE "_page_about_v" CASCADE;
  DROP TABLE "a_1uvow9o" CASCADE;
  DROP TABLE "a_13gv4rz" CASCADE;
  DROP TABLE "a_x0oypb" CASCADE;
  DROP TABLE "a_xdbg38" CASCADE;
  DROP TABLE "a_18n5cmp" CASCADE;
  DROP TABLE "a_1ut9146" CASCADE;
  DROP TABLE "a_15dxlp8" CASCADE;
  DROP TABLE "page_keraeva_ai" CASCADE;
  DROP TABLE "_a_1uvow9o_v" CASCADE;
  DROP TABLE "_a_13gv4rz_v" CASCADE;
  DROP TABLE "_a_x0oypb_v" CASCADE;
  DROP TABLE "_a_xdbg38_v" CASCADE;
  DROP TABLE "_a_18n5cmp_v" CASCADE;
  DROP TABLE "_a_1ut9146_v" CASCADE;
  DROP TABLE "_a_15dxlp8_v" CASCADE;
  DROP TABLE "_page_keraeva_ai_v" CASCADE;
  DROP TABLE "page_our_team" CASCADE;
  DROP TABLE "_page_our_team_v" CASCADE;
  DROP TABLE "page_coming_soon" CASCADE;
  DROP TABLE "_page_coming_soon_v" CASCADE;
  DROP TABLE "a_lqv562" CASCADE;
  DROP TABLE "page_popups" CASCADE;
  DROP TABLE "_a_lqv562_v" CASCADE;
  DROP TABLE "_page_popups_v" CASCADE;
  ALTER TABLE "pages_blocks_feature_cards_cards" ALTER COLUMN "icon" SET DATA TYPE text;
  ALTER TABLE "pages_blocks_feature_cards_cards" ALTER COLUMN "icon" SET DEFAULT 'CheckCircle2'::text;
  DROP TYPE "public"."enum_pages_blocks_feature_cards_cards_icon";
  CREATE TYPE "public"."enum_pages_blocks_feature_cards_cards_icon" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'FileCheck2', 'FileText', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scan', 'Search', 'Send', 'Shield', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'Timer', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  ALTER TABLE "pages_blocks_feature_cards_cards" ALTER COLUMN "icon" SET DEFAULT 'CheckCircle2'::"public"."enum_pages_blocks_feature_cards_cards_icon";
  ALTER TABLE "pages_blocks_feature_cards_cards" ALTER COLUMN "icon" SET DATA TYPE "public"."enum_pages_blocks_feature_cards_cards_icon" USING "icon"::"public"."enum_pages_blocks_feature_cards_cards_icon";
  ALTER TABLE "pages_blocks_steps_steps" ALTER COLUMN "icon" SET DATA TYPE text;
  ALTER TABLE "pages_blocks_steps_steps" ALTER COLUMN "icon" SET DEFAULT 'CheckCircle2'::text;
  DROP TYPE "public"."enum_pages_blocks_steps_steps_icon";
  CREATE TYPE "public"."enum_pages_blocks_steps_steps_icon" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'FileCheck2', 'FileText', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scan', 'Search', 'Send', 'Shield', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'Timer', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  ALTER TABLE "pages_blocks_steps_steps" ALTER COLUMN "icon" SET DEFAULT 'CheckCircle2'::"public"."enum_pages_blocks_steps_steps_icon";
  ALTER TABLE "pages_blocks_steps_steps" ALTER COLUMN "icon" SET DATA TYPE "public"."enum_pages_blocks_steps_steps_icon" USING "icon"::"public"."enum_pages_blocks_steps_steps_icon";
  ALTER TABLE "_pages_v_blocks_feature_cards_cards" ALTER COLUMN "icon" SET DATA TYPE text;
  ALTER TABLE "_pages_v_blocks_feature_cards_cards" ALTER COLUMN "icon" SET DEFAULT 'CheckCircle2'::text;
  DROP TYPE "public"."enum__pages_v_blocks_feature_cards_cards_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_feature_cards_cards_icon" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'FileCheck2', 'FileText', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scan', 'Search', 'Send', 'Shield', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'Timer', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  ALTER TABLE "_pages_v_blocks_feature_cards_cards" ALTER COLUMN "icon" SET DEFAULT 'CheckCircle2'::"public"."enum__pages_v_blocks_feature_cards_cards_icon";
  ALTER TABLE "_pages_v_blocks_feature_cards_cards" ALTER COLUMN "icon" SET DATA TYPE "public"."enum__pages_v_blocks_feature_cards_cards_icon" USING "icon"::"public"."enum__pages_v_blocks_feature_cards_cards_icon";
  ALTER TABLE "_pages_v_blocks_steps_steps" ALTER COLUMN "icon" SET DATA TYPE text;
  ALTER TABLE "_pages_v_blocks_steps_steps" ALTER COLUMN "icon" SET DEFAULT 'CheckCircle2'::text;
  DROP TYPE "public"."enum__pages_v_blocks_steps_steps_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_steps_steps_icon" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'FileCheck2', 'FileText', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scan', 'Search', 'Send', 'Shield', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'Timer', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  ALTER TABLE "_pages_v_blocks_steps_steps" ALTER COLUMN "icon" SET DEFAULT 'CheckCircle2'::"public"."enum__pages_v_blocks_steps_steps_icon";
  ALTER TABLE "_pages_v_blocks_steps_steps" ALTER COLUMN "icon" SET DATA TYPE "public"."enum__pages_v_blocks_steps_steps_icon" USING "icon"::"public"."enum__pages_v_blocks_steps_steps_icon";
  ALTER TABLE "a_1qbo9hm" ALTER COLUMN "icon" SET DATA TYPE text;
  ALTER TABLE "a_1qbo9hm" ALTER COLUMN "icon" SET DEFAULT 'Siren'::text;
  ALTER TABLE "_a_1qbo9hm_v" ALTER COLUMN "icon" SET DATA TYPE text;
  ALTER TABLE "_a_1qbo9hm_v" ALTER COLUMN "icon" SET DEFAULT 'Siren'::text;
  DROP TYPE "public"."e_13zxfz5";
  CREATE TYPE "public"."e_13zxfz5" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'FileCheck2', 'FileText', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scan', 'Search', 'Send', 'Shield', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'Timer', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  ALTER TABLE "a_1qbo9hm" ALTER COLUMN "icon" SET DEFAULT 'Siren'::"public"."e_13zxfz5";
  ALTER TABLE "a_1qbo9hm" ALTER COLUMN "icon" SET DATA TYPE "public"."e_13zxfz5" USING "icon"::"public"."e_13zxfz5";
  ALTER TABLE "_a_1qbo9hm_v" ALTER COLUMN "icon" SET DEFAULT 'Siren'::"public"."e_13zxfz5";
  ALTER TABLE "_a_1qbo9hm_v" ALTER COLUMN "icon" SET DATA TYPE "public"."e_13zxfz5" USING "icon"::"public"."e_13zxfz5";
  ALTER TABLE "a_1fhf3el" ALTER COLUMN "icon" SET DATA TYPE text;
  ALTER TABLE "a_1fhf3el" ALTER COLUMN "icon" SET DEFAULT 'FileText'::text;
  ALTER TABLE "_a_1fhf3el_v" ALTER COLUMN "icon" SET DATA TYPE text;
  ALTER TABLE "_a_1fhf3el_v" ALTER COLUMN "icon" SET DEFAULT 'FileText'::text;
  DROP TYPE "public"."e_1tz110";
  CREATE TYPE "public"."e_1tz110" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'FileCheck2', 'FileText', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scan', 'Search', 'Send', 'Shield', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'Timer', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  ALTER TABLE "a_1fhf3el" ALTER COLUMN "icon" SET DEFAULT 'FileText'::"public"."e_1tz110";
  ALTER TABLE "a_1fhf3el" ALTER COLUMN "icon" SET DATA TYPE "public"."e_1tz110" USING "icon"::"public"."e_1tz110";
  ALTER TABLE "_a_1fhf3el_v" ALTER COLUMN "icon" SET DEFAULT 'FileText'::"public"."e_1tz110";
  ALTER TABLE "_a_1fhf3el_v" ALTER COLUMN "icon" SET DATA TYPE "public"."e_1tz110" USING "icon"::"public"."e_1tz110";
  ALTER TABLE "a_j1z8bo" ALTER COLUMN "icon" SET DATA TYPE text;
  ALTER TABLE "a_j1z8bo" ALTER COLUMN "icon" SET DEFAULT 'Smartphone'::text;
  ALTER TABLE "_a_j1z8bo_v" ALTER COLUMN "icon" SET DATA TYPE text;
  ALTER TABLE "_a_j1z8bo_v" ALTER COLUMN "icon" SET DEFAULT 'Smartphone'::text;
  DROP TYPE "public"."e_22ywr";
  CREATE TYPE "public"."e_22ywr" AS ENUM('Activity', 'ArrowRight', 'ArrowUpRight', 'Award', 'BadgeCheck', 'Bell', 'BellRing', 'Bot', 'Brain', 'BrainCircuit', 'Briefcase', 'Building2', 'Calendar', 'CalendarCheck', 'CalendarClock', 'ChartBar', 'CheckCircle2', 'CircleCheck', 'ClipboardCheck', 'ClipboardList', 'Clock', 'CreditCard', 'FileCheck2', 'FileText', 'Gift', 'Globe', 'GraduationCap', 'Handshake', 'Heart', 'HeartHandshake', 'HeartPulse', 'Hospital', 'Inbox', 'Layers', 'LayoutDashboard', 'Lightbulb', 'ListChecks', 'Lock', 'Mail', 'Map', 'MapPin', 'MessageSquare', 'MessageSquareText', 'Mic', 'Phone', 'Repeat', 'Rocket', 'Route', 'Scan', 'Search', 'Send', 'Shield', 'ShieldCheck', 'Siren', 'Smartphone', 'Sparkle', 'Sparkles', 'Star', 'Stethoscope', 'Target', 'Timer', 'TrendingUp', 'User', 'UserCheck', 'UserPlus', 'UserRound', 'Users', 'Video', 'Wallet', 'Wand2', 'Zap');
  ALTER TABLE "a_j1z8bo" ALTER COLUMN "icon" SET DEFAULT 'Smartphone'::"public"."e_22ywr";
  ALTER TABLE "a_j1z8bo" ALTER COLUMN "icon" SET DATA TYPE "public"."e_22ywr" USING "icon"::"public"."e_22ywr";
  ALTER TABLE "_a_j1z8bo_v" ALTER COLUMN "icon" SET DEFAULT 'Smartphone'::"public"."e_22ywr";
  ALTER TABLE "_a_j1z8bo_v" ALTER COLUMN "icon" SET DATA TYPE "public"."e_22ywr" USING "icon"::"public"."e_22ywr";
  DROP TYPE "public"."e_11hmaat";
  DROP TYPE "public"."e_e3qqv4";
  DROP TYPE "public"."e_ty4583";
  DROP TYPE "public"."e_1wpenzy";
  DROP TYPE "public"."e_1wxluqd";
  DROP TYPE "public"."e_1kdslve";
  DROP TYPE "public"."e_1q77neo";
  DROP TYPE "public"."e_3fqg1f";
  DROP TYPE "public"."e_n6towo";
  DROP TYPE "public"."e_9bhl27";
  DROP TYPE "public"."e_8vtycm";
  DROP TYPE "public"."e_1vvzx7q";
  DROP TYPE "public"."e_1cfbx60";
  DROP TYPE "public"."e_1iegtx9";
  DROP TYPE "public"."e_ts7mgj";`)
}
