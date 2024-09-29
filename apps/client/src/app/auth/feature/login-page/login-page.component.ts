import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthApiService } from '../../data-access/auth-api/auth-api.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  private readonly _api = inject(AuthApiService);

  protected readonly test = this._api.testApiCall();
}
