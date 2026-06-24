"use client";

import React from "react";
import { Briefcase, GraduationCap, FolderCode } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface TimelineEvent {
  role: string;
  company: string;
  location: string;
  dates: string;
  highlights: string[];
}

const EXPERIENCE_DATA: TimelineEvent[] = [
  {
    role: "Software Engineer",
    company: "Sonatrach",
    location: "Hassi Messaoud, Algeria",
    dates: "Feb 2024 – Jul 2024",
    highlights: [
      "Built Pipexe, a real-time GIS pipeline-monitoring platform covering 500+ km of oil pipeline infrastructure.",
      "Led cross-functional integration of inspection and telemetry reporting features under strict industrial safety and compliance regulations.",
      "Engineered automated data pipelines that consolidated geospatial records into interactive operational dashboards."
    ]
  },
  {
    role: "Network Engineer Intern",
    company: "Algérie Télécom",
    location: "Batna, Algeria",
    dates: "Sep 2022",
    highlights: [
      "Diagnosed and resolved network topology and routing issues alongside senior infrastructure engineers.",
      "Configured routing tables and monitored packet delivery logs, contributing to a measurable improvement in local network uptime."
    ]
  },
  {
    role: "Full Stack Web Developer",
    company: "DevFest Hackathon",
    location: "Batna, Algeria",
    dates: "Dec 2021",
    highlights: [
      "Placed 4th place overall out of participating teams building Gaza Lens, a real-time misinformation-tracking application.",
      "Architected interactive web-based dashboards translating live reporting data for non-technical users and general audiences."
    ]
  }
];

const ADDITIONAL_PROJECTS = [
  {
    title: "Pipexe GIS Infrastructure",
    description: "Built the underlying GIS database model for real-time oil pipeline monitoring, structuring unstructured geospatial sensor telemetry logs into responsive supervisor maps, anomaly alerts, and compliance audits.",
    tech: ["PostgreSQL", "Node.js", "GIS", "WebSockets"]
  },
  {
    title: "stayIn Reservation Engine",
    description: "Created an apartment allocation and booking management web app using a custom heuristic recommendation system to automate optimal allocation and render real-time dashboards for booking rates.",
    tech: ["React", "Node.js", "MongoDB", "Data Analysis"]
  }
];

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation({ once: true });

  return (
    <section 
      ref={ref as any}
      id="experience" 
      className={`w-full bg-section-gray py-16 md:py-24 border-b border-border-gray reveal-on-scroll ${
        isVisible ? "revealed" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Timeline (Experience & Education) */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-left">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-muted-text">Timeline</span>
                <div className="h-px w-8 bg-border-gray"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink-black tracking-tight">
                History &amp; Education
              </h2>
            </div>

            {/* Experience Vertical Timeline */}
            <div className="relative border-l border-border-gray ml-3 mt-6 space-y-10 pl-6">
              
              {/* Loop Experience */}
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline dot */}
                  <span className="absolute -left-[31px] top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-white border border-ink-black">
                    <Briefcase className="w-2.5 h-2.5 text-ink-black" />
                  </span>
                  
                  {/* Event Details */}
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-baseline gap-2 justify-between">
                      <h3 className="text-base font-bold text-ink-black tracking-tight">{exp.role}</h3>
                      <span className="text-xs text-muted-text font-medium">{exp.dates}</span>
                    </div>
                    <span className="text-xs font-semibold text-ink-black">
                      {exp.company} <span className="text-muted-text font-normal">· {exp.location}</span>
                    </span>
                    <ul className="mt-3 list-disc pl-4 space-y-1.5 text-xs md:text-sm text-muted-text leading-relaxed">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              {/* Education Entry in the same timeline */}
              <div className="relative pt-4">
                {/* Timeline dot */}
                <span className="absolute -left-[31px] top-[22px] flex h-4.5 w-4.5 items-center justify-center rounded-full bg-white border border-accent-blue">
                  <GraduationCap className="w-2.5 h-2.5 text-accent-blue" />
                </span>

                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-baseline gap-2 justify-between">
                    <h3 className="text-base font-bold text-ink-black tracking-tight">Engineering &amp; Master&apos;s Degree</h3>
                    <span className="text-xs text-muted-text font-medium">2019 – 2024</span>
                  </div>
                  <span className="text-xs font-semibold text-ink-black">
                    Higher School of Computer Science (ESI-SBA) <span className="text-muted-text font-normal">· Sidi Bel Abbès, Algeria</span>
                  </span>
                  <p className="mt-2 text-xs md:text-sm text-muted-text leading-relaxed">
                    Specialized in <strong className="text-ink-black font-semibold">Information Systems and Web Development</strong>. Completed 5 years of rigorous engineering curriculum covering advanced data modeling, systems integration, databases, API designs, and analytics workflows.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Additional Project Work */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-muted-text">Secondary Work</span>
                <div className="h-px w-8 bg-border-gray"></div>
              </div>
              <h2 className="text-3xl font-extrabold text-ink-black tracking-tight">
                Additional Projects
              </h2>
            </div>

            <div className="flex flex-col gap-6 mt-6">
              {ADDITIONAL_PROJECTS.map((proj, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-border-gray rounded-[14px] p-5 hover:border-ink-black/20 hover:scale-[1.01] transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <FolderCode className="w-4 h-4 text-muted-text" />
                      <h3 className="text-sm font-bold text-ink-black tracking-tight">{proj.title}</h3>
                    </div>
                    <p className="text-xs text-muted-text leading-relaxed mb-4">
                      {proj.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-gray">
                    {proj.tech.map((t, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="bg-section-gray border border-border-gray text-ink-black text-[9px] font-bold px-2 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
