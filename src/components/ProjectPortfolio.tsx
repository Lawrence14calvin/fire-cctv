import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/kenyaData';
import { MapPin, CheckCircle2, X, ArrowRight, ShieldCheck, Clock, Building } from 'lucide-react';

interface ProjectPortfolioProps {
  onInquireSimilar: (projectName: string) => void;
}

export const ProjectPortfolio: React.FC<ProjectPortfolioProps> = ({ onInquireSimilar }) => {
  const [filter, setFilter] = useState<'all' | 'commercial' | 'residential' | 'industrial'>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-red-600 tracking-wider uppercase">
              Proven Kenyan Installations
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mt-1 mb-3">
              Clear Project Portfolio
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore recently commissioned fire alarm networks and high-definition CCTV installations across 
              Nairobi commercial towers, gated estates, and industrial plants.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-lg self-start md:self-end">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Sites ({PORTFOLIO_PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('commercial')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                filter === 'commercial'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setFilter('residential')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                filter === 'residential'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setFilter('industrial')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                filter === 'industrial'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Industrial
            </button>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Slot */}
                <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Clean Location Tag on Media Scrim */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1 font-medium bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded">
                      <MapPin className="w-3.5 h-3.5 text-red-400" />
                      <span>{proj.location}</span>
                    </span>
                    <span className="text-[11px] font-mono text-emerald-300 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded">
                      {proj.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Zero-Pill Unboxed Metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="capitalize font-semibold text-red-600">{proj.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{proj.county}</span>
                    <span aria-hidden="true">·</span>
                    <span>{proj.completionTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-2 leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {proj.scope}
                  </p>

                  {/* Key specs bullet preview */}
                  <div className="space-y-1.5 text-[11.5px] text-slate-700 pt-3 border-t border-slate-100">
                    {proj.specs.slice(0, 2).map((s, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 truncate">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="truncate">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900">
                <span>View Technical Specs</span>
                <ArrowRight className="w-3.5 h-3.5 text-red-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal / Sheet */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative aspect-16/9 bg-slate-100">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Project Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-3.5 rounded-xl text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">
                  <span>{selectedProject.clientType}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.location}</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Scope of Engineering & Installation
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedProject.scope}
                </p>
              </div>

              {/* Technical equipment breakdown */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Hardware & Commissioned Devices
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedProject.specs.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-slate-800 leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kenyan Standards Met */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Kenyan Standards Verified & Certified</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.standards.map((std, i) => (
                    <span key={i} className="text-xs font-mono font-medium text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded">
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline & Location Metadata */}
              <div className="grid grid-cols-3 gap-3 text-center text-xs border-y border-slate-100 py-3">
                <div>
                  <div className="text-slate-400 text-[11px]">County</div>
                  <div className="font-semibold text-slate-900 mt-0.5">{selectedProject.county}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[11px]">Execution Time</div>
                  <div className="font-semibold text-slate-900 mt-0.5">{selectedProject.completionTime}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[11px]">Status</div>
                  <div className="font-semibold text-emerald-600 mt-0.5">{selectedProject.status}</div>
                </div>
              </div>

              {/* Action */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    const title = selectedProject.title;
                    setSelectedProject(null);
                    onInquireSimilar(title);
                  }}
                  className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-red-200"
                >
                  <span>Inquire Similar Solution for My Building</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto py-3 px-5 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
