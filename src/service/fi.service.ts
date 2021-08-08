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
    _fixDefaultValues(fiParameters);
    let fiResult : FIResult = new FIResult();
    fiResult.monthlyExpensesWithInflation = fiParameters.monthlyExpenses;

    for (let i = 0; i < fiParameters.yearsToCompute; i++) {
      _computeOneYear(fiParameters, fiResult);
    }

    return fiResult;
  }
}

function _computeOneYear(fiParameters: FIParameters, fiResult: FIResult) {
  for (let monthIndex = 1; monthIndex <= FiService.monthsPerYear; monthIndex++) {
    _computeOneMonth(monthIndex, fiParameters, fiResult);
  }

  _includeInflationChanges(fiParameters.yearlyInflationPercentage, fiResult);
  fiResult.currentYear += 1;
}

function _computeOneMonth(monthIndex: number, fiParameters: FIParameters, fiResult: FIResult) {
  let monthlyInflationMultiplier: number = _getMonthlyInflationMultiplier(monthIndex, fiParameters.yearlyInflationPercentage);  
  let monthlyExpenses: number = fiResult.monthlyExpensesWithInflation * monthlyInflationMultiplier;
  let monthlyRevenue: number = fiParameters.monthlyIncome - monthlyExpenses;

  fiResult.savedMoney += monthlyRevenue;
}


function _includeInflationChanges(yearlyInflationPercentage: number, fiResult: FIResult) {
  let inflationMultiplier: number = _getYearlyInflationMultiplier(yearlyInflationPercentage);

  fiResult.monthlyExpensesWithInflation *= inflationMultiplier;
}


function _getYearlyInflationMultiplier(yearlyInflationPercentage: number): number {
  return 1 + (yearlyInflationPercentage / 100);
}


function _getMonthlyInflationMultiplier(monthIndex: number, yearlyInflationPercentage: number): number {
  let yearlyInflationMultiplier: number = _getYearlyInflationMultiplier(yearlyInflationPercentage);
  if (yearlyInflationMultiplier > 1){
    return 1 + ((monthIndex/12) * yearlyInflationMultiplier);
  }

  return 1;
}

function _fixDefaultValues(fiParameters: FIParameters) {
  if (!fiParameters.yearlyInflationPercentage) {
    fiParameters.yearlyInflationPercentage = 0;
  }
  if (!fiParameters.monthlyExpenses) {
    fiParameters.monthlyExpenses = 0;
  }
  if (!fiParameters.monthlyIncome) {
    fiParameters.monthlyIncome = 0;
  }
  if (!fiParameters.yearsToCompute) {
    fiParameters.yearsToCompute = 0;
  }
}

