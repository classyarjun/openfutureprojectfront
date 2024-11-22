import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputingSoftwareComponent } from './computing-software.component';

describe('ComputingSoftwareComponent', () => {
  let component: ComputingSoftwareComponent;
  let fixture: ComponentFixture<ComputingSoftwareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComputingSoftwareComponent]
    });
    fixture = TestBed.createComponent(ComputingSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
