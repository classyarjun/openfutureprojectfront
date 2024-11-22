import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeShoreMethodologyComponent } from './safe-shore-methodology.component';

describe('SafeShoreMethodologyComponent', () => {
  let component: SafeShoreMethodologyComponent;
  let fixture: ComponentFixture<SafeShoreMethodologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SafeShoreMethodologyComponent]
    });
    fixture = TestBed.createComponent(SafeShoreMethodologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
