import React, { useEffect } from 'react';
import { BulkQuoteForm } from './BulkQuoteForm';
import { X } from 'lucide-react';

interface BulkEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory?: string;
}

export const BulkEnquiryModal: React.FC<BulkEnquiryModalProps> = ({
  isOpen,
  onClose,
  selectedCategory,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="bulk-enquiry-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#060c18] border border-[#d4af37]/40 shadow-[0_0_50px_rgba(212,175,55,0.2)] animate-in zoom-in-95 duration-200">
        <button
          id="close-bulk-modal-btn"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <BulkQuoteForm
          initialCategory={selectedCategory}
          onSuccessClose={onClose}
          title="Direct Commercial Bulk Enquiry"
          subtitle="Connect with Al Ghaffar Enterprises for high-volume pigment & industrial chemical supply across Pakistan."
        />
      </div>
    </div>
  );
};
