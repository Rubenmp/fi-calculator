import { TestBed } from '@angular/core/testing';
import { FIParameters } from 'src/model/fi-parameters';
import { FIResult } from 'src/model/fi-result';

import { FiService } from './fi.service';

fdescribe('FiService', () => {
  let service: FiService;
  const monthsPerYear : number = 12;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Basic tests
  fit('#compute Test income, expenses and year', () => {
    let fiParameters: FIParameters = new FIParameters();
    fiParameters.yearsToCompute = 1;
    fiParameters.monthlyIncome = 50;
    fiParameters.monthlyExpenses = 30;

    let fiResult : FIResult = service.compute(fiParameters);

    expect(fiResult.currentYear).withContext("Current year").toBe(1);
    expect(fiResult.monthlyExpensesWithInflation).withContext("Monthly expenses").toBe(fiParameters.monthlyExpenses);
    let savedMoney = (fiParameters.monthlyIncome - fiParameters.monthlyExpenses) * monthsPerYear * fiParameters.yearsToCompute;
    expect(fiResult.savedMoney).withContext("Saved money").toBe(savedMoney);
  });

  it('#compute Test income, expenses and years', () => {
    let fiParameters: FIParameters = new FIParameters();
    fiParameters.yearsToCompute = 3;
    fiParameters.monthlyIncome = 100;
    fiParameters.monthlyExpenses = 90;

    let fiResult : FIResult = service.compute(fiParameters);

    expect(fiResult.currentYear).withContext("Current year").toBe(3);
    expect(fiResult.monthlyExpensesWithInflation).withContext("Monthly expenses").toBe(fiParameters.monthlyExpenses);
    let savedMoney = (fiParameters.monthlyIncome - fiParameters.monthlyExpenses) * monthsPerYear * fiParameters.yearsToCompute;
    expect(fiResult.savedMoney).withContext("Saved money").toBe(savedMoney);
  });

  xit('#compute Test default values', () => {
    let fiParameters: FIParameters = new FIParameters();

    let fiResult: FIResult = service.compute(fiParameters);

    expect(fiResult.currentYear).withContext("Current year").toBe(0);
    expect(fiResult.monthlyExpensesWithInflation).withContext("Monthly expenses").toBe(0);
    expect(fiResult.savedMoney).withContext("Saved money").toBe(0);

  });
  
});
