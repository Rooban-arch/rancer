'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-slate-900 p-8 sm:p-14 lg:p-16 text-white shadow-2xl overflow-hidden border border-slate-800">
          
          {/* Subtle normal background accents */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-slate-800/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/50 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Ready to Scale Your Digital Impact?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight">
              Let’s Build Something <span className="text-blue-400 font-black">Great Together.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
              Whether you need a high-converting website, bespoke mobile application, or autonomous AI automation,
              our team brings senior engineering and strategic thinking to your vision.
            </p>

            {/* Action buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-slate-950 bg-white hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <Link
                href="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-all duration-200"
              >
                <span>Explore Case Studies</span>
              </Link>
            </div>

            {/* Trust points */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Guaranteed 24-hr response
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                Strict NDA & IP security
              </span>
              <span className="flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                Free technical consultation
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
