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

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  setMetaTags(config: SeoMetaConfig): void {
    const {
      title,
      description,
      url = this.document.location?.href ?? '',
      image,
      type = 'website',
      robots = 'index,follow',
    } = config;

    this.title.setTitle(title);

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: robots });

    // Canonical
    this.setCanonical(url);

    // Open Graph
    this.meta.updateTag({ property: 'og:type', content: type });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    if (image) this.meta.updateTag({ property: 'og:image', content: image });

    // Twitter
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    if (image) this.meta.updateTag({ name: 'twitter:image', content: image });
  }

  setJsonLd(id: string, jsonLdObject: unknown): void {
    const existing = this.document.getElementById(id);
    if (existing?.parentNode) existing.parentNode.removeChild(existing);

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify(jsonLdObject);
    this.document.head.appendChild(script);
  }

  removeJsonLd(id: string): void {
    const existing = this.document.getElementById(id);
    if (existing?.parentNode) existing.parentNode.removeChild(existing);
  }

  removeJsonLdByPrefix(prefix: string): void {
    const scripts = Array.from(
      this.document.querySelectorAll<HTMLScriptElement>(
        'script[type="application/ld+json"]'
      )
    );
    scripts
      .filter((s) => s.id && s.id.startsWith(prefix))
      .forEach((s) => s.parentNode?.removeChild(s));
  }

  private setCanonical(url: string): void {
    let linkEl = this.document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (!linkEl) {
      linkEl = this.document.createElement('link');
      linkEl.setAttribute('rel', 'canonical');
      this.document.head.appendChild(linkEl);
    }
    linkEl.setAttribute('href', url);
  }
}
