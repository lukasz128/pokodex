import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DesktopAuthFormSectionComponent } from '../desktop-auth-form-section/desktop-auth-form-section.component';
import {
  LoginForm,
  LoginFormComponent,
} from '../login-form/login-form.component';

@Component({
  selector: 'app-desktop-login-view',
  standalone: true,
  imports: [
    LoginFormComponent,
    NgOptimizedImage,
    RouterModule,
    DesktopAuthFormSectionComponent,
  ],
  templateUrl: './desktop-login-view.component.html',
  styleUrl: './desktop-login-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesktopLoginViewComponent {
  readonly login = output<LoginForm>();
}
