'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, ArrowRight, Phone, Mail, Sparkles } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
  currentPath: string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  currentPath
}: MobileMenuProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm h-full h-[100dvh] max-h-[100dvh] bg-white shadow-2xl flex flex-col justify-between p-6 pt-safe pb-safe overflow-y-auto animate-in slide-in-from-right duration-300 overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-black flex-shrink-0">
                <Image
                  src="/images/rancer-logo.jpg"
                  alt="Rancer Logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-slate-900 block leading-tight">
                  Rancer
                </span>
                <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">
                  Build · Automate · Grow
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav List */}
          <nav className="py-6 space-y-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-blue-600'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight
                    className={`w-4 h-4 transition ${
                      isActive ? 'text-white' : 'text-slate-400'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom CTA & Contact Info */}
        <div className="pt-6 border-t border-slate-100 space-y-4">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-sm font-bold shadow-md transition"
          >
            <span>Start Your Project</span>
            <Sparkles className="w-4 h-4 text-blue-400" />
          </Link>

          <div className="text-xs text-slate-500 space-y-2 pt-2">
            <a
              href="mailto:rooban@rancer.in"
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
            >
              <Mail className="w-3.5 h-3.5 text-blue-500" />
              rooban@rancer.in
            </a>
            <a
              href="tel:+919600683605"
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
            >
              <Phone className="w-3.5 h-3.5 text-blue-500" />
              +91 96006 83605
            </a>
          </div>

          <p className="text-[11px] text-slate-400 text-center pt-2">
            © {new Date().getFullYear()} Rancer. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
