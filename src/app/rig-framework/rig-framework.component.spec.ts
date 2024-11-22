import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigFrameworkComponent } from './rig-framework.component';

describe('RigFrameworkComponent', () => {
  let component: RigFrameworkComponent;
  let fixture: ComponentFixture<RigFrameworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RigFrameworkComponent]
    });
    fixture = TestBed.createComponent(RigFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
