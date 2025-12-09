import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

// ⬇️ Update this path to wherever your SeoService is defined
import { SeoService } from 'src/app/shared/services/seo.service';

interface ServiceItem {
  title: string;
  category: 'Residential' | 'Commercial' | 'Both';
  icon: string;
  description: string;
  bullets: string[];
}

@Component({
  selector: 'app-services-overview',
  standalone: true,
  templateUrl: './services-overview.component.html',
  styleUrls: ['./services-overview.component.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
})
export class ServicesOverviewComponent implements OnInit {
  services: ServiceItem[] = [
    {
      title: 'Home Electrical',
      category: 'Residential',
      icon: 'home',
      description:
        'From panel upgrades and lighting installation to whole-home rewiring, we keep your home safe, efficient, and up to code.',
      bullets: [
        'Troubleshooting & diagnostics',
        'Repairs & safety corrections',
        'New construction & remodel wiring',
        'GFCI/AFCI protection & code updates',
      ],
    },
    {
      title: 'Business Solutions',
      category: 'Commercial',
      icon: 'apartment',
      description:
        'Reliable electrical services to keep your business running safely and efficiently with minimal downtime.',
      bullets: [
        'Tenant build-outs & improvements',
        'Code compliance upgrades',
        'Lighting retrofits & controls',
        'Emergency & scheduled repairs',
      ],
    },
    {
      title: 'Service Upgrades',
      category: 'Both',
      icon: 'electrical_services',
      description:
        'Modernize your electrical system for today’s loads and tomorrow’s needs, always following NEC standards.',
      bullets: [
        'Panel upgrades & replacements',
        'New circuits & subpanels',
        'Whole-home surge protection',
        'Load calculations & capacity planning',
      ],
    },
    {
      title: 'Lighting Design',
      category: 'Both',
      icon: 'lightbulb',
      description:
        'Custom lighting solutions that enhance comfort, security, and efficiency—inside and out.',
      bullets: [
        'LED upgrades & dimming solutions',
        'Landscape & architectural lighting',
        'Security & motion lighting',
        'Garage, shop, and barn lighting',
      ],
    },
    {
      title: 'EV Charging Stations',
      category: 'Both',
      icon: 'ev_station',
      description:
        'Safe, code-compliant EV charging solutions for homes, fleets, and commercial properties.',
      bullets: [
        'Level 2 home chargers',
        'Commercial charging stations',
        'Panel & load verification',
        'Permits and inspections handled',
      ],
    },
    {
      title: 'Generators & Backup Power',
      category: 'Both',
      icon: 'power',
      description:
        'Keep the lights on during Texas storms and outages with properly sized backup power solutions.',
      bullets: [
        'Whole-home standby generators',
        'Manual & automatic transfer switches',
        'Portable generator hookups',
        'Maintenance & testing',
      ],
    },
    {
      title: 'Safety Inspections',
      category: 'Both',
      icon: 'verified',
      description:
        'Comprehensive electrical safety inspections to protect your family, property, or business.',
      bullets: [
        'Pre-purchase home inspections',
        'Code compliance assessments',
        'Insurance & safety reports',
        'Thermal checks for hot spots',
      ],
    },
    {
      title: 'Smart Home & Controls',
      category: 'Residential',
      icon: 'devices',
      description:
        'Integrate smart technology for comfort, convenience, and energy savings throughout your home.',
      bullets: [
        'Smart switches & dimmers',
        'Smart thermostats & sensors',
        'Wi-Fi/mesh enabled panels',
        'Whole-home automation prep',
      ],
    },
    {
      title: 'Agricultural & Rural Power',
      category: 'Commercial',
      icon: 'agriculture',
      description:
        'Dependable power solutions for barns, wells, shops, and rural properties across the Hill Country.',
      bullets: [
        'Barn & outbuilding wiring',
        'Well & pump circuits',
        'Equipment circuits & receptacles',
        'Outdoor power distribution',
      ],
    },
    {
      title: '24/7 Emergency Service',
      category: 'Both',
      icon: 'warning',
      description:
        'When something goes wrong, our licensed electricians are ready to respond and restore power safely.',
      bullets: [
        'Power loss & tripped breakers',
        'Burning smells or sparking outlets',
        'Storm, flood, or lightning damage',
        'Make-safe repairs & follow-up service',
      ],
    },
  ];

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.setupSeo();
    this.setupJsonLd();
  }

  private setupSeo(): void {
    this.seo.setMetaTags({
      title:
        'Electrical Services | Residential, Commercial & Industrial | ProVolt Electric',
      description:
        'Explore ProVolt Electric’s full range of electrical services in Kerrville, Fredericksburg, and the Texas Hill Country, including panel upgrades, lighting design, EV chargers, generators, safety inspections, and 24/7 emergency service for residential, commercial, and industrial clients.',
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
        'Residential, Commercial & Industrial Electrical Services (Repairs, Upgrades, New Construction)',
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
              name: 'Home Electrical',
              description:
                'Panel upgrades, lighting installation, whole-home rewiring, and troubleshooting for residential customers.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Business Electrical Solutions',
              description:
                'Commercial electrical work, tenant build-outs, code compliance upgrades, and lighting retrofits.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Service Upgrades & Panel Replacements',
              description:
                'Panel upgrades, new circuits, subpanels, surge protection, and capacity planning.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Lighting Design & LED Retrofits',
              description:
                'Interior, exterior, landscape, and security lighting design and installation.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'EV Charging Installation',
              description:
                'Level 2 EV chargers for homes and commercial properties, including panel verification and permits.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Generators & Backup Power',
              description:
                'Standby generators, transfer switches, and backup power solutions for homes and businesses.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Electrical Safety Inspections',
              description:
                'Code compliance checks, insurance and safety reports, and pre-purchase electrical inspections.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Smart Home & Controls',
              description:
                'Smart switches, dimmers, thermostats, and control systems for connected homes.',
            },
          },
        ],
      },
    };

    this.seo.setJsonLd('json-ld-services-provolt', jsonLdObject);
  }
}
