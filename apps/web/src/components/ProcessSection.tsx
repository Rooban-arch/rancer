'use client';

import React from 'react';
import { Search, PenTool, Code2, Rocket, ArrowRight, Sparkles } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      step: '01',
      title: 'Discover',
      tagline: 'Understand & Strategize',
      desc: 'Understand your goals, audience and challenges. We conduct in-depth discovery sessions, competitor audits, and user personas to construct an ironclad strategy.',
      icon: Search
    },
    {
      step: '02',
      title: 'Design',
      tagline: 'Architect & Prototype',
      desc: 'Create a plan and design that fits your needs. We build interactive Figma wireframes, high-fidelity prototypes, and sleek design systems with real feedback loops.',
      icon: PenTool
    },
    {
      step: '03',
      title: 'Develop',
      tagline: 'Engineer & Refine',
      desc: 'Build, test and refine with the latest technology. We write clean, high-performance modular code, implement automated test suites, and integrate robust APIs.',
      icon: Code2
    },
    {
      step: '04',
      title: 'Launch & Grow',
      tagline: 'Deploy & Optimize',
      desc: 'Go live and keep supporting your success. We handle zero-downtime deployment, monitor analytics, optimize conversion rates, and provide continuous technical scaling.',
      icon: Rocket
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0A0E1A] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            HOW WE WORK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            From Idea to Impact
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            We follow a clear, collaborative and result-driven process to bring your vision to life.
            No confusion, no delays — just smooth progress.
          </p>
        </div>

        {/* 4 Process Steps with Connecting Line */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-px bg-slate-800 -translate-y-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="relative group bg-slate-900 border border-slate-800 rounded-3xl p-7 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div>
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-3xl font-black text-slate-600 group-hover:text-blue-400 transition-colors">
                        {item.step}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title & Tagline */}
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 block mb-1">
                      {item.tagline}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Step status bar */}
                  <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Phase 0{index + 1}</span>
                    <span className="text-slate-400 group-hover:text-blue-400 font-semibold flex items-center gap-1 transition-colors">
                      Verified Milestone <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
