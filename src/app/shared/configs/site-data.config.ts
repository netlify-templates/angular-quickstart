/*If these values might differ for dev/stage/prod, consider putting them
 in environment.ts / environment.prod.ts and reading environment.siteData.phoneNumber. 
 You still get dot notation, plus Angular’s file replacements. */

export const SiteData = {
  phoneNumber: '8309552909',
  phoneNumberE164: '+18309552909',
  phoneNumberFormatted: '(830) 955-2909',
  baseUrl: 'https://provoltelectricalservices.com',
  canonicalUrl: 'https://provoltelectricalservices.com/',
  homepageImageUrl:
    'https://provoltelectricalservices.com/assets/brand/og/provolt-primary-logo-og-c.png',
  email: 'ProVolt240@gmail.com',

  businessName: 'ProVolt Electrical Services',
  businessAddress: 'Kerrville, TX 78028',
  businessAddressShort: 'Kerrville, TX',
  googleMapsUrl:
    'https://www.google.com/maps/place/ProVolt+Electrical+Services/@30.0472006,-99.1403297,15z/data=!4m5!3m4!1s0x0:0xabcdef1234567890!8m2!3d30.0472006!4d-99.1403297',
  facebookUrl: 'https://www.facebook.com/provoltelectric',
  instagramUrl: 'https://www.instagram.com/provoltelectric',
} as const;

export type SiteDataKey = keyof typeof SiteData;
export type SiteDataValue = (typeof SiteData)[SiteDataKey];

export const PrivacyPolicyData = {
  lastUpdated: 'January 1, 2026',
  effectiveDate: 'January 1, 2026',

  // Use ISO-8601 if possible (e.g., "2026-01-13").
  effectiveDateISO: '2026-01-01',

  companyName: SiteData.businessName,
  phoneDisplay: SiteData.phoneNumberFormatted,
  emailAddress: SiteData.email,
  serviceArea: 'Texas Hill Country (and surrounding areas)',
} as const;

// Optional helper types (useful if you want strong typing elsewhere)
export type PrivacyPolicyDataKey = keyof typeof PrivacyPolicyData;
export type PrivacyPolicyDataValue =
  (typeof PrivacyPolicyData)[PrivacyPolicyDataKey];
