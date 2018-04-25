import { Injectable }       from '@angular/core';
import {
  HttpService,
  GET,
  Path,
  Adapter
}                           from '../shared/asyncServices/http';
import { Observable }       from 'rxjs/Observable';
import { ProjectsService }  from './projects.service';

@Injectable()
export class ProjectsApiClient extends HttpService {

  /**
   * Retrieves all projects
   */
  @GET("/projects")
  @Adapter(ProjectsService.gridAdapter)
  public getProjectList(): Observable<any> { return null; };

  /**
   * Retrieves project details by a given id
   * 
   * @param id
   */
  @GET("/projects/{id}")
  @Adapter(ProjectsService.projectAdapter)
  public getProject(@Path("id") id: number): Observable<any> { return null; };
}