import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { SeoService } from '../../services/seo.service';
import { CtaButtonComponent } from '../cta-button/cta-button.component';

export interface ServiceItem {
  label: string;
  icon: string;
}

export interface TownSeoConfig {
  metaTitle: string;
  metaDescription: string;
  pageUrl: string;
  ogImage?: string;
  robots?: string;
  jsonLdId?: string; // e.g. 'json-ld-kerrville'
  jsonLd?: unknown; // prebuilt JSON-LD object
}

export interface TownPageConfig {
  townName: string; // e.g. 'Kerrville'
  stateAbbr: string; // e.g. 'TX'
  regionLabel: string; // e.g. 'Texas Hill Country'
  phoneNumber: string; // display format e.g. '(830) 555-1234'
  heroTitle?: string; // optional override
  heroSubtitle?: string; // optional override
  heroBadgeText?: string; // optional override; fallback built
  heroBullets: string[]; // 2–4 bullets

  residentialHeading?: string;
  residentialSubheading?: string;
  residentialIntro?: string;
  residentialServices: ServiceItem[];

  commercialHeading?: string;
  commercialSubheading?: string;
  commercialIntro?: string;
  commercialServices: ServiceItem[];

  energyHeading?: string;
  energySubheading?: string;
  energyIntro?: string;
  energyServices: ServiceItem[];

  areasServed: string[];

  seo?: TownSeoConfig; // optional SEO + JSON-LD config
}

@Component({
  selector: 'app-town-page',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    CtaButtonComponent,
  ],
  templateUrl: './town-page.component.html',
  styleUrls: ['./town-page.component.scss'],
})
export class TownPageComponent implements OnInit, OnChanges {
  @Input() townConfig!: TownPageConfig;

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.applySeo();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['townConfig'] && !changes['townConfig'].firstChange) {
      this.applySeo();
    }
  }

  get townLabel(): string {
    if (!this.townConfig) return '';
    return `${this.townConfig.townName}, ${this.townConfig.stateAbbr}`;
  }

  get heroTitle(): string {
    if (this.townConfig?.heroTitle) return this.townConfig.heroTitle;
    return `Trusted Electrician in ${this.townLabel}`;
  }

  get heroSubtitle(): string {
    if (this.townConfig?.heroSubtitle) return this.townConfig.heroSubtitle;
    return `ProVolt Electrical Services provides licensed, insured residential, commercial, and ranch electrical work throughout ${this.townLabel} and the surrounding ${this.townConfig?.regionLabel}.`;
  }

  get heroBadgeText(): string {
    if (this.townConfig?.heroBadgeText) return this.townConfig.heroBadgeText;
    return `Electrician in ${this.townLabel}, ${this.townConfig?.regionLabel}`;
  }

  get residentialHeading(): string {
    return this.townConfig?.residentialHeading
      ? this.townConfig.residentialHeading
      : `Residential Electrical Services in ${this.townLabel}`;
  }

  get commercialHeading(): string {
    return this.townConfig?.commercialHeading
      ? this.townConfig.commercialHeading
      : `Commercial & Ranch Electrical Services`;
  }

  get energyHeading(): string {
    return this.townConfig?.energyHeading
      ? this.townConfig.energyHeading
      : `Energy Efficiency & Electrical Consultations`;
  }

  private applySeo(): void {
    if (!this.townConfig?.seo) return;

    const {
      metaTitle,
      metaDescription,
      pageUrl,
      ogImage,
      robots,
      jsonLdId,
      jsonLd,
    } = this.townConfig.seo;

    this.seo.setMetaTags({
      title: metaTitle,
      description: metaDescription,
      url: pageUrl,
      image: ogImage,
      type: 'website',
      robots: robots ?? 'index,follow',
    });

    if (jsonLd && jsonLdId) {
      this.seo.setJsonLd(jsonLdId, jsonLd);
    }
  }

  onCallClick(): void {
    if (!this.townConfig?.phoneNumber) return;
    const digits = this.townConfig.phoneNumber.replace(/[^0-9]/g, '');
    if (digits) {
      window.location.href = `tel:${digits}`;
    }
  }

  onRequestQuote(): void {
    // TODO: hook this into your router or contact form
    // e.g. this.router.navigate(['/contact']);
    if (!this.townConfig?.phoneNumber) return;
    const digits = this.townConfig.phoneNumber.replace(/[^0-9]/g, '');
    if (digits) {
      window.location.href = `tel:${digits}`;
    }
  }
}
