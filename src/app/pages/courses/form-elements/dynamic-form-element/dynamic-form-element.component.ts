import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElementBase } from '../form-element-base';

@Component({
  selector: 'app-dynamic-element',
  templateUrl: './dynamic-form-element.component.html',
  styleUrls: ['./dynamic-form-element.component.scss']
})
export class DynamicFormElementComponent {
  @Input() element: FormElementBase <any>;
  @Input() form: FormGroup;
  get ErrorMsg() {
    if (!this.form.controls[this.element.key].valid) {
      let errorMsg = 'Some error';
      Object.keys(this.form.controls[this.element.key].errors).forEach(element => {
        switch (element) {
          case 'owlDateTimeMin':
            errorMsg = `Date should not be less then ${this.form.controls[this.element.key].errors[element].min}`;
          break;
          case 'minlength':
            errorMsg = `Current value
               ${this.form.controls[this.element.key].errors[element].actualLength}
               characters in length. Required
               ${this.form.controls[this.element.key].errors[element].requiredLength}.`;
          break;
          case 'notNumber':
            errorMsg = `For element ${this.element.label} value should be a number.`;
            break;
          case 'required':
            errorMsg = `For element ${this.element.label} value is required.`;
          break;
        }
      });
      return errorMsg;
    }
  }
  get isValid() { return this.form.controls[this.element.key].valid; }
}
