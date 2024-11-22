import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataanylistComponent } from './dataanylist.component';

describe('DataanylistComponent', () => {
  let component: DataanylistComponent;
  let fixture: ComponentFixture<DataanylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataanylistComponent]
    });
    fixture = TestBed.createComponent(DataanylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
