"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", company: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-steel-700 mb-1.5">
            Your Name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-steel-200 bg-white text-steel-dark
                       placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-safety focus:border-safety
                       transition-all duration-200"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-steel-700 mb-1.5">
            Company / Organization
          </label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-steel-200 bg-white text-steel-dark
                       placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-safety focus:border-safety
                       transition-all duration-200"
            placeholder="Your company name"
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
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-steel-200 bg-white text-steel-dark
                       placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-safety focus:border-safety
                       transition-all duration-200"
            placeholder="Your phone number"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-steel-700 mb-1.5">
            Service Required *
          </label>
          <select
            id="service"
            required
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-steel-200 bg-white text-steel-dark
                       focus:outline-none focus:ring-2 focus:ring-safety focus:border-safety
                       transition-all duration-200"
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
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-steel-700 mb-1.5">
          Project Details / Message *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-md border border-steel-200 bg-white text-steel-dark
                     placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-safety focus:border-safety
                     transition-all duration-200 resize-y"
          placeholder="Tell us about your project — location, scaffolding type, duration, approximate quantity, etc."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto px-8 py-3.5 rounded-md font-semibold text-steel-dark
                   bg-safety hover:bg-safety-600 disabled:bg-safety-300 disabled:cursor-not-allowed
                   transition-all duration-300 hover:shadow-lg hover:shadow-safety/25
                   focus:outline-none focus:ring-2 focus:ring-safety focus:ring-offset-2"
      >
        {status === "sending" ? "Sending..." : status === "sent" ? "✓ Message Sent!" : "Send Enquiry"}
      </button>

      {status === "sent" && (
        <p className="text-green-600 text-sm mt-3">
          Thank you! Your enquiry has been received. Our team will get back to you within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm mt-3">
          Something went wrong. Please try again or contact us directly at sales.kamalengg01@gmail.com.
        </p>
      )}
    </form>
  );
}
