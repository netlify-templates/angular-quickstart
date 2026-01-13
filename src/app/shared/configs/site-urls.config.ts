import { SiteData } from './site-data.config';

export const SitePaths = {
  root: '',
  home: 'home',
  aboutUs: 'about-us',
  careers: 'careers',
  contactUs: 'contact-us',

  electricalServices: 'electrical-services',
  electricalServicesOverview: '',

  commercialElectrician: 'commercial-electrician',
  ranchRuralElectrician: 'ranch-rural-electrician',
  residentialElectrician: 'residential-electrician',

  serviceAreas: 'service-areas',
  banderaTxElectrician: 'bandera-tx-electrician',
  boerneTxElectrician: 'boerne-tx-electrician',
  centerPointTxElectrician: 'center-point-tx-electrician',
  comfortTxElectrician: 'comfort-tx-electrician',
  fredericksburgTxElectrician: 'fredericksburg-tx-electrician',
  helotesTxElectrician: 'helotes-tx-electrician',
  huntTxElectrician: 'hunt-tx-electrician',
  ingramTxElectrician: 'ingram-tx-electrician',
  kerrvilleTxElectrician: 'kerrville-tx-electrician',
  texasHillCountryElectrician: 'texas-hill-country-electrician',

  privacyPolicy: 'privacy-policy',
  termsAndConditions: 'terms-and-conditions',
  projects: 'projects',
  testimonials: 'testimonials',

  // Router wildcard; usually only used in Router config, not in links
  notFound: '**',
} as const;

// Optional: a type of all allowed path strings (e.g., "home" | "about-us" | ...)
export type SitePath = (typeof SitePaths)[keyof typeof SitePaths];

// @Nathaniel confirm these paths are correct
export const FullSitePaths = Object.freeze({
  root: SiteData.canonicalUrl + SitePaths.root,
  home: SiteData.canonicalUrl + SitePaths.home,
  aboutUs: SiteData.canonicalUrl + SitePaths.aboutUs,
  careers: SiteData.canonicalUrl + SitePaths.careers,
  contactUs: SiteData.canonicalUrl + SitePaths.contactUs,
  electricalServices: SiteData.canonicalUrl + SitePaths.electricalServices,

  commercialElectrician:
    SiteData.canonicalUrl +
    SitePaths.electricalServices +
    '/' +
    SitePaths.commercialElectrician,

  ranchRuralElectrician:
    SiteData.canonicalUrl +
    SitePaths.electricalServices +
    '/' +
    SitePaths.ranchRuralElectrician,

  residentialElectrician:
    SiteData.canonicalUrl +
    SitePaths.electricalServices +
    '/' +
    SitePaths.residentialElectrician,

  serviceAreas: SiteData.canonicalUrl + SitePaths.serviceAreas,

  banderaTxElectrician:
    SiteData.canonicalUrl +
    SitePaths.serviceAreas +
    '/' +
    SitePaths.banderaTxElectrician,

  boerneTxElectrician:
    SiteData.canonicalUrl +
    SitePaths.serviceAreas +
    '/' +
    SitePaths.boerneTxElectrician,

  centerPointTxElectrician:
    SiteData.canonicalUrl +
    SitePaths.serviceAreas +
    '/' +
    SitePaths.centerPointTxElectrician,

  comfortTxElectrician:
    SiteData.canonicalUrl +
    SitePaths.serviceAreas +
    '/' +
    SitePaths.comfortTxElectrician,

  fredericksburgTxElectrician:
    SiteData.canonicalUrl +
    SitePaths.serviceAreas +
    '/' +
    SitePaths.fredericksburgTxElectrician,

  helotesTxElectrician:
    SiteData.canonicalUrl +
    SitePaths.serviceAreas +
    '/' +
    SitePaths.helotesTxElectrician,

  huntTxElectrician:
    SiteData.canonicalUrl +
    SitePaths.serviceAreas +
    '/' +
    SitePaths.huntTxElectrician,

  ingramTxElectrician:
    SiteData.canonicalUrl +
    SitePaths.serviceAreas +
    '/' +
    SitePaths.ingramTxElectrician,

  kerrvilleTxElectrician:
    SiteData.canonicalUrl +
    SitePaths.serviceAreas +
    '/' +
    SitePaths.kerrvilleTxElectrician,

  texasHillCountryElectrician:
    SiteData.canonicalUrl + SitePaths.texasHillCountryElectrician,

  privacyPolicy: SiteData.canonicalUrl + SitePaths.privacyPolicy,
  termsAndConditions: SiteData.canonicalUrl + SitePaths.termsAndConditions,
  projects: SiteData.canonicalUrl + SitePaths.projects,
  testimonials: SiteData.canonicalUrl + SitePaths.testimonials,

  notFound: '**',
} as const);

export type FullSitePathKey = keyof typeof FullSitePaths;
export type FullSitePath = (typeof FullSitePaths)[FullSitePathKey];
