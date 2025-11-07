"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Input } from "@/components/ui/input";
import { CustomButton } from "@/components/ui/custom-button";

const MESSAGE_MAX_LENGTH = 100;

interface FormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  mobile?: string;
  message?: string;
}

interface ContactFormProps {
  onSubmitSuccess?: () => void;
}

export function ContactForm({ onSubmitSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (formData.mobile.replace(/\D/g, "").length < 10) {
      newErrors.mobile = "Please enter a valid mobile number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "message" && value.length > MESSAGE_MAX_LENGTH) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });

      onSubmitSuccess?.();

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-[#717680] mb-2">
            Name
          </label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Emily Wilson"
            className={`rounded-lg ${
              errors.name ? "border-red-500 focus:ring-red-500" : ""
            }`}
            required
          />
          {errors.name && (
            <Paragraph size="xs" className="text-red-600 mt-1">
              {errors.name}
            </Paragraph>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-[#717680] mb-2">
            Email Address
          </label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="emily.wilson@example.com"
            className={`rounded-lg ${
              errors.email ? "border-red-500 focus:ring-red-500" : ""
            }`}
            required
          />
          {errors.email && (
            <Paragraph size="xs" className="text-red-600 mt-1">
              {errors.email}
            </Paragraph>
          )}
        </div>

        {/* Mobile Field */}
        <div>
          <label className="block text-sm font-medium text-[#717680] mb-2">
            Mobile Number
          </label>
          <Input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            placeholder="(319) 555-0115"
            className={`rounded-lg ${
              errors.mobile ? "border-red-500 focus:ring-red-500" : ""
            }`}
            required
          />
          {errors.mobile && (
            <Paragraph size="xs" className="text-red-600 mt-1">
              {errors.mobile}
            </Paragraph>
          )}
        </div>

        {/* Message Field */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-[#717680]">
              Message
            </label>
            <Paragraph size="xs" className="text-[#717680]">
              {formData.message.length}/{MESSAGE_MAX_LENGTH}
            </Paragraph>
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="I'm a hospital looking to post jobs, or I'm a nurse with a question about verification"
            maxLength={MESSAGE_MAX_LENGTH}
            rows={4}
            className={`w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4781B] focus:border-transparent resize-none ${
              errors.message ? "border-red-500 focus:ring-red-500" : ""
            }`}
            required
          />
          {errors.message && (
            <Paragraph size="xs" className="text-red-600 mt-1">
              {errors.message}
            </Paragraph>
          )}
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <Paragraph size="sm" className="text-green-700">
              ✓ Message sent successfully! We'll get back to you soon.
            </Paragraph>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <Paragraph size="sm" className="text-red-700">
              ✗ Something went wrong. Please try again.
            </Paragraph>
          </div>
        )}

        {/* Submit Button */}
       <CustomButton
                type="submit"
                disabled={isSubmitting}
                rightIcon={ChevronRight}
                size="lg"
                className="w-full sm:w-auto my-0 justify-center items-center"
              >
                {isSubmitting ? "Subscribing..." : "Send Your Message"}
              </CustomButton>
      </form>
    </div>
  );
}
