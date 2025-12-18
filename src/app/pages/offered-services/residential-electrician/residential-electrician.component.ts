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
import { ElectricalServiceCardsComponent } from 'src/app/shared/components/electrical-service-cards/electrical-service-cards.component';
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
  selector: 'app-residential-electrician',
  standalone: true,
  templateUrl: './residential-electrician.component.html',
  styleUrls: ['./residential-electrician.component.scss'],
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
export class ResidentialElectricianComponent implements OnInit {
  constructor(private seo: SeoService) {}

  /**
   * NOTE: Please standardize this across your site.
   * Your marketing copy elsewhere uses (830) 955-2909.
   */
  private readonly phoneNumber = '8309285046';

  hero = {
    title: 'Residential Electrician Services in the Texas Hill Country',
    subtitle:
      'Safe, clean, code-compliant electrical work for Hill Country homes—repairs, upgrades, lighting, panels, smart home additions, and wiring for remodels and new construction.',
    trustLine:
      'Licensed, insured, and Texas-Hill-Country tough—ProVolt delivers master-level electrical work for homes, businesses, and rural properties.',
  };

  whoWeHelp: string[] = [
    'Homeowners & families',
    'Older homes needing upgrades',
    'New construction & remodels',
    'Short-term rentals (Airbnb/VRBO)',
    'Property managers & landlords',
    'Ranch homes & acreage properties',
  ];

  popularResidentialJobs: LinkCard[] = [
    {
      title: 'Electrical Troubleshooting & Repairs',
      description:
        'Fix flickering lights, dead outlets, tripped breakers, and intermittent power issues.',
      icon: 'troubleshoot',
      path: '/services/electrical-troubleshooting-repair',
    },
    {
      title: 'Electrical Panel Upgrades',
      description:
        'Upgrade old or undersized panels for modern loads and safer operation.',
      icon: 'electrical_services',
      path: '/services/electrical-panel-upgrade',
    },
    {
      title: 'Ceiling Fans, Switches & Outlets',
      description:
        'Install/replace fans, GFCI outlets, smart switches, dimmers, and more.',
      icon: 'home',
      path: '/services/ceiling-fan-switch-outlet-installation',
    },
    {
      title: 'Interior & Exterior Lighting',
      description:
        'LED upgrades, recessed lighting, landscape lighting, and security lighting.',
      icon: 'lightbulb',
      path: '/services/lighting-installation',
    },
    {
      title: 'Whole-Home Surge Protection',
      description:
        'Protect appliances and electronics from lightning and power events.',
      icon: 'flash_on',
      path: '/services/whole-home-surge-protection',
    },
    {
      title: 'Safety Inspections',
      description:
        'Pre-purchase inspections, hazard identification, and code-compliance guidance.',
      icon: 'verified',
      path: '/services/electrical-safety-inspection',
    },
    {
      title: 'Smart Home & Controls',
      description:
        'Smart switches, dimmers, sensors, thermostats, and automation-ready wiring.',
      icon: 'devices',
      path: '/services/smart-home-controls',
    },
    {
      title: 'Emergency Electrician',
      description:
        'Fast response for outages, burning smells, sparking, and overheated panels.',
      icon: 'warning',
      path: '/emergency-electrician',
    },
  ];

  processSteps: ProcessStep[] = [
    {
      title: 'Quick triage & scheduling',
      description:
        'We clarify symptoms and urgency so the visit is efficient and prepared.',
      icon: 'schedule',
    },
    {
      title: 'Safety-first inspection',
      description:
        'We check panels, connections, and loads to identify hazards before work begins.',
      icon: 'health_and_safety',
    },
    {
      title: 'Clear options & recommendations',
      description:
        'You get practical choices: what’s required, what’s recommended, and what can wait.',
      icon: 'receipt_long',
    },
    {
      title: 'Clean, code-compliant work',
      description:
        'We protect your home, keep the jobsite clean, label work, and follow NEC best practices.',
      icon: 'verified_user',
    },
    {
      title: 'Testing & walkthrough',
      description:
        'We test everything, confirm proper operation, and explain what we did and why.',
      icon: 'fact_check',
    },
  ];

  faqs: FaqItem[] = [
    {
      question: 'Do you work on older homes in the Hill Country?',
      answer:
        'Yes. We regularly upgrade older wiring, panels, and outlets to improve safety and support modern electrical demand.',
    },
    {
      question: 'How do I know if I need a panel upgrade?',
      answer:
        'Frequent breaker trips, hot panels, buzzing, signs of corrosion, or adding large loads (EV charger, workshop equipment, remodels) are common reasons to upgrade.',
    },
    {
      question: 'Can you install GFCI outlets and modern safety protections?',
      answer:
        'Yes. We install and correct GFCI/AFCI protection where appropriate and bring common safety issues up to modern standards.',
    },
    {
      question: 'Do you do lighting upgrades and dimmer/controls installs?',
      answer:
        'Yes. We install LED upgrades, dimmers, recessed lights, exterior/security lighting, and control solutions.',
    },
    {
      question: 'Do you handle new construction and remodel wiring?',
      answer:
        'Yes. We can wire additions and remodels to code, add dedicated circuits, and plan loads for future needs.',
    },
    {
      question: 'What counts as an electrical emergency?',
      answer:
        'Burning smells, sparking, hot outlets/panels, repeated breaker trips, or power loss are all reasons to call immediately.',
    },
  ];

  services: ServiceItem[] = [
    {
      title: 'Residential Electrical Services',
      category: 'Residential',
      icon: 'home',
      description:
        'Full-service residential electrical work—from panel upgrades and lighting installation to whole-home rewiring—done safely, efficiently, and up to code for Texas Hill Country homes.',
      bullets: [
        'Troubleshooting & diagnostics for flickering lights, tripped breakers, and dead outlets',
        'Repairs & safety corrections by a licensed residential electrician',
        'New construction & remodel wiring that meets current NEC standards',
        'Ceiling fans, switches & outlets, smoke detectors, and indoor/outdoor lighting',
      ],
    },
    {
      title: 'Smart Home & Controls',
      category: 'Residential',
      icon: 'devices',
      description:
        'Smart home electrical solutions that add comfort, convenience, and energy savings throughout your home.',
      bullets: [
        'Smart switches, dimmers, and scene-based lighting control',
        'Smart thermostats, sensors, and linked comfort controls',
        'Wi-Fi / mesh-enabled panels and smart-ready wiring (where applicable)',
        'Whole-home automation prep: dedicated circuits, wiring, and power',
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
    // IMPORTANT: Update this URL to match your real route.
    this.seo.setMetaTags({
      title: 'Residential Electrician | Texas Hill Country | ProVolt Electric',
      description:
        'Residential electrical repairs, panel upgrades, lighting installs, smart home work, and safety inspections across the Texas Hill Country. Licensed & insured. Call now.',
      url: 'https://provoltelectricalservices.com/electrical-services/residential-electrician',
      type: 'website',
      robots: 'index,follow',
    });
  }

  private setupJsonLd(): void {
    const serviceJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Residential Electrical Services',
      serviceType:
        'Residential electrical repairs, upgrades, lighting, panels, smart home, and inspections',
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
        name: 'Residential Electrical Services',
        itemListElement: this.services
          .filter((s) => s.category === 'Residential' || s.category === 'Both')
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
          name: 'Services',
          item: 'https://provoltelectricalservices.com/services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Residential Electrician',
          item: 'https://provoltelectricalservices.com/services/residential-electrician',
        },
      ],
    };

    this.seo.setJsonLd('json-ld-residential-service-provolt', serviceJsonLd);
    this.seo.setJsonLd('json-ld-residential-faq-provolt', faqJsonLd);
    this.seo.setJsonLd(
      'json-ld-residential-breadcrumb-provolt',
      breadcrumbJsonLd
    );
  }
}
