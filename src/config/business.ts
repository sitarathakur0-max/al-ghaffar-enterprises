import { CompanyInfo, ProductCategory, ApplicationSector } from '../types';

// Centralized business image imports
import heroPigmentsImg from '../assets/images/hero_pigments_display_1789881101364.jpg';
import pearlPowdersImg from '../assets/images/pearl_powders_showcase_1789881116358.jpg';
import bronzePowdersImg from '../assets/images/bronze_powders_showcase_1789881132615.jpg';
import fluorescentPigmentsImg from '../assets/images/fluorescent_pigments_showcase_1789881148948.jpg';
import industrialCoatingsImg from '../assets/images/industrial_coatings_pigments_1789881163455.jpg';

export const BUSINESS_CONFIG: CompanyInfo = {
  name: 'Al Ghaffar Enterprises',
  legalType: 'Industrial Chemicals & Premium Pigments Supplier',
  phone: '+923020020047',
  phoneDisplay: '+92 302 002 0047',
  email: 'alghafarenterprises@gmail.com',
  deliveryArea: 'Delivery Available Across Pakistan',
  orderPolicy: 'BULK ORDERS ONLY',
  socials: {
    tiktok: 'https://www.tiktok.com/@al.ghafar.enterprises?is_from_webapp=1&sender_device=pc',
    facebook: 'https://www.facebook.com/profile.php?id=61590609956345',
  },
};

export const BRAND_ASSETS = {
  heroBanner: heroPigmentsImg,
  pearlPowders: pearlPowdersImg,
  bronzePowders: bronzePowdersImg,
  fluorescentPigments: fluorescentPigmentsImg,
  industrialCoatings: industrialCoatingsImg,
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'pearl-powders',
    name: 'Pearl Powders',
    subtitle: 'Pearlescent & Golden Pearl Luster Pigments',
    description:
      'Premium pearlescent pigments engineered for applications requiring refined light-reflecting sheen, silky depth, and distinguished decorative finishes. Available in classical pearl white, golden pearl, and multi-tone iridescence.',
    businessApplication:
      'Widely integrated into high-grade automotive coatings, decorative interior paints, cosmetic formulations, luxury plastics, and artisan epoxy resin casting.',
    image: pearlPowdersImg,
    badge: 'High Demand Category',
    features: [
      'Refined light-reflecting pearlescent effect',
      'Excellent dispersion in solvent and water-based systems',
      'Resistant to discoloration under heat and UV exposure',
      'Consistent particle size distribution for smooth spray application',
    ],
    recommendedIndustries: ['Paints & Coatings', 'Plastics & Polymers', 'Cosmetics', 'Resin Art & Crafts'],
  },
  {
    id: 'bronze-powders',
    name: 'Bronze Powders',
    subtitle: 'Rich Metallic Bronze & Golden Powders',
    description:
      'Metallic bronze pigment powders designed for industrial and artistic applications requiring rich metallic luster, high opacity, and authentic golden-bronze sheen.',
    businessApplication:
      'Utilized in metallic coatings, architectural finishes, gravure and screen printing inks, plastic masterbatches, and decorative handicraft gilding.',
    image: bronzePowdersImg,
    badge: 'Commercial Metallic Grade',
    features: [
      'High metallic reflectivity and warm golden finish',
      'Optimum leafing and non-leafing dispersion grades available',
      'Dense surface hiding power and opacity',
      'Compatible with standard industrial resins and binders',
    ],
    recommendedIndustries: ['Paints & Coatings', 'Decorative Handicrafts', 'Printing & Inks', 'Plastics'],
  },
  {
    id: 'fluorescent-pigments',
    name: 'Fluorescent Pigment Powders',
    subtitle: 'High-Visibility & Radiant Glow Colorants',
    description:
      'Vivid, high-visibility fluorescent color pigments that convert absorbed UV radiation into intense visible light. Engineered for maximum luminous intensity and eye-catching brightness.',
    businessApplication:
      'Essential for industrial safety markings, security signs, textile printing, promotional plastics, specialty coatings, and graphic inks.',
    image: fluorescentPigmentsImg,
    badge: 'High-Visibility Range',
    features: [
      'Ultra-high visual chromaticity and brilliance',
      'Uniform powder consistency with low plate-out',
      'Suitable for both solvent-based and aqueous formulations',
      'Available across full fluorescent color spectrum',
    ],
    recommendedIndustries: ['Safety & Industrial Markings', 'Textile Printing', 'Plastics & Molding', 'Coatings'],
  },
  {
    id: 'motion-pigments',
    name: 'Motion Pigments',
    subtitle: 'Dynamic Angle-Dependent Special Effect Colorants',
    description:
      'Special-effect pigments crafted to deliver dynamic visual color shifts and dimensional movement as the viewing angle changes under variable ambient illumination.',
    businessApplication:
      'Used in premium automotive finishes, luxury cosmetic packaging, specialty architectural paints, high-end polymer components, and decorative resin art.',
    image: heroPigmentsImg,
    badge: 'Special Effect Series',
    features: [
      'Dynamic multi-angle color movement and reflection',
      'Strong visual impact without fading',
      'Smooth integration with transparent binder matrices',
      'Formulated for discerning commercial aesthetics',
    ],
    recommendedIndustries: ['Automotive Coatings', 'Luxury Packaging', 'Resin & Art', 'Consumer Electronics'],
  },
  {
    id: 'metallic-paste',
    name: 'Metallic Paste',
    subtitle: 'High-Reflectivity Metallic Pigment Dispersions',
    description:
      'Convenient pre-dispersed metallic paste formulated with carrier liquids to eliminate airborne dust, ensuring safe handling, effortless blending, and mirror-like metallic sheen.',
    businessApplication:
      'Preferred by industrial paint manufacturers, coil coatings, industrial aerosol lines, industrial machinery coatings, and commercial printing presses.',
    image: bronzePowdersImg,
    badge: 'Dust-Free Dispersion',
    features: [
      'Pre-wetted paste format reduces processing dust',
      'Exceptional orientation for brilliant leafing luster',
      'Rapid dispersion into blending kettles',
      'Superior shelf stability and consistent batch viscosity',
    ],
    recommendedIndustries: ['Industrial Coatings', 'Automotive Refinish', 'Inks & Gravure', 'Metallic Finishes'],
  },
  {
    id: 'industrial-chemicals',
    name: 'Industrial Chemicals',
    subtitle: 'Raw Materials & Chemical Processing Agents',
    description:
      'Reliable industrial chemical supplies sourced for commercial processing, synthesis, compounding, and manufacturing operations. Dedicated strictly to commercial and industrial bulk clients.',
    businessApplication:
      'Supplying processing plants, chemical compounding facilities, surface finishing units, and raw material formulation laboratories across Pakistan.',
    image: industrialCoatingsImg,
    badge: 'Industrial Processing',
    features: [
      'Supplied in certified bulk industrial containers',
      'Rigorous sourcing for consistent commercial quality',
      'Batch traceability and technical safety documentation',
      'Nationwide logistical coordination across Pakistan',
    ],
    recommendedIndustries: ['Industrial Processing', 'Chemical Compounding', 'Manufacturing Plants', 'Surface Treatment'],
  },
];

export const APPLICATION_SECTORS: ApplicationSector[] = [
  {
    id: 'paints-coatings',
    title: 'Paints & Coatings',
    description:
      'Decorative paints, architectural enamels, automotive refinish systems, and industrial protective coatings requiring distinguished metallic brilliance or pearlescent depth.',
    suitabilityNote:
      'Supplying fine-milled powders and metallic dispersions compatible with solvent-borne, water-borne, and powder coating systems.',
    compatibleCategories: ['Pearl Powders', 'Bronze Powders', 'Metallic Paste', 'Motion Pigments'],
    iconName: 'Paintbrush',
  },
  {
    id: 'plastics-polymers',
    title: 'Plastics & Masterbatches',
    description:
      'Thermoplastic molding, blow molding, extrusion, masterbatch compounding, and engineered polymers where thermal stability and uniform pigment distribution are paramount.',
    suitabilityNote:
      'High temperature resistance prevents pigment degradation during standard extrusion and injection cycles.',
    compatibleCategories: ['Pearl Powders', 'Fluorescent Pigment Powders', 'Bronze Powders'],
    iconName: 'Boxes',
  },
  {
    id: 'resin-art',
    title: 'Resin & Art Formulations',
    description:
      'Epoxy casting, river tables, polyurethane craft systems, artisan resin jewelry, and high-gloss floor coatings needing mesmerizing optical swirls and metallic veins.',
    suitabilityNote:
      'Micronized particles suspend uniformly in epoxy and polyurethane resins without rapid sedimentation.',
    compatibleCategories: ['Pearl Powders', 'Motion Pigments', 'Bronze Powders', 'Fluorescent Pigments'],
    iconName: 'Sparkles',
  },
  {
    id: 'cosmetics-personal-care',
    title: 'Cosmetics & Personal Care',
    description:
      'Color cosmetics, nail lacquers, decorative creams, soaps, and body shimmers designed to catch light with skin-safe shimmer and elegance.',
    suitabilityNote:
      'Offered for commercial cosmetic laboratories and licensed formulation manufacturers.',
    compatibleCategories: ['Pearl Powders', 'Golden Pearl Powders'],
    iconName: 'HeartHandshake',
  },
  {
    id: 'industrial-applications',
    title: 'Industrial Applications',
    description:
      'Heavy equipment coatings, pipe and structural metal preservation, industrial equipment markings, high-visibility safety barriers, and chemical processing facilities.',
    suitabilityNote:
      'Bulk supply packaging engineered for industrial mixing tanks, hoppers, and automated dosing equipment.',
    compatibleCategories: ['Industrial Chemicals', 'Metallic Paste', 'Fluorescent Pigments'],
    iconName: 'Factory',
  },
  {
    id: 'decorative-handicrafts',
    title: 'Decorative & Handicraft Applications',
    description:
      'Gilding, plaster ornamentation, pottery glazing, textile block printing, traditional handicrafts, and heritage architectural restoration work.',
    suitabilityNote:
      'Rich metallic pigments impart genuine gold and bronze visual finishes for high-end decorative crafts.',
    compatibleCategories: ['Bronze Powders', 'Pearl Powders', 'Metallic Paste'],
    iconName: 'Palette',
  },
];

export const TRUST_FACTORS = [
  {
    title: 'B2B & Bulk Order Focus',
    description:
      'Exclusively structured to serve manufacturers, industrial plants, and commercial clients with volume supply rather than retail distribution.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Delivery Across Pakistan',
    description:
      'Reliable logistics coordination providing safe, scheduled delivery to industrial hubs, factories, and workshops nationwide.',
    icon: 'Truck',
  },
  {
    title: 'Rigorous Category Expertise',
    description:
      'Focused specialization in pearlescent, bronze, fluorescent, and chemical categories to ensure proper material pairing for your process.',
    icon: 'Award',
  },
  {
    title: 'Transparent Commercial Service',
    description:
      'Direct business communication via phone and email. Responsive bulk quotations tailored to your volume requirements and production schedule.',
    icon: 'Headphones',
  },
];
