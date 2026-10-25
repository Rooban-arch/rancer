import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { initialBlogPosts } from '@rancer/shared-data';
import CTASection from '@/components/CTASection';
import {
  ChevronRight,
  Calendar,
  Clock,
  ArrowRight,
  Share2,
  Tag,
  CheckCircle2
} from 'lucide-react';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return initialBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = initialBlogPosts.find((b) => b.slug === params.slug);
  if (!post) return { title: 'Article Not Found' };

  return {
    title: `${post.seo.title || post.title} | Rancer Insights`,
    description: post.seo.description || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    }
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = initialBlogPosts.find((b) => b.slug === params.slug);
  if (!post) {
    notFound();
  }

  // Related posts
  const relatedPosts = initialBlogPosts
    .filter((b) => b.id !== post.id)
    .slice(0, 2);

  // Article JSON-LD Schema
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role
    },
    publisher: {
      '@type': 'Organization',
      name: 'Rancer',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rancer.in/images/rancer-logo.jpg'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://rancer.in/blog/${post.slug}`
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />

      {/* Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-3.5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-800 line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            {post.category}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-100">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-sm font-bold text-slate-900 block leading-tight">
                  {post.author.name}
                </span>
                <span className="text-xs text-slate-500">
                  {post.author.role}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                {post.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </div>

        {/* Hero Featured Image */}
        <div className="relative h-80 sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200 mb-12">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-slate lg:prose-lg max-w-none text-slate-700 leading-relaxed">
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
            {post.excerpt}
          </p>

          <div
            className="space-y-6 text-base"
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/### (.*)/g, '<h3 class="text-2xl font-bold text-slate-900 mt-8 mb-3 font-display">$1</h3>')
                .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>')
                .replace(/- (.*)/g, '<li class="flex items-start gap-2 mb-2"><span class="text-blue-600 mt-1">•</span><span>$1</span></li>')
            }}
          />
        </div>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
            Tags:
          </span>
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200/60"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-white shadow-sm">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900">
              Written by {post.author.name}
            </h4>
            <p className="text-xs text-blue-600 font-semibold mb-2">
              {post.author.role} at Rancer
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Leading digital architecture and growth solutions for forward-thinking enterprises.
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900">
              Related Perspectives
            </h2>
            <Link
              href="/blog"
              className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
            >
              <span>All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((r) => (
              <Link
                key={r.id}
                href={`/blog/${r.slug}`}
                className="group bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-blue-600 uppercase">
                    {r.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition mt-1 mb-2">
                    {r.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {r.excerpt}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>{r.publishedAt}</span>
                  <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
