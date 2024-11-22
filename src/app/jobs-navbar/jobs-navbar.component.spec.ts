import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsNavbarComponent } from './jobs-navbar.component';

describe('JobsNavbarComponent', () => {
  let component: JobsNavbarComponent;
  let fixture: ComponentFixture<JobsNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobsNavbarComponent]
    });
    fixture = TestBed.createComponent(JobsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
