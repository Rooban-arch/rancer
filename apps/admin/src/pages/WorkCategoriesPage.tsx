import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { WorkCategory } from '@rancer/shared-data';
import { Layers, Plus, Pencil, Trash2, X, Check } from 'lucide-react';

export default function WorkCategoriesPage() {
  const { workCategories, addWorkCategory, updateWorkCategory, deleteWorkCategory } = useData();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<WorkCategory | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    subtitle: '',
    description: '',
    icon: 'Globe',
    badge: 'Popular',
    stats: '10+ Delivered',
    subcategories: 'Corporate Websites, Landing Pages, Portals',
    order: 1,
    enabled: true
  });

  const handleOpenAdd = () => {
    setEditingCategory(null);
    setFormData({
      title: '',
      slug: '',
      subtitle: '',
      description: '',
      icon: 'Globe',
      badge: 'New',
      stats: '5+ Built',
      subcategories: 'Solutions, Systems, Architecture',
      order: workCategories.length + 1,
      enabled: true
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (cat: WorkCategory) => {
    setEditingCategory(cat);
    setFormData({
      title: cat.title,
      slug: cat.slug,
      subtitle: cat.subtitle,
      description: cat.description,
      icon: cat.icon,
      badge: cat.badge,
      stats: cat.stats,
      subcategories: cat.subcategories.join(', '),
      order: cat.order,
      enabled: cat.enabled
    });
    setModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = formData.slug || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const subs = formData.subcategories.split(',').map((s) => s.trim()).filter(Boolean);

    if (editingCategory) {
      updateWorkCategory(editingCategory.id, {
        ...formData,
        slug,
        subcategories: subs
      });
    } else {
      addWorkCategory({
        ...formData,
        slug,
        subcategories: subs
      });
    }

    setModalOpen(false);
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Our Work Categories
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Manage the &ldquo;What We Build&rdquo; public categories, stats, and sub-capabilities.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Category</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workCategories.map((cat) => (
          <div
            key={cat.id}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  {cat.subtitle}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                  {cat.stats}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {cat.description}
              </p>

              <div className="space-y-1 mb-6">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Deliverables:
                </span>
                <div className="flex flex-wrap gap-1">
                  {cat.subcategories.map((sub, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-slate-950 px-2 py-0.5 rounded-md text-slate-300 border border-slate-800"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                onClick={() => updateWorkCategory(cat.id, { enabled: !cat.enabled })}
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                  cat.enabled
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                    : 'bg-slate-800 text-slate-500 border-slate-700'
                }`}
              >
                {cat.enabled ? 'Enabled' : 'Disabled'}
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenEdit(cat)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                >
                  <Pencil className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Delete ${cat.title}?`)) {
                      deleteWorkCategory(cat.id);
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <h3 className="text-lg font-bold">
                {editingCategory ? `Edit ${editingCategory.title}` : 'Add Work Category'}
              </h3>
              <button onClick={() => setModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                    Category Title *
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
                    Subtitle Tagline
                  </label>
                  <input
                    type="text"
                    value={formData.subtitle}
                    onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                  Description *
                </label>
                <textarea
                  required
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                    Stats Badge (e.g. 50+ Delivered)
                  </label>
                  <input
                    type="text"
                    value={formData.stats}
                    onChange={(e) => setFormData({ ...formData, stats: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                    Order
                  </label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 1 })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                  Subcategories (comma separated)
                </label>
                <input
                  type="text"
                  value={formData.subcategories}
                  onChange={(e) => setFormData({ ...formData, subcategories: e.target.value })}
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
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
