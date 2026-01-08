import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class ContactUsComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;

  readonly phoneNumber = '(830) 955-2909';
  readonly phoneNumber02 = '+1-830-955-2909';
  // @Nathaniel TODO: update email
  readonly emailAddress = 'service@provoltelectricalservices.com';

  private readonly jsonLdId = 'json-ld-contact';

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
        'Need a licensed electrician in the Texas Hill Country? Contact ProVolt Electrical Services for fast, reliable electrical repairs, panel upgrades, lighting, and more in Fredericksburg, Kerrville, Boerne, Bandera, and surrounding areas.',
      type: 'website',
    });
    this.seo.setJsonLd(this.jsonLdId, {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact ProVolt Electrical Services',
      description:
        'Contact page for ProVolt Electrical Services, licensed electrician serving the Texas Hill Country.',
      url: this.getCurrentUrlSafe(),
      about: {
        '@type': 'LocalBusiness',
        '@id': '#provolt-electrical',
        name: 'ProVolt Electrical Services',
        telephone: this.phoneNumber02,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Texas Hill Country',
          addressRegion: 'TX',
          addressCountry: 'US',
        },
        areaServed: [
          'Fredericksburg TX',
          'Kerrville TX',
          'Boerne TX',
          'Bandera TX',
          'Comfort TX',
          'Center Point TX',
          'Ingram TX',
          'Hunt TX',
          'Helotes TX',
          'Texas Hill Country',
        ],
        slogan:
          'Fast, reliable electrical repairs, panel upgrades, lighting, and more in Texas Hill Country',
        url: 'https://provoltelectricalservices.com',
      },
      potentialAction: {
        '@type': 'ContactAction',
        // target: [`tel:+18309552909`, `mailto:${this.emailAddress}`],
        target: [`tel:+18309552909`],
      },
    });
  }

  private getCurrentUrlSafe(): string {
    // Guard for SSR if needed
    return typeof window !== 'undefined'
      ? window.location.href
      : 'https://provoltelectricalservices.com/contact';
  }

  // onSubmit(): void {
  //   if (this.contactForm.invalid) {
  //     this.contactForm.markAllAsTouched();
  //     return;
  //   }

  //   // @Nathaniel TODO: Wire this up to your backend / email service (HTTP POST or 3rd-party form service).
  //   // console.log('Contact form submitted', this.contactForm.value);

  ngOnDestroy(): void {
    this.seo.removeJsonLd(this.jsonLdId);
  }
}
