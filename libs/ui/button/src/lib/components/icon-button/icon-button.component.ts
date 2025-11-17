import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-icon-btn, button[ui-icon-btn], a[ui-icon-btn]',
  standalone: true,
  imports: [],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiIconButtonComponent {}
