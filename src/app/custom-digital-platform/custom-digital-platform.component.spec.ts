import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDigitalPlatformComponent } from './custom-digital-platform.component';

describe('CustomDigitalPlatformComponent', () => {
  let component: CustomDigitalPlatformComponent;
  let fixture: ComponentFixture<CustomDigitalPlatformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDigitalPlatformComponent]
    });
    fixture = TestBed.createComponent(CustomDigitalPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
