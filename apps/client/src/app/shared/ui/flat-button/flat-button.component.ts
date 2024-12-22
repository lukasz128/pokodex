import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Color } from '../../data-access/design.types';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[app-flat-button], a[app-flat-button]',
  exportAs: 'appFlatButton',
  standalone: true,
  imports: [],
  templateUrl: './flat-button.component.html',
  styleUrl: './flat-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.disabled]': 'disabled()',
    '[class.--primary]': "color() === 'primary'",
    '[class.--accent]': "color() === 'accent'",
  },
})
export class FlatButtonComponent {
  readonly disabled = input<boolean>(false);
  readonly color = input<Color>('primary');
}
