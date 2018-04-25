import { createSelector } from 'reselect';
/**
 * More info: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { ActionReducer, combineReducers } from '@ngrx/store';

/**
 * More info: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromProject       from './reducers/project.reducer';
import * as fromProjectList  from './reducers/projectList.reducer';

/**
 * We treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  project:       fromProject.State;
  projectList:   fromProjectList.State;
}

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
const reducers = {
  project:       fromProject.reducer,
  projectList:   fromProjectList.reducer
};

export function store(state: any, action: any) {
  const store: ActionReducer<State> = compose(combineReducers, reducers);
  return store(state, action);
}


//Project store functions
export const getProjectState = (state: State) => state.project;
export const getProjectLoaded  = createSelector(getProjectState, fromProject.getLoaded);
export const getProjectLoading = createSelector(getProjectState, fromProject.getLoading);
export const getProjectFailed  = createSelector(getProjectState, fromProject.getFailed);
export const getProjectData    = createSelector(getProjectState, fromProject.getData);

//Project List store functions
export const getProjectListState = (state: State) => state.projectList;
export const getProjectListLoaded  = createSelector(getProjectListState, fromProjectList.getLoaded);
export const getProjectListLoading = createSelector(getProjectListState, fromProjectList.getLoading);
export const getProjectListFailed  = createSelector(getProjectListState, fromProjectList.getFailed);
export const getProjectListData    = createSelector(getProjectListState, fromProjectList.getData);