import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { SeoService } from 'src/app/shared/services/seo.service';
import { SiteData } from 'src/app/shared/configs/site-data.config';
import { FullSitePaths } from 'src/app/shared/configs/site-urls.config';

interface Stat {
  label: string;
  value: string;
  icon: string;
}

interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
  ],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  phoneNumber = SiteData.phoneNumberE164;
  stats: Stat[] = [
    {
      label: 'Years Serving the Hill Country',
      value: '15+',
      icon: 'calendar_month',
    },
    {
      label: 'Residential, Commercial & Industrial Projects',
      value: '2,000+',
      icon: 'bolt',
    },
    {
      label: 'Locally Owned & Family Operated',
      value: 'Since 2010',
      icon: 'family_restroom',
    },
    {
      label: 'Licensed · Bonded · Insured',
      value: '100%',
      icon: 'verified_user',
    },
  ];

  values: ValueItem[] = [
    {
      icon: 'shield',
      title: 'Safety & Code Compliance',
      description:
        'Every project is completed to NEC and local code requirements. We treat your property like our own and never cut corners on safety.',
    },
    {
      icon: 'thumb_up',
      title: 'Quality Workmanship',
      description:
        'From fuses and breakers to full panel upgrades and new construction wiring, we focus on clean installs and long-term reliability.',
    },
    {
      icon: 'handshake',
      title: 'Integrity & Clear Communication',
      description:
        'We provide honest recommendations, free estimates, and straightforward explanations so you always know what is being done and why.',
    },
    {
      icon: 'local_fire_department',
      title: 'Fast, Reliable Service',
      description:
        'We understand downtime costs money. Our team responds quickly to restore power, troubleshoot issues, and keep homes and businesses running.',
    },
  ];

  timeline: TimelineItem[] = [
    {
      year: '2010',
      title: 'ProVolt Electrical Services is Founded',
      description:
        'After years in the trade, Scott Raggo starts ProVolt Electrical Services as a local, family-owned electrical company based in the Hill Country.',
    },
    {
      year: '2012–2015',
      title: 'Growing Residential & Commercial Service',
      description:
        'Word-of-mouth referrals help ProVolt expand from service calls and panel upgrades into remodels, new construction, and commercial projects.',
    },
    {
      year: '2016–2020',
      title: 'Commercial & Community Projects',
      description:
        'The team completes work for local churches, gas stations, and commercial entities, earning a reputation for safety, professionalism, and reliability.',
    },
    {
      year: 'Today',
      title: 'Trusted Hill Country Partner',
      description:
        'With a highly skilled crew and decades of combined experience, ProVolt Electric continues to deliver fast, dependable service across Kerrville, Fredericksburg, and the surrounding Hill Country.',
    },
  ];

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.setupSeo();
    this.setupJsonLd();
  }

  private setupSeo(): void {
    this.seo.setMetaTags({
      // @ Nathaniel consider updating the title to pull from siteData.businessName
      title:
        'About ProVolt Electrical Services | Family-Owned Electrician in Texas Hill Country',
      description:
        'Learn about ProVolt Electric, a family-owned electrical contractor founded in 2010. Led by master electrician Scott Raggo, we provide fast, reliable residential, commercial, and industrial electrical services in Kerrville, Fredericksburg, and the Texas Hill Country.',
      canonicalUrl: FullSitePaths.aboutUs,
      type: 'website',
      uniquePageImage: SiteData.homepageImageUrl,
      robots: 'index,follow',
    });
  }

  private setupJsonLd(): void {
    const baseUrl = SiteData.baseUrl;
    const pageUrl = FullSitePaths.aboutUs;

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'AboutPage',
          '@id': `${pageUrl}#webpage`,
          url: pageUrl,
          name: 'About ProVolt Electrical Services | Family-Owned Electrician in Texas Hill Country',
          description:
            'Learn about ProVolt Electrical Services, a family-owned electrical contractor founded in 2010 and based in Kerrville, TX.',
          inLanguage: 'en-US',

          isPartOf: { '@id': `${baseUrl}/#website` },
          about: { '@id': `${baseUrl}/#business` },
          mainEntity: { '@id': `${baseUrl}/#business` },

          breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
        },

        {
          '@type': 'BreadcrumbList',
          '@id': `${pageUrl}#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
            { '@type': 'ListItem', position: 2, name: 'About', item: pageUrl },
          ],
        },

        // 3) Optional: a Person node for the founder (only if you want it explicitly in-page)
        // This does NOT redefine the business; it just adds a node you can link to.
        {
          '@type': 'Person',
          '@id': `${baseUrl}/#founder-scott-raggo`,
          name: 'Scott Raggo',
        },

        // 4) Add business facts as a lightweight "patch" node that points at your global business.
        // This avoids duplicating the full business object, but still allows About-page-specific facts.
        {
          '@id': `${baseUrl}/#business`,
          foundingDate: '2010',
          founder: { '@id': `${baseUrl}/#founder-scott-raggo` },

          // These are optional; only keep if they're accurate and consistent with global data.
          // If your global JSON-LD already contains them, you can remove them here.
          // telephone: this.SiteData.phoneNumberE164,

          // Stats as "knowsAbout" topics (safe/neutral) or leave out if you prefer.
          knowsAbout: [
            'Residential electrical services',
            'Commercial electrical services',
            'Ranch and rural electrical services',
            'Electrical troubleshooting and repair',
            'Electrical panel upgrades',
            'Lighting installation',
            'Surge protection',
            'Safety inspections and code compliance',
          ],
        },
      ],
    };

    this.seo.setPageJsonLd(jsonLd);
  }

  onCallNow(): void {
    window.location.href = `tel:${this.phoneNumber}`;
  }
}
