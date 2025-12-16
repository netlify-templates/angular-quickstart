// src/app/shared/town-page.config.ts
// Adjust path/namespace to match your project structure.

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
  residentialServices: ServiceItem[];

  commercialHeading?: string;
  commercialSubheading?: string;
  commercialIntro?: string;
  commercialServices: ServiceItem[];

  energyHeading?: string;
  energySubheading?: string;
  energyIntro?: string;
  energyServices: ServiceItem[];

  areasServed: string[];
  urlSlug: string;
  seo?: TownSeoConfig;
}

// Shared constants
const BASE_DOMAIN = 'https://provoltelectricalservices.com';
const PHONE_DISPLAY = '(830) 000-0000'; // TODO: real number
const PHONE_E164 = '+1-830-000-0000'; // TODO: real number in E.164
const DEFAULT_REGION = 'Texas Hill Country';
const DEFAULT_OG_IMAGE = `${BASE_DOMAIN}/assets/og-default.jpg`; // TODO: update or replace

// Shared service groups (you can customize per-town below if you want)
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

export const TOWN_CONFIGS: Record<string, TownPageConfig> = {
  kerrville: {
    townName: 'Kerrville',
    stateAbbr: 'TX',
    regionLabel: DEFAULT_REGION,
    phoneNumber: PHONE_DISPLAY,
    heroBullets: [
      'Master electrician with Hill Country experience',
      'Fast, reliable troubleshooting and repairs',
      'Code-compliant work that protects your property',
    ],
    residentialIntro:
      'Whether you’re dealing with a tripping breaker, outdated panel, or planning a remodel, we help keep your Kerrville home safe, bright, and efficient.',
    residentialServices: BASE_RESIDENTIAL_SERVICES,
    commercialIntro:
      'From small businesses in town to ranch shops outside city limits, we design and maintain electrical systems built for real workloads.',
    commercialServices: BASE_COMMERCIAL_RANCH_SERVICES,
    energyIntro:
      'Planning a new build or remodel in Kerrville? We provide electrical design input, load calculations, and energy-efficient solutions that save money long-term.',
    energyServices: BASE_ENERGY_SERVICES,
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
    urlSlug: '/service-areas/kerrville-tx-electrician',
    seo: {
      metaTitle:
        'Electrician Kerrville TX | Residential & Commercial Electrical',
      metaDescription:
        'Trusted electrician in Kerrville, TX for repairs, upgrades, lighting, panels, ranch wiring & more. Licensed, insured, and local to the Hill Country.',
      pageUrl: `${BASE_DOMAIN}/electrician-kerrville-tx`,
      ogImage: DEFAULT_OG_IMAGE,
      robots: 'index,follow',
      jsonLdId: 'json-ld-kerrville',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Electrician',
        '@id': `${BASE_DOMAIN}/electrician-kerrville-tx#electrician`,
        name: 'ProVolt Electrical Services',
        url: `${BASE_DOMAIN}/electrician-kerrville-tx`,
        description:
          'ProVolt Electrical Services provides residential, commercial, and ranch electrical work in Kerrville, TX and the surrounding Texas Hill Country.',
        telephone: PHONE_E164,
        image: DEFAULT_OG_IMAGE,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kerrville',
          addressRegion: 'TX',
          addressCountry: 'US',
        },
        areaServed: {
          '@type': 'Place',
          name: 'Kerrville, TX',
        },
        serviceType: [
          'Residential electrical services',
          'Commercial electrical services',
          'Ranch and rural property electrical',
          'Electrical panel upgrades',
          'Lighting installation',
          'Electrical troubleshooting and repairs',
          'Generator and backup power systems',
          'Energy audits and efficiency upgrades',
          'Electrical consultations for renovations and new builds',
        ],
      },
    },
  },

  ingram: {
    townName: 'Ingram',
    stateAbbr: 'TX',
    regionLabel: DEFAULT_REGION,
    phoneNumber: PHONE_DISPLAY,
    heroBullets: [
      'Responsive service for river and rural properties',
      'Licensed, insured, and local to the Hill Country',
      'Clean, safe, and code-compliant electrical work',
    ],
    residentialIntro:
      'From river homes to neighborhood properties, we keep your Ingram home powered safely and reliably.',
    residentialServices: BASE_RESIDENTIAL_SERVICES,
    commercialIntro:
      'Shops, small businesses, and rural properties in Ingram count on us for dependable electrical systems.',
    commercialServices: BASE_COMMERCIAL_RANCH_SERVICES,
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
    urlSlug: '/service-areas/ingram-tx-electrician',
    seo: {
      metaTitle: 'Electrician Ingram TX | ProVolt Electrical Services',
      metaDescription:
        'Reliable electrician in Ingram, TX offering repairs, lighting, panel upgrades & rural property electrical work. Local, licensed, and dependable.',
      pageUrl: `${BASE_DOMAIN}/electrician-ingram-tx`,
      ogImage: DEFAULT_OG_IMAGE,
      robots: 'index,follow',
      jsonLdId: 'json-ld-ingram',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Electrician',
        '@id': `${BASE_DOMAIN}/electrician-ingram-tx#electrician`,
        name: 'ProVolt Electrical Services',
        url: `${BASE_DOMAIN}/electrician-ingram-tx`,
        description:
          'ProVolt Electrical Services offers licensed residential, commercial, and rural electrical services in Ingram, TX and nearby Hill Country areas.',
        telephone: PHONE_E164,
        image: DEFAULT_OG_IMAGE,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Ingram',
          addressRegion: 'TX',
          addressCountry: 'US',
        },
        areaServed: {
          '@type': 'Place',
          name: 'Ingram, TX',
        },
        serviceType: [
          'Residential electrical services',
          'Commercial electrical services',
          'Ranch and rural property electrical',
          'Lighting installation',
          'Panel upgrades and replacements',
          'Electrical troubleshooting and repairs',
        ],
      },
    },
  },

  hunt: {
    townName: 'Hunt',
    stateAbbr: 'TX',
    regionLabel: DEFAULT_REGION,
    phoneNumber: PHONE_DISPLAY,
    heroBullets: [
      'Experienced with ranch and river properties',
      'Designed for long runs and heavy loads',
      'Trusted Hill Country master electrician',
    ],
    residentialIntro:
      'We support the unique electrical needs of homes and river properties in Hunt with safe, reliable service.',
    residentialServices: BASE_RESIDENTIAL_SERVICES,
    commercialIntro:
      'From barns and shops to larger ranch facilities, we keep your Hunt property powered and protected.',
    commercialServices: BASE_COMMERCIAL_RANCH_SERVICES,
    energyIntro:
      'Long-term and remote properties benefit from thoughtful, efficient electrical design and backup power systems.',
    energyServices: BASE_ENERGY_SERVICES,
    areasServed: [
      'Hunt',
      'Ingram',
      'Kerrville',
      'Center Point',
      'Mountain Home',
    ],
    urlSlug: '/service-areas/hunt-tx-electrician',
    seo: {
      metaTitle:
        'Electrician Hunt TX | Ranch & Residential Electrical Services',
      metaDescription:
        'Electrical service in Hunt, TX including ranch wiring, outdoor lighting, panel upgrades, generators & more. Quality work from a local master electrician.',
      pageUrl: `${BASE_DOMAIN}/electrician-hunt-tx`,
      ogImage: DEFAULT_OG_IMAGE,
      robots: 'index,follow',
      jsonLdId: 'json-ld-hunt',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Electrician',
        '@id': `${BASE_DOMAIN}/electrician-hunt-tx#electrician`,
        name: 'ProVolt Electrical Services',
        url: `${BASE_DOMAIN}/electrician-hunt-tx`,
        description:
          'ProVolt Electrical Services provides expert electrical work for homes, ranches, and river properties in Hunt, TX.',
        telephone: PHONE_E164,
        image: DEFAULT_OG_IMAGE,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Hunt',
          addressRegion: 'TX',
          addressCountry: 'US',
        },
        areaServed: {
          '@type': 'Place',
          name: 'Hunt, TX',
        },
        serviceType: [
          'Ranch and rural property electrical',
          'Outdoor and landscape lighting',
          'Generator and backup power systems',
          'Panel upgrades',
          'Electrical troubleshooting and repairs',
        ],
      },
    },
  },

  comfort: {
    townName: 'Comfort',
    stateAbbr: 'TX',
    regionLabel: DEFAULT_REGION,
    phoneNumber: PHONE_DISPLAY,
    heroBullets: [
      'Fast response for Comfort homeowners',
      'Respectful of historic and modern homes',
      'Honest pricing and clear communication',
    ],
    residentialIntro:
      'We provide full residential electrical service to Comfort homeowners, from repairs to upgrades and remodels.',
    residentialServices: BASE_RESIDENTIAL_SERVICES,
    commercialIntro:
      'Small businesses and rural properties in Comfort rely on us for dependable, code-compliant electrical systems.',
    commercialServices: BASE_COMMERCIAL_RANCH_SERVICES,
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
    urlSlug: '/service-areas/comfort-tx-electrician',
    seo: {
      metaTitle: 'Electrician Comfort TX | Repairs, Lighting & Panel Upgrades',
      metaDescription:
        'Professional electrician in Comfort, TX for troubleshooting, lighting, rewiring, surge protection & energy efficiency upgrades. Fast, reliable service.',
      pageUrl: `${BASE_DOMAIN}/electrician-comfort-tx`,
      ogImage: DEFAULT_OG_IMAGE,
      robots: 'index,follow',
      jsonLdId: 'json-ld-comfort',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Electrician',
        '@id': `${BASE_DOMAIN}/electrician-comfort-tx#electrician`,
        name: 'ProVolt Electrical Services',
        url: `${BASE_DOMAIN}/electrician-comfort-tx`,
        description:
          'ProVolt Electrical Services delivers residential and light commercial electrical services in Comfort, TX and the surrounding Hill Country.',
        telephone: PHONE_E164,
        image: DEFAULT_OG_IMAGE,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Comfort',
          addressRegion: 'TX',
          addressCountry: 'US',
        },
        areaServed: {
          '@type': 'Place',
          name: 'Comfort, TX',
        },
        serviceType: [
          'Residential electrical services',
          'Troubleshooting and repairs',
          'Lighting and ceiling fan installation',
          'Panel and breaker upgrades',
          'Energy audits and efficiency upgrades',
        ],
      },
    },
  },

  fredericksburg: {
    townName: 'Fredericksburg',
    stateAbbr: 'TX',
    regionLabel: DEFAULT_REGION,
    phoneNumber: PHONE_DISPLAY,
    heroBullets: [
      'Experienced with historic homes and wineries',
      'Clean, precise workmanship you can trust',
      'Local knowledge of Hill Country properties',
    ],
    residentialIntro:
      'From historic homes to new builds, we provide safe, modern electrical solutions across Fredericksburg.',
    residentialServices: BASE_RESIDENTIAL_SERVICES,
    commercialHeading: 'Commercial, Winery & Ranch Electrical Services',
    commercialIntro:
      'Wineries, tasting rooms, ranch properties, and businesses trust us for reliable, scalable electrical systems.',
    commercialServices: [
      { label: 'Winery & tasting room electrical', icon: 'wine_bar' },
      ...BASE_COMMERCIAL_RANCH_SERVICES,
    ],
    energyIntro:
      'We help Fredericksburg properties improve efficiency with LED upgrades, better power distribution, and smart planning.',
    energyServices: BASE_ENERGY_SERVICES,
    areasServed: [
      'Fredericksburg',
      'Kerrville',
      'Comfort',
      'Boerne',
      'Ingram',
      'Hunt',
    ],
    urlSlug: '/service-areas/fredericksburg-tx-electrician',
    seo: {
      metaTitle:
        'Electrician Fredericksburg TX | Residential & Winery Electrical',
      metaDescription:
        'Licensed electrician in Fredericksburg, TX for lighting, rewiring, panel upgrades & winery electrical systems. Trusted Hill Country electrical service.',
      pageUrl: `${BASE_DOMAIN}/electrician-fredericksburg-tx`,
      ogImage: DEFAULT_OG_IMAGE,
      robots: 'index,follow',
      jsonLdId: 'json-ld-fredericksburg',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Electrician',
        '@id': `${BASE_DOMAIN}/electrician-fredericksburg-tx#electrician`,
        name: 'ProVolt Electrical Services',
        url: `${BASE_DOMAIN}/electrician-fredericksburg-tx`,
        description:
          'ProVolt Electrical Services provides residential, commercial, ranch, and winery electrical work in Fredericksburg, TX and the surrounding Texas Hill Country.',
        telephone: PHONE_E164,
        image: DEFAULT_OG_IMAGE,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Fredericksburg',
          addressRegion: 'TX',
          addressCountry: 'US',
        },
        areaServed: {
          '@type': 'Place',
          name: 'Fredericksburg, TX',
        },
        serviceType: [
          'Residential electrical services',
          'Commercial electrical services',
          'Winery electrical services',
          'Ranch and rural property electrical',
          'Electrical panel upgrades',
          'Lighting and chandelier installation',
          'Electrical troubleshooting and repairs',
          'Energy audits and LED retrofits',
          'Electrical consultations for renovations and new builds',
        ],
      },
    },
  },

  boerne: {
    townName: 'Boerne',
    stateAbbr: 'TX',
    regionLabel: DEFAULT_REGION,
    phoneNumber: PHONE_DISPLAY,
    heroBullets: [
      'Perfect for growing neighborhoods & remodels',
      'EV charger, appliance, and panel expertise',
      'Reliable service for homes and small businesses',
    ],
    residentialIntro:
      'We support Boerne homeowners with safe, modern electrical systems for today’s loads and tomorrow’s upgrades.',
    residentialServices: BASE_RESIDENTIAL_SERVICES,
    commercialIntro:
      'Shops, offices, and small commercial spaces in Boerne count on us for reliable power and lighting.',
    commercialServices: [
      { label: 'EV charger & appliance circuits', icon: 'ev_station' },
      ...BASE_COMMERCIAL_RANCH_SERVICES,
    ],
    energyIntro:
      'Plan your next Boerne remodel or new build with efficient wiring, circuits, and lighting from day one.',
    energyServices: BASE_ENERGY_SERVICES,
    areasServed: ['Boerne', 'Comfort', 'Fredericksburg', 'Helotes', 'Bandera'],
    urlSlug: '/service-areas/boerne-tx-electrician',
    seo: {
      metaTitle:
        'Electrician Boerne TX | Trusted Residential & Commercial Work',
      metaDescription:
        'Expert electrician in Boerne, TX providing repairs, lighting, EV chargers, renovations & commercial electrical services. Local, licensed, dependable.',
      pageUrl: `${BASE_DOMAIN}/electrician-boerne-tx`,
      ogImage: DEFAULT_OG_IMAGE,
      robots: 'index,follow',
      jsonLdId: 'json-ld-boerne',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Electrician',
        '@id': `${BASE_DOMAIN}/electrician-boerne-tx#electrician`,
        name: 'ProVolt Electrical Services',
        url: `${BASE_DOMAIN}/electrician-boerne-tx`,
        description:
          'ProVolt Electrical Services offers residential, commercial, and renovation-focused electrical services in Boerne, TX.',
        telephone: PHONE_E164,
        image: DEFAULT_OG_IMAGE,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Boerne',
          addressRegion: 'TX',
          addressCountry: 'US',
        },
        areaServed: {
          '@type': 'Place',
          name: 'Boerne, TX',
        },
        serviceType: [
          'Residential electrical services',
          'Commercial electrical services',
          'Panel and service upgrades',
          'EV charger and appliance circuits',
          'Electrical consultations for renovations and new builds',
        ],
      },
    },
  },

  bandera: {
    townName: 'Bandera',
    stateAbbr: 'TX',
    regionLabel: DEFAULT_REGION,
    phoneNumber: PHONE_DISPLAY,
    heroBullets: [
      'Ideal for ranch and rural properties',
      'Built to handle pumps, barns, and outbuildings',
      'Reliable service where others won’t drive',
    ],
    residentialIntro:
      'We serve Bandera residents with dependable electrical repairs, upgrades, and remodel support.',
    residentialServices: BASE_RESIDENTIAL_SERVICES,
    commercialIntro:
      'Ranch shops, barns, and rural businesses in Bandera rely on our expertise for safe, heavy-duty electrical systems.',
    commercialServices: BASE_COMMERCIAL_RANCH_SERVICES,
    energyIntro:
      'Thoughtful, efficient electrical design reduces downtime and long-term costs on rural properties.',
    energyServices: BASE_ENERGY_SERVICES,
    areasServed: ['Bandera', 'Kerrville', 'Comfort', 'Boerne', 'Helotes'],
    urlSlug: '/service-areas/bandera-tx-electrician',
    seo: {
      metaTitle:
        'Electrician Bandera TX | Ranch, Residential & Outdoor Lighting',
      metaDescription:
        'Serving Bandera, TX with ranch wiring, outdoor lighting, panel upgrades & electrical repairs. Reliable service for rural and residential properties.',
      pageUrl: `${BASE_DOMAIN}/electrician-bandera-tx`,
      ogImage: DEFAULT_OG_IMAGE,
      robots: 'index,follow',
      jsonLdId: 'json-ld-bandera',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Electrician',
        '@id': `${BASE_DOMAIN}/electrician-bandera-tx#electrician`,
        name: 'ProVolt Electrical Services',
        url: `${BASE_DOMAIN}/electrician-bandera-tx`,
        description:
          'ProVolt Electrical Services specializes in ranch, rural, and residential electrical work in Bandera, TX.',
        telephone: PHONE_E164,
        image: DEFAULT_OG_IMAGE,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bandera',
          addressRegion: 'TX',
          addressCountry: 'US',
        },
        areaServed: {
          '@type': 'Place',
          name: 'Bandera, TX',
        },
        serviceType: [
          'Ranch and rural property electrical',
          'Outdoor and security lighting',
          'Panel upgrades and replacements',
          'Generator-ready installations',
          'Electrical troubleshooting and repairs',
        ],
      },
    },
  },

  centerPoint: {
    townName: 'Center Point',
    stateAbbr: 'TX',
    regionLabel: DEFAULT_REGION,
    phoneNumber: PHONE_DISPLAY,
    heroBullets: [
      'Reliable service for homes, shops, and small farms',
      'Designed for real Hill Country conditions',
      'Local master electrician you can trust',
    ],
    residentialIntro:
      'From repairs to upgrades, we help keep Center Point homes safe and powered.',
    residentialServices: BASE_RESIDENTIAL_SERVICES,
    commercialIntro:
      'Shops, barns, and outbuildings in Center Point rely on us for durable, practical electrical work.',
    commercialServices: BASE_COMMERCIAL_RANCH_SERVICES,
    energyIntro:
      'We upgrade lighting and electrical design to improve efficiency and lower operating costs.',
    energyServices: BASE_ENERGY_SERVICES,
    areasServed: ['Center Point', 'Kerrville', 'Ingram', 'Comfort', 'Bandera'],
    urlSlug: '/service-areas/center-point-tx-electrician',
    seo: {
      metaTitle:
        'Electrician Center Point TX | Reliable Hill Country Electrician',
      metaDescription:
        'Electrical repairs, lighting upgrades, shop wiring & panel services in Center Point, TX. Local master electrician serving the Hill Country.',
      pageUrl: `${BASE_DOMAIN}/electrician-center-point-tx`,
      ogImage: DEFAULT_OG_IMAGE,
      robots: 'index,follow',
      jsonLdId: 'json-ld-center-point',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Electrician',
        '@id': `${BASE_DOMAIN}/electrician-center-point-tx#electrician`,
        name: 'ProVolt Electrical Services',
        url: `${BASE_DOMAIN}/electrician-center-point-tx`,
        description:
          'ProVolt Electrical Services provides reliable residential, shop, and rural electrical services in Center Point, TX.',
        telephone: PHONE_E164,
        image: DEFAULT_OG_IMAGE,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Center Point',
          addressRegion: 'TX',
          addressCountry: 'US',
        },
        areaServed: {
          '@type': 'Place',
          name: 'Center Point, TX',
        },
        serviceType: [
          'Residential electrical services',
          'Shop and outbuilding wiring',
          'Lighting upgrades',
          'Panel and breaker services',
          'Energy efficiency upgrades',
        ],
      },
    },
  },

  helotes: {
    townName: 'Helotes',
    stateAbbr: 'TX',
    regionLabel: DEFAULT_REGION,
    phoneNumber: PHONE_DISPLAY,
    heroBullets: [
      'Perfect for growing neighborhoods and remodels',
      'Smart home, panel, and lighting expertise',
      'Reliable service for homes and small businesses',
    ],
    residentialIntro:
      'We help Helotes homeowners keep up with modern electrical demands, from panels to lighting and smart systems.',
    residentialServices: BASE_RESIDENTIAL_SERVICES,
    commercialIntro:
      'Shops and offices in Helotes rely on us for dependable power, clean lighting, and safe wiring.',
    commercialServices: [
      { label: 'Smart home & automation wiring', icon: 'home_iot_device' },
      ...BASE_COMMERCIAL_RANCH_SERVICES,
    ],
    energyIntro:
      'Upgrade your Helotes home or business with efficient lighting, better circuits, and smart power planning.',
    energyServices: BASE_ENERGY_SERVICES,
    areasServed: [
      'Helotes',
      'Boerne',
      'Bandera',
      'San Antonio (NW)',
      'Comfort',
    ],
    urlSlug: '/service-areas/helotes-tx-electrician',
    seo: {
      metaTitle:
        'Electrician Helotes TX | Repairs, Lighting & Smart Home Wiring',
      metaDescription:
        'Electrician in Helotes, TX offering troubleshooting, panel upgrades, lighting, smart home wiring & commercial electrical services. Licensed & insured.',
      pageUrl: `${BASE_DOMAIN}/electrician-helotes-tx`,
      ogImage: DEFAULT_OG_IMAGE,
      robots: 'index,follow',
      jsonLdId: 'json-ld-helotes',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Electrician',
        '@id': `${BASE_DOMAIN}/electrician-helotes-tx#electrician`,
        name: 'ProVolt Electrical Services',
        url: `${BASE_DOMAIN}/electrician-helotes-tx`,
        description:
          'ProVolt Electrical Services offers residential and commercial electrical services, including smart home and panel upgrades, in Helotes, TX.',
        telephone: PHONE_E164,
        image: DEFAULT_OG_IMAGE,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Helotes',
          addressRegion: 'TX',
          addressCountry: 'US',
        },
        areaServed: {
          '@type': 'Place',
          name: 'Helotes, TX',
        },
        serviceType: [
          'Residential electrical services',
          'Commercial electrical services',
          'Panel and service upgrades',
          'Smart home and automation wiring',
          'Lighting and ceiling fan installation',
          'Electrical troubleshooting and repairs',
        ],
      },
    },
  },
};
