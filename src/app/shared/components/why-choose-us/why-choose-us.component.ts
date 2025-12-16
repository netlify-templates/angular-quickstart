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
      title: 'Local Texas Hill Country Electricians',
      description:
        'Based in the Texas Hill Country and familiar with local codes, utilities, and construction styles—no out-of-town guessing on how your home or business is built.',
      icon: 'location_on',
    },
    {
      title: 'Licensed, Insured & Code-Compliant',
      description:
        'Work performed by a licensed, insured master electrician who follows NEC standards and local inspection requirements on every installation and repair.',
      icon: 'verified',
    },
    {
      title: 'Fast, Reliable Service',
      description:
        'Prompt scheduling, clear communication, and dependable arrivals so your project stays on track.',
      icon: 'schedule',
    },
    {
      title: 'Upfront Estimates & Clear Scope',
      description:
        'No surprise fees or vague line items. We walk you through options, pricing, and the scope of work before we start so you can make confident decisions.',
      icon: 'attach_money',
    },
    {
      title: 'Residential, Commercial & Rural Experience',
      description:
        'From homes and small businesses to barns, wells, and shops, we bring real-world experience across residential, commercial, and ranch/rural electrical systems.',
      icon: 'handyman',
    },
  ];
}
