'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useSearch } from './SearchContext';
import {
  Search,
  X,
  ArrowRight,
  Sparkles,
  Briefcase,
  Layers,
  BookOpen,
  Info,
  ExternalLink,
  History
} from 'lucide-react';
import {
  initialServices,
  initialProjects,
  initialBlogPosts,
  initialWorkCategories
} from '@rancer/shared-data';

interface SearchResultItem {
  id: string;
  type: 'Service' | 'Portfolio' | 'Blog' | 'Category' | 'About';
  title: string;
  description: string;
  href: string;
  tag?: string;
}

export default function SearchOverlay() {
  const { isOpen, closeSearch } = useSearch();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([
    'AI Solutions',
    'Next.js Web Development',
    'Business Automation',
    'ERP Systems'
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Aggregate searchable items
  const allItems: SearchResultItem[] = useMemo(() => {
    const list: SearchResultItem[] = [];

    // Services
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

    // Categories
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

    // Portfolio
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

    // Blog
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

    // About Pages
    list.push({
      id: 'about-rancer',
      type: 'About',
      title: 'About Rancer Story & Mission',
      description: 'We combine technology, creativity and business thinking to build digital solutions that create real impact.',
      href: '/about',
      tag: 'Company'
    });
    list.push({
      id: 'contact-page',
      type: 'About',
      title: 'Contact Rancer & Start Project',
      description: 'Get in touch for custom web development, mobile apps, AI automation, and digital solutions.',
      href: '/contact',
      tag: 'Inquiry'
    });

    return list;
  }, []);

  // Filtered results
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.tag && item.tag.toLowerCase().includes(q))
    ).slice(0, 8);
  }, [query, allItems]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results.length > 0 && results[selectedIndex]) {
        selectResult(results[selectedIndex]);
      } else if (query.trim()) {
        router.push(`/search?q=${encodeURIComponent(query.trim())}`);
        closeSearch();
      }
    }
  };

  const selectResult = (item: SearchResultItem) => {
    if (query.trim() && !recentSearches.includes(query.trim())) {
      setRecentSearches((prev) => [query.trim(), ...prev.slice(0, 4)]);
    }
    closeSearch();
    router.push(item.href);
  };

  const handleSelectRecent = (term: string) => {
    setQuery(term);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Website Search"
      className="fixed inset-0 z-50 flex items-start justify-center pt-[calc(4rem+env(safe-area-inset-top,0px))] sm:pt-24 px-4 pb-safe bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={closeSearch}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800 transition-all transform animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 bg-slate-50/50">
          <Search className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search services, portfolio, blog, technologies..."
            className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-base sm:text-lg focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-600 mr-2 transition"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={closeSearch}
            className="px-2 py-1 text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-200/80 hover:bg-slate-300 rounded-md transition"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] max-h-[60dvh] overflow-y-auto p-4 divide-y divide-slate-100 overscroll-contain">
          {query.trim() === '' ? (
            /* Recent Searches & Suggested Prompts */
            <div className="py-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">
                <span className="flex items-center gap-1.5">
                  <History className="w-3.5 h-3.5 text-slate-400" />
                  Popular & Recent Searches
                </span>
              </div>
              <div className="flex flex-wrap gap-2 px-2 mb-6">
                {recentSearches.map((term, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectRecent(term)}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    <Search className="w-3 h-3 mr-1.5 opacity-60" />
                    {term}
                  </button>
                ))}
              </div>

              <div className="px-2 pt-2 border-t border-slate-100">
                <p className="text-xs font-medium text-slate-400 mb-2">QUICK NAVIGATION</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      closeSearch();
                      router.push('/services');
                    }}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 text-left text-xs font-medium text-slate-700 hover:text-blue-600 transition"
                  >
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    All 8 Core Services
                  </button>
                  <button
                    onClick={() => {
                      closeSearch();
                      router.push('/our-work');
                    }}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 text-left text-xs font-medium text-slate-700 hover:text-blue-600 transition"
                  >
                    <Layers className="w-4 h-4 text-blue-600" />
                    What We Build
                  </button>
                  <button
                    onClick={() => {
                      closeSearch();
                      router.push('/portfolio');
                    }}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 text-left text-xs font-medium text-slate-700 hover:text-blue-600 transition"
                  >
                    <Briefcase className="w-4 h-4 text-slate-600" />
                    Portfolio Case Studies
                  </button>
                  <button
                    onClick={() => {
                      closeSearch();
                      router.push('/contact');
                    }}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 text-left text-xs font-medium text-slate-700 hover:text-blue-600 transition"
                  >
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                    Start a Project
                  </button>
                </div>
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-1.5 pt-1">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-2 flex justify-between items-center">
                <span>Matching Results ({results.length})</span>
                <span className="text-[11px] text-slate-400 font-normal">Use ↑ ↓ arrows to navigate</span>
              </div>
              {results.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                const iconColor =
                  item.type === 'Service'
                    ? 'text-blue-600 bg-blue-50'
                    : item.type === 'Portfolio'
                    ? 'text-blue-700 bg-slate-100'
                    : item.type === 'Blog'
                    ? 'text-slate-700 bg-slate-100'
                    : 'text-slate-600 bg-slate-100';

                return (
                  <div
                    key={item.id}
                    onClick={() => selectResult(item)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition ${
                      isSelected
                        ? 'bg-blue-50/80 text-blue-950 ring-1 ring-blue-500/30'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className={`p-2 rounded-lg flex-shrink-0 mt-0.5 ${iconColor}`}>
                      {item.type === 'Service' && <Sparkles className="w-4 h-4" />}
                      {item.type === 'Portfolio' && <Briefcase className="w-4 h-4" />}
                      {item.type === 'Blog' && <BookOpen className="w-4 h-4" />}
                      {item.type === 'Category' && <Layers className="w-4 h-4" />}
                      {item.type === 'About' && <Info className="w-4 h-4" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                          {item.type}
                        </span>
                        {item.tag && (
                          <span className="text-[11px] font-medium text-slate-400 truncate">
                            • {item.tag}
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-semibold text-slate-900 mt-1 truncate">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {item.description}
                      </p>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 flex-shrink-0 self-center transition transform ${
                        isSelected ? 'text-blue-600 translate-x-1' : 'text-slate-300'
                      }`}
                    />
                  </div>
                );
              })}

              <div className="pt-3 px-2">
                <button
                  onClick={() => {
                    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
                    closeSearch();
                  }}
                  className="w-full py-2.5 text-center text-xs font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition flex items-center justify-center gap-1.5"
                >
                  View all results for &ldquo;{query}&rdquo; <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="py-12 text-center">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-semibold text-slate-800">No results found for &ldquo;{query}&rdquo;</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Try searching for broader keywords such as &ldquo;website&rdquo;, &ldquo;mobile apps&rdquo;, &ldquo;automation&rdquo;, or &ldquo;AI&rdquo;.
              </p>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
          <span>
            <kbd className="px-1.5 py-0.5 text-[10px] font-semibold bg-white border border-slate-300 rounded shadow-sm">↵</kbd> to select
            <span className="mx-2">•</span>
            <kbd className="px-1.5 py-0.5 text-[10px] font-semibold bg-white border border-slate-300 rounded shadow-sm">ESC</kbd> to dismiss
          </span>
          <span className="font-medium text-slate-400">Rancer Search Engine</span>
        </div>
      </div>
    </div>
  );
}
