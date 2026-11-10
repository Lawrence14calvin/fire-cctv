import React, { useState } from 'react';
import { PRICING_PACKAGES, CONTACT_INFO, PackageItem } from '../data/kenyaData';
import { Check, ShieldCheck, MessageSquare, ArrowRight, Banknote } from 'lucide-react';

interface PricingPackagesProps {
  onSelectPackage: (pkg: PackageItem) => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onSelectPackage }) => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial'>('all');

  const filteredPackages = PRICING_PACKAGES.filter((p) => {
    if (filter === 'all') return true;
    return p.target === filter;
  });

  return (
    <section id="packages" className="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-red-600 tracking-wider uppercase">
              Transparent Kenyan Pricing
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mt-1 mb-3">
              Standard Packages & Indicative Estimates
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every package includes genuine branded hardware (Hikvision, Dahua, Apollo, GST), heavy-duty conduits, 
              complete labor, and testing certificates. No hidden billing.
            </p>
          </div>

          {/* Segmented Control Filter */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start md:self-end">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Packages ({PRICING_PACKAGES.length})
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
              onClick={() => setFilter('commercial')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                filter === 'commercial'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Commercial
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-lg transition-all"
            >
              <div>
                {/* Quiet unboxed kicker */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="capitalize font-medium text-red-600">
                    {pkg.target} · {pkg.category.toUpperCase()}
                  </span>
                  <span>{pkg.standardCompliance}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
                  {pkg.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 min-h-[36px]">
                  {pkg.description}
                </p>

                {/* Price Display in KES */}
                <div className="py-4 border-y border-slate-100 mb-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 tracking-tight tabular-nums">
                      {pkg.priceFormatted}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Inclusive of installation
                    </span>
                  </div>
                  {pkg.highlight && (
                    <p className="text-[11.5px] font-medium text-emerald-700 mt-1">
                      {pkg.highlight}
                    </p>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-6 text-xs text-slate-700">
                  <div className="font-semibold text-slate-900 text-[11px] tracking-wider uppercase mb-1">
                    Included Hardware & Deliverables:
                  </div>
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Select for Site Survey</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`${CONTACT_INFO.whatsapp.url}?text=${encodeURIComponent(`Hello SimbaShield, I am interested in the ${pkg.name} priced at ${pkg.priceFormatted}. Please advise on survey and installation.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 border border-emerald-600/30 hover:border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Inquire</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Kenyan Commercial Billing & M-Pesa Terms Banner */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-3">
            <Banknote className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Kenyan Commercial Invoicing & Payment Flexibility
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 max-w-2xl">
                We provide official ETR tax invoices (16% VAT compliant) for corporates, schools, and NGOs. 
                Payment accepted via M-Pesa Buy Goods Till, Cheque, and KES/USD Bank Wire Transfer. Standard project structure: 60% mobilization upon delivery, 40% on testing & handover.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-stretch md:self-auto justify-end">
            <span className="text-xs font-mono text-slate-600">
              Need custom BOQ tender specs?
            </span>
            <a
              href={`tel:${CONTACT_INFO.phones[0].tel}`}
              className="px-3.5 py-2 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors"
            >
              Call 0118 742 981
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
