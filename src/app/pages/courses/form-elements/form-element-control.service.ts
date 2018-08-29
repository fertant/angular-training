import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormElementBase } from './form-element-base';
import { numberValidator } from './validators/validate-number.directive';

@Injectable()
export class FormElementControlService {
  constructor() { }

  toFormGroup(elements: FormElementBase<any>[]) {
    const group: any = {};

    Object.keys(elements).forEach(element => {
      const validators: Array<any> = [];
      if (elements[element].required) {
        validators.push(Validators.required);
      }
      if (elements[element].validator) {
        if (elements[element].validator === 'number') {
          validators.push(numberValidator());
        } else {
          validators.push(Validators[elements[element].validator](elements[element].validateProp));
        }
      }
      group[elements[element].key] = new FormControl(elements[element].value || '', validators);
    });
    return new FormGroup(group);
  }
}
