import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiInputComponent } from './fi-input.component';

describe('FiInputComponent', () => {
  let component: FiInputComponent;
  let fixture: ComponentFixture<FiInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
