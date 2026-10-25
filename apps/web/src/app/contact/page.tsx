'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { initialServices, initialSiteSettings } from '@rancer/shared-data';
import {
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Send,
  MessageSquare
} from 'lucide-react';

const BUDGET_TIERS = [
  '< $5,000',
  '$5,000 - $15,000',
  '$15,000 - $30,000',
  '$30,000+'
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialServices[0].title,
    budget: '$5,000 - $15,000',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error('Failed to submit form');
      }

      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setErrorMsg('Something went wrong. Please reach out directly via WhatsApp or email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            LET’S CONNECT
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight mb-6">
            Let’s Build Something{' '}
            <span className="gradient-text font-black">Great Together.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tell us about your project, timeline, and goals. Our senior technical leadership will review your inquiry and schedule an introductory architecture call.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contacts & Value Props (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-3">
                Direct Channels
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Prefer a quick conversation? Message us directly via WhatsApp or email our leadership team.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              <a
                href={`tel:${initialSiteSettings.contactPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-500 hover:bg-blue-50/30 transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-blue-600 transition">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                    Direct Phone
                  </span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition">
                    {initialSiteSettings.contactPhone}
                  </span>
                  <span className="text-[11px] text-slate-500 block">
                    Mon – Sat, 9:00 AM – 7:00 PM IST
                  </span>
                </div>
              </a>

              <a
                href={initialSiteSettings.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-emerald-500 hover:bg-emerald-50/30 transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                    Instant WhatsApp
                  </span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition">
                    {initialSiteSettings.whatsappNumber}
                  </span>
                  <span className="text-[11px] text-slate-500 block">
                    Typically replies within 30 minutes
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${initialSiteSettings.contactEmail}`}
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-500 hover:bg-blue-50/30 transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block">
                    Official Email
                  </span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition">
                    {initialSiteSettings.contactEmail}
                  </span>
                  <span className="text-[11px] text-slate-500 block">
                    For RFPs and general inquiries
                  </span>
                </div>
              </a>
            </div>

            {/* Trust Assurances */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400">
                Our Guarantee to You
              </h3>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Strict NDA executed prior to deep architectural disclosures</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Guaranteed response within 24 hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>100% intellectual property (IP) assigned to your business</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: High-Converting Project Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl relative overflow-hidden">
              
              {submitted ? (
                <div className="text-center py-16 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-display font-extrabold text-slate-900">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Rancer. A senior digital strategist is reviewing your requirements and will reach out to schedule an introductory video call.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: initialServices[0].title,
                        budget: '$5,000 - $15,000',
                        message: ''
                      });
                    }}
                    className="px-6 py-3 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-blue-600 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-1">
                      Project Specification
                    </h3>
                    <p className="text-xs text-slate-500">
                      Fill out the fields below and we’ll get back to you promptly.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 96006 83605"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Innovations"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                      />
                    </div>
                  </div>

                  {/* Primary Service Requested */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Desired
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                    >
                      {initialServices.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Selector Pills */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {BUDGET_TIERS.map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: tier })}
                          className={`py-2 px-3 rounded-xl text-xs font-semibold border transition ${
                            formData.budget === tier
                              ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Project Details & Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your product concept, target audience, key integrations, and target launch timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition resize-none"
                    />
                  </div>

                  {/* CTA Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm tracking-wider uppercase shadow-lg hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    <span>{loading ? 'Transmitting Details...' : 'Start Your Project →'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
