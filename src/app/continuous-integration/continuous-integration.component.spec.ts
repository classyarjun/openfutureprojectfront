import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuousIntegrationComponent } from './continuous-integration.component';

describe('ContinuousIntegrationComponent', () => {
  let component: ContinuousIntegrationComponent;
  let fixture: ComponentFixture<ContinuousIntegrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContinuousIntegrationComponent]
    });
    fixture = TestBed.createComponent(ContinuousIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
