import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContactsComponent } from './admin-contacts.component';

describe('AdminContactsComponent', () => {
  let component: AdminContactsComponent;
  let fixture: ComponentFixture<AdminContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminContactsComponent]
    });
    fixture = TestBed.createComponent(AdminContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
