import { Component, inject } from '@angular/core';
import { BreakpointsObserver } from '../../../shared/data-access/breakpoints-observer/breakpoints-observer';
import { DesktopRegisterViewComponent } from '../../ui/desktop-register-view/desktop-register-view.component';
import { MobileRegisterViewComponent } from '../../ui/mobile-register-view/mobile-register-view.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [MobileRegisterViewComponent, DesktopRegisterViewComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  protected readonly isDesktop = inject(BreakpointsObserver).desktop;
}
