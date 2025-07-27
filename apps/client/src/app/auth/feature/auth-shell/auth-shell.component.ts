import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthApiService } from '../../data-access/auth-api/auth-api.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth-shell',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './auth-shell.component.html',
  styleUrl: './auth-shell.component.scss',
  providers: [AuthService, AuthApiService],
})
export class AuthShellComponent {}
