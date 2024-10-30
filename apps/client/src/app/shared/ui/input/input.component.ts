import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { NgControl } from '@angular/forms';
import { fromEvent, map, mergeMap } from 'rxjs';
import { ValueAccessorBase } from '../../data-access/value-accestor.base';

type InputValue = string | number | null;
export type InputType = 'text' | 'password' | 'search';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent extends ValueAccessorBase<InputValue> {
  private readonly _inputRef = viewChild.required<HTMLInputElement>('ref');
  private readonly _inputRef$ = toObservable(this._inputRef);

  protected readonly isActivePlaceholder$ = this._inputRef$.pipe(
    mergeMap((input) => fromEvent(input, 'focus').pipe(map(() => true))),
  );

  readonly type = input<InputType>('text');
  readonly placeholder = input<string>('');

  constructor() {
    const ngControl = inject(NgControl);
    super(ngControl);
  }

  protected setInput(value: InputValue) {
    this.value = value;
  }
}
