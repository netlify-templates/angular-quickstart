import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SiteData } from 'src/app/shared/configs/site-data.config';
import { SitePaths } from 'src/app/shared/configs/site-urls.config';
import { AbsoluteUrlService } from 'src/app/shared/services/absolute-url.service';
import { SeoService } from 'src/app/shared/services/seo.service';

type QuickLink = {
  label: string;
  path: string;
  description?: string;
};

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    private router: Router,
    private absUrl: AbsoluteUrlService
  ) {}

  /** Brand */
  companyName = SiteData.businessName;

  /** Primary CTAs */
  homePath = SitePaths.home;
  contactPath = SitePaths.contactUs;

  /** Optional phone CTA (if you have these in SiteData) */
  phoneDisplay?: string; // e.g. SiteData.phoneDisplay
  phoneHref?: string; // e.g. `tel:${SiteData.phoneNumberE164}`

  /** Customize “popular links” to help users recover */
  quickLinks: QuickLink[] = [
    {
      label: 'Electrical Services',
      path: SitePaths.electricalServices,
      description: 'Explore residential, commercial, and ranch services.',
    },
    {
      label: 'Areas We Serve',
      path: `${SitePaths.serviceAreas}/${SitePaths.texasHillCountryElectrician}`,
      description: 'See our Texas Hill Country service areas.',
    },
    {
      label: 'About Us',
      path: SitePaths.aboutUs,
      description: 'Learn about our team and approach.',
    },
    { label: 'Privacy Policy', path: SitePaths.privacyPolicy },
    { label: 'Terms & Conditions', path: SitePaths.termsAndConditions },
  ];

  subtitle =
    'The page you’re looking for may have been moved, renamed, or is temporarily unavailable.';

  ngOnInit(): void {
    this.setupSeo();
    this.setupJsonLd();
  }

  private setupSeo(): void {
    // For 404 pages, canonicalize to the actual URL requested (but strip query/hash).
    // This is SSR-safe and avoids double-slash issues when baseUrl ends with "/".

    const canonicalUrl = this.absUrl.getCanonicalUrl();

    this.seoService.setMetaTags({
      title: `Page Not Found (404) | ${this.companyName}`,
      description:
        'Sorry — we can’t find that page. Use the links to get back to our electrical services, service areas, or contact us for help.',
      canonicalUrl,
      uniquePageImage: SiteData.homepageImageUrl, // default is fine
      type: 'website',
      robots: 'noindex,follow',
    });
  }

  private setupJsonLd(): void {
    const pageUrl = this.absUrl.getCanonicalUrl(); // ✅ matches canonical
    const baseUrl = new URL(pageUrl).origin; // ✅ derives correct origin in SSR/proxy
    const imageUrl = SiteData.homepageImageUrl; // default image is fine

    const pageName = `Page Not Found (404) | ${this.companyName}`;
    const pageDescription =
      '404 page to help visitors recover by linking to key sections of the site.';

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
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

          breadcrumb: { '@id': `${pageUrl}#breadcrumb` },

          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: imageUrl,
          },
        },

        {
          '@type': 'BreadcrumbList',
          '@id': `${pageUrl}#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Page Not Found',
              item: pageUrl,
            },
          ],
        },
      ],
    };

    this.seoService.setPageJsonLd(jsonLd);
  }
}
