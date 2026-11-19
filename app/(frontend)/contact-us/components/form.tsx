"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Paragraph } from "@/components/ui/paragraph";
import { Input } from "@/components/ui/input";
import { CustomButton } from "@/components/ui/custom-button";
import { submitLead } from "@/utils/leads";
import type { ContactContent } from "@/content/pages/contact";
import { useSiteSettings } from "@/components/providers/site-settings";

const MESSAGE_MAX_LENGTH = 1000;

const ENQUIRY_TYPES = [
  "Hiring / healthcare organization",
  "Partnership",
  "Healthcare professional",
  "Media",
  "General enquiry",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
  website: string; // honeypot
}

type FormErrors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  enquiryType: "",
  message: "",
  website: "",
};

const labelClass = "block text-sm font-medium text-[#717680] mb-2";
const fieldErrorClass = "border-red-500 focus:ring-red-500";

interface ContactFormProps {
  content: ContactContent["form"];
  onSubmitSuccess?: () => void;
}

export function ContactForm({ content, onSubmitSuccess }: ContactFormProps) {
  const { forms } = useSiteSettings();
  const errorText = content.errorMessages;
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = errorText.nameRequired;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = errorText.emailRequired;
    else if (!emailRegex.test(formData.email)) newErrors.email = errorText.emailInvalid;

    if (formData.phone.trim() && formData.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = errorText.phoneInvalid;
    }

    if (!formData.message.trim()) newErrors.message = errorText.messageRequired;
    else if (formData.message.trim().length < 10) newErrors.message = errorText.messageTooShort;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (result) setResult(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setResult(null);

    const response = await submitLead({ type: "contact", ...formData }, forms);

    setIsSubmitting(false);
    if (response.ok) {
      setResult({ ok: true, message: content.successMessage });
      setFormData(INITIAL_FORM);
      onSubmitSuccess?.();
    } else {
      setResult({ ok: false, message: response.message });
    }
  };

  const errorId = (field: keyof FormErrors) => (errors[field] ? `contact-${field}-error` : undefined);

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Name Field */}
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            {content.nameLabel}
          </label>
          <Input
            id="contact-name"
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={content.namePlaceholder}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errorId("name")}
            className={`rounded-lg ${errors.name ? fieldErrorClass : ""}`}
            required
          />
          {errors.name && (
            <Paragraph size="xs" className="text-red-600 mt-1">
              <span id="contact-name-error">{errors.name}</span>
            </Paragraph>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            {content.emailLabel}
          </label>
          <Input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={content.emailPlaceholder}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errorId("email")}
            className={`rounded-lg ${errors.email ? fieldErrorClass : ""}`}
            required
          />
          {errors.email && (
            <Paragraph size="xs" className="text-red-600 mt-1">
              <span id="contact-email-error">{errors.email}</span>
            </Paragraph>
          )}
        </div>

        {/* Phone Field (optional) */}
        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            {content.phoneLabel} <span className="font-normal">{content.optionalLabel}</span>
          </label>
          <Input
            id="contact-phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder={content.phonePlaceholder}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errorId("phone")}
            className={`rounded-lg ${errors.phone ? fieldErrorClass : ""}`}
          />
          {errors.phone && (
            <Paragraph size="xs" className="text-red-600 mt-1">
              <span id="contact-phone-error">{errors.phone}</span>
            </Paragraph>
          )}
        </div>

        {/* Enquiry Type */}
        <div>
          <label htmlFor="contact-enquiry-type" className={labelClass}>
            {content.topicLabel}
          </label>
          <select
            id="contact-enquiry-type"
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleInputChange}
            className="w-full h-9 rounded-lg border border-input bg-transparent px-3 text-base md:text-sm text-[#252B37] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
          >
            <option value="">{content.topicPlaceholder}</option>
            {ENQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Message Field */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="contact-message" className="block text-sm font-medium text-[#717680]">
              {content.messageLabel}
            </label>
            <Paragraph size="xs" className="text-[#717680]">
              <span aria-live="polite">{formData.message.length}/{MESSAGE_MAX_LENGTH}</span>
            </Paragraph>
          </div>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={content.messagePlaceholder}
            maxLength={MESSAGE_MAX_LENGTH}
            rows={5}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errorId("message")}
            className={`w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F3651B] focus:border-transparent resize-none ${
              errors.message ? fieldErrorClass : ""
            }`}
            required
          />
          {errors.message && (
            <Paragraph size="xs" className="text-red-600 mt-1">
              <span id="contact-message-error">{errors.message}</span>
            </Paragraph>
          )}
        </div>

        {/* Honeypot field, hidden from people */}
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleInputChange}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        {/* Status Messages */}
        {result && (
          <div
            role={result.ok ? "status" : "alert"}
            className={`p-4 rounded-lg border ${
              result.ok ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
            }`}
          >
            <Paragraph size="sm" className={result.ok ? "text-green-700" : "text-red-700"}>
              {result.message}
            </Paragraph>
          </div>
        )}

        {/* Submit Button */}
        <CustomButton
          type="submit"
          disabled={isSubmitting}
          rightIcon={ArrowRight}
          size="lg"
          className="w-full sm:w-auto my-0 justify-center"
        >
          {isSubmitting ? content.sendingLabel : content.submitLabel}
        </CustomButton>
      </form>
    </div>
  );
}
