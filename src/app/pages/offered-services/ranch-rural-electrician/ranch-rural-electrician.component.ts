import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';

import { SeoService } from 'src/app/shared/services/seo.service';
import { AreasWeServeComponent } from 'src/app/shared/components/areas-we-serve/areas-we-serve.component';
import { OfferedServicesPageComponent } from 'src/app/shared/components/offered-services-page/offered-services-page.component';
import { SiteData } from 'src/app/shared/configs/site-data.config';
import { FullSitePaths } from 'src/app/shared/configs/site-urls.config';

interface ServiceItem {
  title: string;
  category: 'RanchAndRural' | 'Both';
  icon: string;
  description: string;
  bullets: string[];
}

interface LinkCard {
  title: string;
  description: string;
  icon: string;
  path: string;
}

interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-ranch-rural-electrician',
  standalone: true,
  templateUrl: './ranch-rural-electrician.component.html',
  styleUrls: ['./ranch-rural-electrician.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatChipsModule,
    MatExpansionModule,
    OfferedServicesPageComponent,
  ],
})
export class RanchRuralElectricianComponent implements OnInit {
  constructor(private seo: SeoService) {}

  serviceTitle = 'Ranch & Rural Electrical Services';
  footerText =
    'Tell us about your property and what you’re powering — we’ll recommend the safest, most reliable approach.';
  hero = {
    title:
      "ProVolt's Ranch & Rural Electrical Services in the Texas Hill Country",
    subtitle:
      'Need a dependable ranch and rural electrician in Kerrville and the Texas Hill Country? ProVolt Electric helps property owners across Kerrville, Ingram, Center Point, Comfort, Hunt, Fredericksburg, Boerne, Bandera, and Helotes power barns, shops, outbuildings, and remote structures with safe, code-compliant electrical work built for real-world loads. From long-run power and subpanels to equipment circuits and outdoor lighting, we focus on reliability, clean installs, and practical solutions that hold up over time.',
    trustLine:
      'Licensed, insured, and Texas-Hill-Country tough—ProVolt delivers master-level electrical work for homes, businesses, and rural properties.',
    actionButtonText: 'Contact Our Electricians',
  };

  whoWeHelp: string[] = [
    'Ranch homes & acreage properties',
    'Barns, shops, and outbuildings',
    'Gates, driveways, and outdoor power',
    'Equipment power & dedicated circuits',
    'Property managers & landowners',
  ];

  // These are internal-link cards to future (or existing) detail pages.
  // You can stub these routes now and publish detail pages gradually.
  popularRanchRuralJobs: LinkCard[] = [
    {
      title: 'Barn & Outbuilding Wiring',
      description:
        'Panels, lighting, outlets, and safe wiring for barns, sheds, and shops.',
      icon: 'agriculture',
      path: '/services/barn-outbuilding-electrical',
    },
    {
      title: 'Outdoor Power & Trenching',
      description:
        'Power runs for gates, driveways, remote structures, and outdoor work areas.',
      icon: 'alt_route',
      path: '/services/outdoor-power-trenching',
    },
    {
      title: 'Panel & Service Upgrades',
      description:
        'Upgrade capacity for shops, equipment loads, and expansion plans.',
      icon: 'electrical_services',
      path: '/services/electrical-panel-upgrade',
    },
    {
      title: 'Lighting Upgrade and Installation',
      description:
        'Practical, bright lighting for barns, yards, and work zones.',
      icon: 'lightbulb',
      path: '/services/lighting-installation',
    },
    {
      title: 'Electrical Troubleshooting & Repairs',
      description:
        'Solve intermittent power, tripping breakers, and equipment shutdowns.',
      icon: 'troubleshoot',
      path: '/services/electrical-troubleshooting-repair',
    },
    {
      title: 'Surge Protection',
      description: 'Protect electronics from lightning and power events.',
      icon: 'flash_on',
      path: '/services/whole-home-surge-protection',
    },
    {
      title: 'Emergency Electrical Service',
      description:
        'Fast help for outages, burning smells, sparking, or hot panels.',
      icon: 'warning',
      path: '/emergency-electrician',
    },
  ];

  processSteps: ProcessStep[] = [
    {
      title: 'Site details & planning',
      description:
        'We confirm distances, access, equipment loads, and what you want powered.',
      icon: 'map',
    },
    {
      title: 'Safety-first diagnostics',
      description:
        'We verify grounding, protection, connections, and load sizing before changes.',
      icon: 'health_and_safety',
    },
    {
      title: 'Right-sized solutions',
      description:
        'We recommend correct wire sizing, breakers, and protection for long runs and motors.',
      icon: 'tune',
    },
    {
      title: 'Clean, code-compliant work',
      description:
        'Professional installation, labeling, weather-rated materials, and durable finishes.',
      icon: 'verified_user',
    },
    {
      title: 'Testing & walkthrough',
      description:
        'We test performance under load and review what was done and how to maintain it.',
      icon: 'fact_check',
    },
  ];

  faqs: FaqItem[] = [
    {
      question:
        'What ranch and rural electrical services do you handle most often?',
      answer:
        'Most ranch and rural calls include wiring for barns/shops/outbuildings, power runs to detached structures, subpanels, dedicated equipment circuits, RV hookups (30/50 amp), outdoor lighting for safety, and troubleshooting for intermittent power or breaker trips.',
    },
    {
      question:
        'Do you run power to barns, shops, gates, and other remote structures?',
      answer:
        'Yes. We plan long-distance power runs with proper sizing and protection so power stays reliable at the far end—especially for shops, barns, detached garages, and remote outbuildings.',
    },
    {
      question: 'Can you trench and install conduit for outdoor power runs?',
      answer:
        'Yes. When needed, we can coordinate trenching and install conduit and wiring to get safe, durable power to detached structures and exterior work areas.',
    },
    {
      question: 'Do you install subpanels in barns or shops?',
      answer:
        'Yes. Subpanels are a great way to add capacity and keep circuits organized in a barn, shop, or detached building—making troubleshooting and future expansion much easier.',
    },
    {
      question:
        'Can you add dedicated circuits for pumps, compressors, or welders?',
      answer:
        'Yes. We install properly sized dedicated circuits for higher-demand equipment to reduce nuisance trips, overheating, and voltage drop issues—especially common on rural properties.',
    },
    {
      question: 'Do you install RV hookups and outdoor receptacles?',
      answer:
        'Yes. We install 30-amp and 50-amp RV hookups and properly protected outdoor receptacles, with placement planned for safe, convenient access.',
    },
    {
      question: 'What causes breakers to trip on rural properties?',
      answer:
        'Common causes include motor start-up loads, undersized wiring for long runs, moisture intrusion, loose connections, failing breakers, or equipment faults. We diagnose the root issue and recommend the safest, most practical fix.',
    },
    {
      question: 'Do you install outdoor lighting for security and usability?',
      answer:
        'Yes. We install area lighting, security lighting, and LED upgrades with options like motion sensors, timers, and dusk-to-dawn controls for barns, shops, driveways, and entry points.',
    },
    {
      question:
        'Can you upgrade my panel or service for a shop expansion or new equipment?',
      answer:
        'Yes. We can upgrade panels/service equipment where appropriate, add subpanels, and plan circuits to support current needs and future expansion without constant breaker trips.',
    },
    {
      question:
        'Do you offer safety inspections for ranch and rural properties?',
      answer:
        'Yes. We can inspect panels, check grounding/bonding, identify common hazards, and provide a prioritized plan for corrections to improve safety and long-term reliability.',
    },
  ];

  services: ServiceItem[] = [
    {
      title: 'Shop, Barn & Outbuilding Wiring',
      category: 'RanchAndRural',
      icon: 'warehouse',
      description:
        'Power and wiring for barns, metal buildings, shops, and outbuildings—installed cleanly for reliability and everyday use.',
      bullets: [
        'Wiring for barns, tack rooms, storage buildings, and workshops',
        'New circuits and device installs for practical layouts',
        'Safe, durable installs designed for real workloads',
        'Clear planning for expansions and future additions',
      ],
    },
    {
      title: 'Outdoor Power & Long-Run Circuits',
      category: 'RanchAndRural',
      icon: 'cable',
      description:
        'Reliable power to detached structures with planning that accounts for distance, load, and long-term performance.',
      bullets: [
        'Trenching and conduit runs to detached structures (as needed)',
        'Voltage-drop aware planning for longer distances',
        'Outdoor-rated protection and weather-appropriate installs',
        'Power distribution planning across acreage properties',
      ],
    },
    {
      title: 'Subpanels for Outbuildings',
      category: 'RanchAndRural',
      icon: 'account_tree',
      description:
        'Add subpanels to barns and shops for better capacity, cleaner organization, and easier future upgrades.',
      bullets: [
        'Subpanels for barns, shops, and detached garages',
        'Cleaner circuit organization for servicing and troubleshooting',
        'Capacity expansion for added equipment and lighting',
        'Upgrade planning to keep the system scalable',
      ],
    },
    {
      title: 'Dedicated Equipment Circuits',
      category: 'RanchAndRural',
      icon: 'precision_manufacturing',
      description:
        'Properly sized dedicated circuits for higher-demand equipment—built to reduce nuisance trips and overheating.',
      bullets: [
        'Circuits for compressors, and welders',
        'Higher-demand equipment receptacles and connections',
        'Circuit sizing and planning to reduce overloads',
        'Safer operation for equipment that runs hard and often',
      ],
    },
    {
      title: 'RV Hookups & Outdoor Receptacles',
      category: 'RanchAndRural',
      icon: 'rv_hookup',
      description:
        'RV power and properly protected outdoor receptacles for ranch properties, guests, and seasonal use.',
      bullets: [
        '30-amp and 50-amp RV hookups',
        'Outdoor receptacles with appropriate protection',
        'Placement planning for access and convenience',
        'Clean installs designed for dependable connections',
      ],
    },
    {
      title: 'Lighting for Safety & Usability',
      category: 'RanchAndRural',
      icon: 'lightbulb',
      description:
        'Practical lighting upgrades that improve visibility, safety, and security around shops, barns, and property access points.',
      bullets: [
        'Area lighting, security lighting, and LED upgrades',
        'Motion, timer, and dusk-to-dawn control options',
        'Barn and shop lighting for task visibility',
        'Exterior lighting for entries, driveways, and work zones',
      ],
    },
    {
      title: 'Troubleshooting & Repairs',
      category: 'RanchAndRural',
      icon: 'manage_search',
      description:
        'Track down intermittent issues and restore reliable power across homes, shops, and outbuildings.',
      bullets: [
        'Intermittent power, breaker trips, and partial outages',
        'Failed outlets/fixtures and connection issues',
        'Testing and verification of circuits, loads, and protection',
        'Practical repair options and safety recommendations',
      ],
    },
    {
      title: 'Surge Protection & Safety Improvements',
      category: 'RanchAndRural',
      icon: 'bolt',
      description:
        'Protect equipment and improve safety with surge protection and targeted upgrades where they matter most.',
      bullets: [
        'Whole-building surge protection installs',
        'GFCI/AFCI upgrades where appropriate',
        'Safety corrections for older/overworked circuits',
        'Focused improvements to reduce repeat issues',
      ],
    },
    {
      title: 'Inspections & Code Compliance Guidance',
      category: 'RanchAndRural',
      icon: 'fact_check',
      description:
        'Clear, actionable inspections to identify hazards, prioritize fixes, and map a realistic upgrade plan.',
      bullets: [
        'Electrical safety inspections for rural properties',
        'Hazard identification and remediation recommendations',
        'Code-compliance guidance for upgrades and expansions',
        'Documentation-ready findings and clear next steps',
      ],
    },
    {
      title: 'Permits & Inspections Coordination',
      category: 'RanchAndRural',
      icon: 'assignment_turned_in',
      description:
        'We handle permitting and inspection coordination when required so your project stays compliant and straightforward.',
      bullets: [
        'Permits pulled when required',
        'Inspector coordination when needed',
        'Support working with local utility/service providers as applicable',
        'Clear scope and documentation for smoother approvals',
      ],
    },
    {
      title: 'Panel & Service Upgrades',
      category: 'Both',
      icon: 'electrical_services',
      description:
        'Modernize panels and service equipment to support heavier ranch loads and improve overall reliability.',
      bullets: [
        'Panel replacements and capacity upgrades',
        'Load corrections and circuit rebalancing (as needed)',
        'Service equipment upgrades where applicable',
        'Clear planning for future equipment and expansion',
      ],
    },
    {
      title: 'Safety Make-Safe: Sparking, Heat, or Burning Smells',
      category: 'Both',
      icon: 'report',
      description:
        'If something feels unsafe—sparking, heat, or burning smells—we help make the situation safe and outline the next steps.',
      bullets: [
        'Sparking outlets, burning smells, warm/buzzing panels',
        'Repeated breaker trips that won’t reset or keep returning',
        'Make-safe repairs and clear follow-up repair planning',
        'Practical guidance to prevent repeat hazards',
      ],
    },
  ];

  ngOnInit(): void {
    this.setupSeo();
    this.setupJsonLd();
  }

  private setupSeo(): void {
    this.seo.setMetaTags({
      title:
        'Ranch & Rural Electrician | Kerrville & Texas Hill Country | ProVolt',
      description:
        'Ranch & rural electrician serving Kerrville and the Texas Hill Country: barn/shop/outbuilding wiring, long-run outdoor power and trenching, subpanels, dedicated equipment circuits, RV hookups (30/50 amp), outdoor lighting, troubleshooting, surge protection, and safety inspections—code-compliant work.',
      canonicalUrl: FullSitePaths.ranchRuralElectrician,
      uniquePageImage: SiteData.homepageImageUrl, // default site image is fine
      type: 'website',
      robots: 'index,follow',
    });
  }
  private setupJsonLd(): void {
    const baseUrl = SiteData.baseUrl;
    const pageUrl = FullSitePaths.ranchRuralElectrician;

    const ranchServices = (this.services ?? []).filter(
      (s) => s.category === 'RanchAndRural' || s.category === 'Both'
    );

    const pageName = `Ranch & Rural Electrician | Kerrville & Texas Hill Country | ${
      SiteData.businessName ?? 'ProVolt'
    }`;

    const pageDescription =
      this.hero?.subtitle ??
      'Ranch and rural electrical services across Kerrville and the Texas Hill Country for barns, shops, outbuildings, long-run power, subpanels, equipment circuits, RV hookups, lighting, troubleshooting, surge protection, and safety inspections.';

    // 60 miles ≈ 96,560 meters
    const serviceRadiusMeters = 96560;

    // Optional: internal service links shown on the page (only include real pages + services you actually offer)
    // const significantLinks = (this.popularRanchRuralJobs ?? [])
    //   .filter((j) => j.path !== '/emergency-electrician')
    //   .map((j) => `${baseUrl}${j.path}`);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        // WebPage (primary focus: Service overview)
        {
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
          url: pageUrl,
          name: pageName,
          description: pageDescription,
          inLanguage: 'en-US',

          isPartOf: { '@id': `${baseUrl}/#website` },
          about: { '@id': `${baseUrl}/#business` },
          publisher: { '@id': `${baseUrl}/#business` },

          breadcrumb: { '@id': `${pageUrl}#breadcrumb` },

          // ✅ Main entity is the Service (because this is a service overview page)
          mainEntity: { '@id': `${pageUrl}#service` },

          // ✅ FAQ is a supporting section
          ...(this.faqs?.length
            ? { hasPart: { '@id': `${pageUrl}#faq` } }
            : {}),

          // ✅ Optional internal links shown on the page
          // ...(significantLinks.length
          //   ? { significantLink: significantLinks }
          //   : {}),
        },

        // Breadcrumbs
        {
          '@type': 'BreadcrumbList',
          '@id': `${pageUrl}#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Electrical Services',
              item: `${baseUrl}/electrical-services`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Ranch & Rural Electrician',
              item: pageUrl,
            },
          ],
        },

        // Main service entity
        {
          '@type': 'Service',
          '@id': `${pageUrl}#service`,
          url: pageUrl,
          name: 'Ranch & Rural Electrical Services',
          serviceType:
            'Ranch and rural electrician services including barn/shop/outbuilding wiring, long-run outdoor power and trenching, subpanels, dedicated equipment circuits, RV hookups (30/50 amp), outdoor lighting, troubleshooting, surge protection, safety inspections, and code-compliant upgrades',
          provider: { '@id': `${baseUrl}/#business` },

          areaServed: [
            {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 30.0474,
                longitude: -99.1403,
              },
              geoRadius: serviceRadiusMeters, // meters
            },
          ],

          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            '@id': `${pageUrl}#catalog`,
            name: 'Ranch & Rural Electrical Services Catalog',
            itemListElement: ranchServices.map((s) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: s.title,
                description: s.description,
                provider: { '@id': `${baseUrl}/#business` },
              },
            })),
          },

          potentialAction: {
            '@type': 'ContactAction',
            target: `${baseUrl}/contact-us`,
          },
        },

        // FAQ (supporting section)
        ...(this.faqs?.length
          ? [
              {
                '@type': 'FAQPage',
                '@id': `${pageUrl}#faq`,
                isPartOf: { '@id': `${pageUrl}#webpage` },
                mainEntity: this.faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.question,
                  acceptedAnswer: { '@type': 'Answer', text: f.answer },
                })),
              },
            ]
          : []),
      ],
    };

    this.seo.setPageJsonLd(jsonLd);
  }
}
