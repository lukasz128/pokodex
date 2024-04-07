import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Icon } from '../models/icon.model';

export abstract class CustomIconBase {
  protected constructor(
    private _: MatIconRegistry,
    private _sanitizer: DomSanitizer,
    private _icons: Icon[]
  ) {
    _icons.forEach((icon: Icon) =>
      _.addSvgIcon(
        icon.name,
        _sanitizer.bypassSecurityTrustResourceUrl(icon.path)
      )
    );
  }
}
