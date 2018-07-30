import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElementBase } from '../form-element-base';
import { FormElementControlService } from '../form-element-control.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [ FormElementControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() elements: FormElementBase <any>[];
  @Input() value: Observable <any>;
  @Input() options: Array <any>;
  @Output() update = new EventEmitter<any>();
  form: FormGroup;
  id: number;

  constructor(
    private qcs: FormElementControlService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.elements);
    this.value
      .subscribe(data => this.setFormVolues(data));
    Object.keys(this.options).forEach(element => {
      this.options[element].subscribe(data => { this.elements[element].options = data; });
    });
  }

  setFormVolues(data) {
    Object.keys(data).forEach(element => {
      if (this.form.controls.hasOwnProperty(element)) {
        this.form.controls[element].setValue(data[element]);
      }
    });
  }

  onSubmit() {
    const object = this.form.value;
    if (typeof this.id === 'string') {
      object.id = parseInt(this.id, 10);
    } else {
      object.id = this.id;
    }
    this.update.emit(this.form.value);
  }

  onCancel() {
    this.router.navigateByUrl('courses');
  }
}
