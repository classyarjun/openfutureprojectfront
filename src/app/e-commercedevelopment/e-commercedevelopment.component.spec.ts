import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommercedevelopmentComponent } from './e-commercedevelopment.component';

describe('ECommercedevelopmentComponent', () => {
  let component: ECommercedevelopmentComponent;
  let fixture: ComponentFixture<ECommercedevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ECommercedevelopmentComponent]
    });
    fixture = TestBed.createComponent(ECommercedevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
