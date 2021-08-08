import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiOutputComponent } from './fi-output.component';

describe('FiOutputComponent', () => {
  let component: FiOutputComponent;
  let fixture: ComponentFixture<FiOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
