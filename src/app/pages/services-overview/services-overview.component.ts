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

interface ServiceItem {
  title: string;
  category: 'Residential' | 'Commercial' | 'RanchAndRural' | 'Both';
  icon: string;
  description: string;
  bullets: string[];
}

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

  private readonly phoneNumber = '8309285046';

  hero = {
    title: 'Electrical Services in the Texas Hill Country',
    subtitle:
      'Residential, commercial, and ranch & rural electrical work—done safely, cleanly, and to code. From troubleshooting and repairs to panel upgrades and lighting, ProVolt helps you protect what matters and keep power reliable.',
    trustLine:
      'Licensed, insured, and Texas-Hill-Country tough—ProVolt delivers master-level electrical work for homes, businesses, and rural properties.',
    actionButtonText:
      'Call now for Fast, Reliable, and Licensed Electrical Service',
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
        'We serve Kerrville, Fredericksburg, Boerne, Bandera, Comfort, Helotes, Ingram, Hunt, Center Point, and surrounding Texas Hill Country communities.',
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

  // Current category filter; null means show all
  selectedCategory:
    | 'Residential'
    | 'Commercial'
    | 'RanchAndRural'
    | 'Both'
    | null = 'Residential';

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
      title: 'Smart Home & Controls',
      category: 'Residential',
      icon: 'devices',
      description:
        'Smart home electrical solutions that add comfort, convenience, and energy savings throughout your home.',
      bullets: [
        'Smart switches, dimmers, and scene-based lighting control',
        'Smart thermostats, sensors, and linked comfort controls',
        'Smart-ready wiring prep: dedicated circuits and clean power (where applicable)',
        'Automation prep: wiring and power planning for future home upgrades',
      ],
    },
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

  // Derived list used by the template
  get filteredServices(): ServiceItem[] {
    if (!this.selectedCategory) return this.services;

    if (this.selectedCategory === 'Residential') {
      return this.services.filter(
        (s) => s.category === 'Residential' || s.category === 'Both'
      );
    }

    if (this.selectedCategory === 'RanchAndRural') {
      return this.services.filter(
        (s) => s.category === 'RanchAndRural' || s.category === 'Both'
      );
    }

    return this.services.filter(
      (s) => s.category === 'Commercial' || s.category === 'Both'
    );
  }

  setCategoryFilter(
    cat: 'Residential' | 'Commercial' | 'RanchAndRural' | 'Both'
  ) {
    this.selectedCategory = cat;
  }

  clearCategoryFilter() {
    this.selectedCategory = null;
  }

  trackByTitle(_: number, item: { title: string }): string {
    return item.title;
  }

  private setupSeo(): void {
    this.seo.setMetaTags({
      title: 'Electrical Services | Texas Hill Country | ProVolt Electric',
      description:
        'Explore ProVolt Electric’s residential, commercial, and ranch & rural electrical services across the Texas Hill Country—troubleshooting, repairs, panel upgrades, lighting, safety inspections, and emergency help.',
      url: 'https://provoltelectricalservices.com/electrical-services',
      type: 'website',
      robots: 'index,follow',
    });
  }

  private setupJsonLd(): void {
    const serviceJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Electrical Services',
      serviceType:
        'Residential, commercial, and ranch & rural electrical services (repairs, upgrades, wiring, lighting, inspections)',
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
        name: 'ProVolt Electric Services',
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
          name: 'Electrical Services',
          item: 'https://provoltelectricalservices.com/electrical-services',
        },
      ],
    };

    this.seo.setJsonLd('json-ld-services-overview-provolt', serviceJsonLd);
    this.seo.setJsonLd('json-ld-services-overview-faq-provolt', faqJsonLd);
    this.seo.setJsonLd(
      'json-ld-services-overview-breadcrumb-provolt',
      breadcrumbJsonLd
    );
  }
}
