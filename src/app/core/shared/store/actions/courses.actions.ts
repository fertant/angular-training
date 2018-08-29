import { Action } from '@ngrx/store';

export enum CoursesActionTypes {
  SEARCH = '[Courses] search',
  PAGE = '[Courses] load more',
  SUCCESS = '[Courses] search success',
}

export class SearchAction implements Action {
 readonly type = CoursesActionTypes.SEARCH;
  constructor(public payload: any) { }
}

export class LoadMoreAction implements Action {
  readonly type = CoursesActionTypes.PAGE;
  constructor(public payload: any) { }
}

export class SuccessAction implements Action {
  readonly type = CoursesActionTypes.SUCCESS;
  constructor(public payload: any) { }
}

export type CoursesActionsUnion = SearchAction | LoadMoreAction | SuccessAction;
