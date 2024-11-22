import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxComponent } from './linux.component';

describe('LinuxComponent', () => {
  let component: LinuxComponent;
  let fixture: ComponentFixture<LinuxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinuxComponent]
    });
    fixture = TestBed.createComponent(LinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
