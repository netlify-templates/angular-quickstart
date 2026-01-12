import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { SeoService } from 'src/app/shared/services/seo.service';
import {
  TOWN_CONFIGS,
  TownPageConfig,
} from 'src/app/shared/configs/town-page.config';
import { TownPageComponent } from 'src/app/shared/components/town-page/town-page.component';
import { SiteData } from 'src/app/shared/configs/site-data.config';
import { TownJsonLdService } from 'src/app/shared/services/town-jsonld.service';
import { FullSitePaths } from 'src/app/shared/configs/site-urls.config';

@Component({
  selector: 'app-electrician-ingram-tx',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    TownPageComponent,
  ],
  templateUrl: './electrician-ingram-tx.component.html',
  styleUrls: ['./electrician-ingram-tx.component.scss'],
})
export class ElectricianIngramTxComponent implements OnInit {
  baseUrl = SiteData.baseUrl;
  pageUrl = FullSitePaths.ingramTxElectrician;
  ogImageUrl = SiteData.homepageImageUrl;
  config: TownPageConfig = TOWN_CONFIGS['ingram'];

  constructor(private seo: SeoService, private townJsonLd: TownJsonLdService) {}

  ngOnInit(): void {
    // this.setupSeo();
    // this.setupJsonLd();
  }

  // private setupSeo(): void {
  //   this.seo.setMetaTags({
  //     title:
  //       'Electrician in Ingram, TX | Repairs, Panels, Outdoor Power & Lighting',
  //     description:
  //       'Electrician in Ingram, TX for troubleshooting, panel upgrades, outdoor outlets/GFCI, lighting, dedicated circuits, and shop wiring. ProVolt Electrical Services—licensed and insured.',
  //     canonicalUrl: this.pageUrl,
  //     // image: seoConfig.ogImage,
  //     type: 'website',
  //     // robots: seoConfig.robots,
  //   });
  // }

  // private setupJsonLd(): void {
  //   // const cfg = this.config;
  //   // const jsonLd = this.townJsonLd.buildServiceAreaJsonLd({
  //   //   baseUrl: this.baseUrl,
  //   //   cfg,
  //   //   pageTitle:
  //   //     'Electrician in Ingram, TX | Repairs, Panels, Outdoor Power & Lighting',
  //   //   pageDescription: cfg.heroSubtitle,
  //   //   geo: { latitude: 30.0743, longitude: -99.2403 }, // optional (remove if unsure)
  //   //   serviceAreasHubPath: '/service-areas',
  //   //   includeFaq: true,
  //   // });
  //   // this.seo.setPageJsonLd(jsonLd);
  // }
}
