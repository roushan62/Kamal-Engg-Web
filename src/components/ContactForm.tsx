"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";
import { COMPANY } from "@/lib/constants";

const SERVICES = [
  "Scaffolding — Erection & Dismantling",
  "Scaffolding — Cuplock System",
  "Scaffolding — Tube & Coupler",
  "Scaffolding — H-Frame",
  "Material Supply / Hire",
  "Industrial Protective Painting",
  "Thermal / Cold Insulation",
  "Multiple Services",
  "Other / Not Sure",
];

type Status = "idle" | "sending" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  service: string;
  timeline: string;
  message: string;
  website: string; // honeypot
}

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  location: "",
  service: "",
  timeline: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const set = (k: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  };

  function validate() {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      e.email = "Please enter a valid email address.";
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 10) e.phone = "Please enter a valid phone number.";
    if (!form.service) e.service = "Please select a service.";
    if (form.message.trim().length < 10) e.message = "Please describe your requirement (10+ characters).";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (status === "sending") return;
    if (!validate()) {
      setStatus("error");
      setFeedback("Please correct the highlighted fields and try again.");
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data?.success) {
        setStatus("success");
        setFeedback(data.message || "Thank you — your enquiry has been sent.");
        setForm(EMPTY);
      } else {
        setStatus("error");
        setFeedback(
          data?.error ||
            "We could not send your enquiry right now. Please call or WhatsApp us directly."
        );
      }
    } catch {
      setStatus("error");
      setFeedback(
        "Network error — please check your connection, or reach us on WhatsApp / phone."
      );
    }
  }

  const inputCls = (k: keyof FormState) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-[0.925rem] text-steel-900 outline-none transition-all placeholder:text-steel-400 focus:ring-4 ${
      errors[k]
        ? "border-red-400 focus:border-red-500 focus:ring-red-500/12"
        : "border-steel-200 focus:border-safety focus:ring-safety/15"
    }`;

  const labelCls = "mb-1.5 block text-[0.78rem] font-bold uppercase tracking-wider text-steel-700";

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center md:p-12"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 16 }}
          className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-600 text-white"
        >
          <Icon name="check" size={30} />
        </motion.span>
        <h3 className="mt-6 text-[1.4rem] font-bold text-emerald-950">Enquiry sent successfully</h3>
        <p className="mx-auto mt-3 max-w-md text-[0.925rem] leading-relaxed text-emerald-800 pretty">
          {feedback} Our team will get back to you shortly. For anything urgent, call or WhatsApp us
          directly.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={`https://wa.me/${COMPANY.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn !bg-[#25D366] !text-white"
          >
            <Icon name="whatsapp" size={17} />
            WhatsApp Us
          </a>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setFeedback("");
            }}
            className="btn btn-ghost"
          >
            Send Another Enquiry
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-steel-200 bg-white p-6 shadow-[0_20px_48px_-28px_rgba(20,23,28,0.35)] md:p-8">
      <div className="mb-7">
        <h2 className="text-[1.35rem] font-bold text-steel-950">Send us your requirement</h2>
        <p className="mt-2 text-[0.9rem] leading-relaxed text-steel-500 pretty">
          Fill in the details below and the enquiry lands directly in our inbox. Fields marked
          <span className="font-bold text-safety-700"> *</span> are required.
        </p>
      </div>

      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={set("website")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Full Name <span className="text-safety-700">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={set("name")}
            placeholder="Your name"
            className={inputCls("name")}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1.5 text-[0.78rem] font-medium text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="company" className={labelCls}>
            Company / Organisation
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={set("company")}
            placeholder="Company name (optional)"
            className={inputCls("company")}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelCls}>
            Email Address <span className="text-safety-700">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={set("email")}
            placeholder="you@company.com"
            className={inputCls("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1.5 text-[0.78rem] font-medium text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone / WhatsApp <span className="text-safety-700">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={form.phone}
            onChange={set("phone")}
            placeholder="+91 98765 43210"
            className={inputCls("phone")}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="mt-1.5 text-[0.78rem] font-medium text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="service" className={labelCls}>
            Service Required <span className="text-safety-700">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={set("service")}
            className={`${inputCls("service")} cursor-pointer appearance-none bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e7684' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")] bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-11`}
            aria-invalid={!!errors.service}
          >
            <option value="">Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1.5 text-[0.78rem] font-medium text-red-600">{errors.service}</p>
          )}
        </div>

        <div>
          <label htmlFor="location" className={labelCls}>
            Site Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            value={form.location}
            onChange={set("location")}
            placeholder="City / plant name (optional)"
            className={inputCls("location")}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="timeline" className={labelCls}>
            Timeline / Start Date
          </label>
          <input
            id="timeline"
            name="timeline"
            type="text"
            value={form.timeline}
            onChange={set("timeline")}
            placeholder="e.g. Shutdown from 15 March, or ASAP (optional)"
            className={inputCls("timeline")}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>
            Project Details <span className="text-safety-700">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={set("message")}
            placeholder="Describe the scope — structure type, approximate height and area, duration required, and anything specific we should know."
            className={`${inputCls("message")} resize-y`}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="mt-1.5 text-[0.78rem] font-medium text-red-600">{errors.message}</p>
          )}
        </div>
      </div>

      <AnimatePresence>
        {status === "error" && feedback && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div
              role="alert"
              className="mt-5 flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-[0.865rem] leading-relaxed text-red-800"
            >
              <Icon name="close" size={17} className="mt-0.5 shrink-0" />
              <span className="pretty">{feedback}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-amber mt-7 w-full !py-4 !text-base disabled:cursor-not-allowed disabled:opacity-65"
      >
        {status === "sending" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-steel-950/25 border-t-steel-950" />
            Sending your enquiry…
          </>
        ) : (
          <>
            Send Enquiry
            <Icon name="arrow" size={18} />
          </>
        )}
      </button>

      <p className="mt-4 text-center text-[0.75rem] leading-relaxed text-steel-400 pretty">
        Your details are used only to respond to this enquiry. We do not share them with anyone else.
      </p>
    </form>
  );
}
