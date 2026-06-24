"use client";

import React from "react";
import { TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ProjectItem {
  title: string;
  subtitle: string;
  category: string;
  kpis: string[];
  bullets: string[];
  tech: string[];
}

export default function AdditionalProjects() {
  const { ref, isVisible } = useScrollAnimation({ once: true });
  const projects: ProjectItem[] = [
    {
      title: "Pipexe",
      subtitle: "Real-time oil pipeline asset monitoring and telemetry platform",
      category: "Additional Project",
      kpis: [
        "SCALABLE DATA STORAGE DESIGNED",
        "STAKEHOLDER DASHBOARDS DELIVERED"
      ],
      bullets: [
        "Engineered a real-time data infrastructure platform for monitoring, inspecting, and managing oil pipeline assets — processing large, unstructured geographic datasets into structured formats for operational use.",
        "Delivered stakeholder dashboards translating raw infrastructure data into actionable KPIs for maintenance planning, anomaly alerts, and compliance reporting."
      ],
      tech: ["PostgreSQL", "Node.js", "GIS", "WebSockets"]
    },
    {
      title: "stayIn",
      subtitle: "Apartment allocation and reservation management engine",
      category: "Additional Project",
      kpis: [
        "HEURISTIC ALLOCATION SYSTEM",
        "BOOKINGS & AVAILABILITY MATRIX"
      ],
      bullets: [
        "Designed a web application for managing apartment allocations and reservations, building a recommendation system to suggest optimal apartment allocations and creating interactive dashboards to visualize allocations, bookings, and availability.",
        "Focused on improving operational efficiency and user experience while ensuring scalable and performant presentation of insights for property management stakeholders."
      ],
      tech: ["React", "Node.js", "MongoDB", "Data Analysis"]
    }
  ];

  return (
    <section 
      ref={ref as any}
      id="additional-projects" 
      className={`w-full bg-[#FAFAFA] py-16 md:py-24 border-b border-border-gray reveal-on-scroll ${
        isVisible ? "revealed" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 text-left mb-12">
          <div className="inline-flex items-center gap-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#737373]">COMPLEMENTARY WORK</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]"></span>
            <div className="h-[1px] w-8 bg-border-gray"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink-black tracking-tight">
            Additional Projects
          </h2>
          <p className="text-xs sm:text-sm text-muted-text max-w-xl leading-relaxed">
            A collection of geospatial data platforms, heuristic scheduling allocators, and customized backend logic built to solve specific technical problems.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div 
              key={idx}
              className="bg-white border border-border-gray rounded-[14px] p-6 flex flex-col justify-between text-left"
            >
              <div>
                {/* Meta Category */}
                <div className="flex items-center gap-1.5 text-xs text-accent-blue font-extrabold tracking-wider uppercase mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse"></span>
                  {proj.category}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-ink-black tracking-tight mb-1.5 leading-snug">{proj.title}</h3>
                <p className="text-xs sm:text-sm text-muted-text mb-5 leading-normal">{proj.subtitle}</p>

                {/* Vertical KPI badges matching the photo layout exactly */}
                <div className="flex flex-col gap-2 mb-6">
                  {proj.kpis.map((kpi, kIdx) => (
                    <div 
                      key={kIdx}
                      className="inline-flex items-center gap-2 bg-white border border-[#E7E7E7] text-[10px] sm:text-[11px] font-extrabold text-[#0A0A0A] px-3.5 py-1.5 rounded-full uppercase tracking-wider w-fit"
                    >
                      <TrendingUp className="w-3.5 h-3.5 text-[#F5A623]" />
                      {kpi}
                    </div>
                  ))}
                </div>

                {/* Brief Narrative Bullets */}
                <ul className="list-disc pl-4 space-y-3.5 mb-6 text-xs sm:text-sm text-muted-text leading-relaxed">
                  {proj.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="pl-1">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider & Plain Tech Tags matching the photo layout exactly */}
              <div className="border-t border-[#E7E7E7] pt-4 mt-auto">
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-muted-text">
                  {proj.tech.map((t, tIdx) => (
                    <span key={tIdx}>
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
