import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import {
  TownPageConfig,
  TOWN_CONFIGS,
} from 'src/app/shared/configs/town-page.config';
import { TownPageComponent } from 'src/app/shared/components/town-page/town-page.component';

@Component({
  selector: 'app-electrician-hunt-tx',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    TownPageComponent,
  ],
  templateUrl: './electrician-hunt-tx.component.html',
  styleUrls: ['./electrician-hunt-tx.component.scss'],
})
export class ElectricianHuntTxComponent {
  config: TownPageConfig = TOWN_CONFIGS['hunt'];

  constructor() {}
}
