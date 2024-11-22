import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontBlogsComponent } from './front-blogs.component';

describe('FrontBlogsComponent', () => {
  let component: FrontBlogsComponent;
  let fixture: ComponentFixture<FrontBlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontBlogsComponent]
    });
    fixture = TestBed.createComponent(FrontBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
