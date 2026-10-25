'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Testimonial, initialTestimonials } from '@rancer/shared-data';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/api/data')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && Array.isArray(data.testimonials)) {
          setTestimonials(data.testimonials.filter((t: Testimonial) => t.enabled !== false));
        }
      })
      .catch(() => {});
  }, []);

  const total = testimonials.length;

  // If no testimonials exist, hide this section completely until the user adds reviews
  if (total === 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const displayCount = Math.min(total, 3);

  return (
    <section className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              CLIENT STORIES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-base text-slate-600 mt-2 font-normal">
              Trusted by founders, product leaders, and enterprise teams across the globe.
            </p>
          </div>

          {/* Navigation Controls (only shown if more than 3 items) */}
          {total > 3 && (
            <div className="flex items-center gap-2 mt-6 md:mt-0">
              <button
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="p-3 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm transition active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="p-3 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm transition active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Carousel / Cards Grid */}
        <div
          className={`grid gap-6 ${
            total === 1
              ? 'grid-cols-1 max-w-xl mx-auto'
              : total === 2
              ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {Array.from({ length: displayCount }).map((_, offset) => {
            const item = testimonials[(currentIndex + offset) % total];
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Top Quote Icon & Stars */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-7 h-7 text-blue-100 group-hover:text-blue-200 transition-colors" />
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-slate-700 leading-relaxed italic mb-8 font-serif">
                    &ldquo;{item.content}&rdquo;
                  </p>
                </div>

                {/* Client Profile */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                  {item.avatar && (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-blue-500/20">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 block leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {item.role}{item.company ? `, ${item.company}` : ''}
                    </p>
                    {item.projectType && (
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block mt-0.5">
                        {item.projectType}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Slide Indicators (only shown if more than 3 items) */}
        {total > 3 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
