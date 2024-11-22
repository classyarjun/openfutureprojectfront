import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteDevelopmentComponent } from './website-development.component';

describe('WebsiteDevelopmentComponent', () => {
  let component: WebsiteDevelopmentComponent;
  let fixture: ComponentFixture<WebsiteDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsiteDevelopmentComponent]
    });
    fixture = TestBed.createComponent(WebsiteDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
