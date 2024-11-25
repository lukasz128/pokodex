import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesktopLoginViewComponent } from './desktop-login-view.component';

describe('DesktopLoginViewComponent', () => {
  let component: DesktopLoginViewComponent;
  let fixture: ComponentFixture<DesktopLoginViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopLoginViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DesktopLoginViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
