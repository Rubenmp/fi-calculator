import { Injectable } from '@angular/core';
import { FIParameters } from 'src/model/fi-parameters';
import { FIResult } from 'src/model/fi-result';

@Injectable({
  providedIn: 'root'
})
export class FiService {

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
  let monthlyRevenue : number = getMonthlyRevenue(fiParameters);

  fiResult.savedMoney += monthlyRevenue * 12;
}

function getMonthlyRevenue(fiParameters: FIParameters): number {
  return fiParameters.monthlyIncome - fiParameters.monthlyExpenses;
}

