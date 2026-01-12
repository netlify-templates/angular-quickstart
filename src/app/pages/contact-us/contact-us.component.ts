import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { SeoService } from 'src/app/shared/services/seo.service';
import { SiteData } from 'src/app/shared/configs/site-data.config';
import { FullSitePaths } from 'src/app/shared/configs/site-urls.config';
@Component({
  selector: 'app-contact-us',
  standalone: true,
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule,
  ],
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;

  readonly phoneNumber = SiteData.phoneNumber;
  readonly phoneNumber02 = SiteData.phoneNumberE164;
  readonly baseUrl = SiteData.baseUrl; // "https://provoltelectricalservices.com"
  readonly pageUrl = FullSitePaths.contactUs;
  readonly emailAddress = SiteData.email;

  constructor(private fb: FormBuilder, private seo: SeoService) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    this.seo.setMetaTags({
      title:
        'Contact ProVolt Electrical Services | Hill Country Electrician Near You',
      description:
        'Need a licensed electrician in the Texas Hill Country? Contact ProVolt Electrical Services for organized, code-compliant electrical repairs, panel upgrades, lighting, and more in Kerrville, Fredericksburg, Boerne, Bandera, and surrounding areas.',
      canonicalUrl: this.pageUrl,
      uniquePageImage: SiteData.homepageImageUrl,
      type: 'website',
      robots: 'index,follow',
    });

    const pageJsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ContactPage',
          '@id': `${this.pageUrl}#webpage`,
          url: this.pageUrl,
          name: 'Contact ProVolt Electrical Services',
          description:
            'Request service, ask a question, or get a quote from ProVolt Electrical Services serving the Texas Hill Country.',
          inLanguage: 'en-US',

          isPartOf: { '@id': `${this.baseUrl}/#website` },
          about: { '@id': `${this.baseUrl}/#business` },
          mainEntity: { '@id': `${this.baseUrl}/#business` },

          breadcrumb: { '@id': `${this.pageUrl}#breadcrumb` },

          potentialAction: [
            {
              '@type': 'ContactAction',
              target: `tel:${this.phoneNumber02}`,
            },
            {
              '@type': 'ContactAction',
              target: `mailto:${this.emailAddress}`,
            },
          ],
        },

        // 2) Breadcrumbs
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
              name: 'Contact',
              item: this.pageUrl,
            },
          ],
        },

        // 3) Optional: lightweight “contact point patch” on the global business node
        // (This does not redefine the business; it adds/overrides contactPoint fields.)
        {
          '@id': `${this.baseUrl}/#business`,
          contactPoint: [
            {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              telephone: this.phoneNumber02,
              email: this.emailAddress,
              availableLanguage: ['en'],
            },
          ],
        },
      ],
    };
    this.seo.setPageJsonLd(pageJsonLd);
  }

  // onSubmit(): void {
  //   if (this.contactForm.invalid) {
  //     this.contactForm.markAllAsTouched();
  //     return;
  //   }

  //   // @Nathaniel TODO: Wire this up to your backend / email service (HTTP POST or 3rd-party form service).
  //   // console.log('Contact form submitted', this.contactForm.value);
}
