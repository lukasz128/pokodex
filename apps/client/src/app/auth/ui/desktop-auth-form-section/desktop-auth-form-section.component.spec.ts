import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesktopAuthFormSectionComponent } from './desktop-auth-form-section.component';

describe('DesktopAuthFormSectionComponent', () => {
  let component: DesktopAuthFormSectionComponent;
  let fixture: ComponentFixture<DesktopAuthFormSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopAuthFormSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DesktopAuthFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
