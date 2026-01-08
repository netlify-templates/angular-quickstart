import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';

import { SeoService } from '../../services/seo.service';
import { CtaButtonComponent } from '../cta-button/cta-button.component';
import { TownPageConfig } from '../../configs/town-page.config';
import { SitePaths as ImportedSitePaths } from '../../configs/site-urls.config';

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
  jsonLdId?: string;
  jsonLd?: unknown;
}

@Component({
  selector: 'app-town-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatExpansionModule,
    MatDividerModule,
    CtaButtonComponent,
  ],
  templateUrl: './town-page.component.html',
  styleUrls: ['./town-page.component.scss'],
})
export class TownPageComponent implements OnInit, OnChanges {
  readonly SitePaths = ImportedSitePaths;
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

  // ------- Derived labels -------

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

  // ------- SEO -------

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

  // ------- UX actions -------

  onCallClick(): void {
    if (!this.townConfig?.phoneNumber) return;
    const digits = this.townConfig.phoneNumber.replace(/[^0-9]/g, '');
    if (digits) window.location.href = `tel:${digits}`;
  }

  // ------- TrackBy helpers -------

  trackByIndex(index: number): number {
    return index;
  }

  trackByLabel(_: number, item: { label?: string }): string {
    return item?.label ?? '';
  }
}
