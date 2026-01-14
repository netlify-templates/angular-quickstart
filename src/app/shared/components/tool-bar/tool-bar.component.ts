import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

interface NavLink {
  label: string;
  path?: string;
  children?: NavLink[];
}

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
  ],
})
export class ToolBarComponent {
  @Input() sidenav?: MatSidenav;

  // @Nathaniel make these paths consistent with SitePaths config later
  navLinks: NavLink[] = [
    { label: 'Home', path: '/home' },
    {
      label: 'Electrical Services',
      path: '/electrical-services',
      children: [
        {
          label: 'All Electrical Services',
          path: '/electrical-services',
        },
        {
          label: 'Residential',
          path: '/electrical-services/residential-electrician',
        },
        {
          label: 'Commercial',
          path: '/electrical-services/commercial-electrician',
        },

        {
          label: 'Ranch & Rural',
          path: '/electrical-services/ranch-rural-electrician',
        },
      ],
    },
    {
      label: 'Service Areas',
      path: '/service-areas/texas-hill-country-electrician',
      children: [
        {
          label: 'All Service Areas',
          path: '/service-areas/texas-hill-country-electrician',
        },
        { label: 'Bandera, TX', path: '/service-areas/bandera-tx-electrician' },
        { label: 'Boerne, TX', path: '/service-areas/boerne-tx-electrician' },
        {
          label: 'Center Point, TX',
          path: '/service-areas/center-point-tx-electrician',
        },
        { label: 'Comfort, TX', path: '/service-areas/comfort-tx-electrician' },
        {
          label: 'Fredericksburg, TX',
          path: '/service-areas/fredericksburg-tx-electrician',
        },
        { label: 'Helotes, TX', path: '/service-areas/helotes-tx-electrician' },
        { label: 'Hunt, TX', path: '/service-areas/hunt-tx-electrician' },
        { label: 'Ingram, TX', path: '/service-areas/ingram-tx-electrician' },
        {
          label: 'Kerrville, TX',
          path: '/service-areas/kerrville-tx-electrician',
        },
      ],
    },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact Us', path: '/contact-us' },
  ];
}
