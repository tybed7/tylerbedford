import { Injectable }    		from '@angular/core';
import { Sandbox }       		from './shared/sandbox/base.sandbox';
import { Store }         		from '@ngrx/store';
import * as store        		from './shared/store';

import { ConfigService } from './app-config.service';

@Injectable()
export class AppSandbox extends Sandbox {

  constructor(
  	protected appState$: Store<store.State>,
  	private configService: ConfigService
  ) {
    super(appState$);
  }

  

}