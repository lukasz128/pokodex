import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-icon-button, button[app-icon-button], a[app-icon-button]',
  standalone: true,
  imports: [],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonComponent {}
