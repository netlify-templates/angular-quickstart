import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToolBarComponent } from './shared/components/tool-bar/tool-bar.component';
import { ActionBannerComponent } from './shared/components/action-banner/action-banner.component';
import { FooterSectionComponent } from './shared/components/footer-section/footer-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterSectionComponent,
    ToolBarComponent,
    ActionBannerComponent,
    BrowserAnimationsModule,
    RouterModule,
  ],
  providers: [provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent],
})
export class AppModule {}
