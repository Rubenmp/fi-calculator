import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiCalculatorComponent } from './fi-calculator.component';

describe('FiCalculatorComponent', () => {
  let component: FiCalculatorComponent;
  let fixture: ComponentFixture<FiCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
