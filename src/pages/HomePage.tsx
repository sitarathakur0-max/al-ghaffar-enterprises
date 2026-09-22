import React from 'react';
import { PageId } from '../types';
import { BUSINESS_CONFIG, BRAND_ASSETS, PRODUCT_CATEGORIES, APPLICATION_SECTORS, TRUST_FACTORS } from '../config/business';
import { Phone, Mail, ArrowRight, ShieldCheck, Truck, Sparkles, Layers, CheckCircle2, ChevronRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBulkModal: (category?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBulkModal }) => {
  return (
    <div id="home-page" className="space-y-24 pb-20">
      {/* ========================================================================= */}
      {/* HERO SECTION                                                             */}
      {/* ========================================================================= */}
      <section id="hero-section" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
        {/* Ambient Dark Navy & Gold Radial Highlights */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040813] via-[#070e1e] to-[#040812] -z-20" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),transparent_70%)] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0b162c] border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                <span className="text-xs sm:text-sm font-bold tracking-widest text-[#fef08a] uppercase font-heading">
                  PREMIUM PIGMENTS &amp; INDUSTRIAL CHEMICALS
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-heading">
                Industrial Chemicals &amp; <span className="gold-text-gradient">Premium Pigments</span> for Business Applications
              </h1>

              {/* Supporting Copy */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Al Ghaffar Enterprises supplies premium pigments and industrial chemical products for businesses and industrial applications, with bulk orders and delivery across Pakistan.
              </p>

              {/* B2B Commercial Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e1b38] border border-[#d4af37]/30 text-xs font-semibold text-[#fef08a]">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                  <span>{BUSINESS_CONFIG.orderPolicy}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e1b38] border border-slate-700 text-xs font-semibold text-slate-200">
                  <Truck className="w-4 h-4 text-[#d4af37]" />
                  <span>{BUSINESS_CONFIG.deliveryArea}</span>
                </div>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  id="hero-request-quote-cta"
                  onClick={() => onOpenBulkModal()}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-bold tracking-wide text-[#070e1e] bg-gradient-to-r from-[#fae596] via-[#d4af37] to-[#b58d20] hover:from-[#fff0ad] hover:via-[#e5c158] hover:to-[#c59b27] shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-200 active:scale-[0.98]"
                >
                  <span>Request a Bulk Quote</span>
                  <ArrowRight className="w-4 h-4 text-[#070e1e]" />
                </button>

                <button
                  id="hero-explore-products-cta"
                  onClick={() => onNavigate('products')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-[#d4af37]/50 transition-all duration-200"
                >
                  <span>Explore Products</span>
                  <ChevronRight className="w-4 h-4 text-[#d4af37]" />
                </button>
              </div>

              {/* Clearly Accessible Phone Contact (not WhatsApp) */}
              <div className="pt-2 flex items-center gap-3 text-sm text-slate-300">
                <span className="text-slate-400">Direct Business Line:</span>
                <a
                  id="hero-phone-call-link"
                  href={`tel:${BUSINESS_CONFIG.phone}`}
                  className="inline-flex items-center gap-2 font-bold text-white hover:text-[#d4af37] transition-colors group"
                >
                  <div className="p-1.5 rounded-full bg-[#d4af37]/15 text-[#d4af37] group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="underline decoration-[#d4af37]/40 underline-offset-4">{BUSINESS_CONFIG.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual Column (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl p-2 bg-gradient-to-b from-[#d4af37]/50 via-slate-800/40 to-[#d4af37]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#070e1e]">
                  <img
                    src={BRAND_ASSETS.heroBanner}
                    alt="Premium Pigment Powders and Industrial Chemicals supplied by Al Ghaffar Enterprises"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040812] via-transparent to-transparent opacity-60" />

                  {/* Floating Material Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#060c18]/90 backdrop-blur-md border border-[#d4af37]/35 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-3 h-3 rounded-full bg-[#d4af37] shadow-[0_0_10px_#d4af37]" />
                        <span className="text-xs font-bold text-white uppercase tracking-wider font-heading">
                          Industrial Grade Supply
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#fef08a]">Bulk Inquiries Only</span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1">
                      Serving coatings, masterbatch compounding, decorative arts, and commercial manufacturing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 1. BUSINESS INTRODUCTION                                                  */}
      {/* ========================================================================= */}
      <section id="business-intro-section" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#070e1e] via-[#0a152e] to-[#070e1e] border border-[#d4af37]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_100%_0%,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#d4af37] uppercase font-heading">
                About Al Ghaffar Enterprises
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading">
                Dedicated Industrial Chemical &amp; Pigment Partner for Pakistani Enterprises
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Al Ghaffar Enterprises is an industrial chemicals and premium pigments business focused on supplying products for industrial and commercial applications. Operating exclusively as a bulk-order supplier, we coordinate with processors, compounders, masterbatch producers, and paint manufacturers across Pakistan to fulfill their volume raw material requirements.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Verified Category Expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Commercial Packaging Containers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Nationwide Logistics Coordination</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <div className="p-5 rounded-2xl bg-[#060c18] border border-slate-800 text-center space-y-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Commercial Procurement
                </span>
                <div className="text-xl font-bold text-[#fef08a] font-heading">
                  Bulk Orders Only
                </div>
                <p className="text-xs text-slate-400">
                  We supply strictly in bulk quantities for registered businesses and manufacturing facilities.
                </p>
                <button
                  onClick={() => onNavigate('about')}
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#d4af37] hover:text-[#fef08a] font-semibold underline underline-offset-4"
                >
                  <span>Learn More About Us</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PRODUCT CATEGORIES                                                     */}
      {/* ========================================================================= */}
      <section id="product-categories-section" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#d4af37] uppercase font-heading">
              Our Core Supply Categories
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading mt-1">
              Industrial Chemicals &amp; Premium Pigments
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mt-2">
              Explore our core product categories below. Contact us directly for bulk orders and commercial requirements.
            </p>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#fef08a] hover:text-white transition-colors"
          >
            <span>View All Product Details</span>
            <ArrowRight className="w-4 h-4 text-[#d4af37]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              id={`home-product-card-${cat.id}`}
              className="group rounded-2xl bg-[#081125] border border-slate-800 hover:border-[#d4af37]/60 overflow-hidden shadow-xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.8)] transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#040812]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081125] via-transparent to-transparent opacity-80" />
                {cat.badge && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#070e1e]/90 backdrop-blur-sm border border-[#d4af37]/40 text-[10px] font-bold text-[#fef08a] uppercase tracking-wider">
                    {cat.badge}
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#fef08a] transition-colors font-heading">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#d4af37] font-medium mt-0.5">{cat.subtitle}</p>
                  <p className="text-slate-300 text-xs sm:text-sm mt-2.5 line-clamp-3 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                    Bulk Supply
                  </span>
                  <button
                    onClick={() => onOpenBulkModal(cat.name)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1b38] hover:bg-[#d4af37] text-[#d4af37] hover:text-[#070e1e] text-xs font-bold border border-[#d4af37]/40 transition-all"
                  >
                    <span>Enquire Bulk</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHY BUSINESSES CHOOSE AL GHAFFAR ENTERPRISES                           */}
      {/* ========================================================================= */}
      <section id="why-choose-us-section" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#d4af37] uppercase font-heading">
            Commercial Advantages
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading mt-1">
            Why Businesses Choose Al Ghaffar Enterprises
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Built from the ground up to supply industrial clients and manufacturers with transparent communication, stable category supply, and prompt logistics across Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_FACTORS.map((factor, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#070f22] border border-slate-800 hover:border-[#d4af37]/40 transition-all duration-200 space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0e1b38] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                {idx === 0 && <ShieldCheck className="w-6 h-6" />}
                {idx === 1 && <Truck className="w-6 h-6" />}
                {idx === 2 && <Layers className="w-6 h-6" />}
                {idx === 3 && <Phone className="w-6 h-6" />}
              </div>
              <h3 className="text-base font-bold text-white font-heading">{factor.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{factor.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. INDUSTRIAL APPLICATIONS OVERVIEW                                       */}
      {/* ========================================================================= */}
      <section id="applications-preview-section" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#081125] border border-[#d4af37]/30">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#d4af37] uppercase font-heading">
                Industrial Relevance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1">
                Serving Key Manufacturing &amp; Decorative Sectors
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mt-1">
                Our pigments and chemicals are integrated into a spectrum of industrial, manufacturing, and decorative application areas.
              </p>
            </div>
            <button
              onClick={() => onNavigate('applications')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#fef08a] hover:underline"
            >
              <span>Explore Application Directory</span>
              <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {APPLICATION_SECTORS.map((sector) => (
              <div
                key={sector.id}
                className="p-5 rounded-xl bg-[#050a16] border border-slate-800 hover:border-slate-700 transition-colors space-y-2.5"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
                  <h3 className="text-base font-bold text-white font-heading">{sector.title}</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">{sector.description}</p>
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {sector.compatibleCategories.slice(0, 2).map((catName, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-800/80 text-[10px] text-slate-300 border border-slate-700"
                    >
                      {catName}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. BULK SUPPLY / DELIVERY ACROSS PAKISTAN                                 */}
      {/* ========================================================================= */}
      <section id="delivery-pakistan-section" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-gradient-to-br from-[#0b162d] via-[#070e1f] to-[#040813] border border-[#d4af37]/35 p-8 sm:p-12 shadow-2xl">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#d4af37]/15 border border-[#d4af37]/30 text-xs font-bold text-[#fef08a] uppercase">
              <Truck className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Nationwide Logistic Coverage</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading">
              Delivery Available Across Pakistan
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We deliver industrial chemicals and premium pigments all over Pakistan. Whether your manufacturing facility is situated in major industrial hubs like Karachi, Lahore, Faisalabad, Gujranwala, Sialkot, Peshawar, Multan, or regional industrial zones, our team coordinates bulk cargo shipments safely and dependably.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#060c18] border border-slate-800 space-y-1">
                <span className="text-xs font-semibold text-[#d4af37] uppercase">Commercial Packaging</span>
                <p className="text-xs text-slate-300">
                  Safely sealed industrial drums, bags, and cartons tailored for bulk storage and industrial compounding.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#060c18] border border-slate-800 space-y-1">
                <span className="text-xs font-semibold text-[#d4af37] uppercase">Direct Dispatch</span>
                <p className="text-xs text-slate-300">
                  Bulk order transport arranged with trusted commercial carriers across all provinces.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-[#060c18]/90 border border-[#d4af37]/30">
            <div className="w-16 h-16 rounded-2xl bg-[#0e1b38] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] mb-4">
              <Truck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white font-heading">Bulk Orders Only</h3>
            <p className="text-xs text-slate-400 mt-2 max-w-xs">
              Direct B2B supply for industrial, factory, and commercial workshop procurement.
            </p>
            <div className="mt-5 w-full space-y-2.5">
              <button
                onClick={() => onOpenBulkModal()}
                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#fae596] via-[#d4af37] to-[#b58d20] text-[#070e1e] font-bold text-sm shadow-md"
              >
                Inquire for Your Region
              </button>
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. BUSINESS ENQUIRY CTA SECTION                                           */}
      {/* ========================================================================= */}
      <section id="home-cta-section" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-[#070e1e] via-[#0f2042] to-[#070e1e] border border-[#d4af37]/40 shadow-2xl text-center overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-xs font-bold text-[#fef08a] uppercase font-heading">
              {BUSINESS_CONFIG.orderPolicy}
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
              Ready to Source Industrial Chemicals &amp; Pigments for Your Business?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Contact our sales desk to discuss your specifications, requested grades, packaging, and bulk order quantities. Delivery available throughout Pakistan.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="cta-request-bulk-quote"
                onClick={() => onOpenBulkModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-[#070e1e] bg-gradient-to-r from-[#fae596] via-[#d4af37] to-[#b58d20] hover:from-[#fff0ad] hover:via-[#e5c158] hover:to-[#c59b27] shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all"
              >
                <span>Request a Bulk Quote</span>
                <ArrowRight className="w-4 h-4 text-[#070e1e]" />
              </button>

              <a
                id="cta-call-direct"
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-slate-900 border border-slate-700 hover:border-[#d4af37]/60 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
            </div>

            <p className="text-xs text-slate-400 pt-2">
              Email inquiries: <span className="text-slate-200">{BUSINESS_CONFIG.email}</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
