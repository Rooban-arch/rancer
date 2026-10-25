import React, { useState, useMemo } from 'react';
import { useData } from '../context/DataContext';
import { Lead } from '@rancer/shared-data';
import {
  Users,
  Search,
  Filter,
  Download,
  Mail,
  Phone,
  Building,
  Calendar,
  MessageSquare,
  CheckCircle2,
  Trash2,
  X
} from 'lucide-react';

const STATUSES: Array<Lead['status']> = ['New', 'Contacted', 'In Progress', 'Converted', 'Closed'];

export default function LeadsManagementPage() {
  const { leads, updateLeadStatus, addLeadNote, deleteLead } = useData();
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLead, setActiveLead] = useState<Lead | null>(null);
  const [noteInput, setNoteInput] = useState('');

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchStatus = selectedStatus === 'All' || lead.status === selectedStatus;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        lead.name.toLowerCase().includes(q) ||
        lead.email.toLowerCase().includes(q) ||
        (lead.company && lead.company.toLowerCase().includes(q)) ||
        lead.service.toLowerCase().includes(q);

      return matchStatus && matchQuery;
    });
  }, [leads, selectedStatus, searchQuery]);

  const handleOpenLead = (lead: Lead) => {
    setActiveLead(lead);
    setNoteInput(lead.notes || '');
  };

  const handleSaveNote = () => {
    if (activeLead) {
      addLeadNote(activeLead.id, noteInput);
      setActiveLead({ ...activeLead, notes: noteInput });
    }
  };

  const exportCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Company', 'Service', 'Budget', 'Status', 'Date', 'Message'];
    const rows = leads.map((l) => [
      `"${l.name}"`,
      `"${l.email}"`,
      `"${l.phone}"`,
      `"${l.company || ''}"`,
      `"${l.service}"`,
      `"${l.budget}"`,
      `"${l.status}"`,
      `"${l.createdAt}"`,
      `"${l.message.replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `rancer_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Contact & Lead CRM
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Review inquiries submitted through the public website, track status stages, and write follow-up notes.
          </p>
        </div>

        <button
          onClick={exportCSV}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition shadow-sm"
        >
          <Download className="w-4 h-4 text-blue-400" />
          <span>Export CSV</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-4 rounded-2xl">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {['All', ...STATUSES].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                selectedStatus === status
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search leads..."
            className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold bg-slate-950/60">
                <th className="py-3.5 px-4">Contact</th>
                <th className="py-3.5 px-4">Service & Budget</th>
                <th className="py-3.5 px-4">Message Snippet</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Received</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredLeads.map((lead) => {
                const statusColor =
                  lead.status === 'New'
                    ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                    : lead.status === 'Contacted'
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                    : lead.status === 'In Progress'
                    ? 'bg-blue-600/20 text-blue-300 border-blue-500/30'
                    : lead.status === 'Converted'
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                    : 'bg-slate-700/40 text-slate-400 border-slate-700';

                return (
                  <tr key={lead.id} className="hover:bg-slate-800/40 transition">
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-white text-sm">{lead.name}</div>
                      <div className="text-[11px] text-slate-400">{lead.email}</div>
                      {lead.company && (
                        <div className="text-[10px] text-blue-400 mt-0.5">
                          🏢 {lead.company}
                        </div>
                      )}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="font-semibold text-slate-300 block">{lead.service}</span>
                      <span className="font-mono text-slate-500 text-[10px]">{lead.budget}</span>
                    </td>
                    <td className="py-3.5 px-4 max-w-xs">
                      <p className="line-clamp-2 text-slate-400 text-xs">
                        {lead.message}
                      </p>
                    </td>
                    <td className="py-3.5 px-4">
                      <select
                        value={lead.status}
                        onChange={(e) => updateLeadStatus(lead.id, e.target.value as any)}
                        className={`text-[10px] font-bold px-2 py-1 rounded-full border bg-slate-950 focus:outline-none ${statusColor}`}
                      >
                        {STATUSES.map((s) => (
                          <option key={s} value={s} className="bg-slate-900 text-white">
                            {s}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400 text-[11px]">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleOpenLead(lead)}
                          className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[11px] transition"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Delete lead from ${lead.name}?`)) {
                              deleteLead(lead.id);
                            }
                          }}
                          className="p-1 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Details & Notes Modal */}
      {activeLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div>
                <h3 className="text-lg font-bold">{activeLead.name}</h3>
                <span className="text-xs text-slate-400">{activeLead.email}</span>
              </div>
              <button onClick={() => setActiveLead(null)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <div>
                  <span className="text-slate-500 uppercase tracking-wider font-semibold block">Phone</span>
                  <span className="font-semibold text-slate-200">{activeLead.phone || 'Not provided'}</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase tracking-wider font-semibold block">Company</span>
                  <span className="font-semibold text-slate-200">{activeLead.company || 'Not provided'}</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase tracking-wider font-semibold block">Requested Service</span>
                  <span className="font-semibold text-blue-400">{activeLead.service}</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase tracking-wider font-semibold block">Budget Range</span>
                  <span className="font-semibold font-mono text-emerald-400">{activeLead.budget}</span>
                </div>
              </div>

              <div>
                <span className="text-slate-400 uppercase tracking-wider font-semibold block mb-1">
                  Full Project Requirement
                </span>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-slate-300 leading-relaxed font-sans">
                  {activeLead.message}
                </div>
              </div>

              <div>
                <span className="text-slate-400 uppercase tracking-wider font-semibold block mb-1">
                  Internal Team Notes
                </span>
                <textarea
                  rows={3}
                  value={noteInput}
                  onChange={(e) => setNoteInput(e.target.value)}
                  placeholder="Add notes about calls, client preferences, or follow-up schedule..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${activeLead.email}`}
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" /> Email
                  </a>
                  {activeLead.phone && (
                    <a
                      href={`https://wa.me/${activeLead.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" /> WhatsApp
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleSaveNote}
                  className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold"
                >
                  Save Notes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
