import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontNewsComponent } from './front-news.component';

describe('FrontNewsComponent', () => {
  let component: FrontNewsComponent;
  let fixture: ComponentFixture<FrontNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontNewsComponent]
    });
    fixture = TestBed.createComponent(FrontNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
