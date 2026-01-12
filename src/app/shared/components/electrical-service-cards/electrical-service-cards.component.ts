import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CtaButtonComponent } from '../cta-button/cta-button.component';
import { RouterModule } from '@angular/router';
import { HERO_SERVICE_CARDS } from '../../configs/site-service-descriptions';

interface HeroServiceCard {
  title: string;
  description: string;
  ctaLabel: string;
  routerLink: string;
  icon: string;
  bullets: string[];
}
@Component({
  standalone: true,
  selector: 'app-electrical-service-cards',
  templateUrl: './electrical-service-cards.component.html',
  styleUrls: ['./electrical-service-cards.component.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    CtaButtonComponent,
    RouterModule,
  ],
})
export class ElectricalServiceCardsComponent {
  services: HeroServiceCard[] = HERO_SERVICE_CARDS;
  @Input() leftAligned: boolean = false;
}
