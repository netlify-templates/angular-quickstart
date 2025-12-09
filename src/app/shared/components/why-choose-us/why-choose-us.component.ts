import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

interface Reason {
  title: string;
  description: string;
  icon: string;
}

@Component({
  standalone: true,
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss'],
  imports: [CommonModule, MatIconModule, MatCardModule],
})
export class WhyChooseUsComponent {
  reasons: Reason[] = [
    {
      title: 'Licensed & Insured',
      description:
        'Fully licensed and insured Hill Country electricians who follow NEC standards and local codes on every job.',
      icon: 'verified',
    },
    {
      title: 'Fast, Reliable Service',
      description:
        'Prompt scheduling, clear communication, and dependable arrivals so your project stays on track.',
      icon: 'schedule',
    },
    {
      title: 'Upfront, Honest Pricing',
      description:
        'No surprise fees or hidden add-ons. We provide clear estimates and options before any work begins.',
      icon: 'attach_money',
    },
    {
      title: 'Safety-First Workmanship',
      description:
        'We treat your home or business like our own, prioritizing safety, cleanliness, and long-term reliability.',
      icon: 'health_and_safety',
    },
  ];
}
