import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesktopRegisterViewComponent } from './desktop-register-view.component';

describe('DesktopRegisterViewComponent', () => {
  let component: DesktopRegisterViewComponent;
  let fixture: ComponentFixture<DesktopRegisterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopRegisterViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DesktopRegisterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
