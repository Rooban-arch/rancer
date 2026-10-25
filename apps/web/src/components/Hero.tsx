'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Smartphone,
  Globe,
  Layers,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only track mouse movement for parallax on devices with a fine pointer (mouse/trackpad) on desktop screens
    // Avoids wakeups and touch jank on Android/iOS mobile devices
    if (typeof window === 'undefined') return;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer || window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative pt-6 pb-20 md:pt-12 md:pb-28 lg:pt-16 lg:pb-32 overflow-hidden bg-white">
      {/* Subtle background ambient accents in normal corporate tones */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[550px] h-[550px] bg-slate-100/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[450px] h-[450px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small Badge: Your Growth Partner */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 shadow-xs text-xs font-semibold text-slate-800">
              <span className="h-2 w-2 rounded-full bg-blue-600 inline-block" />
              <span className="flex items-center gap-1.5 font-bold text-slate-900">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Your Growth Partner
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              We Build Digital Solutions for{' '}
              <span className="gradient-text font-black inline-block">
                Modern Businesses.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              From stunning websites to smart automation, we help businesses turn ideas into powerful digital experiences.
              Let’s build, grow and make an impact — together.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-blue-600 shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition-all duration-200"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>


          </div>

          {/* Right Column: Premium Workspace & Product Mockup with Parallax */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 0.4}deg) rotateX(${-mousePos.y * 0.4}deg)`
              }}
            >
              {/* Main Workspace Frame */}
              <div className="relative rounded-3xl p-4 sm:p-6 bg-white border border-slate-200 shadow-xl">
                
                {/* Top Desktop Bar */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-slate-300 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-slate-300 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-slate-300 inline-block" />
                  </div>
                  <div className="px-3 py-1 bg-slate-50 rounded-full border border-slate-200 text-[11px] font-semibold text-slate-600 flex items-center gap-1.5">
                    <Globe className="w-3 h-3 text-blue-600" />
                    https://dashboard.rancer.in
                  </div>
                  <div className="w-6" />
                </div>

                {/* Simulated Laptop Dashboard Screen - Clean Modern Corporate SaaS */}
                <div className="bg-slate-900 rounded-2xl p-4 sm:p-5 text-white shadow-inner border border-slate-800 relative overflow-hidden">
                  
                  {/* Header in Dashboard */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center font-bold text-xs text-white">
                        R
                      </div>
                      <span className="text-xs font-bold text-white tracking-tight">Growth Command</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px] font-medium flex items-center gap-1.5 border border-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      Live Systems
                    </span>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2.5 mb-4">
                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <div className="flex items-center justify-between text-slate-400 text-[10px]">
                        <span>Conversion Rate</span>
                        <TrendingUp className="w-3 h-3 text-blue-400" />
                      </div>
                      <p className="text-lg font-bold text-white mt-1">+248%</p>
                      <p className="text-[10px] text-slate-400 font-medium">Verified Growth</p>
                    </div>

                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <div className="flex items-center justify-between text-slate-400 text-[10px]">
                        <span>Automated Tasks</span>
                        <Zap className="w-3 h-3 text-slate-400" />
                      </div>
                      <p className="text-lg font-bold text-white mt-1">48,920</p>
                      <p className="text-[10px] text-slate-400 font-medium">Zero Manual Latency</p>
                    </div>
                  </div>

                  {/* Visual Chart Wave in normal corporate blue/slate */}
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <div className="flex items-center justify-between text-[11px] mb-2">
                      <span className="text-slate-300 font-semibold">Business Growth Velocity</span>
                      <span className="text-slate-400 text-[10px] font-mono">Q4 Metrics</span>
                    </div>
                    <div className="h-16 flex items-end gap-1.5 pt-2">
                      {[35, 48, 42, 60, 52, 75, 68, 88, 92, 100].map((val, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div
                            style={{ height: `${val}%` }}
                            className={`w-full rounded-t transition-all duration-300 ${
                              i >= 7 ? 'bg-blue-600' : 'bg-slate-800 hover:bg-slate-700'
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desk Elements: Coffee cup, Plant, Phone */}
                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                  {/* Potted Plant Visual Element */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">🪴</span>
                    <span className="text-[11px] font-medium text-slate-500">Design Studio</span>
                  </div>

                  {/* Coffee Cup Visual */}
                  <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                    <span className="text-base">☕</span>
                    <span className="text-[10px] font-bold text-slate-700">Digital Solutions</span>
                  </div>

                  {/* Mobile Phone Mockup Indicator */}
                  <div className="flex items-center gap-1 bg-slate-900 text-white px-2.5 py-1 rounded-lg text-[10px] font-medium">
                    <Smartphone className="w-3 h-3 text-slate-300" />
                    <span>Mobile App Sync</span>
                  </div>
                </div>
              </div>

              {/* Floating Technology Badges - Normal Clean Corporate Design */}
              {/* Badge 1: Web */}
              <div
                className="absolute -top-3 -left-3 sm:-left-5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-md text-xs font-bold text-slate-800 flex items-center gap-2 animate-float-slow"
              >
                <div className="p-1 rounded-lg bg-blue-50 text-blue-600">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <span>Web Platforms</span>
              </div>

              {/* Badge 2: Mobile */}
              <div
                className="absolute top-1/4 -right-3 sm:-right-6 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-md text-xs font-bold text-slate-800 flex items-center gap-2 animate-float-reverse"
              >
                <div className="p-1 rounded-lg bg-slate-100 text-slate-700">
                  <Smartphone className="w-3.5 h-3.5" />
                </div>
                <span>iOS & Android</span>
              </div>

              {/* Badge 3: AI Solutions */}
              <div
                className="absolute bottom-16 -left-4 sm:-left-6 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-md text-xs font-bold text-slate-800 flex items-center gap-2 animate-float-slow"
              >
                <div className="p-1 rounded-lg bg-slate-100 text-blue-600">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <span>AI Automation</span>
              </div>

              {/* Handwritten-Style Message Pill - Normal Navy & Slate */}
              <div
                className="absolute -bottom-5 right-2 sm:right-6 px-4 py-2.5 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-lg text-xs font-medium flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="italic font-serif text-[13px] text-slate-100">
                  More than just services — we’re your growth partner.
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
