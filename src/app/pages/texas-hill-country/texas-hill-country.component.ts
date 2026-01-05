import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

import {
  TOWN_CONFIGS,
  TownPageConfig,
} from 'src/app/shared/configs/town-page.config';
import { SeoService } from 'src/app/shared/services/seo.service';
import { Router, RouterModule } from '@angular/router';

interface TownCard {
  key: string;
  name: string;
  label: string;
  urlSlug?: string;
  primaryAreas: string[];
}

@Component({
  selector: 'app-texas-hill-country',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    RouterModule,
  ],
  templateUrl: './texas-hill-country.component.html',
  styleUrls: ['./texas-hill-country.component.scss'],
})
export class TexasHillCountryComponent implements OnInit {
  regionLabel = 'Texas Hill Country';
  towns: TownCard[] = [];
  phoneNumber = '830-000-0000'; // TODO: replace with real number

  private readonly pageUrl =
    'https://provoltelectricalservices.com/service-areas/texas-hill-country-electrician';

  // TODO: point to a real OG image for this landing page
  private readonly ogImage =
    'https://provoltelectricalservices.com/assets/og-default.jpg';

  constructor(private seo: SeoService, private router: Router) {}

  ngOnInit(): void {
    this.buildTownCards();
    this.setupSeo();
  }

  private buildTownCards(): void {
    const entries = Object.entries(TOWN_CONFIGS) as [string, TownPageConfig][];

    const sortedEntries = entries.sort(([, aCfg], [, bCfg]) =>
      aCfg.townName.localeCompare(bCfg.townName, undefined, {
        sensitivity: 'base',
      })
    );

    this.towns = sortedEntries.map(([key, cfg]) => ({
      key,
      name: cfg.townName,
      label: `${cfg.townName}, ${cfg.stateAbbr}`,
      urlSlug: cfg.urlSlug,
      primaryAreas: cfg.areasServed.slice(0, 3),
    }));
  }

  private setupSeo(): void {
    const metaTitle = 'Texas Hill Country Electrician | ProVolt Electric';
    const metaDescription =
      'Licensed master electrician serving Kerrville, Fredericksburg, Boerne, Comfort, Bandera, Ingram, Hunt, Center Point & Helotes with residential, commercial & ranch electrical services.';

    this.seo.setMetaTags({
      title: metaTitle,
      description: metaDescription,
      url: this.pageUrl,
      image: this.ogImage,
      type: 'website',
      robots: 'index,follow',
    });

    // Build areaServed from config (falling back to your explicit list)
    const areaServedPlaces = Object.values(TOWN_CONFIGS).map((cfg) => ({
      '@type': 'Place',
      name: `${cfg.townName}, ${cfg.stateAbbr}`,
    })) || [
      { '@type': 'Place', name: 'Kerrville, TX' },
      { '@type': 'Place', name: 'Ingram, TX' },
      { '@type': 'Place', name: 'Hunt, TX' },
      { '@type': 'Place', name: 'Comfort, TX' },
      { '@type': 'Place', name: 'Fredericksburg, TX' },
      { '@type': 'Place', name: 'Boerne, TX' },
      { '@type': 'Place', name: 'Bandera, TX' },
      { '@type': 'Place', name: 'Center Point, TX' },
      { '@type': 'Place', name: 'Helotes, TX' },
    ];

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Electrician',
      '@id': `${this.pageUrl}#electrician`,
      name: 'ProVolt Electric',
      alternateName: 'ProVolt Electrical Services',
      url: this.pageUrl,
      description:
        'ProVolt Electric is a licensed master electrician providing residential, commercial, and ranch electrical work throughout the Texas Hill Country.',
      telephone: '+1-830-000-0000', // TODO: replace with real E.164 phone
      image: this.ogImage,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
      areaServed: areaServedPlaces,
      serviceType: [
        'Residential electrical services',
        'Commercial electrical services',
        'Industrial and ranch property electrical',
        'Electrical panel upgrades',
        'Lighting installation and retrofits',
        'Generator and backup power systems',
        'Energy audits and efficiency upgrades',
        'Electrical for renovations and new builds',
      ],
    };

    this.seo.setJsonLd('json-ld-hill-country-service-area', jsonLd);
  }

  onTownClick(town: TownCard): void {
    if (town.urlSlug) {
      this.router.navigate([town.urlSlug]).then(() => {
        window.scrollTo(0, 0);
      });
    }
  }

  onCallNow(): void {
    window.location.href = `tel:${this.phoneNumber}`;
  }
}
