import React from 'react';
import { ShieldCheck, Phone, MessageSquare, ArrowRight, CheckCircle2, Award, FileCheck2, Cpu } from 'lucide-react';
import { CONTACT_INFO } from '../data/kenyaData';

interface HeroProps {
  onOpenInquiry: (initialService?: string) => void;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onOpenEstimator }) => {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-800">
      {/* Subtle geometric grid backdrop */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Authoritative Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed clean metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-300 tracking-wider uppercase mb-4">
              <span className="text-red-400">Certified Kenyan Fire & Security Engineering</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">KS ISO 7240</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">DOSHS / OSHA 2007</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-extrabold tracking-tight text-white leading-[1.15] text-balance mb-5">
              Fire Alarm & CCTV Installation For Kenya’s Homes & Commercial Properties
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Engineered according to strict Kenyan Bureau of Standards (KEBS) and County Fire Safety By-Laws. 
              We provide turn-key 4K IP surveillance, addressable fire detection, and rapid County Fire Clearance certification across Nairobi and countrywide.
            </p>

            {/* CTA Action Cluster */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                onClick={() => onOpenInquiry('Combined Fire & CCTV Installation')}
                className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg shadow-lg shadow-red-900/40 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Book Free Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`${CONTACT_INFO.whatsapp.url}?text=${encodeURIComponent('Hello SimbaShield, I am inquiring about fire alarm and CCTV installation for my property in Kenya.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg shadow-lg shadow-emerald-900/40 transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Quote: {CONTACT_INFO.whatsapp.display}</span>
              </a>

              <button
                onClick={onOpenEstimator}
                className="px-4 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Interactive Quote Calculator
              </button>
            </div>

            {/* Direct Phone Dispatch Badges */}
            <div className="pt-5 border-t border-slate-800 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
              <span className="font-semibold text-slate-400">Direct Engineering Lines:</span>
              <a 
                href={`tel:${CONTACT_INFO.phones[0].tel}`}
                className="hover:text-emerald-400 font-mono transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-white font-semibold">{CONTACT_INFO.phones[0].display}</span>
                <span className="text-slate-400">(Quotes & Surveys)</span>
              </a>
              <a 
                href={`tel:${CONTACT_INFO.phones[1].tel}`}
                className="hover:text-blue-400 font-mono transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-white font-semibold">{CONTACT_INFO.phones[1].display}</span>
                <span className="text-slate-400">(Technical Operations)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset Carrier */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl lg:h-full min-h-[380px]">
              <img
                src="/src/assets/images/kenyan_technician_hero_1794311319734.jpg"
                alt="Certified Kenyan technician testing optical smoke detector and 4K CCTV camera on Westlands Nairobi commercial building"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Verified Technical Standards Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/95 backdrop-blur-md border border-slate-700/80 text-xs">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Compliant with Kenya Bureau of Standards</span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-300">Nairobi & 47 Counties</span>
                </div>
                <p className="text-slate-300 leading-normal text-[11.5px]">
                  All installations include calibrated smoke sensitivity testing, shielded surge protection against Kenya Power grid spikes, and handover dossiers for immediate County Fire clearance.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Proof & Quantitative Rigor Strip Below Hero Split */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
              <Award className="w-4 h-4 text-red-500" />
              <span>Proven Track Record</span>
            </div>
            <div className="text-2xl font-bold font-mono tracking-tight text-white tabular-nums">
              850+
            </div>
            <p className="text-xs text-slate-400">
              Completed installations across Nairobi, Kiambu, Machakos & Coast
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
              <FileCheck2 className="w-4 h-4 text-emerald-400" />
              <span>Regulatory Compliance</span>
            </div>
            <div className="text-2xl font-bold font-mono tracking-tight text-white tabular-nums">
              100%
            </div>
            <p className="text-xs text-slate-400">
              County Fire Audit and Single Business Permit inspection pass rate
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span>Hardware Warranty</span>
            </div>
            <div className="text-2xl font-bold font-mono tracking-tight text-white tabular-nums">
              2 Years
            </div>
            <p className="text-xs text-slate-400">
              Full equipment replacement warranty + 12-month free maintenance
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Response & Dispatch</span>
            </div>
            <div className="text-2xl font-bold font-mono tracking-tight text-white tabular-nums">
              24/7
            </div>
            <p className="text-xs text-slate-400">
              Same-day site survey booking and rapid technical emergency response
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
