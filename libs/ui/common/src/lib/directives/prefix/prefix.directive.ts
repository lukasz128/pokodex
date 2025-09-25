import { Directive, InjectionToken } from '@angular/core';

export const PrefixToken = new InjectionToken<PrefixDirective>(
  'PrefixDirective',
);

@Directive({
  selector: '[uiPrefix]',
  standalone: true,
  providers: [{ provide: PrefixToken, useExisting: PrefixDirective }],
})
export class PrefixDirective {
  constructor() {}
}
