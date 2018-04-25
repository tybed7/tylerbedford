import { Injectable } 	    from '@angular/core';
import { Store }            from '@ngrx/store';
import { Observable }       from 'rxjs/Observable';
import * as store           from '../store';


export abstract class Sandbox {

 

  constructor(protected appState$: Store<store.State>) {}


//   /**
//    * Pulls user from local storage and saves it to the store
//    */
//   public loadUser(): void {
//     var user = JSON.parse(localStorage.getItem('currentUser'));
//     this.appState$.dispatch(new authActions.AddUserAction(new User(user)));
//   }

}