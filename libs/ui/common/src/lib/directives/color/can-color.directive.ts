import {
  computed,
  Directive,
  inject,
  InjectionToken,
  input,
} from '@angular/core';
import { ThemeColor } from '@pokodex/ui';

export const CanColorToken = new InjectionToken<CanColorDirective>(
  'CanColorDirective',
);
const DEFAULT_COLOR: ThemeColor = 'white';

@Directive({
  selector: '[uiCanColor]',
  standalone: true,
  providers: [{ provide: CanColorToken, useExisting: CanColorDirective }],
  host: {
    '[class.--brown]': "computedColor() === 'brown'",
    '[class.--white]': "computedColor() === 'white'",
    '[attr.color]': 'computedColor()',
  },
})
export class CanColorDirective {
  private readonly scopedCanColor = inject(CanColorToken, {
    skipSelf: true,
    optional: true,
  });

  readonly color = input<ThemeColor | undefined>(undefined, {
    alias: 'uiCanColor',
  });

  protected readonly computedColor = computed(() => {
    const color = this.color();
    const scopedColor = this.scopedCanColor?.color();

    return color || scopedColor || DEFAULT_COLOR;
  });
}

export const CanColor = {
  directive: CanColorDirective,
  inputs: ['uiCanColor : color'],
};
