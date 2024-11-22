import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceGrowthComponent } from './e-commerce-growth.component';

describe('ECommerceGrowthComponent', () => {
  let component: ECommerceGrowthComponent;
  let fixture: ComponentFixture<ECommerceGrowthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ECommerceGrowthComponent]
    });
    fixture = TestBed.createComponent(ECommerceGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
