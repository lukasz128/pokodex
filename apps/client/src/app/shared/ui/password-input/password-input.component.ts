import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  signal,
} from '@angular/core';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { UiIconButtonComponent } from '@pokodex/ui/button';
import { ValueAccessorBase } from '@pokodex/ui/common';
import { UiFormFieldModule } from '@pokodex/ui/form-field';
import { UiInputDirective } from '@pokodex/ui/input';

type InputValue = string | null;

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    UiInputDirective,
    UiFormFieldModule,
    UiIconButtonComponent,
  ],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.--brown]': `color() === 'brown'`,
  },
})
export class PasswordInputComponent extends ValueAccessorBase<InputValue> {
  protected readonly isVisibleText = signal<boolean>(false);
  readonly color = input<'brown' | 'white'>('white');

  readonly placeholder = input<string>('');

  constructor() {
    super(inject(NgControl));
  }

  protected toggleVisibleState() {
    this.isVisibleText.update((state) => !state);
  }
}
