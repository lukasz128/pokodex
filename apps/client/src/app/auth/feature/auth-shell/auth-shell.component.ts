import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthApiService } from '../../data-access/auth-api/auth-api.service';

@Component({
  selector: 'app-auth-shell',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './auth-shell.component.html',
  styleUrl: './auth-shell.component.scss',
  providers: [AuthApiService],
})
export class AuthShellComponent {}
