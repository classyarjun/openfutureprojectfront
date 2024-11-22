import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglecloudComponent } from './googlecloud.component';

describe('GooglecloudComponent', () => {
  let component: GooglecloudComponent;
  let fixture: ComponentFixture<GooglecloudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GooglecloudComponent]
    });
    fixture = TestBed.createComponent(GooglecloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
