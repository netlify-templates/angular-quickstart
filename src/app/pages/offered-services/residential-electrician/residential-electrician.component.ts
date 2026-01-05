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

  serviceTitle = "ProVolt's Residential Electrical Services";
  footerText =
    'Tell us what’s going on and where you’re located — we’ll recommend the safest, most cost-effective next step.';
  hero = {
    title:
      "ProVolt's Residential Electrical Services in the Texas Hill Country",
    subtitle:
      'Looking for a dependable residential electrician in Kerrville or the Texas Hill Country? ProVolt Electric helps homeowners with safe, code-compliant electrical repairs and upgrades across Kerrville, Ingram, Center Point, Comfort, Hunt, Fredericksburg, Boerne, Bandera, and Helotes. Whether you’re dealing with a breaker that keeps tripping, planning a remodel, or upgrading your panel for modern power demands, we’ll explain your options clearly and deliver clean, professional work.',
    trustLine:
      'Licensed, insured, and Texas-Hill-Country tough—ProVolt delivers master-level electrical work for homes, businesses, and rural properties.',
    actionButtonText: 'Contact Our Residential Electrician Support',
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
      question:
        'What residential electrical services do you handle most often?',
      answer:
        'Most calls are for troubleshooting (flickering lights, dead outlets, tripping breakers), panel and service upgrades, new circuits or dedicated circuits, lighting and ceiling fan installs, surge protection, and safety upgrades like GFCI/AFCI protection.',
    },
    {
      question:
        'Do you service older homes in Kerrville and the Texas Hill Country?',
      answer:
        'Yes. We regularly work on older Hill Country homes—upgrading panels, correcting unsafe wiring or connections, improving grounding, and bringing common issues up to modern safety expectations while keeping the work practical and code-compliant.',
    },
    {
      question:
        'How can I tell if my home needs a panel upgrade or service upgrade?',
      answer:
        'Common signs include frequent breaker trips, warm/buzzing panels, visible corrosion, limited breaker space, or when you’re adding new loads like a remodel, kitchen appliances, HVAC changes, a shop/garage expansion, or additional circuits.',
    },
    {
      question:
        'Can you add new circuits or dedicated circuits for appliances and equipment?',
      answer:
        'Yes. We install new circuits and dedicated circuits for higher-demand needs like kitchens, laundry rooms, garages/shops, HVAC equipment, and other appliances—helping prevent overloads and nuisance breaker trips.',
    },
    {
      question:
        'Do you install subpanels for garages, additions, or workshops?',
      answer:
        'Yes. Subpanels are a great option when you need more capacity in a specific area (garage, addition, workshop) and want cleaner circuit organization and easier future expansion.',
    },
    {
      question:
        'Do you handle indoor and outdoor lighting, ceiling fans, and switches/dimmers?',
      answer:
        'Yes. We install and upgrade recessed lighting, LED fixtures, motion/timer/dusk-to-dawn lighting, security lighting, ceiling fans, and switch/dimmer controls—including 3-way and 4-way switch setups.',
    },
    {
      question:
        'Do you install whole-home surge protection and safety protections like GFCI/AFCI?',
      answer:
        'Yes. We can add whole-home surge protection and update GFCI/AFCI protection where appropriate—especially in kitchens, bathrooms, garages, and outdoor areas—based on your home’s layout and needs.',
    },
    {
      question: 'Do you pull permits and coordinate inspections when required?',
      answer:
        'Yes. When a permit is required for the scope of work, we can pull permits and coordinate with inspectors to keep the job compliant and moving smoothly.',
    },
    {
      question: 'Can you help with Cat6 wiring and home Wi-Fi improvements?',
      answer:
        'Yes. We install and test Cat6 runs and can help with mesh Wi-Fi placement and troubleshooting to improve coverage—especially in larger homes, garages, and detached spaces.',
    },
    {
      question:
        'What issues should I treat as urgent and call about right away?',
      answer:
        'Call right away if you notice burning smells, sparking, warm or buzzing outlets/panels, repeated breaker trips that won’t reset, or sudden partial power. These can indicate a safety hazard and should be checked promptly.',
    },
    {
      question: 'Do you handle new construction and remodel wiring?',
      answer:
        'Yes. We can wire additions and remodels to code, add dedicated circuits, and plan loads for future needs.',
    },
  ];

  services: ServiceItem[] = [
    {
      title: 'Panel & Service Upgrades',
      category: 'Residential',
      icon: 'electrical_services',
      description:
        'Upgrade outdated or undersized panels and service equipment to improve safety, capacity, and long-term reliability for Hill Country homes.',
      bullets: [
        'Breaker panel replacements and capacity upgrades',
        'Load corrections and circuit rebalancing (as needed)',
        'Service equipment upgrades where applicable',
        'Clear recommendations for future-ready electrical capacity',
      ],
    },
    {
      title: 'Troubleshooting & Electrical Repairs',
      category: 'Residential',
      icon: 'manage_search',
      description:
        'Find the root cause and fix common home electrical issues with a safety-first, explain-the-options approach.',
      bullets: [
        'Flickering or dimming lights and intermittent power',
        'Dead outlets, partial power, and loose/failed connections',
        'Breakers that trip repeatedly or circuits that overload',
        'Circuit testing and verification (loads, protection, and continuity)',
      ],
    },
    {
      title: 'New Circuits, Subpanels & Dedicated Circuits',
      category: 'Residential',
      icon: 'device_hub',
      description:
        'Add power where you need it—new circuits, subpanels, and dedicated circuits for higher-demand home equipment.',
      bullets: [
        'New circuit additions for kitchens, laundry rooms, garages, and shops',
        'Dedicated circuits for HVAC, appliances, and equipment',
        'Subpanel installations for additions, garages, or workshops',
        'Circuit planning to reduce nuisance trips and overloads',
      ],
    },
    {
      title: 'Lighting, Fans & Controls',
      category: 'Residential',
      icon: 'lightbulb',
      description:
        'Comfortable, clean, and functional lighting and fixture installs—plus controls that make your home easier to live in.',
      bullets: [
        'Recessed lighting, fixture swaps, and LED upgrades',
        'Ceiling fan installation and replacement',
        '3-way/4-way switches, dimmers, and updated controls',
        'Motion, timer, and dusk-to-dawn lighting options',
      ],
    },
    {
      title: 'Safety Upgrades & Surge Protection',
      category: 'Residential',
      icon: 'bolt',
      description:
        'Reduce risk and protect electronics with modern safety upgrades designed for real-world home electrical use.',
      bullets: [
        'Whole-home surge protection installs',
        'GFCI/AFCI protection upgrades where appropriate',
        'Smoke/CO device replacements or wiring where applicable',
        'Targeted safety improvements for older circuits and connections',
      ],
    },
    {
      title: 'Electrical Inspections & Code Guidance',
      category: 'Residential',
      icon: 'fact_check',
      description:
        'Know what you’re working with—practical inspections and guidance to prioritize repairs and improvements.',
      bullets: [
        'Pre-purchase electrical inspections and system reviews',
        'Hazard identification and remediation recommendations',
        'Code-compliance guidance and upgrade planning',
        'Documentation-ready findings and clear next steps',
      ],
    },
    {
      title: 'Low-Voltage, Internet & Wi-Fi',
      category: 'Residential',
      icon: 'router',
      description:
        'Improve coverage and reliability with structured cabling and connectivity support throughout your home.',
      bullets: [
        'Cat6 installs, terminations, and cable testing',
        'Mesh Wi-Fi placement, setup, and troubleshooting',
        'Network cleanup for better coverage and stability',
        'Device/location planning for clean, future-friendly runs',
      ],
    },
    {
      title: 'Remodels, Additions & New Construction Wiring',
      category: 'Residential',
      icon: 'construction',
      description:
        'From remodels to additions, we install wiring that’s planned cleanly and built to current NEC requirements.',
      bullets: [
        'Remodel wiring updates and new circuit planning',
        'Additions and expansions with properly sized circuits',
        'Device/lighting layout support and rough-in planning',
        'Final trim-out with clean installs and verified function',
      ],
    },
    {
      title: 'Outdoor Power & Trenching',
      category: 'Residential',
      icon: 'yard',
      description:
        'Bring reliable power outdoors—perfect for patios, workshops, detached garages, and outbuildings.',
      bullets: [
        'Outdoor receptacles and power runs to exterior areas',
        'Trenching and conduit runs as needed',
        'Power to detached garages, shops, and outbuildings',
        'Outdoor-rated protection and weather-appropriate installs',
      ],
    },
    {
      title: 'Permits & Inspections Coordination',
      category: 'Residential',
      icon: 'assignment_turned_in',
      description:
        'We handle the paperwork side when it’s required—so your project stays straightforward and compliant.',
      bullets: [
        'Permits pulled when required',
        'Coordination with inspectors when needed',
        'Support working with local utility/service providers as applicable',
        'Clear scope and documentation for smoother approvals',
      ],
    },
    {
      title: 'Storm & Weather-Related Electrical Damage Restoration',
      category: 'Both',
      icon: 'thunderstorm',
      description: 'For storm, flood, or lightning-related electrical damage.',
      bullets: [
        'Power loss, tripped breakers, and partial outages',
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
        'Residential Electrician | Texas Hill Country | ProVolt Electrical Services',
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
          item: 'https://provoltelectricalservices.com/electrical-services/residential-electrician',
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
