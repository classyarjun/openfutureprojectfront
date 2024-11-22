import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAutomationSolutionComponent } from './business-automation-solution.component';

describe('BusinessAutomationSolutionComponent', () => {
  let component: BusinessAutomationSolutionComponent;
  let fixture: ComponentFixture<BusinessAutomationSolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessAutomationSolutionComponent]
    });
    fixture = TestBed.createComponent(BusinessAutomationSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
