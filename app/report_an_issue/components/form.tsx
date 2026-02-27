"use client";

import { useState, useRef } from "react";
import { ChevronRight, Plus } from "lucide-react";
import { CustomButton } from "@/components/custom/custom-button";

const issueTypes = [
  "Appointment & Booking",
  "Payment & Billing",
  "Technical Issue",
  "Account Access",
  "Job Posting Problem",
  "Verification Issue",
  "Other",
];

export function ReportIssueForm() {
  const [form, setForm] = useState({
    issueType: "",
    subject: "",
    email: "",
    mobile: "",
    description: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    // wire up your API call here
    console.log({ ...form, file });
  };

  return (
    <div className="space-y-6">

      {/* Row 1 — Issue Type + Subject */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs text-[#717680] font-medium">
            Select Issue Type
          </label>
          <div className="relative">
            <select
              name="issueType"
              value={form.issueType}
              onChange={handleChange}
              className="w-full appearance-none border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-[#252B37] bg-white focus:outline-none focus:ring-2 focus:ring-[#F3651B]/40 pr-10"
            >
              <option value="" disabled>
                Appointment &amp; Booking
              </option>
              {issueTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 w-4 h-4 text-[#717680] pointer-events-none" />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs text-[#717680] font-medium">Subject</label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Wrong prescription listed..."
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-[#252B37] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F3651B]/40"
          />
        </div>
      </div>

      {/* Row 2 — Email + Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs text-[#717680] font-medium">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="emily.wilson@example.com"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-[#252B37] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F3651B]/40"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs text-[#717680] font-medium">
            Mobile Number
          </label>
          <input
            name="mobile"
            type="tel"
            value={form.mobile}
            onChange={handleChange}
            placeholder="(319) 555-0115"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-[#252B37] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F3651B]/40"
          />
        </div>
      </div>

      {/* Row 3 — Description */}
      <div className="space-y-1.5">
        <label className="text-xs text-[#717680] font-medium">
          Description
        </label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={5}
          maxLength={100}
          placeholder="Please describe the issue in detail. We will get back to you within 24 hours."
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-[#252B37] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F3651B]/40 resize-none"
        />
        <p className="text-xs text-[#717680] text-right">
          {form.description.length}/100
        </p>
      </div>

      {/* Row 4 — Attachment */}
      <div className="space-y-1.5">
        <label className="text-xs text-[#717680] font-medium">Attachment</label>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="w-[270px] h-[90px] border border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center gap-1 hover:border-[#F3651B] hover:bg-orange-50 transition-colors"
        >
          <Plus className="w-5 h-5 text-[#717680]" />
          <span className="text-xs text-[#717680] text-center px-2">
            {file ? file.name : "(Max size 5MB JPG, PNG, PDF)"}
          </span>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Submit */}
      <CustomButton
                type="submit"
                rightIcon={ChevronRight}
                size="md"
                className="w-full sm:w-auto my-0 justify-center"
              >
                Submit Report
              </CustomButton>
    </div>
  );
}
