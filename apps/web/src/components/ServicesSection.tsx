'use client';

import React from 'react';
import Link from 'next/link';
import { initialServices } from '@rancer/shared-data';
import ServiceCard from './ServiceCard';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50/60 border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Our Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
            Complete Digital Solutions for Your Business
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We offer end-to-end services to help you build, automate and scale your business
            with modern technology and creative solutions.
          </p>
        </div>

        {/* Service Cards Grid (2x3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500 mb-3">
            Need a tailored enterprise combination or custom technical architecture?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline"
          >
            <span>Talk to an Architect for Free</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
