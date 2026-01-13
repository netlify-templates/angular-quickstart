import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

import { TownPageComponent } from 'src/app/shared/components/town-page/town-page.component';
import {
  TOWN_CONFIGS,
  TownPageConfig,
} from 'src/app/shared/configs/town-page.config';

@Component({
  selector: 'app-electrician-kerrville-tx',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    TownPageComponent,
  ],
  templateUrl: './electrician-kerrville-tx.component.html',
  styleUrls: ['./electrician-kerrville-tx.component.scss'],
})
export class ElectricianKerrvilleTxComponent {
  config: TownPageConfig = TOWN_CONFIGS['kerrville'];

  constructor() {}
}
