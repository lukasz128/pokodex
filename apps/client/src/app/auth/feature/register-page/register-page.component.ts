import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/ui/header/header.component';
import { AuthFormSectionComponent } from '../../ui/auth-form-section/auth-form-section.component';
import {
  RegisterForm,
  RegisterFormComponent,
} from '../../ui/register-form/register-form.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    AuthFormSectionComponent,
    RegisterFormComponent,
    RouterModule,
    MatIcon,
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  protected registerUser(userData: RegisterForm) {
    console.log(userData);
  }
}
