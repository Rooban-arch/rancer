'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { initialProjects } from '@rancer/shared-data';
import CTASection from '@/components/CTASection';
import { Sparkles, ArrowRight, ArrowUpRight, Search, Filter } from 'lucide-react';

const FILTER_CATEGORIES = [
  'All',
  'Websites',
  'Web Apps',
  'Mobile Apps',
  'AI',
  'Automation',
  'Branding',
  'Marketing'
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((p) => {
      // Category match
      const cat = p.category.toLowerCase();
      const target = activeFilter.toLowerCase();
      let matchesFilter = true;

      if (activeFilter !== 'All') {
        if (target === 'ai') {
          matchesFilter = cat.includes('ai') || p.technologies.some(t => t.toLowerCase().includes('ai') || t.toLowerCase().includes('openai'));
        } else if (target === 'automation') {
          matchesFilter = cat.includes('automation') || cat.includes('management');
        } else if (target === 'web apps') {
          matchesFilter = cat.includes('web apps') || cat.includes('web & mobile');
        } else if (target === 'mobile apps') {
          matchesFilter = cat.includes('mobile') || p.technologies.includes('Flutter');
        } else {
          matchesFilter = cat.includes(target);
        }
      }

      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q)) ||
        p.client.toLowerCase().includes(q);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            PROVEN CLIENT IMPACT
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight mb-6">
            Our Work &{' '}
            <span className="gradient-text font-black">Case Studies.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Real problems transformed into high-velocity digital products.
            Explore detailed case studies detailing our architecture, design decisions, and measurable results.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-slate-50 border-b border-slate-200/80 sticky top-20 z-30 backdrop-blur-md bg-slate-50/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {FILTER_CATEGORIES.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    activeFilter === filter
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* In-page Search */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects or stack..."
                className="w-full pl-9 pr-4 py-2 bg-white rounded-full border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-blue-400 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Frame */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 backdrop-blur-md text-slate-900 shadow-sm">
                        {project.category}
                      </span>
                    </div>

                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white flex items-center justify-center backdrop-blur-md transition group-hover:scale-110"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider block mb-1">
                      {project.client} • {project.year}
                    </span>
                    <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                      {project.shortDescription}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="w-full inline-flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-blue-600 py-2 border-t border-slate-100 transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <h3 className="text-xl font-bold text-slate-800">No matching projects found</h3>
            <p className="text-sm text-slate-500 mt-2">
              Try adjusting your filter or search query.
            </p>
            <button
              onClick={() => {
                setActiveFilter('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      <CTASection />
    </div>
  );
}
