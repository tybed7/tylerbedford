import { NgModule }                     from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
}                                       from '@angular/forms';
import { RouterModule }                 from '@angular/router';
import { CommonModule }                 from '@angular/common';



import { AboutMeComponent }             from './aboutMe/aboutMe.compenent';
import { PageNotFoundComponent }        from './pageNotFound/pageNotFound.component';
import { ProjectComponent }             from './project/project.component';
import { ProjectListComponent }             from './projectList/projectList.component';
import { TabsComponent }                from './tabs/tabs.component';

export const COMPONENTS = [
  AboutMeComponent,
  PageNotFoundComponent,
  ProjectComponent,
  ProjectListComponent,
  TabsComponent
];

@NgModule({
  imports: [
    RouterModule,
  	FormsModule,
  	ReactiveFormsModule,
  	CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }