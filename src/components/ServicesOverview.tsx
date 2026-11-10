import React, { useState } from 'react';
import { Camera, Flame, Home, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesOverviewProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'residential' | 'commercial'>('all');

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-red-600 tracking-wider uppercase">
              Installation & Engineering Scope
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mt-1 mb-3">
              Full-Spectrum Fire Alarm & CCTV Surveillance
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From residential homes and gated communities in Karen or Runda to high-traffic commercial towers and industrial godowns along Mombasa Road.
            </p>
          </div>

          {/* Interactive filter tabs (Buttons conforming to Section 1.A) */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-lg self-start md:self-end">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Solutions
            </button>
            <button
              onClick={() => setActiveTab('residential')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'residential'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Residential</span>
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'commercial'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Commercial & Industrial</span>
            </button>
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Residential CCTV */}
          {(activeTab === 'all' || activeTab === 'residential') && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Camera className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    Bungalows · Villas · Apartments · Estates
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Residential CCTV & Perimeter Surveillance
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Protect your home and family with crystal-clear 4K or 5MP color night-vision cameras. 
                  View high-definition live video anytime on your smartphone over Safaricom or Airtel internet, 
                  with AI detection that filters out pets and tree branches to send only real threat alerts.
                </p>

                <div className="space-y-2.5 mb-6 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>24/7 Full ColorVu Night Vision even in complete pitch darkness</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Remote live viewing on Hik-Connect / DMSS for iOS & Android</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Perimeter tripwire alerts at gate and boundary walls</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>KPLC power outage immunity options (Solar & Inverter integration)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-900">
                  Packages from <span className="font-mono text-base text-red-600 font-bold">KES 38,500</span>
                </span>
                <button
                  onClick={() => onSelectService('Residential CCTV Installation')}
                  className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Inquire CCTV</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Card 2: Residential Fire Alarm */}
          {(activeTab === 'all' || activeTab === 'residential') && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                    <Flame className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    Home Safety · Kitchens · Staff Quarters
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Residential Fire Alarm & Gas Leak Detection
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Early detection saves lives and property. We install high-reliability conventional fire alarm panels 
                  equipped with optical smoke sensors in living spaces and specialized rate-of-rise heat detectors in kitchens, 
                  plus LPG cooking gas sensors to catch kitchen leaks before combustion occurs.
                </p>

                <div className="space-y-2.5 mb-6 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Optical smoke detectors with chamber anti-dust drift compensation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>LPG gas leak audible warning buzzer & automatic cutoff valve options</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Red emergency manual call points (break glass) at main exits</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>100dB piercing electronic siren with high-visibility strobe</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-900">
                  Packages from <span className="font-mono text-base text-red-600 font-bold">KES 45,000</span>
                </span>
                <button
                  onClick={() => onSelectService('Residential Fire Alarm Installation')}
                  className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Inquire Fire Alarm</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Card 3: Commercial CCTV & Access Control */}
          {(activeTab === 'all' || activeTab === 'commercial') && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    Offices · Malls · Warehouses · Fuel Stations
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Commercial Enterprise CCTV & Access Control
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Engineered for commercial security directors, facility managers, and enterprise organizations. 
                  High-capacity Network Video Recorders (NVR), optical PTZ cameras for expansive yards, automatic number 
                  plate recognition (ANPR) at vehicle booms, and biometric door access integration.
                </p>

                <div className="space-y-2.5 mb-6 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Automatic Number Plate Recognition (ANPR) for vehicle barriers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Centralized server room rack mounting with redundant RAID storage</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>CAK-certified shielded Cat6 cabling with surge arrestors</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Private Security Regulatory Authority (PSRA) compliance</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-900">
                  Packages from <span className="font-mono text-base text-red-600 font-bold">KES 185,000</span>
                </span>
                <button
                  onClick={() => onSelectService('Commercial CCTV & Access Control')}
                  className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Inquire Commercial CCTV</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Card 4: Commercial Addressable Fire Alarm */}
          {(activeTab === 'all' || activeTab === 'commercial') && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                    <Flame className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    High-Rise Towers · Godowns · Hospitals · Schools
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Commercial Addressable Fire Detection & Clearance
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Intelligent 1 to 4 loop addressable fire alarm systems compliant with BS 5839 and KS ISO 7240. 
                  Every single detector has a unique digital ID on the central LCD panel, indicating exact floor and room numbers 
                  during emergencies. Includes elevator recall interlocks and fire pump triggers.
                </p>

                <div className="space-y-2.5 mb-6 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Exact room & zone address pinpointing on LCD screen</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Beam smoke detector integration for 10-meter industrial godowns</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Elevator grounding, magnetic fire door release & HVAC shutoff outputs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Annual DOSHS Audit & County Fire Department certification dossier</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-900">
                  Packages from <span className="font-mono text-base text-red-600 font-bold">KES 245,000</span>
                </span>
                <button
                  onClick={() => onSelectService('Commercial Addressable Fire Alarm')}
                  className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Inquire Fire Alarm</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
