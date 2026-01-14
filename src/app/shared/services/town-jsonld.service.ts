import { Injectable } from '@angular/core';
import { TownPageConfig } from 'src/app/shared/configs/town-page.config';
import { SitePaths } from '../configs/site-urls.config';

export type LatLng = { latitude: number; longitude: number };

export interface TownServiceAreaJsonLdInput {
  baseUrl: string; // https://provoltelectricalservices.com
  cfg: TownPageConfig;
  pageTitle: string;
  pageDescription: string;
  /** Optional. If you don’t have accurate coordinates per town, omit this. */
  geo?: LatLng;

  /** Optional: service-areas hub path if you have one */
  serviceAreasHubPath?: string; // default '/service-areas'

  /** Include FAQPage if cfg.faqs exists */
  includeFaq?: boolean;
}

@Injectable({ providedIn: 'root' })
export class TownJsonLdService {
  buildServiceAreaJsonLd(input: TownServiceAreaJsonLdInput): unknown {
    const {
      baseUrl,
      cfg,
      pageTitle,
      pageDescription,
      geo,
      // @ nathaniel validate this path in the view source code
      serviceAreasHubPath = '/' +
        SitePaths.serviceAreas +
        '/' +
        SitePaths.texasHillCountryElectrician,
      includeFaq = true,
    } = input;

    const pageUrl = `${baseUrl}${cfg.urlSlug}`;
    const townName = cfg.townName;
    const stateAbbr = cfg.stateAbbr;

    const cityId = `${pageUrl}#city`;
    const serviceId = `${pageUrl}#service`;

    const significantLinks = this.uniq([
      `${baseUrl}/electrical-services`,
      cfg.residentialLink ? `${baseUrl}${cfg.residentialLink}` : undefined,
      cfg.commercialLink ? `${baseUrl}${cfg.commercialLink}` : undefined,
      cfg.ranchLink ? `${baseUrl}${cfg.ranchLink}` : undefined,
      `${baseUrl}/contact-us`,
    ]);

    const graph: any[] = [
      // 1) Service-area page node
      {
        '@type': 'ServicePage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: pageTitle,
        description: pageDescription,
        inLanguage: 'en-US',
        isPartOf: { '@id': `${baseUrl}/#website` },
        about: { '@id': `${baseUrl}/#business` },
        mainEntity: { '@id': serviceId },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
        significantLink: significantLinks,
      },

      // 2) Breadcrumbs
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Service Areas',
            item: `${baseUrl}${serviceAreasHubPath}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `${townName}, ${stateAbbr}`,
            item: pageUrl,
          },
        ],
      },

      // 3) City node
      {
        '@type': 'City',
        '@id': cityId,
        name: `${townName}, ${stateAbbr}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: townName,
          addressRegion: stateAbbr,
          addressCountry: 'US',
        },
        ...(geo
          ? {
              geo: {
                '@type': 'GeoCoordinates',
                latitude: geo.latitude,
                longitude: geo.longitude,
              },
            }
          : {}),
      },

      // 4) The “service in this town” node
      {
        '@type': 'Service',
        '@id': serviceId,
        name: `Electrician Services in ${townName}, ${stateAbbr}`,
        serviceType: [
          ...(cfg.heroBullets || []),
          'Residential electrical services',
          'Commercial electrical services',
          'Ranch & rural electrical services',
        ].join('; '),
        provider: { '@id': `${baseUrl}/#business` },
        areaServed: { '@id': cityId },

        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          '@id': `${pageUrl}#catalog`,
          name: `Electrical Services in ${townName}, ${stateAbbr}`,
          itemListElement: [
            {
              '@type': 'OfferCatalog',
              name: cfg.residentialHeading || 'Residential Electrical Services',
              itemListElement: (cfg.residentialServices || []).map((s) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: s.label,
                  provider: { '@id': `${baseUrl}/#business` },
                  areaServed: { '@id': cityId },
                },
              })),
            },
            {
              '@type': 'OfferCatalog',
              name: cfg.commercialHeading || 'Commercial Electrical Services',
              itemListElement: (cfg.commercialServices || []).map((s) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: s.label,
                  provider: { '@id': `${baseUrl}/#business` },
                  areaServed: { '@id': cityId },
                },
              })),
            },
            {
              '@type': 'OfferCatalog',
              name: cfg.ranchHeading || 'Ranch & Rural Electrical Services',
              itemListElement: (cfg.ranchServices || []).map((s) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: s.label,
                  provider: { '@id': `${baseUrl}/#business` },
                  areaServed: { '@id': cityId },
                },
              })),
            },
          ],
        },

        potentialAction: {
          '@type': 'ContactAction',
          target: `${baseUrl}/contact-us`,
        },
      },
    ];

    if (includeFaq && (cfg.faqs?.length ?? 0) > 0) {
      graph.push({
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: cfg.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      });
    }

    return {
      '@context': 'https://schema.org',
      '@graph': graph,
    };
  }

  private uniq(arr: (string | undefined | null)[]): string[] {
    const set = new Set<string>();
    for (const v of arr) if (v) set.add(v);
    return Array.from(set);
  }
}
