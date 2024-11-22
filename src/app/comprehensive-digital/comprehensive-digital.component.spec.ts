import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprehensiveDigitalComponent } from './comprehensive-digital.component';

describe('ComprehensiveDigitalComponent', () => {
  let component: ComprehensiveDigitalComponent;
  let fixture: ComponentFixture<ComprehensiveDigitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprehensiveDigitalComponent]
    });
    fixture = TestBed.createComponent(ComprehensiveDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
