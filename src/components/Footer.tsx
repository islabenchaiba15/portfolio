"use client";

import React from "react";
import { ArrowUp, Download, Mail, ExternalLink } from "lucide-react";

// lucide-react in this project doesn't export Github or Linkedin — use plain SVGs
const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);


export default function Footer() {
  const handleScrollTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Home",            href: "#home" },
    { label: "Skills",          href: "#skills" },
    { label: "Projects",        href: "#projects" },
    { label: "Additional Work", href: "#additional-projects" },
    { label: "Contact",         href: "#contact" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "https://linkedin.com/in/m-islam-benchaiba", icon: LinkedinIcon, external: true },
    { label: "GitHub",   href: "https://github.com/islabenchaiba15",        icon: GithubIcon,  external: true },
    { label: "Email",    href: "mailto:mi.benchaiba@esi-sba.dz",            icon: Mail,        external: false },
  ];

  return (
    <footer className="w-full text-ink-black">

      {/* ── DARK CTA BAND ─────────────────────────────────────────── */}
      <div className="hidden md:block bg-ink-black text-white relative overflow-hidden">
        {/* subtle dot-grid decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left: headline */}
          <div className="flex flex-col gap-2 max-w-lg">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
              Open to opportunities
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight leading-tight">
              Let&apos;s turn your data into{" "}
              <span className="text-accent-blue">decisions.</span>
            </h2>
            <p className="text-sm text-white/50 leading-relaxed mt-1">
              Available for freelance projects, full-time roles, and consulting.
              Based in Algeria · Remote-first.
            </p>
          </div>

          {/* Right: action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="mailto:mi.benchaiba@esi-sba.dz"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-blue hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors duration-150 focus-ring"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
            <a
              href="/cv-data-analyst.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-lg border border-white/10 transition-colors duration-150 focus-ring"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER BODY ──────────────────────────────────────── */}
      <div className="bg-section-gray border-t border-border-gray">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-14">

          {/* Desktop: 4-column grid  |  Mobile: logo full-width + 2-col */}
          <div className="hidden md:grid md:grid-cols-12 md:gap-12 pb-10 border-b border-border-gray">

            {/* Col 1: Brand — spans 4 cols */}
            <div className="md:col-span-4 flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span className="text-base font-extrabold uppercase tracking-widest flex items-center gap-2">
                  <span className="text-accent-blue">◆</span>
                  <span>Mohamed Islam</span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-text pl-5">
                  Full Stack Data Analyst
                </span>
              </div>
              <p className="text-xs text-muted-text leading-relaxed max-w-xs">
                Building end-to-end data solutions — pipelines, models, and
                dashboards that drive confident, high-stakes decisions.
              </p>
              {/* Social icon row */}
              <div className="flex items-center gap-2 mt-1">
                {socialLinks.map(({ label, href, icon: Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="p-2 rounded-lg border border-border-gray bg-white hover:bg-ink-black hover:text-white hover:border-ink-black text-muted-text transition-all duration-150 focus-ring"
                    title={label}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Navigation — spans 2 cols, offset by 1 */}
            <div className="md:col-span-2 md:col-start-6 flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-text">
                Navigation
              </span>
              <ul className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="group text-xs font-semibold text-muted-text hover:text-ink-black transition-colors focus-ring rounded-sm flex items-center gap-1.5"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-accent-blue transition-all duration-200 overflow-hidden" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Connect — spans 2 cols */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-text">
                Connect
              </span>
              <ul className="flex flex-col gap-2.5">
                {socialLinks.map(({ label, href, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group text-xs font-semibold text-muted-text hover:text-ink-black transition-colors focus-ring rounded-sm flex items-center gap-1.5"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-accent-blue transition-all duration-200 overflow-hidden" />
                      {label}
                      {external && (
                        <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: scroll-to-top — far right */}
            <div className="md:col-span-2 flex justify-end items-start">
              <button
                onClick={handleScrollTop}
                className="group flex flex-col items-center gap-1.5 focus-ring"
                aria-label="Scroll back to top"
              >
                <span className="p-3 bg-white hover:bg-ink-black border border-border-gray text-ink-black hover:text-white rounded-full transition-all duration-150 block">
                  <ArrowUp className="w-4 h-4" />
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-widest text-muted-text group-hover:text-ink-black transition-colors">
                  Top
                </span>
              </button>
            </div>
          </div>

          {/* ── MOBILE layout (unchanged 2-col) ── */}
          <div className="md:hidden pb-10 border-b border-border-gray">
            <div className="flex flex-col gap-4 text-left mb-8">
              <span className="text-sm font-extrabold uppercase tracking-widest flex items-center gap-1.5">
                <span className="text-accent-blue">◆</span>
                <span>Mohamed Islam</span>
              </span>
              <p className="text-xs text-muted-text max-w-sm leading-relaxed">
                Full Stack Data Analyst building end-to-end pipelines, database
                models, and dashboards that drive decisions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-text">Navigation</span>
                <ul className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="text-xs font-semibold text-muted-text hover:text-ink-black transition-colors focus-ring rounded-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-text">Connect</span>
                <ul className="flex flex-col gap-2">
                  {socialLinks.map(({ label, href, external }) => (
                    <li key={label}>
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-xs font-semibold text-muted-text hover:text-ink-black transition-colors focus-ring rounded-sm"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={handleScrollTop}
                className="p-3 bg-white hover:bg-ink-black border border-border-gray text-ink-black hover:text-white rounded-full transition-colors duration-150 focus-ring"
                aria-label="Scroll back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ── BOTTOM BAR ─────────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-3">
            <span className="text-xs text-muted-text">
              © 2026 Mohamed Islam Benchaiba. All rights reserved.
            </span>
            <div className="flex items-center gap-3">
              <span className="hidden sm:flex items-center gap-1.5 text-xs text-muted-text font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-status-green pulse-indicator" />
                Open to work · Batna, Algeria
              </span>
              <span className="sm:hidden text-xs text-muted-text font-medium">
                Built with care · Batna, Algeria
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
