import { Component, OnInit } from '@angular/core';
import { FIParameters } from '../../model/fi-parameters';

@Component({
  selector: 'fi-calculator',
  templateUrl: './fi-calculator.component.html',
  styleUrls: ['./fi-calculator.component.less']
})
export class FiCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  onFIParameterChange(fiParameters: FIParameters) {
    console.log(fiParameters);
  }

}
