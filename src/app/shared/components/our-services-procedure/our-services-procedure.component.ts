import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface ServiceStep {
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  cta: string;
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
      title: 'Request a Quote',
      shortTitle: 'Quote',
      description:
        'Share a few details about your home, business, or ranch project and we’ll review your electrical needs and goals.',
      icon: 'phone_in_talk',
      cta: 'Call, text, or request a quote online to get started.',
    },
    {
      title: 'On-Site Assessment',
      shortTitle: 'Assessment',
      description:
        'When needed, a licensed electrician visits your property to inspect panels, wiring, loads, and access so nothing is missed.',
      icon: 'home_repair_service',
      cta: 'We walk the site with you and answer questions on the spot.',
    },
    {
      title: 'Clear Estimate & Options',
      shortTitle: 'Estimate',
      description:
        'You receive a written estimate with scope, pricing, and options—no vague line items or surprise add-ons.',
      icon: 'receipt_long',
      cta: 'Choose the option that fits your budget and timeline.',
    },
    {
      title: 'Code-Compliant Electrical Work',
      shortTitle: 'Work',
      description:
        'Our team completes the installation, repair, or upgrade following NEC standards, local codes, and manufacturer specs.',
      icon: 'bolt',
      cta: 'We treat your property like our own and keep the workspace tidy.',
    },
    {
      title: 'Testing & Walkthrough',
      shortTitle: 'Walkthrough',
      description:
        'We test breakers, circuits, devices, and lighting, then walk you through what was done and how everything operates.',
      icon: 'check_circle',
      cta: 'Panels are labeled clearly so future work and troubleshooting are easier.',
    },
    {
      title: 'Follow-Up & Support',
      shortTitle: 'Support',
      description:
        'After the job, we’re available for questions, documentation, and future projects as your electrical needs grow.',
      icon: 'support_agent',
      cta: 'Need adjustments or have a new project? ProVolt is just a call away.',
    },
  ];
}
