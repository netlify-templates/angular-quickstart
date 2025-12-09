import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

import { SeoService } from 'src/app/shared/services/seo.service';

interface Benefit {
  icon: string;
  label: string;
  description: string;
}

interface Job {
  title: string;
  type: string; // e.g. 'Full Time'
  location: string;
  shift: string;
  summary: string;
  bullets: string[];
}

@Component({
  selector: 'app-careers',
  standalone: true,
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
  ],
})
export class CareersComponent implements OnInit {
  // Page-level config
  private readonly pageUrl = 'https://provoltelectricalservices.com/careers';

  // TODO: point to a real OG image for careers/recruiting
  private readonly ogImage =
    'https://provoltelectricalservices.com/assets/og-default.jpg';

  benefits: Benefit[] = [
    {
      icon: 'handyman',
      label: 'Hands-On Work',
      description:
        'Tackle real electrical challenges in homes, businesses, and rural properties across the Hill Country.',
    },
    {
      icon: 'school',
      label: 'Growth & Training',
      description:
        'Apprenticeship support, code updates, and mentorship from experienced master electricians.',
    },
    {
      icon: 'paid',
      label: 'Competitive Pay',
      description:
        'Hourly and salaried positions with opportunities for overtime, bonuses, and advancement.',
    },
    {
      icon: 'health_and_safety',
      label: 'Safety First',
      description:
        'We invest in PPE, training, and safe work practices so everyone goes home in one piece.',
    },
    {
      icon: 'schedule',
      label: 'Stable Hours',
      description:
        'Consistent work, planned schedules, and rotating on-call shifts—not constant chaos.',
    },
    {
      icon: 'group',
      label: 'Tight-Knit Team',
      description:
        'Work with people who take pride in their craft and have each other’s backs.',
    },
  ];

  jobs: Job[] = [
    {
      title: 'Journeyman Electrician',
      type: 'Full Time',
      location: 'Texas Hill Country (Based near Fredericksburg / Kerrville)',
      shift: 'Day shift + rotating on-call',
      summary:
        'Lead residential and light commercial jobs, mentor apprentices, and ensure work meets NEC and local codes.',
      bullets: [
        '3+ years experience in residential or commercial electrical work',
        'Current Texas Journeyman license',
        'Comfortable running jobs and communicating with homeowners/GCs',
        'Clean driving record and ability to work in varying weather conditions',
      ],
    },
    {
      title: 'Apprentice Electrician',
      type: 'Full Time',
      location: 'Field-based across the Texas Hill Country',
      shift: 'Day shift',
      summary:
        'Support journeymen on installs, service calls, and troubleshooting while logging hours toward your license.',
      bullets: [
        'Enrolled in or willing to enroll in an approved apprenticeship program',
        'Strong mechanical aptitude and desire to learn the trade',
        'Able to lift, carry, climb, and work in attics/crawl spaces',
        'Great attitude, punctuality, and respect for customers’ homes',
      ],
    },
    {
      title: 'Service Dispatcher / Coordinator',
      type: 'Full Time',
      location: 'Office-based (with hybrid flexibility)',
      shift: 'Weekdays with limited on-call rotation',
      summary:
        'Be the voice of ProVolt—coordinate service calls, schedule crews, and keep customers informed.',
      bullets: [
        'Experience in scheduling, dispatch, or office coordination preferred',
        'Comfortable using software to manage jobs and calendars',
        'Strong communication and customer-service skills',
        'Organized, detail-oriented, and calm under pressure',
      ],
    },
  ];

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.setupSeo();
    this.setupJsonLd();
  }

  private setupSeo(): void {
    this.seo.setMetaTags({
      title:
        'Careers at ProVolt Electric | Electrician Jobs in the Texas Hill Country',
      description:
        'Join ProVolt Electric, a family-owned electrical contractor serving Kerrville, Fredericksburg, and the Texas Hill Country. Explore careers for journeyman electricians, apprentices, and office staff with competitive pay, training, and a safety-first culture.',
      url: this.pageUrl,
      image: this.ogImage,
      type: 'website',
      robots: 'index,follow',
    });
  }

  private setupJsonLd(): void {
    // Map your jobs into JobPosting schema objects
    const jobPostings = this.jobs.map((job, index) => {
      // Simple location parsing – this keeps it human-friendly and still useful for schema
      const jobLocation = {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Texas Hill Country',
          addressRegion: 'TX',
          addressCountry: 'US',
        },
      };

      return {
        '@type': 'JobPosting',
        '@id': `${this.pageUrl}#job-${index + 1}`,
        title: job.title,
        description: `${job.summary} ${job.bullets.join(' ')}`,
        hiringOrganization: {
          '@type': 'Organization',
          name: 'ProVolt Electric',
          sameAs: 'https://provoltelectricalservices.com',
          industry: 'Electrical contracting',
        },
        employmentType: job.type || 'FULL_TIME',
        jobLocation: jobLocation,
        workHours: job.shift,
        applicantLocationRequirements: {
          '@type': 'Country',
          name: 'US',
        },
      };
    });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${this.pageUrl}#organization`,
      name: 'ProVolt Electric',
      alternateName: 'ProVolt Electrical Services',
      url: this.pageUrl,
      description:
        'ProVolt Electric is a family-owned electrical contractor serving Kerrville, Fredericksburg, and the Texas Hill Country, hiring journeyman electricians, apprentices, and support staff.',
      sameAs: [
        'https://www.facebook.com/provoltelectric',
        'https://www.instagram.com/provoltelectric',
      ],
      hiringOrganization: {
        '@type': 'Organization',
        name: 'ProVolt Electric',
      },
      jobPosting: jobPostings,
    };

    this.seo.setJsonLd('json-ld-careers-provolt', jsonLd);
  }
}
