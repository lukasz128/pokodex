import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CustomIconBase } from './custom-icon.base';
import { icons } from './icons';

@NgModule({
  providers: [provideHttpClient()],
})
export class CustomIconForStoriesModule extends CustomIconBase {
  constructor(
    private readonly matIconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer,
  ) {
    super(matIconRegistry, sanitizer, icons);
  }
}
