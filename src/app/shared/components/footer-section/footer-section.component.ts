import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SiteData } from '../../configs/site-data.config';
import { SitePaths } from '../../configs/site-urls.config';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss'],
})
export class FooterSectionComponent {
  readonly siteData = SiteData;
  readonly sitePaths = SitePaths;

  contactInfo = {
    address: this.siteData.businessAddress,
    phone: this.siteData.phoneNumberFormatted,
    email: this.siteData.email,
  };

  quickLinks = [
    { label: 'Home', routerLink: this.sitePaths.home },
    { label: 'About', routerLink: this.sitePaths.aboutUs },
    { label: 'Services', routerLink: this.sitePaths.electricalServices },
    { label: 'Contact', routerLink: this.sitePaths.contactUs },
    { label: 'Privacy Policy', routerLink: this.sitePaths.privacyPolicy },
    { label: 'Terms of Service', routerLink: this.sitePaths.termsOfService },
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
