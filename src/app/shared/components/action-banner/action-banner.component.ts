import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-action-banner',
  templateUrl: './action-banner.component.html',
  styleUrls: ['./action-banner.component.css'],
  imports: [CommonModule, MatButtonModule, MatCardModule],
})
export class ActionBannerComponent {
  cards = [
    {
      title: 'Repairs',
      description: 'Quick fixes to keep your power flowing safely.',
    },
    {
      title: 'Panels',
      description: 'Expert troubleshooting for all electrical issues.',
    },
    {
      title: 'Service',
      description: 'Reliable service with safety as our top priority.',
    },
  ];

  onCallNow(): void {
    // hook up to tel: link, dialog, or router navigation
    // window.location.href = 'tel:8300000000';
    console.log('Call Now clicked');
  }
}
