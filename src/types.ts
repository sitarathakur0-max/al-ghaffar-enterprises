export type PageId = 'home' | 'about' | 'products' | 'applications' | 'contact';

export interface ProductCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  businessApplication: string;
  image: string;
  features: string[];
  recommendedIndustries: string[];
  badge?: string;
}

export interface ApplicationSector {
  id: string;
  title: string;
  description: string;
  suitabilityNote: string;
  compatibleCategories: string[];
  iconName: string;
}

export interface CompanyInfo {
  name: string;
  legalType: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  deliveryArea: string;
  orderPolicy: string;
  socials: {
    facebook: string;
    tiktok: string;
  };
}

export interface EnquiryFormState {
  fullName: string;
  companyName: string;
  phoneNumber: string;
  emailAddress: string;
  categoryOfInterest: string;
  cityDelivery: string;
  estimatedVolume: string;
  message: string;
}
