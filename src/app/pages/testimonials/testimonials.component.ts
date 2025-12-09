import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

// ⬇️ Update this path to wherever your SeoService lives
import { SeoService } from 'src/app/shared/services/seo.service';

type TestimonialCategory = 'residential' | 'commercial' | 'rural' | 'emergency';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  category: TestimonialCategory;
  headline: string;
  body: string;
  rating: number; // 1–5
  dateLabel: string;
  serviceTags: string[];
  isHighlighted?: boolean;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
})
export class TestimonialsComponent implements OnInit {
  readonly categories: { key: 'all' | TestimonialCategory; label: string }[] = [
    { key: 'all', label: 'All reviews' },
    { key: 'residential', label: 'Residential' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'rural', label: 'Ranch & Rural' },
    { key: 'emergency', label: 'Emergency repair' },
  ];

  private readonly allTestimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah M.',
      location: 'Fredericksburg, TX',
      category: 'residential',
      headline: 'Professional, on time, and very thorough',
      rating: 5,
      dateLabel: 'Completed March 2025',
      serviceTags: ['Panel upgrade', 'Surge protection'],
      isHighlighted: true,
      body: 'ProVolt upgraded our old panel to 200 amps and walked us through every step. They were on time, cleaned up after themselves, and made our home feel much safer. We’re ready for future additions like an EV charger with no worries.',
    },
    {
      id: 2,
      name: 'Hill Country Outfitters',
      location: 'Kerrville, TX',
      category: 'commercial',
      headline: 'Huge difference in lighting and energy bills',
      rating: 5,
      dateLabel: 'Completed January 2025',
      serviceTags: ['LED retrofit', 'Commercial lighting'],
      isHighlighted: true,
      body: 'Our shop went from dim and flickery to bright and inviting. ProVolt handled the LED retrofit after hours so we didn’t have to close early. Our staff and customers immediately noticed the difference—and our electric bill went down.',
    },
    {
      id: 3,
      name: 'Jake & Emily R.',
      location: 'Boerne, TX',
      category: 'emergency',
      headline: 'Answered the phone and fixed it the same night',
      rating: 5,
      dateLabel: 'Emergency call – February 2025',
      serviceTags: ['Emergency repair', 'Main breaker'],
      body: 'We lost power to half the house on a cold evening. ProVolt picked up on the first call, found a failing main breaker, and coordinated with the utility. Everything was safe and back online the same night.',
    },
    {
      id: 4,
      name: 'Lazy Creek Ranch',
      location: 'Bandera, TX',
      category: 'rural',
      headline: 'Reliable power for our barn and equipment',
      rating: 5,
      dateLabel: 'Completed November 2024',
      serviceTags: ['Ranch wiring', 'Barn subpanel'],
      body: 'We needed proper power for welders, fans, and lighting in our metal barn. ProVolt trenched the new feed, installed a subpanel, and added durable lighting inside and out. Everything is labeled and easy to use.',
    },
    {
      id: 5,
      name: 'Connor L.',
      location: 'Helotes, TX',
      category: 'residential',
      headline: 'Clean work and great communication',
      rating: 5,
      dateLabel: 'Completed December 2024',
      serviceTags: ['Kitchen lighting', 'Exterior lighting'],
      body: 'From the estimate to the final walk-through, communication was excellent. The new recessed lights and under-cabinet lighting transformed our kitchen, and the landscape lighting makes the house look great at night.',
    },
  ];

  selectedCategory = signal<'all' | TestimonialCategory>('all');

  filteredTestimonials = computed(() => {
    const category = this.selectedCategory();
    if (category === 'all') {
      return this.allTestimonials;
    }
    return this.allTestimonials.filter((t) => t.category === category);
  });

  averageRating = computed(() => {
    if (!this.allTestimonials.length) return 0;
    const total = this.allTestimonials.reduce((sum, t) => sum + t.rating, 0);
    return total / this.allTestimonials.length;
  });

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setMetaTags({
      title:
        'Electrician Reviews & Testimonials | ProVolt Electrical Services Hill Country',
      description:
        'Read real customer reviews for ProVolt Electrical Services. See why homeowners, businesses, and ranch owners across the Texas Hill Country trust us for panel upgrades, lighting, ranch wiring, and emergency electrical repairs.',
      type: 'website',
      robots: 'index,follow',
    });

    this.seo.setJsonLd('json-ld-testimonials', this.buildJsonLd());
  }

  changeCategory(categoryKey: 'all' | TestimonialCategory): void {
    this.selectedCategory.set(categoryKey);
  }

  trackByTestimonialId(index: number, testimonial: Testimonial): number {
    return testimonial.id;
  }

  getStars(rating: number): number[] {
    return [1, 2, 3, 4, 5].map((star) => (star <= rating ? 1 : 0));
  }

  private buildJsonLd(): unknown {
    const avg = this.averageRating();
    const reviewCount = this.allTestimonials.length;
    const baseUrl =
      typeof window !== 'undefined'
        ? window.location.href
        : 'https://provoltelectricalservices.com/testimonials';

    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'ProVolt Electrical Services',
      url: baseUrl,
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'TX',
        addressCountry: 'US',
        addressLocality: 'Texas Hill Country',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: avg.toFixed(1),
        reviewCount,
      },
      review: this.allTestimonials.map((t) => ({
        '@type': 'Review',
        author: t.name,
        reviewBody: t.body,
        name: t.headline,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: t.rating,
          bestRating: 5,
          worstRating: 1,
        },
      })),
    };
  }
}
