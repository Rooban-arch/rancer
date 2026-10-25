'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { initialBlogPosts } from '@rancer/shared-data';
import { ArrowRight, Sparkles, Clock, Calendar, BookOpen } from 'lucide-react';

export default function BlogSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              LATEST INSIGHTS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
              Engineering & Growth Perspectives
            </h2>
            <p className="text-base text-slate-600 mt-2 font-normal">
              Practical thinking on software architecture, artificial intelligence, and scalable business systems.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-blue-600 uppercase tracking-wider transition group"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initialBlogPosts.slice(0, 3).map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-blue-400 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Cover Image */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 backdrop-blur-md text-blue-700 shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Bar */}
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.publishedAt}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readingTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2.5">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4 font-normal">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & Read More */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                <div className="flex items-center gap-2.5 pt-4">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block leading-tight">
                      {post.author.name}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {post.author.role}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  aria-label={`Read ${post.title}`}
                  className="pt-4 text-xs font-bold text-blue-600 group-hover:text-blue-700 flex items-center gap-1"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
