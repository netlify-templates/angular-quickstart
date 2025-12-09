import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoMetaConfig {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: string; // e.g. 'website', 'article'
  robots?: string; // e.g. 'index,follow'
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  /**
   * Set HTML <title>, standard meta description, OG, and Twitter tags.
   */
  setMetaTags(config: SeoMetaConfig): void {
    const {
      title,
      description,
      url = this.document.location?.href ?? '',
      image,
      type = 'website',
      robots = 'index,follow',
    } = config;

    // Title
    this.title.setTitle(title);

    // Basic meta
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: robots });

    // Open Graph
    this.meta.updateTag({ property: 'og:type', content: type });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });

    if (image) {
      this.meta.updateTag({ property: 'og:image', content: image });
    }

    // Twitter Card
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });

    if (image) {
      this.meta.updateTag({ name: 'twitter:image', content: image });
    }
  }

  /**
   * Inject/replace a JSON-LD <script> in the <head>.
   * `id` should be unique per page (e.g. 'json-ld-kerrville').
   */
  setJsonLd(id: string, jsonLdObject: unknown): void {
    // Remove existing script with same ID if present
    const existing = this.document.getElementById(id);
    if (existing && existing.parentNode) {
      existing.parentNode.removeChild(existing);
    }

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify(jsonLdObject);

    this.document.head.appendChild(script);
  }
}
