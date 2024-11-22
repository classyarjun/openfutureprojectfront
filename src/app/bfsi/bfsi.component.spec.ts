import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfsiComponent } from './bfsi.component';

describe('BfsiComponent', () => {
  let component: BfsiComponent;
  let fixture: ComponentFixture<BfsiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BfsiComponent]
    });
    fixture = TestBed.createComponent(BfsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
