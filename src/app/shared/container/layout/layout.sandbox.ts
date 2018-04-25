import { Injectable } 	     from '@angular/core';
import { Router }            from '@angular/router';
import { Sandbox } 			     from '../../sandbox/base.sandbox';
import { Store }      	     from '@ngrx/store';
import * as store     	     from '../../store';

@Injectable()
export class LayoutSandbox extends Sandbox {


  constructor(
    protected appState$: Store<store.State>,
    private router: Router
  ) {
  	super(appState$);
  }

 
}