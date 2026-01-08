import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSectionSmallComponent } from 'src/app/shared/components/about-section-small/about-section-small.component';
import { AreasWeServeComponent } from 'src/app/shared/components/areas-we-serve/areas-we-serve.component';
import { CountDownDealComponent } from 'src/app/shared/components/count-down-deal/count-down-deal.component';
import { ElectricalServiceCardsComponent } from 'src/app/shared/components/electrical-service-cards/electrical-service-cards.component';
import { OurServicesProcedureComponent } from 'src/app/shared/components/our-services-procedure/our-services-procedure.component';
import { StayConnectedSectionComponent } from 'src/app/shared/components/stay-connected-section/stay-connected-section.component';
import { WhyChooseUsComponent } from 'src/app/shared/components/why-choose-us/why-choose-us.component';
import { ActionBannerComponent } from 'src/app/shared/components/action-banner/action-banner.component';
import { SeoService } from 'src/app/shared/services/seo.service';
import { SiteData as ImportedSiteData } from 'src/app/shared/configs/site-data.config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ActionBannerComponent,
    // CountDownDealComponent,
    ElectricalServiceCardsComponent,
    WhyChooseUsComponent,
    AboutSectionSmallComponent,
    // StayConnectedSectionComponent,
    OurServicesProcedureComponent,
    AreasWeServeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly SiteData = ImportedSiteData;
  constructor(private seo: SeoService) {}
  private readonly jsonLdId = 'json-ld-home';

  ngOnInit(): void {
    const baseUrl = this.SiteData.baseUrl;
    const canonicalUrl = this.SiteData.canonicalUrl;

    // TODO: replace with your real OG image (1200x630 is ideal)
    const ogImageUrl = `${baseUrl}/assets/og/provolt-home.jpg`;

    this.seo.setMetaTags({
      title:
        'ProVolt Electrical Services | Texas Hill Country Electrician (Licensed & Insured)',
      description:
        'Need an electrician in the Texas Hill Country? ProVolt handles electrical repairs, panel upgrades, generators, lighting, and wiring. Serving Kerrville, Fredericksburg, Boerne, Bandera, Comfort, Ingram, Hunt, Center Point & Helotes. Call for a quote.',
      url: canonicalUrl, // ✅ always pass (canonical + og:url)
      image: ogImageUrl, // ✅ include only if real; otherwise omit
    });

    // JSON-LD (Homepage)
    // TODO: fill in real phone, logo, and (if applicable) address + geo + opening hours.
    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        // WebSite entity
        {
          '@type': 'WebSite',
          '@id': `${baseUrl}/#website`,
          url: baseUrl,
          name: this.SiteData.businessName,
          inLanguage: 'en-US',
        },

        // Local business entity (Electrician)
        {
          '@type': 'Electrician',
          '@id': `${baseUrl}/#business`,
          name: 'ProVolt Electrical Services',
          url: baseUrl,
          telephone: this.SiteData.phoneNumber,
          // TODO: add your logo (square, clean background)
          logo: `${baseUrl}/assets/brand/provolt-logo.png`,
          image: ogImageUrl,
          priceRange: '$$',
          areaServed: [
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
          ],
          // Optional but helpful if you have these pages
          // @Nathaniel fix these
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Electrical Services',
            itemListElement: [
              {
                '@type': 'OfferCatalog',
                name: 'Home Electrical',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Electrical Repair & Troubleshooting',
                      url: `${baseUrl}/services/electrical-repair-troubleshooting`,
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Electrical Panel Upgrades',
                      url: `${baseUrl}/services/electrical-panel-upgrades`,
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Whole-Home Rewiring',
                      url: `${baseUrl}/services/whole-home-rewiring`,
                    },
                  },
                ],
              },
              {
                '@type': 'OfferCatalog',
                name: 'Business Solutions',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Commercial Electrical Services',
                      url: `${baseUrl}/services/business-electrical`,
                    },
                  },
                ],
              },
              {
                '@type': 'OfferCatalog',
                name: 'Service Upgrades',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Circuit Breaker Replacement',
                      url: `${baseUrl}/services/circuit-breaker-replacement`,
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Generator Installation & Repair',
                      url: `${baseUrl}/services/generator-installation-repair`,
                    },
                  },
                ],
              },
              {
                '@type': 'OfferCatalog',
                name: 'Lighting Upgrades',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Lighting Upgrades & Installation',
                      url: `${baseUrl}/services/lighting-upgrades-installation`,
                    },
                  },
                ],
              },
            ],
          },
        },

        // // Optional: tie the homepage to your business
        // {
        //   '@type': 'WebPage',
        //   '@id': `${baseUrl}/#webpage`,
        //   url: this.SiteData.canonicalUrl,
        //   name: 'ProVolt Electrical Services | Texas Hill Country Electrician',
        //   isPartOf: { '@id': `${baseUrl}/#website` },
        //   about: { '@id': `${baseUrl}/#business` },
        //   inLanguage: 'en-US',
        // },
      ],
    };

    this.seo.setJsonLd(this.jsonLdId, jsonLd);
  }

  ngOnDestroy(): void {
    this.seo.removeJsonLd(this.jsonLdId);
  }
}
