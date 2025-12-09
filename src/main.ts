import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

// This bootstraps using NgModule approach
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// This bootstraps using standalone approach
// bootstrapApplication(AppComponent).catch((err) => console.error(err));
