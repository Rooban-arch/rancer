import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { PortfolioProject } from '@rancer/shared-data';
import { Briefcase, Plus, Pencil, Trash2, X, Star, ArrowUpRight } from 'lucide-react';

export default function PortfolioManagementPage() {
  const { projects, addProject, updateProject, deleteProject } = useData();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    client: '',
    category: 'Websites',
    shortDescription: '',
    heroImage: '',
    problem: '',
    solution: '',
    technologies: 'Next.js, TypeScript, Tailwind CSS',
    year: '2026',
    featured: false,
    order: 1
  });

  const handleOpenAdd = () => {
    setEditingProject(null);
    setFormData({
      title: '',
      slug: '',
      client: '',
      category: 'Websites',
      shortDescription: '',
      heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      problem: '',
      solution: '',
      technologies: 'Next.js, React, Tailwind CSS',
      year: '2026',
      featured: true,
      order: projects.length + 1
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (proj: PortfolioProject) => {
    setEditingProject(proj);
    setFormData({
      title: proj.title,
      slug: proj.slug,
      client: proj.client,
      category: proj.category,
      shortDescription: proj.shortDescription,
      heroImage: proj.heroImage,
      problem: proj.problem,
      solution: proj.solution,
      technologies: proj.technologies.join(', '),
      year: proj.year,
      featured: proj.featured,
      order: proj.order
    });
    setModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = formData.slug || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const techs = formData.technologies.split(',').map((t) => t.trim()).filter(Boolean);

    if (editingProject) {
      updateProject(editingProject.id, {
        ...formData,
        slug,
        categorySlug: formData.category.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        technologies: techs
      });
    } else {
      addProject({
        ...formData,
        slug,
        categorySlug: formData.category.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        technologies: techs,
        galleryImages: [],
        features: ['Automated Architecture', 'Mobile Performance Guarantee', 'SEO Schemas'],
        results: [
          { metric: '+180%', label: 'Conversion Lift' },
          { metric: '0.9s', label: 'LCP Page Load' }
        ],
        designProcess: [
          { title: 'Discovery & UX', desc: 'Flowcharting user paths' },
          { title: 'Code Production', desc: 'Deploying edge microservices' }
        ]
      });
    }

    setModalOpen(false);
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Portfolio & Case Studies
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Manage public portfolio showcases, client case studies, hero images, and tech tags.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Case Study</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="relative h-44 w-full bg-slate-950">
                <img src={proj.heroImage} alt={proj.title} className="object-cover w-full h-full" />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/90 text-white backdrop-blur-md">
                    {proj.category}
                  </span>
                  {proj.featured && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-slate-950 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-slate-950" /> Featured
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider block mb-1">
                  Client: {proj.client} ({proj.year})
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{proj.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-2 mb-4">
                  {proj.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1">
                  {proj.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-slate-950 px-2 py-0.5 rounded text-slate-400 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-950/60 border-t border-slate-800">
              <a
                href={`${typeof window !== 'undefined' && window.location.hostname === 'localhost' ? 'http://localhost:3000' : 'https://rancer.in'}/portfolio/${proj.slug}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>Preview</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenEdit(proj)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                >
                  <Pencil className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Delete project ${proj.title}?`)) {
                      deleteProject(proj.id);
                    }
                  }}
                  className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-white shadow-2xl my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <h3 className="text-lg font-bold">
                {editingProject ? `Edit ${editingProject.title}` : 'Add Portfolio Project'}
              </h3>
              <button onClick={() => setModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.client}
                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  >
                    <option value="Websites">Websites</option>
                    <option value="Web Apps">Web Apps</option>
                    <option value="Mobile Apps">Mobile Apps</option>
                    <option value="AI Solutions">AI Solutions</option>
                    <option value="Business Automation">Business Automation</option>
                    <option value="Branding & Design">Branding & Design</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                    Year
                  </label>
                  <input
                    type="text"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  />
                </div>
                <div className="flex items-center pt-5">
                  <label className="flex items-center gap-2 text-xs font-bold text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                      className="w-4 h-4 rounded text-blue-600"
                    />
                    <span>Mark as Featured</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                  Hero Image URL
                </label>
                <input
                  type="text"
                  required
                  value={formData.heroImage}
                  onChange={(e) => setFormData({ ...formData, heroImage: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                  Short Summary *
                </label>
                <textarea
                  required
                  rows={2}
                  value={formData.shortDescription}
                  onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                    Problem
                  </label>
                  <textarea
                    rows={2}
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                    Solution
                  </label>
                  <textarea
                    rows={2}
                    value={formData.solution}
                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                  Tech Stack (comma separated)
                </label>
                <input
                  type="text"
                  value={formData.technologies}
                  onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
