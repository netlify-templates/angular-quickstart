import { Component, OnInit } from '@angular/core';
import { SeoService } from './shared/services/seo.service';
import { SiteData } from 'src/app/shared/configs/site-data.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(private seo: SeoService) {}
  title = 'PROVOLT';

  baseUrl = SiteData.baseUrl;
  canonicalUrl = SiteData.canonicalUrl;
  ogImageUrl = SiteData.homepageImageUrl;
  // @Nathaniel this has the correct split URls now
  sharedLogoUrl = `${this.baseUrl}/assets/brand/logos/ProVolt-Logo-meta-512-c.png`;

  globalJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // WebSite entity
      {
        '@type': 'WebSite',
        '@id': `${this.baseUrl}/#website`,
        url: this.baseUrl,
        name: SiteData.businessName,
        inLanguage: 'en-US',
      },

      // Local business entity (Electrician)
      {
        '@type': 'Electrician',
        '@id': `${this.baseUrl}/#business`,
        name: 'ProVolt Electrical Services',
        url: this.baseUrl,
        telephone: SiteData.phoneNumberE164,

        // HQ (recommended for LocalBusiness)
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kerrville',
          addressRegion: 'TX',
          postalCode: '78028',
          addressCountry: 'US',
        },

        // How to represent “Texas Hill Country” service coverage
        // Keep geo as your base point, and add a service area field:

        // Use areaServed with a list of cities/counties you cover, or
        // Use a GeoCircle (radius around your base), or
        // Use a GeoShape (polygon) if you have clear boundaries.

        geo: {
          '@type': 'GeoCoordinates',
          latitude: 30.0474,
          longitude: -99.1403,
        },

        logo: {
          '@type': 'ImageObject',
          url: this.sharedLogoUrl,
          width: 512,
          height: 512,
        },
        image: {
          '@type': 'ImageObject',
          url: this.ogImageUrl,
          width: 1200,
          height: 630,
        },
        priceRange: '$$',
        areaServed: [
          {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: 30.0474,
              longitude: -99.1403,
            },
            geoRadius: '60 mi',
          },
          {
            '@type': 'City',
            name: 'Kerrville',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'TX',
              addressCountry: 'US',
            },
          },
          {
            '@type': 'City',
            name: 'Fredericksburg',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'TX',
              addressCountry: 'US',
            },
          },
          {
            '@type': 'City',
            name: 'Boerne',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'TX',
              addressCountry: 'US',
            },
          },
          {
            '@type': 'City',
            name: 'Bandera',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'TX',
              addressCountry: 'US',
            },
          },
          {
            '@type': 'City',
            name: 'Comfort',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'TX',
              addressCountry: 'US',
            },
          },
          {
            '@type': 'City',
            name: 'Ingram',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'TX',
              addressCountry: 'US',
            },
          },
          {
            '@type': 'City',
            name: 'Hunt',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'TX',
              addressCountry: 'US',
            },
          },
          {
            '@type': 'City',
            name: 'Center Point',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'TX',
              addressCountry: 'US',
            },
          },
          {
            '@type': 'City',
            name: 'Helotes',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'TX',
              addressCountry: 'US',
            },
          },
          { '@type': 'Place', name: 'Texas Hill Country' },
        ],

        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: SiteData.phoneNumberE164,
          areaServed: 'US',
          availableLanguage: ['en'],
        },
        sameAs: [
          // Add real profiles: Google Business Profile, Facebook, Instagram, Yelp, BBB, etc.
          // 'https://g.page/r/your-google-profile',
          // 'https://www.facebook.com/yourpage',
          'https://www.yelp.com/biz/provolt-electrical-services-kerrville',
        ],

        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '17:00',
          },
        ],

        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          '@id': `${this.baseUrl}/#services-catalog`,
          name: 'Electrical Services',
          itemListElement: [
            {
              '@type': 'OfferCatalog',
              name: 'Residential Electrical Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: "ProVolt's Residential Electrical Services in the Texas Hill Country",
                    url: `${this.baseUrl}/electrical-services/residential-electrician`,
                  },
                },
                // {
                //   '@type': 'Offer',
                //   itemOffered: {
                //     '@type': 'Service',
                //     name: 'Electrical Panel Upgrades',
                //     url: `${baseUrl}/electrical-services/residential-electrician#electrical-panel-upgrades`,
                //   },
                // },
              ],
            },
            {
              '@type': 'OfferCatalog',
              name: 'Commercial Electrical Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Commercial Electrical Services',
                    url: `${this.baseUrl}/electrical-services/commercial-electrician`,
                  },
                },
                // Add each commercial service card with its fragment:
                // { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '...', url: `${baseUrl}/electrical-services/commercial-electrician#your-fragment` } },
              ],
            },
            {
              '@type': 'OfferCatalog',
              name: 'Ranch & Rural Electrical Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Ranch & Rural Electrical Services',
                    url: `${this.baseUrl}/electrical-services/ranch-rural-electrician`,
                  },
                },
                // Add each ranch/rural service card with its fragment:
                // { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '...', url: `${baseUrl}/electrical-services/ranch-rural-electrician#your-fragment` } },
              ],
            },
          ],
        },
      },
    ],
  };

  ngOnInit(): void {
    this.seo.setGlobalJsonLd(this.globalJsonLd);
  }
}
