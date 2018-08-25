import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function numberValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    return isNaN(control.value) ? {'notNumber': {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appNumberValidate]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidateNumberDirective, multi: true}]
})
export class ValidateNumberDirective implements Validator {
  validate(control: AbstractControl): {[key: string]: any} | null {
    return numberValidator()(control);
  }
}