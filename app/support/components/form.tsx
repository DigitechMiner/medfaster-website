"use client";

import { useState } from "react";
import { ChevronRight, Lock, ArrowRight } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";
import { submitLead } from "@/utils/leads";

const DESCRIPTION_MAX_LENGTH = 1000;

const issueTypes = [
  "Job / Shift Issue",
  "Payment / Earnings",
  "Check-in / Attendance",
  "Account / Verification",
  "AI Interview",
  "Referral / Rewards",
  "Recruiter Platform",
  "Other",
];

const INITIAL_FORM = {
  issueType: "",
  subject: "",
  email: "",
  phone: "",
  description: "",
  website: "", // honeypot
};

type Field = "issueType" | "subject" | "email" | "phone" | "description";

const labelClass = "text-xs text-[#717680] font-medium";
const inputClass =
  "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-[#252B37] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F3651B]/40";
const errorBorder = "border-red-500";

export function ReportIssueForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as Field]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (result) setResult(null);
  };

  const validate = () => {
    const next: Partial<Record<Field, string>> = {};
    if (!form.issueType) next.issueType = "Please choose an issue type";
    if (!form.subject.trim()) next.subject = "Please add a short subject";
    if (!form.email.trim()) next.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email";
    if (form.phone.trim() && form.phone.replace(/\D/g, "").length < 10) next.phone = "Please enter a valid phone number";
    if (form.description.trim().length < 10) next.description = "Please describe the issue (at least 10 characters)";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setResult(null);
    const response = await submitLead({ type: "support", ...form });
    setIsSubmitting(false);

    if (response.ok) {
      setResult({ ok: true, message: "Thank you. Your request has been sent to our support team, and we'll reply by email." });
      setForm(INITIAL_FORM);
    } else {
      setResult({ ok: false, message: response.message });
    }
  };

  const describedBy = (field: Field) => (errors[field] ? `support-${field}-error` : undefined);
  const FieldError = ({ field }: { field: Field }) =>
    errors[field] ? (
      <p id={`support-${field}-error`} className="text-xs text-red-600">
        {errors[field]}
      </p>
    ) : null;

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Row 1 — Issue Type + Subject */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="support-issue-type" className={labelClass}>
            Select Issue Type
          </label>
          <div className="relative">
            <select
              id="support-issue-type"
              name="issueType"
              value={form.issueType}
              onChange={handleChange}
              aria-invalid={Boolean(errors.issueType)}
              aria-describedby={describedBy("issueType")}
              className={`w-full appearance-none border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-[#252B37] bg-white focus:outline-none focus:ring-2 focus:ring-[#F3651B]/40 pr-10 ${errors.issueType ? errorBorder : ""}`}
            >
              <option value="" disabled>
                Select an issue type
              </option>
              {issueTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 w-4 h-4 text-[#717680] pointer-events-none" aria-hidden="true" />
          </div>
          <FieldError field="issueType" />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="support-subject" className={labelClass}>
            Subject
          </label>
          <input
            id="support-subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="e.g. I can't check in to my shift"
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={describedBy("subject")}
            className={`${inputClass} ${errors.subject ? errorBorder : ""}`}
          />
          <FieldError field="subject" />
        </div>
      </div>

      {/* Row 2 — Email + Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="support-email" className={labelClass}>
            Email Address
          </label>
          <input
            id="support-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy("email")}
            className={`${inputClass} ${errors.email ? errorBorder : ""}`}
          />
          <FieldError field="email" />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="support-phone" className={labelClass}>
            Phone Number <span className="font-normal">(optional)</span>
          </label>
          <input
            id="support-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(403) 555-0123"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy("phone")}
            className={`${inputClass} ${errors.phone ? errorBorder : ""}`}
          />
          <FieldError field="phone" />
        </div>
      </div>

      {/* Row 3 — Description */}
      <div className="space-y-1.5">
        <label htmlFor="support-description" className={labelClass}>
          Description
        </label>
        <textarea
          id="support-description"
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={5}
          maxLength={DESCRIPTION_MAX_LENGTH}
          placeholder="Please describe the issue in detail, including the job or shift it relates to if relevant."
          aria-invalid={Boolean(errors.description)}
          aria-describedby={describedBy("description")}
          className={`${inputClass} resize-none ${errors.description ? errorBorder : ""}`}
        />
        <div className="flex items-start justify-between gap-3">
          <FieldError field="description" />
          <p className="text-xs text-[#717680] ml-auto" aria-live="polite">
            {form.description.length}/{DESCRIPTION_MAX_LENGTH}
          </p>
        </div>
      </div>

      {/* Honeypot field, hidden from people */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {result && (
        <div
          role={result.ok ? "status" : "alert"}
          className={`p-4 rounded-lg border text-sm ${
            result.ok ? "bg-green-50 border-green-200 text-green-700" : "bg-red-50 border-red-200 text-red-700"
          }`}
        >
          {result.message}
        </div>
      )}

      {/* Submit + Security Notice */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <CustomButton
          type="submit"
          disabled={isSubmitting}
          rightIcon={ArrowRight}
          size="md"
          className="w-full sm:w-auto my-0 justify-center"
        >
          {isSubmitting ? "Sending..." : "Submit Request"}
        </CustomButton>

        <p className="flex items-center gap-1.5 text-xs text-[#717680] sm:text-right">
          <Lock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          Your data is securely handled and protected.
        </p>
      </div>
    </form>
  );
}
