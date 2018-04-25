import { Injectable }       from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
}                           from '@angular/router';
import { ProjectsSandbox }  from './projects.sandbox';

@Injectable()
export class ProjectsResolver implements Resolve<any> {

  private projectsSubscription;

  constructor(public projectsSandbox: ProjectsSandbox) {}

  /**
   * Triggered when application hits product details route.
   * It subscribes to product list data and finds one with id from the route params.  
   *
   * @param route
   */
  public resolve(route: ActivatedRouteSnapshot) {
    if (this.projectsSubscription) return;

    this.projectsSubscription = this.projectsSandbox.project$.subscribe(project => {
      if (!project) {
        this.projectsSandbox.loadProject(parseInt(route.params.id));
        return;
      }

      this.projectsSandbox.selectProject(project);
    });
  }
}