import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllFormsComponent } from './admin-all-forms.component';

describe('AdminAllFormsComponent', () => {
  let component: AdminAllFormsComponent;
  let fixture: ComponentFixture<AdminAllFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAllFormsComponent]
    });
    fixture = TestBed.createComponent(AdminAllFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
