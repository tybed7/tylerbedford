import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable }             from '@angular/core';
import { Effect, Actions }        from '@ngrx/effects';
import { Action }                 from '@ngrx/store';
import { Observable }             from 'rxjs/Observable';
import { of }                     from 'rxjs/observable/of';
import { ProjectsApiClient }      from '../../../projects/projectsApiClient.service';
import * as projectActions      from '../actions/project.action';
import * as projectListActions from '../actions/projectList.action';
import { Store }                  from '@ngrx/store';
import * as store                 from '../index';
import { Project }                from '../../models';

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application. StateUpdates is an observable of the latest state and
 * dispatched action. The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class ProjectsEffects {

  constructor(
    private actions$: Actions,
    private projectsApiClient: ProjectsApiClient,
    private appState$: Store<store.State>) {}

  /**
   * Project list
   */
  @Effect()
  getProjects$: Observable<Action> = this.actions$
    .ofType(projectListActions.ActionTypes.LOAD)
    .map((action: projectListActions.LoadAction) => action.payload)
    .switchMap(state => {
      return this.projectsApiClient.getProjectList()
        .map(projects => new projectListActions.LoadSuccessAction(projects))
        .catch(error  => of(new projectListActions.LoadFailAction()));
    });

  /**
   * Project details
   */
  @Effect()
  getProject$: Observable<Action> = this.actions$
    .ofType(projectActions.ActionTypes.LOAD)
    .map((action: projectActions.LoadAction) => action.payload)
    .switchMap(state => {
      return this.projectsApiClient.getProject(state)
        .map(projects => new projectActions.LoadSuccessAction(projects))
        .catch(error  => of(new projectActions.LoadFailAction()));
    });
}