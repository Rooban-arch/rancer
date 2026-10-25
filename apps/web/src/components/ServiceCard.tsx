'use client';

import React from 'react';
import Link from 'next/link';
import {
  Globe,
  Smartphone,
  BrainCircuit,
  Cpu,
  Palette,
  TrendingUp,
  LayoutDashboard,
  Compass,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { ServiceItem } from '@rancer/shared-data';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  // Map icon strings to Lucide components
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
        return <TrendingUp className="w-6 h-6 text-blue-600" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-6 h-6 text-slate-700" />;
      case 'Compass':
      default:
        return <Compass className="w-6 h-6 text-blue-700" />;
    }
  };

  return (
    <div className="group relative bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-blue-400/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Subtle hover background soft light */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-40 h-40 bg-blue-50/60 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

      <div>
        {/* Top bar: Icon & Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-blue-50/60 transition-all duration-300">
            {getIcon(service.icon)}
          </div>
          <span className="px-3 py-1 rounded-full text-[11px] font-bold text-slate-500 bg-slate-100/90 group-hover:bg-blue-100/70 group-hover:text-blue-700 transition-colors">
            {service.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-5 font-normal">
          {service.shortDescription}
        </p>

        {/* Top 3 Features list */}
        <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
          {service.features.slice(0, 3).map((feat, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-slate-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
              <span className="line-clamp-1">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Action Link */}
      <Link
        href={`/services/${service.slug}`}
        className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors"
      >
        <span>Explore Service Details</span>
        <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
          <ArrowRight className="w-4 h-4" />
        </div>
      </Link>
    </div>
  );
}
