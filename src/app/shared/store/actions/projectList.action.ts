import { Action }   from '@ngrx/store';
import { Project }  from '../../models';
import { type }     from '../../utility';

export const ActionTypes = {
  LOAD:         type('[Projects] Load'),
  LOAD_SUCCESS: type('[Projects] Load Success'),
  LOAD_FAIL:    type('[Projects] Load Fail')
};

/**
 * Project Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: any = null) { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Array<Product>) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any = null) { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | LoadFailAction;