import React, { useState, useEffect } from 'react';
import { CONTACT_INFO, KENYA_COUNTIES } from '../data/kenyaData';
import { Send, Phone, MessageSquare, CheckCircle, ShieldCheck, Calendar, MapPin, Building, AlertCircle } from 'lucide-react';

export interface PreloadedInquiryData {
  serviceType?: string;
  propertyType?: string;
  county?: string;
  estimatedCost?: string;
  notes?: string;
}

interface DedicatedInquiryFormProps {
  preloadedData?: PreloadedInquiryData | null;
  onClearPreload?: () => void;
}

export const DedicatedInquiryForm: React.FC<DedicatedInquiryFormProps> = ({
  preloadedData,
  onClearPreload
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    propertyType: 'Commercial Property',
    serviceType: 'Combined Fire Alarm & CCTV',
    county: KENYA_COUNTIES[0],
    specificArea: '',
    preferredDate: '',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  // Sync preloaded data from calculator or package selections
  useEffect(() => {
    if (preloadedData) {
      setFormData((prev) => ({
        ...prev,
        serviceType: preloadedData.serviceType || prev.serviceType,
        propertyType: preloadedData.propertyType || prev.propertyType,
        county: preloadedData.county || prev.county,
        notes: preloadedData.estimatedCost
          ? `[Indicative Cost: ${preloadedData.estimatedCost}] ${preloadedData.notes || ''}`
          : preloadedData.notes || prev.notes
      }));
    }
  }, [preloadedData]);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }

    // Kenyan phone validation (07... or 01... or +254...)
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      errs.phone = 'Please provide a valid Kenyan phone number';
    } else if (!/^(0[17]\d{8}|\+254[17]\d{8}|254[17]\d{8})$/.test(cleanPhone)) {
      errs.phone = 'Enter a valid Kenyan number (e.g. 0118742981, 0110356617, or 07...)';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }

    if (!formData.specificArea.trim()) {
      errs.specificArea = 'Please state your estate or landmark (e.g. Karen, Westlands, Ruiru)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      const generatedId = `SBS-KE-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const message = `Hello SimbaShield Engineers,
I submitted a service inquiry ticket: *${ticketId || 'New Survey Request'}*
• Name: ${formData.fullName}
• Phone: ${formData.phone}
• Property: ${formData.propertyType}
• Service: ${formData.serviceType}
• Location: ${formData.specificArea}, ${formData.county}
• Preferred Survey Date: ${formData.preferredDate || 'Earliest Available'}
• Notes: ${formData.notes || 'None'}

Kindly confirm receipt and dispatch schedule.`;

    window.open(`${CONTACT_INFO.whatsapp.url}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      propertyType: 'Commercial Property',
      serviceType: 'Combined Fire Alarm & CCTV',
      county: KENYA_COUNTIES[0],
      specificArea: '',
      preferredDate: '',
      notes: ''
    });
    setErrors({});
    if (onClearPreload) onClearPreload();
  };

  return (
    <section id="inquiry" className="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-red-600 tracking-wider uppercase mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Dedicated Service Inquiry Section</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            Schedule a Free Site Survey & Formal Quotation
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our certified low-voltage and fire prevention engineers conduct physical site assessments across Nairobi, 
            Kiambu, Machakos, and all Kenyan counties to assess cable paths, blind spots, and KEBS fire compliance zones.
          </p>
        </div>

        {/* 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Easy Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            
            {isSubmitted ? (
              <div className="py-6 text-center space-y-5">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    Survey Ref: {ticketId}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-2">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                    Thank you <strong className="text-slate-900">{formData.fullName}</strong>. Our senior technical engineer will call you at <strong className="text-slate-900">{formData.phone}</strong> within 30 minutes to confirm your site survey appointment.
                  </p>
                </div>

                {/* Instant WhatsApp Handover */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                  <div className="font-semibold text-slate-900 flex items-center justify-between">
                    <span>Survey Summary</span>
                    <span className="font-mono text-slate-500">{formData.serviceType}</span>
                  </div>
                  <div className="text-slate-600">
                    Location: {formData.specificArea}, {formData.county.split('(')[0]}
                  </div>
                  {formData.preferredDate && (
                    <div className="text-slate-600">
                      Requested Date: {formData.preferredDate}
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-200"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send to WhatsApp (0113290379)</span>
                  </button>

                  <a
                    href={`tel:${CONTACT_INFO.phones[0].tel}`}
                    className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Call 0118 742 981</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-4 py-2 text-slate-600 hover:text-slate-900 text-xs font-medium cursor-pointer"
                  >
                    Submit Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {preloadedData?.estimatedCost && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-800 flex items-center justify-between">
                    <div>
                      <strong>Transferred from Calculator:</strong> {preloadedData.serviceType} ({preloadedData.estimatedCost})
                    </div>
                    {onClearPreload && (
                      <button
                        type="button"
                        onClick={onClearPreload}
                        className="text-red-600 hover:underline text-[11px] font-semibold cursor-pointer"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                )}

                {/* 2-Column: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Calvin Lawrence"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full bg-white border rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-red-600'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number (Kenyan) *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 0118742981 or 07..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-white border rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-red-600'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* 2-Column: Email & Property Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. info@domain.co.ke"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-600 transition-colors"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Property Category
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-600 transition-colors"
                    >
                      <option value="Residential Home / Villa">Residential Home / Villa</option>
                      <option value="Residential Apartment / Gated Estate">Residential Apartment / Gated Estate</option>
                      <option value="Commercial Office / Plaza">Commercial Office / Plaza</option>
                      <option value="Industrial Warehouse / Godown">Industrial Warehouse / Godown</option>
                      <option value="Institution (School / Hospital / Hotel)">Institution (School / Hospital / Hotel)</option>
                    </select>
                  </div>
                </div>

                {/* 2-Column: Service Type & County */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Required
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-600 transition-colors"
                    >
                      <option value="CCTV Installation (4K/5MP IP)">CCTV Installation (4K/5MP IP)</option>
                      <option value="Fire Alarm System (Conventional/Addressable)">Fire Alarm System (Conventional/Addressable)</option>
                      <option value="Combined Fire Alarm & CCTV">Combined Fire Alarm & CCTV Package</option>
                      <option value="Annual Fire Safety Audit & DOSHS Clearance">Annual Fire Safety Audit & DOSHS Clearance</option>
                      <option value="System Repair & Maintenance">System Repair & Upgrades</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      County in Kenya
                    </label>
                    <select
                      value={formData.county}
                      onChange={(e) => setFormData({ ...formData, county: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-600 transition-colors"
                    >
                      {KENYA_COUNTIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 2-Column: Specific Location Area & Survey Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Estate / Town / Road *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g. Karen Miotoni, Westlands, Road C"
                        value={formData.specificArea}
                        onChange={(e) => setFormData({ ...formData, specificArea: e.target.value })}
                        className={`w-full bg-white border rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none transition-colors ${
                          errors.specificArea ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-red-600'
                        }`}
                      />
                      <MapPin className="w-4 h-4 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
                    </div>
                    {errors.specificArea && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.specificArea}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Date for Free Survey
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-600 transition-colors"
                      />
                      <Calendar className="w-4 h-4 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Scope / Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Project Scope / Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about the property (e.g. number of floors, perimeter wall length, special requirements, county fire compliance deadline)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg p-3 text-xs text-slate-900 focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-red-600 hover:bg-red-700 disabled:bg-slate-400 text-white rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-red-200"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Submitting Survey Request...' : 'Submit Inquiry for Free Site Survey'}</span>
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-2">
                    Zero commitment. Free physical site survey anywhere in Nairobi & surrounding counties.
                  </p>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Direct Engineering Dispatch Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card with Specific Numbers requested by user */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-950 text-white border border-slate-800 space-y-5">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 tracking-wider uppercase font-semibold">
                  Immediate Engineering Contact
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Speak to an Installation Engineer Now
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Call our technical operations desk directly for urgent site visits, emergency alarm faults, or tender BOQ specifications.
                </p>
              </div>

              {/* Phone 1: 0118742981 */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400">Direct Operations & Quotes</div>
                  <a
                    href={`tel:${CONTACT_INFO.phones[0].tel}`}
                    className="text-lg font-bold font-mono text-white hover:text-emerald-400 transition-colors flex items-center gap-2 mt-0.5"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>{CONTACT_INFO.phones[0].display}</span>
                  </a>
                </div>
                <a
                  href={`tel:${CONTACT_INFO.phones[0].tel}`}
                  className="px-3 py-1.5 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white rounded text-xs font-semibold transition-colors"
                >
                  Call Now
                </a>
              </div>

              {/* Phone 2: 0110356617 */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400">Technical & Site Surveys</div>
                  <a
                    href={`tel:${CONTACT_INFO.phones[1].tel}`}
                    className="text-lg font-bold font-mono text-white hover:text-blue-400 transition-colors flex items-center gap-2 mt-0.5"
                  >
                    <Phone className="w-4 h-4 text-blue-400" />
                    <span>{CONTACT_INFO.phones[1].display}</span>
                  </a>
                </div>
                <a
                  href={`tel:${CONTACT_INFO.phones[1].tel}`}
                  className="px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white rounded text-xs font-semibold transition-colors"
                >
                  Call Now
                </a>
              </div>

              {/* WhatsApp: 0113290379 */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/80 to-slate-900 border border-emerald-800/60">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <MessageSquare className="w-4 h-4" />
                    <span>Official WhatsApp Desk</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-300">Fast Response</span>
                </div>
                <div className="text-xl font-bold font-mono text-white mb-2">
                  {CONTACT_INFO.whatsapp.display}
                </div>
                <p className="text-xs text-slate-300 mb-3">
                  Send architectural floor plans, photos of your distribution boards, or ask questions directly on WhatsApp.
                </p>
                <a
                  href={`${CONTACT_INFO.whatsapp.url}?text=${encodeURIComponent('Hello SimbaShield, I am inquiring about fire alarm and CCTV installation services in Kenya.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp: {CONTACT_INFO.whatsapp.display}</span>
                </a>
              </div>

            </div>

            {/* Coverage Areas across Kenya */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-3">
              <div className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-600" />
                <span>Primary Kenya Service Hubs</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {CONTACT_INFO.serviceAreas.map((area, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-red-500 font-bold">·</span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500">
                {CONTACT_INFO.operatingHours}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
