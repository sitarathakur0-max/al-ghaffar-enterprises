import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { PageId } from '../types';
import { BUSINESS_CONFIG } from '../config/business';
import { Phone, Mail, Menu, X, ArrowRight, ShieldAlert, Truck } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBulkModal?: (category?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBulkModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'products', label: 'Products' },
    { id: 'applications', label: 'Applications' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top B2B Announcement Ribbon */}
      <div className="bg-[#040812] border-b border-[#d4af37]/20 text-slate-300 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="inline-flex items-center gap-1.5 font-bold tracking-wider text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-0.5 rounded border border-[#d4af37]/30 uppercase text-[10px]">
              <ShieldAlert className="w-3 h-3 text-[#d4af37]" />
              {BUSINESS_CONFIG.orderPolicy}
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="inline-flex items-center gap-1.5 text-slate-300 text-[11px] sm:text-xs">
              <Truck className="w-3.5 h-3.5 text-[#d4af37]" />
              {BUSINESS_CONFIG.deliveryArea}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              id="header-top-phone-link"
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-[#d4af37] transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-[#d4af37]" />
              <span>{BUSINESS_CONFIG.phoneDisplay}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              id="header-top-email-link"
              href={`mailto:${BUSINESS_CONFIG.email}`}
              className="hidden lg:inline-flex items-center gap-1.5 text-slate-300 hover:text-[#d4af37] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#d4af37]" />
              <span>{BUSINESS_CONFIG.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#070e1e]/95 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] border-b border-[#d4af37]/30 py-3'
            : 'bg-[#070e1e]/85 backdrop-blur-sm border-b border-slate-800/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <BrandLogo
            variant="header"
            onClick={() => handleNavClick('home')}
            className="transition-transform duration-200 hover:scale-[1.01]"
          />

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-[#fef08a] bg-[#d4af37]/15 border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-bulk-quote-cta"
              onClick={() => {
                if (onOpenBulkModal) {
                  onOpenBulkModal();
                } else {
                  handleNavClick('contact');
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs md:text-sm font-semibold tracking-wide text-[#070e1e] bg-gradient-to-r from-[#fae596] via-[#d4af37] to-[#b58d20] hover:from-[#fff0ad] hover:via-[#e5c158] hover:to-[#c59b27] shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-200 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] active:scale-[0.98]"
            >
              <span>Request Bulk Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#070e1e]" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              id="header-mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-200 hover:text-[#d4af37] hover:border-[#d4af37]/40 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="header-mobile-drawer"
            className="md:hidden bg-[#070e1e] border-b border-[#d4af37]/30 px-5 pt-3 pb-6 space-y-2.5 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200"
          >
            <div className="pb-2 border-b border-slate-800 text-xs text-slate-400">
              <span className="text-[#d4af37] font-semibold">{BUSINESS_CONFIG.orderPolicy}</span> • Delivery Across Pakistan
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? 'bg-[#d4af37]/15 text-[#fef08a] border border-[#d4af37]/40 font-semibold'
                        : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-800 space-y-3">
              <button
                id="mobile-menu-bulk-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenBulkModal) {
                    onOpenBulkModal();
                  } else {
                    handleNavClick('contact');
                  }
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm text-[#070e1e] bg-gradient-to-r from-[#fae596] via-[#d4af37] to-[#b58d20] shadow-lg"
              >
                <span>Request Bulk Quote</span>
                <ArrowRight className="w-4 h-4 text-[#070e1e]" />
              </button>

              <div className="flex flex-col gap-2 pt-1 text-xs text-slate-300">
                <a
                  href={`tel:${BUSINESS_CONFIG.phone}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-[#d4af37] py-1"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Call: {BUSINESS_CONFIG.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${BUSINESS_CONFIG.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-[#d4af37] py-1"
                >
                  <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span className="truncate">{BUSINESS_CONFIG.email}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
