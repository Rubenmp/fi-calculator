import { Injectable } from '@angular/core';
import { FIParameters } from 'src/model/fi-parameters';
import { FIResult } from 'src/model/fi-result';

@Injectable({
  providedIn: 'root'
})
export class FiService {

  constructor() { }

  compute(fiParameters: FIParameters): FIResult {
    return new FIResult();
  }
}
