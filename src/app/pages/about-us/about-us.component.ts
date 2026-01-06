import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { SeoService } from 'src/app/shared/services/seo.service';

// ⬇️ Update this import path to wherever your SeoService lives

interface Stat {
  label: string;
  value: string;
  icon: string;
}

interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
  ],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  phoneNumber = '(830)-955-2909';
  stats: Stat[] = [
    {
      label: 'Years Serving the Hill Country',
      value: '15+',
      icon: 'calendar_month',
    },
    {
      label: 'Residential, Commercial & Industrial Projects',
      value: '2,000+',
      icon: 'bolt',
    },
    {
      label: 'Locally Owned & Family Operated',
      value: 'Since 2010',
      icon: 'family_restroom',
    },
    {
      label: 'Licensed · Bonded · Insured',
      value: '100%',
      icon: 'verified_user',
    },
  ];

  values: ValueItem[] = [
    {
      icon: 'shield',
      title: 'Safety & Code Compliance',
      description:
        'Every project is completed to NEC and local code requirements. We treat your property like our own and never cut corners on safety.',
    },
    {
      icon: 'thumb_up',
      title: 'Quality Workmanship',
      description:
        'From fuses and breakers to full panel upgrades and new construction wiring, we focus on clean installs and long-term reliability.',
    },
    {
      icon: 'handshake',
      title: 'Integrity & Clear Communication',
      description:
        'We provide honest recommendations, free estimates, and straightforward explanations so you always know what is being done and why.',
    },
    {
      icon: 'local_fire_department',
      title: 'Fast, Reliable Service',
      description:
        'We understand downtime costs money. Our team responds quickly to restore power, troubleshoot issues, and keep homes and businesses running.',
    },
  ];

  timeline: TimelineItem[] = [
    {
      year: '2010',
      title: 'ProVolt Electric is Founded',
      description:
        'After years in the trade, Scott Raggo starts ProVolt Electric as a local, family-owned electrical company based in the Hill Country.',
    },
    {
      year: '2012–2015',
      title: 'Growing Residential & Commercial Service',
      description:
        'Word-of-mouth referrals help ProVolt expand from service calls and panel upgrades into remodels, new construction, and commercial projects.',
    },
    {
      year: '2016–2020',
      title: 'Commercial & Community Projects',
      description:
        'The team completes work for local churches, gas stations, and commercial entities, earning a reputation for safety, professionalism, and reliability.',
    },
    {
      year: 'Today',
      title: 'Trusted Hill Country Partner',
      description:
        'With a highly skilled crew and decades of combined experience, ProVolt Electric continues to deliver fast, dependable service across Kerrville, Fredericksburg, and the surrounding Hill Country.',
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
        'About ProVolt Electric | Family-Owned Electrician in Kerrville & Fredericksburg, TX',
      description:
        'Learn about ProVolt Electric, a family-owned electrical contractor founded in 2010. Led by master electrician Scott Raggo, we provide fast, reliable residential, commercial, and industrial electrical services in Kerrville, Fredericksburg, and the Texas Hill Country.',
      url: 'https://provoltelectricalservices.com/about',
      type: 'website',
      // 🔧 Optional: set a real image URL if you have a hero/OG image
      // image: 'https://provoltelectricalservices.com/assets/og/about-provolt.jpg',
      robots: 'index,follow',
    });
  }

  private setupJsonLd(): void {
    const jsonLdObject = {
      '@context': 'https://schema.org',
      '@type': 'Electrician',
      name: 'ProVolt Electrical Services',
      alternateName: 'ProVolt Electric',
      url: 'https://provoltelectricalservices.com',
      description:
        'ProVolt Electrical Services is a local, family-owned electrical service established in 2010. We provide fast, reliable residential, commercial, and industrial electrical solutions across Kerrville, Fredericksburg, and the Texas Hill Country.',
      telephone: '+1-830-955-2909', // TODO: replace with real number
      foundingDate: '2010',
      founder: {
        '@type': 'Person',
        name: 'Scott Raggo',
      },
      foundingLocation: {
        '@type': 'Place',
        name: 'Kerrville, Texas',
      },
      areaServed: [
        'Kerrville TX',
        'Fredericksburg TX',
        'Boerne TX',
        'Bandera TX',
        'Comfort TX',
        'Helotes TX',
        'Ingram TX',
        'Hunt TX',
        'Center Point TX',
        'Texas Hill Country',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kerrville',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
      sameAs: [
        'https://www.facebook.com/provoltelectric',
        'https://www.instagram.com/provoltelectric',
      ],
    };

    // This will inject <script id="json-ld-about-provolt"> into <head>
    this.seo.setJsonLd('json-ld-about-provolt', jsonLdObject);
  }

  onCallNow(): void {
    window.location.href = `tel:${this.phoneNumber}`;
  }
}
