import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoMetaConfig {
  title: string;
  description: string;
  canonicalUrl: string;
  uniquePageImage?: string;
  type?: string; // e.g. 'website', 'article'
  robots?: string; // e.g. 'index,follow'
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly GLOBAL_JSON_LD_ID = 'json-ld-main';
  private readonly PAGE_JSON_LD_ID = 'json-ld-page';

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  setMetaTags(config: SeoMetaConfig): void {
    const {
      title,
      description,
      canonicalUrl, // <- prefer always passing this
      uniquePageImage,
      type = 'website',
      // @Nathaniel make sure that this isnt set in the terms of service and prrivacy policy page and possible the contact us pafe.
      robots = 'index,follow',
    } = config;

    // Ensure English-only signals (better to set lang in index.html, but this is safe)
    // this.document.documentElement.lang = 'en';

    // Update page title every time this function is called
    this.title.setTitle(title);

    // Standard meta
    this.meta.updateTag(
      { name: 'description', content: description },
      'name="description"'
    );
    this.meta.updateTag({ name: 'robots', content: robots }, 'name="robots"');

    // English locale for sharing previews
    this.meta.updateTag(
      { property: 'og:locale', content: 'en_US' },
      'property="og:locale"'
    );

    // Open Graph basics
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
    this.meta.updateTag(
      { property: 'og:site_name', content: 'ProVolt Electrical Services' },
      'property="og:site_name"'
    );
    this.meta.updateTag(
      { property: 'og:image:alt', content: title },
      'property="og:image:alt"'
    );

    // Canonical + OG URL (only if provided)
    if (canonicalUrl) {
      this.setCanonical(canonicalUrl);
      this.meta.updateTag(
        { property: 'og:url', content: canonicalUrl },
        'property="og:url"'
      );
    } else {
      // If you want, you can remove canonical when url not provided:
      // const link = this.document.querySelector('link[rel="canonical"]');
      // link?.parentNode?.removeChild(link);
      this.meta.removeTag('property="og:url"');
    }

    if (uniquePageImage) {
      this.meta.updateTag(
        { property: 'og:image', content: uniquePageImage },
        'property="og:image"'
      );
      this.meta.updateTag(
        { property: 'og:image:secure_url', content: uniquePageImage },
        'property="og:image:secure_url"'
      );
      this.meta.updateTag(
        { property: 'og:image:width', content: '1200' },
        'property="og:image:width"'
      );
      this.meta.updateTag(
        { property: 'og:image:height', content: '630' },
        'property="og:image:height"'
      );
    } else {
      // @Nathaniel do i need to remove all these tags if no image?
      this.meta.removeTag('property="og:image"');
      this.meta.removeTag('property="og:image:secure_url"');
      this.meta.removeTag('property="og:image:width"');
      this.meta.removeTag('property="og:image:height"');
    }

    // Twitter
    const twitterCard = uniquePageImage ? 'summary_large_image' : 'summary';
    // @Nathaniel make sure to add the twitter account if you make one here
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

    if (uniquePageImage) {
      this.meta.updateTag(
        { name: 'twitter:image', content: uniquePageImage },
        'name="twitter:image"'
      );
      this.meta.updateTag(
        { name: 'twitter:image:alt', content: title },
        'name="twitter:image:alt"'
      );
    } else {
      this.meta.removeTag('name="twitter:image"');
      this.meta.removeTag('name="twitter:image:alt"');
    }
  }

  // ----------------------------
  // JSON-LD "SLOTS" (new)
  // ----------------------------

  /** Set the global JSON-LD (site identity). Call once in AppComponent. */
  setGlobalJsonLd(jsonLdObject: unknown): void {
    this.setJsonLd(this.GLOBAL_JSON_LD_ID, jsonLdObject);
  }

  /** Set/replace the page JSON-LD. Call in every routed page's ngOnInit(). */
  setPageJsonLd(jsonLdObject: unknown): void {
    this.setJsonLd(this.PAGE_JSON_LD_ID, jsonLdObject);
  }

  /** Remove the current page JSON-LD slot (rarely needed if every page sets one). */
  clearPageJsonLd(): void {
    this.removeJsonLd(this.PAGE_JSON_LD_ID);
  }

  // ----------------------------
  // JSON-LD CORE (existing, slightly hardened)
  // ----------------------------
  setJsonLd(id: string, jsonLdObject: unknown): void {
    const nextJson = this.safeJsonLdStringify(jsonLdObject);

    const existing = this.document.getElementById(
      id
    ) as HTMLScriptElement | null;

    // If it already exists and content is identical, do nothing (helps SSR/hydration + avoids churn)
    if (existing && (existing.textContent ?? '') === nextJson) return;

    if (existing?.parentNode) existing.parentNode.removeChild(existing);

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.textContent = nextJson;

    // Head should exist, but fallback just in case
    (this.document.head ?? this.document.documentElement).appendChild(script);
  }

  private safeJsonLdStringify(obj: unknown): string {
    // Prevent HTML parsing edge-cases in <script> content
    return JSON.stringify(obj)
      .replace(/</g, '\\u003c')
      .replace(/>/g, '\\u003e')
      .replace(/&/g, '\\u0026');
  }

  removeJsonLd(id: string): void {
    const existing = this.document.getElementById(id);
    if (existing?.parentNode) existing.parentNode.removeChild(existing);
  }

  private setCanonical(canonicalUrl: string): void {
    const next = (canonicalUrl ?? '').trim();
    if (!next) return;

    let linkEl = this.document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    if (!linkEl) {
      linkEl = this.document.createElement('link');
      linkEl.setAttribute('rel', 'canonical');
      this.document.head.appendChild(linkEl);
    }

    // Avoid unnecessary overwrites (and reduce chances of “last caller wins” churn)
    const current = linkEl.getAttribute('href');
    if (current === next) return;

    linkEl.setAttribute('href', next);
  }
}
