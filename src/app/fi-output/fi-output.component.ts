import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FIParameters } from '../../model/fi-parameters';

@Component({
  selector: 'fi-output',
  templateUrl: './fi-output.component.html',
  styleUrls: ['./fi-output.component.less']
})

export class FiOutputComponent implements OnInit {
  @Input() fiParameters: FIParameters | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
