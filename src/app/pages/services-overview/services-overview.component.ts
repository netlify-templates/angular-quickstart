import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';

import { SeoService } from 'src/app/shared/services/seo.service';
import { AreasWeServeComponent } from 'src/app/shared/components/areas-we-serve/areas-we-serve.component';
import { ElectricalServiceCardsComponent } from 'src/app/shared/components/electrical-service-cards/electrical-service-cards.component';
import { SiteData } from 'src/app/shared/configs/site-data.config';
import {
  HeroServiceCard,
  HERO_SERVICE_CARDS,
} from 'src/app/shared/configs/site-service-descriptions';
import { FullSitePaths } from 'src/app/shared/configs/site-urls.config';

interface PopularLink {
  title: string;
  description: string;
  icon: string;
  routerLink: string;
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
  selector: 'app-services-overview',
  standalone: true,
  templateUrl: './services-overview.component.html',
  styleUrls: ['./services-overview.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatCheckboxModule,
    MatChipsModule,
    MatExpansionModule,
    AreasWeServeComponent,
    ElectricalServiceCardsComponent,
  ],
})
export class ServicesOverviewComponent implements OnInit {
  constructor(private seo: SeoService) {}

  private readonly phoneNumber = SiteData.phoneNumber;
  services: HeroServiceCard[] = HERO_SERVICE_CARDS;

  hero = {
    title: "ProVolt's Electrical Services in the Texas Hill Country",
    subtitle:
      'Residential, commercial, and ranch & rural electrical work—done safely, cleanly, and to code. From troubleshooting and repairs to panel upgrades and lighting, ProVolt helps you protect what matters and keep power reliable.',
    trustLine:
      'Licensed, insured, and Texas-Hill-Country tough—ProVolt delivers master-level electrical work for homes, businesses, and rural properties.',
    actionButtonText: 'Call For Electrical Service',
  };

  whoWeHelp: string[] = [
    'Homeowners & families',
    'Property managers & landlords',
    'Shops, offices & facilities',
    'Ranches & acreage properties',
    'Remodels & new construction',
    'Service upgrades & safety fixes',
  ];

  popularServices: PopularLink[] = [
    // @Nathaniel NOTE: If you truly do NOT offer emergency services, remove this card + router.
    // Keeping it here since it exists in your current code.
    {
      title: 'Emergency Electrical Repairs',
      description:
        'Fast help for outages, burning smells, sparking, and urgent electrical hazards.',
      icon: 'warning',
      routerLink: '/electrical-services/emergency-electrician',
    },
    {
      title: 'Electrical Panel Upgrades',
      description:
        'Breaker box upgrades, service upgrades, and safer power for modern loads.',
      icon: 'electrical_services',
      routerLink: '/electrical-services/electrical-panel-upgrades',
    },
    {
      title: 'Breaker & Circuit Repairs',
      description:
        'Fix tripping breakers, overloaded circuits, and unreliable power issues.',
      icon: 'bolt',
      routerLink: '/electrical-services/circuit-breaker-repair',
    },
    {
      title: 'Troubleshooting & Diagnostics',
      description:
        'Track down flickering lights, dead outlets, and recurring electrical problems.',
      icon: 'search',
      routerLink: '/electrical-services/electrical-troubleshooting',
    },
    {
      title: 'Outlet & Switch Work',
      description:
        'New outlets, repairs, and upgrades—including GFCI where needed.',
      icon: 'power',
      routerLink: '/electrical-services/outlet-switch-installation',
    },
    {
      title: 'Lighting Installation',
      description:
        'Install or upgrade fixtures, LEDs, and indoor/outdoor lighting.',
      icon: 'lightbulb',
      routerLink: '/electrical-services/lighting-installation',
    },
    {
      title: 'Ceiling Fan Installation',
      description:
        'New fan installs, replacements, balancing, and safe mounting.',
      icon: 'toys_fan',
      routerLink: '/electrical-services/ceiling-fan-installation',
    },
    {
      title: 'Whole-Home Surge Protection',
      description:
        'Protect appliances and electronics with panel-mounted surge protection.',
      icon: 'shield',
      routerLink: '/electrical-services/whole-home-surge-protection',
    },
    {
      title: 'Rewiring & Remodel Wiring',
      description:
        'Rewires, new circuits, and remodel wiring done cleanly and up to code.',
      icon: 'construction',
      routerLink: '/electrical-services/rewiring-remodel-wiring',
    },
  ];

  processSteps: ProcessStep[] = [
    {
      title: 'Quick triage & scheduling',
      description:
        'We clarify symptoms, urgency, and site details so your visit is efficient.',
      icon: 'schedule',
    },
    {
      title: 'Safety-first inspection',
      description:
        'We check panels, connections, loads, and protection to identify hazards first.',
      icon: 'health_and_safety',
    },
    {
      title: 'Clear options',
      description:
        'You get practical choices: what’s required, what’s recommended, and what can wait.',
      icon: 'receipt_long',
    },
    {
      title: 'Clean, code-compliant work',
      description:
        'Professional workmanship that respects your property and meets current standards.',
      icon: 'verified_user',
    },
    {
      title: 'Testing & walkthrough',
      description:
        'We test everything and explain what we did so you feel confident.',
      icon: 'fact_check',
    },
  ];

  faqs: FaqItem[] = [
    {
      question: 'What areas do you serve?',
      answer:
        'We serve Kerrville and nearby Texas Hill Country communities. See all service areas on our Service Areas page.',
    },
    {
      question:
        'Do you offer residential, commercial, and ranch/rural electrical work?',
      answer:
        'Yes. We provide electrical services for homes, businesses, and rural properties including troubleshooting, repairs, panel upgrades, lighting, and safety inspections.',
    },
    {
      question: 'Do you do EV charger or generator installation?',
      answer:
        'Not at this time. If you’re unsure whether your project is a fit, give us a call and we’ll point you in the right direction.',
    },
    {
      question: 'How do I know if I need a panel upgrade?',
      answer:
        'Frequent breaker trips, hot/buzzing panels, corrosion, or adding significant new electrical loads are common reasons to upgrade. We can inspect and advise.',
    },
    {
      question: 'What counts as an electrical emergency?',
      answer:
        'Burning smells, sparking, hot outlets/panels, repeated breaker trips, or power loss are all reasons to call immediately.',
    },
    {
      question: 'Can you help with code compliance or safety corrections?',
      answer:
        'Yes. We identify hazards, correct common code issues, and install appropriate safety protection (e.g., GFCI/AFCI where applicable).',
    },
  ];

  ngOnInit(): void {
    this.setupSeo();
    this.setupJsonLd();
  }

  onCallNow(): void {
    window.location.href = `tel:${this.phoneNumber}`;
  }

  private setupSeo(): void {
    const canonicalUrl = FullSitePaths.electricalServices;

    this.seo.setMetaTags({
      title:
        'Electrical Services in the Texas Hill Country | ProVolt Electrical Services',
      description:
        'Explore ProVolt’s residential, commercial, and ranch & rural electrical services across the Texas Hill Country—troubleshooting, repairs, panel upgrades, lighting, and safety-focused electrical upgrades.',
      canonicalUrl,
      uniquePageImage: SiteData.homepageImageUrl,
      type: 'website',
      robots: 'index,follow',
    });
  }

  private setupJsonLd(): void {
    const baseUrl = SiteData.baseUrl;
    const pageUrl = FullSitePaths.electricalServices;

    // These 6 towns (plus the hub CTA) are the ones visibly shown on this page.
    // Hard-coded intentionally (per your homepage approach).
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

    const pageJsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        // Page node
        {
          '@type': 'CollectionPage',
          '@id': `${pageUrl}#webpage`,
          url: pageUrl,
          name: 'Electrical Services in the Texas Hill Country',
          description:
            'Overview of ProVolt Electrical Services including residential, commercial, and ranch & rural electrical work across the Texas Hill Country.',
          inLanguage: 'en-US',
          isPartOf: { '@id': `${baseUrl}/#website` },
          about: { '@id': `${baseUrl}/#business` },
          publisher: { '@id': `${baseUrl}/#business` },
          primaryImageOfPage: { '@id': `${baseUrl}/#primaryimage` }, // reuse global
          breadcrumb: { '@id': `${pageUrl}#breadcrumb` },

          // Main content on this page is the services catalog
          mainEntity: { '@id': `${pageUrl}#catalog` },

          significantLink: [
            `${baseUrl}/electrical-services/residential-electrician`,
            `${baseUrl}/electrical-services/commercial-electrician`,
            `${baseUrl}/electrical-services/ranch-rural-electrician`,
            `${baseUrl}/service-areas/texas-hill-country-electrician`,
            `${baseUrl}/contact-us`,
          ],
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
              item: pageUrl,
            },
          ],
        },

        // Services catalog
        {
          '@type': 'OfferCatalog',
          '@id': `${pageUrl}#catalog`,
          name: 'Electrical Services',
          provider: { '@id': `${baseUrl}/#business` },
          itemListElement: this.services.map((s) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: s.title,
              description: s.description,
              provider: { '@id': `${baseUrl}/#business` },
              url: s.routerLink ? `${baseUrl}${s.routerLink}` : undefined,
            },
          })),
        },

        // Nearby service areas list (matches visible UI)
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

        // FAQs
        {
          '@type': 'FAQPage',
          '@id': `${pageUrl}#faq`,
          mainEntity: this.faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        },
      ],
    };

    this.seo.setPageJsonLd(pageJsonLd);
  }
}
