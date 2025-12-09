import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-about-section-small',
  templateUrl: './about-section-small.component.html',
  styleUrls: ['./about-section-small.component.scss'],
  imports: [CommonModule, MatCardModule],
})
export class AboutSectionSmallComponent {}
