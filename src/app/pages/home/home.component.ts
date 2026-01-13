import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSectionSmallComponent } from 'src/app/shared/components/about-section-small/about-section-small.component';
import { AreasWeServeComponent } from 'src/app/shared/components/areas-we-serve/areas-we-serve.component';
import { CountDownDealComponent } from 'src/app/shared/components/count-down-deal/count-down-deal.component';
import { ElectricalServiceCardsComponent } from 'src/app/shared/components/electrical-service-cards/electrical-service-cards.component';
import { OurServicesProcedureComponent } from 'src/app/shared/components/our-services-procedure/our-services-procedure.component';
import { StayConnectedSectionComponent } from 'src/app/shared/components/stay-connected-section/stay-connected-section.component';
import { WhyChooseUsComponent } from 'src/app/shared/components/why-choose-us/why-choose-us.component';
import { ActionBannerComponent } from 'src/app/shared/components/action-banner/action-banner.component';

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
export class HomeComponent {
  constructor() {}
}
