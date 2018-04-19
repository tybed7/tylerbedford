import { Injectable }    		from '@angular/core';
import { Sandbox }       		from './shared/sandbox/base.sandbox';
import { Store }         		from '@ngrx/store';
import * as store        		from './shared/store';
import * as settingsActions from './shared/store/actions/settings.action';

@Injectable()
export class AppSandbox extends Sandbox {

  constructor(
  	protected appState$: Store<store.State>,
  	//TODO add config service
  ) {
    super(appState$);
  }

  

}