import { Route } from '@angular/router';
import { AuthShellComponent } from './auth-shell.component';

export default [
  {
    path: '',
    component: AuthShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadComponent: () =>
          import('../login-page/login-page.component').then(
            (c) => c.LoginPageComponent,
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('../register-page/register-page.component').then(
            (c) => c.RegisterPageComponent,
          ),
      },
      // {
      //   path: 'forgot-password',
      // },
    ],
  },
] satisfies Route[];
