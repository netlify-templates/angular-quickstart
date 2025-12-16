import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CtaButtonComponent } from '../cta-button/cta-button.component';

interface HeroServiceCard {
  title: string;
  description: string;
  ctaLabel: string;
  routerLink: string;
  icon: string;
}
@Component({
  standalone: true,
  selector: 'app-action-banner',
  templateUrl: './action-banner.component.html',
  styleUrls: ['./action-banner.component.scss'],
  imports: [CommonModule, MatButtonModule, MatCardModule, CtaButtonComponent],
})
export class ActionBannerComponent {
  heroServiceCards: HeroServiceCard[] = [
    {
      title: 'Residential Electrical Services',
      description:
        'Repairs, panel upgrades, lighting, and smart home work handled by a licensed residential electrician serving homes across the Texas Hill Country.',
      ctaLabel: 'View Residential Services',
      routerLink: '/services/residential',
      icon: 'home',
    },
    {
      title: 'Commercial Electrical Services',
      description:
        'Tenant build-outs, code upgrades, lighting retrofits, and troubleshooting to keep your shop, office, or facility running safely and efficiently.',
      ctaLabel: 'View Commercial Services',
      routerLink: '/services/commercial',
      icon: 'apartment',
    },
    {
      title: 'Ranch & Rural Electrical Services',
      description:
        'Power solutions for barns, wells, shops, and acreage properties—including trenching, outdoor power, and equipment circuits across the Hill Country.',
      ctaLabel: 'View Ranch & Rural Services',
      routerLink: '/services/ranch-rural',
      icon: 'agriculture',
    },
    {
      title: 'Industrial Electrical Services',
      description:
        'Industrial wiring, troubleshooting, lighting, and inspections to keep critical electrical systems safe, reliable, and in compliance with code.',
      ctaLabel: 'View Industrial Services',
      routerLink: '/services/industrial',
      icon: 'factory',
    },
  ];

  onCallNow(): void {
    const phoneNumber = '8309285046';
    window.location.href = `tel:${phoneNumber}`;
  }
}
