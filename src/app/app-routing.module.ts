import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
// TODO Add Page not found compenent
// import { PageNotFoundComponent } from './shared/components/pageNotFound/pageNotFound.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}