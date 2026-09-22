import React from 'react';
import { PageId } from '../types';
import { BUSINESS_CONFIG, BRAND_ASSETS, TRUST_FACTORS } from '../config/business';
import { ShieldCheck, Truck, Phone, Mail, ArrowRight, CheckCircle2, Layers, Building2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBulkModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBulkModal }) => {
  return (
    <div id="about-page" className="pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b162d] border border-[#d4af37]/35 text-xs font-bold text-[#fef08a] uppercase font-heading">
          About Al Ghaffar Enterprises
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
          Industrial Chemicals &amp; <span className="gold-text-gradient">Premium Pigments</span> Supply
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Al Ghaffar Enterprises is an industrial chemicals and premium pigments business focused on supplying products for industrial and commercial applications across Pakistan.
        </p>
      </section>

      {/* Core Mission & Positioning */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl bg-[#081125] border border-[#d4af37]/30 shadow-2xl">
        <div className="lg:col-span-7 space-y-5">
          <span className="text-xs font-bold tracking-widest text-[#d4af37] uppercase font-heading">
            Our Business Purpose
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Dedicated Bulk Supply for Commercial &amp; Industrial Requirements
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Al Ghaffar Enterprises was established to fulfill the raw material and colorant demands of manufacturing businesses. We specialize in sourcing and supplying high-demand pigment categories, including pearl powders, bronze powders, fluorescent pigments, motion pigments, and metallic pastes, as well as industrial chemical processing supplies.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Our focus is helping commercial clients—ranging from paint factories and plastics compounders to resin artisans and cosmetic formulators—secure consistent bulk inventory with dependable delivery across Pakistan.
          </p>

          <div className="p-4 rounded-xl bg-[#050a16] border border-slate-800 space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2 text-[#fef08a] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>Strictly Bulk Orders Only</span>
            </div>
            <p>
              We operate exclusively as a B2B supplier. We do not provide retail consumer goods or individual household packaging.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-xl aspect-[4/3]">
            <img
              src={BRAND_ASSETS.industrialCoatings}
              alt="Industrial chemicals and pigment supply by Al Ghaffar Enterprises"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040812] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#060c18]/90 backdrop-blur-sm border border-slate-800 text-xs">
              <span className="text-[#d4af37] font-semibold block">Commercial Raw Materials</span>
              <span className="text-slate-300">Supplying industrial operations across Pakistan.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Values & Category Expertise */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold tracking-widest text-[#d4af37] uppercase font-heading">
            Operational Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Professional Sourcing &amp; Category Competence
          </h2>
          <p className="text-slate-400 text-sm">
            We focus strictly on the attributes that matter most to industrial procurement managers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#070e1e] border border-slate-800 hover:border-[#d4af37]/40 transition-colors space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#0e1b38] text-[#d4af37] flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">Product-Category Expertise</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We maintain in-depth category familiarity across pearlescent sheens, bronze powders, metallic pastes, and industrial chemicals to guide businesses toward the right grade for their specific application.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#070e1e] border border-slate-800 hover:border-[#d4af37]/40 transition-colors space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#0e1b38] text-[#d4af37] flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">Direct Business Focus</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We deal directly with manufacturers, commercial processors, and procurement officers, providing clear communication, volume-based pricing structures, and straightforward bulk terms.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#070e1e] border border-slate-800 hover:border-[#d4af37]/40 transition-colors space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#0e1b38] text-[#d4af37] flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">Delivery Across Pakistan</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Our freight and cargo coordination supports delivery to manufacturing plants, workshops, and commercial facilities nationwide, with scheduled dispatch for ongoing production runs.
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Inquiry Callout */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#070e1e] via-[#0e1b38] to-[#070e1e] border border-[#d4af37]/40 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
          Discuss Your Material Supply Requirements
        </h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Contact our team today with your required pigment categories, expected order volumes, and delivery location anywhere in Pakistan.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBulkModal}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#fae596] via-[#d4af37] to-[#b58d20] text-[#070e1e] font-bold text-sm shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
          >
            Submit Commercial Inquiry
          </button>
          <a
            href={`tel:${BUSINESS_CONFIG.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-semibold hover:border-[#d4af37]/50 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#d4af37]" />
            <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
