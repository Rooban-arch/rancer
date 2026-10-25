import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-lg space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto border border-blue-100 shadow-sm">
          <Sparkles className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-600 block">
          404 — PAGE NOT FOUND
        </span>

        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
          Lost in Digital Space
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          The page or case study you are looking for has been moved or doesn’t exist.
          Let’s get you back on track to building something great.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs tracking-wider uppercase transition shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
          >
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
