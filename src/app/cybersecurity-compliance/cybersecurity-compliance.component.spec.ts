import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CybersecurityComplianceComponent } from './cybersecurity-compliance.component';

describe('CybersecurityComplianceComponent', () => {
  let component: CybersecurityComplianceComponent;
  let fixture: ComponentFixture<CybersecurityComplianceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CybersecurityComplianceComponent]
    });
    fixture = TestBed.createComponent(CybersecurityComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
