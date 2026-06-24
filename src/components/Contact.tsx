"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Custom Inline SVG LinkedIn Icon to prevent build errors
const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation({ once: true });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Auto-dismiss the success banner after 10 seconds
  useEffect(() => {
    if (status !== "success") return;
    const timer = setTimeout(() => setStatus("idle"), 10000);
    return () => clearTimeout(timer);
  }, [status]);

  const validateField = (name: string, value: string) => {
    if (!value.trim()) {
      return "This field is required";
    }
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
      }
    }
    return "";
  };

  const handleBlur = (field: keyof typeof form) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, form[field]);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      message: validateField("message", form.message),
    };
    
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (newErrors.name || newErrors.email || newErrors.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to send message");
        }
        return res.json();
      })
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTouched({ name: false, email: false, message: false });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section 
      ref={ref as any}
      id="contact" 
      className={`w-full bg-ink-black text-white py-20 md:py-28 reveal-on-scroll ${
        isVisible ? "revealed" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start">
          
          {/* Left Column: Bold statement & Info */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/40">Get in touch</span>
              <div className="h-px w-8 bg-white/20"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none mb-6">
              Let&apos;s turn your <br />
              <span className="text-white/60">data into decisions.</span>
            </h2>

            <p className="text-sm md:text-base text-white/60 max-w-md leading-relaxed mb-10">
              Have an analytics dashboard to build, pipeline to construct, or workflows to automate? Drop me a message or connect directly.
            </p>

            {/* Direct Contact Links */}
            <div className="space-y-6">
              <a 
                href="mailto:mi.benchaiba@esi-sba.dz" 
                className="flex items-center gap-3 group focus-ring rounded-md py-1"
              >
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-white/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-wider text-white/40">Email</div>
                  <div className="text-xs font-semibold text-white/90 group-hover:text-white">mi.benchaiba@esi-sba.dz</div>
                </div>
              </a>

              <a 
                href="tel:+213658137132" 
                className="flex items-center gap-3 group focus-ring rounded-md py-1"
              >
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-white/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-wider text-white/40">Phone</div>
                  <div className="text-xs font-semibold text-white/90 group-hover:text-white">+213 658 137 132</div>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/m-islam-benchaiba" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 group focus-ring rounded-md py-1"
              >
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-white/10 transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-wider text-white/40">LinkedIn</div>
                  <div className="text-xs font-semibold text-white/90 group-hover:text-white">linkedin.com/in/m-islam-benchaiba</div>
                </div>
              </a>

              <div className="flex items-center gap-3 py-1">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-wider text-white/40">Location</div>
                  <div className="text-xs font-semibold text-white/90">Ichemoul, Batna, Algeria</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form Card */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <div className="w-full max-w-[460px] bg-white text-ink-black rounded-[14px] p-6 md:p-8 flex flex-col gap-5">
              <h3 className="text-lg font-bold tracking-tight">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-name" className="text-[10px] font-bold uppercase tracking-wider text-muted-text">
                    Name
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-lg border text-xs bg-section-gray transition-colors focus:outline-none focus:border-ink-black ${
                      touched.name && errors.name 
                        ? "border-red-500" 
                        : "border-border-gray"
                    }`}
                  />
                  {touched.name && errors.name && (
                    <span className="text-[10px] text-red-500 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-email" className="text-[10px] font-bold uppercase tracking-wider text-muted-text">
                    Email Address
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 rounded-lg border text-xs bg-section-gray transition-colors focus:outline-none focus:border-ink-black ${
                      touched.email && errors.email 
                        ? "border-red-500" 
                        : "border-border-gray"
                    }`}
                  />
                  {touched.email && errors.email && (
                    <span className="text-[10px] text-red-500 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-message" className="text-[10px] font-bold uppercase tracking-wider text-muted-text">
                    Message
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    placeholder="Describe your project goals..."
                    className={`w-full px-4 py-3 rounded-lg border text-xs bg-section-gray transition-colors focus:outline-none focus:border-ink-black resize-none ${
                      touched.message && errors.message 
                        ? "border-red-500" 
                        : "border-border-gray"
                    }`}
                  />
                  {touched.message && errors.message && (
                    <span className="text-[10px] text-red-500 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn w-full mt-2 py-3.5 focus-ring text-xs font-bold tracking-wider uppercase disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Sending message...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {/* Form feedback */}
                {status === "success" && (
                  <div className="flex items-center gap-2 text-xs text-status-green bg-status-green/5 border border-status-green/10 p-3 rounded-lg mt-2 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    Message sent successfully! Thank you.
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 text-xs text-red-500 bg-red-500/5 border border-red-500/10 p-3 rounded-lg mt-2 font-semibold">
                    <AlertCircle className="w-4 h-4" />
                    Failed to send message. Please try again or email directly.
                  </div>
                )}

              </form>

              {/* Direct alternate CTA */}
              <div className="flex items-center justify-center gap-3 mt-4 border-t border-border-gray pt-4">
                <a 
                  href="https://linkedin.com/in/m-islam-benchaiba" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase tracking-wider text-muted-text hover:text-ink-black transition-colors flex items-center gap-1 focus-ring"
                >
                  Connect on LinkedIn
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
