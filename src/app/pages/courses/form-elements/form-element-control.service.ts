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
      if (elements[element].validator) {
        if (elements[element].validator === 'number') {
          group[elements[element].key] = new FormControl(
            elements[element].value || '',
            numberValidator()
          );
        } else {
          group[elements[element].key] = new FormControl(
            elements[element].value || '',
            Validators[elements[element].validator](elements[element].validateProp)
          );
        }
      } else {
        group[elements[element].key] = elements[element].required ? new FormControl(elements[element].value || '', Validators.required)
          : new FormControl(elements[element].value || '');
      }
    });
    return new FormGroup(group);
  }
}
