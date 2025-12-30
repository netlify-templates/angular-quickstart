export interface LocalProject {
  title: string; // e.g. "200A Panel Upgrade"
  summary: string; // 1–2 sentences
  areaHint?: string; // e.g. "Near Schreiner University" / "In Comanche Trace"
  bullets?: string[]; // 2–4 specifics
  tags?: string[]; // e.g. ["Panel", "Permits", "Inspection"]
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

  residentialHeading?: string;
  residentialSubheading?: string;
  residentialIntro?: string;
  residentialLink: string;
  residentialServices: ServiceItem[];

  commercialHeading?: string;
  commercialSubheading?: string;
  commercialIntro?: string;
  commercialLink: string;
  commercialServices: ServiceItem[];

  energyHeading?: string;
  energySubheading?: string;
  energyIntro?: string;
  energyLink?: string;
  energyServices: ServiceItem[];

  areasServed: string[];
  urlSlug: string;
  seo?: TownSeoConfig;

  neighborhoods: string[];
  landmarks: string[];
  localContext: LocalContext;

  localProjects: LocalProject[];
  testimonials: Testimonial[];
  faqs: FaqItem[];

  relatedLinks?: RelatedLink[];
  requestQuoteLink?: string; // e.g. "/contact-us"
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

// Shared service groups (customize per-town if desired)
const BASE_RESIDENTIAL_SERVICES: ServiceItem[] = [
  { label: 'Troubleshooting & repairs', icon: 'bolt' },
  { label: 'Breaker & panel upgrades', icon: 'electrical_services' },
  { label: 'Indoor & outdoor lighting', icon: 'lightbulb' },
  { label: 'Rewiring & code corrections', icon: 'rule' },
  { label: 'Whole-home surge protection', icon: 'offline_bolt' },
  { label: 'Ceiling fans & switches', icon: 'toys' },
];

const BASE_COMMERCIAL_RANCH_SERVICES: ServiceItem[] = [
  { label: 'Ranch & shop wiring', icon: 'agriculture' },
  { label: 'Dedicated equipment circuits', icon: 'precision_manufacturing' },
  { label: 'Parking & security lighting', icon: 'outdoor_grill' },
  { label: 'Panel & service upgrades', icon: 'settings_input_component' },
  { label: 'Maintenance & emergency service', icon: 'build' },
];

const BASE_ENERGY_SERVICES: ServiceItem[] = [
  { label: 'Energy audits', icon: 'analytics' },
  { label: 'LED & efficiency upgrades', icon: 'light_mode' },
  { label: 'Load calculations', icon: 'calculate' },
  { label: 'New build & remodel consultations', icon: 'architecture' },
  { label: 'Solar-ready electrical prep', icon: 'solar_power' },
];

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
        'Electrician Kerrville TX | Residential & Commercial Electrical',
      metaDescription:
        'Trusted electrician in Kerrville, TX for repairs, upgrades, lighting, panels, ranch wiring & more. Licensed, insured, and local to the Hill Country.',
      descriptionLong:
        'ProVolt Electrical Services provides residential, commercial, and ranch & rural electrical work in Kerrville, TX and the surrounding Texas Hill Country.',
      serviceType: [
        'Residential electrical services',
        'Commercial electrical services',
        'Ranch and rural property electrical',
        'Electrical panel upgrades',
        'Lighting installation',
        'Electrical troubleshooting and repairs',
        'Energy audits and efficiency upgrades',
        'Electrical consultations for renovations and new builds',
      ],
      breadcrumb: { serviceAreasUrl: SERVICE_AREAS_PAGE },
    });

    return {
      townName: 'Kerrville',
      stateAbbr: 'TX',
      regionLabel: DEFAULT_REGION,
      phoneNumber: PHONE_DISPLAY,
      heroBullets: [
        'Master electrician with Hill Country experience',
        'Fast, reliable troubleshooting and repairs',
        'Code-compliant work that protects your property',
      ],
      heroTitle: 'Electrician in Kerrville',
      heroSubtitle:
        'Local, licensed, and dependable—built for Kerrville homes, shops, and ranch properties.',
      residentialIntro:
        'Whether you’re dealing with a tripping breaker, outdated panel, or planning a remodel, we help keep your Kerrville home safe, bright, and efficient.',
      residentialServices: [
        { label: 'Breaker & panel upgrades', icon: 'electrical_services' },
        { label: 'Troubleshooting & repairs', icon: 'bolt' },
        { label: 'Whole-home surge protection', icon: 'offline_bolt' },
        { label: 'Indoor & outdoor lighting', icon: 'lightbulb' },
        { label: 'Rewiring & code corrections', icon: 'rule' },
        { label: 'Ceiling fans & switches', icon: 'toys' },
      ],
      residentialLink: '/electrical-services/residential-electrician',
      commercialIntro:
        'From small businesses in town to ranch shops outside city limits, we design and maintain electrical systems built for real workloads.',
      commercialServices: [
        { label: 'Panel & service upgrades', icon: 'settings_input_component' },
        { label: 'Ranch & shop wiring', icon: 'agriculture' },
        {
          label: 'Dedicated equipment circuits',
          icon: 'precision_manufacturing',
        },
        { label: 'Parking & security lighting', icon: 'outdoor_grill' },
        { label: 'Maintenance & emergency service', icon: 'build' },
      ],
      commercialLink: '/electrical-services/commercial-electrician',
      energyIntro:
        'Planning a new build or remodel in Kerrville? We provide electrical design input, load calculations, and energy-efficient solutions that save money long-term.',
      energyServices: [
        { label: 'Energy audits', icon: 'analytics' },
        { label: 'LED & efficiency upgrades', icon: 'light_mode' },
        { label: 'Load calculations', icon: 'calculate' },
        { label: 'New build & remodel consultations', icon: 'architecture' },
        { label: 'Solar-ready electrical prep', icon: 'solar_power' },
      ],
      areasServed: [
        'Kerrville',
        'Ingram',
        'Hunt',
        'Center Point',
        'Comfort',
        'Bandera',
        'Fredericksburg',
        'Boerne',
        'Helotes',
      ],
      urlSlug: slug,
      seo,

      neighborhoods: [
        'Comanche Trace',
        'Riverhill',
        'Northwest Hills',
        'Downtown Kerrville',
        'Junction Hwy corridor',
      ],
      landmarks: [
        'Schreiner University',
        'Guadalupe River',
        'Sidney Baker St',
        'Louise Hays Park',
        'Loop 534',
      ],
      localContext: {
        homesAndProperties: [
          '1970s–1990s ranch homes',
          'Riverfront properties with outdoor circuits',
          'Metal shop buildings and barns',
          'Remodels and additions',
        ],
        commonElectricalIssues: [
          'Aging panels (Zinsco/FPE) and undersized services',
          'Long service runs to outbuildings',
          'Outdoor GFCI and lighting failures',
          'Aluminum branch circuits in older homes',
        ],
        businessAndRanchNotes: [
          '240V circuits for welders and compressors',
          'RV hookups and shore power',
          'Well/pump circuits and trenching considerations',
        ],
      },

      localProjects: [
        {
          title: '200A Panel Upgrade',
          summary: 'Main service and panel replacement for a 1980s ranch home.',
          areaHint: 'Near Schreiner University',
          bullets: [
            'Replaced obsolete panel with 200A service',
            'New grounding and bonding per code',
            'Load calculation for future EV charger',
          ],
          tags: ['Panel', 'Permits', 'Inspection'],
        },
        {
          title: 'Hot Tub Circuit & GFCI',
          summary:
            'Dedicated 50A spa circuit with outdoor-rated disconnect and GFCI.',
          areaHint: 'Riverhill',
          bullets: [
            'Correct conductor sizing for run length',
            'Weatherproof equipment and bonding',
          ],
          tags: ['Outdoor', 'GFCI', 'Safety'],
        },
        {
          title: 'Shop Subpanel & Lighting',
          summary:
            'Added 100A subpanel to metal shop with task and area lighting.',
          areaHint: 'Comanche Trace',
          bullets: [
            'Dedicated 240V circuits for equipment',
            'LED bay lights with high CRI',
          ],
          tags: ['Shop', 'Subpanel', 'Lighting'],
        },
      ],

      testimonials: [
        {
          quote:
            'Quick diagnosis and clean panel upgrade—our lights stopped flickering immediately.',
          name: 'M. R.',
          areaHint: 'Riverhill',
        },
        {
          quote:
            'They knew exactly how to handle our long run to the barn. No more nuisance trips.',
          name: 'J. M.',
          areaHint: 'Comanche Trace',
        },
      ],

      faqs: [
        {
          question: 'Do I need a permit in Kerrville for a panel upgrade?',
          answer:
            'Panel and service upgrades typically require permits and inspections. We handle the permit process and coordinate inspections.',
        },
        {
          question:
            'Can you service properties outside Kerrville city limits (ranches)?',
          answer:
            'Yes. We regularly work on rural properties and plan for long runs, proper voltage drop, and trenching requirements.',
        },
        {
          question:
            'What’s the most common cause of breaker trips in Kerrville homes?',
          answer:
            'Often overloaded circuits or aging breakers. We evaluate loads and correct wiring or upgrade breakers/panels as needed.',
        },
        {
          question: 'How long do inspections take in Kerr County for upgrades?',
          answer:
            'Timing varies, but upgrades often complete within 1–2 weeks depending on utility coordination and inspector availability.',
        },
      ],

      relatedLinks: [
        {
          label: 'Electrical Panel Upgrades',
          routerLink: '/electrical-services/panel-upgrades',
          icon: 'electrical_services',
        },
        {
          label: 'EV Charger Installation',
          routerLink: '/electrical-services/ev-chargers',
          icon: 'electric_car',
        },
        {
          label: 'Generator Interlock/Switches',
          routerLink: '/electrical-services/generators',
          icon: 'generator',
        },
      ],
      requestQuoteLink: '/contact-us',
    };
  })(),

  ingram: (() => {
    const slug = '/service-areas/ingram-tx-electrician';

    const seo = buildElectricianSeo({
      slug,
      townName: 'Ingram',
      addressLocality: 'Ingram',
      metaTitle: 'Electrician Ingram TX | ProVolt Electrical Services',
      metaDescription:
        'Reliable electrician in Ingram, TX offering repairs, lighting, panel upgrades & rural property electrical work. Local, licensed, and dependable.',
      descriptionLong:
        'ProVolt Electrical Services offers licensed residential, commercial, and rural electrical services in Ingram, TX and nearby Hill Country areas.',
      serviceType: [
        'Residential electrical services',
        'Commercial electrical services',
        'Ranch and rural property electrical',
        'Lighting installation',
        'Panel upgrades and replacements',
        'Electrical troubleshooting and repairs',
      ],
      breadcrumb: { serviceAreasUrl: SERVICE_AREAS_PAGE },
    });

    return {
      townName: 'Ingram',
      stateAbbr: 'TX',
      regionLabel: DEFAULT_REGION,
      phoneNumber: PHONE_DISPLAY,
      heroBullets: [
        'Responsive service for river and rural properties',
        'Licensed, insured, and local to the Hill Country',
        'Clean, safe, and code-compliant electrical work',
      ],
      heroTitle: 'Electrician in Ingram',
      heroSubtitle:
        'River homes, rural properties, and shops—built for the realities of the Guadalupe.',
      residentialIntro:
        'From river homes to neighborhood properties, we keep your Ingram home powered safely and reliably.',
      residentialServices: [
        { label: 'Troubleshooting & repairs', icon: 'bolt' },
        { label: 'Lighting & ceiling fans', icon: 'lightbulb' },
        { label: 'Panel upgrades', icon: 'electrical_services' },
        { label: 'Surge protection', icon: 'offline_bolt' },
        { label: 'Outdoor circuits & GFCI', icon: 'outdoor_grill' },
      ],
      residentialLink: '/electrical-services/residential-electrician',
      commercialIntro:
        'Shops, small businesses, and rural properties in Ingram count on us for dependable electrical systems.',
      commercialServices: [
        { label: 'Ranch & shop wiring', icon: 'agriculture' },
        {
          label: 'Dedicated equipment circuits',
          icon: 'precision_manufacturing',
        },
        { label: 'Security & area lighting', icon: 'outdoor_grill' },
        { label: 'Service upgrades', icon: 'settings_input_component' },
      ],
      commercialLink: '/electrical-services/commercial-electrician',
      energyIntro:
        'We help Ingram homeowners and businesses cut costs with energy-efficient lighting and smart electrical design.',
      energyServices: BASE_ENERGY_SERVICES,
      areasServed: [
        'Ingram',
        'Kerrville',
        'Hunt',
        'Center Point',
        'Comfort',
        'Bandera',
      ],
      urlSlug: slug,
      seo,

      neighborhoods: ['Old Ingram', 'Johnson Creek area', 'River Rd'],
      landmarks: ['Ingram Dam', 'Guadalupe River (Hwy 39)', 'Old Ingram Loop'],
      localContext: {
        homesAndProperties: [
          'Riverfront cabins and weekend homes',
          'Manufactured homes with add-ons',
          'Rural lots with detached shops',
        ],
        commonElectricalIssues: [
          'Outdoor GFCI trips and moisture intrusion',
          'Aging service equipment near river exposure',
          'Voltage drop on long runs to outbuildings',
        ],
        businessAndRanchNotes: [
          'RV hookups for guests',
          'Well/pump circuits with proper protection',
        ],
      },

      localProjects: [
        {
          title: 'RV Hookup & Subpanel',
          summary:
            'Installed 50A RV receptacle with small subpanel for guest parking.',
          areaHint: 'Near Ingram Dam',
          bullets: [
            'Correct wire sizing for 100’ run',
            'GFCI per code for outdoor circuits',
          ],
          tags: ['RV', 'Subpanel', 'Outdoor'],
        },
        {
          title: 'River Cabin Lighting',
          summary:
            'Upgraded interior and exterior lighting to sealed LED fixtures.',
          areaHint: 'Hwy 39 corridor',
          bullets: ['Weather-rated fixtures', 'Smart timer controls'],
          tags: ['Lighting', 'Outdoor', 'Energy'],
        },
      ],

      testimonials: [
        {
          quote:
            'Helped us sort out recurring GFCI trips by sealing and rerouting outdoor runs.',
          name: 'T. K.',
          areaHint: 'Old Ingram',
        },
      ],

      faqs: [
        {
          question: 'Can you install RV hookups at river properties in Ingram?',
          answer:
            'Yes. We size conductors for run length, install proper disconnects, and ensure GFCI and weather protection.',
        },
        {
          question: 'Do river homes need special fixtures?',
          answer:
            'We recommend sealed, damp/wet-rated LED fixtures and in-use covers to reduce nuisance trips and corrosion.',
        },
      ],

      relatedLinks: [
        {
          label: 'Outdoor & Landscape Lighting',
          routerLink: '/electrical-services/outdoor-lighting',
          icon: 'forest',
        },
        {
          label: 'RV Hookup Installation',
          routerLink: '/electrical-services/rv-hookups',
          icon: 'rv_hookup',
        },
      ],
      requestQuoteLink: '/contact-us',
    };
  })(),

  hunt: (() => {
    const slug = '/service-areas/hunt-tx-electrician';

    const seo = buildElectricianSeo({
      slug,
      townName: 'Hunt',
      addressLocality: 'Hunt',
      metaTitle:
        'Electrician Hunt TX | Ranch & Residential Electrical Services',
      metaDescription:
        'Electrical service in Hunt, TX including ranch wiring, outdoor lighting, panel upgrades, troubleshooting & repairs. Quality work from a local master electrician.',
      descriptionLong:
        'ProVolt Electrical Services provides expert electrical work for homes, ranches, and river properties in Hunt, TX.',
      serviceType: [
        'Ranch and rural property electrical',
        'Outdoor and landscape lighting',
        'Panel upgrades',
        'Electrical troubleshooting and repairs',
        'Well and pump circuits',
      ],
      breadcrumb: { serviceAreasUrl: SERVICE_AREAS_PAGE },
    });

    return {
      townName: 'Hunt',
      stateAbbr: 'TX',
      regionLabel: DEFAULT_REGION,
      phoneNumber: PHONE_DISPLAY,
      heroBullets: [
        'Experienced with ranch and river properties',
        'Designed for long runs and heavy loads',
        'Trusted Hill Country master electrician',
      ],
      heroTitle: 'Electrician in Hunt',
      heroSubtitle:
        'Ranch-ready electrical: long runs, pump circuits, and durable outdoor work.',
      residentialIntro:
        'We support the unique electrical needs of homes and river properties in Hunt with safe, reliable service.',
      residentialServices: [
        { label: 'Troubleshooting & repairs', icon: 'bolt' },
        { label: 'Outdoor & landscape lighting', icon: 'outdoor_grill' },
        { label: 'Panel upgrades', icon: 'electrical_services' },
        { label: 'Surge protection', icon: 'offline_bolt' },
      ],
      residentialLink: '/electrical-services/residential-electrician',
      commercialIntro:
        'From barns and shops to larger ranch facilities, we keep your Hunt property powered and protected.',
      commercialServices: [
        { label: 'Ranch & shop wiring', icon: 'agriculture' },
        { label: 'Well & pump circuits', icon: 'water' },
        {
          label: 'Dedicated equipment circuits',
          icon: 'precision_manufacturing',
        },
        { label: 'Service upgrades', icon: 'settings_input_component' },
      ],
      commercialLink: '/electrical-services/commercial-electrician',
      energyIntro:
        'Long-run and remote properties benefit from thoughtful, efficient electrical design and dependable power distribution.',
      energyServices: BASE_ENERGY_SERVICES,
      areasServed: [
        'Hunt',
        'Ingram',
        'Kerrville',
        'Center Point',
        'Mountain Home',
      ],
      urlSlug: slug,
      seo,

      neighborhoods: ['North Fork Guadalupe', 'Camp area corridors'],
      landmarks: ['Camp Mystic', 'Mo Ranch', 'Guadalupe River'],
      localContext: {
        homesAndProperties: [
          'River properties with detached structures',
          'Ranches with multiple outbuildings',
        ],
        commonElectricalIssues: [
          'Voltage drop on long trench runs',
          'Pump controller and well circuit issues',
          'Lighting for large outdoor areas',
        ],
        businessAndRanchNotes: [
          '240V equipment circuits (welders/compressors)',
          'Subpanels for barns and shops',
        ],
      },

      localProjects: [
        {
          title: 'Barn Subpanel & Lighting',
          summary: 'Installed 125A subpanel with bay lights and GFCI circuits.',
          areaHint: 'North Fork',
          bullets: [
            'Feeder sized for 300’ trench run',
            'LED high-bay fixtures with switching zones',
          ],
          tags: ['Ranch', 'Subpanel', 'Lighting'],
        },
        {
          title: 'Well Pump Circuit Upgrade',
          summary:
            'Rewired pump controller and added surge protection on the service.',
          areaHint: 'Near Mo Ranch',
          bullets: [
            'New disconnect and bonding',
            'SPD added at main panel for pump protection',
          ],
          tags: ['Pump', 'Surge', 'Outdoor'],
        },
      ],

      testimonials: [
        {
          quote:
            'Our ranch shop finally has proper power—no more dim lights and tripping breakers.',
          name: 'S. L.',
          areaHint: 'North Fork',
        },
      ],

      faqs: [
        {
          question: 'Do you trench and run feeders to remote barns?',
          answer:
            'Yes. We size feeders for distance and load, plan voltage drop, and use proper conduit depths and materials.',
        },
        {
          question: 'Can you diagnose well/pump electrical issues?',
          answer:
            'We service pump controllers, disconnects, and wiring, and add surge protection to reduce failures.',
        },
      ],

      relatedLinks: [
        {
          label: 'Ranch & Rural Electrical',
          routerLink: '/electrical-services/ranch',
          icon: 'agriculture',
        },
        {
          label: 'Outdoor Lighting',
          routerLink: '/electrical-services/outdoor-lighting',
          icon: 'outdoor_grill',
        },
      ],
      requestQuoteLink: '/contact-us',
    };
  })(),

  comfort: (() => {
    const slug = '/service-areas/comfort-tx-electrician';

    const seo = buildElectricianSeo({
      slug,
      townName: 'Comfort',
      addressLocality: 'Comfort',
      metaTitle: 'Electrician Comfort TX | Repairs, Lighting & Panel Upgrades',
      metaDescription:
        'Professional electrician in Comfort, TX for troubleshooting, lighting, rewiring, surge protection & energy efficiency upgrades. Fast, reliable service.',
      descriptionLong:
        'ProVolt Electrical Services delivers residential and light commercial electrical services in Comfort, TX and the surrounding Hill Country.',
      serviceType: [
        'Residential electrical services',
        'Troubleshooting and repairs',
        'Lighting and ceiling fan installation',
        'Panel and breaker upgrades',
        'Energy audits and efficiency upgrades',
      ],
      breadcrumb: { serviceAreasUrl: SERVICE_AREAS_PAGE },
    });

    return {
      townName: 'Comfort',
      stateAbbr: 'TX',
      regionLabel: DEFAULT_REGION,
      phoneNumber: PHONE_DISPLAY,
      heroBullets: [
        'Fast response for Comfort homeowners',
        'Respectful of historic and modern homes',
        'Honest pricing and clear communication',
      ],
      heroTitle: 'Electrician in Comfort',
      heroSubtitle:
        'Historic homes and newer builds—work done cleanly and to code.',
      residentialIntro:
        'We provide full residential electrical service to Comfort homeowners, from repairs to upgrades and remodels.',
      residentialServices: [
        { label: 'Panel & breaker upgrades', icon: 'electrical_services' },
        { label: 'Troubleshooting & repairs', icon: 'bolt' },
        { label: 'Lighting & fans', icon: 'lightbulb' },
        { label: 'Rewiring & code corrections', icon: 'rule' },
        { label: 'Surge protection', icon: 'offline_bolt' },
      ],
      residentialLink: '/electrical-services/residential-electrician',
      commercialIntro:
        'Small businesses and rural properties in Comfort rely on us for dependable, code-compliant electrical systems.',
      commercialServices: BASE_COMMERCIAL_RANCH_SERVICES,
      commercialLink: '/electrical-services/commercial-electrician',
      energyIntro:
        'Upgrade to efficient lighting and modern electrical design that lowers utility costs over time.',
      energyServices: BASE_ENERGY_SERVICES,
      areasServed: [
        'Comfort',
        'Boerne',
        'Fredericksburg',
        'Kerrville',
        'Center Point',
      ],
      urlSlug: slug,
      seo,

      neighborhoods: [
        'Historic District',
        'Cypress Creek area',
        'I-10 frontage',
      ],
      landmarks: ['High St', 'Comfort Park', 'Cypress Creek'],
      localContext: {
        homesAndProperties: [
          'Historic homes with older wiring methods',
          'Remodels and additions blending old/new',
        ],
        commonElectricalIssues: [
          'Non-grounded receptacles',
          'Outdated panels and brittle insulation',
          'Limited circuits leading to nuisance trips',
        ],
        businessAndRanchNotes: [
          'Retail and restaurants along Main/High',
          'Rural shops needing dedicated equipment circuits',
        ],
      },

      localProjects: [
        {
          title: 'Historic Home Receptacle Upgrades',
          summary: 'Upgraded circuits and added GFCI/AFCI where required.',
          areaHint: 'Historic District',
          bullets: [
            'Mapped existing circuits and loads',
            'Added grounded receptacles safely',
          ],
          tags: ['Rewiring', 'Safety', 'Code'],
        },
        {
          title: 'Panel Upgrade & Surge',
          summary: 'Modernized service equipment and added surge protection.',
          areaHint: 'Near Comfort Park',
          bullets: ['New 200A panel', 'SPD for whole-home protection'],
          tags: ['Panel', 'Surge'],
        },
      ],

      testimonials: [
        {
          quote:
            'Respectful of our older home—they explained options and left everything tidy.',
          name: 'A. D.',
          areaHint: 'Comfort',
        },
      ],

      faqs: [
        {
          question:
            'Do Comfort’s historic homes need special electrical considerations?',
          answer:
            'Yes. We evaluate grounding, insulation condition, and panel capacity, and recommend safe upgrades without over-altering the structure.',
        },
        {
          question: 'Can you add new circuits during a remodel?',
          answer:
            'We coordinate load calculations and code requirements to add circuits cleanly and safely.',
        },
      ],

      relatedLinks: [
        {
          label: 'Home Rewiring & Safety',
          routerLink: '/electrical-services/rewiring',
          icon: 'rule',
        },
        {
          label: 'Surge Protection',
          routerLink: '/electrical-services/surge-protection',
          icon: 'offline_bolt',
        },
      ],
      requestQuoteLink: '/contact-us',
    };
  })(),

  fredericksburg: (() => {
    const slug = '/service-areas/fredericksburg-tx-electrician';
    const seo = buildElectricianSeo({
      slug,
      townName: 'Fredericksburg',
      addressLocality: 'Fredericksburg',
      metaTitle: 'Electrician Fredericksburg TX | Vacation Rental & Lighting',
      metaDescription:
        'Electrician in Fredericksburg, TX focused on rental safety inspections, lighting upgrades, EV chargers, and service upgrades.',
      descriptionLong:
        'ProVolt provides electrical services for homes and vacation rentals in Fredericksburg, TX—lighting upgrades, EV chargers, inspections, and service upgrades.',
      serviceType: [
        'Residential electrical services',
        'Vacation rental safety inspections',
        'Lighting upgrades',
        'EV charger installation',
        'Service upgrades',
      ],
      breadcrumb: { serviceAreasUrl: SERVICE_AREAS_PAGE },
    });
    return {
      townName: 'Fredericksburg',
      stateAbbr: 'TX',
      regionLabel: DEFAULT_REGION,
      phoneNumber: PHONE_DISPLAY,
      heroBullets: [
        'Vacation rental safety and compliance',
        'Lighting upgrades for historic and modern homes',
        'EV charger installs with proper load calculations',
      ],
      residentialIntro:
        'From historic homes to modern rentals, we help keep Fredericksburg properties safe, efficient, and guest-ready.',
      residentialServices: [
        {
          label: 'Vacation rental safety inspections',
          icon: 'assignment_turned_in',
        },
        { label: 'Lighting upgrades', icon: 'lightbulb' },
        { label: 'EV charger installation', icon: 'electric_car' },
        { label: 'Panel & service upgrades', icon: 'electrical_services' },
        { label: 'Troubleshooting & repairs', icon: 'bolt' },
      ],
      residentialLink: '/electrical-services/residential-electrician',
      commercialIntro:
        'Shops, tasting rooms, and small businesses rely on clean, dependable power.',
      commercialServices: [
        {
          label: 'Dedicated equipment circuits',
          icon: 'precision_manufacturing',
        },
        { label: 'Lighting & ambiance controls', icon: 'light_mode' },
        { label: 'Service upgrades', icon: 'settings_input_component' },
      ],
      commercialLink: '/electrical-services/commercial-electrician',
      energyIntro:
        'Smart design avoids nuisance trips and keeps rentals energy efficient without sacrificing comfort.',
      energyServices: BASE_ENERGY_SERVICES,
      areasServed: [
        'Fredericksburg',
        'Stonewall',
        'Luckenbach',
        'Johnson City',
        'Kerrville',
      ],
      urlSlug: slug,
      seo,

      neighborhoods: ['Stone Ridge', 'Historic Downtown', 'Post Oak'],
      landmarks: ['Main St', 'Loop 163', 'Marktplatz', 'Winery corridor'],
      localContext: {
        homesAndProperties: [
          'Historic homes with mixed wiring eras',
          'Vacation rentals with higher usage turnover',
        ],
        commonElectricalIssues: [
          'Underpowered panels for EV + HVAC',
          'Loose/aged connections causing flicker',
        ],
        businessAndRanchNotes: [
          'Tasting rooms needing ambiance lighting and dedicated circuits',
        ],
      },

      localProjects: [],
      testimonials: [],
      faqs: [
        {
          question:
            'Can you provide safety checks for short-term rental properties?',
          answer:
            'Yes. We review panels, GFCI/AFCI, smoke/CO placement, and provide a punch list to meet typical platform and local expectations.',
        },
      ],

      relatedLinks: [
        {
          label: 'EV Charger Installation',
          routerLink: '/electrical-services/ev-chargers',
          icon: 'electric_car',
        },
        {
          label: 'Lighting Upgrades',
          routerLink: '/electrical-services/lighting',
          icon: 'light_mode',
        },
      ],
      requestQuoteLink: '/contact-us',
    };
  })(),

  boerne: (() => {
    const slug = '/service-areas/boerne-tx-electrician';
    const seo = buildElectricianSeo({
      slug,
      townName: 'Boerne',
      addressLocality: 'Boerne',
      metaTitle: 'Electrician Boerne TX | Panels, Lighting & EV Chargers',
      metaDescription:
        'Boerne electrician for panel upgrades, lighting, EV chargers, and shop power. Licensed and local.',
      descriptionLong:
        'ProVolt Electrical Services supports Boerne homeowners and shops with panels, lighting, EV chargers, and dedicated equipment circuits.',
      serviceType: [
        'Panel upgrades',
        'Lighting',
        'EV chargers',
        'Troubleshooting & repairs',
        'Shop power',
      ],
      breadcrumb: { serviceAreasUrl: SERVICE_AREAS_PAGE },
    });
    return {
      townName: 'Boerne',
      stateAbbr: 'TX',
      regionLabel: DEFAULT_REGION,
      phoneNumber: PHONE_DISPLAY,
      heroBullets: [
        'Panels and EV-ready upgrades',
        'Lighting and smart controls',
        'Shop circuits done right',
      ],
      residentialIntro:
        'We help Boerne homes modernize panels, add chargers, and improve lighting with clean, code-compliant work.',
      residentialServices: [
        { label: 'Panel & service upgrades', icon: 'electrical_services' },
        { label: 'EV charger installation', icon: 'electric_car' },
        { label: 'Lighting & smart controls', icon: 'light_mode' },
        { label: 'Troubleshooting & repairs', icon: 'bolt' },
      ],
      residentialLink: '/electrical-services/residential-electrician',
      commercialIntro:
        'From garages to small businesses, we plan circuits and lighting that match real-world loads.',
      commercialServices: [
        {
          label: 'Dedicated equipment circuits',
          icon: 'precision_manufacturing',
        },
        { label: 'Shop subpanels', icon: 'settings_input_component' },
        { label: 'Security & parking lighting', icon: 'outdoor_grill' },
      ],
      commercialLink: '/electrical-services/commercial-electrician',
      energyIntro:
        'Thoughtful load calculations and efficient lighting save money and reduce nuisance trips.',
      energyServices: BASE_ENERGY_SERVICES,
      areasServed: ['Boerne', 'Fair Oaks Ranch', 'Comfort', 'Kendall County'],
      urlSlug: slug,
      seo,

      neighborhoods: ['North Boerne', 'Downtown corridor', 'Fair Oaks fringe'],
      landmarks: ['River Rd Park', 'Main St', 'I-10 corridor'],
      localContext: {},
      localProjects: [],
      testimonials: [],
      faqs: [],
      relatedLinks: [
        {
          label: 'EV Charger Installation',
          routerLink: '/electrical-services/ev-chargers',
          icon: 'electric_car',
        },
        {
          label: 'Panel Upgrades',
          routerLink: '/electrical-services/panel-upgrades',
          icon: 'electrical_services',
        },
      ],
      requestQuoteLink: '/contact-us',
    };
  })(),

  bandera: (() => {
    const slug = '/service-areas/bandera-tx-electrician';
    const seo = buildElectricianSeo({
      slug,
      townName: 'Bandera',
      addressLocality: 'Bandera',
      metaTitle: 'Electrician Bandera TX | Ranch & Residential Electrical',
      metaDescription:
        'Bandera electrician for ranch wiring, well/pump circuits, panel upgrades, and lighting.',
      descriptionLong:
        'ProVolt supports Bandera ranch and residential properties with durable electrical work: pumps, trenching, panels, and lighting.',
      serviceType: [
        'Ranch electrical',
        'Well/pump circuits',
        'Panel upgrades',
        'Outdoor lighting',
      ],
      breadcrumb: { serviceAreasUrl: SERVICE_AREAS_PAGE },
    });
    return {
      townName: 'Bandera',
      stateAbbr: 'TX',
      regionLabel: DEFAULT_REGION,
      phoneNumber: PHONE_DISPLAY,
      heroBullets: [
        'Ranch and rural property experience',
        'Long-run feeders sized correctly',
        'Outdoor lighting that lasts',
      ],
      residentialIntro:
        'We help Bandera properties with durable, code-compliant wiring and lighting.',
      residentialServices: [
        { label: 'Troubleshooting & repairs', icon: 'bolt' },
        { label: 'Panel upgrades', icon: 'electrical_services' },
        { label: 'Outdoor lighting', icon: 'outdoor_grill' },
      ],
      residentialLink: '/electrical-services/residential-electrician',
      commercialIntro:
        'Shops and ranch facilities get equipment-ready circuits and safe distribution.',
      commercialServices: [
        { label: 'Ranch & shop wiring', icon: 'agriculture' },
        {
          label: 'Dedicated equipment circuits',
          icon: 'precision_manufacturing',
        },
        { label: 'Service upgrades', icon: 'settings_input_component' },
      ],
      commercialLink: '/electrical-services/commercial-electrician',
      energyIntro: 'Plan feeders and loads to avoid voltage drop issues.',
      energyServices: BASE_ENERGY_SERVICES,
      areasServed: ['Bandera', 'Pipe Creek', 'Lakehills', 'Medina'],
      urlSlug: slug,
      seo,

      neighborhoods: ['Downtown Bandera', 'FM 1077 area'],
      landmarks: ['Bandera City Park', 'Medina River'],
      localContext: {},
      localProjects: [],
      testimonials: [],
      faqs: [],
      relatedLinks: [
        {
          label: 'Ranch Electrical',
          routerLink: '/electrical-services/ranch',
          icon: 'agriculture',
        },
      ],
      requestQuoteLink: '/contact-us',
    };
  })(),

  centerPoint: (() => {
    const slug = '/service-areas/center-point-tx-electrician';
    const seo = buildElectricianSeo({
      slug,
      townName: 'Center Point',
      addressLocality: 'Center Point',
      metaTitle: 'Electrician Center Point TX | Residential & Ranch',
      metaDescription:
        'Center Point electrician for homes, shops, and rural properties.',
      descriptionLong:
        'ProVolt serves Center Point with residential and ranch electrical—panels, lighting, feeders, and troubleshooting.',
      serviceType: [
        'Residential electrical',
        'Ranch electrical',
        'Troubleshooting & repairs',
      ],
      breadcrumb: { serviceAreasUrl: SERVICE_AREAS_PAGE },
    });
    return {
      townName: 'Center Point',
      stateAbbr: 'TX',
      regionLabel: DEFAULT_REGION,
      phoneNumber: PHONE_DISPLAY,
      heroBullets: [
        'Local coverage from Kerrville',
        'Panels, lighting, and shop power',
        'Rural-ready planning',
      ],
      residentialIntro:
        'Panel upgrades, lighting, and clean repairs for Center Point homes.',
      residentialServices: BASE_RESIDENTIAL_SERVICES,
      residentialLink: '/electrical-services/residential-electrician',
      commercialIntro:
        'Ranch and shop work with proper feeders and equipment circuits.',
      commercialServices: BASE_COMMERCIAL_RANCH_SERVICES,
      commercialLink: '/electrical-services/commercial-electrician',
      energyIntro: 'Efficient lighting and smart load planning.',
      energyServices: BASE_ENERGY_SERVICES,
      areasServed: ['Center Point', 'Kerrville', 'Comfort'],
      urlSlug: slug,
      seo,

      neighborhoods: ['Downtown Center Point', 'Guadalupe River corridor'],
      landmarks: ['Center Point Park', 'FM 480'],
      localContext: {},
      localProjects: [],
      testimonials: [],
      faqs: [],
      relatedLinks: [
        {
          label: 'Panel Upgrades',
          routerLink: '/electrical-services/panel-upgrades',
          icon: 'electrical_services',
        },
      ],
      requestQuoteLink: '/contact-us',
    };
  })(),

  helotes: (() => {
    const slug = '/service-areas/helotes-tx-electrician';
    const seo = buildElectricianSeo({
      slug,
      townName: 'Helotes',
      addressLocality: 'Helotes',
      metaTitle: 'Electrician Helotes TX | Lighting, Panels & EV',
      metaDescription:
        'Helotes electrician for lighting upgrades, panel upgrades, and EV chargers.',
      descriptionLong:
        'ProVolt services Helotes homes with lighting upgrades, EV chargers, panel work, and troubleshooting.',
      serviceType: [
        'Lighting upgrades',
        'EV chargers',
        'Panel upgrades',
        'Troubleshooting & repairs',
      ],
      breadcrumb: { serviceAreasUrl: SERVICE_AREAS_PAGE },
    });
    return {
      townName: 'Helotes',
      stateAbbr: 'TX',
      regionLabel: DEFAULT_REGION,
      phoneNumber: PHONE_DISPLAY,
      heroBullets: [
        'Modern lighting and smart controls',
        'EV-ready panel upgrades',
        'Clean, code-compliant installs',
      ],
      residentialIntro:
        'Lighting, EV chargers, and panel upgrades tailored for Helotes neighborhoods.',
      residentialServices: [
        { label: 'Lighting & smart controls', icon: 'light_mode' },
        { label: 'EV charger installation', icon: 'electric_car' },
        { label: 'Panel upgrades', icon: 'electrical_services' },
        { label: 'Troubleshooting & repairs', icon: 'bolt' },
      ],
      residentialLink: '/electrical-services/residential-electrician',
      commercialIntro:
        'Small business circuits and lighting with minimal downtime.',
      commercialServices: [
        {
          label: 'Dedicated equipment circuits',
          icon: 'precision_manufacturing',
        },
        { label: 'Service upgrades', icon: 'settings_input_component' },
        { label: 'Security & area lighting', icon: 'outdoor_grill' },
      ],
      commercialLink: '/electrical-services/commercial-electrician',
      energyIntro: 'Get efficient lighting that looks great and saves energy.',
      energyServices: BASE_ENERGY_SERVICES,
      areasServed: ['Helotes', 'San Antonio NW', 'Leon Valley'],
      urlSlug: slug,
      seo,

      neighborhoods: ['Helotes Park Estates', 'Iron Horse Canyon'],
      landmarks: ['Old Town Helotes', 'Bandera Rd'],
      localContext: {},
      localProjects: [],
      testimonials: [],
      faqs: [],
      relatedLinks: [
        {
          label: 'EV Chargers',
          routerLink: '/electrical-services/ev-chargers',
          icon: 'electric_car',
        },
        {
          label: 'Lighting Upgrades',
          routerLink: '/electrical-services/lighting',
          icon: 'light_mode',
        },
      ],
      requestQuoteLink: '/contact-us',
    };
  })(),
};
