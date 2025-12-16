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
    path: 'electrical-services',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/services-overview/services-overview.component').then(
            (m) => m.ServicesOverviewComponent
          ),
      },
      {
        path: 'commercial-electrician',
        loadComponent: () =>
          import(
            './pages/offered-services/commercial-electrician/commercial-electrician.component'
          ).then((m) => m.CommercialElectricianComponent),
      },
      {
        path: 'ranch-rural-electrician',
        loadComponent: () =>
          import(
            './pages/offered-services/ranch-rural-electrician/ranch-rural-electrician.component'
          ).then((m) => m.RanchRuralElectricianComponent),
      },
      {
        path: 'residential-electrician',
        loadComponent: () =>
          import(
            './pages/offered-services/residential-electrician/residential-electrician.component'
          ).then((m) => m.ResidentialElectricianComponent),
      },
    ],
  },
  {
    path: 'service-areas',
    children: [
      {
        path: 'bandera-tx-electrician',
        loadComponent: () =>
          import(
            './pages/electrician-bandera-tx/electrician-bandera-tx.component'
          ).then((m) => m.ElectricianBanderaTxComponent),
      },
      {
        path: 'boerne-tx-electrician',
        loadComponent: () =>
          import(
            './pages/electrician-boerne-tx/electrician-boerne-tx.component'
          ).then((m) => m.ElectricianBoerneTxComponent),
      },
      {
        path: 'center-point-tx-electrician',
        loadComponent: () =>
          import(
            './pages/electrician-center-point-tx/electrician-center-point-tx.component'
          ).then((m) => m.ElectricianCenterPointTxComponent),
      },
      {
        path: 'comfort-tx-electrician',
        loadComponent: () =>
          import(
            './pages/electrician-comfort-tx/electrician-comfort-tx.component'
          ).then((m) => m.ElectricianComfortTxComponent),
      },
      {
        path: 'fredericksburg-tx-electrician',
        loadComponent: () =>
          import(
            './pages/electrician-fredericksburg-tx/electrician-fredericksburg-tx.component'
          ).then((m) => m.ElectricianFredericksburgTxComponent),
      },
      {
        path: 'helotes-tx-electrician',
        loadComponent: () =>
          import(
            './pages/electrician-helotes-tx/electrician-helotes-tx.component'
          ).then((m) => m.ElectricianHelotesTxComponent),
      },
      {
        path: 'hunt-tx-electrician',
        loadComponent: () =>
          import(
            './pages/electrician-hunt-tx/electrician-hunt-tx.component'
          ).then((m) => m.ElectricianHuntTxComponent),
      },
      {
        path: 'ingram-tx-electrician',
        loadComponent: () =>
          import(
            './pages/electrician-ingram-tx/electrician-ingram-tx.component'
          ).then((m) => m.ElectricianIngramTxComponent),
      },
      {
        path: 'kerrville-tx-electrician',
        loadComponent: () =>
          import(
            './pages/electrician-kerrville-tx/electrician-kerrville-tx.component'
          ).then((m) => m.ElectricianKerrvilleTxComponent),
      },
      {
        path: 'texas-hill-country-electrician',
        loadComponent: () =>
          import(
            './pages/texas-hill-country/texas-hill-country.component'
          ).then((m) => m.TexasHillCountryComponent),
      },
    ],
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
    path: 'terms-of-service',
    loadComponent: () =>
      import('./pages/testimonials/testimonials.component').then(
        (m) => m.TestimonialsComponent
      ),
  },
  {
    path: 'service-areas/texas-hill-country-electrician',
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
