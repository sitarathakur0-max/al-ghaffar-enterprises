import React from 'react';
import { PageId } from '../types';
import { BUSINESS_CONFIG } from '../config/business';
import { BulkQuoteForm } from '../components/BulkQuoteForm';
import { Phone, Mail, Truck, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div id="contact-page" className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b162d] border border-[#d4af37]/35 text-xs font-bold text-[#fef08a] uppercase font-heading">
          Commercial Procurement Desk
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
          Contact &amp; <span className="gold-text-gradient">Bulk Enquiries</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Connect directly with Al Ghaffar Enterprises for industrial chemical and premium pigment inquiries. We supply strictly in bulk orders across Pakistan.
        </p>
      </section>

      {/* Main Content: Info Side + Form Side */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Information & Channels (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#081125] border border-slate-800 space-y-6 shadow-xl">
            <h2 className="text-xl font-bold text-white font-heading border-b border-slate-800 pb-4">
              Company Information
            </h2>

            {/* Business Identity */}
            <div className="space-y-1">
              <span className="text-xs text-[#d4af37] font-semibold uppercase tracking-wider">
                Business Name
              </span>
              <div className="text-lg font-bold text-white font-heading">
                {BUSINESS_CONFIG.name}
              </div>
              <p className="text-xs text-slate-400">
                {BUSINESS_CONFIG.legalType}
              </p>
            </div>

            {/* Direct Phone */}
            <div className="space-y-1">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                Phone Number (Calls)
              </span>
              <a
                id="contact-page-phone-link"
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="inline-flex items-center gap-2.5 text-base sm:text-lg font-bold text-slate-100 hover:text-[#d4af37] transition-colors group"
              >
                <div className="p-2 rounded-lg bg-[#0e1b38] text-[#d4af37] group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <span>{BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
              <p className="text-[11px] text-slate-500">
                Standard direct business calling line for commercial quotations.
              </p>
            </div>

            {/* Direct Email */}
            <div className="space-y-1">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                Official Business Email
              </span>
              <a
                id="contact-page-email-link"
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="inline-flex items-center gap-2.5 text-sm sm:text-base font-bold text-slate-100 hover:text-[#d4af37] transition-colors group break-all"
              >
                <div className="p-2 rounded-lg bg-[#0e1b38] text-[#d4af37] group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <span>{BUSINESS_CONFIG.email}</span>
              </a>
              <p className="text-[11px] text-slate-500">
                Send formal RFQs, purchase specifications, and product queries.
              </p>
            </div>

            {/* Delivery Availability */}
            <div className="p-4 rounded-xl bg-[#050a16] border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#fef08a] uppercase tracking-wider">
                <Truck className="w-4 h-4 text-[#d4af37]" />
                <span>Delivery Coverage</span>
              </div>
              <p className="text-xs text-slate-300">
                {BUSINESS_CONFIG.deliveryArea}. Coordinating freight and transport to factories, workshops, and commercial hubs nationwide.
              </p>
            </div>

            {/* Order Type Policy */}
            <div className="p-4 rounded-xl bg-[#0b152d] border border-[#d4af37]/30 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#fef08a] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                <span>Order Policy</span>
              </div>
              <p className="text-xs text-slate-200 font-medium">
                {BUSINESS_CONFIG.orderPolicy} — Strictly supplying businesses, manufacturers, and bulk commercial clients.
              </p>
            </div>

            {/* Official Social Media Profiles (strictly Facebook and TikTok as supplied) */}
            <div className="pt-2 border-t border-slate-800 space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Official Channels
              </span>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  id="contact-social-facebook"
                  href={BUSINESS_CONFIG.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#0a1325] border border-slate-700 hover:border-[#d4af37]/50 text-slate-200 hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="text-xs font-medium">Facebook Profile</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#d4af37]" />
                </a>

                <a
                  id="contact-social-tiktok"
                  href={BUSINESS_CONFIG.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#0a1325] border border-slate-700 hover:border-[#d4af37]/50 text-slate-200 hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-slate-100" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                    <span className="text-xs font-medium">TikTok Channel</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#d4af37]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bulk Enquiry Form (7 cols) */}
        <div className="lg:col-span-7">
          <BulkQuoteForm
            title="Submit Commercial Bulk Enquiry"
            subtitle="Please provide your contact and company details along with the required pigment or chemical categories. We will respond with availability and bulk commercial terms."
          />
        </div>
      </section>
    </div>
  );
};
