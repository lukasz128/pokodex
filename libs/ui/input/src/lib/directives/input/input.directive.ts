import { Directive, ElementRef, inject } from '@angular/core';
import {
  FormFieldContent,
  formFieldContentToken,
} from '@pokodex/ui/form-field';

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
export class UiInputDirective implements FormFieldContent {
  private readonly _elementRef =
    inject<ElementRef<HTMLInputElement>>(ElementRef);
  constructor() {}

  placeholder = this._elementRef.nativeElement.placeholder;
}
