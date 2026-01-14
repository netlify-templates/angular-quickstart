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
import { OfferedServicesPageComponent } from 'src/app/shared/components/offered-services-page/offered-services-page.component';
import { SiteData } from 'src/app/shared/configs/site-data.config';
import { FullSitePaths } from 'src/app/shared/configs/site-urls.config';

interface ServiceItem {
  title: string;
  category: 'Residential' | 'Commercial' | 'RanchAndRural' | 'Both';
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
  selector: 'app-commercial-electrician',
  standalone: true,
  templateUrl: './commercial-electrician.component.html',
  styleUrls: ['./commercial-electrician.component.scss'],
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
export class CommercialElectricianComponent implements OnInit {
  constructor(private seo: SeoService) {}

  private readonly phoneNumber = SiteData.phoneNumber;

  serviceTitle = 'Commercial Electrical Services';
  footerText =
    'Share your location and scope — we’ll provide a clear plan and quote for your project.';
  hero = {
    title: "ProVolt's Commercial Electrical Services in the Texas Hill Country",
    subtitle:
      'Need a reliable commercial electrician in Kerrville or the Texas Hill Country? We support businesses and property managers throughout Kerrville, Fredericksburg, Boerne, Bandera, Helotes, Comfort, Center Point, Ingram, and Hunt with organized, code-compliant electrical work designed to reduce downtime. From tenant build-outs and lighting upgrades to troubleshooting and equipment circuits, we keep your space powered, safe, and ready for operations.',
    trustLine:
      'Licensed, insured, and Texas-Hill-Country tough—ProVolt delivers master-level electrical work for homes, businesses, and rural properties.',
    actionButtonText: 'Request a Licensed Electrician',
  };

  whoWeHelp: string[] = [
    'Retail stores & strip centers',
    'Offices & professional buildings',
    'Restaurants & kitchens',
    'Warehouses & light industrial',
    'Churches, schools, and nonprofits',
    'Property managers & short-term rentals',
    'Ranch operations, barns, and shops',
  ];

  // @ Nathaniel eventually add these individual service pages
  popularCommercialJobs: LinkCard[] = [
    {
      title: 'Electrical Troubleshooting & Repairs',
      description:
        'Diagnostics and repairs to restore safe, stable power and prevent repeat issues.',
      icon: 'troubleshoot',
      path: '/services/electrical-troubleshooting-repair',
    },
    {
      title: 'Panel & Service Upgrades',
      description:
        'Capacity planning, labeling, surge protection, and code-compliant upgrades.',
      icon: 'electrical_services',
      path: '/services/electrical-panel-upgrade',
    },
    {
      title: 'Tenant Build-Out Electrical',
      description:
        'New circuits, layout changes, lighting, and code compliance coordination.',
      icon: 'apartment',
      path: '/services/tenant-build-out-electrical',
    },
    {
      title: 'Commercial LED Lighting Retrofits',
      description:
        'Upgrade lighting for better visibility, lower energy costs, and reliability.',
      icon: 'lightbulb',
      path: '/services/commercial-led-lighting-retrofit',
    },
    {
      title: 'Dedicated Circuits for Equipment',
      description:
        'Add properly sized circuits for HVAC, kitchens, shop equipment, and more.',
      icon: 'power',
      path: '/services/dedicated-circuits-installation',
    },
    {
      title: 'Safety Inspections & Code Compliance',
      description:
        'Assess hazards, fix violations, and document improvements for owners or insurance.',
      icon: 'verified',
      path: '/services/electrical-safety-inspection',
    },
    {
      title: 'Whole-Building Surge Protection',
      description:
        'Protect sensitive electronics and reduce downtime from power events.',
      icon: 'flash_on',
      path: '/services/whole-building-surge-protection',
    },
    {
      title: 'Security & Exterior Lighting',
      description:
        'Improve safety and visibility with dependable exterior and motion lighting.',
      icon: 'visibility',
      path: '/services/security-lighting-installation',
    },
  ];

  processSteps: ProcessStep[] = [
    {
      title: 'Fast triage & scheduling',
      description:
        'We confirm symptoms and site details so we show up prepared.',
      icon: 'schedule',
    },
    {
      title: 'On-site diagnostics',
      description:
        'We test circuits, loads, and devices to find the root cause—not just the symptom.',
      icon: 'manage_search',
    },
    {
      title: 'Clear options & pricing',
      description:
        'You get practical choices: required fixes, recommended upgrades, and budget-friendly paths.',
      icon: 'receipt_long',
    },
    {
      title: 'Code-compliant work',
      description:
        'Clean installs, labeled panels, and professional jobsite conduct from start to finish.',
      icon: 'verified_user',
    },
    {
      title: 'Verification & close-out',
      description:
        'We test operation, confirm safety, and leave the site clean and documented.',
      icon: 'fact_check',
    },
  ];

  faqs: FaqItem[] = [
    {
      question: 'What commercial electrical services do you handle most often?',
      answer:
        'Most commercial calls involve troubleshooting power or lighting issues, tenant build-outs/finish-outs, dedicated equipment circuits, panel/service upgrades, LED lighting upgrades, exterior/security lighting, and code-compliance guidance.',
    },
    {
      question:
        'Can you coordinate with our general contractor, property manager, or facilities team?',
      answer:
        'Yes. We regularly coordinate schedules, site access, scopes, and punch lists with GCs, property managers, and facilities teams to keep work organized and minimize disruption.',
    },
    {
      question:
        'Do you handle tenant build-outs and finish-outs from rough-in through trim-out?',
      answer:
        'Yes. We can plan circuits and lighting for layout changes, complete rough-in and trim-out, and support inspection readiness with clean, code-compliant installs.',
    },
    {
      question:
        'Can you schedule work after-hours or on weekends to reduce downtime?',
      answer:
        'Often, yes. Many commercial projects can be scheduled outside peak business hours to limit interruptions—depending on scope and access requirements.',
    },
    {
      question: 'Why do breakers keep tripping in a commercial space?',
      answer:
        'Common causes include overloaded circuits, loose connections, failing breakers, equipment faults, or circuits that were undersized for the load. We diagnose the root cause and recommend the safest, most practical fix.',
    },
    {
      question:
        'Can you add dedicated circuits for equipment or new workstations?',
      answer:
        'Yes. We install properly sized dedicated circuits for commercial equipment and expansions—helping prevent nuisance trips, overheating, and productivity-impacting interruptions.',
    },
    {
      question: 'Do you upgrade commercial lighting to LED and add controls?',
      answer:
        'Yes. We install LED lighting upgrades and control options like occupancy sensors, timers, and scheduling where appropriate to improve light quality and reduce energy waste.',
    },
    {
      question: 'Do you pull permits and help with inspections when required?',
      answer:
        'Yes. When a permit is required for the scope of work, we can pull permits and coordinate with inspectors to keep your project compliant and moving smoothly.',
    },
    {
      question: 'Can you improve exterior lighting for safety and curb appeal?',
      answer:
        'Yes. We install and upgrade exterior, security, architectural, and pathway lighting to improve visibility, customer safety, and the professional appearance of your property.',
    },
    {
      question:
        'How do you handle outages or partial power loss in a business?',
      answer:
        'Call us and we’ll triage the situation quickly. We’ll prioritize safety hazards first, then isolate the cause of the outage/partial power and outline the fastest path to restore reliable operation.',
    },
  ];

  services: ServiceItem[] = [
    {
      title: 'Tenant Build-Outs & Finish-Out Electrical',
      category: 'Commercial',
      icon: 'storefront',
      description:
        'Electrical planning and installation for tenant improvements—new circuits, layout changes, and lighting updates built for code compliance and smooth inspections.',
      bullets: [
        'New circuits and equipment feeds for build-outs and remodels',
        'Lighting updates and control changes to match new layouts',
        'Code compliance coordination for commercial spaces',
        'Clean documentation and a clear scope from rough-in to trim-out',
      ],
    },
    {
      title: 'Commercial Troubleshooting & Repairs',
      category: 'Commercial',
      icon: 'manage_search',
      description:
        'Fast, systematic troubleshooting for power issues, lighting failures, and equipment-related electrical problems to keep operations moving.',
      bullets: [
        'Power loss, intermittent outages, and nuisance breaker trips',
        'Lighting failures, control issues, and circuit interruptions',
        'Testing and verification of circuits, loads, and protective devices',
        'Practical repair options and safety recommendations',
      ],
    },
    {
      title: 'Dedicated Equipment Circuits & Load Planning',
      category: 'Commercial',
      icon: 'precision_manufacturing',
      description:
        'Properly sized circuits and capacity planning for commercial loads—helping reduce downtime, trips, and overheating issues.',
      bullets: [
        'Dedicated circuits for critical equipment and higher-demand loads',
        'Circuit sizing and planning to reduce overloads and nuisance trips',
        'Capacity checks to support expansions and added equipment',
        'Better organization for easier servicing and future upgrades',
      ],
    },
    {
      title: 'Panel & Service Upgrades',
      category: 'Both',
      icon: 'electrical_services',
      description:
        'Modernize panels and service equipment for safer operation, better capacity, and long-term reliability in homes and commercial spaces.',
      bullets: [
        'Panel replacements and capacity upgrades',
        'Load corrections and circuit rebalancing (as needed)',
        'Service equipment upgrades where applicable',
        'Clear recommendations for future growth and new loads',
      ],
    },
    {
      title: 'Lighting Upgrades & Installation',
      category: 'Both',
      icon: 'lightbulb',
      description:
        'Interior and exterior lighting upgrades that improve visibility, safety, and energy efficiency—planned for real-world use.',
      bullets: [
        'LED lighting upgrades and lighting controls',
        'Security, motion, timer, and dusk-to-dawn lighting options',
        'Interior lighting updates for work areas and common spaces',
        'Exterior lighting to improve safety and curb appeal',
      ],
    },
    {
      title: 'Exterior Lighting for Safety & Curb Appeal',
      category: 'Commercial',
      icon: 'holiday_village',
      description:
        'Professional exterior lighting installs to improve safety, visibility, and the look of your business after dark.',
      bullets: [
        'Security lighting for entries, lots, and perimeter areas',
        'Architectural lighting to highlight signage and features',
        'Landscape lighting for walkways and customer areas',
        'Controls for scheduling, sensors, and reliable operation',
      ],
    },
    {
      title: 'Safety Inspections & Code Compliance',
      category: 'Both',
      icon: 'fact_check',
      description:
        'Clear, actionable inspections and code guidance to identify hazards, prioritize fixes, and support compliant upgrades.',
      bullets: [
        'Electrical safety inspections and system reviews',
        'Code-compliance guidance and upgrade planning',
        'Hazard identification with practical remediation steps',
        'Documentation-ready findings and clear next steps',
      ],
    },
    {
      title: 'Planned Maintenance & Scheduled Service',
      category: 'Commercial',
      icon: 'event_available',
      description:
        'Preventive electrical service to reduce downtime—addressing small issues before they become bigger interruptions.',
      bullets: [
        'Planned service visits for troubleshooting and corrective work',
        'Targeted repairs to improve reliability and reduce repeat issues',
        'Lighting and control checks for consistent operation',
        'Prioritized recommendations for phased upgrades',
      ],
    },
    {
      title: 'New Circuits, Subpanels & Dedicated Circuits',
      category: 'Both',
      icon: 'device_hub',
      description:
        'Add capacity and expand safely—new circuits, subpanels, and dedicated circuits for new loads and better performance.',
      bullets: [
        'New circuit additions for expansions and added equipment',
        'Subpanel installations for better organization and growth',
        'Dedicated circuits to prevent overloads and nuisance trips',
        'Circuit planning to support future improvements',
      ],
    },
    {
      title: 'Outdoor Power & Trenching',
      category: 'Both',
      icon: 'yard',
      description:
        'Reliable outdoor power installs and power runs to detached areas—planned for durability and safe operation.',
      bullets: [
        'Outdoor receptacles and power to exterior work areas',
        'Trenching and conduit runs as needed',
        'Power to detached garages, workshops, and outbuildings',
        'Outdoor-rated protection and weather-appropriate installs',
      ],
    },
    {
      title: 'Permits & Inspections Coordination',
      category: 'Both',
      icon: 'assignment_turned_in',
      description:
        'We handle permitting and inspection coordination when required to keep projects moving and compliant.',
      bullets: [
        'Permits pulled when required',
        'Inspector coordination when needed',
        'Support working with local utility/service providers as applicable',
        'Clear scope and documentation for smoother approvals',
      ],
    },
    {
      title: 'Low-Voltage & Connectivity',
      category: 'Both',
      icon: 'router',
      description:
        'Structured cabling and connectivity support for cleaner installs and more reliable performance in homes and businesses.',
      bullets: [
        'Cat6 installs, terminations, and cable testing',
        'Mesh Wi-Fi setup support and troubleshooting',
        'Better coverage planning for larger buildings and detached areas',
        'Clean routing and labeling for easier maintenance',
      ],
    },
    {
      title: 'Fire Hazards & Electrical Safety Solutions',
      category: 'Both',
      icon: 'report',
      description:
        'If you’re seeing sparking, smelling something burning, or a panel/outlet feels hot, we help make the situation safe and map the next steps.',
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

  onCallNow(): void {
    window.location.href = `tel:${this.phoneNumber}`;
  }

  trackByTitle(_: number, item: { title: string }): string {
    return item.title;
  }

  private setupSeo(): void {
    const canonicalUrl = FullSitePaths.commercialElectrician;
    this.seo.setMetaTags({
      title:
        'Commercial Electrician in the Texas Hill Country | ProVolt Electrical Services',
      description:
        'Licensed commercial electrician serving the Texas Hill Country. Tenant build-outs/finish-outs, troubleshooting & repairs, panel/service upgrades, LED lighting retrofits, dedicated equipment circuits, and code-compliant work.',
      canonicalUrl,
      uniquePageImage: SiteData.homepageImageUrl, // swap to a page-specific OG image if you add one
      type: 'website',
      robots: 'index,follow',
    });
  }

  private setupJsonLd(): void {
    const baseUrl = SiteData.baseUrl;
    const pageUrl = FullSitePaths.commercialElectrician;

    const pageName = `Commercial Electrician | Texas Hill Country | ${
      SiteData.businessName ?? 'ProVolt Electrical Services'
    }`;

    const pageDescription =
      this.hero?.subtitle ??
      'Code-compliant commercial electrical work across the Texas Hill Country: troubleshooting, tenant build-outs, service/panel upgrades, lighting retrofits, and dedicated equipment circuits.';

    // Hard-coded list of the towns visibly shown on this page (plus the hub CTA pill)
    const nearbyServiceAreas = [
      {
        name: 'Boerne, TX',
        url: `${baseUrl}/service-areas/boerne-tx-electrician`,
      },
      {
        name: 'Comfort, TX',
        url: `${baseUrl}/service-areas/comfort-tx-electrician`,
      },
      {
        name: 'Fredericksburg, TX',
        url: `${baseUrl}/service-areas/fredericksburg-tx-electrician`,
      },
      {
        name: 'Helotes, TX',
        url: `${baseUrl}/service-areas/helotes-tx-electrician`,
      },
      {
        name: 'Ingram, TX',
        url: `${baseUrl}/service-areas/ingram-tx-electrician`,
      },
      {
        name: 'Kerrville, TX',
        url: `${baseUrl}/service-areas/kerrville-tx-electrician`,
      },
      {
        name: 'View all Texas Hill Country service areas (9)',
        url: `${baseUrl}/service-areas/texas-hill-country-electrician`,
      },
    ];

    const commercialServices = this.services ?? [];

    const pageJsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        // 1) WebPage node
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
          primaryImageOfPage: { '@id': `${baseUrl}/#primaryimage` }, // reuse global
          breadcrumb: { '@id': `${pageUrl}#breadcrumb` },

          // Main entity is the service represented by this page
          mainEntity: { '@id': `${pageUrl}#service` },

          significantLink: [
            `${baseUrl}/electrical-services`,
            `${baseUrl}/service-areas/texas-hill-country-electrician`,
            `${baseUrl}/contact-us`,
          ],
          ...(this.faqs?.length
            ? { hasPart: { '@id': `${pageUrl}#faq` } }
            : {}),
        },

        // 2) Breadcrumbs
        {
          '@type': 'BreadcrumbList',
          '@id': `${pageUrl}#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Electrical Services',
              item: FullSitePaths.electricalServices,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Commercial Electrician',
              item: pageUrl,
            },
          ],
        },

        // 3) Nearby service areas list (matches visible UI on this page)
        {
          '@type': 'ItemList',
          '@id': `${pageUrl}#nearby-service-areas`,
          name: 'Nearby Service Areas',
          itemListOrder: 'https://schema.org/ItemListOrderAscending',
          numberOfItems: nearbyServiceAreas.length,
          itemListElement: nearbyServiceAreas.map((a, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: a.name,
            item: a.url,
          })),
        },

        // 4) Main service entity
        {
          '@type': 'Service',
          '@id': `${pageUrl}#service`,
          url: pageUrl,
          name: 'Commercial Electrical Services',
          serviceType:
            'Commercial electrical troubleshooting, tenant build-outs/finish-outs, panel and service upgrades, LED lighting retrofits, dedicated equipment circuits, inspections, and code-compliant repairs',
          provider: { '@id': `${baseUrl}/#business` },

          // Keep coverage broad on service pages; detailed town list lives on the hub page.
          areaServed: [
            { '@type': 'AdministrativeArea', name: 'Texas Hill Country' },
            {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 30.0474,
                longitude: -99.1403,
              },
              geoRadius: 96560, // meters (~60 miles)
            },
          ],

          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            '@id': `${pageUrl}#catalog`,
            name: 'Commercial Electrical Services Catalog',
            itemListElement: commercialServices.map((s) => ({
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

        // 5) FAQ (supporting)
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

    this.seo.setPageJsonLd(pageJsonLd);
  }
}
