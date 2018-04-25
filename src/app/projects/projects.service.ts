import {
    Injectable,
    Inject,
    forwardRef
  }                           from '@angular/core';
  import { Project }          from '../shared/models';
  import { ProjectsSandbox }  from './projects.sandbox';
  
  @Injectable()
  export class ProjectsService {
  
    private productsSubscription;
  
    /**
     * Transforms grid data products recieved from the API into array of 'Product' instances
     *
     * @param projectList
     */
    static gridAdapter(projectList: any): Array<Project> {
      return projectList.map(project => new Project(project));
    }
  
    /**
     * Transforms product details recieved from the API into instance of 'Product'
     *
     * @param project
     */
    static projectAdapter(project: any): Project {
      return new Project(project);
    }
  }