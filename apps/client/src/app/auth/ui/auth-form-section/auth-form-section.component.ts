import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-auth-form-section',
  standalone: true,
  imports: [],
  templateUrl: './auth-form-section.component.html',
  styleUrl: './auth-form-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.--brown]': `isBrown()`,
  },
})
export class AuthFormSectionComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly isBrown = input(false);
}
