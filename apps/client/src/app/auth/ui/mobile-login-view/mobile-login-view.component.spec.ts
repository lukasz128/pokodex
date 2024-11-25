import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileLoginViewComponent } from './mobile-login-view.component';

describe('MobileLoginViewComponent', () => {
  let component: MobileLoginViewComponent;
  let fixture: ComponentFixture<MobileLoginViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileLoginViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileLoginViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
