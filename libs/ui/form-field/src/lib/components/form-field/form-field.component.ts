import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  effect,
  InjectionToken,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { LabelDirective } from '@pokodex/ui/common';

export type UiFormFieldAppearance = 'outline';

export abstract class UiFormFieldOptions {}

export const UiFormFieldToken = new InjectionToken<UiFormFieldOptions>(
  'FormFieldOptions',
);

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
  private readonly inputContentChild =
    contentChild<HTMLInputElement>('input[uiInput]');

  readonly appearance = input<UiFormFieldAppearance>('outline');

  protected readonly hasLabel = contentChild(LabelDirective);

  // protected readonly placeholder = ;

  blee = effect(() => {
    console.log(this.inputContentChild());
  });
}
