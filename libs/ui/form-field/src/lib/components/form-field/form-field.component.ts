import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  ElementRef,
  inject,
  InjectionToken,
  input,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import {
  LabelDirective,
  PrefixDirective,
  SuffixDirective,
  ValueAccessorBase,
} from '@pokodex/ui/common';
import { CanColor } from 'libs/ui/common/src/lib/directives/color/can-color.directive';
import { filter, fromEvent, map, merge, Observable, switchMap } from 'rxjs';

export interface FormFieldContent<TValue> extends ValueAccessorBase<TValue> {
  focus$: Observable<Event>;
  blur$: Observable<Event>;
}

export const formFieldContentToken = new InjectionToken<
  FormFieldContent<unknown>
>('FormFieldContent');

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
  hostDirectives: [CanColor],
  host: {
    class: 'ui-form-field',
    '[class.ui-form-field--outline]': `appearance() === 'outline'`,
  },
})
export class UiFormFieldComponent extends UiFormFieldOptions {
  private readonly _elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  private readonly _content = contentChild(formFieldContentToken);
  private readonly _content$ = toObservable(this._content).pipe(
    filter(
      (content): content is FormFieldContent<unknown> => content !== undefined,
    ),
  );

  private readonly _labelRef = viewChild<ElementRef<HTMLElement>>('labelRef');

  private readonly _contentEventsForPlaceholderListener$ = merge(
    this._content$.pipe(
      switchMap((content) => content.focus$),
      map(() => true),
    ),
    this._content$.pipe(
      switchMap((content) => content.blur$),
      map(() => false),
    ),
  );

  private readonly _placeholderClickListener$ = toObservable(
    this._labelRef,
  ).pipe(
    filter(
      (placeholder): placeholder is ElementRef<HTMLElement> =>
        placeholder !== undefined,
    ),
    switchMap((placeholder) => fromEvent(placeholder.nativeElement, 'click')),
    map(() => true),
  );

  private readonly _clickOutsideComponentListener$ = fromEvent<MouseEvent>(
    this._elementRef.nativeElement,
    'click',
  ).pipe(
    map((element) =>
      this._elementRef.nativeElement.contains(element.target as Node),
    ),
  );

  private readonly _isActiveLabel$ = merge(
    this._contentEventsForPlaceholderListener$,
    this._placeholderClickListener$,
    this._clickOutsideComponentListener$,
  ).pipe(
    map((value) => {
      const hasContentValue = !!this._content()?.value;
      if (hasContentValue) return true;

      return value;
    }),
  );

  readonly appearance = input<UiFormFieldAppearance>('outline');

  protected readonly label = contentChild(LabelDirective);
  protected readonly suffix = contentChild(SuffixDirective);
  protected readonly prefix = contentChild(PrefixDirective);

  protected readonly isActiveLabel = toSignal(this._isActiveLabel$, {
    initialValue: false,
  });
}
