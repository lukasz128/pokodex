import { Injectable } from '@angular/core';
import { ApiService } from '../../../shared/data-access/api/api.service';
import { LoginCredentials, RegisterCredentials } from '../auth.models';

@Injectable()
export class AuthApiService extends ApiService {
  login$(credentials: LoginCredentials) {
    return this.post('/login', credentials);
  }

  register$(credentials: RegisterCredentials) {
    return this.post('/register', credentials);
  }
}
