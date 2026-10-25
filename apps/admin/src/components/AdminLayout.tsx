import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminSearchModal from './AdminSearchModal';
import {
  LayoutDashboard,
  Layers,
  Sparkles,
  Briefcase,
  Quote,
  BookOpen,
  Users,
  Settings,
  LogOut,
  Search,
  ExternalLink,
  Shield,
  Menu,
  X,
  Bell
} from 'lucide-react';

export default function AdminLayout() {
  const { user, logout, switchRole } = useAuth();
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Services', path: '/services', icon: Sparkles },
    { name: 'Work Categories', path: '/categories', icon: Layers },
    { name: 'Portfolio Projects', path: '/portfolio', icon: Briefcase },
    { name: 'Testimonials', path: '/testimonials', icon: Quote },
    { name: 'Blog & Insights', path: '/blog', icon: BookOpen },
    { name: 'Leads & Enquiries', path: '/leads', icon: Users },
    { name: 'Website & SEO Settings', path: '/settings', icon: Settings }
  ];

  return (
    <div className="flex h-screen bg-[#0B0F19] text-slate-100 overflow-hidden font-sans">
      
      {/* Sidebar for Desktop */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between transition-transform duration-300 lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Logo Brand Header */}
          <div className="flex items-center justify-between p-5 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-black border border-slate-700 overflow-hidden relative">
                <img src="/images/rancer-logo.jpg" alt="Rancer Logo" className="object-cover w-full h-full" />
              </div>
              <div>
                <span className="font-bold text-base text-white tracking-tight block">
                  RANCER
                </span>
                <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-wider">
                  Admin Console
                </span>
              </div>
            </div>

            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Current User Role Pill */}
          <div className="p-4 mx-3 my-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white">{user?.name}</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                {user?.role}
              </span>
            </div>
            {/* Quick role switcher for demo verification */}
            <div className="flex items-center gap-1 mt-2.5 pt-2 border-t border-slate-800/80">
              <span className="text-[10px] text-slate-500 mr-1">Role:</span>
              {(['Super Admin', 'Admin', 'Editor'] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => switchRole(r)}
                  className={`text-[9px] px-1.5 py-0.5 rounded font-medium transition ${
                    user?.role === r
                      ? 'bg-blue-600 text-white font-bold'
                      : 'text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {r.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <nav className="px-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-slate-800 space-y-2">
          {/* External link to public website */}
          <a
            href={typeof window !== 'undefined' && window.location.hostname === 'localhost' ? 'http://localhost:3000' : 'https://rancer.in'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800 text-xs font-semibold transition"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              <span>Live Public Site</span>
            </span>
            <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">
              :3000
            </span>
          </a>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:bg-rose-950/40 transition"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Header Bar */}
        <header className="h-16 bg-slate-900 border-b border-slate-800 px-4 sm:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Omnisearch Button Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 text-xs transition"
            >
              <Search className="w-3.5 h-3.5 text-blue-400" />
              <span>Quick Search (Ctrl + K)</span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>System Live</span>
            </div>

            <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-700 bg-slate-800">
              <img src={user?.avatar} alt={user?.name} className="object-cover w-full h-full" />
            </div>
          </div>
        </header>

        {/* Dynamic Route Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#0B0F19]">
          <Outlet />
        </main>
      </div>

      {/* Omnisearch Modal */}
      <AdminSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
