import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSectionSmallComponent } from 'src/app/shared/components/about-section-small/about-section-small.component';
import { AreasWeServeComponent } from 'src/app/shared/components/areas-we-serve/areas-we-serve.component';
import { CountDownDealComponent } from 'src/app/shared/components/count-down-deal/count-down-deal.component';
import { ElectricalServiceCardsComponent } from 'src/app/shared/components/electrical-service-cards/electrical-service-cards.component';
import { OurServicesProcedureComponent } from 'src/app/shared/components/our-services-procedure/our-services-procedure.component';
import { StayConnectedSectionComponent } from 'src/app/shared/components/stay-connected-section/stay-connected-section.component';
import { WhyChooseUsComponent } from 'src/app/shared/components/why-choose-us/why-choose-us.component';
import { ActionBannerComponent } from 'src/app/shared/components/action-banner/action-banner.component';
import { SeoService } from 'src/app/shared/services/seo.service';
import { SiteData } from 'src/app/shared/configs/site-data.config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ActionBannerComponent,
    // CountDownDealComponent,
    ElectricalServiceCardsComponent,
    WhyChooseUsComponent,
    AboutSectionSmallComponent,
    // StayConnectedSectionComponent,
    OurServicesProcedureComponent,
    AreasWeServeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    const baseUrl = SiteData.baseUrl;
    const canonicalUrl = SiteData.canonicalUrl;
    const ogImageUrl = SiteData.homepageImageUrl;
    // @Nathaniel is this image supposed to be the 512 one?
    const sharedLogoUrl = `${baseUrl}/assets/brand/logos/ProVolt-Logo-meta-512-c.png`;

    // @Nathaniel I might not need these Meta Tags on the homoepage
    this.seo.setMetaTags({
      title:
        'ProVolt Electrical Services | Texas Hill Country Electrician (Licensed & Insured)',
      description:
        'Need an electrician in the Texas Hill Country? ProVolt handles electrical repairs, panel upgrades, generators, lighting, and wiring. Serving Kerrville, Fredericksburg, Boerne, Bandera, Comfort, Ingram, Hunt, Center Point & Helotes. Call for a quote.',
      canonicalUrl: canonicalUrl,
      uniquePageImage: ogImageUrl,
    });
  }
}
