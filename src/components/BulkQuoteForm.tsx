import React, { useState } from 'react';
import { BUSINESS_CONFIG, PRODUCT_CATEGORIES } from '../config/business';
import { Phone, Mail, Send, CheckCircle2, AlertCircle, Building2, User, FileText } from 'lucide-react';

interface BulkQuoteFormProps {
  initialCategory?: string;
  onSuccessClose?: () => void;
  title?: string;
  subtitle?: string;
}

export const BulkQuoteForm: React.FC<BulkQuoteFormProps> = ({
  initialCategory,
  title = 'Request a Commercial Bulk Quotation',
  subtitle = 'Supplying industrial-grade pigments & chemicals across Pakistan. For business inquiries only.',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    emailAddress: '',
    categoryOfInterest: initialCategory || 'Pearl Powders',
    deliveryCity: '',
    estimatedVolume: '',
    requirementMessage: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedPreview, setSubmittedPreview] = useState<boolean>(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Contact name is required';
    if (!formData.companyName.trim()) errs.companyName = 'Business/Company name is required';
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required';
    } else if (formData.phoneNumber.trim().length < 8) {
      errs.phoneNumber = 'Please enter a valid phone number';
    }
    if (!formData.emailAddress.trim()) {
      errs.emailAddress = 'Business email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())) {
      errs.emailAddress = 'Please enter a valid email address';
    }
    if (!formData.requirementMessage.trim()) {
      errs.requirementMessage = 'Please describe your bulk requirement or specifications';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmittedPreview(true);
  };

  const handleLaunchEmailClient = () => {
    const subject = encodeURIComponent(`Bulk Enquiry: ${formData.categoryOfInterest} - ${formData.companyName}`);
    const bodyText = encodeURIComponent(
      `To: Al Ghaffar Enterprises (${BUSINESS_CONFIG.email})\n\n` +
      `COMMERCIAL BULK ENQUIRY DETAILS:\n` +
      `-------------------------------------------\n` +
      `Company / Business: ${formData.companyName}\n` +
      `Contact Person: ${formData.fullName}\n` +
      `Phone: ${formData.phoneNumber}\n` +
      `Email: ${formData.emailAddress}\n` +
      `Product Category: ${formData.categoryOfInterest}\n` +
      `Delivery Destination: ${formData.deliveryCity || 'Pakistan Nationwide'}\n` +
      `Estimated Volume: ${formData.estimatedVolume || 'Standard Bulk Inquiry'}\n\n` +
      `REQUIREMENTS / SPECIFICATIONS:\n` +
      `${formData.requirementMessage}\n\n` +
      `Order Type: Bulk Order Only\n`
    );
    window.location.href = `mailto:${BUSINESS_CONFIG.email}?subject=${subject}&body=${bodyText}`;
  };

  return (
    <div id="bulk-quote-form-container" className="bg-[#081125] border border-[#d4af37]/35 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#d4af37]/15 border border-[#d4af37]/30 text-xs text-[#fef08a] font-semibold tracking-wider uppercase mb-2">
          {BUSINESS_CONFIG.orderPolicy}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">{title}</h3>
        <p className="text-slate-400 text-sm mt-1">{subtitle}</p>
      </div>

      {submittedPreview ? (
        <div id="enquiry-submission-prepared" className="space-y-6 animate-in fade-in duration-300">
          <div className="p-5 rounded-xl bg-[#0e1b38] border border-[#d4af37]/40 space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#d4af37] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white text-base">Bulk Enquiry Package Ready</h4>
                <p className="text-slate-300 text-xs mt-1">
                  Your bulk request has been formatted for direct dispatch to Al Ghaffar Enterprises. Since this platform operates as a direct business directory, choose your preferred method to complete submission:
                </p>
              </div>
            </div>

            <div className="bg-[#050914] p-4 rounded-lg border border-slate-800 text-xs space-y-2 text-slate-300 font-mono">
              <div><strong className="text-[#d4af37]">Recipient:</strong> {BUSINESS_CONFIG.email}</div>
              <div><strong className="text-[#d4af37]">Company:</strong> {formData.companyName}</div>
              <div><strong className="text-[#d4af37]">Contact:</strong> {formData.fullName} ({formData.phoneNumber})</div>
              <div><strong className="text-[#d4af37]">Product Category:</strong> {formData.categoryOfInterest}</div>
              <div><strong className="text-[#d4af37]">Requirement:</strong> {formData.requirementMessage}</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                id="send-email-draft-btn"
                onClick={handleLaunchEmailClient}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-r from-[#fae596] via-[#d4af37] to-[#b58d20] text-[#070e1e] font-bold text-sm shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
              >
                <Mail className="w-4 h-4 text-[#070e1e]" />
                <span>Open in Email App &amp; Send</span>
              </button>

              <a
                id="enquiry-call-direct-btn"
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <button
            onClick={() => setSubmittedPreview(false)}
            className="text-xs text-slate-400 hover:text-slate-200 underline block mx-auto"
          >
            ← Modify Form Details
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="enquiry-full-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                Contact Person Name *
              </label>
              <div className="relative">
                <input
                  id="enquiry-full-name"
                  type="text"
                  placeholder="e.g. Muhammad Usman"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full bg-[#050a16] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 ${
                    errors.fullName ? 'border-red-500' : 'border-slate-700 focus:border-[#d4af37]'
                  }`}
                />
              </div>
              {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="enquiry-company-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                Business / Company Name *
              </label>
              <div className="relative">
                <input
                  id="enquiry-company-name"
                  type="text"
                  placeholder="e.g. Crest Coatings Industries"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className={`w-full bg-[#050a16] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 ${
                    errors.companyName ? 'border-red-500' : 'border-slate-700 focus:border-[#d4af37]'
                  }`}
                />
              </div>
              {errors.companyName && <p className="text-red-400 text-xs mt-1">{errors.companyName}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone Number */}
            <div>
              <label htmlFor="enquiry-phone-number" className="block text-xs font-semibold text-slate-300 mb-1.5">
                Phone Number (Calls) *
              </label>
              <input
                id="enquiry-phone-number"
                type="tel"
                placeholder="e.g. 0300 1234567"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className={`w-full bg-[#050a16] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 ${
                  errors.phoneNumber ? 'border-red-500' : 'border-slate-700 focus:border-[#d4af37]'
                }`}
              />
              {errors.phoneNumber && <p className="text-red-400 text-xs mt-1">{errors.phoneNumber}</p>}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="enquiry-email-address" className="block text-xs font-semibold text-slate-300 mb-1.5">
                Business Email Address *
              </label>
              <input
                id="enquiry-email-address"
                type="email"
                placeholder="procurement@company.com"
                value={formData.emailAddress}
                onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                className={`w-full bg-[#050a16] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 ${
                  errors.emailAddress ? 'border-red-500' : 'border-slate-700 focus:border-[#d4af37]'
                }`}
              />
              {errors.emailAddress && <p className="text-red-400 text-xs mt-1">{errors.emailAddress}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Category of Interest */}
            <div>
              <label htmlFor="enquiry-category-select" className="block text-xs font-semibold text-slate-300 mb-1.5">
                Product Category of Interest *
              </label>
              <select
                id="enquiry-category-select"
                value={formData.categoryOfInterest}
                onChange={(e) => setFormData({ ...formData, categoryOfInterest: e.target.value })}
                className="w-full bg-[#050a16] border border-slate-700 focus:border-[#d4af37] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50"
              >
                {PRODUCT_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.name} className="bg-[#070e1e] text-white">
                    {cat.name}
                  </option>
                ))}
                <option value="General Bulk Chemicals & Pigments" className="bg-[#070e1e] text-white">
                  General Bulk Chemicals &amp; Pigments
                </option>
              </select>
            </div>

            {/* Delivery Destination City */}
            <div>
              <label htmlFor="enquiry-delivery-city" className="block text-xs font-semibold text-slate-300 mb-1.5">
                Delivery City in Pakistan
              </label>
              <input
                id="enquiry-delivery-city"
                type="text"
                placeholder="e.g. Lahore, Karachi, Faisalabad, Gujranwala..."
                value={formData.deliveryCity}
                onChange={(e) => setFormData({ ...formData, deliveryCity: e.target.value })}
                className="w-full bg-[#050a16] border border-slate-700 focus:border-[#d4af37] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50"
              />
            </div>
          </div>

          {/* Requirement / Message */}
          <div>
            <label htmlFor="enquiry-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
              Requirement / Quantity / Specifications *
            </label>
            <textarea
              id="enquiry-message"
              rows={4}
              placeholder="Describe your required quantities, preferred shades/grades, or manufacturing application..."
              value={formData.requirementMessage}
              onChange={(e) => setFormData({ ...formData, requirementMessage: e.target.value })}
              className={`w-full bg-[#050a16] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 ${
                errors.requirementMessage ? 'border-red-500' : 'border-slate-700 focus:border-[#d4af37]'
              }`}
            />
            {errors.requirementMessage && <p className="text-red-400 text-xs mt-1">{errors.requirementMessage}</p>}
          </div>

          {/* Submission CTA */}
          <div className="pt-2">
            <button
              id="submit-bulk-enquiry-btn"
              type="submit"
              className="w-full py-3.5 px-6 rounded-lg text-sm sm:text-base font-bold tracking-wide text-[#070e1e] bg-gradient-to-r from-[#fae596] via-[#d4af37] to-[#b58d20] hover:from-[#fff0ad] hover:via-[#e5c158] hover:to-[#c59b27] shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Submit Bulk Enquiry</span>
              <Send className="w-4 h-4 text-[#070e1e]" />
            </button>
            <p className="text-center text-[11px] text-slate-500 mt-2.5">
              Strictly bulk commercial orders. Direct response via phone or email across Pakistan.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
