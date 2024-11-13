import { ChangeDetectionStrategy, Component } from '@angular/core';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { tap, map, filter } from 'rxjs';
import { FlatButtonComponent } from 'src/app/shared/ui/flat-button/flat-button.component';
import { InputComponent } from 'src/app/shared/ui/input/input.component';
import { PasswordInputComponent } from 'src/app/shared/ui/password-input/password-input.component';

type LoginForm = {
  username: string;
  password: string;
};

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
    FlatButtonComponent,
    RouterModule,
    InputComponent,
    PasswordInputComponent,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  protected readonly formGroup = loginForm.build();

  readonly login = outputFromObservable(
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
