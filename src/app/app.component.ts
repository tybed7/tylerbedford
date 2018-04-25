import { Component } from '@angular/core';
import { Router }    from '@angular/router';
import { AppSandbox } from './app.sandbox';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  providers: [AppSandbox]
})
export class AppComponent {
  title = 'Tyler Bedford';
}
