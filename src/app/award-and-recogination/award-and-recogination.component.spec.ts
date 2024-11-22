import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardAndRecoginationComponent } from './award-and-recogination.component';

describe('AwardAndRecoginationComponent', () => {
  let component: AwardAndRecoginationComponent;
  let fixture: ComponentFixture<AwardAndRecoginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwardAndRecoginationComponent]
    });
    fixture = TestBed.createComponent(AwardAndRecoginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
