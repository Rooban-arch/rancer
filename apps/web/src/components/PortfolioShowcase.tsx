'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { initialProjects } from '@rancer/shared-data';
import { ArrowRight, Sparkles, ExternalLink, ArrowUpRight } from 'lucide-react';

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

export default function PortfolioShowcase() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return initialProjects;
    return initialProjects.filter((p) => {
      const cat = p.category.toLowerCase();
      const target = activeFilter.toLowerCase();
      if (target === 'ai' && (cat.includes('ai') || p.technologies.some(t => t.toLowerCase().includes('ai') || t.toLowerCase().includes('openai')))) return true;
      if (target === 'automation' && (cat.includes('automation') || cat.includes('management'))) return true;
      if (target === 'web apps' && (cat.includes('web apps') || cat.includes('web & mobile'))) return true;
      if (target === 'mobile apps' && (cat.includes('mobile') || p.technologies.includes('Flutter'))) return true;
      return cat.includes(target);
    });
  }, [activeFilter]);

  return (
    <section className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              OUR WORK
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
              Ideas to Real Results
            </h2>
            <p className="text-base text-slate-600 mt-3 font-normal">
              Explore some of our recent projects and see how we’ve helped businesses grow
              with transformative design and custom engineering.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-blue-600 uppercase tracking-wider transition group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Category Filters Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {FILTER_CATEGORIES.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-blue-400 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Image Frame */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Category Pill Over Image */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-slate-900 shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Top Right Arrow */}
                  <Link
                    href={`/portfolio/${project.slug}`}
                    aria-label={`View ${project.title} case study`}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 group-hover:scale-110"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider block mb-1">
                    Client: {project.client}
                  </span>
                  <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4 font-normal">
                    {project.shortDescription}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
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

              {/* Bottom Case Study Link */}
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

      </div>
    </section>
  );
}
