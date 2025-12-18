import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-about-section-small',
  templateUrl: './about-section-small.component.html',
  styleUrls: ['./about-section-small.component.scss'],
  imports: [CommonModule, MatCardModule, MatDivider, MatIconModule],
})
export class AboutSectionSmallComponent {}
