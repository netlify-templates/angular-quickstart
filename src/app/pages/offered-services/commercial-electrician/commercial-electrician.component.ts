import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { SeoService } from 'src/app/shared/services/seo.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AreasWeServeComponent } from 'src/app/shared/components/areas-we-serve/areas-we-serve.component';
import { ElectricalServiceCardsComponent } from 'src/app/shared/components/electrical-service-cards/electrical-service-cards.component';

interface ServiceItem {
  title: string;
  category: 'Residential' | 'Commercial' | 'RanchAndRural' | 'Both';
  icon: string;
  description: string;
  bullets: string[];
}

@Component({
  selector: 'app-services-overview',
  standalone: true,
  templateUrl: './commercial-electrician.component.html',
  styleUrl: './commercial-electrician.component.scss',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatCheckboxModule,
    AreasWeServeComponent,
    // ElectricalServiceCardsComponent,
  ],
})
export class CommercialElectricianComponent implements OnInit {
  constructor(private seo: SeoService) {}

  onCallNow(): void {
    const phoneNumber = '8309285046';
    window.location.href = `tel:${phoneNumber}`;
  }

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

  private setupSeo(): void {
    this.seo.setMetaTags({
      title:
        'Electrical Services | Residential, Commercial, Ranch & Rural & Industrial | ProVolt Electric',
      description:
        'Explore ProVolt Electric’s full range of electrical services in Kerrville, Fredericksburg, and the Texas Hill Country, including panel upgrades, lighting design, troubleshooting, safety inspections, maintenance, and 24/7 emergency service for residential, commercial, ranch & rural, and industrial clients.',
      url: 'https://provoltelectricalservices.com/services',
      type: 'website',
      // Optional OG image:
      // image: 'https://provoltelectricalservices.com/assets/og/services.jpg',
      robots: 'index,follow',
    });
  }

  private setupJsonLd(): void {
    const jsonLdObject = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Electrical Services',
      serviceType:
        'Residential, Commercial, Ranch & Rural & Industrial Electrical Services (Repairs, Upgrades, New Construction)',
      provider: {
        '@type': 'Electrician',
        name: 'ProVolt Electric',
        url: 'https://provoltelectricalservices.com',
      },
      areaServed: [
        'Kerrville TX',
        'Fredericksburg TX',
        'Boerne TX',
        'Bandera TX',
        'Comfort TX',
        'Helotes TX',
        'Ingram TX',
        'Hunt TX',
        'Center Point TX',
        'Texas Hill Country',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'ProVolt Electric Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Residential Electrical Services',
              description:
                'Repairs, panel upgrades, lighting, rewiring, and smart home work handled by licensed residential electricians for homes across the Texas Hill Country.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Commercial Electrical Services',
              description:
                'Commercial electrical services for shops, offices, and facilities, including troubleshooting, tenant build-outs, code upgrades, and lighting retrofits.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Ranch & Rural Electrical Services',
              description:
                'Electrical services for barns, wells, shops, and acreage properties, including trenching, outdoor power, and equipment circuits for Texas Hill Country ranches and rural sites.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Panel & Service Upgrades',
              description:
                'Panel upgrades and replacements, new circuits, subpanels, surge protection, and load calculations for homes, businesses, and rural properties.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Lighting Design & Installation',
              description:
                'Interior, exterior, landscape, and security lighting design and installation to improve safety, efficiency, and curb appeal.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Electrical Troubleshooting & Repairs',
              description:
                'Diagnostics and repairs for tripped breakers, flickering lights, dead outlets, and other electrical problems in residential, commercial, and rural settings.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Safety Inspections & Code Compliance',
              description:
                'Electrical safety inspections, code compliance assessments, insurance and safety reports, and pre-purchase electrical evaluations.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Smart Home & Controls',
              description:
                'Smart switches, dimmers, thermostats, sensors, and control solutions to add comfort, convenience, and energy savings to modern homes.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '24/7 Emergency Electrical Service',
              description:
                'Emergency response for power loss, overheated panels, storm damage, and other urgent electrical hazards, with make-safe repairs and follow-up service.',
            },
          },
        ],
      },
    };

    this.seo.setJsonLd('json-ld-services-provolt', jsonLdObject);
  }
}
