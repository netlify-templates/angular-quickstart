import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface ServiceStep {
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-our-services-procedure',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './our-services-procedure.component.html',
  styleUrls: ['./our-services-procedure.component.scss'],
})
export class OurServicesProcedureComponent {
  steps: ServiceStep[] = [
    {
      title: 'Initial Consultation',
      shortTitle: 'Consultation',
      description:
        'We start with a thorough consultation to assess your property’s electrical needs and provide complete peace of mind.',
      icon: 'chat', // e.g. material icon name
    },
    {
      title: 'Affordable Solution',
      shortTitle: 'Solution',
      description:
        'Our licensed electricians perform precise installations, repairs, and replacements, adhering to top safety standards.',
      icon: 'handyman',
    },
    {
      title: 'Final Inspection',
      shortTitle: 'Inspection',
      description:
        'After completing the work, we perform a thorough inspection to ensure your electrical system meets all local codes.',
      icon: 'verified',
    },
  ];
}
