import { ActionReducerMap, Action } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

export const AUTH = 'auth';
export const ANONYMOUS = 'anonymous';

export function authReducer(
  store: boolean = false,
  action: Action
): boolean {
  switch (action.type) {
    case AUTH:
      return store = true;
    case ANONYMOUS:
      return store = false;
    default:
      return store;
  }
}

export const reducers: ActionReducerMap<any> = {
  auth: authReducer,
  router: routerReducer
};
