import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwaredeveloperComponent } from './softwaredeveloper.component';

describe('SoftwaredeveloperComponent', () => {
  let component: SoftwaredeveloperComponent;
  let fixture: ComponentFixture<SoftwaredeveloperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoftwaredeveloperComponent]
    });
    fixture = TestBed.createComponent(SoftwaredeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
