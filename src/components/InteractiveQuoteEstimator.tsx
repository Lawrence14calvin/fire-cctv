import React, { useState } from 'react';
import { Calculator, MessageSquare, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO, KENYA_COUNTIES } from '../data/kenyaData';

interface InteractiveQuoteEstimatorProps {
  onTransferToForm: (data: {
    propertyType: string;
    serviceType: string;
    points: number;
    county: string;
    estimatedCost: string;
    selectedAddons: string[];
  }) => void;
}

export const InteractiveQuoteEstimator: React.FC<InteractiveQuoteEstimatorProps> = ({ onTransferToForm }) => {
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial' | 'industrial'>('commercial');
  const [serviceType, setServiceType] = useState<'cctv' | 'fire' | 'combined' | 'audit'>('combined');
  const [points, setPoints] = useState<number>(8);
  const [county, setCounty] = useState<string>(KENYA_COUNTIES[0]);
  
  const [addons, setAddons] = useState<{
    upsBackup: boolean;
    remoteApp: boolean;
    countyDossier: boolean;
    evacSounder: boolean;
  }>({
    upsBackup: true,
    remoteApp: true,
    countyDossier: true,
    evacSounder: false
  });

  // Calculate pricing based on realistic Kenyan engineering rates
  const calculateTotal = (): { base: number; addonsTotal: number; total: number } => {
    let base = 0;

    if (serviceType === 'cctv') {
      if (propertyType === 'residential') {
        base = points === 4 ? 38500 : points === 8 ? 82000 : points === 16 ? 155000 : 280000;
      } else {
        base = points === 4 ? 55000 : points === 8 ? 115000 : points === 16 ? 198000 : 360000;
      }
    } else if (serviceType === 'fire') {
      if (propertyType === 'residential') {
        base = points === 4 ? 46000 : points === 8 ? 75000 : points === 16 ? 135000 : 240000;
      } else {
        // Addressable commercial
        base = points === 4 ? 95000 : points === 8 ? 165000 : points === 16 ? 245000 : 420000;
      }
    } else if (serviceType === 'combined') {
      // Fire + CCTV bundle discount
      const cctvPart = propertyType === 'residential' ? (points === 4 ? 38500 : points === 8 ? 82000 : 155000) : (points === 4 ? 55000 : points === 8 ? 115000 : 198000);
      const firePart = propertyType === 'residential' ? (points === 4 ? 46000 : points === 8 ? 75000 : 135000) : (points === 4 ? 95000 : points === 8 ? 165000 : 245000);
      base = Math.round((cctvPart + firePart) * 0.88); // 12% combined bundle discount
    } else {
      // Audit
      base = propertyType === 'residential' ? 15000 : 25000;
    }

    let addonsTotal = 0;
    if (addons.upsBackup) addonsTotal += 24000;
    if (addons.remoteApp) addonsTotal += 4500;
    if (addons.countyDossier) addonsTotal += 18000;
    if (addons.evacSounder) addonsTotal += 14000;

    return {
      base,
      addonsTotal,
      total: base + addonsTotal
    };
  };

  const { base, addonsTotal, total } = calculateTotal();

  const formattedTotal = `KES ${total.toLocaleString()}`;

  const getAddonsList = (): string[] => {
    const list: string[] = [];
    if (addons.upsBackup) list.push("KPLC Outage UPS Backup (24hr)");
    if (addons.remoteApp) list.push("Multi-User Cloud Mobile App");
    if (addons.countyDossier) list.push("County Fire Clearance Dossier");
    if (addons.evacSounder) list.push("High-dB Evacuation Siren Pack");
    return list;
  };

  const handleWhatsAppQuote = () => {
    const message = `Hello SimbaShield, I configured an inquiry on your website:
• Property: ${propertyType.toUpperCase()}
• Service: ${serviceType.toUpperCase()}
• Scope: ${points} Points / Cameras
• Location: ${county}
• Add-ons: ${getAddonsList().join(", ") || "None"}
• Estimated Total: ${formattedTotal}

Please contact me to schedule a physical site survey.`;

    window.open(`${CONTACT_INFO.whatsapp.url}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleTransfer = () => {
    onTransferToForm({
      propertyType: propertyType === 'residential' ? 'Residential Home / Estate' : propertyType === 'commercial' ? 'Commercial Office / Plaza' : 'Industrial Warehouse / Godown',
      serviceType: serviceType === 'cctv' ? 'CCTV Installation' : serviceType === 'fire' ? 'Fire Alarm System' : serviceType === 'combined' ? 'Combined Fire Alarm & CCTV' : 'Annual Audit & Maintenance',
      points,
      county,
      estimatedCost: formattedTotal,
      selectedAddons: getAddonsList()
    });
  };

  return (
    <section id="estimator" className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-red-400 tracking-wider uppercase mb-2">
            <Calculator className="w-4 h-4" />
            <span>Dedicated Service Inquiry Estimator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-3">
            Interactive Kenyan Project Cost Calculator
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Configure your property type, coverage scale, and location to get an immediate indicative quotation 
            based on KEBS-compliant components and current Kenyan market pricing.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-7">
            
            {/* Step 1: Property Type */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                01. Property Classification
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setPropertyType('residential')}
                  className={`p-3 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                    propertyType === 'residential'
                      ? 'bg-red-950/60 border-red-500 text-white shadow-sm'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="block font-semibold">Residential</span>
                  <span className="text-[10px] text-slate-400">Home, Villa, Apartment</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPropertyType('commercial')}
                  className={`p-3 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                    propertyType === 'commercial'
                      ? 'bg-red-950/60 border-red-500 text-white shadow-sm'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="block font-semibold">Commercial</span>
                  <span className="text-[10px] text-slate-400">Office, Retail, Clinic</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPropertyType('industrial')}
                  className={`p-3 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                    propertyType === 'industrial'
                      ? 'bg-red-950/60 border-red-500 text-white shadow-sm'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="block font-semibold">Industrial</span>
                  <span className="text-[10px] text-slate-400">Warehouse, Factory</span>
                </button>
              </div>
            </div>

            {/* Step 2: Service Type */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                02. Primary Solution Required
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'combined', label: 'CCTV & Fire Alarm', tag: '12% Bundle Saver' },
                  { id: 'cctv', label: 'CCTV Surveillance', tag: 'ColorVu & NVR' },
                  { id: 'fire', label: 'Fire Alarm System', tag: 'Optical & Panel' },
                  { id: 'audit', label: 'Fire Safety Audit', tag: 'DOSHS Certificate' }
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setServiceType(s.id as any)}
                    className={`p-3 rounded-lg text-left text-xs font-medium border transition-all cursor-pointer ${
                      serviceType === s.id
                        ? 'bg-red-950/60 border-red-500 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="block font-bold leading-tight">{s.label}</span>
                    <span className="text-[10px] text-emerald-400 mt-1 block">{s.tag}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Coverage Points / Scale */}
            {serviceType !== 'audit' && (
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    03. Number of Cameras / Detection Points
                  </label>
                  <span className="font-mono text-xs text-red-400 font-bold">
                    {points} Points
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[4, 8, 16, 32].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setPoints(num)}
                      className={`py-2 text-xs font-mono font-semibold rounded-lg border transition-colors cursor-pointer ${
                        points === num
                          ? 'bg-red-600 border-red-500 text-white'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {num} {serviceType === 'cctv' ? 'Cameras' : 'Sensors'}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: County / Location */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                04. Installation County / Region in Kenya
              </label>
              <select
                value={county}
                onChange={(e) => setCounty(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-red-500 transition-colors"
              >
                {KENYA_COUNTIES.map((c) => (
                  <option key={c} value={c} className="bg-slate-900 text-slate-200">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 5: System Add-ons */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                05. Technical Add-Ons & Certification
              </label>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs cursor-pointer hover:border-slate-700">
                  <span className="flex items-center gap-2 text-slate-300">
                    <input
                      type="checkbox"
                      checked={addons.upsBackup}
                      onChange={(e) => setAddons({ ...addons, upsBackup: e.target.checked })}
                      className="rounded accent-red-600 w-3.5 h-3.5"
                    />
                    <span>24-Hour KPLC Outage Battery Inverter Backup</span>
                  </span>
                  <span className="font-mono text-slate-400 text-[11px]">+KES 24,000</span>
                </label>

                <label className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs cursor-pointer hover:border-slate-700">
                  <span className="flex items-center gap-2 text-slate-300">
                    <input
                      type="checkbox"
                      checked={addons.remoteApp}
                      onChange={(e) => setAddons({ ...addons, remoteApp: e.target.checked })}
                      className="rounded accent-red-600 w-3.5 h-3.5"
                    />
                    <span>Multi-User Cloud Phone App Setup (iOS/Android/PC)</span>
                  </span>
                  <span className="font-mono text-slate-400 text-[11px]">+KES 4,500</span>
                </label>

                <label className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs cursor-pointer hover:border-slate-700">
                  <span className="flex items-center gap-2 text-slate-300">
                    <input
                      type="checkbox"
                      checked={addons.countyDossier}
                      onChange={(e) => setAddons({ ...addons, countyDossier: e.target.checked })}
                      className="rounded accent-red-600 w-3.5 h-3.5"
                    />
                    <span>County Fire Inspection Clearance Handover Dossier</span>
                  </span>
                  <span className="font-mono text-slate-400 text-[11px]">+KES 18,000</span>
                </label>

                <label className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs cursor-pointer hover:border-slate-700">
                  <span className="flex items-center gap-2 text-slate-300">
                    <input
                      type="checkbox"
                      checked={addons.evacSounder}
                      onChange={(e) => setAddons({ ...addons, evacSounder: e.target.checked })}
                      className="rounded accent-red-600 w-3.5 h-3.5"
                    />
                    <span>Extra High-Decibel Xenon Strobe Sounder Units</span>
                  </span>
                  <span className="font-mono text-slate-400 text-[11px]">+KES 14,000</span>
                </label>
              </div>
            </div>

          </div>

          {/* Quotation Summary Card (Right 5 Cols) */}
          <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-red-900/50 shadow-xl flex flex-col justify-between sticky top-24">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                  Indicative Project Quote
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  KES / Kenyan Shillings
                </span>
              </div>

              {/* Total Figure */}
              <div className="mb-6">
                <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-white tabular-nums">
                  {formattedTotal}
                </div>
                <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Includes Hardware, Conduits, Installation & Testing</span>
                </p>
              </div>

              {/* Breakdown Table */}
              <div className="space-y-2.5 text-xs border-y border-slate-800 py-4 mb-6">
                <div className="flex justify-between text-slate-400">
                  <span>Base Package Hardware & Labor:</span>
                  <span className="font-mono text-slate-200">KES {base.toLocaleString()}</span>
                </div>
                {addonsTotal > 0 && (
                  <div className="flex justify-between text-slate-400">
                    <span>Selected Add-ons ({getAddonsList().length}):</span>
                    <span className="font-mono text-slate-200">+KES {addonsTotal.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-400">
                  <span>Target County / Location:</span>
                  <span className="text-slate-200 text-right truncate max-w-[180px]">{county.split('(')[0]}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>KEBS & County Standards:</span>
                  <span className="text-emerald-400 font-semibold">Fully Certified</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Hardware Warranty:</span>
                  <span className="text-slate-200">2-Year Full Replacement</span>
                </div>
              </div>

              {/* Scope summary */}
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-[11.5px] text-slate-300 space-y-1 mb-6">
                <div className="font-semibold text-white">Included in this quotation:</div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Heavy-gauge PVC/galvanized conduit trunking</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Seagate SkyHawk / WD Purple surveillance storage</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Official Handover & Loop Commissioning Report</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleTransfer}
                className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-900/40"
              >
                <span>Book Free Site Survey with this Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleWhatsAppQuote}
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Quote directly to WhatsApp (0113290379)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
