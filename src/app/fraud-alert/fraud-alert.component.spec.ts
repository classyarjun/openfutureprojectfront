import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudAlertComponent } from './fraud-alert.component';

describe('FraudAlertComponent', () => {
  let component: FraudAlertComponent;
  let fixture: ComponentFixture<FraudAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FraudAlertComponent]
    });
    fixture = TestBed.createComponent(FraudAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
