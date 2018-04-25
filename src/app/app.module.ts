// Angular Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { 
  NgModule,
  APP_INITIALIZER
}                        from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {
  HttpModule,
  RequestOptions,
  XHRBackend,
  Http
}                        from '@angular/http'
import { Router }        from '@angular/router';

//Routes
import { AppRoutingModule }    from './app-routing.module';

//Modules
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.module';
import { UtilityModule } from './shared/utility';
import { ProjectsModule } from './projects/projects.module';

//Store
import { store }              from './shared/store';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProjectsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
