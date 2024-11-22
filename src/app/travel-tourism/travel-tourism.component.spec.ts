import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelTourismComponent } from './travel-tourism.component';

describe('TravelTourismComponent', () => {
  let component: TravelTourismComponent;
  let fixture: ComponentFixture<TravelTourismComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelTourismComponent]
    });
    fixture = TestBed.createComponent(TravelTourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
