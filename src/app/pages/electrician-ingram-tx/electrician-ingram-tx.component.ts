import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import {
  TOWN_CONFIGS,
  TownPageConfig,
} from 'src/app/shared/configs/town-page.config';
import { TownPageComponent } from 'src/app/shared/components/town-page/town-page.component';

@Component({
  selector: 'app-electrician-ingram-tx',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    TownPageComponent,
  ],
  templateUrl: './electrician-ingram-tx.component.html',
  styleUrls: ['./electrician-ingram-tx.component.scss'],
})
export class ElectricianIngramTxComponent {
  config: TownPageConfig = TOWN_CONFIGS['ingram'];

  constructor() {}
}
