import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { initialServices, initialProjects } from '@rancer/shared-data';
import CTASection from '@/components/CTASection';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Layers,
  HelpCircle,
  Code2,
  Calendar
} from 'lucide-react';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return initialServices.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = initialServices.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | Rancer Digital Solutions`,
    description: service.fullDescription,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = initialServices.find((s) => s.slug === params.slug);
  if (!service) {
    notFound();
  }

  // Find related projects
  const relatedProjects = initialProjects.filter(
    (p) =>
      p.category.toLowerCase().includes(service.title.toLowerCase().split(' ')[0]) ||
      service.technologies.some((t) => p.technologies.includes(t))
  ).slice(0, 2);

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-800">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              {service.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              {service.title}
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {service.fullDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs tracking-wider uppercase shadow-md hover:shadow-glow transition-all duration-300 group"
              >
                <span>Request a Quote for {service.title}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#features"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
              >
                <span>View Features & Specs</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Deliverables Grid */}
      <section id="features" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Key Capabilities */}
          <div className="bg-slate-50/80 rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-2.5">
              <Layers className="w-6 h-6 text-blue-600" />
              <span>Core Capabilities</span>
            </h2>
            <ul className="space-y-4">
              {service.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium leading-relaxed">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* What You Get / Deliverables */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-2.5">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <span>What We Deliver</span>
            </h2>
            <ul className="space-y-4">
              {service.deliverables.map((deliv, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <span className="text-sm text-slate-700 font-medium leading-relaxed">
                    {deliv}
                  </span>
                </li>
              ))}
            </ul>

            {/* Tech Stack Pills */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Technologies & Tools:
              </p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">
              Our {service.title} Process
            </h2>
            <p className="text-sm text-slate-600">
              Clear sprint timelines, transparent checkpoints, and zero guesswork.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs"
              >
                <span className="text-3xl font-mono font-bold text-blue-600 block mb-2">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            FREQUENT QUESTIONS
          </div>
          <h2 className="text-3xl font-display font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {service.faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80"
            >
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
