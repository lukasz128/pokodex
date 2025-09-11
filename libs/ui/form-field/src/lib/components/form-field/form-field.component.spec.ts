import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiFormFieldComponent } from './form-field.component';

describe('UiFormFieldComponent', () => {
  let component: UiFormFieldComponent;
  let fixture: ComponentFixture<UiFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiFormFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
