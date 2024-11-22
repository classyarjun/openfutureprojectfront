import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalableSoftwareComponent } from './scalable-software.component';

describe('ScalableSoftwareComponent', () => {
  let component: ScalableSoftwareComponent;
  let fixture: ComponentFixture<ScalableSoftwareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScalableSoftwareComponent]
    });
    fixture = TestBed.createComponent(ScalableSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
