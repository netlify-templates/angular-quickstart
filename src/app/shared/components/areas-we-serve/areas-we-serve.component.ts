import { Component } from '@angular/core';
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
  constructor(private router: Router) {}

  headquarters: HillCountryArea = {
    city: 'Kerrville',
    state: 'TX',
    path: '/areas/kerrville',
  };
  surroundingAreas: HillCountryArea[] = [
    { city: 'Bandera', state: 'TX', path: '/bandera-tx-electrician' },
    { city: 'Boerne', state: 'TX', path: '/electrician-boerne-tx' },
    { city: 'Center Point', state: 'TX', path: '/electrician-center-point-tx' },
    { city: 'Comfort', state: 'TX', path: '/electrician-comfort-tx' },
    {
      city: 'Fredericksburg',
      state: 'TX',
      path: '/electrician-fredericksburg-tx',
    },
    { city: 'Helotes', state: 'TX', path: '/electrician-helotes-tx' },
    { city: 'Hunt', state: 'TX', path: '/electrician-hunt-tx' },
    { city: 'Ingram', state: 'TX', path: '/electrician-ingram-tx' },
    //  { city: 'Kerrville, TX', path: '/electrician-kerrville-tx' },
  ];

  onTownClick(town: HillCountryArea): void {
    if (town.path) {
      this.router.navigate([town.path]).then(() => {
        window.scrollTo(0, 0);
      });
    }
  }
}
