import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { Router, RouterModule } from '@angular/router';

interface HillCountryArea {
  city: string;
  state: string;
  path: string;
}

@Component({
  selector: 'app-areas-we-serve',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    RouterModule,
  ],
  templateUrl: './areas-we-serve.component.html',
  styleUrls: ['./areas-we-serve.component.scss'],
})
export class AreasWeServeComponent {
  @Input() leftAlign: boolean = false;

  constructor(private router: Router) {}

  headquarters: HillCountryArea = {
    city: 'Kerrville',
    state: 'TX',
    path: '/areas/kerrville',
  };
  surroundingAreas: HillCountryArea[] = [
    {
      city: 'Bandera',
      state: 'TX',
      path: '/service-areas/bandera-tx-electrician',
    },
    {
      city: 'Boerne',
      state: 'TX',
      path: '/service-areas/boerne-tx-electrician',
    },
    {
      city: 'Center Point',
      state: 'TX',
      path: '/service-areas/center-point-tx-electrician',
    },
    {
      city: 'Comfort',
      state: 'TX',
      path: '/service-areas/comfort-tx-electrician',
    },
    {
      city: 'Fredericksburg',
      state: 'TX',
      path: '/service-areas/fredericksburg-tx-electrician',
    },
    {
      city: 'Helotes',
      state: 'TX',
      path: '/service-areas/helotes-tx-electrician',
    },
    { city: 'Hunt', state: 'TX', path: '/service-areas/hunt-tx-electrician' },
    {
      city: 'Ingram',
      state: 'TX',
      path: '/service-areas/ingram-tx-electrician',
    },
    {
      city: 'Kerrville',
      state: 'TX',
      path: '/service-areas/kerrville-tx-electrician',
    },
  ];

  onTownClick(town: HillCountryArea): void {
    console.log('Navigating to town:', town);
    if (town.path) {
      console.log('Router navigating to:', town.path);
      this.router.navigate([town.path]).then(() => {
        window.scrollTo(0, 0);
      });
    }
  }
}
