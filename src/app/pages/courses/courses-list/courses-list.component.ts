import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { Subject } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

import { CourseModel } from '../model/course';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnChanges {

  courses: Array<CourseModel>;
  canceledCourse: number;
  @Input() search: string;
  @Input() page: number;

  constructor(
    private coursesService: CoursesService,
    private spinner: NgxSpinnerService
  ) {
    this.courses = [];
    this.page = this.page ? this.page : 0;
    this.fetchCourses(this.page, this.search, false);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (const propName in changes) {
      if (!changes[propName].firstChange) {
        const loadMore = propName === 'page';
        if (loadMore) {
          this.page = changes[propName].currentValue;
          this.fetchCourses(this.page, this.search, loadMore);
        } else {
          this.page = 0;
          this.fetchCourses(this.page, this.search, false);
        }
      }
    }
  }

  isEmptyCourses(): boolean {
    return !this.courses.length;
  }

  onRemove(courseId: number) {
    return this.coursesService.removeCourse(courseId)
      .pipe(
        tap(() => { this.canceledCourse = courseId; }),
        switchMap((res, index) => {
          this.fetchCourses(this.page, this.search, false);
          return new Subject();
      }))
      .subscribe();
  }

  fetchCourses(offset: number, search: string, loadMore: boolean) {
    const limit = 3;
    this.coursesService.getCourses(offset, limit, search)
      .subscribe(res => {
        if (loadMore) {
          this.courses = this.courses.concat(Object.values(res));
        } else {
          this.courses = Object.values(res);
        }
        this.coursesService.setCurrentPage(offset + limit);
        this.spinner.hide();
      });
  }
}
