import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { Router, RouterModule } from '@angular/router';
import { SitePaths } from '../../configs/site-urls.config';

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
      city: 'Boerne',
      state: 'TX',
      path: `${SitePaths.serviceAreas}/${SitePaths.boerneTxElectrician}`,
    },
    {
      city: 'Comfort',
      state: 'TX',
      path: `${SitePaths.serviceAreas}/${SitePaths.comfortTxElectrician}`,
    },
    {
      city: 'Fredericksburg',
      state: 'TX',
      path: `${SitePaths.serviceAreas}/${SitePaths.fredericksburgTxElectrician}`,
    },
    {
      city: 'Helotes',
      state: 'TX',
      path: `${SitePaths.serviceAreas}/${SitePaths.helotesTxElectrician}`,
    },
    {
      city: 'Ingram',
      state: 'TX',
      path: `${SitePaths.serviceAreas}/${SitePaths.ingramTxElectrician}`,
    },
    {
      city: 'Kerrville',
      state: 'TX',
      path: `${SitePaths.serviceAreas}/${SitePaths.kerrvilleTxElectrician}`,
    },
    {
      city: '+3 more (View all 9) ',
      state: '',
      path: `${SitePaths.serviceAreas}/${SitePaths.texasHillCountryElectrician}`,
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
