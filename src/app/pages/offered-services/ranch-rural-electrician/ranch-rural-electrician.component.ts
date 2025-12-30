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

  private readonly phoneNumber = '8309285046';

  serviceTitle = 'Ranch & Rural Electrical Services';

  hero = {
    title: 'Ranch & Rural Electrician Services in the Texas Hill Country',
    subtitle:
      'Dependable electrical work for acreage properties—barns, wells, pumps, shops, outdoor power, and long-run circuits. Built for reliability, safety, and real-world Hill Country conditions.',
    trustLine:
      'Licensed, insured, and Texas-Hill-Country tough—ProVolt delivers master-level electrical work for homes, businesses, and rural properties.',
    actionButtonText: 'Contact Our Electricians',
  };

  whoWeHelp: string[] = [
    'Ranch homes & acreage properties',
    'Barns, shops, and outbuildings',
    'Wells, pumps, and water systems',
    'Gates, driveways, and outdoor power',
    'Equipment power & dedicated circuits',
    'Property managers & landowners',
  ];

  // These are internal-link cards to future (or existing) detail pages.
  // You can stub these routes now and publish detail pages gradually.
  popularRanchRuralJobs: LinkCard[] = [
    {
      title: 'Well & Pump Circuits',
      description:
        'Reliable circuits, controls, protection, and troubleshooting for wells and pumps.',
      icon: 'water',
      path: '/services/well-pump-electrical',
    },
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
      title: 'Lighting Design & Installation',
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
      description:
        'Protect motors, pumps, and electronics from lightning and power events.',
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
        'Do you work on long runs to barns, gates, and remote structures?',
      answer:
        'Yes. We plan long runs carefully using proper wire sizing, voltage-drop considerations, and protection so your equipment stays reliable.',
    },
    {
      question: 'Can you help with well and pump electrical issues?',
      answer:
        'Yes. We troubleshoot pump circuits and controls, verify protection devices, and correct wiring issues that cause nuisance trips or failures.',
    },
    {
      question: 'Do you install outdoor-rated outlets, lighting, and panels?',
      answer:
        'Yes. We use weather-rated materials and proper protection so outdoor power stays safe and durable.',
    },
    {
      question: 'What causes breakers to trip on rural properties?',
      answer:
        'Common causes include motor start-up loads, undersized wiring, failing breakers, moisture intrusion, loose connections, or equipment faults. We diagnose and fix the root issue.',
    },
    {
      question: 'Can you upgrade my service for a shop or new equipment?',
      answer:
        'Yes. We do panel/service upgrades, add subpanels, and install dedicated circuits sized for your current and future loads.',
    },
    {
      question: 'Do you provide safety inspections for rural properties?',
      answer:
        'Yes. We can identify hazards, check grounding/bonding, inspect panels, and recommend corrections to improve safety and reliability.',
    },
  ];

  services: ServiceItem[] = [
    {
      title: 'Ranch & Rural Electrical Services',
      category: 'RanchAndRural',
      icon: 'agriculture',
      description:
        'Dependable ranch and rural electrical services for barns, wells, shops, and acreage properties across the Texas Hill Country.',
      bullets: [
        'Barn & outbuilding wiring, lighting, and panel work',
        'Well & pump circuits, controls, protection, and troubleshooting',
        'Equipment circuits & receptacles for tools, compressors, and ag equipment',
        'Outdoor power distribution and trenching for gates, driveways, and remote structures',
      ],
    },
    {
      title: 'Electrical Troubleshooting & Repairs',
      category: 'Both',
      icon: 'troubleshoot',
      description:
        'Fast, thorough troubleshooting for electrical issues in homes, businesses, and rural properties across the Texas Hill Country.',
      bullets: [
        'Identify the cause of tripped breakers, hot spots, and nuisance shutdowns',
        'Track down dead outlets, flickering lights, and intermittent power loss',
        'Test and verify circuits, loads, and protective devices',
        'Provide repair options, safety recommendations, and a clear path forward',
      ],
    },
    {
      title: 'Panel & Service Upgrades',
      category: 'Both',
      icon: 'electrical_services',
      description:
        'Modernize your electrical system for today’s loads and tomorrow’s needs with code-compliant panel and service upgrades.',
      bullets: [
        'Panel upgrades & replacements for added capacity and safety',
        'New circuits & subpanels for shops, additions, and new equipment',
        'Whole-home and whole-facility surge protection for sensitive electronics',
        'Load calculations & capacity planning for future growth',
      ],
    },
    {
      title: 'Lighting Design & Installation',
      category: 'Both',
      icon: 'lightbulb',
      description:
        'Custom interior and exterior lighting design and installation that enhances comfort, security, and energy efficiency.',
      bullets: [
        'LED upgrades, dimming solutions, and lighting controls',
        'Landscape & architectural lighting for curb appeal',
        'Security & motion lighting for homes, shops, and businesses',
        'Garage, shop, barn, and outdoor work-area lighting',
      ],
    },
    {
      title: 'Safety Inspections & Code Compliance',
      category: 'Both',
      icon: 'verified',
      description:
        'Comprehensive electrical safety inspections by a licensed electrician to help protect your family, property, or business.',
      bullets: [
        'Pre-purchase home inspections and electrical system reviews',
        'Code compliance assessments for residential and commercial properties',
        'Insurance & safety reports and electrical load analysis',
        'Thermal checks and visual inspections to identify hot spots and hazards',
      ],
    },
    {
      title: '24/7 Emergency Electrical Service',
      category: 'Both',
      icon: 'warning',
      description:
        'When something goes wrong, our emergency electricians respond quickly to make things safe and restore power.',
      bullets: [
        'Power loss, tripped breakers, and partial outages',
        'Burning smells, sparking outlets, and overheated panels',
        'Storm, flood, or lightning-related electrical damage',
        'Make-safe repairs, temporary solutions, and follow-up service planning',
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
    this.seo.setMetaTags({
      title:
        'Ranch & Rural Electrician | Texas Hill Country | ProVolt Electrical Services',
      description:
        'Ranch and rural electrical services for barns, wells, shops, outdoor power, trenching, and upgrades across the Texas Hill Country. Licensed & insured. Call now.',
      url: 'https://provoltelectricalservices.com/electrical-services/ranch-rural-electrician',
      type: 'website',
      robots: 'index,follow',
      // @Nathaniel I will need to add these images to the assets folder
    });
  }

  private setupJsonLd(): void {
    const serviceJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Ranch & Rural Electrical Services',
      serviceType:
        'Ranch and rural electrical: barns, shops, wells, gates, long‑distance feeders, and weather‑ready installs',
      provider: {
        '@type': 'Electrician',
        name: 'ProVolt Electric',
        url: 'https://provoltelectricalservices.com',
      },
      areaServed: [
        { '@type': 'Place', name: 'Kerrville TX' },
        { '@type': 'Place', name: 'Fredericksburg TX' },
        { '@type': 'Place', name: 'Boerne TX' },
        { '@type': 'Place', name: 'Bandera TX' },
        { '@type': 'Place', name: 'Comfort TX' },
        { '@type': 'Place', name: 'Helotes TX' },
        { '@type': 'Place', name: 'Ingram TX' },
        { '@type': 'Place', name: 'Hunt TX' },
        { '@type': 'Place', name: 'Center Point TX' },
        { '@type': 'Place', name: 'Texas Hill Country' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Ranch & Rural Electrical Services',
        itemListElement: this.services
          .filter(
            (s) => s.category === 'RanchAndRural' || s.category === 'Both'
          )
          .map((s) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: s.title,
              description: s.description,
            },
          })),
      },
    };

    const faqJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: this.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    };

    const breadcrumbJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://provoltelectricalservices.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Electrical Services',
          item: 'https://provoltelectricalservices.com/electrical-services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Ranch & Rural Electrician',
          item: 'https://provoltelectricalservices.com/electrical-services/ranch-rural-electrician',
        },
      ],
    };

    this.seo.setJsonLd('json-ld-ranch-rural-service-provolt', serviceJsonLd);
    this.seo.setJsonLd('json-ld-ranch-rural-faq-provolt', faqJsonLd);
    this.seo.setJsonLd(
      'json-ld-ranch-rural-breadcrumb-provolt',
      breadcrumbJsonLd
    );
  }
}
