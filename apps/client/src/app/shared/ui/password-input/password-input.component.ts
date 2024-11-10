import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  signal,
} from '@angular/core';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ValueAccessorBase } from '../../data-access/value-accestor.base';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { InputComponent } from '../input/input.component';

type InputValue = string | null;

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [
    InputComponent,
    MatIconModule,
    IconButtonComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordInputComponent extends ValueAccessorBase<InputValue> {
  protected readonly isVisibleText = signal<boolean>(false);

  readonly placeholder = input<string>('');

  constructor() {
    super(inject(NgControl));
  }

  protected toggleVisibleState() {
    this.isVisibleText.update((state) => !state);
  }
}
