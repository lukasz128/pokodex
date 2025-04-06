import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/ui/header/header.component';
import { AuthFormSectionComponent } from '../auth-form-section/auth-form-section.component';
import {
  RegisterForm,
  RegisterFormComponent,
} from '../register-form/register-form.component';

@Component({
  selector: 'app-mobile-register-view',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    AuthFormSectionComponent,
    RegisterFormComponent,
    RouterModule,
    MatIcon,
  ],
  templateUrl: './mobile-register-view.component.html',
  styleUrl: './mobile-register-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileRegisterViewComponent {
  protected registerUser(userData: RegisterForm) {}
}
