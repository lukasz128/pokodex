import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { FlatButtonComponent } from 'src/app/shared/ui/flat-button/flat-button.component';
import { InputComponent } from 'src/app/shared/ui/input/input.component';
import { PasswordInputComponent } from 'src/app/shared/ui/password-input/password-input.component';

const registerForm = {
  build: () =>
    new FormGroup({
      username: new FormControl('', { nonNullable: true }),
      email: new FormControl('', { nonNullable: true }),
      password: new FormControl('', { nonNullable: true }),
      confirmPassword: new FormControl('', { nonNullable: true }),
    }),
} as const;

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
}
