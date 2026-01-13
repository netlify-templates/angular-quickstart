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

type TermsSection = {
  id: string;
  title: string;
  body?: string[];
  bullets?: string[];
  note?: string;
};

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss'],
})
export class TermsAndConditionsComponent implements OnInit {
  constructor(private seo: SeoService) {}

  readonly sitePaths = SitePaths;
  readonly privacyPolicyData = PrivacyPolicyData;
  readonly companyName = PrivacyPolicyData.companyName;
  readonly effectiveDate = PrivacyPolicyData.effectiveDate;
  readonly effectiveDateISO = PrivacyPolicyData.effectiveDateISO;
  readonly phoneDisplay = PrivacyPolicyData.phoneDisplay;
  readonly emailAddress = PrivacyPolicyData.emailAddress;
  readonly serviceArea = PrivacyPolicyData.serviceArea;

  sections: TermsSection[] = [
    {
      id: 'intro',
      title: 'Overview',
      body: [
        `These Terms and Conditions (“Terms”) govern your use of our website and your request for services from ${this.companyName} (“we,” “us,” or “our”). By using our website or contacting us for service, you agree to these Terms.`,
      ],
    },
    {
      id: 'estimates',
      title: 'Estimates and Final Scope',
      body: [
        `Any estimate we provide is based on information available at the time (including descriptions you provide and any visible site conditions). Electrical work can uncover hidden or pre-existing issues once access is gained or devices are opened.`,
        `Final scope and price may change due to conditions such as concealed wiring damage, code violations from prior work, undersized conductors, unsafe connections, equipment failures, or required corrections identified during the job or inspection.`,
      ],
      bullets: [
        'Estimates are not a guaranteed fixed price unless explicitly stated in writing as a fixed-price agreement.',
        'If additional work is required, we will explain why and review options before proceeding when practical.',
        'If continuing work would be unsafe or not code-compliant without additional corrections, we may pause until the issue is addressed.',
      ],
    },
    {
      id: 'scheduling-access-pets',
      title: 'Scheduling, Access, and Jobsite Safety (Including Pets)',
      body: [
        `Appointments are scheduled based on availability. You agree to provide safe, timely access to the work area, including access to electrical panels, meters (where applicable), and any spaces necessary to perform the work.`,
      ],
      bullets: [
        'Please secure pets and ensure the work area is safe and reasonably clear.',
        'If we cannot access required areas (panel blocked/locked, tenants unavailable, etc.), we may need to reschedule.',
        'We may stop work if unsafe conditions exist (water intrusion, exposed hazards, aggressive animals, structural issues, etc.).',
      ],
    },
    {
      id: 'customer-materials',
      title: 'Customer-Supplied Materials',
      body: [
        `We may install customer-supplied fixtures or materials when appropriate. We reserve the right to decline installation of items that are unsafe, damaged, incompatible, counterfeit, not code-compliant, or unsuitable for the application.`,
      ],
      bullets: [
        'We are not responsible for defects or failures in customer-supplied products.',
        'Workmanship coverage, if offered, may not apply to failures caused by customer-supplied materials.',
      ],
    },
    {
      id: 'workmanship-warranty',
      title: 'Workmanship and Warranty Exclusions',
      body: [
        `We stand behind our workmanship. Any workmanship warranty (if offered for a specific job) covers labor related to the work we performed, for the period stated on your invoice or written agreement.`,
        `This does not cover normal wear and tear, misuse, abuse, modifications by others, acts of nature, power surges beyond reasonable protections, or pre-existing conditions unrelated to our work.`,
      ],
      bullets: [
        'Manufacturer warranties on parts/devices are provided by the manufacturer (not by us).',
        'Troubleshooting unrelated systems or pre-existing issues may be billable even during a warranty period.',
      ],
      // @Nathaniel a LLM response generated this note, but I think it's better to leave it out for now.
      // note: 'Tip: If you want, I can adjust this section to match whatever warranty language you actually use (e.g., “1-year workmanship warranty”).',
    },
    {
      id: 'cancellations',
      title: 'Cancellations and No-Shows',
      body: [
        `If you need to cancel or reschedule, please contact us as soon as possible so we can adjust our schedule.`,
        `At this time, we generally do not charge cancellation fees; however, repeated no-shows or last-minute cancellations may require a deposit or confirmation policy for future appointments (where permitted by law and communicated in advance).`,
      ],
      bullets: [
        'Same-day changes may be harder to accommodate depending on workload.',
        'For certain reserved time slots, we may request confirmation before dispatch.',
      ],
    },
    {
      id: 'limitation',
      title: 'Limitation of Liability',
      body: [
        `To the fullest extent permitted by law, ${this.companyName} is not liable for indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services.`,
        `Our total liability for any claim related to services is limited to the amount paid for the specific service giving rise to the claim, unless otherwise required by law.`,
      ],
    },
    {
      id: 'website-analytics',
      title: 'Website Use and Analytics',
      body: [
        `Our website content is provided for general informational purposes. We may update content at any time without notice.`,
        `We may implement website analytics tools (including Google Analytics) in the future to better understand website traffic and improve performance. Any analytics use will be described in our Privacy Policy.`,
      ],
    },
    {
      id: 'privacy',
      title: 'Privacy',
      body: [
        `Your use of the website is also governed by our Privacy Policy. Please review it to understand how we collect and use information.`,
      ],
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      body: [
        `These Terms are governed by the laws of the State of Texas, without regard to conflict of law principles.`,
      ],
    },
    {
      id: 'changes-to-terms',
      title: 'Changes to These Terms',
      body: [
        `We may update these Terms from time to time. Updates will be posted on this page with a revised effective date. Continued use of the website after changes are posted constitutes acceptance of the updated Terms.`,
      ],
    },
    {
      id: 'contact',
      title: 'Contact Us',
      body: [`If you have questions about these Terms, contact:`],
    },
  ];

  toc() {
    return this.sections
      .filter((s) => s.id !== 'intro')
      .map((s) => ({ id: s.id, title: s.title }));
  }

  ngOnInit(): void {
    this.setupSeo();
    this.setupJsonLd();
  }

  private setupSeo(): void {
    this.seo.setMetaTags({
      title: `Terms & Conditions | ${this.companyName} | Texas Hill Country`,
      description: `Read the Terms and Conditions for ${this.companyName} serving the Texas Hill Country. Covers estimates, scheduling/access, customer-supplied materials, warranties, cancellations, liability limits, privacy, and website use.`,
      canonicalUrl: FullSitePaths.termsAndConditions,
      uniquePageImage: SiteData.homepageImageUrl,
      type: 'website',
      // Legal pages usually don't need to rank; this avoids “thin/legal page” indexing while still letting Google crawl links.
      // If you WANT it indexed, change to: 'index,follow'
      robots: 'noindex,follow',
    });
  }

  private setupJsonLd(): void {
    const baseUrl = SiteData.baseUrl;
    const pageUrl = FullSitePaths.termsAndConditions;
    const imageUrl = SiteData.homepageImageUrl;

    const pageName = `Terms and Conditions | ${this.companyName}`;
    const pageDescription = `Terms and Conditions governing use of the ${this.companyName} website and service requests across the Texas Hill Country.`;

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

          // This is the key fix: Terms page main entity is the Terms document, not a Service.
          mainEntity: { '@id': `${pageUrl}#terms` },

          // Use ISO-8601 if possible (e.g., "2026-01-13").
          dateModified: this.effectiveDateISO,
        },

        // Primary image
        // {
        //   '@type': 'ImageObject',
        //   '@id': `${pageUrl}#primaryimage`,
        //   url: imageUrl,
        // },

        // The Terms document itself
        {
          '@type': 'DigitalDocument',
          '@id': `${pageUrl}#terms`,
          url: pageUrl,
          name: 'Terms and Conditions',
          description: pageDescription,
          inLanguage: 'en-US',
          publisher: { '@id': `${baseUrl}/#business` },
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
              name: 'Terms and Conditions',
              item: pageUrl,
            },
          ],
        },
      ],
    };

    this.seo.setPageJsonLd(pageJsonLd);
  }
}
