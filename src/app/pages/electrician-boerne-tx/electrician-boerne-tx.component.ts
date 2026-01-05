import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { SeoService } from 'src/app/shared/services/seo.service';
import { TownPageComponent } from 'src/app/shared/components/town-page/town-page.component';
import {
  TOWN_CONFIGS,
  TownPageConfig,
} from 'src/app/shared/configs/town-page.config';

interface ServiceItem {
  label: string;
  icon: string;
}

@Component({
  selector: 'app-electrician-boerne-tx',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    TownPageComponent,
  ],
  templateUrl: './electrician-boerne-tx.component.html',
  styleUrls: ['./electrician-boerne-tx.component.scss'],
})
export class ElectricianBoerneTxComponent implements OnInit, OnDestroy {
  config: TownPageConfig = TOWN_CONFIGS['boerne'];

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    const seoConfig = this.config.seo;

    if (seoConfig) {
      this.seo.setMetaTags({
        title: seoConfig.metaTitle,
        description: seoConfig.metaDescription,
        url: seoConfig.pageUrl,
        image: seoConfig.ogImage,
        type: 'website',
        robots: seoConfig.robots,
      });

      if (seoConfig.jsonLd && seoConfig.jsonLdId) {
        this.seo.setJsonLd(seoConfig.jsonLdId, seoConfig.jsonLd);
      }
    }
  }

  ngOnDestroy(): void {
    this.seo.removeJsonLd(this.config.seo?.jsonLdId || '');
  }
}
