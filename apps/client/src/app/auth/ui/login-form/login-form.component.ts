import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlatButtonComponent } from 'src/app/shared/ui/flat-button/flat-button.component';
import { InputComponent } from 'src/app/shared/ui/input/input.component';

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
    new FormGroup<LoginFormControls>({
      username: new FormControl('', { nonNullable: true }),
      password: new FormControl('', { nonNullable: true }),
    }),
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
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  protected readonly formGroup = loginForm.build();
}
