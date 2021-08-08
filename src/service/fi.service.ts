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
    fixDefaultValues(fiParameters);
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
  let monthlyInflationMultiplier: number = getMonthlyInflationMultiplier(monthIndex, fiParameters.yearlyInflationPercentage);  
  let monthlyExpenses: number = fiResult.monthlyExpensesWithInflation * monthlyInflationMultiplier;
  let monthlyRevenue: number = fiParameters.monthlyIncome - monthlyExpenses;

  fiResult.savedMoney += monthlyRevenue;
}


function includeInflationChanges(yearlyInflationPercentage: number, fiResult: FIResult) {
  let inflationMultiplier: number = getYearlyInflationMultiplier(yearlyInflationPercentage);

  fiResult.monthlyExpensesWithInflation *= inflationMultiplier;
}


function getYearlyInflationMultiplier(yearlyInflationPercentage: number): number {
  return 1 + (yearlyInflationPercentage / 100);
}


function getMonthlyInflationMultiplier(monthIndex: number, yearlyInflationPercentage: number): number {
  let yearlyInflationMultiplier: number = getYearlyInflationMultiplier(yearlyInflationPercentage);
  return (monthIndex/12)*yearlyInflationMultiplier;
}

function fixDefaultValues(fiParameters: FIParameters) {
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

