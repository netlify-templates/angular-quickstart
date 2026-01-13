import {
  Inject,
  Injectable,
  Optional,
  PLATFORM_ID,
  REQUEST,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AbsoluteUrlService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Optional() @Inject(REQUEST) private req: any
  ) {}

  /** Full absolute URL for current request (SSR) or current location (browser). */
  getAbsoluteUrl(): string {
    // Browser
    if (isPlatformBrowser(this.platformId)) {
      return window.location.href;
    }

    // SSR (Express request)
    const headers = this.req?.headers ?? {};
    const xfProto = headers['x-forwarded-proto'];
    const xfHost = headers['x-forwarded-host'];
    const host = xfHost || headers['host'];
    const proto = (Array.isArray(xfProto) ? xfProto[0] : xfProto) || 'https';

    const originalUrl = this.req?.originalUrl || this.req?.url || '/';
    return `${proto}://${host}${originalUrl}`;
  }

  /** Canonical: absolute URL without query/hash (recommended). */
  getCanonicalUrl(): string {
    const url = this.getAbsoluteUrl();
    return url.split('#')[0].split('?')[0];
  }
}
