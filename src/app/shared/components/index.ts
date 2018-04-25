import { NgModule }                     from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
}                                       from '@angular/forms';
import { RouterModule }                 from '@angular/router';
import { CommonModule }                 from '@angular/common';




import { PageNotFoundComponent }        from './pageNotFound/pageNotFound.component';
import { TabsComponent }                from './tabs/tabs.component';

export const COMPONENTS = [
  PageNotFoundComponent,
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