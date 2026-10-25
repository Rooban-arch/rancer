import React from 'react';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import WorkCategoriesSection from '@/components/WorkCategoriesSection';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import ProcessSection from '@/components/ProcessSection';
import WhyRancer from '@/components/WhyRancer';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WorkCategoriesSection />
      <PortfolioShowcase />
      <ProcessSection />
      <WhyRancer />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </>
  );
}
