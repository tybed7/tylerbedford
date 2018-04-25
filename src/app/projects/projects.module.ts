import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { BrowserModule }            from "@angular/platform-browser";
import {
  ReactiveFormsModule,
  NG_VALIDATORS,
  FormControl
}                                   from "@angular/forms";
import { RouterModule }             from '@angular/router';
import { ProjectsRoutingModule }    from './projects-routing.module';
import { ProjectListComponent }     from './projectList.component';
import { ProjectComponent }         from './project.component';
import { ProjectsSandbox }          from './projects.sandbox';
import { ProjectsApiClient }        from './projectsApiClient.service';
import { ProjectsService }          from './projects.service';
import { ProjectsResolver }         from './projects.resolver';

import { ComponentsModule }         from '../shared/components';
import { ContainersModule }         from '../shared/container';