// ProVolt Electrical Services is your licensed, insured Hill Country electrician, proudly serving Fredericksburg, Kerrville, Boerne, and surrounding areas. We specialize in residential, commercial, and advanced electrical solutions, always prioritizing safety and strict NEC code compliance. Our experienced team is dedicated to delivering reliable service, building customer trust, and ensuring your peace of mind. Contact us today for fast, professional electrical work in the Texas Hill Country.

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface TrustedStat {
  value: string;
  label: string;
  icon: string;
}

@Component({
  standalone: true,
  selector: 'app-trusted-summary',
  templateUrl: './trusted-summary.component.html',
  styleUrls: ['./trusted-summary.component.css'],
  imports: [CommonModule, MatIconModule],
})
export class TrustedSummaryComponent {
  stats: TrustedStat[] = [
    { value: '50K', label: 'Projects Delivered', icon: 'shield' },
    { value: '200K', label: 'Satisfied Clients', icon: 'percent' },
    { value: '2K', label: 'Cups of Coffee', icon: 'percent' },
  ];
}
