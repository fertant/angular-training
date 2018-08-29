import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

import { CourseModel } from '../model/course';
import { CoursesService } from '../courses-list/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormElementBase } from '../form-elements/form-element-base';
import { TextboxElement } from '../form-elements/element-textbox';
import { TextareaElement } from '../form-elements/element-textarea';
import { DatetimeElement } from '../form-elements/element-datetime';
import { MultiselectElement } from "../form-elements/element-multiselect";

@Component({
  selector: 'app-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.scss']
})
export class EditCoursesComponent {

  courses: Observable <CourseModel>;
  courseId: number;
  elements: FormElementBase<any>[];
  options: Array <any>;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.courseId = +this.route.snapshot.paramMap.get('id');
    this.elements = this.extractData(new CourseModel());
    this.setCourseValue();
    this.options = [];
    this.setAuthorsList();
  }

  setCourseValue() {
    this.courses = this.courseId
      ? this.coursesService.findCourseById(Number(this.courseId))
      : of(new CourseModel());
  }

  setAuthorsList() {
    this.options[4] = this.coursesService.getAuthorsList()
      .pipe(
        map((authors: Array<any>) => {
          return authors.map(author => {
            return {
              ...author,
              itemName: author.name
            };
          });
        })
      );
  }

  extractData(model: CourseModel) {
    const elements: FormElementBase<any>[] = [
      new TextboxElement({
        key: 'title',
        label: 'Title',
        value: '',
        validator: 'maxLength',
        validateProp: 50,
        required: true,
        order: 1
      }),
      new TextareaElement({
        key: 'description',
        label: 'Description',
        value: '',
        validator: 'maxLength',
        validateProp: 250,
        required: false,
        order: 2
      }),
      new DatetimeElement({
        key: 'creationDate',
        label: 'Date',
        value: '',
        required: false,
        order: 3
      }),
      new TextboxElement({
        key: 'duration',
        label: 'Duration',
        validator: 'number',
        value: '',
        required: false,
        order: 4
      }),
      new MultiselectElement({
        key: 'authors',
        label: 'Authors',
        value: [],
        required: true,
        options: [],
        settings: {
          text: "Please choose at least one author",
          selectAllText: 'select all',
          unSelectAllText: 'unselect all',
          classes: "angular2-multiselect angular2-multiselect-env",
          enableSearchFilter: true,
          singleSelection: false,
          disabled: false
        },
        order: 5
      })
    ];

    return elements.sort((a, b) => a.order - b.order);
  }

  onSubmit(course: CourseModel) {
    if (course.id) {
      this.coursesService.updateCourse(course.id, course)
        .subscribe((res) => {
          this.router.navigateByUrl('courses', { skipLocationChange: false });
      });
    } else {
      this.coursesService.addCourse(course)
        .subscribe((res) => {
          this.router.navigateByUrl('courses', { skipLocationChange: false });
      });
    }
  }
}
