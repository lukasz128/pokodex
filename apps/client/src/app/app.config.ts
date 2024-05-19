import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    BrowserModule,
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    provideHttpClient(),
    BrowserAnimationsModule,
    {
      provide: LOCALE_ID,
      useValue: 'pl-PL',
    },
  ],
};
