import { SiteData } from './site-data.config';
import { FullSitePaths } from './site-urls.config';

export const TOWN_KEYS = [
  'kerrville',
  'ingram',
  'centerPoint',
  'hunt',
  'comfort',
  'fredericksburg',
  'boerne',
  'bandera',
  'helotes',
] as const;

export type TownKey = (typeof TOWN_KEYS)[number];

export interface TownMetaSeoConfig {
  canonicalUrl: string;
  uniquePageImage: string;
  metaTitle: string;
  metaDescription: string;
  metaDescriptionLong: string;
}

// @Nathaniel update these SERPA tags later to be better
export const TOWN_META_SEO_CONFIGS = {
  kerrville: {
    canonicalUrl: FullSitePaths.kerrvilleTxElectrician,
    uniquePageImage: SiteData.homepageImageUrl,
    metaTitle:
      'Master Electrician in Kerrville TX | ProVolt Electrical Services',
    metaDescription:
      'Looking for a master electrician in Kerrville, TX? ProVolt Electrical Services delivers fast, affordable, high-quality electrical work. Call today!',
    metaDescriptionLong:
      'ProVolt Electrical Services provides residential, commercial, and ranch & rural electrical work in Kerrville, TX—serving Hill Country homes, small businesses, and rural properties near the Guadalupe River with clean, code-compliant workmanship.',
  },

  ingram: {
    canonicalUrl: '/service-areas/ingram-tx-electrician',
    uniquePageImage: SiteData.homepageImageUrl,
    metaTitle:
      'Licensed Electrician in Ingram TX | ProVolt Electrical Services',
    metaDescription:
      'Need a licensed electrician in Ingram, TX? Get prompt troubleshooting, panel upgrades, and safe wiring solutions from ProVolt Electrical Services. Call now!',
    metaDescriptionLong:
      'ProVolt Electrical Services serves Ingram, TX with residential and rural-property electrical work—focused on safe troubleshooting, panel capacity, outdoor power and lighting, and clean wiring for garages and workshops in the Texas Hill Country.',
  },

  centerPoint: {
    canonicalUrl: FullSitePaths.centerPointTxElectrician,
    uniquePageImage: SiteData.homepageImageUrl,
    metaTitle:
      'Local Electrician in Center Point TX | ProVolt Electrical Services',
    metaDescription:
      'Searching for an electrician in Center Point, TX? We handle repairs, GFCI/outdoor outlets, lighting, and panel upgrades—ProVolt Electrical Services. Call today!',
    metaDescriptionLong:
      'ProVolt Electrical Services serves Center Point, TX with residential and rural-property electrical work—focused on safe troubleshooting, panel capacity, outdoor power and lighting, and clean wiring for garages and workshops in the Texas Hill Country.',
  },

  hunt: {
    canonicalUrl: FullSitePaths.huntTxElectrician,
    uniquePageImage: SiteData.homepageImageUrl,
    metaTitle:
      'Insured and Licensed Electrician in Hunt TX | ProVolt Electrical Services',
    metaDescription:
      'Need a rural electrician in Hunt, TX? From surge protection to long-run circuits and outdoor power, we do it right—ProVolt Electrical Services. Call today!',
    metaDescriptionLong:
      'ProVolt Electrical Services provides Hunt, TX with dependable Hill Country electrical work—specializing in outdoor power, long-run circuits for outbuildings, panel upgrades, surge protection, and troubleshooting for river-area and rural properties.',
  },

  comfort: {
    canonicalUrl: FullSitePaths.comfortTxElectrician,
    uniquePageImage: SiteData.homepageImageUrl,
    metaTitle:
      'Residential Electrician in Comfort TX | ProVolt Electrical Services',
    metaDescription:
      'Looking for a residential electrician in Comfort, TX? Count on clean remodel wiring, lighting upgrades, and safer panels from ProVolt Electrical Services. Call now!',
    metaDescriptionLong:
      'ProVolt Electrical Services serves Comfort, TX with professional electrical repairs and upgrades—specializing in panel/service capacity, remodel wiring, lighting improvements, and safety upgrades for Hill Country homes and small businesses.',
  },

  fredericksburg: {
    canonicalUrl: FullSitePaths.fredericksburgTxElectrician,
    uniquePageImage: SiteData.homepageImageUrl,
    metaTitle:
      'Safety-Focused Electrician in Fredericksburg TX | ProVolt Electrical Services',
    metaDescription:
      'Need a safety-focused electrician in Fredericksburg, TX? We provide repairs, lighting, inspections, and panel upgrades—ProVolt Electrical Services. Schedule now!',
    metaDescriptionLong:
      'ProVolt Electrical Services provides Fredericksburg, TX with professional residential and small-business electrical service—focused on safe upgrades for homes and rentals, lighting improvements, panel capacity, and reliable troubleshooting in the Texas Hill Country.',
  },

  boerne: {
    canonicalUrl: FullSitePaths.boerneTxElectrician,
    uniquePageImage: SiteData.homepageImageUrl,
    metaTitle:
      'Commercial Electrician in Boerne TX | ProVolt Electrical Services',
    metaDescription:
      'Looking for a commercial electrician in Boerne, TX? Get expert troubleshooting, LED retrofits, and service upgrades—ProVolt Electrical Services. Call today!',
    metaDescriptionLong:
      'ProVolt Electrical Services serves Boerne, TX with residential and commercial electrical work—specializing in troubleshooting, panel/service capacity upgrades, lighting improvements, and LED retrofits circuits for modern Hill Country living.',
  },

  bandera: {
    canonicalUrl: FullSitePaths.banderaTxElectrician,
    uniquePageImage: SiteData.homepageImageUrl,
    metaTitle:
      'Service Electrician in Bandera TX | ProVolt Electrical Services',
    metaDescription:
      'Need an experienced electrician in Bandera, TX? We offer fast repairs, panel/service upgrades, surge protection, and lighting—ProVolt Electrical Services. Call now!',
    metaDescriptionLong:
      'ProVolt Electrical Services serves Bandera, TX with residential and commercial electrical work—specializing in troubleshooting, panel/service capacity upgrades, lighting improvements, and LED retrofits circuits for modern Hill Country living.',
  },

  helotes: {
    canonicalUrl: FullSitePaths.helotesTxElectrician,
    uniquePageImage: SiteData.homepageImageUrl,
    metaTitle:
      'Trusted Electrician in Helotes TX | ProVolt Electrical Services',
    metaDescription:
      'Searching for a trusted electrician in Helotes, TX? From panel upgrades to lighting and surge protection, we’re ready to help—ProVolt Electrical Services. Call today!',
    metaDescriptionLong:
      'ProVolt Electrical Services serves Helotes, TX with professional residential and small-business electrical work—focused on troubleshooting, panel/service upgrades, lighting improvements, surge protection, and circuits for modern loads.',
  },
} satisfies Record<TownKey, TownMetaSeoConfig>;
