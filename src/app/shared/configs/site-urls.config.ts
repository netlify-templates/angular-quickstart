import { SiteData } from 'src/app/shared/configs/site-data.config';

export enum SitePaths {
  root = '',
  home = 'home',
  aboutUs = 'about-us',
  careers = 'careers',
  contactUs = 'contact-us',
  electricalServices = 'electrical-services',
  electricalServicesOverview = '',
  commercialElectrician = 'commercial-electrician',
  ranchRuralElectrician = 'ranch-rural-electrician',
  residentialElectrician = 'residential-electrician',
  serviceAreas = 'service-areas',
  banderaTxElectrician = 'bandera-tx-electrician',
  boerneTxElectrician = 'boerne-tx-electrician',
  centerPointTxElectrician = 'center-point-tx-electrician',
  comfortTxElectrician = 'comfort-tx-electrician',
  fredericksburgTxElectrician = 'fredericksburg-tx-electrician',
  helotesTxElectrician = 'helotes-tx-electrician',
  huntTxElectrician = 'hunt-tx-electrician',
  ingramTxElectrician = 'ingram-tx-electrician',
  kerrvilleTxElectrician = 'kerrville-tx-electrician',
  texasHillCountryElectrician = 'texas-hill-country-electrician',
  privacyPolicy = 'privacy-policy',
  termsOfService = 'terms-of-service',
  projects = 'projects',
  testimonials = 'testimonials',
  notFound = '**',
}

// @Nathaniel confirm these paths are correct
export enum FullSitePaths {
  root = SiteData.canonicalUrl + SitePaths.root,
  home = SiteData.canonicalUrl + SitePaths.home,
  aboutUs = SiteData.canonicalUrl + SitePaths.aboutUs,
  careers = SiteData.canonicalUrl + SitePaths.careers,
  contactUs = SiteData.canonicalUrl + SitePaths.contactUs,
  electricalServices = SiteData.canonicalUrl + SitePaths.electricalServices,
  // electricalServicesOverview = '',
  commercialElectrician = SiteData.canonicalUrl +
    SitePaths.electricalServices +
    '/' +
    SitePaths.commercialElectrician,
  ranchRuralElectrician = SiteData.canonicalUrl +
    SitePaths.electricalServices +
    '/' +
    SitePaths.ranchRuralElectrician,
  residentialElectrician = SiteData.canonicalUrl +
    SitePaths.electricalServices +
    '/' +
    SitePaths.residentialElectrician,
  serviceAreas = SiteData.canonicalUrl + SitePaths.serviceAreas,
  banderaTxElectrician = SiteData.canonicalUrl +
    SitePaths.serviceAreas +
    '/' +
    SitePaths.banderaTxElectrician,
  boerneTxElectrician = SiteData.canonicalUrl +
    SitePaths.serviceAreas +
    '/' +
    SitePaths.boerneTxElectrician,
  centerPointTxElectrician = SiteData.canonicalUrl +
    SitePaths.serviceAreas +
    '/' +
    SitePaths.centerPointTxElectrician,
  comfortTxElectrician = SiteData.canonicalUrl +
    SitePaths.serviceAreas +
    '/' +
    SitePaths.comfortTxElectrician,
  fredericksburgTxElectrician = SiteData.canonicalUrl +
    SitePaths.serviceAreas +
    '/' +
    SitePaths.fredericksburgTxElectrician,
  helotesTxElectrician = SiteData.canonicalUrl +
    SitePaths.serviceAreas +
    '/' +
    SitePaths.helotesTxElectrician,
  huntTxElectrician = SiteData.canonicalUrl +
    SitePaths.serviceAreas +
    '/' +
    SitePaths.huntTxElectrician,
  ingramTxElectrician = SiteData.canonicalUrl +
    SitePaths.serviceAreas +
    '/' +
    SitePaths.ingramTxElectrician,
  kerrvilleTxElectrician = SiteData.canonicalUrl +
    SitePaths.serviceAreas +
    '/' +
    SitePaths.kerrvilleTxElectrician,
  texasHillCountryElectrician = SiteData.canonicalUrl +
    SitePaths.texasHillCountryElectrician,
  privacyPolicy = SiteData.canonicalUrl + SitePaths.privacyPolicy,
  termsOfService = SiteData.canonicalUrl + SitePaths.termsOfService,
  projects = SiteData.canonicalUrl + SitePaths.projects,
  testimonials = SiteData.canonicalUrl + SitePaths.testimonials,
  notFound = '**',
}
