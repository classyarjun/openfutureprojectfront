import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecomComponent } from './telecom.component';

describe('TelecomComponent', () => {
  let component: TelecomComponent;
  let fixture: ComponentFixture<TelecomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelecomComponent]
    });
    fixture = TestBed.createComponent(TelecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
