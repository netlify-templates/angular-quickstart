// src/app/app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'home', renderMode: RenderMode.Prerender },
  { path: 'about-us', renderMode: RenderMode.Prerender },
  { path: 'careers', renderMode: RenderMode.Prerender },
  { path: 'contact-us', renderMode: RenderMode.Prerender },

  { path: 'electrical-services', renderMode: RenderMode.Prerender },
  {
    path: 'electrical-services/commercial-electrician',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'electrical-services/ranch-rural-electrician',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'electrical-services/residential-electrician',
    renderMode: RenderMode.Prerender,
  },

  {
    path: 'service-areas/bandera-tx-electrician',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'service-areas/boerne-tx-electrician',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'service-areas/center-point-tx-electrician',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'service-areas/comfort-tx-electrician',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'service-areas/fredericksburg-tx-electrician',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'service-areas/helotes-tx-electrician',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'service-areas/hunt-tx-electrician',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'service-areas/ingram-tx-electrician',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'service-areas/kerrville-tx-electrician',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'service-areas/texas-hill-country-electrician',
    renderMode: RenderMode.Prerender,
  },

  { path: 'privacy-policy', renderMode: RenderMode.Prerender },
  { path: 'projects', renderMode: RenderMode.Prerender },
  { path: 'testimonials', renderMode: RenderMode.Prerender },

  // Everything else: render a real 404 (recommended)
  { path: '**', renderMode: RenderMode.Server, status: 404 },
];
