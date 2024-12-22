import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesktopAuthFormSectionComponent } from '../desktop-auth-form-section/desktop-auth-form-section.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

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
export class DesktopLoginViewComponent {}
