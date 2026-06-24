"use client";

import React from "react";
import { MapPin, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation({ once: true });

  return (
    <section 
      ref={ref as any}
      id="about" 
      className={`w-full bg-section-gray py-16 md:py-24 border-b border-border-gray reveal-on-scroll ${
        isVisible ? "revealed" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Photo Placeholder */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start reveal-slide-left">
            <div className="relative group">
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 rounded-[18px] border border-border-gray bg-white/50 scale-95 group-hover:scale-100 transition-all duration-300"></div>
              
              {/* Profile Photo Placeholder */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 bg-white border border-border-gray rounded-[14px] overflow-hidden flex flex-col justify-center items-center p-4">
                {/* Minimal graphic pattern representing data structure */}
                <div className="absolute inset-0 opacity-[0.02] flex flex-wrap gap-2 p-3 overflow-hidden select-none pointer-events-none">
                  {Array.from({ length: 144 }).map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-ink-black"></div>
                  ))}
                </div>
                
                {/* Content */}
                <div className="w-20 h-20 rounded-full bg-section-gray border border-border-gray flex items-center justify-center mb-4 z-10">
                  <span className="text-xl font-extrabold text-ink-black">MI</span>
                </div>
                <div className="text-center z-10">
                  <h3 className="text-sm font-bold text-ink-black">Mohamed Islam Benchaiba</h3>
                  <p className="text-[11px] text-muted-text uppercase tracking-widest mt-1">Data Analyst & Analytics Engineer</p>
                </div>

                {/* Location indicator */}
                <div className="absolute bottom-4 flex items-center gap-1.5 bg-section-gray border border-border-gray px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-accent-blue pulse-indicator"></span>
                  <span className="text-[10px] font-bold text-ink-black tracking-wide flex items-center gap-0.5">
                    ALGERIA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="lg:col-span-8 flex flex-col gap-6 text-left reveal-slide-right">
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-muted-text">About Me</span>
              <div className="h-px w-8 bg-border-gray"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-ink-black tracking-tight leading-tight">
              Software engineer by training, <br className="hidden md:inline" />
              <span className="text-muted-text">data analyst by practice.</span>
            </h2>

            <div className="text-sm md:text-base text-muted-text space-y-4 max-w-2xl leading-relaxed">
              <p>
                With a background in software engineering, I specialize in engineering complete, end-to-end data systems. Rather than just analyzing isolated worksheets, I focus on the entire pipeline lifecycle: connecting complex source systems, developing resilient ETL/ELT pipelines, modeling data schemas for optimized performance, and crafting dashboards that drive action.
              </p>
              <p>
                Whether standardizing mismatched transactions across databases, configuring real-time streaming pipelines, or building robust DAX calculations in Power BI, I bridge the gap between technical infrastructure and strategic decision-making. My work is focused on transparency, precision, and delivering clear margin-improving opportunities.
              </p>
            </div>

            {/* Currently info card */}
            <div className="mt-4 flex flex-col sm:flex-row gap-6 border-t border-border-gray pt-6">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-text">Currently</span>
                <span className="text-xs font-semibold text-ink-black flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-muted-text" />
                  Ichemoul, Batna, Algeria
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-text">Available For</span>
                <span className="text-xs font-semibold text-ink-black flex items-center gap-1">
                  Remote Contracts & Full-time Positions
                  <ArrowUpRight className="w-3 h-3 text-accent-blue" />
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
