import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

import { FormElementBase } from '../form-elements/form-element-base';
import { EditCoursesComponent } from './edit-courses.component';
import { CoursesService } from '../courses-list/courses.service';

@Component({selector: 'app-dynamic-form', template: ''})
class FormStubComponent {
  @Input() elements: FormElementBase <any>[];
  @Input() value: Observable <any>;
  @Input() options: Array <any>;
  @Output() update = new EventEmitter<any>();
}

describe('EditCoursesComponent', () => {
  let component: EditCoursesComponent;
  let fixture: ComponentFixture<EditCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        EditCoursesComponent,
        FormStubComponent
      ],
      providers: [ CoursesService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
