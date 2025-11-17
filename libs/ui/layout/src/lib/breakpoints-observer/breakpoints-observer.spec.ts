import { TestBed } from '@angular/core/testing';

import { BreakpointsObserver, BreakpointsStore } from './breakpoints-observer';

describe('BreakpointsObserver', () => {
  let token: BreakpointsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    token = TestBed.inject(BreakpointsObserver);
  });

  it('should be created', () => {
    expect(token).toBeTruthy();
  });
});
