export interface LocalProject {
  title: string;
  summary: string;
  areaHint?: string;
  bullets?: string[];
  tags?: string[];
  imageUrl?: string; // optional local photo
  imageAlt?: string;
}

export interface Testimonial {
  quote: string;
  name?: string; // optional (or initials)
  areaHint?: string; // optional locality
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RelatedLink {
  label: string;
  routerLink: string;
  icon?: string; // mat-icon name
}

export interface LocalContext {
  homesAndProperties?: string[]; // town-specific: housing styles / property types
  commonElectricalIssues?: string[]; // town-specific issues you actually see
  businessAndRanchNotes?: string[]; // optional: ranch/shop/business realities
}
export interface ServiceItem {
  label: string;
  icon: string;
}

export interface TownSeoConfig {
  metaTitle: string;
  metaDescription: string;
  pageUrl: string;
  ogImage?: string;
  robots?: string;
  jsonLdId?: string;
  jsonLd?: unknown;
  jsonLdScripts?: Array<{ id: string; data: unknown }>;
}

export interface TownPageConfig {
  townName: string;
  stateAbbr: string;
  regionLabel: string;
  phoneNumber: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroBadgeText?: string;
  heroBullets: string[];
  heroCTAText?: string;

  residentialHeading?: string;
  residentialSubheading?: string;
  residentialIntro?: string;
  residentialServices: ServiceItem[];

  ranchHeading?: string;
  ranchSubheading?: string;
  ranchIntro?: string;
  ranchLink?: string;
  ranchServices?: ServiceItem[];

  commercialHeading?: string;
  commercialSubheading?: string;
  commercialIntro?: string;
  commercialLink: string;
  commercialServices: ServiceItem[];

  areasServed: string[];
  urlSlug: string;
  seo?: TownSeoConfig;

  neighborhoods: string[];
  landmarks: string[];
  localContext: LocalContext;

  localProjects: LocalProject[];
  testimonials: Testimonial[];
  faqs: FaqItem[];
}

// Shared constants
const BASE_DOMAIN = 'https://provoltelectricalservices.com';
const PHONE_DISPLAY = '(830) 928-5046';
const PHONE_E164 = '+18309285046';
const DEFAULT_REGION = 'Texas Hill Country';
const DEFAULT_OG_IMAGE = `${BASE_DOMAIN}/assets/og-default.jpg`; // TODO: replace if needed

// Helpers (avoid URL drift)
const pageUrlFromSlug = (slug: string) => `${BASE_DOMAIN}${slug}`;
const electricianIdFromSlug = (slug: string) =>
  `${BASE_DOMAIN}${slug}#electrician`;

// SEO builders (consistent canonical/og:url/jsonld)
function buildElectricianSeo(args: {
  slug: string;
  townName: string;
  metaTitle: string;
  metaDescription: string;
  descriptionLong: string;
  serviceType: string[];
  robots?: string;
  breadcrumb?: { serviceAreasUrl: string; serviceAreasLabel?: string };
  addressLocality: string;
  extra?: Partial<Record<string, unknown>>;
  extraJsonLdScripts?: Array<{ id: string; data: unknown }>;
}): TownSeoConfig {
  const {
    slug,
    townName,
    metaTitle,
    metaDescription,
    descriptionLong,
    serviceType,
    robots = 'index,follow',
    breadcrumb,
    addressLocality,
    extra,
    extraJsonLdScripts = [],
  } = args;

  const pageUrl = pageUrlFromSlug(slug);

  const electricianSchema: any = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    '@id': electricianIdFromSlug(slug),
    name: 'ProVolt Electrical Services',
    url: pageUrl,
    description: descriptionLong,
    telephone: PHONE_E164,
    image: DEFAULT_OG_IMAGE,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality,
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    areaServed: { '@type': 'Place', name: `${townName}, TX` },
    serviceType,
    ...(extra ?? {}),
  };

  const scripts: Array<{ id: string; data: unknown }> = [
    {
      id: `json-ld-town-${slugToIdSuffix(slug)}-electrician`,
      data: electricianSchema,
    },
    ...extraJsonLdScripts,
  ];

  if (breadcrumb?.serviceAreasUrl) {
    scripts.push({
      id: `json-ld-town-${slugToIdSuffix(slug)}-breadcrumb`,
      data: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${BASE_DOMAIN}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: breadcrumb.serviceAreasLabel ?? 'Service Areas',
            item: breadcrumb.serviceAreasUrl,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `${townName}, TX`,
            item: pageUrl,
          },
        ],
      },
    });
  }

  return {
    metaTitle,
    metaDescription,
    pageUrl,
    ogImage: DEFAULT_OG_IMAGE,
    robots,
    jsonLdId: `json-ld-${slugToIdSuffix(slug)}`,
    jsonLd: electricianSchema,
    jsonLdScripts: scripts,
  };
}

function slugToIdSuffix(slug: string): string {
  // "/service-areas/kerrville-tx-electrician" -> "service-areas-kerrville-tx-electrician"
  return slug.replace(/^\//, '').replace(/\//g, '-');
}

const SERVICE_AREAS_PAGE = `${BASE_DOMAIN}/service-areas/texas-hill-country-electrician`;

export const TOWN_CONFIGS: Record<string, TownPageConfig> = {
  kerrville: (() => {
    const slug = '/service-areas/kerrville-tx-electrician';

    const seo = buildElectricianSeo({
      slug,
      townName: 'Kerrville',
      addressLocality: 'Kerrville',
      metaTitle:
        'Electrician in Kerrville, TX | Panel Upgrades, Repairs & Lighting',
      metaDescription:
        'Licensed electrician in Kerrville, TX for troubleshooting, panel upgrades, surge protection, lighting, and ranch/shop wiring. Call ProVolt Electrical Services.',
      descriptionLong:
        'ProVolt Electrical Services provides residential, commercial, and ranch & rural electrical work in Kerrville, TX—serving Hill Country homes, small businesses, and rural properties near the Guadalupe River with clean, code-compliant workmanship.',
      serviceType: [
        'Electrical troubleshooting and repairs',
        'Electrical panel upgrades',
        'Surge protection',
        'Lighting installation and upgrades',
        'Ranch and rural property electrical',
        'Commercial electrical services',
      ],
      breadcrumb: { serviceAreasUrl: SERVICE_AREAS_PAGE },
      extra: {
        // More specific "areaServed" improves locality signals without keyword-stuffing.
        areaServed: [
          { '@type': 'City', name: 'Kerrville, TX' },
          { '@type': 'City', name: 'Ingram, TX' },
          { '@type': 'City', name: 'Hunt, TX' },
          { '@type': 'City', name: 'Center Point, TX' },
        ],
      },
    });

    return {
      townName: 'Kerrville',
      stateAbbr: 'TX',
      regionLabel: DEFAULT_REGION,
      phoneNumber: PHONE_DISPLAY,

      heroTitle: 'Master Electrician in Kerrville, TX',
      heroSubtitle:
        'Licensed, insured electrical work for Kerrville homes, small businesses, and Hill Country properties—clean installs, clear pricing, and code-compliant results.',
      heroBadgeText: 'Local • Licensed • Insured',
      heroBullets: [
        'Fast troubleshooting for outages, breaker trips, and flickering lights',
        'Panel upgrades, surge protection, and service improvements',
        'Lighting, remodel wiring, and dedicated circuits for modern loads',
        'Ranch/shop power: long runs, outbuildings, and equipment circuits',
      ],
      heroCTAText: 'Call to Speak With an Electrician',

      residentialHeading:
        'Kerrville Residential Electrical Services – Expert Electrical Solutions for Homes',
      residentialSubheading:
        'Safe repairs, tidy installs, and upgrades that last.',
      residentialIntro:
        'Kerrville homes often need a mix of practical fixes and smart capacity planning—whether it’s recurring breaker trips, aging panels, or new appliance loads. We troubleshoot the root cause, install cleanly, and leave everything inspection-ready and neat.',
      residentialServices: [
        { label: 'Electrical Troubleshooting & Repair', icon: 'bolt' },
        {
          label: 'Panel Upgrades & Breaker Replacement',
          icon: 'electrical_services',
        },
        { label: 'Dedicated Circuits for Appliances & HVAC', icon: 'power' },
        { label: 'Whole-Home Surge Protection', icon: 'offline_bolt' },
        { label: 'Indoor/Outdoor Lighting & Dimmers', icon: 'lightbulb' },
        { label: 'GFCI/AFCI Safety Protection', icon: 'verified' },
        { label: 'Remodel Wiring & Code Corrections', icon: 'rule' },
      ],

      // -------------------- COMMERCIAL --------------------
      commercialHeading:
        'Kerrville Commercial Electrical Services – Reliable Solutions for Businesses',
      commercialSubheading: 'Power and lighting built for daily operations.',
      commercialIntro:
        'From small storefronts to workshops, we help Kerrville businesses stay powered and compliant. Expect clear communication, clean installs, and circuits sized correctly for equipment, lighting, and real-world use.',
      commercialLink: '/electrical-services/commercial-electrician',
      commercialServices: [
        { label: 'Commercial Troubleshooting & Repairs', icon: 'build' },
        { label: 'Tenant Build-Outs & Service Additions', icon: 'storefront' },
        { label: 'Lighting Upgrades & LED Retrofits', icon: 'emoji_objects' },
        {
          label: 'Dedicated 240V Circuits for Equipment',
          icon: 'precision_manufacturing',
        },
        {
          label: 'Panel/Service Upgrades & Load Planning',
          icon: 'settings_input_component',
        },
        {
          label: 'Exterior, Parking & Security Lighting',
          icon: 'local_parking',
        },
      ],

      // -------------------- RANCH & RURAL --------------------
      ranchHeading:
        'Kerrville Ranch & Rural Electrician Services – Wiring, Subpanels & Outdoor Power',
      ranchSubheading:
        'Long runs, outbuildings, and equipment loads—done right.',
      ranchIntro:
        'Need dependable power across a property in Kerrville? We wire barns, shops, and outbuildings with the details that matter—proper conductor sizing, clean subpanel work, safe outdoor power, and circuits built for heavy 240V equipment.',
      ranchLink: '/electrical-services/ranch-electrician',
      ranchServices: [
        { label: 'Barn & Shop Wiring', icon: 'warehouse' },
        {
          label: 'Outbuilding Subpanels & Feeder Runs',
          icon: 'electrical_services',
        },
        { label: 'Outdoor Power & Trenching to Buildings', icon: 'cable' },
        { label: 'RV 30/50-Amp Hookups', icon: 'rv_hookup' },
        {
          label: '240V Circuits for Welders & Equipment',
          icon: 'precision_manufacturing',
        },
        { label: 'Area & Security Lighting', icon: 'lightbulb' },
        { label: 'Grounding/Bonding & Surge Protection', icon: 'shield' },
      ],

      areasServed: [
        'Ingram',
        'Center Point',
        'Hunt',
        'Comfort',
        'Fredericksburg',
      ],
      urlSlug: slug,
      seo,

      neighborhoods: [
        'Downtown Kerrville',
        'Riverhill area',
        'I-10 corridor',
        'Hwy 16 corridor',
        'Outside city limits (rural properties)',
      ],
      landmarks: [
        'Guadalupe River',
        'Schreiner University',
        'Louise Hays Park',
        'Sidney Baker St',
        'Kerrville-Schreiner Park',
      ],
      localContext: {
        homesAndProperties: [
          '1970s–1990s ranch homes and additions',
          'River-adjacent properties with outdoor circuits',
          'Detached garages, workshops, and metal shop buildings',
          'Remodels and service capacity upgrades',
        ],
        commonElectricalIssues: [
          'Aging panels and undersized services',
          'Breaker trips from added loads (HVAC, EV charging, appliances)',
          'Outdoor GFCI/receptacle failures and lighting issues',
          'Long runs to outbuildings needing proper sizing',
        ],
        businessAndRanchNotes: [
          '240V circuits for welders, compressors, and shop equipment',
          'RV hookups and shore power planning',
          'Circuits and trenching considerations',
        ],
      },

      localProjects: [
        {
          title: 'Example: 200A Panel Upgrade + Surge Protection',
          summary:
            'Service capacity upgrade to support HVAC and modern appliance loads with whole-home surge protection.',
          areaHint: 'Near the Guadalupe River area',
          bullets: [
            'Load calc + breaker schedule cleanup',
            'New surge device + bonding/grounding review',
          ],
          tags: ['Panel', 'Surge', 'Safety'],
        },
        {
          title: 'Example: Troubleshooting Breaker Trips',
          summary:
            'Isolated nuisance trips and corrected circuit issues to stabilize a frequently used circuit.',
          areaHint: 'I-10 corridor',
          bullets: [
            'Circuit tracing + load verification',
            'Replaced damaged device + corrected terminations',
          ],
          tags: ['Troubleshooting', 'Repairs'],
        },
        {
          title: 'Example: Shop Subpanel + Lighting',
          summary:
            'Added a subpanel and bright, efficient LED lighting for a workshop space.',
          areaHint: 'Rural Kerrville property',
          bullets: [
            'Dedicated 240V circuits for equipment',
            'High-efficiency LED layout for task lighting',
          ],
          tags: ['Shop', 'Subpanel', 'Lighting'],
        },
      ],

      // IMPORTANT: Only populate with real customer reviews (do not fabricate).
      testimonials: [],

      faqs: [
        {
          question:
            'Do panel upgrades in Kerrville typically require a permit and inspection?',
          answer:
            'Often, yes—especially for service or panel replacements. Requirements can vary by jurisdiction and scope, so we confirm what applies to your address and handle the permitting/inspection steps when needed.',
        },
        {
          question:
            'Why do breakers trip more in Kerrville during peak summer heat?',
          answer:
            'High HVAC demand plus kitchens, laundry, and shop loads can push older services near their limit. We troubleshoot the circuit, check connections, and recommend the safest fix—often dedicated circuits, load balancing, or a service/panel upgrade when capacity is the issue.',
        },
        {
          question:
            'Can you add power for a detached garage, shop, or metal building on a Kerrville property?',
          answer:
            'Yes. We plan the run based on distance and equipment needs, then install correctly sized wiring, grounding, and a subpanel if appropriate so power stays reliable even on long runs.',
        },
        {
          question:
            'What’s the safest way to add outdoor power for lighting, patios, or a backyard workspace?',
          answer:
            'Outdoor circuits should use weather-rated materials and the right protection (like GFCI where required). We can add new circuits, outlets, and lighting with proper trenching, conduit, and protection so it holds up to Hill Country conditions.',
        },
        {
          question:
            'Do you offer whole-home surge protection in Kerrville, and is it worth it?',
          answer:
            'Yes. Surge protection helps reduce damage from utility surges and lightning-related events. It’s a smart add-on when you have newer appliances, HVAC equipment, or have invested in a panel/service upgrade.',
        },
      ],
    };
  })(),

  ingram: (() => {
    const slug = '/service-areas/ingram-tx-electrician';

    const seo = buildElectricianSeo({
      slug,
      townName: 'Ingram',
      addressLocality: 'Ingram',
      metaTitle:
        'Electrician in Ingram, TX | Repairs, Panels, Outdoor Power & Lighting',
      metaDescription:
        'Electrician in Ingram, TX for troubleshooting, panel upgrades, outdoor outlets/GFCI, lighting, dedicated circuits, and shop wiring. ProVolt Electrical Services—licensed and insured.',
      descriptionLong:
        'ProVolt Electrical Services serves Ingram, TX with residential and rural-property electrical work—focused on safe troubleshooting, panel capacity, outdoor power and lighting, and clean wiring for garages and workshops in the Texas Hill Country.',
      serviceType: [
        'Electrical troubleshooting and repairs',
        'Electrical panel upgrades',
        'Outdoor outlets and GFCI upgrades',
        'Lighting installation and upgrades',
        'Dedicated circuits for appliances and equipment',
        'Shop and outbuilding wiring',
        'Surge protection',
      ],
      breadcrumb: { serviceAreasUrl: SERVICE_AREAS_PAGE },
      extra: {
        // More specific "areaServed" improves locality signals without keyword-stuffing.
        areaServed: [
          { '@type': 'City', name: 'Ingram, TX' },
          { '@type': 'City', name: 'Kerrville, TX' },
          { '@type': 'City', name: 'Hunt, TX' },
          { '@type': 'City', name: 'Center Point, TX' },
        ],
      },
    });

    return {
      townName: 'Ingram',
      stateAbbr: 'TX',
      regionLabel: DEFAULT_REGION,
      phoneNumber: PHONE_DISPLAY,

      heroTitle: 'Master Electrician in Ingram, TX',
      heroSubtitle:
        'Local electrical repairs and upgrades for Ingram homes and Hill Country properties—troubleshooting, panels, lighting, and dedicated circuits done cleanly and safely.',
      heroBadgeText: 'Fast Service • Code-Compliant',
      heroBullets: [
        'Troubleshooting for outages, breaker trips, and intermittent power',
        'Panel and service upgrades for added home loads',
        'Outdoor power, lighting, and GFCI protection for yards and patios',
        'Garage/shop circuits and upgrades for tools and equipment',
      ],
      heroCTAText: 'Get Help Today',

      residentialHeading:
        'Ingram Residential Electrical Services – Expert Electrical Solutions for Homes',
      residentialSubheading:
        'Straightforward fixes and upgrades—done clean and safe.',
      residentialIntro:
        'Ingram homeowners often need reliable troubleshooting plus practical improvements for everyday living and property use. We focus on safe protection, neat workmanship, and solutions that hold up over time.',
      residentialServices: [
        { label: 'Electrical Troubleshooting & Repair', icon: 'bolt' },
        { label: 'Outlet/Switch Replacement & Updates', icon: 'toggle_on' },
        { label: 'Panel & Breaker Improvements', icon: 'electrical_services' },
        { label: 'Outdoor Receptacles (Weather-Rated)', icon: 'verified' },
        { label: 'Lighting Updates (Interior/Exterior)', icon: 'lightbulb' },
        { label: 'Dedicated Circuits for Appliances', icon: 'power' },
        { label: 'Whole-Home Surge Protection', icon: 'offline_bolt' },
      ],

      commercialHeading:
        'Ingram Commercial Electrical Services – Reliable Solutions for Businesses',
      commercialSubheading:
        'Support for shops, small offices, and service calls.',
      commercialIntro:
        'For small commercial spaces in Ingram, we handle repairs, upgrades, and electrical additions that keep operations moving. Expect code-aware work and circuits sized for real loads.',
      commercialLink: '/electrical-services/commercial-electrician',
      commercialServices: [
        { label: 'Electrical Repairs & Diagnostics', icon: 'build' },
        { label: 'Lighting Upgrades & Retrofits', icon: 'emoji_objects' },
        {
          label: 'Dedicated Equipment Circuits',
          icon: 'precision_manufacturing',
        },
        {
          label: 'Subpanel/Service Additions',
          icon: 'settings_input_component',
        },
        { label: 'Exterior Lighting & Security', icon: 'security' },
        { label: 'Preventive Maintenance Checks', icon: 'schedule' },
      ],

      ranchHeading:
        'Ingram Ranch & Rural Electrical Services – Power Solutions for Shops, Barns & Outbuildings',
      ranchSubheading:
        'Rural power built for distance, weather, and heavy use.',
      ranchIntro:
        'Ingram properties often need dependable power across multiple structures. We install outdoor circuits, subpanels, and equipment-ready 240V power with attention to safety, grounding, and clean layout.',
      ranchLink: '/electrical-services/ranch-electrician',
      ranchServices: [
        { label: 'Shop & Outbuilding Wiring', icon: 'warehouse' },
        {
          label: 'Subpanels for Barns/Outbuildings',
          icon: 'electrical_services',
        },
        { label: 'Outdoor Power Runs & Trenching', icon: 'cable' },
        { label: 'RV 30/50-Amp Hookups', icon: 'rv_hookup' },
        {
          label: '240V Equipment & Welder Circuits',
          icon: 'precision_manufacturing',
        },
        { label: 'Yard/Driveway Security Lighting', icon: 'lightbulb' },
        { label: 'Surge Protection & Grounding', icon: 'shield' },
      ],

      areasServed: [
        'Kerrville',
        'Hunt',
        'Center Point',
        'Comfort',
        'Fredericksburg',
      ],
      urlSlug: slug,
      seo,

      neighborhoods: [
        'Ingram (in town)',
        'Along Hwy 39',
        'Rural properties outside city limits',
        'Nearby Kerrville border',
      ],
      landmarks: [
        'Ingram Lake',
        'Hwy 39',
        'Johnson Creek area',
        'Louise Hays Park (nearby)',
      ],
      localContext: {
        homesAndProperties: [
          'Single-family homes with outdoor living spaces',
          'Properties needing reliable outdoor power and lighting',
          'Detached garages and workshops',
          'Older circuits that benefit from safety upgrades',
        ],
        commonElectricalIssues: [
          'Outdoor receptacle/GFCI failures and weather exposure',
          'Breaker trips from added appliances and HVAC demand',
          'Loose connections causing flicker or intermittent power',
          'Undersized circuits for workshops and equipment',
        ],
        businessAndRanchNotes: [
          'Long-run conductor sizing for outbuildings',
          'RV/shores power and dedicated outlets',
          'Shop equipment circuits and subpanels',
        ],
      },

      localProjects: [
        {
          title: 'Example: Outdoor Power + GFCI Upgrades',
          summary:
            'Added protected outdoor outlets and improved patio/yard power reliability.',
          areaHint: 'Near Ingram Lake',
          bullets: [
            'Weather-rated boxes and covers',
            'GFCI protection for outdoor circuits',
          ],
          tags: ['Outdoor', 'GFCI', 'Safety'],
        },
        {
          title: 'Example: Breaker Trip Diagnosis',
          summary:
            'Tracked down nuisance trips and corrected circuit loading for stability.',
          areaHint: 'Hwy 39 area',
          bullets: [
            'Circuit tracing + load check',
            'Corrected terminations and device issues',
          ],
          tags: ['Troubleshooting', 'Repairs'],
        },
        {
          title: 'Example: Garage/Shop Subpanel',
          summary:
            'Installed a subpanel to support tools and lighting in a detached space.',
          areaHint: 'Rural Ingram property',
          bullets: [
            'Dedicated circuits for equipment',
            'Efficient LED lighting layout',
          ],
          tags: ['Shop', 'Subpanel', 'Lighting'],
        },
      ],

      // IMPORTANT: Only populate with real customer reviews (do not fabricate).
      testimonials: [],

      faqs: [
        {
          question: 'Do you service properties outside Ingram city limits?',
          answer:
            'Yes. We regularly work on rural Hill Country properties where long runs and outbuildings need properly sized, code-compliant wiring.',
        },
        {
          question: 'Can you add power for a garage, shed, or workshop?',
          answer:
            'Absolutely. We’ll size the feeder and circuits for the tools/equipment you actually use and install weather-rated components where needed.',
        },
        {
          question: 'Why do my lights flicker when appliances start?',
          answer:
            'It can be a loose connection, overloaded circuit, or service capacity issue. We can diagnose the cause and recommend the safest fix.',
        },
        {
          question: 'Should outdoor outlets be GFCI protected?',
          answer:
            'Yes—outdoor receptacles typically require GFCI protection for safety. We can test and upgrade outlets and covers to reduce weather damage.',
        },
        {
          question:
            'Do I need a permit for electrical upgrades in Kerr County?',
          answer:
            'Many service/panel upgrades and certain additions require permits/inspections. We can help you understand what applies at your address and coordinate the steps.',
        },
      ],
    };
  })(),

  centerPoint: (() => {
    const slug = '/service-areas/center-point-tx-electrician';

    const seo = buildElectricianSeo({
      slug,
      townName: 'Center Point',
      addressLocality: 'Center Point',
      metaTitle:
        'Electrician in Center Point, TX | Repairs, Panels, Outdoor Power & Lighting',
      metaDescription:
        'Electrician in Center Point, TX for troubleshooting, panel upgrades, outdoor outlets/GFCI, lighting, dedicated circuits, and shop wiring. ProVolt Electrical Services—licensed and insured.',
      descriptionLong:
        'ProVolt Electrical Services serves Center Point, TX with residential and rural-property electrical work—focused on safe troubleshooting, panel capacity, outdoor power and lighting, and clean wiring for garages and workshops in the Texas Hill Country.',
      serviceType: [
        'Electrical troubleshooting and repairs',
        'Electrical panel upgrades',
        'Outdoor outlets and GFCI upgrades',
        'Lighting installation and upgrades',
        'Dedicated circuits for appliances and equipment',
        'Shop and outbuilding wiring',
        'Surge protection',
      ],
      breadcrumb: { serviceAreasUrl: SERVICE_AREAS_PAGE },
      extra: {
        // More specific "areaServed" improves locality signals without keyword-stuffing.
        areaServed: [
          { '@type': 'City', name: 'Ingram, TX' },
          { '@type': 'City', name: 'Kerrville, TX' },
          { '@type': 'City', name: 'Hunt, TX' },
          { '@type': 'City', name: 'Center Point, TX' },
        ],
      },
    });

    return {
      townName: 'Center Point',
      stateAbbr: 'TX',
      regionLabel: DEFAULT_REGION,
      phoneNumber: PHONE_DISPLAY,

      heroTitle: 'Master Electrician in Center Point, TX',
      heroSubtitle:
        'Local electrical repairs and upgrades for Center Point homes and Hill Country properties—troubleshooting, panels, lighting, and dedicated circuits done cleanly and safely.',
      heroBadgeText: 'Fast Service • Code-Compliant',
      heroBullets: [
        'Troubleshooting for outages, breaker trips, and intermittent power',
        'Panel and service upgrades for added home loads',
        'Outdoor power, lighting, and GFCI protection for yards and patios',
        'Garage/shop circuits and upgrades for tools and equipment',
      ],
      heroCTAText: 'Call for Service',

      residentialHeading:
        'Center Point Residential Electrical Services – Expert Electrical Solutions for Homes',
      residentialSubheading: 'Reliable power with modern safety protection.',
      residentialIntro:
        'Center Point homes and properties often blend indoor needs with outdoor use—shops, sheds, and added loads. We troubleshoot issues, improve safety protection, and install upgrades that stay dependable.',
      residentialServices: [
        { label: 'Electrical Troubleshooting & Repair', icon: 'bolt' },
        { label: 'GFCI/AFCI Safety Upgrades', icon: 'verified' },
        {
          label: 'Panel Upgrades & Breaker Replacement',
          icon: 'electrical_services',
        },
        { label: 'Ceiling Fans & Switch Replacements', icon: 'toys' },
        { label: 'Lighting Installations & Dimmers', icon: 'lightbulb' },
        { label: 'Dedicated Circuits for New Loads', icon: 'power' },
        { label: 'Surge Protection & Grounding Checks', icon: 'offline_bolt' },
      ],

      commercialHeading:
        'Center Point Commercial Electrical Services – Reliable Solutions for Businesses',
      commercialSubheading:
        'Practical electrical support for small businesses.',
      commercialIntro:
        'We help Center Point commercial spaces with repairs, lighting, and service additions—so your power is safe, stable, and ready for daily use.',
      commercialLink: '/electrical-services/commercial-electrician',
      commercialServices: [
        { label: 'Service Calls & Troubleshooting', icon: 'build' },
        { label: 'Lighting Upgrades & LED Conversions', icon: 'emoji_objects' },
        { label: 'Tenant Improvements & Additions', icon: 'storefront' },
        {
          label: 'Dedicated Circuits for Equipment',
          icon: 'precision_manufacturing',
        },
        { label: 'Panel/Service Upgrades', icon: 'settings_input_component' },
        { label: 'Exterior & Security Lighting', icon: 'security' },
      ],

      ranchHeading:
        'Center Point Ranch & Rural Electrical Services – Wiring, Subpanels & Outdoor Power',
      ranchSubheading: 'Shops, barns, and outdoor power you can count on.',
      ranchIntro:
        'For Center Point ranch and rural properties, we build safe, organized electrical systems—subpanels, outdoor power, and equipment circuits planned for distance and reliability.',
      ranchLink: '/electrical-services/ranch-electrician',
      ranchServices: [
        { label: 'Barn/Shop Wiring & Circuits', icon: 'warehouse' },
        {
          label: 'Outbuilding Subpanels & Feeders',
          icon: 'electrical_services',
        },
        { label: 'Outdoor Power Runs & Trenching', icon: 'cable' },
        { label: 'Well/Pump & Utility Circuits', icon: 'water' },
        { label: 'RV Hookups (30/50-Amp)', icon: 'rv_hookup' },
        { label: '240V Equipment Circuits', icon: 'precision_manufacturing' },
        { label: 'Grounding/Bonding & Surge Protection', icon: 'shield' },
      ],

      areasServed: ['Comfort', 'Kerrville', 'Ingram', 'Fredericksburg'],
      urlSlug: slug,
      seo,

      neighborhoods: [
        'Center Point (in town)',
        'Along Hwy 39',
        'Rural properties outside city limits',
        'Nearby Kerrville border',
      ],
      landmarks: ['Hwy 39', 'Johnson Creek area', 'Louise Hays Park (nearby)'],
      localContext: {
        homesAndProperties: [
          'Single-family homes with outdoor living spaces',
          'Properties needing reliable outdoor power and lighting',
          'Detached garages and workshops',
          'Older circuits that benefit from safety upgrades',
        ],
        commonElectricalIssues: [
          'Outdoor receptacle/GFCI failures and weather exposure',
          'Breaker trips from added appliances and HVAC demand',
          'Loose connections causing flicker or intermittent power',
          'Undersized circuits for workshops and equipment',
        ],
        businessAndRanchNotes: [
          'Long-run conductor sizing for outbuildings',
          'RV/shores power and dedicated outlets',
          'Shop equipment circuits and subpanels',
        ],
      },

      localProjects: [
        {
          title: 'Example: Outdoor Power + GFCI Upgrades',
          summary:
            'Added protected outdoor outlets and improved patio/yard power reliability.',
          areaHint: 'Near Ingram Lake',
          bullets: [
            'Weather-rated boxes and covers',
            'GFCI protection for outdoor circuits',
          ],
          tags: ['Outdoor', 'GFCI', 'Safety'],
        },
        {
          title: 'Example: Breaker Trip Diagnosis',
          summary:
            'Tracked down nuisance trips and corrected circuit loading for stability.',
          areaHint: 'Hwy 39 area',
          bullets: [
            'Circuit tracing + load check',
            'Corrected terminations and device issues',
          ],
          tags: ['Troubleshooting', 'Repairs'],
        },
        {
          title: 'Example: Garage/Shop Subpanel',
          summary:
            'Installed a subpanel to support tools and lighting in a detached space.',
          areaHint: 'Rural Ingram property',
          bullets: [
            'Dedicated circuits for equipment',
            'Efficient LED lighting layout',
          ],
          tags: ['Shop', 'Subpanel', 'Lighting'],
        },
      ],

      // IMPORTANT: Only populate with real customer reviews (do not fabricate).
      testimonials: [],

      faqs: [
        {
          question:
            'Do you service properties outside Center Point city limits?',
          answer:
            'Yes. We regularly work on rural Hill Country properties where long runs and outbuildings need properly sized, code-compliant wiring.',
        },
        {
          question: 'Can you add power for a garage, shed, or workshop?',
          answer:
            'Absolutely. We’ll size the feeder and circuits for the tools/equipment you actually use and install weather-rated components where needed.',
        },
        {
          question: 'Why do my lights flicker when appliances start?',
          answer:
            'It can be a loose connection, overloaded circuit, or service capacity issue. We can diagnose the cause and recommend the safest fix.',
        },
        {
          question: 'Should outdoor outlets be GFCI protected?',
          answer:
            'Yes—outdoor receptacles typically require GFCI protection for safety. We can test and upgrade outlets and covers to reduce weather damage.',
        },
        {
          question:
            'Do I need a permit for electrical upgrades in Kerr County?',
          answer:
            'Many service/panel upgrades and certain additions require permits/inspections. We can help you understand what applies at your address and coordinate the steps.',
        },
      ],
    };
  })(),

  hunt: (() => {
    const slug = '/service-areas/hunt-tx-electrician';

    const seo = buildElectricianSeo({
      slug,
      townName: 'Hunt',
      addressLocality: 'Hunt',
      metaTitle:
        'Electrician in Hunt, TX | Outdoor Power, Panels, Lighting & Rural Wiring',
      metaDescription:
        'Electrician in Hunt, TX for outdoor outlets/GFCI, lighting, panel upgrades, surge protection, and long-run circuits to outbuildings. ProVolt Electrical Services—licensed and insured.',
      descriptionLong:
        'ProVolt Electrical Services provides Hunt, TX with dependable Hill Country electrical work—specializing in outdoor power, long-run circuits for outbuildings, panel upgrades, surge protection, and troubleshooting for river-area and rural properties.',
      serviceType: [
        'Outdoor outlets and GFCI upgrades',
        'Lighting installation and upgrades',
        'Electrical panel upgrades',
        'Surge protection',
        'Ranch and rural property electrical',
        'Electrical troubleshooting and repairs',
        'Subpanels and long-run feeders',
      ],
      breadcrumb: { serviceAreasUrl: SERVICE_AREAS_PAGE },
      extra: {
        // More specific "areaServed" improves locality signals without keyword-stuffing.
        areaServed: [
          { '@type': 'City', name: 'Hunt, TX' },
          { '@type': 'City', name: 'Ingram, TX' },
          { '@type': 'City', name: 'Kerrville, TX' },
          { '@type': 'City', name: 'Mountain Home, TX' },
        ],
      },
    });

    return {
      townName: 'Hunt',
      stateAbbr: 'TX',
      regionLabel: DEFAULT_REGION,
      phoneNumber: PHONE_DISPLAY,

      heroTitle: 'Master Electrician in Hunt, TX',
      heroSubtitle:
        'Hill Country electrical work for Hunt homes and river-area properties—outdoor power, lighting, panels, and long-run circuits done safely and neatly.',
      heroBadgeText: 'River Properties • Rural Circuits',
      heroBullets: [
        'Outdoor outlets, lighting, and weather-rated repairs',
        'Long runs to outbuildings, barns, and guest houses—sized correctly',
        'Panel upgrades and surge protection for rural reliability',
        'Troubleshooting for intermittent power and breaker trips',
      ],
      heroCTAText: 'Get Electrical Help Today',

      residentialHeading:
        'Hunt Residential Electrical Services – Expert Electrical Solutions for Homes',
      residentialSubheading:
        'Weather-ready upgrades for Hill Country properties.',
      residentialIntro:
        'Hunt homes often lean on outdoor power, exterior lighting, and reliable protection during storms and outages. We prioritize weather-rated materials, safe protection devices, and clean installs that keep your system dependable.',
      residentialServices: [
        { label: 'Electrical Troubleshooting & Repair', icon: 'bolt' },
        { label: 'Outdoor Outlets (GFCI/Weather-Rated)', icon: 'verified' },
        { label: 'Landscape/Patio/Security Lighting', icon: 'lightbulb' },
        {
          label: 'Panel Improvements & Breaker Repairs',
          icon: 'electrical_services',
        },
        { label: 'Dedicated Circuits for Appliances/HVAC', icon: 'power' },
        { label: 'Surge Protection & Grounding', icon: 'offline_bolt' },
        { label: 'Ceiling Fans & Switch Upgrades', icon: 'toys' },
      ],

      commercialHeading:
        'Hunt Commercial Electrical Services – Reliable Solutions for Businesses',
      commercialSubheading:
        'Lighting, circuits, and upgrades with minimal disruption.',
      commercialIntro:
        'We support Hunt businesses with practical repairs, lighting improvements, and electrical additions. The goal is simple: safe power, clear communication, and work that holds up.',
      commercialLink: '/electrical-services/commercial-electrician',
      commercialServices: [
        { label: 'Troubleshooting & Repair for Businesses', icon: 'build' },
        { label: 'Lighting Retrofits & Upgrades', icon: 'emoji_objects' },
        {
          label: 'Dedicated Equipment Circuits',
          icon: 'precision_manufacturing',
        },
        { label: 'Service/Panel Upgrades', icon: 'settings_input_component' },
        { label: 'Exterior & Parking Area Lighting', icon: 'local_parking' },
        { label: 'Maintenance & Safety Checks', icon: 'schedule' },
      ],

      ranchHeading:
        'Hunt Ranch & Rural Electrical Services – Power Solutions for Shops, Barns & Outbuildings',
      ranchSubheading: 'Outdoor power and subpanels built for distance.',
      ranchIntro:
        'Hunt properties frequently need reliable power spread across multiple structures. We install feeder runs, subpanels, outdoor power, and equipment-ready circuits with strong grounding and clean layout.',
      ranchLink: '/electrical-services/ranch-electrician',
      ranchServices: [
        { label: 'Shop/Barn Wiring', icon: 'warehouse' },
        { label: 'Subpanels for Outbuildings', icon: 'electrical_services' },
        { label: 'Outdoor Power Runs & Trenching', icon: 'cable' },
        { label: 'RV 30/50-Amp Hookups', icon: 'rv_hookup' },
        {
          label: '240V Circuits for Equipment',
          icon: 'precision_manufacturing',
        },
        { label: 'Security/Area Lighting', icon: 'lightbulb' },
        { label: 'Grounding & Surge Protection', icon: 'shield' },
      ],

      areasServed: ['Ingram', 'Kerrville', 'Fredericksburg'],
      urlSlug: slug,
      seo,

      neighborhoods: [
        'Guadalupe River corridor',
        'Hwy 39 area',
        'Rural Hunt properties',
        'Guest houses and outbuildings',
      ],
      landmarks: [
        'Guadalupe River',
        'Hunt Store area',
        'Hwy 39',
        'Mo-Ranch area',
      ],
      localContext: {
        homesAndProperties: [
          'River-adjacent homes with outdoor power needs',
          'Guest houses and detached living spaces',
          'Barns, shops, and outbuildings',
          'Properties with long feeder runs',
        ],
        commonElectricalIssues: [
          'Outdoor receptacles failing from weather exposure',
          'Voltage drop on long runs to outbuildings',
          'Surge/lightning events affecting sensitive electronics',
          'Breaker trips when equipment starts (Compressor/HVAC)',
        ],
        businessAndRanchNotes: [
          'Proper sizing for distance + voltage drop',
          'Weather-rated equipment and grounding',
          'Equipment circuits for shop tools',
        ],
      },

      localProjects: [
        {
          title: 'Example: Outdoor GFCI + Weatherproof Repairs',
          summary:
            'Improved outdoor safety and reliability with protected receptacles and covers.',
          areaHint: 'Guadalupe River area',
          bullets: [
            'Weather-rated boxes/covers',
            'GFCI protection and circuit testing',
          ],
          tags: ['Outdoor', 'GFCI', 'Safety'],
        },
        {
          title: 'Example: Long Run to Outbuilding',
          summary:
            'Installed a correctly sized feeder and subpanel for a detached structure.',
          areaHint: 'Hwy 39 corridor',
          bullets: [
            'Conductor sizing for distance',
            'Grounding/bonding and labeling',
          ],
          tags: ['Feeder', 'Subpanel', 'Rural'],
        },
        {
          title: 'Example: Surge Protection Upgrade',
          summary:
            'Added surge protection strategy to help safeguard appliances and electronics.',
          areaHint: 'Rural Hunt property',
          bullets: [
            'Whole-home surge device',
            'Grounding review and improvements',
          ],
          tags: ['Surge', 'Safety'],
        },
      ],

      // IMPORTANT: Only populate with real customer reviews (do not fabricate).
      testimonials: [],

      faqs: [
        {
          question:
            'Can you run power to a guest house or outbuilding in Hunt?',
          answer:
            'Yes. We’ll evaluate distance, load, and trenching needs, then install properly sized wiring, subpanels, and grounding for reliable power.',
        },
        {
          question: 'Why do outdoor outlets stop working?',
          answer:
            'Weather exposure and failed GFCI devices are common. We can test the circuit, replace damaged components, and upgrade covers and protection.',
        },
        {
          question: 'Do you work on river-area properties?',
          answer:
            'Yes—outdoor circuits and weather-rated repairs are common around river properties. We use code-compliant components designed for exterior environments.',
        },
        {
          question: 'Do you install surge protection in rural areas?',
          answer:
            'Yes. Surge protection can help reduce damage from lightning and utility surges, especially where sensitive electronics and appliances are present.',
        },
        {
          question: 'Can you help with breaker trips when a compressor starts?',
          answer:
            'We can diagnose whether it’s a circuit overload, motor start draw, wiring issue, or breaker problem and recommend the safest fix.',
        },
        {
          question: 'Do I need permits for electrical work in Kerr County?',
          answer:
            'Many upgrades, especially service/panel work and additions, require permits/inspections. We can help identify what applies to your address.',
        },
      ],
    };
  })(),

  comfort: (() => {
    const slug = '/service-areas/comfort-tx-electrician';

    const seo = buildElectricianSeo({
      slug,
      townName: 'Comfort',
      addressLocality: 'Comfort',
      metaTitle:
        'Electrician in Comfort, TX | Repairs, Panels, Remodel Wiring & Lighting',
      metaDescription:
        'Electrician in Comfort, TX for troubleshooting, panel upgrades, remodel wiring, lighting, and surge protection. ProVolt Electrical Services—licensed and insured.',
      descriptionLong:
        'ProVolt Electrical Services serves Comfort, TX with professional electrical repairs and upgrades—specializing in panel/service capacity, remodel wiring, lighting improvements, and safety upgrades for Hill Country homes and small businesses.',
      serviceType: [
        'Electrical troubleshooting and repairs',
        'Electrical panel upgrades',
        'Remodel wiring and code corrections',
        'Lighting installation and upgrades',
        'Surge protection',
        'Commercial electrical services',
      ],
      breadcrumb: { serviceAreasUrl: SERVICE_AREAS_PAGE },
      extra: {
        // More specific "areaServed" improves locality signals without keyword-stuffing.
        areaServed: [
          { '@type': 'City', name: 'Comfort, TX' },
          { '@type': 'City', name: 'Boerne, TX' },
          { '@type': 'City', name: 'Kerrville, TX' },
          { '@type': 'City', name: 'Fredericksburg, TX' },
        ],
      },
    });

    return {
      townName: 'Comfort',
      stateAbbr: 'TX',
      regionLabel: DEFAULT_REGION,
      phoneNumber: PHONE_DISPLAY,

      heroTitle: 'Master Electrician in Comfort, TX',
      heroSubtitle:
        'Professional electrical service for Comfort homes and Hill Country properties—repairs, panels, lighting, and remodel wiring with clear communication and clean workmanship.',
      heroBadgeText: 'Permits • Inspections • Done Right',
      heroBullets: [
        'Troubleshooting and repairs for outages, trips, and flicker',
        'Panel/service upgrades and surge protection',
        'Remodel wiring, additions, and code corrections',
        'Lighting upgrades for homes, patios, and small businesses',
      ],
      heroCTAText: 'Get Expert Electrical Help',

      residentialHeading:
        'Comfort Residential Electrical Services – Expert Electrical Solutions for Homes',
      residentialSubheading:
        'Safety upgrades and clean installs for remodel-friendly work.',
      residentialIntro:
        'Comfort homes often combine older wiring realities with modern expectations. We help improve capacity and safety—panels, grounding, protection devices, and lighting—while keeping work tidy and aligned with your remodel plans.',
      residentialServices: [
        { label: 'Electrical Troubleshooting & Repair', icon: 'bolt' },
        {
          label: 'Panel Upgrades & Breaker Replacement',
          icon: 'electrical_services',
        },
        { label: 'GFCI/AFCI Safety Improvements', icon: 'verified' },
        { label: 'Remodel Wiring & Code Corrections', icon: 'rule' },
        { label: 'Lighting Upgrades (Interior/Exterior)', icon: 'lightbulb' },
        { label: 'Dedicated Circuits for Kitchens/Laundry', icon: 'power' },
        { label: 'Whole-Home Surge Protection', icon: 'offline_bolt' },
      ],

      commercialHeading:
        'Comfort Commercial Electrical Services – Reliable Solutions for Businesses',
      commercialSubheading:
        'Service calls, lighting, and electrical additions done right.',
      commercialIntro:
        'We help Comfort businesses with electrical repairs, lighting upgrades, and code-correct improvements that keep your space safe for staff and customers.',
      commercialLink: '/electrical-services/commercial-electrician',
      commercialServices: [
        { label: 'Commercial Service Calls & Repairs', icon: 'build' },
        { label: 'Code Compliance Corrections', icon: 'fact_check' },
        { label: 'LED Lighting Upgrades', icon: 'emoji_objects' },
        { label: 'Tenant Improvements & Additions', icon: 'storefront' },
        {
          label: 'Dedicated Equipment Circuits',
          icon: 'precision_manufacturing',
        },
        {
          label: 'Panel/Service Capacity Upgrades',
          icon: 'settings_input_component',
        },
      ],

      ranchHeading:
        'Comfort Ranch & Rural Electrical Services – Wiring, Subpanels & Outdoor Power',
      ranchSubheading: 'Barns, shops, and property power—organized and safe.',
      ranchIntro:
        'For Comfort ranch properties, we build clean, code-correct power distribution—subpanels, outdoor circuits, and equipment-ready 240V power—with careful grounding and durable components.',
      ranchLink: '/electrical-services/ranch-electrician',
      ranchServices: [
        { label: 'Barn & Shop Wiring', icon: 'warehouse' },
        {
          label: 'Outbuilding Subpanels & Feeders',
          icon: 'electrical_services',
        },
        { label: 'Outdoor Power Runs & Trenching', icon: 'cable' },
        { label: 'Well/Pump & Utility Circuits', icon: 'water' },
        { label: 'RV Hookups (30/50-Amp)', icon: 'rv_hookup' },
        {
          label: '240V Equipment & Welder Circuits',
          icon: 'precision_manufacturing',
        },
        { label: 'Surge Protection & Grounding/Bonding', icon: 'shield' },
      ],

      areasServed: [
        'Center Point',
        'Boerne',
        'Kerrville',
        'Fredericksburg',
        'Bandera',
      ],
      urlSlug: slug,
      seo,

      neighborhoods: [
        'Downtown Comfort',
        'I-10 corridor',
        'Rural properties outside town',
        'Near Cypress Creek area',
      ],
      landmarks: [
        'I-10',
        'High Street (Comfort)',
        'Guadalupe River area',
        'Cypress Creek',
      ],
      localContext: {
        homesAndProperties: [
          'Older homes needing grounding and safety upgrades',
          'Remodels and additions requiring new circuits',
          'Detached garages and workshops',
          'Properties along the I-10 corridor',
        ],
        commonElectricalIssues: [
          'Undersized services for modern HVAC/appliance loads',
          'Loose connections causing flicker or warm outlets',
          'Missing GFCI/AFCI protection in key locations',
          'Outdoor lighting and receptacle reliability issues',
        ],
        businessAndRanchNotes: [
          'Lighting upgrades for small storefronts',
          'Shop circuits for tools and equipment',
          'Service planning for expansions and additions',
        ],
      },

      localProjects: [
        {
          title: 'Example: Panel Capacity Upgrade',
          summary:
            'Improved service capacity to support HVAC and a remodel plan.',
          areaHint: 'I-10 corridor',
          bullets: [
            'Load planning for future circuits',
            'Grounding/bonding review',
          ],
          tags: ['Panel', 'Safety'],
        },
        {
          title: 'Example: Remodel Wiring + Code Corrections',
          summary:
            'Added new circuits and updated protection to meet current code needs.',
          areaHint: 'Downtown Comfort area',
          bullets: [
            'Dedicated kitchen/laundry circuits',
            'GFCI/AFCI upgrades where required',
          ],
          tags: ['Remodel', 'Code'],
        },
        {
          title: 'Example: Exterior Lighting Upgrade',
          summary:
            'Installed efficient exterior lighting for security and usability.',
          areaHint: 'Rural Comfort property',
          bullets: [
            'Weather-rated fixtures and controls',
            'Improved coverage and reduced glare',
          ],
          tags: ['Lighting', 'Outdoor'],
        },
      ],

      // IMPORTANT: Only populate with real customer reviews (do not fabricate).
      testimonials: [],

      faqs: [
        {
          question:
            'Do I need a permit for electrical work in Comfort or Kendall County?',
          answer:
            'Many service/panel upgrades and certain additions require permits and inspections. We can help determine what applies to your address and coordinate the process.',
        },
        {
          question: 'Can you help with remodel wiring in older homes?',
          answer:
            'Yes. We add new circuits, upgrade protection, and correct issues while keeping the work organized and aligned with your renovation scope.',
        },
        {
          question: 'Why are my outlets warm or flickering occurs?',
          answer:
            'Warm outlets and flicker can indicate loose connections or overloaded circuits. We can diagnose safely and repair before it becomes a hazard.',
        },
        {
          question: 'Should I upgrade to GFCI/AFCI protection?',
          answer:
            'These protections reduce shock and fire risks. We can recommend the right upgrades based on your panel, circuits, and where the devices are located.',
        },
        {
          question: 'Can you add power to a detached garage or shop?',
          answer:
            'Yes. We’ll size the feeder for distance and load, then install a subpanel and dedicated circuits as needed.',
        },
      ],
    };
  })(),

  fredericksburg: (() => {
    const slug = '/service-areas/fredericksburg-tx-electrician';

    const seo = buildElectricianSeo({
      slug,
      townName: 'Fredericksburg',
      addressLocality: 'Fredericksburg',
      metaTitle:
        'Electrician in Fredericksburg, TX | Panels, Lighting, Repairs & Safety Upgrades',
      metaDescription:
        'Electrician in Fredericksburg, TX for troubleshooting, panel upgrades, lighting, rental safety inspections, and surge protection circuits. ProVolt Electrical Services—licensed and insured.',
      descriptionLong:
        'ProVolt Electrical Services provides Fredericksburg, TX with professional residential and small-business electrical service—focused on safe upgrades for homes and rentals, lighting improvements, panel capacity, and reliable troubleshooting in the Texas Hill Country.',
      serviceType: [
        'Electrical troubleshooting and repairs',
        'Electrical panel upgrades',
        'Lighting installation and upgrades',
        'Safety inspections for homes and rentals',
        'Surge protection',
        'Commercial electrical services',
      ],
      breadcrumb: { serviceAreasUrl: SERVICE_AREAS_PAGE },
      extra: {
        // More specific "areaServed" improves locality signals without keyword-stuffing.
        areaServed: [
          { '@type': 'City', name: 'Fredericksburg, TX' },
          { '@type': 'City', name: 'Stonewall, TX' },
          { '@type': 'City', name: 'Johnson City, TX' },
          { '@type': 'City', name: 'Comfort, TX' },
        ],
      },
    });

    return {
      townName: 'Fredericksburg',
      stateAbbr: 'TX',
      regionLabel: DEFAULT_REGION,
      phoneNumber: PHONE_DISPLAY,

      heroTitle: 'Master Electrician in Fredericksburg, TX',
      heroSubtitle:
        'Electrical service for Fredericksburg homes, short-term rentals, and small businesses—panels, lighting, repairs, and safety upgrades handled cleanly and professionally.',
      heroBadgeText: 'Homes • Rentals • Small Business',
      heroBullets: [
        'Troubleshooting, repairs, and safety inspections for homes and rentals',
        'Lighting upgrades for interiors, exteriors, and landscape areas',
        'Panel upgrades and surge protection for modern appliance loads',
        'Dedicated circuits for HVAC, and kitchens',
      ],
      heroCTAText: 'Request a Licensed Electrician',

      residentialHeading:
        'Fredericksburg Residential Electrical Services – Expert Electrical Solutions for Homes',
      residentialSubheading:
        'Guest-ready safety, lighting, and reliable power.',
      residentialIntro:
        'Fredericksburg properties often see frequent use—family gatherings, guest spaces, and busy weekends. We improve safety and reliability with clean panel work, protected outlets, lighting upgrades, and code-correct repairs.',
      residentialServices: [
        { label: 'Electrical Troubleshooting & Repair', icon: 'bolt' },
        {
          label: 'Panel Upgrades & Breaker Replacement',
          icon: 'electrical_services',
        },
        { label: 'GFCI/AFCI Protection Upgrades', icon: 'verified' },
        { label: 'Indoor/Outdoor Lighting Improvements', icon: 'lightbulb' },
        { label: 'Dedicated Circuits for Kitchens/HVAC', icon: 'power' },
        { label: 'Surge Protection & Grounding', icon: 'offline_bolt' },
        { label: 'Smoke/CO Circuit Updates', icon: 'health_and_safety' },
      ],

      commercialHeading:
        'Fredericksburg Commercial Electrical Services – Reliable Solutions for Businesses',
      commercialSubheading:
        'Lighting, circuits, and compliance support for business spaces.',
      commercialIntro:
        'We help Fredericksburg businesses with practical electrical upgrades—lighting retrofits, equipment circuits, and code-correct fixes—so your space stays safe and dependable for staff and customers.',
      commercialLink: '/electrical-services/commercial-electrician',
      commercialServices: [
        { label: 'Troubleshooting & Electrical Repairs', icon: 'build' },
        { label: 'Lighting Retrofits & LED Upgrades', icon: 'emoji_objects' },
        {
          label: 'Dedicated Circuits for Equipment',
          icon: 'precision_manufacturing',
        },
        {
          label: 'Tenant Improvements & Build-Out Support',
          icon: 'storefront',
        },
        { label: 'Exterior/Signage Lighting Circuits', icon: 'outdoor_grill' },
        { label: 'Service/Panel Upgrades', icon: 'settings_input_component' },
      ],

      ranchHeading:
        'Fredericksburg Ranch & Rural Electrical Services – Power Solutions for Shops, Barns & Outbuildings',
      ranchSubheading:
        'Outdoor power and subpanels planned for long-run reliability.',
      ranchIntro:
        'Fredericksburg ranch properties frequently need safe power across multiple structures. We install feeder runs, subpanels, RV hookups, and equipment-ready circuits—built with clean organization and solid grounding.',
      ranchLink: '/electrical-services/ranch-electrician',
      ranchServices: [
        { label: 'Barn/Shop Wiring & Circuits', icon: 'warehouse' },
        { label: 'Subpanels for Outbuildings', icon: 'electrical_services' },
        { label: 'Outdoor Power Runs & Trenching', icon: 'cable' },
        { label: 'RV 30/50-Amp Hookups', icon: 'rv_hookup' },
        {
          label: '240V Circuits for Equipment',
          icon: 'precision_manufacturing',
        },
        { label: 'Area/Security Lighting', icon: 'lightbulb' },
        { label: 'Surge Protection & Grounding/Bonding', icon: 'shield' },
      ],

      areasServed: ['Comfort', ' Kerrville', 'Center Point', 'Ingram', 'Hunt'],
      urlSlug: slug,
      seo,

      neighborhoods: [
        'Downtown Fredericksburg',
        'US-290 corridor',
        'Rural properties and ranches',
        'Wine country area',
      ],
      landmarks: [
        'Main Street (Fredericksburg)',
        'US-290',
        'National Museum of the Pacific War',
        'Enchanted Rock (area)',
      ],
      localContext: {
        homesAndProperties: [
          'Older/historic homes with modern upgrades',
          'Short-term rentals needing reliable safety and lighting',
          'Outdoor living areas with landscape lighting',
          'Rural properties with detached structures',
        ],
        commonElectricalIssues: [
          'Older wiring needing safety updates',
          'Receptacle/GFCI requirements in kitchens and baths',
          'Panel capacity upgrades for modern loads',
          'Exterior lighting and weather exposure issues',
        ],
        businessAndRanchNotes: [
          'Lighting and power for retail/restaurant spaces',
          'Dedicated circuits for equipment and HVAC',
          'Service reliability planning for guest properties',
        ],
      },

      localProjects: [
        {
          title: 'Example: Rental Safety & GFCI Upgrades',
          summary:
            'Improved safety with protected receptacles and updated devices where needed.',
          areaHint: 'Downtown Fredericksburg area',
          bullets: [
            'GFCI upgrades in wet locations',
            'Outlet/switch inspection and repairs',
          ],
          tags: ['Safety', 'GFCI'],
        },
        {
          title: 'Example: Lighting Refresh (Interior + Exterior)',
          summary:
            'Upgraded fixtures and controls for better ambiance and usability.',
          areaHint: 'Main Street vicinity',
          bullets: [
            'Dimmer-friendly fixture selection',
            'Exterior lighting improvements for pathways',
          ],
          tags: ['Lighting', 'Controls'],
        },
        {
          title: 'Example: Panel Upgrade + Surge Protection',
          summary:
            'Increased capacity for modern appliances and added surge mitigation.',
          areaHint: 'US-290 corridor',
          bullets: [
            'Breaker schedule cleanup',
            'Surge device + grounding review',
          ],
          tags: ['Panel', 'Surge'],
        },
      ],

      // IMPORTANT: Only populate with real customer reviews (do not fabricate).
      testimonials: [],

      faqs: [
        {
          question:
            'Can you help make a short-term rental electrical system safer?',
          answer:
            'Yes. We can inspect common safety items (GFCI/AFCI, loose devices, lighting, panel condition) and recommend upgrades that improve reliability for guests.',
        },
        {
          question: 'Do older Fredericksburg homes need special attention?',
          answer:
            'Often yes. Older wiring and panels may not match modern load demands. We’ll diagnose safely and provide code-compliant upgrade options.',
        },
        {
          question: 'Do you install landscape and exterior lighting?',
          answer:
            'Yes. We install and upgrade outdoor lighting with weather-rated components and safe circuit protection.',
        },
        {
          question: 'Can you upgrade a panel for modern appliances?',
          answer:
            'Yes. We can evaluate capacity, perform load calculations, and upgrade the panel/service where needed to support HVAC, kitchens, and EV charging.',
        },
        {
          question: 'Do you handle permits/inspections in Gillespie County?',
          answer:
            'Requirements vary by jurisdiction. We can help identify what applies at your address and coordinate the right steps.',
        },
      ],
    };
  })(),

  boerne: (() => {
    const slug = '/service-areas/boerne-tx-electrician';

    const seo = buildElectricianSeo({
      slug,
      townName: 'Boerne',
      addressLocality: 'Boerne',
      metaTitle:
        'Electrician in Boerne, TX | Repairs, Panels & Lighting Upgrades',
      metaDescription:
        'Electrician in Boerne, TX for troubleshooting, panel upgrades, surge protection, and lighting/LED retrofits circuits. ProVolt Electrical Services—licensed and insured.',
      descriptionLong:
        'ProVolt Electrical Services serves Boerne, TX with residential and commercial electrical work—specializing in troubleshooting, panel/service capacity upgrades, lighting improvements, and LED retrofits circuits for modern Hill Country living.',
      serviceType: [
        'Electrical troubleshooting and repairs',
        'Electrical panel upgrades',
        'Lighting installation and LED retrofits',
        'Surge protection',
        'Commercial electrical services',
        'Remodel wiring and code corrections',
      ],
      breadcrumb: { serviceAreasUrl: SERVICE_AREAS_PAGE },
      extra: {
        areaServed: [
          { '@type': 'City', name: 'Boerne, TX' },
          { '@type': 'City', name: 'Bandera, TX' },
          { '@type': 'City', name: 'Comfort, TX' },
          { '@type': 'City', name: 'Helotes, TX' },
        ],
      },
    });

    return {
      townName: 'Boerne',
      stateAbbr: 'TX',
      regionLabel: DEFAULT_REGION,
      phoneNumber: PHONE_DISPLAY,

      heroTitle: 'Master Electrician in Boerne, TX',
      heroSubtitle:
        'Reliable electrical work for Boerne homes and businesses—troubleshooting, panels, lighting, and upgrades for modern loads with clean, code-compliant installs.',
      heroBadgeText: 'Residential • Commercial • Fast Response',
      heroBullets: [
        'Troubleshooting and repairs for outages, trips, and flicker',
        'Panel upgrades, surge protection, and service capacity planning',
        'Lighting upgrades and LED retrofits for homes and businesses',
        'Dedicated circuits for modern living',
      ],
      heroCTAText: 'Get Service From a Licensed Electrician',

      residentialHeading:
        'Boerne Residential Electrical Services – Expert Electrical Solutions for Homes',
      residentialSubheading:
        'Upgrades that improve safety, comfort, and reliability.',
      residentialIntro:
        'Boerne homes often grow into new electrical needs—kitchen upgrades, added appliances, and expanded living spaces. We plan capacity correctly and deliver clean installs with modern safety protection.',
      residentialServices: [
        { label: 'Electrical Troubleshooting & Repair', icon: 'bolt' },
        {
          label: 'Panel Upgrades & Breaker Replacement',
          icon: 'electrical_services',
        },
        { label: 'Dedicated Circuits for New Appliances', icon: 'power' },
        { label: 'Lighting Upgrades & Dimmers', icon: 'lightbulb' },
        { label: 'GFCI/AFCI Protection', icon: 'verified' },
        { label: 'Ceiling Fans & Switch Upgrades', icon: 'toys' },
        { label: 'Surge Protection & Grounding', icon: 'offline_bolt' },
      ],

      commercialHeading:
        'Boerne Commercial Electrical Services – Reliable Solutions for Businesses',
      commercialSubheading:
        'Tenant improvements, lighting, and service upgrades.',
      commercialIntro:
        'We support Boerne commercial spaces with build-out wiring, lighting improvements, and code-correct upgrades—focused on keeping your operation safe and minimizing disruption.',
      commercialLink: '/electrical-services/commercial-electrician',
      commercialServices: [
        { label: 'Tenant Build-Outs & Additions', icon: 'storefront' },
        { label: 'Lighting Retrofits & LED Upgrades', icon: 'emoji_objects' },
        { label: 'Service Calls & Troubleshooting', icon: 'build' },
        {
          label: 'Dedicated Circuits for Equipment',
          icon: 'precision_manufacturing',
        },
        { label: 'Exterior/Parking Area Lighting', icon: 'local_parking' },
        {
          label: 'Panel/Service Upgrades & Load Planning',
          icon: 'settings_input_component',
        },
      ],

      ranchHeading:
        'Boerne Ranch & Rural Electrical Services – Wiring, Subpanels & Outdoor Power',
      ranchSubheading:
        'Organized distribution for barns, shops, and property power.',
      ranchIntro:
        'Boerne-area rural properties need safe power distribution across multiple structures. We build clean subpanel layouts, outdoor circuits, RV hookups, and equipment-ready 240V power with durable components and strong grounding.',
      ranchLink: '/electrical-services/ranch-electrician',
      ranchServices: [
        { label: 'Shop & Outbuilding Wiring', icon: 'warehouse' },
        {
          label: 'Outbuilding Subpanels & Feeders',
          icon: 'electrical_services',
        },
        { label: 'Outdoor Power Runs & Trenching', icon: 'cable' },
        { label: 'RV Hookups (30/50-Amp)', icon: 'rv_hookup' },
        {
          label: '240V Circuits for Equipment',
          icon: 'precision_manufacturing',
        },
        { label: 'Area Lighting & Security', icon: 'lightbulb' },
        { label: 'Surge Protection & Grounding/Bonding', icon: 'shield' },
      ],

      areasServed: [
        'Comfort',
        'Helotes',
        'Bandera',
        'Kerrville',
        'Fredericksburg',
      ],
      urlSlug: slug,
      seo,

      neighborhoods: [
        'Downtown Boerne',
        'I-10 corridor',
        'Rural properties outside town',
      ],
      landmarks: [
        'Main Street (Boerne)',
        'Cibolo Creek',
        'Boerne Lake',
        'I-10',
        'Kendall County area',
      ],
      localContext: {
        homesAndProperties: [
          'Modern homes adding EV charging and appliance loads',
          'Renovations and additions requiring new circuits',
          'Outdoor living spaces needing safe power/lighting',
          'Small commercial tenant spaces and offices',
        ],
        commonElectricalIssues: [
          'Panel capacity constraints from added loads',
          'Breaker trips from overloaded circuits',
          'Lighting improvements and LED conversions',
          'Outdoor receptacle protection and weather exposure',
        ],
        businessAndRanchNotes: [
          'Tenant build-outs and service additions',
          'Dedicated circuits for equipment and signage',
          'Lighting retrofits that reduce operating costs',
        ],
      },

      localProjects: [
        {
          title: 'Example: Circuit + Load Check',
          summary:
            'Installed a dedicated circuit with service capacity verification.',
          areaHint: 'I-10 corridor',
          bullets: [
            'Load calculation and breaker sizing',
            'Clean conduit/wiring run and labeling',
          ],
          tags: ['Circuit', 'Load Calc'],
        },
        {
          title: 'Example: LED Retrofit for a Small Business',
          summary:
            'Upgraded interior lighting to efficient LED for better visibility and lower cost.',
          areaHint: 'Downtown Boerne area',
          bullets: [
            'Fixture selection for color/brightness',
            'Controls and switching improvements',
          ],
          tags: ['LED', 'Commercial'],
        },
        {
          title: 'Example: Panel Upgrade + Surge Protection',
          summary:
            'Improved capacity and added surge mitigation for modern loads.',
          areaHint: 'Bandera',
          bullets: [
            'Breaker schedule cleanup',
            'Surge device + grounding review',
          ],
          tags: ['Panel', 'Surge'],
        },
      ],

      // IMPORTANT: Only populate with real customer reviews (do not fabricate).
      testimonials: [],

      faqs: [
        {
          question:
            'Can you help if breakers trip when multiple appliances run?',
          answer:
            'Yes. We’ll diagnose whether it’s a circuit overload, device issue, or service capacity limitation and recommend the safest fix.',
        },
        {
          question:
            'Do you handle commercial service calls and lighting retrofits?',
          answer:
            'Yes. We support small businesses and tenant spaces with troubleshooting, LED upgrades, and code compliance fixes.',
        },
        {
          question: 'Do I need permits for a panel upgrade in Kendall County?',
          answer:
            'Many service and panel upgrades require permits and inspections. We can help identify requirements for your address and coordinate the process.',
        },
        {
          question: 'Should I add whole-home surge protection?',
          answer:
            'Surge protection helps protect electronics from lightning and utility surges—especially valuable after panel upgrades or when you have smart devices and newer appliances.',
        },
        {
          question: 'Can you wire outdoor lighting and outlets safely?',
          answer:
            'Yes. We install weather-rated components and proper protection (like GFCI where required) for safe, reliable outdoor power.',
        },
      ],
    };
  })(),

  bandera: (() => {
    const slug = '/service-areas/bandera-tx-electrician';

    const seo = buildElectricianSeo({
      slug,
      townName: 'Bandera',
      addressLocality: 'Bandera',
      metaTitle:
        'Electrician in Bandera, TX | Rural Wiring, Panels, Repairs & Outdoor Lighting',
      metaDescription:
        'Electrician in Bandera, TX for troubleshooting, panel upgrades, surge protection, outdoor power/lighting, and rural outbuilding wiring. ProVolt Electrical Services—licensed and insured.',
      descriptionLong:
        'ProVolt Electrical Services provides Bandera, TX with dependable Hill Country electrical work—specializing in rural wiring for outbuildings, long-run feeders, panel upgrades, outdoor lighting, surge protection, and safe troubleshooting for ranch properties.',
      serviceType: [
        'Ranch and rural property electrical',
        'Subpanels and long-run feeders',
        'Electrical panel upgrades',
        'Outdoor lighting and outlets',
        'Surge protection',
        'Electrical troubleshooting and repairs',
        'Dedicated circuits for equipment',
      ],
      breadcrumb: { serviceAreasUrl: SERVICE_AREAS_PAGE },
      extra: {
        // More specific "areaServed" improves locality signals without keyword-stuffing.
        areaServed: [
          { '@type': 'City', name: 'Bandera, TX' },
          { '@type': 'City', name: 'Pipe Creek, TX' },
          { '@type': 'City', name: 'Comfort, TX' },
          { '@type': 'City', name: 'Helotes, TX' },
        ],
      },
    });

    return {
      townName: 'Bandera',
      stateAbbr: 'TX',
      regionLabel: DEFAULT_REGION,
      phoneNumber: PHONE_DISPLAY,

      heroTitle: 'Master Electrician in Bandera, TX',
      heroSubtitle:
        'Dependable electrical work for Bandera homes and rural properties—outbuildings, panels, lighting, and repairs built for Hill Country conditions.',
      heroBadgeText: 'Ranch & Rural Specialists',
      heroBullets: [
        'Ranch, shop, and outbuilding wiring—long runs sized correctly',
        'Troubleshooting and repairs for outages and breaker trips',
        'Panel upgrades, surge protection, and safety improvements',
        'Outdoor power and lighting for properties and driveways',
      ],
      heroCTAText: "Let's Talk About Your Electrical Needs",

      residentialHeading:
        'Bandera Residential Electrical Services – Expert Electrical Solutions for Homes',
      residentialSubheading:
        'Safe, practical upgrades for Hill Country homes and properties.',
      residentialIntro:
        'Bandera homes and acreage properties often rely on outdoor circuits, reliable protection, and electrical systems that can handle real use. We troubleshoot issues, improve safety devices, and install upgrades with clean workmanship.',
      residentialServices: [
        { label: 'Electrical Troubleshooting & Repair', icon: 'bolt' },
        {
          label: 'Panel & Breaker Repairs/Upgrades',
          icon: 'electrical_services',
        },
        { label: 'Outdoor Outlets (GFCI/Weather-Rated)', icon: 'verified' },
        { label: 'Exterior Lighting & Security', icon: 'lightbulb' },
        { label: 'Dedicated Circuits for Appliances/HVAC', icon: 'power' },
        { label: 'Ceiling Fans & Switch Replacements', icon: 'toys' },
        { label: 'Surge Protection & Grounding', icon: 'offline_bolt' },
      ],

      commercialHeading:
        'Bandera Commercial Electrical Services – Reliable Solutions for Businesses',
      commercialSubheading:
        'Service calls, lighting, and electrical additions for business spaces.',
      commercialIntro:
        'We help Bandera businesses with troubleshooting, lighting upgrades, and electrical additions that keep your space safe and functional—without the messy installs.',
      commercialLink: '/electrical-services/commercial-electrician',
      commercialServices: [
        { label: 'Commercial Repairs & Troubleshooting', icon: 'build' },
        { label: 'Lighting Upgrades & Retrofits', icon: 'emoji_objects' },
        { label: 'Tenant Improvements & Additions', icon: 'storefront' },
        {
          label: 'Dedicated Circuits for Equipment',
          icon: 'precision_manufacturing',
        },
        { label: 'Panel/Service Upgrades', icon: 'settings_input_component' },
        { label: 'Exterior/Parking Lighting', icon: 'local_parking' },
      ],

      ranchHeading:
        'Bandera Ranch & Rural Electrical Services – Power Solutions for Shops, Barns & Outbuildings',
      ranchSubheading:
        'Built for long runs, outdoor exposure, and working loads.',
      ranchIntro:
        'Bandera ranch properties often need power distributed across barns, shops, and gates with attention to distance, voltage drop, and grounding. We build safe feeder runs, subpanels, RV power, and equipment circuits designed to last.',
      ranchLink: '/electrical-services/ranch-electrician',
      ranchServices: [
        { label: 'Barn & Shop Wiring', icon: 'warehouse' },
        { label: 'Long-Run Feeders & Subpanels', icon: 'electrical_services' },
        { label: 'Outdoor Power & Trenching', icon: 'cable' },
        { label: 'Well/Pump & Utility Circuits', icon: 'water' },
        { label: 'Gate/Entry Power Circuits', icon: 'gate' },
        { label: 'RV 30/50-Amp Hookups', icon: 'rv_hookup' },
        { label: '240V Equipment Circuits', icon: 'precision_manufacturing' },
      ],

      areasServed: ['Boerne', 'Kerrville', 'Comfort', 'Helotes'],
      urlSlug: slug,
      seo,

      neighborhoods: [
        'Bandera (in town)',
        'SH-16 corridor',
        'Rural ranch properties',
        'Medina River area',
      ],
      landmarks: [
        'Medina River',
        'Bandera City Park',
        'SH-16',
        'Hill Country ranch areas',
      ],
      localContext: {
        homesAndProperties: [
          'Rural properties with outbuildings and long runs',
          'Workshops, barns, and equipment-heavy circuits',
          'Outdoor lighting for driveways and gates',
          'Homes needing reliable surge mitigation',
        ],
        commonElectricalIssues: [
          'Voltage drop on long feeders to outbuildings',
          'Outdoor receptacle/weather damage',
          'Breaker trips from motor start loads',
          'Undersized panels for added equipment',
        ],
        businessAndRanchNotes: [
          '240V circuits for welders and compressors',
          'Gate operator circuits',
          'Weather-rated installs and grounding strategy',
        ],
      },

      localProjects: [
        {
          title: 'Example: Outbuilding Feeder + Subpanel',
          summary:
            'Installed a properly sized feeder and subpanel for a detached shop.',
          areaHint: 'SH-16 corridor',
          bullets: [
            'Voltage-drop aware conductor sizing',
            'Grounding/bonding and labeling',
          ],
          tags: ['Rural', 'Subpanel'],
        },
        {
          title: 'Example: Outdoor Lighting & Power',
          summary:
            'Improved property usability and security with exterior lighting and safe outlets.',
          areaHint: 'Medina River area',
          bullets: [
            'Weather-rated fixtures and covers',
            'GFCI protection where required',
          ],
          tags: ['Outdoor', 'Lighting'],
        },
        {
          title: 'Example: Panel Upgrade + Surge Strategy',
          summary:
            'Improved service capacity and added surge mitigation for reliability.',
          areaHint: 'Rural Bandera property',
          bullets: [
            'Panel/service planning',
            'Surge device + grounding review',
          ],
          tags: ['Panel', 'Surge'],
        },
      ],

      // IMPORTANT: Only populate with real customer reviews (do not fabricate).
      testimonials: [],

      faqs: [
        {
          question: 'Can you wire a barn, shop, or outbuilding in Bandera?',
          answer:
            'Yes. We’ll evaluate distance and load, then size conductors correctly, install subpanels where needed, and ensure proper grounding for safe rural power.',
        },
        {
          question: 'Why do breakers trip when equipment starts?',
          answer:
            'Motors can draw high start current. We can diagnose the circuit and recommend the right breaker, wiring, or load solution.',
        },
        {
          question: 'Do you install outdoor lighting for driveways and gates?',
          answer:
            'Yes. We install weather-rated lighting and safe power options for security and usability on rural properties.',
        },
        {
          question: 'Do you install surge protection in Bandera?',
          answer:
            'Yes. Surge protection can help reduce damage from lightning and utility surges—especially valuable for rural properties and sensitive electronics.',
        },
        {
          question:
            'Do I need a permit for electrical upgrades in Bandera County?',
          answer:
            'Requirements can vary by jurisdiction. We can help identify what applies to your address and coordinate the correct steps for service/panel work or additions.',
        },
      ],
    };
  })(),

  helotes: (() => {
    const slug = '/service-areas/helotes-tx-electrician';

    const seo = buildElectricianSeo({
      slug,
      townName: 'Helotes',
      addressLocality: 'Helotes',
      metaTitle:
        'Electrician in Helotes, TX | Repairs, Panels, & Lighting Upgrades',
      metaDescription:
        'Electrician in Helotes, TX for troubleshooting, panel upgrades, surge protection, lighting/LED upgrades, and circuits. ProVolt Electrical Services—licensed and insured.',
      descriptionLong:
        'ProVolt Electrical Services serves Helotes, TX with professional residential and small-business electrical work—focused on troubleshooting, panel/service upgrades, lighting improvements, surge protection, and circuits for modern loads.',
      serviceType: [
        'Electrical troubleshooting and repairs',
        'Electrical panel upgrades',
        'Lighting installation and LED conversions',
        'Surge protection',
        'Commercial electrical services',
        'Dedicated circuits for modern loads',
      ],
      breadcrumb: { serviceAreasUrl: SERVICE_AREAS_PAGE },
      extra: {
        // More specific "areaServed" improves locality signals without keyword-stuffing.
        areaServed: [
          { '@type': 'City', name: 'Helotes, TX' },
          { '@type': 'City', name: 'Boerne, TX' },
          { '@type': 'City', name: 'Bandera, TX' },
          { '@type': 'City', name: 'San Antonio, TX' },
        ],
      },
    });

    return {
      townName: 'Helotes',
      stateAbbr: 'TX',
      regionLabel: DEFAULT_REGION,
      phoneNumber: PHONE_DISPLAY,

      heroTitle: 'Master Electrician in Helotes, TX',
      heroSubtitle:
        'Professional electrical service for Helotes homes and small businesses—repairs, panels, lighting, and modern upgrades with clean installs and code compliance.',
      heroBadgeText: 'Modern Upgrades • Fast Troubleshooting',
      heroBullets: [
        'Troubleshooting and repairs for outages, trips, and flicker',
        'Panel upgrades, surge protection, and service planning',
        'Lighting upgrades and LED conversions for comfort and security',
        'Dedicated circuits for modern loads',
      ],
      heroCTAText: 'Request Service Now',

      residentialHeading:
        'Helotes Residential Electrical Services – Expert Electrical Solutions for Homes',
      residentialSubheading:
        'Clean installs and safety-first upgrades for modern living.',
      residentialIntro:
        'Helotes homeowners often want dependable upgrades that look as good as they perform—lighting updates, dedicated circuits, panel improvements, and protection devices. We keep the work tidy, the plan clear, and the results code-correct.',
      residentialServices: [
        { label: 'Electrical Troubleshooting & Repair', icon: 'bolt' },
        {
          label: 'Panel Upgrades & Breaker Replacement',
          icon: 'electrical_services',
        },
        { label: 'Lighting Upgrades & Dimmers', icon: 'lightbulb' },
        { label: 'GFCI/AFCI Safety Protection', icon: 'verified' },
        { label: 'Dedicated Circuits for Appliances', icon: 'power' },
        { label: 'Ceiling Fans, Switches & Controls', icon: 'tune' },
        { label: 'Surge Protection & Grounding', icon: 'offline_bolt' },
      ],

      commercialHeading:
        'Helotes Commercial Electrical Services – Reliable Solutions for Businesses',
      commercialSubheading:
        'Service calls, lighting, and upgrades with minimal downtime.',
      commercialIntro:
        'We support Helotes businesses with troubleshooting, lighting improvements, and electrical additions—focused on safe work, clean installs, and clear timelines.',
      commercialLink: '/electrical-services/commercial-electrician',
      commercialServices: [
        { label: 'Service Calls & Troubleshooting', icon: 'build' },
        { label: 'Lighting Retrofits & LED Upgrades', icon: 'emoji_objects' },
        { label: 'Tenant Improvements & Additions', icon: 'storefront' },
        {
          label: 'Dedicated Equipment Circuits',
          icon: 'precision_manufacturing',
        },
        { label: 'Panel/Service Upgrades', icon: 'settings_input_component' },
        { label: 'Exterior/Security Lighting', icon: 'security' },
      ],

      ranchHeading:
        'Helotes Ranch & Rural Electrical Services – Wiring, Subpanels & Outdoor Power',
      ranchSubheading:
        'Property power that’s organized, safe, and built for use.',
      ranchIntro:
        'Helotes-area rural properties often need clean distribution across outbuildings and equipment loads. We install subpanels, outdoor circuits, RV hookups, and equipment-ready power with durable components and strong grounding.',
      ranchLink: '/electrical-services/ranch-electrician',
      ranchServices: [
        { label: 'Shop/Outbuilding Wiring', icon: 'warehouse' },
        {
          label: 'Outbuilding Subpanels & Feeders',
          icon: 'electrical_services',
        },
        { label: 'Outdoor Power Runs & Trenching', icon: 'cable' },
        { label: 'RV Hookups (30/50-Amp)', icon: 'rv_hookup' },
        {
          label: '240V Circuits for Equipment',
          icon: 'precision_manufacturing',
        },
        { label: 'Area/Security Lighting', icon: 'lightbulb' },
        { label: 'Surge Protection & Grounding/Bonding', icon: 'shield' },
      ],

      areasServed: ['Boerne', 'Bandera', 'Comfort'],
      urlSlug: slug,
      seo,

      neighborhoods: [
        'Old Town Helotes area',
        'Bandera Rd corridor',
        'Loop 1604 area',
        'NW San Antonio border',
      ],
      landmarks: [
        'Old Town Helotes',
        'Bandera Rd (SH-16)',
        'Loop 1604',
        'Government Canyon area',
      ],
      localContext: {
        homesAndProperties: [
          'Modern homes adding EV charging and appliance loads',
          'Outdoor living spaces needing safe power/lighting',
          'Renovations and additions requiring new circuits',
          'Small commercial spaces and service calls',
        ],
        commonElectricalIssues: [
          'Breaker trips from circuit overloads',
          'Panel capacity constraints for new loads',
          'Lighting upgrades and LED conversions',
          'Outdoor receptacle protection and weather exposure',
        ],
        businessAndRanchNotes: [
          'Lighting and power upgrades for small businesses',
          'Dedicated circuits for equipment and signage',
          'Service planning for remodels and expansions',
        ],
      },

      localProjects: [
        {
          title: 'Example: Circuit Install + Load Calc',
          summary:
            'Installed a circuit with capacity planning for safe charging.',
          areaHint: 'Loop 1604 area',
          bullets: [
            'Load calculation and breaker sizing',
            'Clean wiring run and labeling',
          ],
          tags: ['Circuit', 'Load Calc'],
        },
        {
          title: 'Example: Lighting Upgrade + Controls',
          summary:
            'Upgraded interior and exterior lighting with better controls and efficiency.',
          areaHint: 'Bandera Rd corridor',
          bullets: [
            'LED fixture selection',
            'Timers/dimmers for comfort and security',
          ],
          tags: ['Lighting', 'Controls'],
        },
        {
          title: 'Example: Panel Upgrade + Surge Protection',
          summary:
            'Improved capacity and added surge mitigation for modern loads.',
          areaHint: 'NW San Antonio border area',
          bullets: [
            'Breaker schedule cleanup',
            'Surge device + grounding review',
          ],
          tags: ['Panel', 'Surge'],
        },
      ],

      // IMPORTANT: Only populate with real customer reviews (do not fabricate).
      testimonials: [],

      faqs: [
        {
          question: 'Can you help with lighting upgrades and LED conversions?',
          answer:
            'Yes. We can recommend fixtures and controls that improve brightness, comfort, and energy efficiency for both interior and exterior lighting.',
        },
        {
          question: 'Why do breakers trip when multiple devices run?',
          answer:
            'It can be an overloaded circuit, a wiring issue, or service capacity limitations. We’ll diagnose safely and recommend the right fix.',
        },
        {
          question:
            'Do I need a permit for a panel upgrade in Bexar County jurisdictions?',
          answer:
            'Many service and panel upgrades require permits and inspections. We can help identify requirements for your address and coordinate the process.',
        },
        {
          question: 'Should I add whole-home surge protection?',
          answer:
            'Surge protection helps protect appliances and electronics from lightning and utility surges—especially useful with newer smart devices and equipment.',
        },
        {
          question: 'Can you add outdoor power safely for patios or lighting?',
          answer:
            'Yes. We install weather-rated components and the right circuit protection (including GFCI where required) for safe outdoor power.',
        },
      ],
    };
  })(),
};
