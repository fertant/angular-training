import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormElementBase } from './form-element-base';

@Injectable()
export class FormElementControlService {
  constructor() { }

  toFormGroup(elements: FormElementBase<any>[]) {
    const group: any = {};

    Object.keys(elements).forEach(element => {
      group[elements[element].key] = elements[element].required ? new FormControl(elements[element].value || '', Validators.required)
        : new FormControl(elements[element].value || '');
    });
    return new FormGroup(group);
  }
}
