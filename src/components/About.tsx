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
              
              {/* Profile Photo Image */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 bg-white border border-border-gray rounded-[14px] overflow-hidden flex flex-col justify-center items-center p-2">
                <img
                  src="/images/about-profile.png"
                  alt="Mohamed Islam Benchaiba"
                  className="w-full h-full object-contain rounded-[10px]"
                />
                
                {/* Location indicator */}
                <div className="absolute bottom-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-border-gray px-3 py-1.5 rounded-full shadow-sm">
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
                I’m a Full-Stack Data Analyst with a software engineering background, combining analytics, data modeling, visualization, and automation to transform raw data into clear business insights. I build end-to-end solutions that are both analytically useful and technically reliable.
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
