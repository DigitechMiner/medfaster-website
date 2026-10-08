"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Input } from "@/components/ui/input";
import { CustomButton } from "@/components/ui/custom-button";
import { ModalShell } from "./modal-shell";
import { useModalStore } from "@/stores/modalStore";
import { submitLead } from "@/utils/leads";

const ORGANIZATION_TYPES = [
  "Hospital",
  "Clinic",
  "Long-Term Care",
  "Home Care",
  "Staffing Agency",
  "Other",
];

const PROVINCES = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Northwest Territories",
  "Nova Scotia",
  "Nunavut",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Yukon",
];

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  role: "",
  organizationType: "",
  province: "",
  message: "",
  website: "", // honeypot
};

const labelClass = "block text-sm font-medium text-[#717680] mb-2";
const selectClass =
  "w-full h-9 rounded-lg border border-input bg-transparent px-3 text-base md:text-sm text-[#252B37] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]";

export function RequestDemoModal() {
  const { activeModal, closeModal } = useModalStore();
  const isOpen = activeModal === "request-demo";
  const [form, setForm] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setError(null);
      setIsSubmitted(false);
    }
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const result = await submitLead({ type: "demo", ...form });

    setIsSubmitting(false);
    if (result.ok) {
      setIsSubmitted(true);
      setForm(INITIAL_FORM);
    } else {
      setError(result.message);
    }
  };

  return (
    <ModalShell isOpen={isOpen} onClose={closeModal} labelledBy="request-demo-title">
      {isSubmitted ? (
        <div className="text-center space-y-4 py-4">
          <CheckCircle2 className="w-12 h-12 text-[#F3651B] mx-auto" />
          <Heading id="request-demo-title" as="h2" size="xs" className="text-[#252B37]">
            Thanks, we&apos;ll be in touch
          </Heading>
          <Paragraph size="sm" className="text-[#717680]">
            Our team will contact you shortly to schedule your KeRaeva demo.
          </Paragraph>
          <CustomButton className="mx-auto" onClick={closeModal}>
            Close
          </CustomButton>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="text-center space-y-2">
            <Heading id="request-demo-title" as="h2" size="xs" className="text-[#252B37]">
              Request a <span className="text-[#F3651B]">Demo</span>
            </Heading>
            <Paragraph size="sm" className="text-[#717680]">
              See how KeRaeva helps your organization hire, fill urgent shifts and manage your healthcare workforce.
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="demo-name" className={labelClass}>Full Name *</label>
              <Input id="demo-name" name="name" value={form.name} onChange={handleChange} placeholder="Emily Wilson" autoComplete="name" className="rounded-lg" required />
            </div>
            <div>
              <label htmlFor="demo-email" className={labelClass}>Work Email *</label>
              <Input id="demo-email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="emily@hospital.ca" autoComplete="email" className="rounded-lg" required />
            </div>
            <div>
              <label htmlFor="demo-organization" className={labelClass}>Organization *</label>
              <Input id="demo-organization" name="organization" value={form.organization} onChange={handleChange} placeholder="Organization name" autoComplete="organization" className="rounded-lg" required />
            </div>
            <div>
              <label htmlFor="demo-role" className={labelClass}>Your Role</label>
              <Input id="demo-role" name="role" value={form.role} onChange={handleChange} placeholder="HR Director" autoComplete="organization-title" className="rounded-lg" />
            </div>
            <div>
              <label htmlFor="demo-phone" className={labelClass}>Phone</label>
              <Input id="demo-phone" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(403) 555-0123" autoComplete="tel" className="rounded-lg" />
            </div>
            <div>
              <label htmlFor="demo-organization-type" className={labelClass}>Organization Type</label>
              <select id="demo-organization-type" name="organizationType" value={form.organizationType} onChange={handleChange} className={selectClass}>
                <option value="">Select type</option>
                {ORGANIZATION_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="demo-province" className={labelClass}>Province / Territory</label>
              <select id="demo-province" name="province" value={form.province} onChange={handleChange} className={selectClass}>
                <option value="">Select province or territory</option>
                {PROVINCES.map((province) => (
                  <option key={province} value={province}>{province}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="demo-message" className={labelClass}>What would you like to see?</label>
              <textarea
                id="demo-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                maxLength={1000}
                placeholder="e.g. urgent shift staffing, AI interviews, onboarding our team"
                className="w-full rounded-lg border border-input bg-transparent px-3 py-2 text-base md:text-sm outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] resize-none"
              />
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

          {error && (
            <Paragraph size="sm" className="text-red-600">
              <span role="alert">{error}</span>
            </Paragraph>
          )}

          <CustomButton
            type="submit"
            disabled={isSubmitting}
            rightIcon={ArrowRight}
            className="w-full justify-center my-0"
          >
            {isSubmitting ? "Sending..." : "Request Demo"}
          </CustomButton>
        </form>
      )}
    </ModalShell>
  );
}
