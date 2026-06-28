"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const words = ["Clear, Actionable Insights.", "Confident, High-Stakes Decisions.", "Profitable, Data-Driven Margins."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleType = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          // Pause at the end of typing
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(300);
          return;
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      const offset = 80;
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
    <section id="home" className="relative w-full overflow-hidden bg-white py-16 md:py-28 border-b border-border-gray animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-blue pulse-indicator"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-muted-text">
                Data Analyst & Analytics Engineer
              </span>
            </div>

            {/* Headline */}
            <h1 className="h-hero text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink-black leading-none mb-6">
              From Data Chaos <br className="hidden md:inline" />
              <span className="text-muted-text">to {currentText}</span>
              <span className="inline-block w-[3px] h-[1em] bg-accent-blue ml-1 animate-pulse" style={{ verticalAlign: "middle" }}></span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-muted-text max-w-xl leading-relaxed mb-8">
              Delivering end-to-end data solutions — integrating and transforming raw data, building reliable pipelines and analytical models, and creating clear visualizations that help organizations make confident, high-stakes decisions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={handleScrollToProjects}
                className="btn group focus-ring px-8 py-4 text-sm font-semibold tracking-wide flex items-center justify-center gap-2"
              >
                View my work
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <a
                href="/cv-data-analyst.pdf"
                download
                className="btn secondary focus-ring px-8 py-4 text-sm font-semibold tracking-wide flex items-center justify-center gap-2"
              >
                Download CV
                <Download className="w-4 h-4" />
              </a>
            </div>

            {/* Badges / Stats Block */}
            <div className="flex flex-wrap gap-3 items-center">
              <div className="inline-flex items-center gap-1.5 bg-section-gray border border-border-gray px-3.5 py-1.5 rounded-full text-xs font-medium text-ink-black">
                <span className="w-1.5 h-1.5 bg-accent-blue rounded-full"></span>
                3+ End-to-End Projects
              </div>
              <div className="inline-flex items-center gap-1.5 bg-section-gray border border-border-gray px-3.5 py-1.5 rounded-full text-xs font-medium text-ink-black">
                SQL · Power BI · Python
              </div>
              <div className="inline-flex items-center gap-1.5 bg-section-gray border border-border-gray px-3.5 py-1.5 rounded-full text-xs font-medium text-ink-black">
                Algeria-based · Remote Ready
              </div>
            </div>
          </div>

          {/* Right Column: Signature Data Visual (SVG Scene) */}
          <div className="lg:col-span-5 w-full flex justify-center items-center">
            <div className="w-full max-w-[480px] relative transition-all duration-300 hover:scale-[1.01]">
              <svg 
                viewBox="0 0 600 375" 
                className="w-full h-auto drop-shadow-sm select-none"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Definitions for Gradients */}
                <defs>
                  <linearGradient id="funnelGrad" x1="160" y1="180" x2="285" y2="180" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FAFAFA" />
                    <stop offset="50%" stopColor="#E7E7E7" />
                    <stop offset="100%" stopColor="#2F6FED" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* ═══════════════════════════════════════ */}
                {/* LEFT SIDE (Static): Raw Data Ingestion  */}
                {/* ═══════════════════════════════════════ */}
                
                {/* Card 1: Data Table Grid */}
                <g>
                  <rect x="25" y="20" width="115" height="90" fill="#FFFFFF" stroke="#E7E7E7" strokeWidth="1.5" rx="10" />
                  {/* Table Header block */}
                  <rect x="35" y="30" width="95" height="14" fill="#FAFAFA" rx="4" />
                  <line x1="60" y1="30" x2="60" y2="44" stroke="#E7E7E7" strokeWidth="1" />
                  <line x1="90" y1="30" x2="90" y2="44" stroke="#E7E7E7" strokeWidth="1" />
                  {/* Grid Lines */}
                  <line x1="35" y1="56" x2="130" y2="56" stroke="#E7E7E7" strokeWidth="1" />
                  <line x1="35" y1="72" x2="130" y2="72" stroke="#E7E7E7" strokeWidth="1" />
                  <line x1="35" y1="88" x2="130" y2="88" stroke="#E7E7E7" strokeWidth="1" />
                  {/* Placeholder Table Data lines */}
                  <rect x="40" y="62" width="12" height="4" fill="#737373" rx="1" />
                  <rect x="70" y="62" width="12" height="4" fill="#737373" rx="1" />
                  <rect x="100" y="62" width="12" height="4" fill="#737373" rx="1" />
                  <rect x="40" y="78" width="12" height="4" fill="#737373" rx="1" />
                  <rect x="70" y="78" width="12" height="4" fill="#737373" rx="1" />
                  <rect x="100" y="78" width="12" height="4" fill="#2F6FED" rx="1" />
                  <rect x="40" y="94" width="12" height="4" fill="#737373" rx="1" />
                  <rect x="70" y="94" width="12" height="4" fill="#737373" rx="1" />
                  <rect x="100" y="94" width="12" height="4" fill="#737373" rx="1" />
                </g>

                {/* Card 2: JSON Code Block */}
                <g>
                  <rect x="25" y="130" width="115" height="90" fill="#0A0A0A" rx="10" />
                  {/* Window controls */}
                  <circle cx="37" cy="142" r="2.5" fill="#737373" />
                  <circle cx="45" cy="142" r="2.5" fill="#737373" />
                  <circle cx="53" cy="142" r="2.5" fill="#737373" />
                  {/* JSON Syntax */}
                  <text x="35" y="165" fill="#FAFAFA" fontSize="6.5" fontFamily="monospace">{"{"}</text>
                  <text x="43" y="177" fill="#737373" fontSize="6.5" fontFamily="monospace">&quot;id&quot;:<tspan fill="#2F6FED"> 102,</tspan></text>
                  <text x="43" y="189" fill="#737373" fontSize="6.5" fontFamily="monospace">&quot;src&quot;:<tspan fill="#F5A623"> &quot;fb&quot;,</tspan></text>
                  <text x="43" y="201" fill="#737373" fontSize="6.5" fontFamily="monospace">&quot;value&quot;:<tspan fill="#22C55E"> null</tspan></text>
                  <text x="35" y="211" fill="#FAFAFA" fontSize="6.5" fontFamily="monospace">{"}"}</text>
                </g>

                {/* Card 3: Ingestion Logs */}
                <g>
                  <rect x="25" y="240" width="115" height="90" fill="#FFFFFF" stroke="#E7E7E7" strokeWidth="1.5" rx="10" />
                  {/* Checkbox Rows */}
                  <rect x="35" y="255" width="8" height="8" fill="none" stroke="#E7E7E7" strokeWidth="1" rx="2" />
                  <line x1="50" y1="259" x2="120" y2="259" stroke="#737373" strokeWidth="1.5" />
                  <rect x="35" y="275" width="8" height="8" fill="none" stroke="#E7E7E7" strokeWidth="1" rx="2" />
                  <line x1="50" y1="279" x2="110" y2="279" stroke="#737373" strokeWidth="1.5" />
                  <rect x="35" y="295" width="8" height="8" fill="none" stroke="#E7E7E7" strokeWidth="1" rx="2" />
                  <line x1="50" y1="299" x2="115" y2="299" stroke="#737373" strokeWidth="1.5" />
                  <circle cx="39" cy="279" r="2" fill="#2F6FED" /> {/* Checked */}
                </g>

                {/* ═══════════════════════════════════════ */}
                {/* CENTER (Static): The Processing Funnel  */}
                {/* ═══════════════════════════════════════ */}
                
                {/* Funnel Body */}
                <path d="M165,145 C185,145 205,170 220,170 L260,170 C262,170 262,190 260,190 L220,190 C205,190 185,215 165,215 Z" fill="url(#funnelGrad)" stroke="#E7E7E7" strokeWidth="1.5" />
                <ellipse cx="165" cy="180" rx="4" ry="34" fill="#FFFFFF" stroke="#E7E7E7" strokeWidth="1.5" />
                <rect x="260" y="170" width="30" height="20" fill="#FFFFFF" stroke="#E7E7E7" strokeWidth="1.5" />

                {/* Disordered flow particles entering funnel */}
                <circle cx="150" cy="165" r="2.5" fill="#737373" />
                <circle cx="145" cy="190" r="2" fill="#F5A623" />
                <circle cx="155" cy="180" r="3" fill="#2F6FED" />
                <circle cx="148" cy="205" r="2.5" fill="#737373" />

                {/* Ordered structured particles emerging from funnel */}
                <circle cx="305" cy="180" r="2" fill="#2F6FED" />
                <circle cx="320" cy="180" r="2.5" fill="#F5A623" />
                <circle cx="335" cy="180" r="2" fill="#737373" />

                {/* ═══════════════════════════════════════ */}
                {/* RIGHT SIDE (Floating & Grounded)        */}
                {/* ═══════════════════════════════════════ */}
                
                {/* Group 1: Floating Bar Chart Card */}
                <g className="animate-float">
                  <rect x="350" y="20" width="105" height="85" fill="#FFFFFF" stroke="#E7E7E7" strokeWidth="1.5" rx="8" />
                  {/* Bars */}
                  <rect x="365" y="70" width="10" height="20" fill="#E7E7E7" rx="2" />
                  <rect x="385" y="55" width="10" height="35" fill="#E7E7E7" rx="2" />
                  <rect x="405" y="40" width="10" height="50" fill="#2F6FED" rx="2" />
                  <rect x="425" y="60" width="10" height="30" fill="#E7E7E7" rx="2" />
                </g>

                {/* Group 2: Floating Line Chart Card */}
                <g className="animate-float-delay-1">
                  <rect x="470" y="20" width="105" height="85" fill="#FFFFFF" stroke="#E7E7E7" strokeWidth="1.5" rx="8" />
                  {/* Trend Line */}
                  <path d="M485,75 Q500,60 515,65 T545,45 T560,40" fill="none" stroke="#2F6FED" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="560" cy="40" r="3" fill="#2F6FED" />
                  {/* Grid Lines */}
                  <line x1="480" y1="50" x2="565" y2="50" stroke="#FAFAFA" strokeWidth="1" />
                  <line x1="480" y1="70" x2="565" y2="70" stroke="#FAFAFA" strokeWidth="1" />
                </g>

                {/* Group 3: Floating Donut Chart Card */}
                <g className="animate-float-delay-2">
                  <rect x="350" y="120" width="105" height="85" fill="#FFFFFF" stroke="#E7E7E7" strokeWidth="1.5" rx="8" />
                  {/* Circle outline */}
                  <circle cx="402" cy="162" r="22" stroke="#FAFAFA" strokeWidth="6" fill="none" />
                  <circle cx="402" cy="162" r="22" stroke="#2F6FED" strokeWidth="6" fill="none" strokeDasharray="138" strokeDashoffset="48" strokeLinecap="round" />
                </g>

                {/* Group 4: Floating KPI Pills */}
                <g className="animate-float">
                  <rect x="470" y="120" width="105" height="85" fill="#FFFFFF" stroke="#E7E7E7" strokeWidth="1.5" rx="8" />
                  {/* Pill 1 */}
                  <rect x="480" y="130" width="85" height="15" fill="#FAFAFA" stroke="#E7E7E7" strokeWidth="0.75" rx="7.5" />
                  <circle cx="490" cy="137.5" r="2.5" fill="#2F6FED" />
                  <rect x="500" y="135.5" width="25" height="4" fill="#737373" rx="1" />
                  
                  {/* Pill 2 */}
                  <rect x="480" y="152" width="85" height="15" fill="#FAFAFA" stroke="#E7E7E7" strokeWidth="0.75" rx="7.5" />
                  <circle cx="490" cy="159.5" r="2.5" fill="#F5A623" />
                  <rect x="500" y="157.5" width="35" height="4" fill="#737373" rx="1" />

                  {/* Pill 3 */}
                  <rect x="480" y="174" width="85" height="15" fill="#FAFAFA" stroke="#E7E7E7" strokeWidth="0.75" rx="7.5" />
                  <circle cx="490" cy="181.5" r="2.5" fill="#22C55E" />
                  <rect x="500" y="179.5" width="20" height="4" fill="#737373" rx="1" />
                </g>

                {/* Group 5: Grounded Decision Out Card (STAYS GROUNDED, NO FLOAT) */}
                <g>
                  <rect x="350" y="220" width="225" height="110" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="2" rx="10" />
                  {/* Card Label */}
                  <text x="365" y="245" fill="#737373" fontSize="9" fontWeight="800" letterSpacing="1.5" fontFamily="sans-serif">DECISION OUT</text>
                  
                  {/* Status Indicator */}
                  <circle cx="550" cy="242" r="3.5" fill="#2F6FED" />
                  <text x="540" y="245" fill="#2F6FED" fontSize="8" fontWeight="800" textAnchor="end" fontFamily="sans-serif">VERIFIED</text>
                  
                  {/* Bold Headline */}
                  <text x="365" y="275" fill="#0A0A0A" fontSize="13" fontWeight="800" letterSpacing="-0.5" fontFamily="sans-serif">Shift 15% of budget to Facebook.</text>
                  
                  {/* Descriptive Text Lines */}
                  <text x="365" y="298" fill="#737373" fontSize="9.5" fontFamily="sans-serif">Instagram leads CTR, but Facebook converts</text>
                  <text x="365" y="313" fill="#737373" fontSize="9.5" fontFamily="sans-serif">2× more purchase events at scale.</text>
                </g>

              </svg>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
