import { Directive, InjectionToken } from '@angular/core';

export const LabelToken = new InjectionToken<LabelDirective>('LabelDirective');

@Directive({
  selector: '[uiLabel]',
  standalone: true,
  providers: [{ provide: LabelToken, useExisting: LabelDirective }],
})
export class LabelDirective {}
