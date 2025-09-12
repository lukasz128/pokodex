import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  effect,
  inject,
  InjectionToken,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { LabelDirective } from '@pokodex/ui/common';

export interface FormFieldContent {
  placeholder: string;
}

export const formFieldContentToken = new InjectionToken<FormFieldContent>(
  'FormFieldContent',
);

export type UiFormFieldAppearance = 'outline';

export abstract class UiFormFieldOptions {}

export const UiFormFieldToken = new InjectionToken<UiFormFieldOptions>(
  'FormFieldOptions',
);

export interface AvailableFormat {
  selector: string;
}

const AVAILABLE_FORMATS: AvailableFormat[] = [
  { selector: 'input[uiInput]' },
  { selector: '[uiSelect]' },
];

@Component({
  selector: 'ui-form-field',
  standalone: true,
  imports: [],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: UiFormFieldToken, useExisting: UiFormFieldComponent }],
  host: {
    class: 'ui-form-field',
    '[class.ui-form-field--outline]': `appearance() === 'outline'`,
  },
})
export class UiFormFieldComponent extends UiFormFieldOptions {
  private readonly _content = inject(formFieldContentToken);

  private readonly _inputContentChild =
    contentChild<HTMLInputElement>('input[uiInput]');
  private readonly _selectContentChild = contentChild('[uiSelect]');

  readonly appearance = input<UiFormFieldAppearance>('outline');

  protected readonly hasLabel = contentChild(LabelDirective);

  protected readonly contentSelector = AVAILABLE_FORMATS[1]['selector'];

  protected readonly placeholder = this._content.placeholder;

  blee = effect(() => {
    console.log(this._inputContentChild(), this.placeholder);
  });
}
