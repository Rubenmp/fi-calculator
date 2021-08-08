import { Component, OnInit } from '@angular/core';
import { FIResult } from 'src/model/fi-result';
import { FiService } from 'src/service/fi.service';
import { FIParameters } from '../../model/fi-parameters';

@Component({
  selector: 'fi-calculator',
  templateUrl: './fi-calculator.component.html',
  styleUrls: ['./fi-calculator.component.less']
})
export class FiCalculatorComponent implements OnInit {
  fiResult: FIResult | undefined;

  constructor(private fiService: FiService) { }

  ngOnInit(): void {
  }


  onFIParameterChange(fiParameters: FIParameters) {
    this.fiResult = this.fiService.compute(fiParameters);
  }

}
