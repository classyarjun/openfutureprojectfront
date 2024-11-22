import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurLeadershipTeamComponent } from './our-leadership-team.component';

describe('OurLeadershipTeamComponent', () => {
  let component: OurLeadershipTeamComponent;
  let fixture: ComponentFixture<OurLeadershipTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurLeadershipTeamComponent]
    });
    fixture = TestBed.createComponent(OurLeadershipTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
