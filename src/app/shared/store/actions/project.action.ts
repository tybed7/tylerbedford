import { Action }   from '@ngrx/store';
import { Project }  from '../../models';
import { type }     from '../../utility';

export const ActionTypes = {
  LOAD:         type('[Project Details] Load'),
  LOAD_SUCCESS: type('[Project Details] Load Success'),
  LOAD_FAIL:    type('[Project Details] Load Fail')
};

/**
 * Project Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: number = null) { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Project) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any = null) { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | LoadFailAction;