import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  viewChild,
} from '@angular/core';
import { outputFromObservable, toObservable } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { UiFlatButtonComponent } from '@pokodex/ui/button';
import { UiFormFieldModule } from '@pokodex/ui/form-field';
import { UiInputDirective } from '@pokodex/ui/input';
import {
  catchError,
  EMPTY,
  filter,
  fromEvent,
  map,
  switchMap,
  tap,
} from 'rxjs';
import { PasswordInputComponent } from '../../../shared/ui/password-input/password-input.component';
import { LoginCredentials } from '../../data-access/auth.models';

export type LoginForm = LoginCredentials;

type LoginFormControls = {
  username: FormControl<string>;
  password: FormControl<string>;
};

const loginForm = {
  build: () =>
    new FormGroup<LoginFormControls>(
      {
        username: new FormControl('', {
          nonNullable: true,
          validators: Validators.required,
        }),
        password: new FormControl('', {
          nonNullable: true,
          validators: Validators.required,
        }),
      },
      { updateOn: 'submit' },
    ),
} as const;

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PasswordInputComponent,
    UiInputDirective,
    UiFormFieldModule,
    MatIconModule,
    UiFlatButtonComponent,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  private readonly _form =
    viewChild.required<ElementRef<HTMLFormElement>>('formRef');

  protected readonly formGroup = loginForm.build();

  readonly login = outputFromObservable(
    toObservable(this._form).pipe(
      switchMap((form) =>
        fromEvent(form.nativeElement, 'submit').pipe(
          tap(() => this.formGroup.markAllAsTouched()),
          filter(() => this.formGroup.status === 'VALID'),
          map(() => this.formGroup.getRawValue()),
          catchError((error) => {
            console.error(error);
            return EMPTY;
          }),
        ),
      ),
    ),
  );
}
