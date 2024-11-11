import { NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/ui/header/header.component';
import { IconButtonComponent } from 'src/app/shared/ui/icon-button/icon-button.component';
import { AuthFormSectionComponent } from '../../ui/auth-form-section/auth-form-section.component';
import { LoginFormComponent } from '../../ui/login-form/login-form.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    LoginFormComponent,
    UpperCasePipe,
    RouterModule,
    IconButtonComponent,
    MatIconModule,
    AuthFormSectionComponent,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {}
