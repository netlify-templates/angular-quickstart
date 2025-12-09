import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

// ⬇️ Update this path to your actual SeoService location
import { SeoService } from 'src/app/shared/services/seo.service';

type ProjectCategory = 'residential' | 'commercial' | 'rural' | 'emergency';

interface Project {
  id: number;
  title: string;
  location: string;
  category: ProjectCategory;
  summary: string;
  highlights: string[];
  scopeLabel: string; // e.g. "Whole-home panel upgrade"
  durationLabel: string; // e.g. "Completed in 2 days"
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
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
export class ProjectsComponent implements OnInit {
  readonly categories: { key: 'all' | ProjectCategory; label: string }[] = [
    { key: 'all', label: 'All projects' },
    { key: 'residential', label: 'Residential' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'rural', label: 'Ranch & Rural' },
    { key: 'emergency', label: 'Emergency repair' },
  ];

  private readonly allProjects: Project[] = [
    {
      id: 1,
      title: 'Whole-Home Panel Upgrade & Surge Protection',
      location: 'Fredericksburg, TX',
      category: 'residential',
      scopeLabel: '200-amp service upgrade, surge protection',
      durationLabel: 'Completed in 2 days',
      featured: true,
      summary:
        'Replaced an undersized, outdated panel with a new 200-amp service, added whole-home surge protection, and labeled all circuits for a growing Hill Country home.',
      highlights: [
        'Corrected multiple code violations',
        'Prepared home for future EV charger and hot tub',
        'Improved safety and reduced nuisance breaker trips',
      ],
    },
    {
      id: 2,
      title: 'Commercial Lighting Retrofit for Local Retail Shop',
      location: 'Kerrville, TX',
      category: 'commercial',
      scopeLabel: 'LED retrofit, lighting design',
      durationLabel: 'Completed in 1 night',
      featured: true,
      summary:
        'Converted outdated fluorescent fixtures to high-efficiency LEDs, improving light quality and lowering monthly energy costs for a busy downtown retailer.',
      highlights: [
        'Reduced lighting energy usage by ~40%',
        'Eliminated frequent ballast and lamp failures',
        'Improved color rendering for product displays',
      ],
    },
    {
      id: 3,
      title: 'Ranch Power Extension & Barn Wiring',
      location: 'Bandera, TX',
      category: 'rural',
      scopeLabel: 'New feeder, barn subpanel, lighting',
      durationLabel: 'Completed in 3 days',
      summary:
        'Installed a new underground feeder to a metal barn, added a subpanel, interior and exterior lighting, and dedicated circuits for welders and tools.',
      highlights: [
        'Weather-resistant outdoor wiring methods',
        'Dedicated 240V circuits for equipment',
        'Lighting plan for both safety and usability',
      ],
    },
    {
      id: 4,
      title: 'Emergency Main Breaker Replacement',
      location: 'Boerne, TX',
      category: 'emergency',
      scopeLabel: 'After-hours main breaker repair',
      durationLabel: 'Same-day restoration',
      summary:
        'Responded after hours to a no-power situation caused by a failing main breaker. Diagnosed, replaced components, and coordinated with the utility for safe re-energizing.',
      highlights: [
        'Safety-first coordination with power company',
        'Restored power the same evening',
        'Verified proper operation of all major loads',
      ],
    },
    {
      id: 5,
      title: 'Kitchen & Exterior Lighting Upgrade',
      location: 'Helotes, TX',
      category: 'residential',
      scopeLabel: 'Recessed lighting, under-cabinet, landscape',
      durationLabel: 'Completed in 1.5 days',
      summary:
        'Modernized a Hill Country home with recessed LED cans, under-cabinet lighting, and low-voltage landscape lights for better nighttime curb appeal.',
      highlights: [
        'Dimmable, warm-white LEDs for comfort',
        'Added task lighting for food prep',
        'Timed exterior lighting for energy savings',
      ],
    },
  ];

  selectedCategory = signal<'all' | ProjectCategory>('all');

  filteredProjects = computed(() => {
    const category = this.selectedCategory();
    if (category === 'all') {
      return this.allProjects;
    }
    return this.allProjects.filter((p) => p.category === category);
  });

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setMetaTags({
      title:
        'Electrical Projects in the Texas Hill Country | ProVolt Electrical Services',
      description:
        'Explore recent electrical projects completed by ProVolt Electrical Services across Fredericksburg, Kerrville, Boerne, Bandera, and the Texas Hill Country – from panel upgrades and LED retrofits to ranch wiring and emergency repairs.',
      type: 'website',
      robots: 'index,follow',
    });

    this.seo.setJsonLd('json-ld-projects', this.buildJsonLd());
  }

  changeCategory(categoryKey: 'all' | ProjectCategory): void {
    this.selectedCategory.set(categoryKey);
  }

  trackByProjectId(index: number, project: Project): number {
    return project.id;
  }

  private buildJsonLd(): unknown {
    const baseUrl =
      typeof window !== 'undefined'
        ? window.location.href
        : 'https://provoltelectricalservices.com/projects';

    return {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'ProVolt Electrical Services Projects',
      description:
        'Portfolio of residential, commercial, ranch, and emergency electrical projects completed by ProVolt Electrical Services in the Texas Hill Country.',
      url: baseUrl,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: this.allProjects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: project.title,
          description: project.summary,
          item: {
            '@type': 'Service',
            name: project.scopeLabel,
            areaServed: project.location,
            provider: {
              '@type': 'LocalBusiness',
              name: 'ProVolt Electrical Services',
            },
          },
        })),
      },
    };
  }
}
