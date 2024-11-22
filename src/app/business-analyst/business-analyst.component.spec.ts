import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAnalystComponent } from './business-analyst.component';

describe('BusinessAnalystComponent', () => {
  let component: BusinessAnalystComponent;
  let fixture: ComponentFixture<BusinessAnalystComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessAnalystComponent]
    });
    fixture = TestBed.createComponent(BusinessAnalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
