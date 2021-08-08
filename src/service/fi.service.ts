import { Injectable } from '@angular/core';
import { FIParameters } from 'src/model/fi-parameters';
import { FIResult } from 'src/model/fi-result';

@Injectable({
  providedIn: 'root'
})
export class FiService {
  static monthsPerYear: number = 12;

  constructor() { }

  compute(fiParameters: FIParameters): FIResult {
    let fiResult : FIResult = new FIResult();
    fiResult.monthlyExpensesWithInflation = fiParameters.monthlyExpenses;

    for (let i = 0; i < fiParameters.yearsToCompute; i++) {
      computeOneYear(fiParameters, fiResult);
    }

    return fiResult;
  }
}

function computeOneYear(fiParameters: FIParameters, fiResult: FIResult) {
  for (let monthIndex = 1; monthIndex <= FiService.monthsPerYear; monthIndex++) {
    computeOneMonth(monthIndex, fiParameters, fiResult);
  }

  includeInflationChanges(fiParameters.yearlyInflationPercentage, fiResult);
  fiResult.currentYear += 1;
}

function computeOneMonth(monthIndex: number, fiParameters: FIParameters, fiResult: FIResult) {
  let monthlyExpenses: number = fiResult.monthlyExpensesWithInflation;
  let monthlyRevenue: number = fiParameters.monthlyIncome - monthlyExpenses;

  fiResult.savedMoney += monthlyRevenue;
}


function includeInflationChanges(yearlyInflationPercentage: number, fiResult: FIResult) {
  let inflationMultiplier: number = 1 + (yearlyInflationPercentage / 100);

  fiResult.monthlyExpensesWithInflation *= inflationMultiplier;
}

