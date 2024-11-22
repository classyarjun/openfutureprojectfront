import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FintechComponent } from './fintech.component';

describe('FintechComponent', () => {
  let component: FintechComponent;
  let fixture: ComponentFixture<FintechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FintechComponent]
    });
    fixture = TestBed.createComponent(FintechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
