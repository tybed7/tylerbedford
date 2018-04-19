import { BrowserModule } from '@angular/platform-browser';
import { 
  NgModule,
  APP_INITIALIZER
}                        from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Router }        from '@angular/router';

//Routes
import { AppRoutingModule }    from './app-routing.module';

//Modules
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
