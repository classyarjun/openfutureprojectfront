import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeamlessUserExperienceComponent } from './seamless-user-experience.component';

describe('SeamlessUserExperienceComponent', () => {
  let component: SeamlessUserExperienceComponent;
  let fixture: ComponentFixture<SeamlessUserExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeamlessUserExperienceComponent]
    });
    fixture = TestBed.createComponent(SeamlessUserExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
