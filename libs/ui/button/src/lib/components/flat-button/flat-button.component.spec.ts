import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiFlatButtonComponent } from './flat-button.component';

describe('UiFlatButtonComponent', () => {
  let component: UiFlatButtonComponent;
  let fixture: ComponentFixture<UiFlatButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiFlatButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiFlatButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
