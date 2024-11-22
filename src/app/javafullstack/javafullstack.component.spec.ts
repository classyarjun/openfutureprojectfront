import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavafullstackComponent } from './javafullstack.component';

describe('JavafullstackComponent', () => {
  let component: JavafullstackComponent;
  let fixture: ComponentFixture<JavafullstackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JavafullstackComponent]
    });
    fixture = TestBed.createComponent(JavafullstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
