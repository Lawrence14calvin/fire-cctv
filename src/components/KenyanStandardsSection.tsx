import React from 'react';
import { KENYAN_STANDARDS } from '../data/kenyaData';
import { ShieldCheck, Check, AlertTriangle, FileText } from 'lucide-react';

export const KenyanStandardsSection: React.FC = () => {
  return (
    <section id="standards" className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-red-400 tracking-wider uppercase mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>National Regulatory Compliance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4">
            Engineered Strictly to Kenyan Standards & County By-Laws
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            In Kenya, fire safety and CCTV installations are strictly regulated by the Kenya Bureau of Standards (KEBS), 
            DOSHS under OSHA 2007, and respective County Fire Directorates. Sub-standard equipment or improper wiring risks 
            failed county inspections, voided property insurance, and heavy non-compliance penalties.
          </p>
        </div>

        {/* Grid of 5 Standards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {KENYAN_STANDARDS.map((standard) => (
            <div
              key={standard.code}
              className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-semibold text-red-400 bg-red-950/60 px-2.5 py-1 rounded border border-red-800/60">
                    {standard.code}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {standard.body}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {standard.title}
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  {standard.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{standard.relevance}</span>
              </div>
            </div>
          ))}

          {/* Special Card: County Fire Audit & Clearance Handover */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-red-950/40 via-slate-950 to-slate-900 border border-red-900/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
                <FileText className="w-4 h-4" />
                <span>Documentation Handover</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Turnkey County Fire Clearance Dossier
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Every commercial installation includes a full engineering commissioning report: loop resistance tests, 
                audible dB sounder verification, battery backup discharge calculations, and cable routing schematics ready 
                for Nairobi County Fire Department inspection.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-red-300 font-medium">
              <span>Required for Single Business Permit</span>
              <span className="font-mono text-emerald-400">100% Guaranteed</span>
            </div>
          </div>
        </div>

        {/* Why this matters callout banner */}
        <div className="p-5 rounded-xl bg-slate-950 border border-amber-900/40 text-slate-300 text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-white">Notice for Commercial Property & Landlords:</strong> In Kenya, building insurers require verified annual fire maintenance logs and licensed technician sign-offs before approving claims in the event of an incident.
            </p>
          </div>
          <a
            href="#inquiry"
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors"
          >
            Request Compliance Audit
          </a>
        </div>

      </div>
    </section>
  );
};
