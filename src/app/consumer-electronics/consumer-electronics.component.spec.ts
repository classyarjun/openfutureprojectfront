import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerElectronicsComponent } from './consumer-electronics.component';

describe('ConsumerElectronicsComponent', () => {
  let component: ConsumerElectronicsComponent;
  let fixture: ComponentFixture<ConsumerElectronicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumerElectronicsComponent]
    });
    fixture = TestBed.createComponent(ConsumerElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
