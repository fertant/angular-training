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
  get isValid() { return this.form.controls[this.element.key].valid; }
}
