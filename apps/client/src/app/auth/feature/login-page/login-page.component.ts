import { NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/shared/ui/header/header.component';
import { LoginFormComponent } from '../../ui/login-form/login-form.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    LoginFormComponent,
    UpperCasePipe,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {}
