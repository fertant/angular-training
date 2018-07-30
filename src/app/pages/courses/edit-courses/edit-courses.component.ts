import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../model/course';
import { CoursesService } from '../courses-list/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormElementBase } from '../form-elements/form-element-base';
import { TextboxElement } from '../form-elements/element-textbox';
import { TextareaElement } from '../form-elements/element-textarea';
import { DatetimeElement } from '../form-elements/element-datetime';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.scss']
})
export class EditCoursesComponent implements OnInit {

  courses: Observable <CourseModel[]>;
  courseId: number;
  elements: FormElementBase<any>[];
  options: Array <any>;
  coursesService: CoursesService;
  routerNav: Router;

  constructor(
    private service: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.routerNav = router;
    this.coursesService = service;
    route.params.subscribe(params => {
      this.courseId = params['id'];
    });
    if (this.courseId) {
      this.courses = new Observable(observer => {
        observer.next(this.coursesService.findCourseById(Number(this.courseId)));
      });
    } else {
      this.courses = new Observable(observer => {
        observer.next([new CourseModel()]);
      });
    }
    this.elements = this.extractData(new CourseModel());
    this.options = [];
  }

  ngOnInit() {
  }

  extractData(model: CourseModel) {
    const elements: FormElementBase<any>[] = [
      new TextboxElement({
        key: 'title',
        label: 'Title',
        value: '',
        required: true,
        order: 1
      }),
      new TextareaElement({
        key: 'description',
        label: 'Description',
        value: '',
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
        value: '',
        required: false,
        order: 4
      }),
      new TextboxElement({
        key: 'author',
        label: 'Author',
        value: '',
        required: false,
        order: 5
      })
    ];

    return elements.sort((a, b) => a.order - b.order);
  }

  onSubmit(course: CourseModel) {
    if (course.id) {
      this.coursesService.updateCourse(course.id, course);
    } else {
      this.coursesService.addCourse(course);
    }
    this.routerNav.navigateByUrl('courses');
  }
}
