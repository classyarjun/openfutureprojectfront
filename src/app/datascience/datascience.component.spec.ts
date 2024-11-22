import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatascienceComponent } from './datascience.component';

describe('DatascienceComponent', () => {
  let component: DatascienceComponent;
  let fixture: ComponentFixture<DatascienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatascienceComponent]
    });
    fixture = TestBed.createComponent(DatascienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
