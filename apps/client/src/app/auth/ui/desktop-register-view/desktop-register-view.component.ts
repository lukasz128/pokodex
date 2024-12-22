import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DesktopAuthFormSectionComponent } from '../desktop-auth-form-section/desktop-auth-form-section.component';
import { RegisterFormComponent } from '../register-form/register-form.component';

@Component({
  selector: 'app-desktop-register-view',
  standalone: true,
  imports: [
    RegisterFormComponent,
    NgOptimizedImage,
    RouterModule,
    MatIcon,
    DesktopAuthFormSectionComponent,
  ],
  templateUrl: './desktop-register-view.component.html',
  styleUrl: './desktop-register-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesktopRegisterViewComponent {}
