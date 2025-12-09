import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface ServiceCard {
  title: string;
  description: string;
  icon: string;
}

@Component({
  standalone: true,
  selector: 'app-electrical-service-cards',
  templateUrl: './electrical-service-cards.component.html',
  styleUrls: ['./electrical-service-cards.component.scss'],
  imports: [CommonModule, MatCardModule, MatIconModule],
})
export class ElectricalServiceCardsComponent {
  services: ServiceCard[] = [
    {
      title: 'Home Electrical',
      description:
        'From panel upgrades and lighting installation to whole-home rewiring, our residential electricians ensure your home is safe, efficient, and up to code. We handle troubleshooting, repairs, and new construction wiring.',
      icon: 'bolt',
    },
    {
      title: 'Business Solutions',
      description:
        'We provide commercial electrical services including tenant build-outs, code compliance upgrades, lighting retrofits, and emergency repairs. Keep your business running safely and efficiently with ProVolt.',
      icon: 'business',
    },
    {
      title: 'EV & Generators',
      description:
        'Specialized in EV charger installation, backup generator setup, and smart home wiring. Our team brings advanced solutions to your property, ensuring seamless integration and reliable performance.',
      icon: 'ev_station',
    },
    {
      title: 'Service Upgrades',
      description:
        'Upgrade your electrical panel, add circuits, or improve surge protection. We modernize your system for safety, capacity, and future needs, always following NEC standards.',
      icon: 'upgrade',
    },
    {
      title: 'Lighting Design',
      description:
        'Enhance your space with custom lighting solutions, including LED upgrades, landscape lighting, and security lighting. We design and install for beauty, safety, and energy savings.',
      icon: 'light_mode',
    },
    {
      title: 'Maintenance Plans',
      description:
        'Protect your investment with scheduled electrical maintenance. Our plans include annual inspections, priority scheduling, and exclusive discounts for Hill Country homeowners and businesses.',
      icon: 'event_available',
    },
  ];
}
