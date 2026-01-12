import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { SeoService } from 'src/app/shared/services/seo.service';
import {
  TownPageConfig,
  TOWN_CONFIGS,
} from 'src/app/shared/configs/town-page.config';
import { TownPageComponent } from 'src/app/shared/components/town-page/town-page.component';
import { SiteData } from 'src/app/shared/configs/site-data.config';
import { FullSitePaths } from 'src/app/shared/configs/site-urls.config';

interface ServiceItem {
  label: string;
  icon: string;
}

@Component({
  selector: 'app-electrician-hunt-tx',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    TownPageComponent,
  ],
  templateUrl: './electrician-hunt-tx.component.html',
  styleUrls: ['./electrician-hunt-tx.component.scss'],
})
export class ElectricianHuntTxComponent implements OnInit {
  baseUrl = SiteData.baseUrl;
  pageUrl = FullSitePaths.huntTxElectrician;
  ogImageUrl = SiteData.homepageImageUrl;
  config: TownPageConfig = TOWN_CONFIGS['hunt'];

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    // this.setupSeo();
    // this.setupJsonLd();
  }

  // private setupSeo(): void {
  //   this.seo.setMetaTags({
  //     title:
  //       'Electrician in Hunt, TX | Outdoor Power, Panels, Lighting & Rural Wiring',
  //     description:
  //       'Electrician in Hunt, TX for outdoor outlets/GFCI, lighting, panel upgrades, surge protection, and long-run circuits to outbuildings. ProVolt Electrical Services—licensed and insured.',
  //     canonicalUrl: this.pageUrl,
  //     // image: seoConfig.ogImage,
  //     type: 'website',
  //     robots: 'index,follow',
  //   });
  // }

  // private setupJsonLd(): void {
  //   const baseUrl = this.SiteData.baseUrl; // https://provoltelectricalservices.com
  //   const cfg = this.config;

  //   const pageUrl = `${baseUrl}${cfg.urlSlug}`; // ✅ /service-areas/hunt-tx-electrician

  //   const townName = cfg.townName; // Hunt
  //   const stateAbbr = cfg.stateAbbr; // TX

  //   // Use your SEO title/description (or cfg hero text) consistently
  //   const pageTitle = `Electrician in ${townName}, ${stateAbbr} | Panel Upgrades, Repairs & Lighting`;

  //   const pageDescription =
  //     cfg.heroSubtitle ||
  //     `Licensed electrician in ${townName}, ${stateAbbr} for troubleshooting, panel upgrades, surge protection, lighting, and ranch/shop wiring.`;

  //   // Optional but consistent with your global Kerrville geo
  //   const kerrvilleLat = 30.0474;
  //   const kerrvilleLng = -99.1403;

  //   const cityId = `${pageUrl}#city`;
  //   const serviceId = `${pageUrl}#service`;

  //   // Helpful internal links on the page
  //   const significantLinks = [
  //     `${baseUrl}/electrical-services`,
  //     `${baseUrl}/electrical-services/residential-electrician`,
  //     `${baseUrl}${cfg.commercialLink}`, // e.g. /electrical-services/commercial-electrician
  //     `${baseUrl}${cfg.ranchLink}`, // e.g. /electrical-services/ranch-electrician (confirm this route exists)
  //     `${baseUrl}/contact-us`,
  //   ];

  //   const pageJsonLd = {
  //     '@context': 'https://schema.org',
  //     '@graph': [
  //       // 1) Page entity
  //       {
  //         '@type': 'ServicePage',
  //         '@id': `${pageUrl}#webpage`,
  //         url: pageUrl,
  //         name: pageTitle,
  //         description: pageDescription,
  //         inLanguage: 'en-US',

  //         isPartOf: { '@id': `${baseUrl}/#website` },
  //         about: { '@id': `${baseUrl}/#business` },
  //         mainEntity: { '@id': serviceId },

  //         breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
  //         significantLink: significantLinks,
  //       },

  //       // 2) Breadcrumbs
  //       {
  //         '@type': 'BreadcrumbList',
  //         '@id': `${pageUrl}#breadcrumb`,
  //         itemListElement: [
  //           { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
  //           {
  //             '@type': 'ListItem',
  //             position: 2,
  //             name: 'Service Areas',
  //             item: `${baseUrl}/service-areas`,
  //           },
  //           {
  //             '@type': 'ListItem',
  //             position: 3,
  //             name: `${townName}, ${stateAbbr}`,
  //             item: pageUrl,
  //           },
  //         ],
  //       },

  //       // 3) City / place node
  //       {
  //         '@type': 'City',
  //         '@id': cityId,
  //         name: `${townName}, ${stateAbbr}`,
  //         address: {
  //           '@type': 'PostalAddress',
  //           addressLocality: townName,
  //           addressRegion: stateAbbr,
  //           addressCountry: 'US',
  //         },
  //         geo: {
  //           '@type': 'GeoCoordinates',
  //           latitude: kerrvilleLat,
  //           longitude: kerrvilleLng,
  //         },
  //       },

  //       // 4) Main service entity for this location page
  //       {
  //         '@type': 'Service',
  //         '@id': serviceId,
  //         name: `Electrician Services in ${townName}, ${stateAbbr}`,
  //         serviceType: [
  //           ...cfg.heroBullets,
  //           // You can also add a few “category” service types:
  //           'Residential electrical services',
  //           'Commercial electrical services',
  //           'Ranch & rural electrical services',
  //         ].join('; '),

  //         provider: { '@id': `${baseUrl}/#business` },
  //         areaServed: { '@id': cityId },

  //         hasOfferCatalog: {
  //           '@type': 'OfferCatalog',
  //           '@id': `${pageUrl}#catalog`,
  //           name: `Electrical Services in ${townName}, ${stateAbbr}`,
  //           itemListElement: [
  //             // Residential catalog
  //             {
  //               '@type': 'OfferCatalog',
  //               name: cfg.residentialHeading,
  //               itemListElement: (cfg.residentialServices || []).map((s) => ({
  //                 '@type': 'Offer',
  //                 itemOffered: {
  //                   '@type': 'Service',
  //                   name: s.label,
  //                   provider: { '@id': `${baseUrl}/#business` },
  //                   areaServed: { '@id': cityId },
  //                 },
  //               })),
  //             },

  //             // Commercial catalog
  //             {
  //               '@type': 'OfferCatalog',
  //               name: cfg.commercialHeading,
  //               itemListElement: (cfg.commercialServices || []).map((s) => ({
  //                 '@type': 'Offer',
  //                 itemOffered: {
  //                   '@type': 'Service',
  //                   name: s.label,
  //                   provider: { '@id': `${baseUrl}/#business` },
  //                   areaServed: { '@id': cityId },
  //                 },
  //               })),
  //             },

  //             // Ranch & Rural catalog
  //             {
  //               '@type': 'OfferCatalog',
  //               name: cfg.ranchHeading,
  //               itemListElement: (cfg.ranchServices || []).map((s) => ({
  //                 '@type': 'Offer',
  //                 itemOffered: {
  //                   '@type': 'Service',
  //                   name: s.label,
  //                   provider: { '@id': `${baseUrl}/#business` },
  //                   areaServed: { '@id': cityId },
  //                 },
  //               })),
  //             },
  //           ],
  //         },

  //         potentialAction: {
  //           '@type': 'ContactAction',
  //           target: `${baseUrl}/contact-us`,
  //         },
  //       },

  //       {
  //         '@type': 'FAQPage',
  //         '@id': `${pageUrl}#faq`,
  //         mainEntity: (cfg.faqs || []).map((f) => ({
  //           '@type': 'Question',
  //           name: f.question,
  //           acceptedAnswer: { '@type': 'Answer', text: f.answer },
  //         })),
  //       },
  //     ],
  //   };

  //   this.seo.setPageJsonLd(pageJsonLd);
  // }
}
