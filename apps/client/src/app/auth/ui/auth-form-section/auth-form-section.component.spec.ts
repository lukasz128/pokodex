import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthFormSectionComponent } from './auth-form-section.component';

describe('AuthFormSectionComponent', () => {
  let component: AuthFormSectionComponent;
  let fixture: ComponentFixture<AuthFormSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFormSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
