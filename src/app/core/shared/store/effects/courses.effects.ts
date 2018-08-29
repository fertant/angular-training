import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, defer, of } from 'rxjs';
import { tap, distinctUntilChanged, mergeMap, map } from 'rxjs/operators';
import { SearchAction, LoadMoreAction, CoursesActionTypes, SuccessAction } from '../actions/courses.actions';

import { CoursesService } from '../../../../pages/courses/courses-list/courses.service';

@Injectable()
export class CoursesEffects {

  @Effect({ dispatch: false })
  initState$: Observable<any> = defer(() => of(null)).pipe(
    mergeMap(action =>
      this.coursesService.getCourses(0, 3, '').pipe(
        map((data) => new SuccessAction(data)),
      )
    )
  );

  @Effect()
  searchActions$: Observable<any> = this.actions.pipe(
    ofType<SearchAction>(CoursesActionTypes.SEARCH),
    mergeMap(action =>
      this.coursesService.getCourses(0, 3, action.payload.search).pipe(
        map((data) => new SuccessAction(data)),
      )
    )
  );

  @Effect()
  pageActions$: Observable<any> = this.actions.pipe(
    ofType<SearchAction>(CoursesActionTypes.PAGE),
    mergeMap(action =>
      this.coursesService.getCourses(0, (parseInt(action.payload.page, 10) + 1) * 3, action.payload.search).pipe(
        map((data) => new SuccessAction(data)),
      )
    )
  );


  constructor(
    private actions: Actions,
    private coursesService: CoursesService
  ) {}
}
