"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Globe, 
  TrendingUp, 
  BarChart3, 
  Database, 
  Network, 
  Sparkles, 
  Code2 
} from "lucide-react";

// Types
interface SkillCategory {
  number: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
}

// 6 Skill Categories Data matching the photo exactly
const SKILL_CATEGORIES: SkillCategory[] = [
  {
    number: "1",
    title: "1. Data Analysis & Statistics",
    icon: TrendingUp,
    skills: ["Data Cleaning", "EDA", "Statistical Analysis", "KPI Development", "A/B Testing", "Machine Learning (Foundational)"],
  },
  {
    number: "2",
    title: "2. Visualization & Business Intelligence",
    icon: BarChart3,
    skills: ["Power BI", "Excel", "Dashboard Development", "Data Storytelling", "KPI Tracking", "Reporting", "Power Query", "DAX"],
  },
  {
    number: "3",
    title: "3. Data Modeling & SQL",
    icon: Database,
    skills: ["SQL", "PostgreSQL", "MySQL", "Data Modeling", "Star Schemas", "Data Warehousing"],
  },
  {
    number: "4",
    title: "4. Data Integration & Engineering",
    icon: Network,
    skills: ["ETL Processes", "Data Pipelines", "REST APIs", "MongoDB", "Data Integration", "Data Warehouse"],
  },
  {
    number: "5",
    title: "5. Automation & Applied AI",
    icon: Sparkles,
    skills: ["n8n", "Workflow Automation", "RAG Systems", "Recommendation Systems", "Automated Reporting", "Data Integration"],
  },
  {
    number: "6",
    title: "6. Engineering Foundations",
    icon: Code2,
    skills: ["Python", "JavaScript", "Next.js", "Docker", "Git", "Linux", "Azure", "CI/CD"],
  },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="skills" className="w-full bg-section-gray py-16 md:py-24 border-b border-border-gray overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER + ILLUSTRATION WRAPPER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
          
          {/* Left Side: Header Text & Featured Tools */}
          <div className="flex flex-col text-left max-w-xl">
            <div className="inline-flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#737373]">CAPABILITIES</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]"></span>
              <div className="h-[1px] w-8 bg-border-gray"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink-black tracking-tight leading-tight mt-2">
              Full-Stack Analytics Toolkit
            </h2>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed mt-2 max-w-[480px]">
              End-to-end toolkit for collecting, analyzing, modeling, and visualizing data to deliver clear insights that drive high-stakes business decisions.
            </p>

            {/* FEATURED TOOLS ROW */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 mt-6">
              {/* SQL Card */}
              <div className="bg-white border border-[#E7E7E7] rounded-[10px] px-3.5 py-2 flex items-center gap-2 hover:border-ink-black/20 hover:scale-[1.01] transition-all duration-200 cursor-default">
                <div className="flex items-center justify-center text-ink-black flex-shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
                  </svg>
                </div>
                <span className="font-extrabold text-[13px] text-ink-black">SQL</span>
              </div>

              {/* Python Card */}
              <div className="bg-white border border-[#E7E7E7] rounded-[10px] px-3.5 py-2 flex items-center gap-2 hover:border-ink-black/20 hover:scale-[1.01] transition-all duration-200 cursor-default">
                <div className="flex items-center justify-center flex-shrink-0">
                  <svg className="w-4.5 h-4.5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="pythonGridA" x1="811.527" y1="574.895" x2="665.255" y2="573.732" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#366a96"/>
                        <stop offset="1" stopColor="#3679b0"/>
                      </linearGradient>
                      <linearGradient id="pythonGridB" x1="862.824" y1="642.176" x2="573.276" y2="642.176" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#ffc836"/>
                        <stop offset="1" stopColor="#ffe873"/>
                      </linearGradient>
                    </defs>
                    <g transform="matrix(.1617 0 0 .158089 -107.53764 -81.66187)">
                      <path d="M716.255 544.487c0-13.623 3.653-21.034 23.822-24.563 13.693-2.4 31.25-2.7 47.627 0 12.935 2.135 23.822 11.77 23.822 24.563v44.945c0 13.182-10.57 23.98-23.822 23.98h-47.627c-16.164 0-29.787 13.782-29.787 29.363v21.564h-16.376c-13.852 0-21.917-9.988-25.305-23.964-4.57-18.776-4.376-29.963 0-47.945 3.794-15.687 15.917-23.964 29.77-23.964h65.52v-6h-47.645v-17.98z" fill="url(#pythonGridA)"/>
                      <path d="M811.527 688.32c0 13.623-11.823 20.523-23.822 23.964-18.052 5.188-32.54 4.394-47.627 0-12.6-3.67-23.822-11.17-23.822-23.964v-44.945c0-12.935 10.782-23.98 23.822-23.98h47.627c15.864 0 29.787-13.71 29.787-29.963v-20.964h17.858c13.87 0 20.4 10.305 23.822 23.964 4.764 18.97 4.976 33.157 0 47.945-4.817 14.364-9.97 23.964-23.822 23.964H763.9v6h47.627v17.98z" fill="url(#pythonGridB)"/>
                      <path d="M728.166 541.505c0-4.976 3.988-9 8.93-9 4.923 0 8.93 4.023 8.93 9 0 4.96-4.006 8.982-8.93 8.982-4.94 0-8.93-4.023-8.93-8.982zm53.59 149.798c0-4.96 4.006-8.982 8.93-8.982 4.94 0 8.93 4.023 8.93 8.982 0 4.976-3.988 9-8.93 9-4.923 0-8.93-4.023-8.93-9z" fill="#fff"/>
                    </g>
                  </svg>
                </div>
                <span className="font-extrabold text-[13px] text-ink-black">Python</span>
              </div>

              {/* Power BI Card */}
              <div className="bg-white border border-[#E7E7E7] rounded-[10px] px-3.5 py-2 flex items-center gap-2 hover:border-ink-black/20 hover:scale-[1.01] transition-all duration-200 cursor-default">
                <div className="flex items-center justify-center flex-shrink-0">
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12a1 1 0 0 1 1 1v11H4a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h6Z" fill="#E69900" />
                    <path d="M8 11.5V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v17h-4.5V13a1.5 1.5 0 0 0-1.5-1.5H8Z" fill="#F2B211" />
                    <path d="M13 5.5V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1h-3.5V7A1.5 1.5 0 0 0 15 5.5h-2Z" fill="#F2C811" />
                  </svg>
                </div>
                <span className="font-extrabold text-[13px] text-ink-black">Power BI</span>
              </div>

              {/* Excel Card */}
              <div className="bg-white border border-[#E7E7E7] rounded-[10px] px-3.5 py-2 flex items-center gap-2 hover:border-ink-black/20 hover:scale-[1.01] transition-all duration-200 cursor-default">
                <div className="flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#107C41]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h5V2.5q0-.41.3-.7.29-.3.7-.3zM6 13.28l1.42 2.66h2.14l-2.38-3.87 2.34-3.8H7.46l-1.3 2.4-.05.08-.04.09-.64-1.28-.66-1.29H2.59l2.27 3.82-2.48 3.85h2.16zM14.25 21v-3H7.5v3zm0-4.5v-3.75H12v3.75zm0-5.25V7.5H12v3.75zm0-5.25V3H7.5v3zm8.25 15v-3h-6.75v3zm0-4.5v-3.75h-6.75v3.75zm0-5.25V7.5h-6.75v3.75zm0-5.25V3h-6.75v3Z"/>
                  </svg>
                </div>
                <span className="font-extrabold text-[13px] text-ink-black">Excel</span>
              </div>
            </div>
          </div>

          {/* Right Side: Header Illustration (Desktop only) */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0" aria-hidden="true">
            {/* Panel A: Tall Box with Scatter Dots */}
            <div className="bg-white border border-border-gray rounded-xl p-3 w-[110px] h-[155px] relative flex flex-col justify-between">
              {/* Scattered dots */}
              <div className="absolute inset-0 p-4">
                {/* Row 1 */}
                <div className="absolute top-[15%] left-[20%] w-1.5 h-1.5 rounded-full bg-[#737373]"></div>
                <div className="absolute top-[20%] left-[55%] w-2 h-2 rounded-full bg-[#F5A623]"></div>
                <div className="absolute top-[12%] left-[80%] w-1.5 h-1.5 rounded-full bg-ink-black"></div>
                {/* Row 2 */}
                <div className="absolute top-[35%] left-[30%] w-2 h-2 rounded-full bg-ink-black"></div>
                <div className="absolute top-[42%] left-[65%] w-1.5 h-1.5 rounded-full bg-[#737373]"></div>
                {/* Row 3 */}
                <div className="absolute top-[60%] left-[25%] w-1.5 h-1.5 rounded-full bg-[#F5A623]"></div>
                <div className="absolute top-[55%] left-[50%] w-2 h-2 rounded-full bg-ink-black"></div>
                <div className="absolute top-[65%] left-[75%] w-1.5 h-1.5 rounded-full bg-[#737373]"></div>
                {/* Row 4 */}
                <div className="absolute top-[80%] left-[35%] w-2 h-2 rounded-full bg-[#737373]"></div>
                <div className="absolute top-[85%] left-[60%] w-1.5 h-1.5 rounded-full bg-[#F5A623]"></div>
                <div className="absolute top-[78%] left-[80%] w-2 h-2 rounded-full bg-ink-black"></div>
              </div>
            </div>

            {/* Dashed Arrow 1 */}
            <svg className="w-10 h-4 text-border-gray" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" viewBox="0 0 40 16">
              <path d="M0 8h36M32 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* Panel B: Circular Badge with Outer Ring */}
            <div className="w-20 h-20 rounded-full border border-dashed border-[#E7E7E7] flex items-center justify-center bg-[#FFFFFF]">
              <div className="w-14 h-14 rounded-full bg-section-gray border border-border-gray flex items-center justify-center relative">
                {/* Database cylinder */}
                <svg className="w-6 h-6 text-ink-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="8" ry="3" />
                  <path d="M4 5v10c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
                  <path d="M4 10c0 1.66 3.58 3 8 3s8-1.34 8-3" />
                </svg>
                {/* Small gear overlay */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border border-[#E7E7E7] flex items-center justify-center text-[#737373]">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Dashed Arrow 2 */}
            <svg className="w-10 h-4 text-border-gray" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" viewBox="0 0 40 16">
              <path d="M0 8h36M32 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* Panel C: Wider Box with charts */}
            <div className="bg-white border border-border-gray rounded-xl p-4 w-[210px] h-[145px] flex flex-col justify-between">
              {/* Top row: Donut & lines */}
              <div className="flex items-center gap-3">
                {/* Donut Chart */}
                <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#E7E7E7" strokeWidth="4.5" />
                  {/* Dark gray section */}
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#4A4A4A" strokeWidth="4.5" strokeDasharray="60 40" strokeDashoffset="25" />
                  {/* Gold section */}
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#F5A623" strokeWidth="4.5" strokeDasharray="25 75" strokeDashoffset="85" />
                </svg>
                {/* Lines */}
                <div className="flex flex-col gap-1.5 flex-1">
                  <div className="h-1.5 w-full bg-[#E7E7E7] rounded-full"></div>
                  <div className="h-1.5 w-[60%] bg-[#E7E7E7] rounded-full"></div>
                </div>
              </div>

              {/* Bottom row: Bar & Line charts */}
              <div className="flex items-end justify-between gap-4 mt-2">
                {/* Mini Bar Chart */}
                <div className="flex items-end gap-1 h-10">
                  <div className="w-2.5 h-4 bg-muted-text rounded-[1px]"></div>
                  <div className="w-2.5 h-8 bg-ink-black rounded-[1px]"></div>
                  <div className="w-2.5 h-6 bg-[#F5A623] rounded-[1px]"></div>
                </div>

                {/* Mini Line Chart */}
                <svg className="w-16 h-10 text-ink-black" viewBox="0 0 50 30" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M0 25 L12 18 L24 22 L36 8 L48 10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* SIX SKILL CATEGORIES GRID */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index} 
                className="bg-white border border-border-gray rounded-[16px] p-4 sm:p-5 md:p-6 hover:border-ink-black/20 hover:scale-[1.005] hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col gap-5 transform transition-all duration-700 ease-out"
                style={{ 
                  transitionDelay: isVisible ? `${index * 70}ms` : "0ms",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(24px)"
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  {/* Small icon in a rounded square top-left */}
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E7E7E7] flex items-center justify-center text-ink-black flex-shrink-0">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  
                  {/* Number + Title with gold underline */}
                  <div className="flex flex-col">
                    <h3 className="text-[13px] sm:text-[15px] font-bold text-ink-black tracking-tight leading-tight">
                      {category.title}
                    </h3>
                    <div className="h-[2px] w-6 bg-[#F5A623] mt-1.5"></div>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="bg-white border border-[#E7E7E7] text-ink-black text-[10px] sm:text-xs font-semibold px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-[8px] tracking-wide"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* LANGUAGES STRIP */}
        <div 
          className="bg-white border border-[#E7E7E7] rounded-[14px] p-4 mt-8 md:mt-12 flex flex-col md:flex-row md:items-center justify-between gap-4 w-full transform transition-all duration-700 ease-out delay-[500ms]"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)"
          }}
        >
          {/* Globe + Label */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white border border-border-gray flex items-center justify-center text-ink-black flex-shrink-0">
              <Globe className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-ink-black tracking-tight">Languages</span>
          </div>

          {/* Languages items */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-xs sm:text-sm text-ink-black font-semibold">
            <div className="flex items-center gap-2">
              <span className="text-[#737373] md:text-ink-black font-medium">Arabic (Native)</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]"></span>
            </div>
            <div className="hidden md:block w-px h-4 bg-border-gray"></div>
            <div className="flex items-center gap-2">
              <span className="text-[#737373] md:text-ink-black font-medium">English (Professional)</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]"></span>
            </div>
            <div className="hidden md:block w-px h-4 bg-border-gray"></div>
            <div className="flex items-center gap-2">
              <span className="text-[#737373] md:text-ink-black font-medium">French (Intermediate)</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]"></span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
