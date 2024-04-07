import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  {
    path: '',
    loadComponent: () =>
      import('./views/landing-view/landing-view.component').then(
        (c) => c.LandingViewComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
