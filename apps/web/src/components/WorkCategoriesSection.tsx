'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { initialWorkCategories } from '@rancer/shared-data';
import {
  Globe,
  Smartphone,
  BrainCircuit,
  Cpu,
  Palette,
  TrendingUp,
  ArrowRight,
  Layers,
  Check
} from 'lucide-react';

export default function WorkCategoriesSection() {
  const [activeCategory, setActiveCategory] = useState<string>(initialWorkCategories[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-600" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-blue-700" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-blue-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-slate-700" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-slate-800" />;
      case 'TrendingUp':
      default:
        return <TrendingUp className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200/60">
            <Layers className="w-3.5 h-3.5" />
            OUR WORK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
            What We Build
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Explore the different types of digital solutions we create for businesses.
            Each category represents a battle-tested specialty delivered with surgical precision.
          </p>
        </div>

        {/* 6 Work Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initialWorkCategories.map((category) => (
            <div
              key={category.id}
              className="group bg-gradient-to-b from-white to-slate-50/70 rounded-3xl p-8 border border-slate-200/80 hover:border-blue-400 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Stats */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(category.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/50">
                    {category.stats}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  {category.subtitle}
                </span>
                <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-3">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Subcategories Tags */}
                <div className="space-y-2 mb-6">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Specialized Delivery:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {category.subcategories.map((sub, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700"
                      >
                        <Check className="w-3 h-3 text-blue-600 mr-1" />
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link to Portfolio filtered */}
              <Link
                href={`/portfolio?category=${encodeURIComponent(category.title)}`}
                className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-200/80 text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors"
              >
                <span>View {category.title} Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Dedicated "Our Work" Page Link */}
        <div className="mt-14 text-center">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-200"
          >
            <span>Explore Complete &ldquo;What We Build&rdquo; Showcase</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
