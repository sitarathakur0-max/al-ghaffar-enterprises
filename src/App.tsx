import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { ContactPage } from './pages/ContactPage';
import { BulkEnquiryModal } from './components/BulkEnquiryModal';
import { BUSINESS_CONFIG } from './config/business';
import { Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalCategory, setModalCategory] = useState<string | undefined>(undefined);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Sync with browser hash on initial load and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'about', 'products', 'applications', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBulkModal = (category?: string) => {
    setModalCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseBulkModal = () => {
    setIsModalOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#060c18] text-slate-100 selection:bg-[#d4af37]/30 selection:text-white relative">
      {/* Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenBulkModal={handleOpenBulkModal}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenBulkModal={handleOpenBulkModal}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenBulkModal={() => handleOpenBulkModal()}
          />
        )}
        {currentPage === 'products' && (
          <ProductsPage
            onNavigate={navigateTo}
            onOpenBulkModal={handleOpenBulkModal}
          />
        )}
        {currentPage === 'applications' && (
          <ApplicationsPage
            onNavigate={navigateTo}
            onOpenBulkModal={handleOpenBulkModal}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Bulk Enquiry Modal */}
      <BulkEnquiryModal
        isOpen={isModalOpen}
        onClose={handleCloseBulkModal}
        selectedCategory={modalCategory}
      />

      {/* Direct Phone Call Floating Quick-Action (Strictly Phone Call, NO WhatsApp) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {showBackToTop && (
          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="p-3 rounded-full bg-slate-900/90 hover:bg-[#d4af37] text-slate-300 hover:text-[#070e1e] border border-slate-700 shadow-xl transition-all duration-200"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <a
          id="floating-phone-call-btn"
          href={`tel:${BUSINESS_CONFIG.phone}`}
          aria-label={`Call Al Ghaffar Enterprises at ${BUSINESS_CONFIG.phoneDisplay}`}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#fae596] via-[#d4af37] to-[#b58d20] text-[#070e1e] font-bold text-xs sm:text-sm shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-all group"
        >
          <div className="p-1 rounded-full bg-[#070e1e]/10">
            <Phone className="w-4 h-4 text-[#070e1e]" />
          </div>
          <span className="hidden sm:inline">Call: {BUSINESS_CONFIG.phoneDisplay}</span>
          <span className="sm:hidden">Call Desk</span>
        </a>
      </div>
    </div>
  );
}
