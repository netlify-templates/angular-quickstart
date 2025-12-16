import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CtaButtonComponent } from '../cta-button/cta-button.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
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
  // services: ServiceCard[] = [
  //   {
  //     title: 'Home Electrical',
  //     description:
  //       'From panel upgrades and lighting installation to whole-home rewiring, our residential electricians ensure your home is safe, efficient, and up to code. We handle troubleshooting, repairs, and new construction wiring.',
  //     icon: 'bolt',
  //   },
  //   {
  //     title: 'Business Solutions',
  //     description:
  //       'We provide commercial electrical services including tenant build-outs, code compliance upgrades, lighting retrofits, and emergency repairs. Keep your business running safely and efficiently with ProVolt.',
  //     icon: 'business',
  //   },
  //   {
  //     title: 'Service Upgrades',
  //     description:
  //       'Upgrade your electrical panel, add circuits, or improve surge protection. We modernize your system for safety, capacity, and future needs, always following NEC standards.',
  //     icon: 'upgrade',
  //   },
  //   {
  //     title: 'Lighting Design',
  //     description:
  //       'Enhance your space with custom lighting solutions, including LED upgrades, landscape lighting, and security lighting. We design and install for beauty, safety, and energy savings.',
  //     icon: 'light_mode',
  //   },
  //   {
  //     title: 'Maintenance Plans',
  //     description:
  //       'Protect your investment with scheduled electrical maintenance. Our plans include annual inspections, priority scheduling, and exclusive discounts for Hill Country homeowners and businesses.',
  //     icon: 'event_available',
  //   },
  // ];

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
    {
      title: 'Industrial Electrical Services',
      description:
        'Industrial wiring, troubleshooting, lighting, and inspections to keep critical electrical systems safe, reliable, and in compliance with code.',
      ctaLabel: 'View Industrial Services',
      routerLink: '/electrical-services/industrial-electrician',
      icon: 'factory',
      bullets: [
        'Industrial electrical wiring for equipment & process systems',
        'Troubleshooting motors, controls & distribution equipment',
        'Lighting system repair, retrofits & high-bay installations',
        'Code compliance inspections, documentation & corrections',
        'Trenching, conduit & feeders for new equipment pads and sites',
        'Load analysis, panel work & upgrades for facility expansions',
      ],
    },
  ];
}
