import { Component, Input, OnInit } from '@angular/core';
import { FIResult } from 'src/model/fi-result';

@Component({
  selector: 'fi-output',
  templateUrl: './fi-output.component.html',
  styleUrls: ['./fi-output.component.less']
})

export class FiOutputComponent implements OnInit {
  showOutput : boolean = false;

  @Input() set fiResult(fiResult: FIResult | undefined) {
    if (fiResult){
      this.computeOutput(fiResult);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  computeOutput(fiResult: FIResult) {
    console.log("Paramters received in output component!");
    this.showOutput = true;
  }

}
