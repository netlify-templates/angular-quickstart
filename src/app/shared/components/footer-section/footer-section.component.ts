import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss'],
})
export class FooterSectionComponent {
  contactInfo = {
    address: '110 Main St, Fredericksburg, TX 78624',
    phone: '830-555-0192',
    email: 'info@provoltelectric.com',
  };

  quickLinks = [
    { label: 'Home', routerLink: '/' },
    { label: 'About', routerLink: '/about' },
    { label: 'Services', routerLink: '/services' },
    { label: 'Contact', routerLink: '/contact' },
    { label: 'Privacy Policy', routerLink: '/privacy-policy' },
    { label: 'Terms of Service', routerLink: '/terms-of-service' },
  ];

  socialLinks = [
    {
      icon: 'facebook',
      ariaLabel: 'Visit our Facebook',
      href: 'https://facebook.com',
    },
    { icon: 'x', ariaLabel: 'Visit our X profile', href: 'https://x.com' },
    {
      icon: 'linkedin',
      ariaLabel: 'Visit our LinkedIn',
      href: 'https://linkedin.com',
    },
    {
      icon: 'photo_camera',
      ariaLabel: 'Visit our Instagram',
      href: 'https://instagram.com',
    },
  ];
}
