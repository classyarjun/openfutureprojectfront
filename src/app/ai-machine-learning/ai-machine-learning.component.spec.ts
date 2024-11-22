import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiMachineLearningComponent } from './ai-machine-learning.component';

describe('AiMachineLearningComponent', () => {
  let component: AiMachineLearningComponent;
  let fixture: ComponentFixture<AiMachineLearningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiMachineLearningComponent]
    });
    fixture = TestBed.createComponent(AiMachineLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
