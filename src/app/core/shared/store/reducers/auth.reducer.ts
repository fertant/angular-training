import { ActionReducer, Action } from '@ngrx/store';

export const AUTH = 'auth';
export const ANONYMOUS = 'anonymous';

export const authReducer: ActionReducer<boolean> = (
  store: boolean = false,
  action: Action
) => {
  switch (action.type) {
    case AUTH:
      return store = true;
    case ANONYMOUS:
      return store = false;
    default:
      return store;
  }
};