import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  PrivacyPolicyData,
  SiteData,
} from 'src/app/shared/configs/site-data.config';
import {
  FullSitePaths,
  SitePaths,
} from 'src/app/shared/configs/site-urls.config';
import { SeoService } from 'src/app/shared/services/seo.service';

type PolicySection = {
  id: string;
  title: string;
  body?: string[];
  bullets?: string[];
};

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent implements OnInit {
  constructor(private seo: SeoService) {}

  readonly sitePaths = SitePaths;
  readonly privacyPolicyData = PrivacyPolicyData;
  companyName = PrivacyPolicyData.companyName;
  effectiveDate = PrivacyPolicyData.effectiveDate;
  effectiveDateISO = PrivacyPolicyData.effectiveDateISO;
  phoneDisplay = PrivacyPolicyData.phoneDisplay;
  emailAddress = PrivacyPolicyData.emailAddress;
  serviceArea = PrivacyPolicyData.serviceArea;

  sections: PolicySection[] = [
    {
      id: 'intro',
      title: 'Overview',
      body: [
        `${
          this.companyName
        } (“${this.shortName()},” “we,” “us,” or “our”) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website, request an estimate, schedule service, or otherwise communicate with us.`,
      ],
    },
    {
      id: 'info-we-collect',
      title: 'Information We Collect',
      body: ['We may collect the following categories of information:'],
      bullets: [
        'Contact information: name, phone number, email address, and service address.',
        'Request and service details: information you provide about your project (for example: the issue you’re experiencing, preferred appointment times, notes about the property, and any photos you choose to send).',
        'Website usage information: basic data about how visitors use our site, such as pages viewed, approximate location (city/state), device/browser type, and general site interactions. This may be collected through cookies or similar technologies.',
        'Communications: records of messages and interactions with us (phone calls, texts, emails, and website form submissions).',
      ],
    },
    {
      id: 'how-we-collect',
      title: 'How We Collect Information',
      body: ['We collect information when you:'],
      bullets: [
        'Fill out a form on our website (including forms handled by our website platform or hosting provider, if enabled),',
        'Call, text, or email us,',
        'Request a quote or schedule service,',
        'Browse our website (via standard web technologies such as cookies).',
      ],
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      body: ['We use your information to:'],
      bullets: [
        'Provide estimates, schedule appointments, and deliver electrical services.',
        'Communicate with you about your request, appointment details, and service updates.',
        'Maintain internal records for business operations (for example, estimating, invoicing, and service history).',
        'Improve our website and service experience.',
        'Protect our business and customers (fraud prevention, security, and troubleshooting).',
        'Comply with legal obligations.',
      ],
    },
    {
      id: 'analytics-cookies',
      title: 'Analytics and Cookies',
      body: [
        'We may use cookies and similar technologies for basic website functionality and to understand site performance.',
        'Current status: We do not currently use Google Analytics.',
        'Future use: We may implement analytics tools (including Google Analytics) in the future to better understand website traffic and improve the site. If we do, we may update this Privacy Policy accordingly.',
        'You can control cookies through your browser settings. Disabling cookies may affect certain site features.',
      ],
    },
    {
      id: 'sharing',
      title: 'How We Share Information',
      body: [
        'We do not sell your personal information.',
        'We may share information only in limited situations, such as:',
      ],
      bullets: [
        'Service providers: vendors that help us operate our website and communications (for example, website hosting, email or SMS providers, and form processing tools). These providers are permitted to use information only to perform services for us.',
        'Legal and safety: when required by law, to respond to lawful requests, or to protect the rights, property, or safety of ProVolt, our customers, or others.',
        'Business transfers: if our business is involved in a merger, acquisition, or sale of assets, information may be transferred as part of that transaction.',
      ],
    },
    {
      id: 'communications',
      title: 'Communications (Phone, Text, Email)',
      body: [
        'If you contact us by phone, text, email, or through a website form, we may keep a record of those communications to respond and provide service. Standard messaging and data rates may apply for text messages.',
      ],
    },
    {
      id: 'security',
      title: 'Data Security',
      body: [
        'We use reasonable safeguards designed to protect your information. However, no website, internet transmission, or storage system can be guaranteed 100% secure.',
      ],
    },
    {
      id: 'retention',
      title: 'Data Retention',
      body: [
        'We keep personal information only as long as reasonably necessary for service delivery, business recordkeeping, legal compliance, and resolving disputes.',
      ],
    },
    {
      id: 'choices',
      title: 'Your Privacy Choices',
      body: [
        'You may request to access, correct, or delete your personal information we maintain, subject to certain legal and operational limitations. To make a request, contact us using the information below.',
      ],
    },
    {
      id: 'children',
      title: 'Children’s Privacy',
      body: [
        'Our website and services are not intended for children under 13, and we do not knowingly collect personal information from children under 13.',
      ],
    },
    {
      id: 'third-party-links',
      title: 'Third-Party Links',
      body: [
        'Our website may include links to third-party services (such as maps or review platforms). We are not responsible for the privacy practices of those third parties.',
      ],
    },
    {
      id: 'updates',
      title: 'Updates to This Policy',
      body: [
        'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.',
      ],
    },
    {
      id: 'contact',
      title: 'Contact Us',
      body: [
        'If you have questions about this Privacy Policy or your information, contact:',
      ],
    },
  ];

  toc() {
    return this.sections
      .filter((s) => s.id !== 'intro')
      .map((s) => ({ id: s.id, title: s.title }));
  }

  private shortName(): string {
    // keeps the intro text nicer if you set a long company name later
    return this.companyName.includes(' ')
      ? this.companyName.split(' ')[0]
      : this.companyName;
  }

  ngOnInit(): void {
    this.setupSeo();
    this.setupJsonLd();
  }

  private setupSeo(): void {
    this.seo.setMetaTags({
      title: `Privacy Policy | ${this.companyName} | Texas Hill Country`,
      description: `Read the Privacy Policy for ${this.companyName} serving the Texas Hill Country. Covers information collected, how it’s used, sharing, cookies/analytics, security, retention, privacy choices, children’s privacy, third-party links, updates, and contact details.`,
      canonicalUrl: FullSitePaths.privacyPolicy,
      uniquePageImage: SiteData.homepageImageUrl,
      type: 'website',
      // Legal pages usually don't need to rank; keeps link equity flowing.
      // If you WANT it indexed, change to: 'index,follow'
      robots: 'noindex,follow',
    });
  }
  private setupJsonLd(): void {
    const baseUrl = SiteData.baseUrl;
    const pageUrl = FullSitePaths.privacyPolicy;

    const pageName = `Privacy Policy | ${this.companyName}`;
    const pageDescription = `Privacy Policy governing use of the ${this.companyName} website and service requests across the Texas Hill Country.`;

    const pageJsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        // WebPage
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
          // primaryImageOfPage: { '@id': `${pageUrl}#primaryimage` },
          //           primaryImageOfPage: {
          //   '@type': 'ImageObject',
          //   url: imageUrl,
          // },

          // Privacy page main entity should be the privacy policy document
          mainEntity: { '@id': `${pageUrl}#privacy-policy` },

          // Prefer ISO-8601 (you already have effectiveDateISO)
          datePublished: this.effectiveDateISO,
          dateModified: this.effectiveDateISO,
        },

        // The Privacy Policy document itself
        {
          '@type': 'DigitalDocument',
          '@id': `${pageUrl}#privacy-policy`,
          url: pageUrl,
          name: 'Privacy Policy',
          description: pageDescription,
          inLanguage: 'en-US',
          publisher: { '@id': `${baseUrl}/#business` },
          datePublished: this.effectiveDateISO,
          dateModified: this.effectiveDateISO,
        },

        // Breadcrumbs
        {
          '@type': 'BreadcrumbList',
          '@id': `${pageUrl}#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Privacy Policy',
              item: pageUrl,
            },
          ],
        },
      ],
    };

    this.seo.setPageJsonLd(pageJsonLd);
  }
}
