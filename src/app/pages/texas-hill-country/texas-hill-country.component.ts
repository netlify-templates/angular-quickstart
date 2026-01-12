import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { SiteData } from 'src/app/shared/configs/site-data.config';
import {
  TOWN_CONFIGS,
  TownPageConfig,
} from 'src/app/shared/configs/town-page.config';
import { SeoService } from 'src/app/shared/services/seo.service';
import { Router, RouterModule } from '@angular/router';
import { FullSitePaths } from 'src/app/shared/configs/site-urls.config';

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
  phoneNumber = SiteData.phoneNumberE164;
  readonly baseUrl = SiteData.baseUrl;
  readonly pageUrl = FullSitePaths.texasHillCountryElectrician;
  private readonly ogImage = SiteData.homepageImageUrl;

  constructor(private seo: SeoService, private router: Router) {}

  ngOnInit(): void {
    this.buildTownCards();
    this.setupSeo();
    this.setupJsonLd();
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
    this.seo.setMetaTags({
      title: 'Texas Hill Country Electrician | ProVolt Electrical Services',
      description:
        'Licensed master electrician serving Kerrville, Fredericksburg, Boerne, Comfort, Bandera, Ingram, Hunt, Center Point & Helotes with residential, commercial & ranch electrical services.',

      canonicalUrl: this.pageUrl,
      uniquePageImage: this.ogImage,
      type: 'website',
      robots: 'index,follow',
    });
  }

  private setupJsonLd(): void {
    // Build ItemList from sorted towns
    const itemListElement = this.towns
      .filter((t) => !!t.urlSlug)
      .map((t, index) => {
        const absoluteUrl = t.urlSlug!.startsWith('http')
          ? t.urlSlug!
          : `${this.baseUrl}${t.urlSlug}`;

        return {
          '@type': 'ListItem',
          position: index + 1,
          name: `${t.name}, TX`,
          item: absoluteUrl,
        };
      });

    const pageJsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          '@id': `${this.pageUrl}#webpage`,
          url: this.pageUrl,
          name: 'Texas Hill Country Service Areas | ProVolt Electrical Services',
          description:
            'Browse ProVolt Electrical Services service areas across the Texas Hill Country, including Kerrville, Fredericksburg, Boerne, Comfort, Bandera, Ingram, Hunt, Center Point, and Helotes.',
          inLanguage: 'en-US',

          isPartOf: { '@id': `${this.baseUrl}/#website` },
          about: { '@id': `${this.baseUrl}/#business` },
          mainEntity: { '@id': `${this.pageUrl}#service-areas` },

          // Optional image association
          primaryImageOfPage: { '@id': `${this.pageUrl}#primaryimage` },

          breadcrumb: { '@id': `${this.pageUrl}#breadcrumb` },
          potentialAction: [
            { '@type': 'ContactAction', target: `tel:${this.phoneNumber}` },
          ],
        },

        // 2) Primary image node
        {
          '@type': 'ImageObject',
          '@id': `${this.pageUrl}#primaryimage`,
          url: this.ogImage,
        },

        // 3) Town list
        {
          '@type': 'ItemList',
          '@id': `${this.pageUrl}#service-areas`,
          name: 'Service Areas in the Texas Hill Country',
          itemListOrder: 'https://schema.org/ItemListOrderAscending',
          numberOfItems: itemListElement.length,
          itemListElement,
        },

        {
          '@type': 'BreadcrumbList',
          '@id': `${this.pageUrl}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: this.baseUrl,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Areas',
              item: this.pageUrl,
            },
          ],
        },
      ],
    };

    this.seo.setPageJsonLd(pageJsonLd);
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
