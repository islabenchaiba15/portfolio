"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowDownToLine } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Additional Work", href: "#additional-projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for sticky shadow/border & scrollspy active link
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy logic
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust offset to detect early scroll
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initial run
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 border-b border-border-gray backdrop-blur-md"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand/Wordmark */}
          <div className="flex items-center">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-ink-black focus-ring rounded-md py-1"
            >
              <span className="text-sm">◆</span>
              <span>Mohamed Islam</span>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-xs font-medium tracking-wider uppercase transition-colors duration-150 focus-ring rounded-md py-1 px-2 ${
                  activeSection === link.href.substring(1)
                    ? "text-ink-black font-semibold"
                    : "text-muted-text hover:text-ink-black"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="/cv-data-analyst.pdf"
              download
              title="Download CV"
              className="flex items-center justify-center p-2 rounded-full border border-border-gray hover:bg-section-gray transition-colors duration-150 text-ink-black focus-ring"
              aria-label="Download CV/Resume PDF"
            >
              <ArrowDownToLine className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="btn small px-5 focus-ring"
            >
              Let&apos;s talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href="/cv-data-analyst.pdf"
              download
              title="Download CV"
              className="flex items-center justify-center p-2 rounded-full border border-border-gray hover:bg-section-gray transition-colors duration-150 text-ink-black focus-ring"
              aria-label="Download CV/Resume PDF"
            >
              <ArrowDownToLine className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-section-gray text-ink-black focus-ring"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-border-gray bg-white ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`block px-3 py-2 text-xs font-medium tracking-wider uppercase rounded-md ${
                activeSection === link.href.substring(1)
                  ? "bg-section-gray text-ink-black font-semibold"
                  : "text-muted-text hover:bg-section-gray hover:text-ink-black"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 px-3">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="btn small w-full text-center py-3 focus-ring"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
