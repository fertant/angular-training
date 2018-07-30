import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElementBase } from '../form-element-base';
import { RouterTestingModule } from '@angular/router/testing';

import { DynamicFormComponent } from './dynamic-form.component';

@Component({selector: 'app-dynamic-element', template: ''})
class FormElementStubComponent {
  @Input() element: FormElementBase <any>;
  @Input() form: FormGroup;
}

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [
        DynamicFormComponent,
        FormElementStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
