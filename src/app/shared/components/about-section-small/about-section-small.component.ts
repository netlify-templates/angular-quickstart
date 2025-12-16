import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';

@Component({
  standalone: true,
  selector: 'app-about-section-small',
  templateUrl: './about-section-small.component.html',
  styleUrls: ['./about-section-small.component.scss'],
  imports: [CommonModule, MatCardModule, MatDivider],
})
export class AboutSectionSmallComponent {}
