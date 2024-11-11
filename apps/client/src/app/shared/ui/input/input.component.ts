import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  contentChild,
  DestroyRef,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { NgControl } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { fromEvent, map, merge, mergeMap } from 'rxjs';
import { ValueAccessorBase } from '../../data-access/value-accestor.base';

type InputValue = string | number | null;
export type InputType = 'text' | 'password' | 'search' | 'email';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [AsyncPipe, MatIconModule, NgTemplateOutlet],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.--brown]': `color() === 'brown'`,
  },
})
export class InputComponent
  extends ValueAccessorBase<InputValue>
  implements AfterViewInit
{
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _inputRef =
    viewChild.required<ElementRef<HTMLInputElement>>('inputRef');
  private readonly _inputRef$ = toObservable(this._inputRef);
  private readonly _labelRef =
    viewChild.required<ElementRef<HTMLElement>>('labelRef');

  protected readonly isActivePlaceholder$ = this._inputRef$.pipe(
    mergeMap(({ nativeElement }: ElementRef<HTMLInputElement>) =>
      merge(
        fromEvent(nativeElement, 'focus').pipe(map(() => true)),
        fromEvent(nativeElement, 'blur').pipe(map(() => false)),
      ),
    ),
  );

  protected readonly prefixIcon =
    contentChild<TemplateRef<MatIcon>>('prefixIcon');
  protected readonly prefixIconOutsideBorder = contentChild<
    TemplateRef<MatIcon>
  >('prefixIconOutsideBorder');

  readonly type = input<InputType>('text');
  readonly placeholder = input<string>('');
  readonly color = input<'brown' | 'white'>('white');

  @HostListener('click') clickHandler() {
    this._inputRef()?.nativeElement.focus();
  }

  @HostBinding('class.--with-prefix-icon-outside-border')
  get isPrefixIconOutsideBorderAvaiable(): boolean {
    return !!this.prefixIconOutsideBorder();
  }

  constructor() {
    super(inject(NgControl));
  }

  ngAfterViewInit(): void {
    fromEvent(this._labelRef().nativeElement, 'click')
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(() => this._inputRef().nativeElement.focus());
  }

  protected setInput(value: InputValue) {
    this.value = value;
  }
}
