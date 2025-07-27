import { inject, Injectable } from '@angular/core';
import { AuthApiService } from '../../data-access/auth-api/auth-api.service';
import {
  LoginCredentials,
  RegisterCredentials,
} from '../../data-access/auth.models';

@Injectable()
export class AuthService {
  private readonly _api = inject(AuthApiService);

  login$(credentials: LoginCredentials) {
    return this._api.login$(credentials);
  }

  register$(credentials: RegisterCredentials) {
    return this._api.register$(credentials);
  }

  // login$ = of().pipe(
  //   exhaustMap((credentials: LoginCredentials) => {
  //     return this._api.login$(credentials).pipe(shareReplay());
  //   }),
  // );

  // loginError$ = this.login$.pipe(
  //   catchError((error) => {
  //     return of(error.message);
  //   }),
  // );

  constructor() {
    // this.loginError$.subscribe(console.log);
  }
}
