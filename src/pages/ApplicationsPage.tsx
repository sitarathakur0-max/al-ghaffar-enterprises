import React from 'react';
import { PageId } from '../types';
import { BUSINESS_CONFIG, BRAND_ASSETS, APPLICATION_SECTORS } from '../config/business';
import { ArrowRight, Sparkles, Layers, Paintbrush, Boxes, Factory, Palette, HeartHandshake, Truck } from 'lucide-react';

interface ApplicationsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBulkModal: (category?: string) => void;
}

export const ApplicationsPage: React.FC<ApplicationsPageProps> = ({ onNavigate, onOpenBulkModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Paintbrush':
        return <Paintbrush className="w-6 h-6 text-[#d4af37]" />;
      case 'Boxes':
        return <Boxes className="w-6 h-6 text-[#d4af37]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#d4af37]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#d4af37]" />;
      case 'Factory':
        return <Factory className="w-6 h-6 text-[#d4af37]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#d4af37]" />;
      default:
        return <Layers className="w-6 h-6 text-[#d4af37]" />;
    }
  };

  return (
    <div id="applications-page" className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b162d] border border-[#d4af37]/35 text-xs font-bold text-[#fef08a] uppercase font-heading">
          Industrial Scope
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
          Application <span className="gold-text-gradient">Areas &amp; Industries</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Al Ghaffar Enterprises supplies raw pigments and industrial chemicals tailored for commercial manufacturing, processing, and decorative application areas across Pakistan.
        </p>
        <p className="text-xs text-slate-400">
          Presented as industrial application areas. Contact us for bulk order requirements and sample evaluation.
        </p>
      </section>

      {/* Applications Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {APPLICATION_SECTORS.map((sector) => (
          <div
            key={sector.id}
            id={`app-sector-${sector.id}`}
            className="rounded-2xl bg-[#081125] border border-slate-800 hover:border-[#d4af37]/50 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.8)] transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#0e1b38] border border-[#d4af37]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(sector.iconName)}
                </div>
                <span className="text-[10px] font-bold text-[#fef08a] px-2.5 py-0.5 rounded bg-[#060c18] border border-slate-700 uppercase tracking-wider">
                  Bulk Supply
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#fef08a] transition-colors font-heading">
                  {sector.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {sector.description}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#050a16] border border-slate-800 space-y-1">
                <span className="text-[11px] font-bold text-[#d4af37] uppercase tracking-wider block">
                  Processing Suitability
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {sector.suitabilityNote}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Frequently Sourced Categories:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {sector.compatibleCategories.map((cat, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#0b162d] border border-[#d4af37]/25 text-xs text-slate-200"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={() => onOpenBulkModal(sector.title)}
                className="w-full py-2.5 px-4 rounded-lg bg-[#0e1b38] hover:bg-[#d4af37] text-[#d4af37] hover:text-[#070e1e] text-xs font-bold border border-[#d4af37]/40 flex items-center justify-center gap-2 transition-all"
              >
                <span>Inquire for {sector.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Commercial Applications Visual Banner */}
      <section className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#070e1e] via-[#0c1935] to-[#070e1e] border border-[#d4af37]/30 p-8 sm:p-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#d4af37] uppercase font-heading">
              Nationwide B2B Logistics
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Scheduled Bulk Logistics for Continuous Production
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We understand that industrial manufacturing cannot afford material delays. Al Ghaffar Enterprises coordinates shipments of pigment powders, pastes, and chemical products across Pakistan to align with your production cycle.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#fef08a] font-semibold pt-1">
              <Truck className="w-4 h-4 text-[#d4af37]" />
              <span>{BUSINESS_CONFIG.deliveryArea} • {BUSINESS_CONFIG.orderPolicy}</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <button
              onClick={() => onOpenBulkModal()}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#fae596] via-[#d4af37] to-[#b58d20] text-[#070e1e] font-bold text-sm sm:text-base shadow-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2"
            >
              <span>Submit Application Inquiry</span>
              <ArrowRight className="w-4 h-4 text-[#070e1e]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
