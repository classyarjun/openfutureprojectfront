import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwscloudComponent } from './awscloud.component';

describe('AwscloudComponent', () => {
  let component: AwscloudComponent;
  let fixture: ComponentFixture<AwscloudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwscloudComponent]
    });
    fixture = TestBed.createComponent(AwscloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
