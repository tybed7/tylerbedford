import { Injectable }             from "@angular/core";
import { Store }      	          from '@ngrx/store';
import { Subscription }           from "rxjs";
import { Sandbox } 			          from '../shared/sandbox/base.sandbox';
import { ProjectsApiClient }      from './projectsApiClient.service';
import * as store     	          from '../shared/store';
import * as projectListActions       from '../shared/store/actions/projectList.action';
import * as projectActions from '../shared/store/actions/project.action';
import {
  Project
}                                 from '../shared/models';

@Injectable()
export class ProjectsSandbox extends Sandbox {

  public projectList$              = this.appState$.select(store.getProjectListData);
  public projectListLoading$       = this.appState$.select(store.getProjectListLoading);
  public project$        = this.appState$.select(store.getProjectData);
  public projectLoading$ = this.appState$.select(store.getProjectLoading);


  private subscriptions: Array<Subscription> = [];

  constructor(
    protected appState$: Store<store.State>,
    private projectsApiClient: ProjectsApiClient
  ) {
    super(appState$);
  }

  /**
   * Loads project list from the server
   */
  public loadProjects(): void {
    this.appState$.dispatch(new projectListActions.LoadAction())
  }

  /**
   * Loads Project from the server
   */
  public loadProject(id: number): void {
    this.appState$.dispatch(new projectActions.LoadAction(id))
  }

  /**
   * Dispatches an action to select product details
   */
  public selectProject(project: Project): void {
    this.appState$.dispatch(new projectActions.LoadSuccessAction(project))
  }

  /**
   * Unsubscribes from events
   */
  public unregisterEvents() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

 
}