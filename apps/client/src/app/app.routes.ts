import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/feature/auth-shell/routes'),
  },
];
