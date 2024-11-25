import { Component, inject } from '@angular/core';
import { BreakpointsObserver } from 'src/app/shared/data-access/breakpoints-observer/breakpoints-observer';
import { DesktopLoginViewComponent } from '../../ui/desktop-login-view/desktop-login-view.component';
import { MobileLoginViewComponent } from '../../ui/mobile-login-view/mobile-login-view.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MobileLoginViewComponent, DesktopLoginViewComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  protected readonly isDesktop = inject(BreakpointsObserver).desktop;
}
