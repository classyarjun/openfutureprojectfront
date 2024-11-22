import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEngComponent } from './data-eng.component';

describe('DataEngComponent', () => {
  let component: DataEngComponent;
  let fixture: ComponentFixture<DataEngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataEngComponent]
    });
    fixture = TestBed.createComponent(DataEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
