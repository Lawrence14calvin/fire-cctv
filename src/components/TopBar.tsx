import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, Shield, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/kenyaData';

interface TopBarProps {
  onOpenInquiry: (initialService?: string) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Kenyan Regulatory & Emergency Strip */}
      <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-y-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-slate-200 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>KEBS KS ISO 7240 · DOSHS & County Fire Approved</span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-400">Nairobi & Countrywide Dispatch</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href={`tel:${CONTACT_INFO.phones[0].tel}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{CONTACT_INFO.phones[0].display}</span>
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={`tel:${CONTACT_INFO.phones[1].tel}`}
              className="hover:text-white transition-colors hidden sm:flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-blue-400" />
              <span>{CONTACT_INFO.phones[1].display}</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <a
              href={CONTACT_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-semibold"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp {CONTACT_INFO.whatsapp.display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation (3-Zone Top Bar Contract) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a href="#" className="flex items-center gap-2.5 text-slate-900 tracking-tight whitespace-nowrap shrink-0 group">
            <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center text-white shadow-sm shadow-red-200 group-hover:bg-red-700 transition-colors">
              <Shield className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                SimbaShield
              </span>
              <span className="text-[10px] font-semibold text-red-600 tracking-wider uppercase mt-0.5">
                Fire & CCTV Kenya
              </span>
            </div>
          </a>

          {/* Zone 2: Clean single-line navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0">
              Services
            </a>
            <a href="#standards" className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0">
              Kenya Standards
            </a>
            <a href="#packages" className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0">
              Pricing Packages
            </a>
            <a href="#portfolio" className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0">
              Portfolio
            </a>
            <a href="#estimator" className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0">
              Quote Calculator
            </a>
            <a href="#inquiry" className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0">
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary CTA action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CONTACT_INFO.phones[0].tel}`}
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors whitespace-nowrap shrink-0 hidden lg:inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{CONTACT_INFO.phones[0].display}</span>
            </a>
            <button
              onClick={() => onOpenInquiry()}
              className="px-4 py-2 text-xs font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 shadow-sm shadow-red-200 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Book Free Site Survey
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Services (Residential & Commercial)
            </a>
            <a
              href="#standards"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Kenyan Fire & Security Standards
            </a>
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Local Pricing (KES)
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Project Portfolio (Kenya Installs)
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Instant Cost Estimator
            </a>
            <a
              href="#inquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Direct Service Inquiry
            </a>

            <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
              <a
                href={`tel:${CONTACT_INFO.phones[0].tel}`}
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-100 text-slate-800 rounded-lg text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                Call 0118742981
              </a>
              <a
                href={CONTACT_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-600 text-white rounded-lg text-xs font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
