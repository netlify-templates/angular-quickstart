import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// @Nathaniel add title keys to all routes for SEO purposes
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'about-us',
    title: 'About Us - Provolt Electrical Services',
    loadComponent: () =>
      import('./pages/about-us/about-us.component').then(
        (m) => m.AboutUsComponent
      ),
  },
  {
    path: 'careers',
    title: 'Careers - Provolt Electrical Services',
    loadComponent: () =>
      import('./pages/careers/careers.component').then(
        (m) => m.CareersComponent
      ),
  },
  {
    path: 'commercial',
    title: 'Commercial - Provolt Electrical Services',
    loadComponent: () =>
      import('./pages/commercial/commercial.component').then(
        (m) => m.CommercialComponent
      ),
  },
  {
    path: 'contact-us',
    title: 'Contact Us - Provolt Electrical Services',
    loadComponent: () =>
      import('./pages/contact-us/contact-us.component').then(
        (m) => m.ContactUsComponent
      ),
  },
  {
    path: 'electrical-services',
    title: 'Electrical Services - Provolt Electrical Services',
    children: [
      {
        path: '',
        title: 'Electrical Services Overview - Provolt Electrical Services',
        loadComponent: () =>
          import('./pages/services-overview/services-overview.component').then(
            (m) => m.ServicesOverviewComponent
          ),
      },
      {
        path: 'commercial-electrician',
        title: 'Commercial Electrician - Provolt Electrical Services',
        loadComponent: () =>
          import(
            './pages/offered-services/commercial-electrician/commercial-electrician.component'
          ).then((m) => m.CommercialElectricianComponent),
      },
      {
        path: 'ranch-rural-electrician',
        title: 'Ranch & Rural Electrician - Provolt Electrical Services',
        loadComponent: () =>
          import(
            './pages/offered-services/ranch-rural-electrician/ranch-rural-electrician.component'
          ).then((m) => m.RanchRuralElectricianComponent),
      },
      {
        path: 'residential-electrician',
        title: 'Residential Electrician - Provolt Electrical Services',
        loadComponent: () =>
          import(
            './pages/offered-services/residential-electrician/residential-electrician.component'
          ).then((m) => m.ResidentialElectricianComponent),
      },
    ],
  },
  {
    path: 'service-areas',
    title: 'Service Areas - Provolt Electrical Services',
    children: [
      {
        path: 'bandera-tx-electrician',
        title: 'Bandera TX Electrician - Provolt Electrical Services',
        loadComponent: () =>
          import(
            './pages/electrician-bandera-tx/electrician-bandera-tx.component'
          ).then((m) => m.ElectricianBanderaTxComponent),
      },
      {
        path: 'boerne-tx-electrician',
        title: 'Boerne TX Electrician - Provolt Electrical Services',
        loadComponent: () =>
          import(
            './pages/electrician-boerne-tx/electrician-boerne-tx.component'
          ).then((m) => m.ElectricianBoerneTxComponent),
      },
      {
        path: 'center-point-tx-electrician',
        title: 'Center Point TX Electrician - Provolt Electrical Services',
        loadComponent: () =>
          import(
            './pages/electrician-center-point-tx/electrician-center-point-tx.component'
          ).then((m) => m.ElectricianCenterPointTxComponent),
      },
      {
        path: 'comfort-tx-electrician',
        title: 'Comfort TX Electrician - Provolt Electrical Services',
        loadComponent: () =>
          import(
            './pages/electrician-comfort-tx/electrician-comfort-tx.component'
          ).then((m) => m.ElectricianComfortTxComponent),
      },
      {
        path: 'fredericksburg-tx-electrician',
        title: 'Fredericksburg TX Electrician - Provolt Electrical Services',
        loadComponent: () =>
          import(
            './pages/electrician-fredericksburg-tx/electrician-fredericksburg-tx.component'
          ).then((m) => m.ElectricianFredericksburgTxComponent),
      },
      {
        path: 'helotes-tx-electrician',
        title: 'Helotes TX Electrician - Provolt Electrical Services',
        loadComponent: () =>
          import(
            './pages/electrician-helotes-tx/electrician-helotes-tx.component'
          ).then((m) => m.ElectricianHelotesTxComponent),
      },
      {
        path: 'hunt-tx-electrician',
        title: 'Hunt TX Electrician - Provolt Electrical Services',
        loadComponent: () =>
          import(
            './pages/electrician-hunt-tx/electrician-hunt-tx.component'
          ).then((m) => m.ElectricianHuntTxComponent),
      },
      {
        path: 'ingram-tx-electrician',
        title: 'Ingram TX Electrician - Provolt Electrical Services',
        loadComponent: () =>
          import(
            './pages/electrician-ingram-tx/electrician-ingram-tx.component'
          ).then((m) => m.ElectricianIngramTxComponent),
      },
      {
        path: 'kerrville-tx-electrician',
        title: 'Kerrville TX Electrician - Provolt Electrical Services',
        loadComponent: () =>
          import(
            './pages/electrician-kerrville-tx/electrician-kerrville-tx.component'
          ).then((m) => m.ElectricianKerrvilleTxComponent),
      },
      {
        path: 'texas-hill-country-electrician',
        title: 'Texas Hill Country Electrician - Provolt Electrical Services',
        loadComponent: () =>
          import(
            './pages/texas-hill-country/texas-hill-country.component'
          ).then((m) => m.TexasHillCountryComponent),
      },
    ],
  },
  {
    path: 'privacy-policy',
    title: 'Privacy Policy - Provolt Electrical Services',
    loadComponent: () =>
      import('./pages/privacy-policy/privacy-policy.component').then(
        (m) => m.PrivacyPolicyComponent
      ),
  },
  {
    path: 'projects',
    title: 'Projects - Provolt Electrical Services',
    loadComponent: () =>
      import('./pages/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
  },
  {
    path: 'testimonials',
    title: 'Testimonials - Provolt Electrical Services',
    loadComponent: () =>
      import('./pages/testimonials/testimonials.component').then(
        (m) => m.TestimonialsComponent
      ),
  },
  { path: '**', redirectTo: '/home' }, // Wildcard for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
