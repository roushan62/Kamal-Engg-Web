"use client";

import { FormEvent, useState } from "react";

const initialFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  botcheck: "",
};

type FormStatus = "idle" | "sending" | "sent" | "error";

type ContactApiResponse = {
  success?: boolean;
  message?: string;
  error?: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setFeedbackMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = (await res.json().catch(() => null)) as ContactApiResponse | null;

      if (!res.ok || !result?.success) {
        throw new Error(
          result?.error || result?.message || "Message send nahi ho paaya. Please try again."
        );
      }

      setStatus("sent");
      setFeedbackMessage(
        result.message || "Thank you! Your enquiry has been sent. Our team will get back to you within 24 hours."
      );
      setFormData(initialFormData);
    } catch (error) {
      setStatus("error");
      setFeedbackMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or contact us directly."
      );
    }
  };

  const isSending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="botcheck">Do not fill this field</label>
        <input
          id="botcheck"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.botcheck}
          onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-steel-700 mb-1.5">
            Your Name *
          </label>
          <input
            id="name"
            type="text"
            required
            minLength={2}
            maxLength={80}
            disabled={isSending}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-steel-200 bg-white text-steel-dark
                       placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-safety focus:border-safety
                       transition-all duration-200 disabled:bg-steel-50 disabled:cursor-not-allowed"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-steel-700 mb-1.5">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            required
            maxLength={120}
            disabled={isSending}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-steel-200 bg-white text-steel-dark
                       placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-safety focus:border-safety
                       transition-all duration-200 disabled:bg-steel-50 disabled:cursor-not-allowed"
            placeholder="name@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-steel-700 mb-1.5">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            required
            minLength={7}
            maxLength={30}
            disabled={isSending}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-steel-200 bg-white text-steel-dark
                       placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-safety focus:border-safety
                       transition-all duration-200 disabled:bg-steel-50 disabled:cursor-not-allowed"
            placeholder="Your phone number"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-steel-700 mb-1.5">
            Company / Organization
          </label>
          <input
            id="company"
            type="text"
            maxLength={120}
            disabled={isSending}
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-steel-200 bg-white text-steel-dark
                       placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-safety focus:border-safety
                       transition-all duration-200 disabled:bg-steel-50 disabled:cursor-not-allowed"
            placeholder="Your company name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-steel-700 mb-1.5">
          Service Required *
        </label>
        <select
          id="service"
          required
          disabled={isSending}
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-4 py-3 rounded-md border border-steel-200 bg-white text-steel-dark
                     focus:outline-none focus:ring-2 focus:ring-safety focus:border-safety
                     transition-all duration-200 disabled:bg-steel-50 disabled:cursor-not-allowed"
        >
          <option value="">Select a service</option>
          <option value="Erection & Dismantling">Scaffolding Erection &amp; Dismantling</option>
          <option value="H-Frame">H-Frame Scaffolding</option>
          <option value="Tubular">Tubular (Tube &amp; Coupler) Scaffolding</option>
          <option value="Cuplock">Cuplock Scaffolding</option>
          <option value="Supply/Rent">Scaffolding Supply on Rent / Sale</option>
          <option value="Maintenance">Scaffolding Maintenance &amp; Service</option>
          <option value="Other">Other / Multiple Services</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-steel-700 mb-1.5">
          Project Details / Message *
        </label>
        <textarea
          id="message"
          required
          minLength={10}
          maxLength={1500}
          rows={5}
          disabled={isSending}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-md border border-steel-200 bg-white text-steel-dark
                     placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-safety focus:border-safety
                     transition-all duration-200 resize-y disabled:bg-steel-50 disabled:cursor-not-allowed"
          placeholder="Tell us about your project — location, scaffolding type, duration, approximate quantity, etc."
        />
        <p className="mt-1.5 text-xs text-steel-400">
          Your details will be emailed directly to Kamal Engineering.
        </p>
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="w-full sm:w-auto px-8 py-3.5 rounded-md font-semibold text-steel-dark
                   bg-safety hover:bg-safety-600 disabled:bg-safety-300 disabled:cursor-not-allowed
                   transition-all duration-300 hover:shadow-lg hover:shadow-safety/25
                   focus:outline-none focus:ring-2 focus:ring-safety focus:ring-offset-2"
      >
        {isSending ? "Sending..." : status === "sent" ? "✓ Message Sent!" : "Send Enquiry"}
      </button>

      <div aria-live="polite">
        {status === "sent" && (
          <p className="text-green-600 text-sm mt-3">{feedbackMessage}</p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-sm mt-3">
            {feedbackMessage} If urgent, please call/WhatsApp us or email sales.kamalengg01@gmail.com.
          </p>
        )}
      </div>
    </form>
  );
}
