import { TestBed } from '@angular/core/testing';
import { FIParameters } from 'src/model/fi-parameters';
import { FIResult } from 'src/model/fi-result';

import { FiService } from './fi.service';

fdescribe('FiService', () => {
  let service: FiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('#compute Test income, expenses and years', () => {
    let fiParameters: FIParameters = new FIParameters();
    fiParameters.yearsToCompute = 3;
    fiParameters.monthlyIncome = 100;
    fiParameters.monthlyExpenses = 90;

    let fiResult : FIResult = service.compute(fiParameters);

    expect(fiResult.currentYear).withContext("Current year").toBe(3);

  });
  
});
