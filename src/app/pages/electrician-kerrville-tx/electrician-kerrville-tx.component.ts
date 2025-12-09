import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { SeoService } from 'src/app/shared/services/seo.service';
import {
  TownPageComponent,
  TownPageConfig,
} from 'src/app/shared/components/town-page/town-page.component';

interface ServiceItem {
  label: string;
  icon: string;
}

@Component({
  selector: 'app-electrician-kerrville-tx',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    TownPageComponent,
  ],
  templateUrl: './electrician-kerrville-tx.component.html',
  styleUrls: ['./electrician-kerrville-tx.component.scss'],
})
export class ElectricianKerrvilleTxComponent implements OnInit {
  private baseUrl =
    'https://provoltelectricalservices.com/electrician-kerrville-tx';

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

  config: TownPageConfig = {
    townName: 'Kerrville',
    stateAbbr: 'TX',
    regionLabel: 'Texas Hill Country',
    phoneNumber: '(830) 000-0000',
    heroBullets: [
      'Master electrician with Hill Country experience',
      'Fast, reliable troubleshooting and repairs',
      'Code-compliant work that protects your property',
    ],
    residentialServices: this.residentialServices,
    commercialServices: [
      { label: 'Ranch & shop wiring', icon: 'agriculture' },
      {
        label: 'Dedicated equipment circuits',
        icon: 'precision_manufacturing',
      },
      { label: 'Parking & security lighting', icon: 'outdoor_grill' },
      { label: 'Panel & service upgrades', icon: 'settings_input_component' },
      { label: 'Emergency & maintenance service', icon: 'build' },
    ],
    energyServices: [
      { label: 'Energy audits', icon: 'analytics' },
      { label: 'LED & efficiency upgrades', icon: 'light_mode' },
      { label: 'Load calculations', icon: 'calculate' },
      { label: 'New build & remodel consultations', icon: 'architecture' },
      { label: 'Solar-ready electrical prep', icon: 'solar_power' },
    ],
    areasServed: [
      'Kerrville',
      'Ingram',
      'Hunt',
      'Center Point',
      'Comfort',
      'Bandera',
      'Fredericksburg',
      'Boerne',
      'Helotes',
    ],
    seo: {
      metaTitle:
        'Electrician Kerrville TX | Residential & Commercial Electrical',
      metaDescription:
        'Trusted electrician in Kerrville, TX for repairs, upgrades, lighting, panels, ranch wiring & more. Licensed, insured, and local to the Hill Country.',
      pageUrl: this.baseUrl,
      ogImage:
        'https://provoltelectricalservices.com/path-to-featured-kerrville-image.jpg',
      jsonLdId: 'json-ld-kerrville',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Electrician',
        '@id': `${this.baseUrl}#electrician`,
        name: 'ProVolt Electrical Services',
        url: this.baseUrl,
        description:
          'ProVolt Electrical Services provides residential, commercial, and ranch electrical work in Kerrville, TX and the surrounding Texas Hill Country.',
        telephone: '+1-830-000-0000',
        image:
          'https://provoltelectricalservices.com/path-to-featured-kerrville-image.jpg',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kerrville',
          addressRegion: 'TX',
          addressCountry: 'US',
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
      },
    },
  };

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    // this.setupSeo();
  }
}
