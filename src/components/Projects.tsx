"use client";

import React, { useState, useEffect } from "react";
import { ExternalLink, X, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  kpis: string[];
  narrative: string;
  problem: string;
  approach: string;
  result: string;
  tech: string[];
  github: string;
  coverImage: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Meta Ad Performance Analysis",
    subtitle: "End-to-end Meta (Facebook & Instagram) ad performance dashboard",
    kpis: [
      "339.8K impressions analyzed",
      "12 DAX KPIs engineered",
      "10+ interactive visuals",
      "2.54M budget tracked"
    ],
    narrative: "Cleaned a multi-table database to engineer direct-funnel visualizations tracking marketing efficiency from impression to customer conversion.",
    problem: "Marketing spend data was highly fragmented across different ad groups, ad units, and campaign categories. Inconsistent classifications and missing timezone offsets prevented the team from accurately determining daily ad spend efficiency (ROAS) and click-through funnel leakage.",
    approach: "Built a robust star-schema relational model inside Power BI connecting facts (ad events, budget expenditures) and dimensions (campaigns, user demographics, platforms). Extensively cleaned data to enforce referential integrity and standard timezone offsets. Engineered 12 custom DAX measures including conversion, CTR, and platform-specific acquisition rates. Created interactive funnels, calendar heatmaps, and scatter plots comparing performance against budget limits.",
    result: "Discovered that while Instagram achieved a higher overall click-through rate, Facebook converted 2x more purchases. Recommended shifting budget allocation to a 60/40 Facebook-dominant split, alongside adopting platform-tailored ad creatives, which optimized total marketing ROI.",
    tech: ["Power BI", "DAX", "Data Modeling", "Star Schema", "Data Cleaning"],
    github: "https://github.com/islabenchaiba15/Meta-Ad-Performance-Analysis",
    coverImage: "/images/meta-ad-performance.jpg"
  },
  {
    id: 2,
    title: "Sales Intelligence",
    subtitle: "Medallion analytics engineering pipeline on a multi-country retail dataset",
    kpis: [
      "$29.4M revenue analyzed",
      "60,407 transactions",
      "Bronze→Silver→Gold pipeline",
      "52.5% blended margin"
    ],
    narrative: "Transformed CRM and ERP tables into a star-schema SQL Server warehouse, highlighting hidden margin deficiencies.",
    problem: "The sales division lacked unified reporting across six international markets, suffering from duplicate products, irregular country fields, and disjointed CRM-to-ERP joins. Executive decisions were slowed by slow-loading, manually compiled Excel spreadsheets.",
    approach: "Designed and engineered an automated Medallion Architecture data warehouse. Sourced raw database tables from PostgreSQL, routing them to a SQL Server staging zone. Extensively resolved data mismatches, deduplicated product records, and standardized geographic values. Modeled a clean dimensions-and-facts star schema using Gold warehouse views, then established direct-query reporting pipelines into Power BI.",
    result: "Surfaced a critical margin paradox: Bikes accounted for 96.5% of total revenue but yielded only 38.8% margin, while Accessories yielded 61.9% margin. Also flagged an $8.6M revenue risk on discontinued lines, driving immediate pricing restructuring recommendations.",
    tech: ["SQL Server", "PostgreSQL", "ETL", "Medallion Architecture", "Power BI", "DAX"],
    github: "https://github.com/islabenchaiba15/bike-store-analysis",
    coverImage: "/images/sales-intelligence.jpg"
  },
  {
    id: 3,
    title: "QuickEats SaaS Analytics Pipeline",
    subtitle: "Production-style streaming pipeline and dual dashboard suite for a food-delivery SaaS",
    kpis: [
      "100K orders processed",
      "$15.02M revenue tracked",
      "Kafka → S3 → dbt → Airflow",
      "2 executive dashboards"
    ],
    narrative: "Engineered a streaming analytics infrastructure using Medallion dbt models and Kafka to isolate churn triggers.",
    problem: "A high-growth food delivery SaaS was suffering from rapid churn and delayed delivery times, but log events were locked in raw streaming formats. Management lacked the real-time visibility required to optimize driver routing or subscription tiers.",
    approach: "Architected an end-to-end streaming data pipeline. Set up Apache Kafka to ingest orders and customer data, dumping raw logs into an AWS S3 bucket. Configured an Apache Airflow DAG to orchestrate transformation schedules, using dbt to execute incremental medallion transformations. Surface operational metrics in dual Power BI dashboards (Revenue & Operations and SaaS Subscription tracking).",
    result: "Identified a massive 95% MRR decline in premium tiers triggered by cross-tier restaurant churn, paired with a 35% non-completion rate on late orders. This mapped out a clear $676K/year recovery roadmap through improved dispatcher routing and tier benefits.",
    tech: ["Apache Kafka", "dbt", "Apache Airflow", "AWS S3", "Power BI", "SQL"],
    github: "https://github.com/islabenchaiba15/food-delevery",
    coverImage: "/images/quickeats-pipeline.jpg"
  }
];

// Custom Inline SVG Github Icon to prevent build errors
const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
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
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, isVisible } = useScrollAnimation({ once: true });

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <section 
      ref={ref as any}
      id="projects" 
      className={`w-full bg-white py-16 md:py-24 border-b border-border-gray reveal-on-scroll ${
        isVisible ? "revealed" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 text-left mb-12">
          <div className="inline-flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-muted-text">Portfolio</span>
            <div className="h-px w-8 bg-border-gray"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink-black tracking-tight">
            Selected Work
          </h2>
          <p className="text-sm text-muted-text max-w-xl">
            Real data problems solved with professional pipelines, analytics engineering, and interactive reporting.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id}
              className="bg-section-gray border border-border-gray rounded-[14px] overflow-hidden hover:border-ink-black/20 hover:scale-[1.01] transition-all duration-200 flex flex-col justify-between reveal-slide-up"
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
            >
              {/* Card Cover Image */}
              <div className="w-full h-48 overflow-hidden relative border-b border-border-gray bg-section-gray">
                <img 
                  src={project.coverImage} 
                  alt={`${project.title} Dashboard`} 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  {/* Meta details */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-1.5 text-xs text-accent-blue font-bold tracking-wider uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>
                        Case Study
                      </div>
                      <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                        project.id === 1 
                          ? "bg-green-500/10 text-status-green border-status-green/20" 
                          : "bg-[#737373]/10 text-muted-text border-border-gray"
                      }`}>
                        {project.id === 1 ? "Real Data" : "Simulated Data"}
                      </span>
                    </div>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full hover:bg-white border border-transparent hover:border-border-gray text-muted-text hover:text-ink-black transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GithubIcon className="w-4.5 h-4.5" />
                    </a>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-ink-black tracking-tight mb-1">{project.title}</h3>
                  <p className="text-xs text-muted-text mb-4 leading-normal">{project.subtitle}</p>

                  {/* KPI chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.kpis.map((kpi, kIdx) => (
                      <span 
                        key={kIdx}
                        className="inline-flex items-center gap-1 bg-white border border-border-gray text-[10px] font-bold text-ink-black px-2 py-1 rounded-full uppercase tracking-wider"
                      >
                        <TrendingUp className="w-3 h-3 text-accent-gold" />
                        {kpi}
                      </span>
                    ))}
                  </div>

                  {/* Brief Narrative */}
                  <p className="text-xs md:text-sm text-muted-text leading-relaxed mb-6">
                    {project.narrative}
                  </p>
                </div>

                {/* Action Buttons & Tech Tags */}
                <div className="flex flex-col gap-4 border-t border-border-gray pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t, tIdx) => (
                      <span key={tIdx} className="text-[10px] text-muted-text font-medium">
                        #{t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[10px] text-muted-text font-medium">+{project.tech.length - 3} more</span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="btn small flex-1 py-2.5 focus-ring text-xs font-semibold"
                    >
                      Read Case Study
                    </button>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn secondary small flex-1 py-2.5 focus-ring text-xs font-semibold flex items-center justify-center gap-1.5"
                    >
                      GitHub
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTAs */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/islabenchaiba15"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary px-6 py-3.5 text-xs font-bold tracking-wider uppercase focus-ring"
          >
            View all projects on GitHub
          </a>
        </div>

        {/* Case Study Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-black/60 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="bg-white rounded-[14px] border border-border-gray max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
              
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-border-gray px-6 py-4 bg-section-gray">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-accent-blue uppercase tracking-widest">Selected Case Study</span>
                    <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                      selectedProject.id === 1 
                        ? "bg-green-500/10 text-status-green border-status-green/20" 
                        : "bg-[#737373]/10 text-muted-text border-border-gray"
                    }`}>
                      {selectedProject.id === 1 ? "Real Data" : "Simulated Data"}
                    </span>
                  </div>
                  <h3 id="modal-title" className="text-base md:text-lg font-bold text-ink-black tracking-tight">{selectedProject.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-full hover:bg-white border border-transparent hover:border-border-gray text-muted-text hover:text-ink-black focus-ring"
                  aria-label="Close case study details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                
                {/* Modal Cover Image */}
                <div className="w-full h-56 md:h-64 overflow-hidden rounded-[10px] border border-border-gray relative bg-section-gray">
                  <img 
                    src={selectedProject.coverImage} 
                    alt={`${selectedProject.title} Dashboard detail`} 
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* KPIs Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-section-gray border border-border-gray p-4 rounded-[14px]">
                  {selectedProject.kpis.map((kpi, kIdx) => (
                    <div key={kIdx} className="flex flex-col text-left">
                      <span className="text-xs font-extrabold text-ink-black">{kpi.split(" ")[0]}</span>
                      <span className="text-[9px] text-muted-text uppercase tracking-wider mt-0.5 font-bold">
                        {kpi.split(" ").slice(1).join(" ")}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Segment: The Problem */}
                <div className="space-y-2 text-left">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-ink-black flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span>
                    The Problem
                  </h4>
                  <p className="text-xs md:text-sm text-muted-text leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Segment: The Approach */}
                <div className="space-y-2 text-left">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-ink-black flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>
                    The Approach
                  </h4>
                  <p className="text-xs md:text-sm text-muted-text leading-relaxed">
                    {selectedProject.approach}
                  </p>
                </div>

                {/* Segment: The Result */}
                <div className="space-y-2 text-left">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-ink-black flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-status-green"></span>
                    The Result
                  </h4>
                  <p className="text-xs md:text-sm text-muted-text leading-relaxed bg-status-green/5 border border-status-green/10 p-3.5 rounded-lg">
                    {selectedProject.result}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border-gray">
                  {selectedProject.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="bg-section-gray border border-border-gray text-ink-black text-[10px] font-semibold px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-end gap-3 border-t border-border-gray px-6 py-4 bg-section-gray">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="btn secondary small py-2.5 px-4 focus-ring"
                >
                  Close
                </button>
                <a 
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn small py-2.5 px-4 focus-ring flex items-center gap-1.5"
                >
                  View Code
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
