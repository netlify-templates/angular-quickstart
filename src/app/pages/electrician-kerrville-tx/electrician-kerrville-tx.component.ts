import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

import { SeoService } from 'src/app/shared/services/seo.service';
import { TownPageComponent } from 'src/app/shared/components/town-page/town-page.component';
import {
  TOWN_CONFIGS,
  TownPageConfig,
  TownSeoConfig,
} from 'src/app/shared/configs/town-page.config';

@Component({
  selector: 'app-electrician-kerrville-tx',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    TownPageComponent,
  ],
  templateUrl: './electrician-kerrville-tx.component.html',
  styleUrls: ['./electrician-kerrville-tx.component.scss'],
})
export class ElectricianKerrvilleTxComponent implements OnInit, OnDestroy {
  config: TownPageConfig = TOWN_CONFIGS['kerrville'];

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    const seoConfig: TownSeoConfig | undefined = this.config.seo;
    if (!seoConfig) return;

    this.seo.setMetaTags({
      title: seoConfig.metaTitle,
      description: seoConfig.metaDescription,
      url: seoConfig.pageUrl, // make sure this matches your router URL
      image: seoConfig.ogImage,
      type: 'website',
      robots: seoConfig.robots,
    });
  }

  ngOnDestroy(): void {
    // If you added removeJsonLdByPrefix() to SeoService, use it:
    // this.seo.removeJsonLdByPrefix(this.jsonLdPrefix);

    // Otherwise, remove known IDs explicitly:
    this.seo.removeJsonLd(this.config.seo?.jsonLdId || '');
    // @Nathaniel add breadcrumbs to jsonLD for SEO to all town pages
    // this.seo.removeJsonLd('json-ld-town-kerrville-breadcrumb');
  }
}
