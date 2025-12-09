import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-areas-we-serve',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './areas-we-serve.component.html',
  styleUrls: ['./areas-we-serve.component.scss'],
})
export class AreasWeServeComponent {
  locations: string[] = [
    'Wayne, NJ',
    'Englewood Cliffs, NJ',
    'Montclair, NJ',
    'Caldwell, NJ',
    'Bergen County',
    'Hudson County',
    'Essex County',
    'Passaic County',
  ];
}
