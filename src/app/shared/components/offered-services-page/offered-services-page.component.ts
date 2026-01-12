import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { AreasWeServeComponent } from '../../../shared/components/areas-we-serve/areas-we-serve.component';
import { SiteData } from '../../configs/site-data.config';

interface ServiceItem {
  title: string;
  category: string; // e.g., 'Residential' | 'Commercial' | 'RanchAndRural' | 'Both'
  icon: string;
  description: string;
  bullets: string[];
}

interface LinkCard {
  title: string;
  description: string;
  icon: string;
  path: string;
}

interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface HeroData {
  title: string;
  subtitle: string;
  trustLine: string;
  actionButtonText: string;
}

@Component({
  selector: 'app-offered-services-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatChipsModule,
    MatExpansionModule,
    AreasWeServeComponent,
  ],
  templateUrl: './offered-services-page.component.html',
  styleUrls: ['./offered-services-page.component.scss'],
})
export class OfferedServicesPageComponent {
  readonly siteData = SiteData;
  phoneNumber = this.siteData.phoneNumber;

  @Input() serviceTitle = 'Electrical Services';
  @Input() hero!: HeroData;
  @Input() whoWeHelp: string[] = [];

  @Input() popularSectionTitle = 'Popular Work';
  @Input() popularSectionSubtitle = '';
  @Input() popularCards: LinkCard[] = [];

  @Input() services: ServiceItem[] = [];
  @Input() showCategorySubtitle = true;
  @Input() customCategoryLabel?: string; // if provided, used when category !== 'Both'

  @Input() processSteps: ProcessStep[] = [];
  @Input() faqs: FaqItem[] = [];

  @Input() footerText!: string;

  trackByTitle(_: number, item: { title: string }) {
    return item.title;
  }
}
