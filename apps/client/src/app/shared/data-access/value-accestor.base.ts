import {
  AbstractControl,
  ControlValueAccessor,
  NgControl,
} from '@angular/forms';
// import { ErrorMessages, getErrorMessage } from './get-error-message.base';

export abstract class ValueAccessorBase<T> implements ControlValueAccessor {
  isDisabled = false;
  private innerValue: T | null = null;

  protected constructor(protected ngControl: NgControl) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    } else {
      throw new Error(`ngControl not found`);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  emitValueChangeEvent: (value: T | null) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  emitTouchEvent: () => void = () => {};

  writeValue(value: T | null): void {
    this.innerValue = value;
    this.handleValueChangeFromOutside();
  }

  registerOnChange(onChangeFn: (_: T | null) => void): void {
    this.emitValueChangeEvent = onChangeFn;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnTouched(onTouch: any): void {
    this.emitTouchEvent = onTouch;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  get value(): T | null {
    return this.innerValue;
  }

  set value(value: T | null) {
    if (this.innerValue !== value) {
      this.innerValue = value;
      this.emitValueChangeEvent(value);
      this.emitTouchEvent();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected handleValueChangeFromOutside(): void {}

  get parentForm(): AbstractControl | null {
    return this.ngControl?.control?.root ?? null;
  }

  get isInvalid(): boolean {
    return !!this.ngControl.touched && !!this.ngControl.invalid;
  }

  get isValid(): boolean {
    return !!this.ngControl.dirty && !!this.ngControl.valid;
  }

  // getErrorMessages(customErrors: ErrorMessages = {}): string {
  //   const controlErrors = this.ngControl.errors;
  //   if (!controlErrors) {
  //     return '';
  //   }

  //   const errors = Object.keys(controlErrors);
  //   if (!errors || errors.length === 0) {
  //     return '';
  //   }

  //   const errorMessages = errors.map(
  //     (errorId) => customErrors[errorId] ?? getErrorMessage(errorId, controlErrors[errorId]),
  //   );
  //   return errorMessages.length ? errorMessages[0] : '';
  // }
}
