import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { inject, InjectionToken, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, Observable, shareReplay } from 'rxjs';

export const md = 760;

export const breakpoints = {
  desktop: `(min-width: ${md}px)`,
};

type ObservableBreakpoints = {
  [TKey in keyof typeof breakpoints as `${TKey}$`]: Observable<boolean>;
};
type SignalBreakpoints = {
  [TKey in keyof typeof breakpoints]: Signal<boolean | undefined>;
};

export type BreakpointsStore = ObservableBreakpoints & SignalBreakpoints;

export const BreakpointsObserver = new InjectionToken(
  'Breakpoints observer token',
  {
    providedIn: 'root',
    factory: () => {
      const breakpointObserver = inject(BreakpointObserver);

      return Object.entries(breakpoints).reduce<BreakpointsStore>(
        (observerStore, [key, value]) => {
          const breakpointsObserve$ = breakpointObserver.observe(value).pipe(
            map(({ matches }: BreakpointState) => matches),
            shareReplay(1),
          );

          observerStore = {
            ...observerStore,
            [`${key}$`]: breakpointsObserve$,
            [key]: toSignal(breakpointsObserve$),
          };

          return observerStore;
        },
        {} as BreakpointsStore,
      );
    },
  },
);
