import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FIParameters } from '../../model/fi-parameters';

@Component({
  selector: 'fi-input',
  templateUrl: './fi-input.component.html',
  styleUrls: ['./fi-input.component.less']
})
export class FiInputComponent implements OnInit {
  @Output() fiParametersEvent = new EventEmitter<FIParameters>();
  fiParameters: FIParameters = new FIParameters;

  constructor() { }

  ngOnInit(): void {

  }

  emitFIParameters() {
    this.fiParametersEvent.emit(this.fiParameters);
  }
}
