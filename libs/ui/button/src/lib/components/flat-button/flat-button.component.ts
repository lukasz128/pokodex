import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CanColorDirective } from '@pokodex/ui/common';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[ui-flat-btn], a[ui-flat-btn]',
  exportAs: 'UiFlatBtn',
  standalone: true,
  imports: [CanColorDirective],
  templateUrl: './flat-button.component.html',
  styleUrl: './flat-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    { directive: CanColorDirective, inputs: ['uiCanColor : color'] },
  ],
  host: {
    '[class.disabled]': 'disabled()',
  },
})
export class UiFlatButtonComponent {
  readonly disabled = input<boolean>(false);
}
