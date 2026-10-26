import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { initialSiteSettings } from '@rancer/shared-data';
import CTASection from '@/components/CTASection';
import {
  Sparkles,
  Target,
  Compass,
  HeartHandshake,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Cpu,
  Layers
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Rancer — Story, Mission & Culture | Digital Growth Partner',
  description:
    'Learn how Rancer combines engineering rigor, creative brand design, and strategic business thinking to build high-impact digital solutions for modern businesses.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Obsessive Craftsmanship',
      desc: 'We never ship mediocre work. From micro-interactions and sub-second load speeds to clean modular architectures, we take immense pride in every pixel and commit.'
    },
    {
      title: 'Commercial Velocity',
      desc: 'Engineering exists to serve business outcomes. We focus relentlessly on conversion rates, automation efficiency, and enterprise scalability.'
    },
    {
      title: 'Uncompromising Transparency',
      desc: 'No hidden clauses, no evasive jargon, and no artificial delays. We work in the open with weekly sprint reviews and collaborative Slack channels.'
    },
    {
      title: 'Long-Term Partnership',
      desc: 'We don’t view engagements as transactional projects. We stay by your side through market pivots, scaling bottlenecks, and product expansions.'
    }
  ];

  const technologies = [
    'Next.js 15', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python',
    'Flutter', 'OpenAI GPT-4o', 'LangChain', 'PostgreSQL', 'Prisma', 'Docker',
    'AWS Cloud', 'Shopify Storefront', 'Figma', 'Redis'
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            OUR STORY & DNA
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight mb-6">
            More Than Just Developers — We’re Your{' '}
            <span className="gradient-text font-black">Growth Partner.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            &ldquo;We combine technology, creativity and business thinking to build digital solutions that create real impact.&rdquo;
          </p>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-1">
                {initialSiteSettings.stats.clients}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Happy Clients
              </p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-display font-extrabold text-blue-400 mb-1">
                {initialSiteSettings.stats.projects}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Projects Delivered
              </p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-1">
                {initialSiteSettings.stats.experience}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Years Experience
              </p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-display font-extrabold text-blue-400 mb-1">
                {initialSiteSettings.stats.satisfaction}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Origin */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
              The Genesis of Rancer
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900">
              Bridging the Gap Between Code and Commercial Growth
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Rancer was founded on a simple realization: too many development agencies treat software as a purely mechanical checklist. They build websites that look pretty but don’t convert, or engineer complex apps that collapse under basic user pressure.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              We took a radically different path. At Rancer, every digital solution is grounded in commercial viability. We ask: <em>How will this drive revenue? How will this automate operational overhead? How will this scale 3 years from now?</em>
            </p>
            <div className="pt-2">
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/60 text-blue-900 text-xs font-semibold flex items-center gap-3">
                <HeartHandshake className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Our Motto: Innovate, Build, and Grow side-by-side with visionary founders.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Rancer Engineering Team Collaborating"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To empower ambitious businesses with scalable, high-performance digital solutions that eliminate operational drag, elevate brand prestige, and unlock exponential growth.
              </p>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To become the global standard in end-to-end digital engineering and AI automation, recognized for transforming complex business challenges into seamless, intuitive software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">
            The Principles That Guide Us
          </h2>
          <p className="text-sm text-slate-600">
            Our culture and commitments to every client partner.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center mb-4">
                0{i + 1}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{v.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-display font-bold text-slate-900 mb-2">
          Enterprise Technology Ecosystem
        </h2>
        <p className="text-sm text-slate-500 mb-8 max-w-xl mx-auto">
          We leverage modern, battle-tested programming languages and frameworks with high global performance benchmarks.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200 shadow-2xs hover:bg-slate-900 hover:text-white transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
