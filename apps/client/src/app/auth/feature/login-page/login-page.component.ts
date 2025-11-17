import {
  Component,
  DestroyRef,
  inject,
  OnInit,
  viewChild,
} from '@angular/core';
import {
  outputToObservable,
  takeUntilDestroyed,
  toObservable,
} from '@angular/core/rxjs-interop';
import { BreakpointsObserver } from '@pokodex/ui/layout';
import { catchError, exhaustMap, filter, merge, of, switchMap } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { DesktopLoginViewComponent } from '../../ui/desktop-login-view/desktop-login-view.component';
import { MobileLoginViewComponent } from '../../ui/mobile-login-view/mobile-login-view.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MobileLoginViewComponent, DesktopLoginViewComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent implements OnInit {
  private readonly _authService = inject(AuthService);
  private readonly _destroyRef = inject(DestroyRef);

  private readonly _desktopLoginView = viewChild(DesktopLoginViewComponent);
  private readonly _mobileLoginView = viewChild(MobileLoginViewComponent);

  private readonly _login$ = merge(
    toObservable(this._desktopLoginView).pipe(
      filter((view): view is DesktopLoginViewComponent => view !== undefined),
      switchMap((view) => outputToObservable(view.login)),
    ),
    toObservable(this._mobileLoginView).pipe(
      filter((view): view is MobileLoginViewComponent => view !== undefined),
      switchMap((view) => outputToObservable(view.login)),
    ),
  ).pipe(
    exhaustMap((credentials) =>
      this._authService.login$(credentials).pipe(
        catchError((error) => {
          console.error('Login failed', error);
          return of(null);
        }),
      ),
    ),
    catchError((error) => {
      console.error('Login failed', error);
      return of(null);
    }),
  );

  protected readonly isDesktop = inject(BreakpointsObserver).desktop;

  ngOnInit(): void {
    this._login$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe();
  }
}
