import React from 'react';
import { useData } from '../context/DataContext';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Users,
  Sparkles,
  Layers,
  BookOpen,
  Quote,
  TrendingUp,
  Clock,
  ArrowRight,
  Eye,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

export default function DashboardPage() {
  const {
    projects,
    leads,
    services,
    blogPosts,
    testimonials,
    workCategories,
    updateLeadStatus
  } = useData();

  // Metrics
  const totalProjects = projects.length;
  const activeProjects = 4;
  const completedProjects = totalProjects - activeProjects > 0 ? totalProjects - activeProjects : 2;
  const totalClients = 104;
  const totalLeads = leads.length;
  const totalBlogs = blogPosts.length;
  const totalServices = services.length;
  const totalTestimonials = testimonials.length;
  const websiteVisits = '38.4k';
  const totalEnquiries = leads.length;

  // Chart Data: Enquiries & Traffic Trend (Last 7 Days)
  const trafficData = [
    { day: 'Mon', visits: 3200, enquiries: 4 },
    { day: 'Tue', visits: 4100, enquiries: 7 },
    { day: 'Wed', visits: 3800, enquiries: 5 },
    { day: 'Thu', visits: 5200, enquiries: 9 },
    { day: 'Fri', visits: 6400, enquiries: 12 },
    { day: 'Sat', visits: 4900, enquiries: 6 },
    { day: 'Sun', visits: 5600, enquiries: 8 }
  ];

  // Chart Data: Projects by Category
  const categoryData = [
    { category: 'Websites', count: 12 },
    { category: 'Apps', count: 8 },
    { category: 'AI', count: 6 },
    { category: 'Automation', count: 9 },
    { category: 'Branding', count: 7 }
  ];

  const statCards = [
    { title: 'Total Projects', value: totalProjects, change: '+12%', icon: Briefcase, color: 'text-blue-400' },
    { title: 'Active Projects', value: activeProjects, change: '4 in sprint', icon: Clock, color: 'text-amber-400' },
    { title: 'Completed Projects', value: completedProjects, change: '100% on-time', icon: CheckCircle2, color: 'text-emerald-400' },
    { title: 'Total Clients', value: `${totalClients}+`, change: 'Global', icon: Users, color: 'text-blue-400' },
    { title: 'Leads Received', value: totalLeads, change: '2 new today', icon: Users, color: 'text-blue-300' },
    { title: 'Blog Posts', value: totalBlogs, change: 'Published', icon: BookOpen, color: 'text-slate-300' },
    { title: 'Core Services', value: totalServices, change: 'Active', icon: Sparkles, color: 'text-blue-400' },
    { title: 'Testimonials', value: totalTestimonials, change: '5.0 ★ avg', icon: Quote, color: 'text-amber-400' },
    { title: 'Website Visits', value: websiteVisits, change: '+24% m/m', icon: Eye, color: 'text-slate-300' },
    { title: 'Contact Enquiries', value: totalEnquiries, change: 'High intent', icon: TrendingUp, color: 'text-blue-500' }
  ];

  return (
    <div className="space-y-8 font-sans">
      
      {/* Welcome Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 via-blue-950/60 to-slate-900 p-6 rounded-3xl border border-slate-800">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Executive Command Center
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Real-time telemetry, lead pipeline, and content operations for Rancer.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/leads"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition shadow-sm"
          >
            Review New Leads ({leads.filter((l) => l.status === 'New').length})
          </Link>
          <Link
            to="/portfolio"
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition border border-slate-700"
          >
            Manage Portfolio
          </Link>
        </div>
      </div>

      {/* 10 KPI Stat Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {statCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800/90 rounded-2xl p-4 flex flex-col justify-between hover:border-slate-700 transition"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-medium text-slate-400 truncate">
                  {card.title}
                </span>
                <Icon className={`w-4 h-4 ${card.color}`} />
              </div>
              <div>
                <span className="text-2xl font-black text-white block tracking-tight">
                  {card.value}
                </span>
                <span className="text-[10px] font-semibold text-slate-500">
                  {card.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Traffic & Enquiries Area Chart (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800/90 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-bold text-white">
                Website Traffic & Enquiries
              </h3>
              <p className="text-xs text-slate-400">Weekly inbound trajectory</p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Live Feed
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" vertical={false} />
                <XAxis dataKey="day" stroke="#6B7280" fontSize={11} />
                <YAxis stroke="#6B7280" fontSize={11} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '12px' }}
                  itemStyle={{ color: '#F3F4F6', fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="visits" stroke="#3B82F6" strokeWidth={2} fillOpacity={1} fill="url(#colorVisits)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Projects by Category Bar Chart (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800/90 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-bold text-white">
                Deliverables by Category
              </h3>
              <p className="text-xs text-slate-400">Distribution of projects</p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Categories
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" vertical={false} />
                <XAxis dataKey="category" stroke="#6B7280" fontSize={11} />
                <YAxis stroke="#6B7280" fontSize={11} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '12px' }}
                  itemStyle={{ color: '#F3F4F6', fontSize: '12px' }}
                />
                <Bar dataKey="count" fill="#2563EB" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Recent Contact Enquiries Table */}
      <div className="bg-slate-900/90 border border-slate-800/90 rounded-3xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-base font-bold text-white">
              Recent Lead Inquiries
            </h3>
            <p className="text-xs text-slate-400">Direct form submissions from rancer.in</p>
          </div>

          <Link
            to="/leads"
            className="text-xs font-bold text-blue-400 hover:underline flex items-center gap-1"
          >
            <span>View All Leads</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold">
                <th className="pb-3 px-3">Client Name</th>
                <th className="pb-3 px-3">Service</th>
                <th className="pb-3 px-3">Budget</th>
                <th className="pb-3 px-3">Status</th>
                <th className="pb-3 px-3 text-right">Quick Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {leads.slice(0, 5).map((lead) => {
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
                    <td className="py-3 px-3 font-semibold text-white">
                      <div>{lead.name}</div>
                      <div className="text-[10px] text-slate-500 font-normal">{lead.email}</div>
                    </td>
                    <td className="py-3 px-3 text-slate-300">{lead.service}</td>
                    <td className="py-3 px-3 font-mono text-slate-400">{lead.budget}</td>
                    <td className="py-3 px-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${statusColor}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <select
                        value={lead.status}
                        onChange={(e) => updateLeadStatus(lead.id, e.target.value as any)}
                        className="bg-slate-950 border border-slate-700 rounded-lg px-2 py-1 text-[11px] text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Converted">Converted</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
