import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-desktop-auth-form-section',
  standalone: true,
  imports: [],
  templateUrl: './desktop-auth-form-section.component.html',
  styleUrl: './desktop-auth-form-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.--white]': `isWhite()`,
  },
})
export class DesktopAuthFormSectionComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly isWhite = input(false);
}
