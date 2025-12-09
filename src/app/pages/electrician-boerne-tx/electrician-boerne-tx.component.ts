import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { SeoService } from 'src/app/shared/services/seo.service';

interface ServiceItem {
  label: string;
  icon: string;
}

@Component({
  selector: 'app-electrician-boerne-tx',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
  ],
  templateUrl: './electrician-boerne-tx.component.html',
  styleUrls: ['./electrician-boerne-tx.component.scss'],
})
export class ElectricianBoerneTxComponent implements OnInit {
  // TODO: replace with your real phone number
  phoneNumber = '(830) 000-0000';

  readonly pageUrl =
    'https://provoltelectricalservices.com/electrician-kerrville-tx';
  readonly ogImage =
    'https://provoltelectricalservices.com/path-to-featured-kerrville-image.jpg'; // TODO: update or remove

  residentialServices: ServiceItem[] = [
    { label: 'Troubleshooting & repairs', icon: 'bolt' },
    { label: 'Breaker & panel upgrades', icon: 'electrical_services' },
    { label: 'Indoor & outdoor lighting', icon: 'lightbulb' },
    { label: 'Rewiring & code corrections', icon: 'rule' },
    { label: 'Whole-home surge protection', icon: 'offline_bolt' },
    { label: 'Ceiling fans & switches', icon: 'toys' },
  ];

  commercialRanchServices: ServiceItem[] = [
    { label: 'Ranch & shop wiring', icon: 'agriculture' },
    { label: 'Dedicated equipment circuits', icon: 'precision_manufacturing' },
    { label: 'Parking & security lighting', icon: 'outdoor_grill' },
    { label: 'Panel & service upgrades', icon: 'settings_input_component' },
    { label: 'Emergency & maintenance service', icon: 'build' },
  ];

  energyServices: ServiceItem[] = [
    { label: 'Energy audits', icon: 'analytics' },
    { label: 'LED & efficiency upgrades', icon: 'light_mode' },
    { label: 'Load calculations', icon: 'calculate' },
    { label: 'New build & remodel consultations', icon: 'architecture' },
    { label: 'Solar-ready electrical prep', icon: 'solar_power' },
  ];

  areasServed: string[] = [
    'Kerrville',
    'Ingram',
    'Hunt',
    'Center Point',
    'Comfort',
    'Bandera',
    'Fredericksburg',
    'Boerne',
    'Helotes',
  ];

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.setupSeo();
  }

  private setupSeo(): void {
    // 1) Meta / Title stuff
    const metaTitle =
      'Electrician Kerrville TX | Residential & Commercial Electrical';
    const metaDescription =
      'Trusted electrician in Kerrville, TX for repairs, upgrades, lighting, panels, ranch wiring & more. Licensed, insured, and local to the Hill Country.';

    this.seo.setMetaTags({
      title: metaTitle,
      description: metaDescription,
      url: this.pageUrl,
      image: this.ogImage,
      type: 'website',
      robots: 'index,follow',
    });

    // 2) JSON-LD for this route
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Electrician',
      '@id': `${this.pageUrl}#electrician`,
      name: 'ProVolt Electrical Services',
      url: this.pageUrl,
      description:
        'ProVolt Electrical Services provides residential, commercial, and ranch electrical work in Kerrville, TX and the surrounding Texas Hill Country.',
      telephone: '+1-830-000-0000', // TODO: replace with real phone
      image: this.ogImage,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kerrville',
        addressRegion: 'TX',
        addressCountry: 'US',
        // streetAddress: '123 Your Street' // optional
      },
      areaServed: {
        '@type': 'Place',
        name: 'Kerrville, TX',
      },
      serviceType: [
        'Residential electrical services',
        'Commercial electrical services',
        'Ranch and rural property electrical',
        'Electrical panel upgrades',
        'Lighting installation',
        'Electrical troubleshooting and repairs',
        'Generator and backup power systems',
        'Energy audits and efficiency upgrades',
        'Electrical consultations for renovations and new builds',
      ],
    };

    this.seo.setJsonLd('json-ld-kerrville', jsonLd);
  }

  // Click handlers

  onCallClick(): void {
    const digits = this.phoneNumber.replace(/[^0-9]/g, '');
    if (digits) {
      window.location.href = `tel:${digits}`;
    }
  }

  onRequestQuote(): void {
    // TODO: hook this into your router/contact form
    // e.g. this.router.navigate(['/contact']);
  }
}
