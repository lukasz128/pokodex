import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileRegisterViewComponent } from './mobile-register-view.component';

describe('MobileRegisterViewComponent', () => {
  let component: MobileRegisterViewComponent;
  let fixture: ComponentFixture<MobileRegisterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileRegisterViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileRegisterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
