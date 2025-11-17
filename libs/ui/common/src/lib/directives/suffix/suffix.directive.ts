import { Directive, InjectionToken } from '@angular/core';

export const SuffixToken = new InjectionToken('SuffixToken');

@Directive({
  selector: '[uiSuffix]',
  standalone: true,
  providers: [{ provide: SuffixToken, useExisting: SuffixDirective }],
})
export class SuffixDirective {
  constructor() {}
}
