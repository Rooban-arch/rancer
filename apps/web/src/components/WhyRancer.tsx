'use client';

import React from 'react';
import Link from 'next/link';
import {
  Target,
  Cpu,
  Code2,
  MessageSquare,
  Maximize2,
  Headphones,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { initialSiteSettings } from '@rancer/shared-data';

export default function WhyRancer() {
  const benefits = [
    {
      title: 'Business-Focused Solutions',
      desc: 'We don’t just write code; we solve real commercial bottlenecks to drive customer acquisition, retention, and bottom-line profit.',
      icon: Target,
      highlight: 'ROI Driven'
    },
    {
      title: 'Modern Technology',
      desc: 'Built with Next.js, Flutter, TypeScript, and state-of-the-art AI infrastructure for blazing speed, ironclad security, and future-proof scaling.',
      icon: Cpu,
      highlight: 'High Performance'
    },
    {
      title: 'Custom Development',
      desc: 'Zero generic templates or one-size-fits-all compromises. Every single architecture is handcrafted to match your unique operational model.',
      icon: Code2,
      highlight: 'Bespoke'
    },
    {
      title: 'Transparent Communication',
      desc: 'Direct access to senior engineers and architects with weekly sprint reviews, clear milestone deliverables, and zero technical jargon.',
      icon: MessageSquare,
      highlight: 'Direct Contact'
    },
    {
      title: 'Scalable Architecture',
      desc: 'Modular cloud architecture that easily handles 10x traffic spikes, multi-tenant databases, and enterprise security compliance.',
      icon: Maximize2,
      highlight: 'Enterprise Grade'
    },
    {
      title: 'Long-Term Support',
      desc: 'We partner with you as an extension of your company, offering continuous feature enhancements, security patches, and SLA uptime.',
      icon: Headphones,
      highlight: 'Growth Partner'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Stats Bar - Normal Dark Navy & White */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white mb-20 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            <div>
              <p className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-1">
                {initialSiteSettings.stats.clients}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Happy Clients
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-1">
                {initialSiteSettings.stats.projects}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Projects Delivered
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-1">
                {initialSiteSettings.stats.experience}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Years Experience
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-1">
                {initialSiteSettings.stats.satisfaction}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3 border border-slate-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            THE RANCER ADVANTAGE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
            Why Modern Businesses Choose Rancer
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We combine engineering excellence, visual distinction, and commercial thinking
            to build digital solutions that create real impact.
          </p>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={i}
                className="group bg-slate-50/80 hover:bg-white rounded-3xl p-7 border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-600 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      {benefit.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {benefit.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200 flex items-center text-xs font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                  <CheckCircle className="w-3.5 h-3.5 mr-1.5 text-blue-600" />
                  <span>Guaranteed Standards</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
