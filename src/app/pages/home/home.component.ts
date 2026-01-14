import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSectionSmallComponent } from 'src/app/shared/components/about-section-small/about-section-small.component';
import { AreasWeServeComponent } from 'src/app/shared/components/areas-we-serve/areas-we-serve.component';
import { ElectricalServiceCardsComponent } from 'src/app/shared/components/electrical-service-cards/electrical-service-cards.component';
import { OurServicesProcedureComponent } from 'src/app/shared/components/our-services-procedure/our-services-procedure.component';
import { WhyChooseUsComponent } from 'src/app/shared/components/why-choose-us/why-choose-us.component';
import { ActionBannerComponent } from 'src/app/shared/components/action-banner/action-banner.component';
import { SeoService } from 'src/app/shared/services/seo.service';
import { FullSitePaths } from 'src/app/shared/configs/site-urls.config';
import { SiteData } from 'src/app/shared/configs/site-data.config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ActionBannerComponent,
    ElectricalServiceCardsComponent,
    WhyChooseUsComponent,
    AboutSectionSmallComponent,
    OurServicesProcedureComponent,
    AreasWeServeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.setupSeo();
    this.setupJsonLd();
  }

  private setupSeo(): void {
    const pageUrl = FullSitePaths.home;

    this.seo.setMetaTags({
      title:
        'Master Electrician in Kerrville, TX | ProVolt Electrical Services',
      description:
        'Licensed, insured master electrician based in Kerrville serving the Texas Hill Country. Residential, commercial, and ranch & rural electrical work with clean installs and code-compliant results.',
      canonicalUrl: pageUrl,
      uniquePageImage: SiteData.homepageImageUrl,
      type: 'website',
      robots: 'index,follow',
    });
  }

  private setupJsonLd(): void {
    const baseUrl = SiteData.baseUrl;
    const pageUrl = FullSitePaths.home;

    const pageName =
      'ProVolt Electrical Services | Master Electrician in Kerrville, TX';
    const pageDescription =
      'Licensed, insured master electrician based in Kerrville serving homes, ranches, and businesses across the Texas Hill Country.';

    // Hard-coded list of the towns visibly shown on the homepage card (plus hub link)
    const nearbyServiceAreas = [
      {
        name: 'Boerne, TX',
        url: `${baseUrl}/service-areas/boerne-tx-electrician`,
      },
      {
        name: 'Comfort, TX',
        url: `${baseUrl}/service-areas/comfort-tx-electrician`,
      },
      {
        name: 'Fredericksburg, TX',
        url: `${baseUrl}/service-areas/fredericksburg-tx-electrician`,
      },
      {
        name: 'Helotes, TX',
        url: `${baseUrl}/service-areas/helotes-tx-electrician`,
      },
      {
        name: 'Ingram, TX',
        url: `${baseUrl}/service-areas/ingram-tx-electrician`,
      },
      {
        name: 'Kerrville, TX',
        url: `${baseUrl}/service-areas/kerrville-tx-electrician`,
      },
      // CTA to the full hub page (NOT a "City" — it's a navigational item)
      {
        name: 'View all Texas Hill Country service areas (9)',
        url: `${baseUrl}/service-areas/texas-hill-country-electrician`,
      },
    ];

    const pageJsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        // 1) WebPage (Homepage)
        {
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
          url: pageUrl,
          name: pageName,
          description: pageDescription,
          inLanguage: 'en-US',
          isPartOf: { '@id': `${baseUrl}/#website` },
          about: { '@id': `${baseUrl}/#business` },
          publisher: { '@id': `${baseUrl}/#business` },
          primaryImageOfPage: { '@id': `${baseUrl}/#primaryimage` }, // reuse global image entity
          mainEntity: { '@id': `${baseUrl}/#business` },
          breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
          significantLink: [
            `${baseUrl}/electrical-services`,
            `${baseUrl}/electrical-services/residential-electrician`,
            `${baseUrl}/electrical-services/commercial-electrician`,
            `${baseUrl}/electrical-services/ranch-rural-electrician`,
            `${baseUrl}/service-areas/texas-hill-country-electrician`,
            `${baseUrl}/contact-us`,
          ],
        },

        // 2) BreadcrumbList
        {
          '@type': 'BreadcrumbList',
          '@id': `${pageUrl}#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: pageUrl },
          ],
        },

        // 3) Nearby Service Areas (what’s visible on this page)
        {
          '@type': 'ItemList',
          '@id': `${pageUrl}#nearby-service-areas`,
          name: 'Nearby Service Areas',
          itemListOrder: 'https://schema.org/ItemListOrderAscending',
          numberOfItems: nearbyServiceAreas.length,
          itemListElement: nearbyServiceAreas.map((a, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: a.name,
            item: a.url,
          })),
        },
      ],
    };

    this.seo.setPageJsonLd(pageJsonLd);
  }
}
