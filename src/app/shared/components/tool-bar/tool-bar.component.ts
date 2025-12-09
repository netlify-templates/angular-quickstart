import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
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
  navLinks: NavLink[] = [
    { label: 'Home', path: '/home' },
    { label: 'Services', path: '/services-overview' },
    {
      label: 'Areas We Serve',
      path: '/texas-hill-country-electrician',
      children: [
        {
          label: 'Texas Hill Country',
          path: '/texas-hill-country-electrician',
        },
        { label: 'Bandera, TX', path: '/electrician-bandera-tx' },
        { label: 'Boerne, TX', path: '/electrician-boerne-tx' },
        { label: 'Center Point, TX', path: '/electrician-center-point-tx' },
        { label: 'Comfort, TX', path: '/electrician-comfort-tx' },
        { label: 'Fredericksburg, TX', path: '/electrician-fredericksburg-tx' },
        { label: 'Helotes, TX', path: '/electrician-helotes-tx' },
        { label: 'Hunt, TX', path: '/electrician-hunt-tx' },
        { label: 'Ingram, TX', path: '/electrician-ingram-tx' },
        { label: 'Kerrville, TX', path: '/electrician-kerrville-tx' },
      ],
    },
    { label: 'Projects', path: '/projects' },
    { label: 'Careers', path: '/careers' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact Us', path: '/contact-us' },
  ];
}
