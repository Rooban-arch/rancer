import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { initialServices } from '@rancer/shared-data';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Complete Digital Services & Solutions | Rancer',
  description:
    'Explore Rancer’s end-to-end digital solutions: Website Development, Mobile & Web Applications, AI Automation, Branding & Design, Digital Marketing, and Business Management Systems.',
};

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Hero */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            END-TO-END CAPABILITIES
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight mb-6">
            Digital Solutions Engineered for{' '}
            <span className="gradient-text">Measurable Growth.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            We partner with businesses to architect, build, and optimize custom digital ecosystems.
            From conversion-focused websites to automated AI operations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Methodology Callout */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <Zap className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">Agile Delivery Sprints</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bi-weekly milestones with real-time test environments, keeping you in full control.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <ShieldCheck className="w-8 h-8 text-blue-700 mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">Enterprise Security</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bank-grade encryption, automated vulnerability scans, and strict data confidentiality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <Layers className="w-8 h-8 text-slate-700 mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">Continuous Scalability</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modern microservices designed to scale seamlessly from 1,000 to 1,000,000 active users.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
