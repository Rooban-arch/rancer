import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { initialWorkCategories, initialProjects } from '@rancer/shared-data';
import CTASection from '@/components/CTASection';
import {
  Layers,
  ArrowRight,
  Globe,
  Smartphone,
  BrainCircuit,
  Cpu,
  Palette,
  TrendingUp,
  Check,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'What We Build — Digital Categories & Solutions | Rancer',
  description:
    'Explore the specialized digital solution categories engineered by Rancer: high-performance websites, cross-platform web and mobile apps, AI automation systems, and brand identities.',
};

export default function OurWorkPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-blue-600" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-blue-700" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-blue-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-slate-700" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-slate-800" />;
      case 'TrendingUp':
      default:
        return <TrendingUp className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200/60">
            <Layers className="w-3.5 h-3.5" />
            OUR WORK
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight mb-6">
            What We Build for{' '}
            <span className="gradient-text font-black">Modern Enterprises.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore the different types of digital solutions we engineer for businesses.
            From high-conversion e-commerce portals to autonomous AI assistants.
          </p>
        </div>
      </section>

      {/* Main Categories Display */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {initialWorkCategories.map((category, index) => {
            const isEven = index % 2 === 0;
            // Get sample projects for this category
            const categoryProjects = initialProjects.filter(
              (p) =>
                p.category.toLowerCase().includes(category.title.toLowerCase().split(' ')[0]) ||
                p.categorySlug === category.slug
            );

            return (
              <div
                key={category.id}
                id={category.slug}
                className="bg-slate-50/70 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Category Info (7 cols) */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                        {getIcon(category.icon)}
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                          Category 0{index + 1}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          {category.stats}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-3">
                      {category.title}
                    </h2>
                    <p className="text-base text-slate-600 leading-relaxed mb-6">
                      {category.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Tailored Solutions Included:
                      </h4>
                      <div className="grid grid-cols-2 gap-2.5">
                        {category.subcategories.map((sub, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-700"
                          >
                            <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                            <span>{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/portfolio?category=${encodeURIComponent(category.title)}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs tracking-wider uppercase transition shadow-sm"
                    >
                      <span>Explore Case Studies in {category.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Sample Mockup Preview (5 cols) */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
                      {categoryProjects[0] ? (
                        <>
                          <Image
                            src={categoryProjects[0].heroImage}
                            alt={categoryProjects[0].title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                              Featured Example
                            </span>
                            <h4 className="text-base font-bold mt-0.5">
                              {categoryProjects[0].title}
                            </h4>
                            <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                              {categoryProjects[0].shortDescription}
                            </p>
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white/50 text-sm">
                          Preview Showcase
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
