import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InshuranceComponent } from './inshurance.component';

describe('InshuranceComponent', () => {
  let component: InshuranceComponent;
  let fixture: ComponentFixture<InshuranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InshuranceComponent]
    });
    fixture = TestBed.createComponent(InshuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
