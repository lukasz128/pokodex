import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken('Global window object', {
  factory: () => window,
  providedIn: 'root',
});
