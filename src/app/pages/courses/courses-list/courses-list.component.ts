import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Actions, ofType } from '@ngrx/effects';
import { SuccessAction, CoursesActionTypes } from '../../../core/shared/store/actions/courses.actions';
import { Store } from '@ngrx/store';

import { CourseModel } from '../model/course';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {

  courses: Array<CourseModel>;
  canceledCourse: number;

  constructor(
    private coursesService: CoursesService,
    private spinner: NgxSpinnerService,
    private actions: Actions,
    private store: Store<any>
  ) {
    this.courses = [];
    actions.pipe(
      ofType(CoursesActionTypes.SUCCESS)
    ).subscribe((state: SuccessAction) => {
      this.courses = Object.values(state.payload);
      this.spinner.hide();
    });
  }

  isEmptyCourses(): boolean {
    return !this.courses.length;
  }

  onRemove(courseId: number) {
    return this.coursesService.removeCourse(courseId)
      .pipe(
        tap(() => {
          this.canceledCourse = courseId;
          this.store.dispatch({
            type: CoursesActionTypes.SEARCH,
            payload: {
              search: this.coursesService.getSearchQuery(),
              page: this.coursesService.getCurrentPage()
            }
          });
        }),
      )
      .subscribe();
  }
}
