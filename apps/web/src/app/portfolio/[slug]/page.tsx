import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { initialProjects } from '@rancer/shared-data';
import CTASection from '@/components/CTASection';
import {
  ChevronRight,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Star,
  Quote,
  Layers,
  Code2,
  ArrowUpRight
} from 'lucide-react';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return initialProjects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = initialProjects.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — Case Study | Rancer`,
    description: project.shortDescription,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const project = initialProjects.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }

  // Related projects
  const relatedProjects = initialProjects
    .filter((p) => p.id !== project.id)
    .slice(0, 2);

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/portfolio" className="hover:text-blue-600 transition">Portfolio</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-800">{project.title}</span>
          </nav>
        </div>
      </div>

      {/* Case Study Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs font-semibold text-slate-400">•</span>
              <span className="text-xs font-semibold text-slate-600">Client: {project.client}</span>
              <span className="text-xs font-semibold text-slate-400">•</span>
              <span className="text-xs font-semibold text-slate-600">{project.year}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              {project.shortDescription}
            </p>
          </div>

          {/* Results Metric Banner */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl">
            {project.results.map((res, i) => (
              <div key={i} className="text-center sm:text-left border-b sm:border-b-0 sm:border-r border-slate-800 last:border-none pb-4 sm:pb-0">
                <span className="text-3xl sm:text-4xl font-display font-black text-blue-400 block mb-1">
                  {res.metric}
                </span>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  {res.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image Showcase */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[400px] sm:h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Problem & Solution Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Problem */}
          <div className="bg-rose-50/50 rounded-3xl p-8 sm:p-10 border border-rose-100">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-2">
              The Challenge
            </span>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
              Problem Statement
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="bg-blue-50/50 rounded-3xl p-8 sm:p-10 border border-blue-100">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Our Approach
            </span>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
              The Solution
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Features & Technologies */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">
                Key Features Delivered
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feat, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-medium leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-white text-slate-800 text-xs font-semibold border border-slate-200 shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Design Process */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Execution Sprints
              </h3>
              <div className="space-y-3">
                {project.designProcess.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200">
                    <h4 className="text-xs font-bold text-slate-900 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Screenshots */}
      {project.galleryImages.length > 0 && (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900">
              Project Visual Showcase
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative h-80 rounded-3xl overflow-hidden shadow-lg border border-slate-200"
              >
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Client Testimonial */}
      {project.testimonial && (
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <Quote className="w-10 h-10 text-blue-500/40 mb-4" />
            <p className="text-lg sm:text-xl font-serif italic leading-relaxed mb-6">
              &ldquo;{project.testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue-500">
                <Image
                  src={project.testimonial.avatar}
                  alt={project.testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold">{project.testimonial.author}</h4>
                <p className="text-xs text-slate-400">{project.testimonial.role}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-display font-bold text-slate-900">
              Explore More Case Studies
            </h2>
            <Link
              href="/portfolio"
              className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((p) => (
              <Link
                key={p.id}
                href={`/portfolio/${p.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition"
              >
                <div className="relative h-48 w-full">
                  <Image src={p.heroImage} alt={p.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-bold text-blue-600 uppercase">
                    {p.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition mt-1">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                    {p.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
