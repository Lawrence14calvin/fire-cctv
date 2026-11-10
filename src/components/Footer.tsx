import React from 'react';
import { CONTACT_INFO } from '../data/kenyaData';
import { Shield, Phone, MessageSquare, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand & Mission (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                SimbaShield Fire & CCTV Solutions
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Certified low-voltage surveillance and fire protection engineering company operating in Kenya. 
              Delivering KEBS KS ISO 7240 fire alarm systems, 4K CCTV surveillance, and turnkey County Fire Clearance compliance dossiers.
            </p>

            <div className="pt-2 text-[11px] text-slate-500 space-y-1">
              <div>Licensed by Private Security Regulatory Authority (PSRA)</div>
              <div>Communications Authority of Kenya (CAK) Compliant Structured Cabling</div>
              <div>DOSHS Certified Fire Safety Auditors</div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              Services & Systems
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Residential CCTV Installation</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Commercial IP Surveillance</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Conventional Fire Alarms</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Addressable Fire Detection</a>
              </li>
              <li>
                <a href="#standards" className="hover:text-white transition-colors">County Fire Audit Certification</a>
              </li>
            </ul>
          </div>

          {/* Kenya Regulatory Links */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              Kenyan Standards
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#standards" className="hover:text-white transition-colors">KEBS KS ISO 7240 Standard</a>
              </li>
              <li>
                <a href="#standards" className="hover:text-white transition-colors">OSHA 2007 Fire Audits</a>
              </li>
              <li>
                <a href="#standards" className="hover:text-white transition-colors">Nairobi County Fire By-Laws</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">Local Pricing Packages (KES)</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Kenyan Project Portfolio</a>
              </li>
            </ul>
          </div>

          {/* Contact Numbers */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              Contact & Dispatch
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phones[0].tel}`}
                  className="flex items-center gap-2 hover:text-white transition-colors font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{CONTACT_INFO.phones[0].display}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phones[1].tel}`}
                  className="flex items-center gap-2 hover:text-white transition-colors font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{CONTACT_INFO.phones[1].display}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors text-emerald-400 font-mono font-medium"
                >
                  <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                  <span>WhatsApp: {CONTACT_INFO.whatsapp.display}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-[11px] text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span>Enterprise Rd & Westlands Hub, Nairobi</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Quiet Bottom Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} SimbaShield Fire & CCTV Solutions Kenya. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#standards" className="hover:text-slate-400 transition-colors">KEBS Standards</a>
            <span>·</span>
            <a href="#inquiry" className="hover:text-slate-400 transition-colors">Site Survey Booking</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
