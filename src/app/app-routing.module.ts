import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./pages/about-us/about-us.component').then(
        (m) => m.AboutUsComponent
      ),
  },
  {
    path: 'careers',
    loadComponent: () =>
      import('./pages/careers/careers.component').then(
        (m) => m.CareersComponent
      ),
  },
  {
    path: 'commercial',
    loadComponent: () =>
      import('./pages/commercial/commercial.component').then(
        (m) => m.CommercialComponent
      ),
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./pages/contact-us/contact-us.component').then(
        (m) => m.ContactUsComponent
      ),
  },
  {
    path: 'electrician-bandera-tx',
    loadComponent: () =>
      import(
        './pages/electrician-bandera-tx/electrician-bandera-tx.component'
      ).then((m) => m.ElectricianBanderaTxComponent),
  },
  {
    path: 'electrician-boerne-tx',
    loadComponent: () =>
      import(
        './pages/electrician-boerne-tx/electrician-boerne-tx.component'
      ).then((m) => m.ElectricianBoerneTxComponent),
  },
  {
    path: 'electrician-center-point-tx',
    loadComponent: () =>
      import(
        './pages/electrician-center-point-tx/electrician-center-point-tx.component'
      ).then((m) => m.ElectricianCenterPointTxComponent),
  },
  {
    path: 'electrician-comfort-tx',
    loadComponent: () =>
      import(
        './pages/electrician-comfort-tx/electrician-comfort-tx.component'
      ).then((m) => m.ElectricianComfortTxComponent),
  },
  {
    path: 'electrician-fredericksburg-tx',
    loadComponent: () =>
      import(
        './pages/electrician-fredericksburg-tx/electrician-fredericksburg-tx.component'
      ).then((m) => m.ElectricianFredericksburgTxComponent),
  },
  {
    path: 'electrician-helotes-tx',
    loadComponent: () =>
      import(
        './pages/electrician-helotes-tx/electrician-helotes-tx.component'
      ).then((m) => m.ElectricianHelotesTxComponent),
  },
  {
    path: 'electrician-hunt-tx',
    loadComponent: () =>
      import('./pages/electrician-hunt-tx/electrician-hunt-tx.component').then(
        (m) => m.ElectricianHuntTxComponent
      ),
  },
  {
    path: 'electrician-ingram-tx',
    loadComponent: () =>
      import(
        './pages/electrician-ingram-tx/electrician-ingram-tx.component'
      ).then((m) => m.ElectricianIngramTxComponent),
  },
  {
    path: 'electrician-kerrville-tx',
    loadComponent: () =>
      import(
        './pages/electrician-kerrville-tx/electrician-kerrville-tx.component'
      ).then((m) => m.ElectricianKerrvilleTxComponent),
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./pages/privacy-policy/privacy-policy.component').then(
        (m) => m.PrivacyPolicyComponent
      ),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
  },
  {
    path: 'services-overview',
    loadComponent: () =>
      import('./pages/services-overview/services-overview.component').then(
        (m) => m.ServicesOverviewComponent
      ),
  },
  {
    path: 'terms-of-service',
    loadComponent: () =>
      import('./pages/terms-of-service/terms-of-service.component').then(
        (m) => m.TermsOfServiceComponent
      ),
  },
  {
    path: 'testimonials',
    loadComponent: () =>
      import('./pages/testimonials/testimonials.component').then(
        (m) => m.TestimonialsComponent
      ),
  },
  {
    path: 'texas-hill-country-electrician',
    loadComponent: () =>
      import('./pages/texas-hill-country/texas-hill-country.component').then(
        (m) => m.TexasHillCountryComponent
      ),
  },
  { path: '**', redirectTo: '/home' }, // Wildcard for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
