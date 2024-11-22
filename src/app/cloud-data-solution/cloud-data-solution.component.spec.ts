import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudDataSolutionComponent } from './cloud-data-solution.component';

describe('CloudDataSolutionComponent', () => {
  let component: CloudDataSolutionComponent;
  let fixture: ComponentFixture<CloudDataSolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudDataSolutionComponent]
    });
    fixture = TestBed.createComponent(CloudDataSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
