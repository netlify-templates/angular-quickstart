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

  /**
   * NOTE: Your marketing copy elsewhere uses (830) 955-2909.
   * If 8309285046 is NOT the business line, change it here.
   */
  private readonly phoneNumber = '8309552909';

  hero = {
    title: 'Commercial Electrical Services in the Texas Hill Country',
    // cardTitle: 'ProVolt Commercial Electrical Services Overview',
    subtitle:
      'Keep your business powered, safe, and code-compliant. ProVolt delivers fast response, clean workmanship, and master-level electrical solutions for offices, retail, restaurants, shops, and facilities across the Hill Country.',
    trustLine:
      'Licensed, insured, and Texas-Hill-Country tough—ProVolt delivers master-level electrical work for homes, businesses, and rural properties.',
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
      question: 'Do you offer after-hours or weekend service?',
      answer:
        'Yes. For many commercial clients we can schedule after-hours work to reduce downtime and disruption.',
    },
    {
      question: 'Can you handle tenant build-outs and coordinate with a GC?',
      answer:
        'Yes. We can help plan circuits and lighting, complete rough-in and trim-out, and coordinate with general contractors and inspectors.',
    },
    {
      question: 'Do you pull permits and ensure code compliance?',
      answer:
        'When permits are required, we can guide the process and complete work to code so you’re protected and inspection-ready.',
    },
    {
      question: 'Why do breakers keep tripping in a commercial space?',
      answer:
        'Common causes include overloaded circuits, failing breakers, loose connections, equipment faults, or mis-sized circuits. We diagnose and correct the root issue.',
    },
    {
      question: 'Can you upgrade us to LED and add lighting controls?',
      answer:
        'Yes. We install LED upgrades, occupancy sensors, dimming, and other controls to improve light quality and reduce energy waste.',
    },
    {
      question: 'How fast can you respond to outages or partial power loss?',
      answer:
        'Call us and we’ll triage urgency and availability right away—especially for safety hazards or business-impacting power loss.',
    },
  ];

  services: ServiceItem[] = [
    {
      title: 'Commercial Electrical Services',
      category: 'Commercial',
      icon: 'apartment',
      description:
        'Reliable commercial electrical services to keep your shop, office, or facility running safely, efficiently, and in compliance with electrical code.',
      bullets: [
        'Troubleshooting & diagnostics for circuits, equipment, and lighting',
        'Tenant build-outs, improvements, and new commercial circuits',
        'Code compliance upgrades, inspections, and violation corrections',
        'Lighting retrofits, controls, and energy-efficient LED upgrades',
        'Emergency & scheduled repairs to reduce business downtime',
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
    // IMPORTANT: This should match your actual route for this page.
    // If the route is not /services/commercial-electrician, update the URL and (ideally) the route path.
    this.seo.setMetaTags({
      title: 'Commercial Electrician | Texas Hill Country | ProVolt Electric',
      description:
        'Commercial electrical repairs, troubleshooting, panel upgrades, tenant build-outs, lighting retrofits, and code compliance across the Texas Hill Country. Licensed & insured. Call (830) 955-2909.',
      url: 'https://provoltelectricalservices.com/electrical-services/commercial-electrician',
      type: 'website',
      robots: 'index,follow',
    });
  }

  private setupJsonLd(): void {
    const serviceJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Commercial Electrical Services',
      serviceType:
        'Commercial electrical repairs, troubleshooting, upgrades, lighting, and code compliance',
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
        name: 'Commercial Electrical Services',
        itemListElement: this.services.map((s) => ({
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
          name: 'Services',
          item: 'https://provoltelectricalservices.com/services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Commercial Electrician',
          item: 'https://provoltelectricalservices.com/services/commercial-electrician',
        },
      ],
    };

    // @Nathaniel make sure this breadcrumb being set actually works with our SEO service.
    this.seo.setJsonLd('json-ld-commercial-service-provolt', serviceJsonLd);
    this.seo.setJsonLd('json-ld-commercial-faq-provolt', faqJsonLd);
    this.seo.setJsonLd(
      'json-ld-commercial-breadcrumb-provolt',
      breadcrumbJsonLd
    );
  }
}
