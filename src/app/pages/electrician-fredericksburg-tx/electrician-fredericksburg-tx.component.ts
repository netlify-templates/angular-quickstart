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
  selector: 'app-electrician-fredericksburg-tx',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
  ],
  templateUrl: './electrician-fredericksburg-tx.component.html',
  styleUrls: ['./electrician-fredericksburg-tx.component.scss'],
})
export class ElectricianFredericksburgTxComponent implements OnInit {
  // TODO: replace with your real phone number
  phoneNumber = '(830) 000-0000';

  readonly pageUrl =
    'https://provoltelectricalservices.com/electrician-fredericksburg-tx';
  readonly ogImage =
    'https://provoltelectricalservices.com/path-to-featured-fredericksburg-image.jpg'; // TODO: update or remove

  residentialServices: ServiceItem[] = [
    { label: 'Troubleshooting & repairs', icon: 'bolt' },
    { label: 'Breaker & panel upgrades', icon: 'electrical_services' },
    { label: 'Indoor & outdoor lighting', icon: 'lightbulb' },
    { label: 'Rewiring & code corrections', icon: 'rule' },
    { label: 'Whole-home surge protection', icon: 'offline_bolt' },
    { label: 'Ceiling fans & switches', icon: 'toys' },
  ];

  commercialRanchServices: ServiceItem[] = [
    { label: 'Winery & tasting room electrical', icon: 'wine_bar' },
    { label: 'Ranch & shop wiring', icon: 'agriculture' },
    { label: 'Commercial lighting & signage', icon: 'storefront' },
    { label: 'Panel & service upgrades', icon: 'settings_input_component' },
    { label: 'Maintenance & repair service', icon: 'build' },
  ];

  energyServices: ServiceItem[] = [
    { label: 'Energy audits', icon: 'analytics' },
    { label: 'LED & efficiency upgrades', icon: 'light_mode' },
    { label: 'Load calculations', icon: 'calculate' },
    { label: 'New build & remodel consultations', icon: 'architecture' },
    { label: 'Solar-ready electrical prep', icon: 'solar_power' },
  ];

  areasServed: string[] = [
    'Fredericksburg',
    'Kerrville',
    'Comfort',
    'Boerne',
    'Bandera',
    'Ingram',
    'Hunt',
    'Center Point',
    'Helotes',
  ];

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.setupSeo();
  }

  private setupSeo(): void {
    const metaTitle =
      'Electrician Fredericksburg TX | Residential & Winery Electrical';
    const metaDescription =
      'Licensed electrician in Fredericksburg, TX for lighting, rewiring, panel upgrades, wineries & ranch properties. Trusted Hill Country electrical service.';

    this.seo.setMetaTags({
      title: metaTitle,
      description: metaDescription,
      url: this.pageUrl,
      image: this.ogImage,
      type: 'website',
      robots: 'index,follow',
    });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Electrician',
      '@id': `${this.pageUrl}#electrician`,
      name: 'ProVolt Electrical Services',
      url: this.pageUrl,
      description:
        'ProVolt Electrical Services provides residential, commercial, ranch, and winery electrical work in Fredericksburg, TX and the surrounding Texas Hill Country.',
      telephone: '+1-830-000-0000', // TODO: real phone
      image: this.ogImage,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Fredericksburg',
        addressRegion: 'TX',
        addressCountry: 'US',
        // streetAddress: '123 Your Street' // optional
      },
      areaServed: {
        '@type': 'Place',
        name: 'Fredericksburg, TX',
      },
      serviceType: [
        'Residential electrical services',
        'Commercial electrical services',
        'Winery electrical services',
        'Ranch and rural property electrical',
        'Electrical panel upgrades',
        'Lighting and chandelier installation',
        'Electrical troubleshooting and repairs',
        'Energy audits and LED retrofits',
        'Electrical consultations for renovations and new builds',
      ],
    };

    this.seo.setJsonLd('json-ld-fredericksburg', jsonLd);
  }

  onCallClick(): void {
    const digits = this.phoneNumber.replace(/[^0-9]/g, '');
    if (digits) {
      window.location.href = `tel:${digits}`;
    }
  }

  onRequestQuote(): void {
    // TODO: hook into router/contact form
    // e.g. this.router.navigate(['/contact']);
  }
}
