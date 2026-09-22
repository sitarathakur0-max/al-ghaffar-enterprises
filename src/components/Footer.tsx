import React from 'react';
import { BrandLogo } from './BrandLogo';
import { PageId } from '../types';
import { BUSINESS_CONFIG } from '../config/business';
import { Phone, Mail, MapPin, Truck, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#040812] border-t border-[#d4af37]/30 text-slate-300 relative overflow-hidden">
      {/* Decorative Gold Ambient Gradient Mesh */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_100%_0%,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle_at_0%_100%,rgba(16,30,61,0.4),transparent_70%)] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="footer" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm pt-2">
              Al Ghaffar Enterprises is an industrial chemicals and premium pigments supplier dedicated to serving manufacturers, processors, and commercial workshops across Pakistan with bulk material sourcing.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0b152b] border border-[#d4af37]/30 text-xs text-[#fef08a]">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span className="font-semibold">{BUSINESS_CONFIG.orderPolicy}</span>
            </div>

            {/* Social Media (strictly TikTok and Facebook as supplied) */}
            <div className="pt-2">
              <span className="block text-xs font-semibold tracking-wider text-slate-400 uppercase mb-2">
                Official Profiles
              </span>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  id="footer-social-facebook"
                  href={BUSINESS_CONFIG.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Al Ghaffar Enterprises on Facebook"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0a1325] border border-slate-700 hover:border-[#d4af37]/60 text-slate-200 hover:text-white transition-colors group"
                >
                  <svg className="w-4 h-4 text-[#1877F2] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-xs font-medium">Facebook</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-[#d4af37]" />
                </a>

                {/* TikTok */}
                <a
                  id="footer-social-tiktok"
                  href={BUSINESS_CONFIG.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Al Ghaffar Enterprises on TikTok"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0a1325] border border-slate-700 hover:border-[#d4af37]/60 text-slate-200 hover:text-white transition-colors group"
                >
                  <svg className="w-4 h-4 text-slate-100 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                  <span className="text-xs font-medium">TikTok</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-[#d4af37]" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Quick Links (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold tracking-wider text-[#d4af37] uppercase font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Al Ghaffar' },
                { id: 'products', label: 'Product Categories' },
                { id: 'applications', label: 'Industrial Applications' },
                { id: 'contact', label: 'Contact & Bulk Enquiries' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id as PageId)}
                    className="text-slate-400 hover:text-[#fef08a] hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                  >
                    <span className="text-[#d4af37]/60">›</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold tracking-wider text-[#d4af37] uppercase font-heading">
              Categories
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Pearl Powders</li>
              <li>Bronze Powders</li>
              <li>Fluorescent Pigments</li>
              <li>Motion Pigments</li>
              <li>Metallic Paste</li>
              <li>Industrial Chemicals</li>
            </ul>
          </div>

          {/* Column 4: Contact & Nationwide Supply (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold tracking-wider text-[#d4af37] uppercase font-heading">
              Commercial Enquiries
            </h4>

            <div className="space-y-3 text-sm">
              <a
                id="footer-phone-link"
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="flex items-center gap-3 p-2.5 rounded-lg bg-[#081023] border border-slate-800 hover:border-[#d4af37]/50 text-slate-200 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded bg-[#0e1b38] text-[#d4af37] group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400">Call for Bulk Orders</span>
                  <span className="font-semibold text-slate-100">{BUSINESS_CONFIG.phoneDisplay}</span>
                </div>
              </a>

              <a
                id="footer-email-link"
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="flex items-center gap-3 p-2.5 rounded-lg bg-[#081023] border border-slate-800 hover:border-[#d4af37]/50 text-slate-200 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded bg-[#0e1b38] text-[#d4af37] group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] text-slate-400">Email Business Requirements</span>
                  <span className="font-semibold text-slate-100 truncate block text-xs sm:text-sm">
                    {BUSINESS_CONFIG.email}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-2.5 pt-1 text-xs text-slate-400">
                <Truck className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>{BUSINESS_CONFIG.deliveryArea}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 mt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} <span className="text-slate-300 font-semibold">{BUSINESS_CONFIG.name}</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-slate-400">B2B Bulk Industrial Supplier</span>
            <span>•</span>
            <span className="text-[#d4af37]">{BUSINESS_CONFIG.orderPolicy}</span>
            <span>•</span>
            <span className="text-slate-400">All Over Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
