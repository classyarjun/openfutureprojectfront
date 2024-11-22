import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentPublicSectorComponent } from './government-public-sector.component';

describe('GovernmentPublicSectorComponent', () => {
  let component: GovernmentPublicSectorComponent;
  let fixture: ComponentFixture<GovernmentPublicSectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GovernmentPublicSectorComponent]
    });
    fixture = TestBed.createComponent(GovernmentPublicSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
