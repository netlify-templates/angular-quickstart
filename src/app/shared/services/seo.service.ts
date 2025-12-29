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
      url, // <- prefer always passing this
      image,
      type = 'website',
      robots = 'index,follow',
    } = config;

    // UPdate page title every time this function is called
    this.title.setTitle(title);

    // Standard
    this.meta.updateTag(
      { name: 'description', content: description },
      'name="description"'
    );
    this.meta.updateTag({ name: 'robots', content: robots }, 'name="robots"');

    // Canonical + OG URL (only if provided)
    if (url) {
      this.setCanonical(url);
      this.meta.updateTag(
        { property: 'og:url', content: url },
        'property="og:url"'
      );
    } else {
      // If you want, you can remove canonical when url not provided:
      // const link = this.document.querySelector('link[rel="canonical"]');
      // link?.parentNode?.removeChild(link);
      this.meta.removeTag('property="og:url"');
    }

    // Open Graph
    this.meta.updateTag(
      { property: 'og:type', content: type },
      'property="og:type"'
    );
    this.meta.updateTag(
      { property: 'og:title', content: title },
      'property="og:title"'
    );
    this.meta.updateTag(
      { property: 'og:description', content: description },
      'property="og:description"'
    );

    if (image) {
      this.meta.updateTag(
        { property: 'og:image', content: image },
        'property="og:image"'
      );
    } else {
      this.meta.removeTag('property="og:image"');
    }

    // Twitter
    const twitterCard = image ? 'summary_large_image' : 'summary';
    this.meta.updateTag(
      { name: 'twitter:card', content: twitterCard },
      'name="twitter:card"'
    );
    this.meta.updateTag(
      { name: 'twitter:title', content: title },
      'name="twitter:title"'
    );
    this.meta.updateTag(
      { name: 'twitter:description', content: description },
      'name="twitter:description"'
    );

    if (image) {
      this.meta.updateTag(
        { name: 'twitter:image', content: image },
        'name="twitter:image"'
      );
    } else {
      this.meta.removeTag('name="twitter:image"');
    }
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
