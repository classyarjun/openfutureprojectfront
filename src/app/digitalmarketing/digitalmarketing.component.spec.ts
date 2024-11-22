import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalmarketingComponent } from './digitalmarketing.component';

describe('DigitalmarketingComponent', () => {
  let component: DigitalmarketingComponent;
  let fixture: ComponentFixture<DigitalmarketingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalmarketingComponent]
    });
    fixture = TestBed.createComponent(DigitalmarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
