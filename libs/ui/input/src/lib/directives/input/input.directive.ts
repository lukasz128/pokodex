import {
  DestroyRef,
  Directive,
  ElementRef,
  HostBinding,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgControl } from '@angular/forms';
import { ValueAccessorBase } from '@pokodex/ui/common';
import {
  FormFieldContent,
  formFieldContentToken,
} from '@pokodex/ui/form-field';
import { fromEvent, map, startWith } from 'rxjs';

type InputValue = string | undefined;

@Directive({
  selector: 'input[uiInput]',
  standalone: true,
  providers: [
    {
      provide: formFieldContentToken,
      useExisting: UiInputDirective,
    },
  ],
})
export class UiInputDirective
  extends ValueAccessorBase<InputValue>
  implements FormFieldContent<InputValue>
{
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _elementRef =
    inject<ElementRef<HTMLInputElement>>(ElementRef);
  constructor() {
    super(inject(NgControl, { optional: true, self: true }));

    this._onInputListener();
  }

  focus$ = fromEvent(this._elementRef.nativeElement, 'focus');
  blur$ = fromEvent(this._elementRef.nativeElement, 'blur');

  @HostBinding('attr.value') get value2() {
    return this.value;
  }

  private _onInputListener() {
    fromEvent<KeyboardEvent>(this._elementRef.nativeElement, 'input')
      .pipe(
        map((event) => (event.target as HTMLInputElement).value),
        startWith(this.value),
        takeUntilDestroyed(this._destroyRef),
      )
      .subscribe((value) => {
        this.value = value;
      });
  }
}
