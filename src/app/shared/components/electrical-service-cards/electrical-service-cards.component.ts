import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CtaButtonComponent } from '../cta-button/cta-button.component';
import { RouterModule } from '@angular/router';

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
  services: HeroServiceCard[] = [
    {
      title: 'Residential Electrical Services',
      description:
        'Repairs, panel upgrades, lighting, and smart home work handled by a licensed residential electrician serving homes across the Texas Hill Country.',
      ctaLabel: 'View Residential Services',
      routerLink: '/electrical-services/residential-electrician',
      icon: 'home',
      bullets: [
        'Panel upgrades, service upgrades & replacements',
        'Troubleshooting & repairs for lights, outlets & breakers',
        'New construction & remodel wiring to current NEC code',
        'Indoor & outdoor lighting, ceiling fans & fixtures',
        'Smart switches, dimmers, thermostats & home controls',
        'Safety inspections, GFCI/AFCI protection & smoke detectors',
      ],
    },
    {
      title: 'Commercial Electrical Services',
      description:
        'Tenant build-outs, code upgrades, lighting retrofits, and troubleshooting to keep your shop, office, or facility running safely and efficiently.',
      ctaLabel: 'View Commercial Services',
      routerLink: '/electrical-services/commercial-electrician',
      icon: 'apartment',
      bullets: [
        'Troubleshooting for circuits, equipment & lighting systems',
        'Tenant build-outs, additions & new commercial circuits',
        'Code violation repairs & compliance upgrades',
        'Lighting retrofits, controls & energy-efficient LED upgrades',
        'Business safety checks, load analysis & electrical consulting',
        'Emergency repairs & scheduled maintenance to reduce downtime',
      ],
    },
    {
      title: 'Ranch & Rural Electrical Services',
      description:
        'Power solutions for barns, wells, shops, and acreage properties—including trenching, outdoor power, and equipment circuits across the Hill Country.',
      ctaLabel: 'View Ranch & Rural Services',
      routerLink: '/electrical-services/ranch-rural-electrician',
      icon: 'agriculture',
      bullets: [
        'Barn, shop & outbuilding wiring, panels & lighting',
        'Well & pump circuits, controls, protection & repairs',
        'Equipment circuits & receptacles for tools and ag machinery',
        'Trenching & long-run power to gates, arenas & remote structures',
        'Yard, driveway, security & motion lighting for rural properties',
        'Ranch and rural troubleshooting, safety checks & repairs',
      ],
    },
  ];
}
