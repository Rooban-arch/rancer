'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  Search,
  Sparkles,
  ArrowRight,
  Briefcase,
  Layers,
  BookOpen,
  Info,
  Filter
} from 'lucide-react';
import {
  initialServices,
  initialProjects,
  initialBlogPosts,
  initialWorkCategories
} from '@rancer/shared-data';

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [activeType, setActiveType] = useState('All');

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  // Aggregate searchable items
  const allItems = useMemo(() => {
    const list: Array<{
      id: string;
      type: 'Service' | 'Portfolio' | 'Blog' | 'Category' | 'About';
      title: string;
      description: string;
      href: string;
      tag?: string;
    }> = [];

    initialServices.forEach((s) => {
      list.push({
        id: `srv-${s.id}`,
        type: 'Service',
        title: s.title,
        description: s.shortDescription,
        href: `/services/${s.slug}`,
        tag: s.badge
      });
    });

    initialWorkCategories.forEach((c) => {
      list.push({
        id: `cat-${c.id}`,
        type: 'Category',
        title: c.title,
        description: c.description,
        href: `/our-work#${c.slug}`,
        tag: c.stats
      });
    });

    initialProjects.forEach((p) => {
      list.push({
        id: `proj-${p.id}`,
        type: 'Portfolio',
        title: p.title,
        description: p.shortDescription,
        href: `/portfolio/${p.slug}`,
        tag: p.category
      });
    });

    initialBlogPosts.forEach((b) => {
      list.push({
        id: `blog-${b.id}`,
        type: 'Blog',
        title: b.title,
        description: b.excerpt,
        href: `/blog/${b.slug}`,
        tag: b.category
      });
    });

    list.push({
      id: 'about-rancer',
      type: 'About',
      title: 'About Rancer Story, Mission & Principles',
      description: 'We combine technology, creativity and business thinking to build digital solutions that create real impact.',
      href: '/about',
      tag: 'Company'
    });

    list.push({
      id: 'contact-page',
      type: 'About',
      title: 'Contact Rancer & Project Inquiries',
      description: 'Get in touch for custom web development, mobile apps, AI automation, and digital solutions.',
      href: '/contact',
      tag: 'Contact'
    });

    return list;
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    return allItems.filter((item) => {
      const matchType = activeType === 'All' || item.type === activeType;
      const matchText =
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.tag && item.tag.toLowerCase().includes(q));

      return matchType && matchText;
    });
  }, [query, activeType, allItems]);

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Header */}
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
            Global Search
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Search Results
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Showing results for <span className="font-bold text-slate-800">&ldquo;{query}&rdquo;</span>
          </p>
        </div>

        {/* Search Bar Input */}
        <div className="relative mb-8">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type keywords to filter results..."
            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white shadow-xs transition"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {['All', 'Service', 'Portfolio', 'Category', 'Blog', 'About'].map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                activeType === type
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Results List */}
        {results.length > 0 ? (
          <div className="space-y-4">
            {results.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-md transition"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                    {item.type}
                  </span>
                  {item.tag && (
                    <span className="text-xs text-slate-400 font-medium">
                      • {item.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-blue-600 transition mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                <span className="text-xs font-bold text-blue-600 group-hover:text-blue-700 flex items-center gap-1.5">
                  <span>Visit {item.type}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-slate-50 rounded-3xl border border-slate-200">
            <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">
              No matching records found
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Please check your spelling or search with a broader phrase like &ldquo;AI&rdquo; or &ldquo;Web&rdquo;.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-24 text-center text-slate-500 text-sm">Loading search...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
}
