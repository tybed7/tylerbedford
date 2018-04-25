import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { ProjectComponent }        from './project.component';
import { ProjectListComponent }  from './projectList.component';
import { ProjectsResolver }         from './projects.resolver';

const projectsRoutes: Routes = [
  {
    path: 'projects',
    component: ProjectComponent,
    data: {
      name: 'product-list'
    }
  },
  {
    path: 'projects/:id',
    component: ProjectComponent,
    resolve: {
      productDetails: ProjectsResolver
    }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(projectsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectsRoutingModule { }
