import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureCloudComponent } from './azure-cloud.component';

describe('AzureCloudComponent', () => {
  let component: AzureCloudComponent;
  let fixture: ComponentFixture<AzureCloudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AzureCloudComponent]
    });
    fixture = TestBed.createComponent(AzureCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
