import { NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/ui/header/header.component';
import { IconButtonComponent } from 'src/app/shared/ui/icon-button/icon-button.component';
import { AuthFormSectionComponent } from '../auth-form-section/auth-form-section.component';
import {
  LoginForm,
  LoginFormComponent,
} from '../login-form/login-form.component';

@Component({
  selector: 'app-mobile-login-view',
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
  templateUrl: './mobile-login-view.component.html',
  styleUrl: './mobile-login-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileLoginViewComponent {
  readonly login = output<LoginForm>();
}
