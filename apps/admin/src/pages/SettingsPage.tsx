import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Settings, Save, CheckCircle2, Shield, Globe, Share2 } from 'lucide-react';

export default function SettingsPage() {
  const { siteSettings, updateSiteSettings } = useData();
  const [formData, setFormData] = useState({
    brandName: siteSettings.brandName,
    tagline: siteSettings.tagline,
    positioning: siteSettings.positioning,
    contactEmail: siteSettings.contactEmail,
    contactPhone: siteSettings.contactPhone,
    whatsappNumber: siteSettings.whatsappNumber,
    address: siteSettings.address,
    socialLinkedin: siteSettings.socialLinks.linkedin,
    socialInstagram: siteSettings.socialLinks.instagram,
    socialFacebook: siteSettings.socialLinks.facebook,
    socialTwitter: siteSettings.socialLinks.twitter,
    socialWhatsapp: siteSettings.socialLinks.whatsapp,
    statClients: siteSettings.stats.clients,
    statProjects: siteSettings.stats.projects,
    statExperience: siteSettings.stats.experience,
    statSatisfaction: siteSettings.stats.satisfaction,
    seoTitle: siteSettings.seoDefaults.title,
    seoDescription: siteSettings.seoDefaults.description,
  });

  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteSettings({
      brandName: formData.brandName,
      tagline: formData.tagline,
      positioning: formData.positioning,
      contactEmail: formData.contactEmail,
      contactPhone: formData.contactPhone,
      whatsappNumber: formData.whatsappNumber,
      address: formData.address,
      socialLinks: {
        linkedin: formData.socialLinkedin,
        instagram: formData.socialInstagram,
        facebook: formData.socialFacebook,
        twitter: formData.socialTwitter,
        whatsapp: formData.socialWhatsapp
      },
      stats: {
        clients: formData.statClients,
        projects: formData.statProjects,
        experience: formData.statExperience,
        satisfaction: formData.statSatisfaction
      },
      seoDefaults: {
        title: formData.seoTitle,
        description: formData.seoDescription,
        keywords: siteSettings.seoDefaults.keywords,
        ogImage: siteSettings.seoDefaults.ogImage
      }
    });

    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 font-sans max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Site & SEO Configuration
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Global metadata, brand positioning, contact coordinates, and social handles.
          </p>
        </div>

        {saved && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold animate-in fade-in">
            <CheckCircle2 className="w-4 h-4" />
            <span>Settings Saved!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Brand & Identity Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Globe className="w-4 h-4 text-blue-400" />
            <span>Brand Identity & Positioning</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                Company / Brand Name
              </label>
              <input
                type="text"
                required
                value={formData.brandName}
                onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                Official Tagline
              </label>
              <input
                type="text"
                required
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
              Main Positioning Statement
            </label>
            <input
              type="text"
              required
              value={formData.positioning}
              onChange={(e) => setFormData({ ...formData, positioning: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
            />
          </div>
        </div>

        {/* Global Statistics */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Homepage Metric Counters</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                Clients Count
              </label>
              <input
                type="text"
                value={formData.statClients}
                onChange={(e) => setFormData({ ...formData, statClients: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                Projects Count
              </label>
              <input
                type="text"
                value={formData.statProjects}
                onChange={(e) => setFormData({ ...formData, statProjects: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                Years Experience
              </label>
              <input
                type="text"
                value={formData.statExperience}
                onChange={(e) => setFormData({ ...formData, statExperience: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                Satisfaction Rate
              </label>
              <input
                type="text"
                value={formData.statSatisfaction}
                onChange={(e) => setFormData({ ...formData, statSatisfaction: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white font-mono"
              />
            </div>
          </div>
        </div>

        {/* Contact Coordinates */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Share2 className="w-4 h-4 text-blue-400" />
            <span>Contact Information & Coordinates</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.contactEmail}
                onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                Phone
              </label>
              <input
                type="text"
                value={formData.contactPhone}
                onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                WhatsApp Number
              </label>
              <input
                type="text"
                value={formData.whatsappNumber}
                onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>
          </div>
        </div>

        {/* SEO Defaults */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Settings className="w-4 h-4 text-slate-400" />
            <span>Search Engine Optimization (SEO) Defaults</span>
          </h3>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
              Default Meta Title
            </label>
            <input
              type="text"
              value={formData.seoTitle}
              onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
              Default Meta Description
            </label>
            <textarea
              rows={3}
              value={formData.seoDescription}
              onChange={(e) => setFormData({ ...formData, seoDescription: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
            />
          </div>
        </div>

        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          <span>Save All Settings</span>
        </button>
      </form>
    </div>
  );
}
