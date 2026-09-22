import React, { useState } from 'react';
import { PageId, ProductCategory } from '../types';
import { BUSINESS_CONFIG, PRODUCT_CATEGORIES } from '../config/business';
import { ArrowRight, ShieldCheck, Truck, Phone, CheckCircle2, Filter } from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBulkModal: (category?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate, onOpenBulkModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categoriesToShow =
    selectedFilter === 'all'
      ? PRODUCT_CATEGORIES
      : PRODUCT_CATEGORIES.filter((c) => c.id === selectedFilter);

  return (
    <div id="products-page" className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b162d] border border-[#d4af37]/35 text-xs font-bold text-[#fef08a] uppercase font-heading">
          {BUSINESS_CONFIG.orderPolicy}
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
          Product &amp; <span className="gold-text-gradient">Supply Categories</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Premium pigment powders, metallic dispersions, and industrial chemicals supplied in commercial bulk quantities for manufacturing operations across Pakistan.
        </p>

        <div className="inline-flex items-center justify-center gap-4 text-xs text-slate-400 pt-1 flex-wrap">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Truck className="w-3.5 h-3.5 text-[#d4af37]" />
            {BUSINESS_CONFIG.deliveryArea}
          </span>
          <span>•</span>
          <span className="text-[#fef08a] font-semibold">Bulk Supply Inquiries Only</span>
          <span>•</span>
          <span className="text-slate-300">No Retail Cart / No Retail Pricing</span>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="flex items-center justify-center gap-2 flex-wrap pb-2">
        <button
          onClick={() => setSelectedFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedFilter === 'all'
              ? 'bg-[#d4af37] text-[#070e1e] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
              : 'bg-[#081125] text-slate-300 border border-slate-800 hover:border-[#d4af37]/40 hover:text-white'
          }`}
        >
          All Categories ({PRODUCT_CATEGORIES.length})
        </button>

        {PRODUCT_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedFilter(cat.id)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedFilter === cat.id
                ? 'bg-[#d4af37] text-[#070e1e] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                : 'bg-[#081125] text-slate-300 border border-slate-800 hover:border-[#d4af37]/40 hover:text-white'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </section>

      {/* Product Category Cards Grid */}
      <section className="space-y-12">
        {categoriesToShow.map((category, index) => (
          <div
            key={category.id}
            id={`product-detail-${category.id}`}
            className="rounded-3xl bg-[#081125] border border-slate-800 hover:border-[#d4af37]/50 overflow-hidden shadow-2xl transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Visual Showcase (5 cols) */}
              <div
                className={`lg:col-span-5 relative aspect-[4/3] lg:aspect-auto min-h-[280px] bg-[#040812] ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081125] via-transparent to-transparent opacity-80 lg:hidden" />
                {category.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-[#070e1e]/90 backdrop-blur-md border border-[#d4af37]/40 text-xs font-bold text-[#fef08a] uppercase tracking-wider">
                    {category.badge}
                  </div>
                )}
              </div>

              {/* Informational Details (7 cols) */}
              <div
                className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6 ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold tracking-widest text-[#d4af37] uppercase font-heading">
                      Category Overview
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-0.5">
                      {category.name}
                    </h2>
                    <p className="text-sm font-semibold text-[#fef08a]">{category.subtitle}</p>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {category.description}
                  </p>

                  <div className="p-4 rounded-xl bg-[#050a16] border border-slate-800 space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Typical Business Applications
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200">{category.businessApplication}</p>
                  </div>

                  {/* Key Characteristics */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#d4af37] block">
                      Supply Highlights
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {category.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommended Sectors */}
                  <div className="flex items-center gap-2 flex-wrap pt-2">
                    <span className="text-xs text-slate-400">Target Industries:</span>
                    {category.recommendedIndustries.map((ind, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-[#0e1b38] border border-slate-700 text-[11px] text-slate-300 font-medium"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bulk Supply CTA Bar */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    <span className="text-[#fef08a] font-semibold block">Bulk Sourcing</span>
                    Inquire for commercial quantity requirements and delivery across Pakistan.
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      id={`enquire-btn-${category.id}`}
                      onClick={() => onOpenBulkModal(category.name)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-[#070e1e] bg-gradient-to-r from-[#fae596] via-[#d4af37] to-[#b58d20] hover:from-[#fff0ad] hover:via-[#e5c158] hover:to-[#c59b27] shadow-lg transition-all active:scale-[0.98]"
                    >
                      <span>Enquire for Bulk Supply</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#070e1e]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Procurement Note Section */}
      <section className="p-8 rounded-2xl bg-[#060c18] border border-slate-800 text-center space-y-3">
        <h3 className="text-lg font-bold text-white font-heading">Custom Bulk Formulations &amp; Inquiries</h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
          If your production process requires specific particle size distributions, color index compatibility, or specialized dispersion formats, contact our sales desk directly.
        </p>
        <div className="pt-2 flex justify-center">
          <a
            href={`tel:${BUSINESS_CONFIG.phone}`}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#fef08a] hover:underline"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Call {BUSINESS_CONFIG.phoneDisplay} for Immediate Inquiries</span>
          </a>
        </div>
      </section>
    </div>
  );
};
