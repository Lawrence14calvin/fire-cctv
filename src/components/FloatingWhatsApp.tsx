import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/kenyaData';
import { MessageSquare, X, ArrowUpRight } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Quick Popup Card */}
      {isOpen && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold leading-tight">SimbaShield WhatsApp Desk</div>
                <div className="text-[10px] text-emerald-100">Live Kenyan Engineering Support</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded cursor-pointer"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-3 text-xs bg-slate-50">
            <p className="text-slate-600 leading-relaxed text-[11.5px]">
              Chat directly with our Kenyan installation managers for immediate quotes, site surveys, or camera/alarm queries.
            </p>

            <div className="text-xs font-mono font-bold text-slate-800 bg-white p-2 rounded border border-slate-200 text-center">
              0113 290 379
            </div>

            <a
              href={`${CONTACT_INFO.whatsapp.url}?text=${encodeURIComponent('Hello SimbaShield, I am inquiring about fire alarm and CCTV installation for my property in Kenya.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-sm shadow-emerald-200"
            >
              <span>Open WhatsApp Chat</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg shadow-emerald-900/30 transition-all hover:scale-105 cursor-pointer"
        aria-label="Chat on WhatsApp 0113290379"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-tight hidden sm:inline">
          WhatsApp 0113 290 379
        </span>
      </button>
    </div>
  );
};
