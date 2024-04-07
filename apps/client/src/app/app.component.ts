import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CustomIconBase } from './abstract/custom-icon.base';
import { LayoutComponent } from './components/layout/layout.component';
import { icons } from './icon.root';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LayoutComponent,
    MatSliderModule,
    MatButtonModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends CustomIconBase {
  constructor(
    private readonly matIconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer
  ) {
    super(matIconRegistry, sanitizer, icons);
  }
}
