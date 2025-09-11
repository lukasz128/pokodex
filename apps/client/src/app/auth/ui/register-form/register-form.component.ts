import { ChangeDetectionStrategy, Component } from '@angular/core';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { filter, map, tap } from 'rxjs';
import { FlatButtonComponent } from '../../../shared/ui/flat-button/flat-button.component';
import { InputComponent } from '../../../shared/ui/input/input.component';
import { PasswordInputComponent } from '../../../shared/ui/password-input/password-input.component';

const registerForm = {
  build: () =>
    new FormGroup(
      {
        username: new FormControl('', {
          nonNullable: true,
          validators: Validators.required,
        }),
        email: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required, Validators.email],
        }),
        password: new FormControl('', {
          nonNullable: true,
          validators: Validators.required,
        }),
        confirmPassword: new FormControl('', {
          nonNullable: true,
          validators: Validators.required,
        }),
      },
      // TODO (Łukasz) add validators for passwrd & confirmPassword
      { updateOn: 'submit' },
    ),
} as const;

export type RegisterForm = ReturnType<(typeof registerForm)['build']>['value'];

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    PasswordInputComponent,
    FlatButtonComponent,
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {
  protected readonly formGroup = registerForm.build();

  readonly register = outputFromObservable(
    this.formGroup.valueChanges.pipe(
      tap(() => this.formGroup.markAllAsTouched()),
      map((value) => {
        return { value, isInvalid: this.formGroup.status === 'INVALID' };
      }),
      filter(({ isInvalid }) => !isInvalid),
      map(({ value }) => value),
    ),
  );
}
